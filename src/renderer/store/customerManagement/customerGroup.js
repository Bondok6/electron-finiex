export const state = () => ({
  records: [],
  searchParams: {},
  paginationConfig: {},
  editMode: false,
  dialogState: false
});

export const mutations = {
  setRecords(state, records) {
    state.records = records;
  },
  setSearchParams(state, searchParams) {
    state.searchParams = searchParams;
  },
  paginationConfig(state, paginationConfig) {
    state.paginationConfig = paginationConfig;
  },
  setEditMode(state, editMode) {
    state.editMode = editMode;
  },
  updateDialogState(state, dialogState) {
    state.dialogState = dialogState;
  }
};

export const actions = {
  async fetchRecords({ commit }, searchParams = {}) {
    // show loading layer
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/customer-groups/paginated?`;
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
  fetchSingleRecord(_, { id }) {
    return this.$axios.get(`general/customer-groups/${id}`);
  },
  create(_,payload){
    let JOSN = JSON.stringify(payload);
    return this.$axios.post(`general/customer-groups`,JOSN);
  },
  fetchMaxCode(){
    return this.$axios.get(`general/customer-groups/max-code`);
  },
  update(_,payload){
    let JOSN = JSON.stringify(payload);
    return this.$axios.put(`general/customer-groups`,JOSN);
  },
  delete(_, { id }) {
    return this.$axios.delete(`general/customer-groups/${id}`);
  },
};
