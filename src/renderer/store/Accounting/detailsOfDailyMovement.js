export const state = () => ({
  records: [],
  RecordDetails: {},
  paginationConfig: {}
});

export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  setRecordDetails(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.RecordDetails = { ...state.RecordDetails, ...payload };
    } else {
      state.RecordDetails = {};
    }
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  }
};

export const actions = {
  async fetchRecords({ commit, state }, payload) {
    this.commit("loaded", false, { root: true });
    let record = { ...state.RecordDetails, ...payload };
    try {
      let API = "accounting/search-journal-entry?";
      let recordEntries = Object.entries(record);

      recordEntries.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${recordEntries.length - 1 == index ? "" : "&"}`
            : "";
      });
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
      return response;
    } catch (e) {
            return e.response;
    }
  }
};
