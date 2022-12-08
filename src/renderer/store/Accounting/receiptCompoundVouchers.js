export const state = () => ({
  records: [],
  paginationConfig: {
    totalPages: 0,
    totalRecords: 0,
    pageNumber: 1,
    hasPreviousPage: false,
    hasNextPage: true,
    pageSize: 10
  },
  RecordDetails: {},
  singleRecordDetails: null,
  listInvoices: [],
  banksOrFundsSelected: ""
});

export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },

  setRecordDetails(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.RecordDetails = { ...state.RecordDetails, ...payload };
    } else {
      state.RecordDetails = {};
    }
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = payload;
  },
  setListInvoices(state, payload) {
    state.listInvoices = payload;
  },
  banksOrFundsSelected(state, payload) {
    state.banksOrFundsSelected = payload;
  }
};

export const actions = {
  suggestVoucher({ commit }) {
    return this.$axios("accounting/receipt-vouchers/suggest");
  },
  async fetchRecords(
    { commit, state },
    { pageNumber = 1, SearchString = "", pageSize = 10 }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `accounting/receipt-vouchers/list?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchString=${SearchString}`;
      let response = await this.$axios.get(API);

      let data = response.data;
      commit("setRecords", data.data);
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
    } catch (e) {
      return e.response;
    }
  },

  // special casre
  getBalance(_, { Id }) {
    console.log("iddd333", { Id });

    return this.$axios.get(`accounting/account-card/current-balance/${Id}`);
  },
  create({ commit, state }) {
    let record = state.RecordDetails;
    return this.$axios.post(
      "accounting/receipt-vouchers",
      JSON.stringify(record)
    );
  },
  update({ commit, state }) {
    let record = state.RecordDetails;
    console.log("record", record);
    return this.$axios.put(
      "accounting/receipt-vouchers",
      JSON.stringify(record)
    );
  },
  delete(_, { id }) {
    return this.$axios.delete(`accounting/receipt-vouchers/${id}`);
  },
  fetchSingleRecord({ commit }, id) {
    return this.$axios
      .get(`accounting/receipt-vouchers/${id}`)
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setSingleRecordDetails", {
            ...data,
            total: data.voucherDetailsList.reduce(
              (acc, cur) => acc + Number(cur.voucherAmount),
              0
            )
          });
          return response;
        }
      })
      .catch(e => {
        // commit global state to show error message With get Request
      });
  },
  async getInvoiceNumber({ commit }, { id }) {
    try {
      let response = await this.$axios.get(
        `general/invoices/customer-voucher-by-acc?AccId=${id}`
      );
      let data = response.data.data;
      commit("setListInvoices", data);
    } catch (e) {
      return e.response.data.message;
    }
  }
};
