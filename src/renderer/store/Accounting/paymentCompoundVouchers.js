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
  purchasesList: [],
  RecordDetails: {},
  singleRecordDetails: null,
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
    if (payload.clean) {
      state.RecordDetails = payload;
    } else {
      state.RecordDetails = { ...state.RecordDetails, ...payload };
    }
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = payload;
  },
  getPurchasesList(state, payload) {
    state.purchasesList = payload;
  },
  banksOrFundsSelected(state, payload) {
    state.banksOrFundsSelected = payload;
  }
};

export const actions = {
  suggestVoucher() {
    return this.$axios("accounting/payment-vouchers/suggest");
  },
  async fetchRecords(
    { commit, state },
    { pageNumber = 1, SearchString = "", pageSize = 10 }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `accounting/payment-vouchers/list?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchString=${SearchString}`;
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
  async fetchRecordsByName({ commit }, { pageNumber, SearchString }) {
    this.commit("loaded", false, { root: true });
    try {
      let response = await this.$axios.get(
        `accounting/payment-vouchers/list?PageNumber=${pageNumber}&SearchString=${SearchString}`
      );
      if (response.status == 200) {
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
        this.commit("loaded", true, { root: true });
      }
    } catch (e) {
      return e.response;
    }
  },
  // special casre
  getBalance(_, { Id }) {
    console.log("iddd2",{Id})

    return this.$axios.get(`accounting/account-card/current-balance/${Id}`);
  },
  create({ commit, state }) {
    console.log(state.RecordDetails);
    let record = state.RecordDetails;
    return this.$axios.post(
      "accounting/payment-vouchers",
      JSON.stringify(record)
    );
  },
  update({ commit, state }) {
    let record = state.RecordDetails;
    return this.$axios.put(
      "accounting/payment-vouchers",
      JSON.stringify(record)
    );
  },
  delete(_, { id }) {
    return this.$axios.delete(`accounting/payment-vouchers/${id}`);
  },
  fetchSingleRecord({ commit }, id) {
    return this.$axios
      .get(`accounting/payment-vouchers/${id}`)
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setSingleRecordDetails", {
            ...data,
            total: data.voucherDetailsList.reduce(
              (acc, cur) => acc + Number(cur.overallTotal),
              0
            )
          });
        }
      });
  },
  async getPurchasesList({ commit }, { id }) {
    try {
      let response = await this.$axios.get(
        `general/invoices/supplier-voucher-by-acc?AccId=${id}`
      );
      let data = response.data.data;
      commit("getPurchasesList", data);
    } catch (e) {
      return e.response;
    }
  }
};
