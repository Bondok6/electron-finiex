export const state = () => ({
  records: [],
  paginationConfig: {},
  searchParams: {},
  recordDetails: {},
  selectedUnit: null,
  userUnitsSelectedList : []
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
  setRecordDetails(state, payload) {
    state.recordDetails = { ...state.recordDetails, ...payload };
    console.log(state.recordDetails);
  },
  userSelectUnit(state, unit) {
    state.selectedUnit = unit;
  },
  setUserUnitsSelectedList(state,units){
    state.userUnitsSelectedList = [...units]
  }
};
export const actions = {
  async fetchRecords({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/items/list?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
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
  create({state}){

    let payload = JSON.stringify(state.recordDetails)
    return this.$axios.post("general/items", payload)
  }
};
