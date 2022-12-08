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
  banksOrFundsSelected: "",
  invoicesList: null,
  distributionStatus: {}
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
  banksOrFundsSelected(state, payload) {
    state.banksOrFundsSelected = payload;
  },
  setInvoicesList(state, payload) {
    state.invoicesList = payload;
  },
  changeDistributionStatus(state, payload) {
    state.distributionStatus = payload;
  }
};

export const actions = {
  suggestVoucher({ commit }) {
    return this.$axios("accounting/supplier-vouchers/suggest");
  },
  async fetchRecords(
    { commit, state },
    { pageNumber = 1, SearchString = "", pageSize = 10 }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `accounting/supplier-vouchers/list?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchString=${SearchString}`;
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
      return e.response.data.message;
    }
  },
  async getInvoicesList({ commit }, { Id , providerId }) {
    try {
      let response = await this.$axios.get(
        `general/invoices/supplier-voucher-by-acc?AccId=${Id}&providerId=${providerId}`
      );
      let data = response.data.data;
      commit("setInvoicesList", data);
      return response;
    } catch (e) {
      return e.response.data.message;
    }
  },
  fetchSingleRecord({ commit }, id) {
    return this.$axios
      .get(`accounting/supplier-vouchers/${id}`)
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
        }
      });
  },
  create({ commit, state }) {
    let record = state.RecordDetails;
    console.log( " state record create " ,record )
    return this.$axios.post(
      "accounting/supplier-vouchers",
      JSON.stringify(record)
    );
  },
  delete(_, { id }) {
    return this.$axios.delete(`accounting/customer-vouchers/${id}`);
  },
  update({ commit, state }) {
    let record = state.RecordDetails;
    return this.$axios.put(
      "accounting/supplier-vouchers",
      JSON.stringify(record)
    );
  },
  getSingleSupplierInvoice({ commit }, { AccID, InvoiceID }) {
    return this.$axios.get(
      `ageneral/invoices/supplier-single?AccID=${AccID}&InvoiceID=${InvoiceID}`
    );
  }
};
