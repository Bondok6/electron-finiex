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
  RecordDetails: null,
  singleRecordDetails: null,
  calculateNow: false,
  disable: true,
  exclusionDetails: null,
  exclusionRecords: [],
  exclusionRecord: {}
});

export const mutations = {
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
  setRecords(state, payload) {
    state.records = payload;
  },
  calculateNow(state, payload) {
    state.calculateNow = payload;
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = payload;
  },
  isDisabled(state, payload) {
    state.disable = payload;
  },
  setExclusionDetails(state, payload) {
    state.exclusionDetails = payload;
  },
  setExclusionRecord(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.exclusionRecord = { ...state.exclusionRecord, ...payload };
    } else {
      state.exclusionRecord = {};
    }
  }
};

export const actions = {
  suggestCode() {
    return this.$axios("accounting/card-fixed-assets/suggest-code");
  },
  async fetchRecords(
    { commit },
    { pageNumber = 1, SearchString = "", pageSize = 10 }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `accounting/card-fixed-assets/list?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchString=${SearchString}`;
      let response = await this.$axios.get(API);

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
      return e.response;
    }
  },

  fetchSingleRecord({ commit }, id) {
    return this.$axios
      .get(`accounting/card-fixed-assets/${id}`)
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("isDisabled", data.isDone);
          commit("setSingleRecordDetails", {
            ...data
          });
        }
      });
  },

  create({ commit, state }) {
    let record = state.RecordDetails;
    return this.$axios.post(
      "accounting/card-fixed-assets",
      JSON.stringify(record)
    );
  },
  delete({ state }, id) {
    return this.$axios.delete(`accounting/card-fixed-assets/${id}`);
  },
  update({ state }) {
    let record = state.RecordDetails;
    return this.$axios.put(
      "accounting/card-fixed-assets",
      JSON.stringify(record)
    );
  },
  getSingleExclusion({ commit }, { id, exclusionDate }) {
    return this.$axios
      .get(
        `accounting/card-fixed-assets/exclude?Id=${id}&ExclusionDate=${exclusionDate}`
      )
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setExclusionDetails", {
            ...data
          });
        }
      });
  },
  createExclusion({ state }) {
    let record = state.exclusionRecord;
    return this.$axios.post(
      "accounting/card-fixed-assets/exclude",
      JSON.stringify(record)
    );
  }
};
