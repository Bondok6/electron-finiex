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
  recordDetails: {},
  singleRecordDetails: null,
})

export const mutations = {
  setRecords(state, val){
    state.records = val;
  },
  setPaginationConfig(state, val){
    state.paginationConfig = val;
  },
  setRecordPerPage(state, val){
    state.paginationConfig.pageSize = val;
  },
  setRecordDetails(state, payload) {
    state.recordDetails = {...state.recordDetails,...payload};
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = {...payload}
  }
}

export const actions = {
  async fetchRecords(
    { commit },
    searchParams= {}
  ){
    this.commit("loaded", false, { root: true });
    try {
      let API = 'general/providers/paginated'
      let response = await this.$axios.get(API, {params: searchParams})
      let data = response.data;
      commit("setRecords", data.data);
      commit("setPaginationConfig", {
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
  fetchMaxCode() {
    return this.$axios.get("/general/providers/max-code");
  },
  create({state}){
    const Data = JSON.stringify(state.recordDetails);
    return this.$axios.post("general/providers", Data);
  },
  async fetchSingleRecord({ commit }, id) {
    const res = await this.$axios.get("general/providers/" + id);
    let data = res.data.data;
    console.log(data)
    commit("setSingleRecordDetails", data);
  },
  update({state}) {
    let payload = JSON.stringify(state.recordDetails);
    return this.$axios.put(`general/providers`, payload);
  },
}