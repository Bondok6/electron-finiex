export const state = () => ({
  records: [],
  searchParams: {},
  paginationConfig: {},
  recordDetails: null,
  singleRecordDetails: null,

});

export const mutations = {
  setRecords(state, records) {
    state.records = records;
  },

  paginationConfig(state, paginationConfig) {
    state.paginationConfig = paginationConfig;
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = payload;
  },
  setRecordDetails(state, payload) {
    state.recordDetails = payload;
  }

};

export const actions = {
  async fetchRecords({ commit }, searchParams = {}) {
    // show loading layer
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/qitaf-customers/paginated?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
      // to send user to same page after edit
      let response = await this.$axios.get(API);
      let {
        data,
        totalPages,
        totalCount,
        currentPage,
        hasPreviousPage,
        hasNextPage,
        pageSize
      } = response.data;
      commit("setRecords", data);
      commit("paginationConfig", {
        totalPages: totalPages,
        totalRecords: totalCount,
        pageNumber: currentPage,
        hasPreviousPage: hasPreviousPage,
        hasNextPage: hasNextPage,
        pageSize: pageSize
      });
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      return e.response;
    }
  },
  fetchSingleRecord({commit},  id ) {
    return this.$axios.get(`general/qitaf-customers/${id}`).then(response => {
      let data = response.data.data;
      commit("setSingleRecordDetails", {
        ...data
      });
    });
  },
  create({state}) {
    let JOSN = JSON.stringify(state.recordDetails);
    console.log(JOSN);
    return this.$axios.post(`general/qitaf-customers`, JOSN);
  },
  fetchMaxCode() {
    return this.$axios.get(`general/qitaf-customers/max-code`);
  },
  update({state}) {
    let JOSN = JSON.stringify(state.recordDetails);
    return this.$axios.put(`general/qitaf-customers`, JOSN);
  },
  delete(_, {id }) {
    return this.$axios.delete(`general/qitaf-customers/${id}`);
  }
};
