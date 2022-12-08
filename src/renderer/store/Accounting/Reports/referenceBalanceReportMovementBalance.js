export const state = () => ({
  records: [],
  RecordDetails: {},
  recordsInfo: []
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
  setRecordsInfo(state, payload) {
    state.recordsInfo = payload;
  }
};

export const actions = {
  async fetchRecords({ commit, state }) {
    this.commit("loaded", false, { root: true });
    let record = state.RecordDetails;
    try {
      let API = "accounting/reports/reference-balance-report-movement-balance?";
      let recordEntries = Object.entries(record);

      recordEntries.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${recordEntries.length - 1 == index ? "" : "&"}`
            : "";
      });
      let response = await this.$axios.get(API);
      let data = response.data.data;
      commit("setRecords", data.slice(0, -1));
      commit("setRecordsInfo", data.slice(-1));
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
      return response;
    } catch (e) {
      return e.response.data.message;
    }
  }
};
