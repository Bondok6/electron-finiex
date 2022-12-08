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
  recordDetails: {},
  singleRecordDetails: {},
  hidePrice: null,
})

export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  setPaginationConfig(state, payload) {
    state.paginationConfig = payload;
  },
  setRecordDetails(state, payload) {
    if (Object.keys(payload).length === 0) {
      state.recordDetails = { ...payload }
    } else {
      state.recordDetails = { ...state.recordDetails, ...payload };
    }
  },
  setSingleRecordDetails(state, payload) {
    if (Object.keys(payload).length === 0) {
      state.singleRecordDetails = { ...payload };
    } else {
      state.singleRecordDetails = { ...payload };
    }
  },
  setHidePrice(state, payload) {
    state.hidePrice = payload ;
  }
}

export const actions = {
  async fetchRecords(
    { commit },
    searchParams = {}
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = 'inventory/receipt-branches/list'
      let response = await this.$axios.get(API, { params: searchParams })
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
      this.$message.error(e.message);
    }
  },
  fetchMaxCode() {
    return this.$axios.get("inventory/receipt-branches/max-id");
  },
  fetchCurrentBranch() {
    return this.$axios.get("inventory/receipt-branches/current-branch");
  },
  async fetchHidePrice({ commit }) {
    this.commit("loaded", false, { root: true });
    try {
      const res = await this.$axios.get(`inventory/receipt-branches/hide-price`);
      const data = res.data.data;
      commit("setHidePrice", data )
      this.commit("loaded", true, { root: true });
      return res.data.message
    } catch (e) {
      this.$message.error(e.message);
    }
  },
  async fetchSingleRecordDetails({ commit, state}, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      const res = await this.$axios.get(`inventory/receipt-branches/get-transfer-branches-to-receipt`, { params: searchParams });
      const data = res.data.data;
      commit("setSingleRecordDetails", data ?? 
      { invoiceId: state.recordDetails.invoiceId ?? null,
        fromWarehouseId: state.recordDetails.fromWarehouseId ?? null,
        fromBrancheId: state.recordDetails.fromBrancheId ?? null});
      this.commit("loaded", true, { root: true });
      return res.data.message
    } catch (e) {
      this.$message.error(e.message);
    }
  },
  create({ state }) {
    let data = JSON.stringify(state.recordDetails);
    return this.$axios.post("inventory/receipt-branches/new", data);
  },
  async editSingleRecordDetails({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      const res = await this.$axios.get(`inventory/receipt-branches/details`, { params: searchParams });
      const data = res.data.data;
      commit("setSingleRecordDetails", data);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      console.log(e)
    }
  },
  update({ state }) {
    let data = JSON.stringify(state.recordDetails);
    return this.$axios.put("inventory/receipt-branches/edit", data);
  },
  delete(_, code) {
    return this.$axios.delete(`inventory/receipt-branches/delete?InvoiceCode=${code}`);
  },
}