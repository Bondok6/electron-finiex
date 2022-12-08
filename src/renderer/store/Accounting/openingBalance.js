export const state = () => ({
  records: null,
  totals: {totalCredit: 0, totalDebit: 0},
  paginationConfig: {},
  RecordDetails: {},
  recordsWillEdit: [],
  enableEdit: false,
  tableInfo: {}
});

export const mutations = {
  setRecords(state, payload) {
    state.records = payload.map(item => {
      return {
        ...item,
        // When update value ->  if credit and debit is notEqual and show alert to user and not accept the value to update ==> reset value to old value
        // ** cache Value **
        creditValue: item.startCredit,
        debitValue: item.startDebit
      };
    });
    state.tableInfo = {
      totalDebit: payload.reduce((total, item) => {
        return total + Number(item.startDebit);
      }, 0),

      totalCredit: payload.reduce((total, item) => {
        return total + Number(item.startCredit);
      }, 0)
    };
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setTotals(state, payload) {
    state.totals = payload
  },
  setRecordsWillEdit(state, payload) {
    if (Object.keys(payload).length > 0) {
      const oldRecord = state.records.filter( x => x.id == payload.id)[0]
      const oldCredit = oldRecord.creditValue
      const oldDebit = oldRecord.debitValue
      const newPayload = { ...payload, oldCredit, oldDebit };
      if (state.recordsWillEdit.length == 0) {
        state.recordsWillEdit = [newPayload];
      } else {
        if (state.recordsWillEdit.some(item => item.id == payload.id)) {
          state.recordsWillEdit = state.recordsWillEdit
            .filter(item => item.id != payload.id)
            .concat([newPayload]);
        } else {
          state.recordsWillEdit = [...state.recordsWillEdit, newPayload];
        }
      }
    } else {
      state.recordsWillEdit = [];
    }
  },
  setRecordDetails(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.RecordDetails = { ...state.RecordDetails, ...payload };
    } else {
      state.RecordDetails = {};
    }
  },
  setEdit(state, payload) {
    state.enableEdit = payload;
  }
};

export const actions = {
  async fetchRecords({ commit, state }, payload) {
    this.commit("loaded", false, { root: true });
    // let record = { ...payload };
    console.log({ ...payload });
    // let record =  state.RecordDetails;
    try {
      let API = "accounting/opening-balances/details-list";
      let response = await this.$axios.get(API, {params: payload});
      let data = response.data;
      commit("setRecords", data.data);
      commit("setTotals", data.meta);
      commit("paginationConfig", {
        totalPages: data.totalPages,
        totalRecords: data.totalCount,
        pageNumber: data.currentPage,
        hasPreviousPage: data.hasPreviousPage,
        hasNextPage: data.hasNextPage,
        pageSize: data.pageSize
      });
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
      return response;
    } catch (e) {
          return e.response.data.message;

    }
  },
  update({ commit, state }) {
    let payload = {
      accountBalances: state.recordsWillEdit.filter(item => {
        for (let record of state.records) {
          if (
            record.id === item.id &&
            (record.startDebit != item.startDebit ||
              record.startCredit != item.startCredit ||
              new Date(record.dateGr).getTime() !=
                new Date(item.dateGr).getTime())
          ) {
            return true;
          }
        }
        return false;
      })
    };
    return this.$axios.put(
      "accounting/opening-balances",
      JSON.stringify(payload)
    );
  }
};
