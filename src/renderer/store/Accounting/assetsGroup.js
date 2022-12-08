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
  recordDetails: null
});

export const mutations = {
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },

  setRecordDetails(state, payload) {
    state.recordDetails = { ...payload };
  },
  setRecords(state, payload) {
    state.records = payload;
  }
};

export const actions = {
  suggestCode() {
    return this.$axios("general/fixed-assets-groups/suggest-code");
  },
  async fetchRecords(
    { commit },
    { pageNumber = 1, SearchString = "", pageSize = 10 }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/fixed-assets-groups/list?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchString=${SearchString}`;
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
      return e.response.data.message;
    }
  },

  create({ state }) {
    let record = new FormData();
    for (let key in state.recordDetails) {
      record.append(key, state.recordDetails[key]);
    }
    // return response to handle it from inside cmp
    return this.$axios.post("general/fixed-assets-groups", record);
  },
  update({ state }) {
    let record = new FormData();
    for (let key in state.recordDetails) {
      record.append(key, state.recordDetails[key]);
    }
    return this.$axios.put("general/fixed-assets-groups", record);
  },
  delete({ state }) {
    let id = state.recordDetails.GroupCode;
    return this.$axios.delete(`general/fixed-assets-groups/${id}`);
  }
};
