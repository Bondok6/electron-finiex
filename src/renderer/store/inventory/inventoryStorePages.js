export const state = () => ({
  records: null,
  paginationConfig: {},
  recordFilters: {},
  updateExpireDate: []
});

export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setRecordFilters(state, payload) {
    state.recordFilters = { ...state.recordFilters, ...payload };
  },
  setUpdateExpireDate(state, payload) {
    state.updateExpireDate = payload;
  }
};

export const actions = {
  async fetchRecords({ commit, state }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = "inventory/update-expire-dates/list";
      let params = { ...state.recordFilters, ...searchParams };
      let response = await this.$axios.get(API, { params });
      let data = response.data;
      commit("setRecords", data.data);
      commit("paginationConfig", {
        totalRecords: data.totalCount,
        pageNumber: data.currentPage,
        pageSize: data.pageSize
      });
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      return e.response.data.message;
    }
  }
};
