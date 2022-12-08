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
});

export const mutations = {
  setRecords(state, val){
    state.records = val;
  },
  setPaginationConfig(state, val){
    state.paginationConfig = val;
  },
  setRecordPerPage(state, val){
    console.log('setRecordPerPage: '+ val);
    state.paginationConfig.pageSize = val;
  }
}

export const actions = {
  changePageSize({ _, commit }, { pageSize }){
    commit('setRecordPerPage', pageSize)
  },
  async fetchRecords(
    { state, commit },
    searchParams= {}
  ){
    this.commit("loaded", false, { root: true });
    try {
      let API = `purchases/purchase-returns-invoice`
      let response = await this.$axios.get(API, {params: searchParams})
      let data = response.data;
      commit("setRecords", data.data);
      commit("setPaginationConfig", {
        totalPages: data.totalPages,
        totalRecords: data.totalCount,
        pageNumber: data.currentPage,
        hasPreviousPage: data.hasPreviousPage,
        hasNextPage: data.hasNextPage,
        pageSize: data.pageSize
      });
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      return e.response;
    }
  }
}
