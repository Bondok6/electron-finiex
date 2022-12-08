export const state = () => ({
  records: [],
  searchParams: {},
  paginationConfig: {},
  recordDetails: {},
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
    state.recordDetails = {...state.recordDetails,...payload}
    console.log(state.recordDetails);
  }
};

export const actions = {
  async fetchRecords({ commit }, searchParams = {}) {
    // show loading layer
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/customers/paginated?`;
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
    return this.$axios.get(`general/customers/${id}`).then(response => {
      let data = response.data.data;
      commit("setSingleRecordDetails", {
        ...data
      });
    });
  },
  create({state}) {
    let payload = JSON.stringify(state.recordDetails);
    console.log(payload);
    return this.$axios.post(`general/customers`, payload);
  },
  fetchMaxCode() {
    return this.$axios.get(`general/customers/max-code`);
  },
  update({state}) {
    let payload = JSON.stringify(state.recordDetails);
    return this.$axios.put(`general/customers`, payload);
  },
  delete(_, {id }) {
    return this.$axios.delete(`general/customers/${id}`);
  }
};
