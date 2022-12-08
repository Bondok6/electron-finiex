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
  PriceColumn: {
    openingCost: 0,
    lastPurchasePrice: 1,
    costPrice: 2,
    wholesalePrice: 3,
    lowestSalePrice: 4,
    salePriceBeforeTax: 5
  },
  recordDetails: {},
  singleRecordDetails: {}
});

export const mutations = {
  setRecords(state, val) {
    state.records = val;
  },
  setPaginationConfig(state, val) {
    state.paginationConfig = val;
  },
  setRecordDetails(state, val) {
    if (Object.keys(val).length === 0) {
      state.recordDetails = { ...val };
    } else {
      state.recordDetails = { ...state.recordDetails, ...val };
    }
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = { ...payload };
  }
};

export const actions = {
  async fetchRecords({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = "inventory/stockexchange/list";
      let response = await this.$axios.get(API, { params: searchParams });
      let data = response.data;
      commit("setRecords", data.data);
      commit("setPaginationConfig", {
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
      console.log(e);
    }
  },
  fetchMaxCode() {
    return this.$axios.get(`inventory/stockexchange/newinvoiceid`);
  },
  fetchItemDetails(_, id) {
    return this.$axios.get(`general/items/itemid?Id=${id}`);
  },
  create({ state }) {
    let data = JSON.stringify(state.recordDetails);
    console.log(state.recordDetails);
    return this.$axios.post("inventory/stockexchange/create", data);
  },
  async editSingleRecordDetails({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      const res = await this.$axios.get(`inventory/stockexchange/get`, {
        params: searchParams
      });
      const data = res.data.data;
      console.log("data", data);
      commit("setSingleRecordDetails", data);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      console.log(e);
    }
  },
  update({ state }) {
    let data = JSON.stringify(state.recordDetails);
    console.log(state.recordDetails);
    return this.$axios.put("inventory/stockexchange/update", data);
  },
  delete(_, code) {
    return this.$axios.delete(
      `inventory/stockexchange/remove?invoiceCode=${code}`
    );
  }
};
