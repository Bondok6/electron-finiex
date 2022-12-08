export const state = () => ({
  records: [],
  paginationConfig: {},
  searchParams: {},
  jobsList: []
});
export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setSearchParams(state, payload) {
    state.searchParams = payload;
  },
  setJobsList(state, payload) {
    state.jobsList = payload;
  }
};
export const actions = {
  suggestCode() {
    return this.$axios("general/employees/max-code");
  },
  async fetchRecords({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/employees/paginated?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
      // to send user to same page after edit
      commit("setSearchParams", searchParams);
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
  async getJobs({ commit }, searchParams = {}) {
    try {
      let API = `general/employees/jobs?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setJobsList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  create(_, payload) {
    let record = new FormData();
    for (let key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key].forEach(item => {
          record.append(`${key}[]`, item);
        });
      } else {
        record.append(key, payload[key]);
      }
    }
    return this.$axios.post("general/employees", record);
  },
  update(_, payload) {
    let record = new FormData();
    for (let key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key].forEach(item => {
          record.append(`${key}[]`, item);
        });
      } else {
        record.append(key, payload[key]);
      }
    }
    return this.$axios.put("general/employees", record);
  },
  delete(_, { id }) {
    return this.$axios.delete(`general/employees/${id}`);
  },
  fetchSingleRecord({ commit }, { id }) {
    return this.$axios.get(`general/employees/${id}`);
  }
};
