export const state = () => ({
  records: [],
  RecordDetails: {},
  infoRecords: {}
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
  setInfoRecords(state, payload) {
    state.infoRecords = payload;
  }
};

export const actions = {
  async fetchRecords({ commit, state }) {
    this.commit("loaded", false, { root: true });
    let record = state.RecordDetails;
    try {
      let API = "accounting/reports/bank-fund-movements?";
      let recordEntries = Object.entries(record);

      recordEntries.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${recordEntries.length - 1 == index ? "" : "&"}`
            : "";
      });
      let response = await this.$axios.get(API);
      let data = response.data.data;

      commit("setRecords", data);
      commit("setInfoRecords", response.data.meta);
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
      return response;
    } catch (e) {
           return e.response;

    }
  }
};
