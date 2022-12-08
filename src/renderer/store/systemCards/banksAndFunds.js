export const state = () => ({
  records: [],
  paginationConfig: {},
  searchParams: {}
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
  }
};
export const actions = {
  async fetchRecords({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/banks-funds/paginated?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
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
  create(_, payload) {

    return this.$axios.post("general/banks-funds", JSON.stringify(payload));
  },
  update(_, payload) {
    return this.$axios.put("general/banks-funds", JSON.stringify(payload));
  },
  delete(_, { id }) {
    return this.$axios.delete(`general/banks-funds/${id}`);
  },
  fetchSingleRecord({ commit }, { id }) {
    return this.$axios.get(`general/banks-funds/${id}`);
  },
  suggestCode(){
    return this.$axios.get("general/banks-funds/max-code")
  },
  maxAccId(){
    return this.$axios.get("general/banks-funds/max-accid")
  }
};
