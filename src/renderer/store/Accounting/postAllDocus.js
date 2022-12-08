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
  RecordDetails: {
    searchString: "",
    isDone: "0",
    formValue: "0",
    to: new Date().toISOString(),
    from: new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    ).toISOString(),
    pageSize: 10,
    pageNumber: 1
  },
  rowsSelection: []
});

export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
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

  deleteRowsSelection(state, payload) {
    let index = state.rowsSelection.findIndex(
      item => item?.uniqe == payload?.uniqe
    );
    state.rowsSelection.splice(index, 1);
  },
  addRowsSelection(state, payload) {
    state.rowsSelection = [{ ...payload }, ...state.rowsSelection];
  },
  clearSelections(state) {
    state.rowsSelection = [];
  }
};

export const actions = {
  async fetchRecords({ commit, state }) {
    this.commit("loaded", false, { root: true });
    let record = state.RecordDetails;
    try {
      let API = `accounting/post-docs?PageNumber=${
        record.pageNumber
      }&PageSize=${record.pageSize}&SearchString=${
        record.searchString
      }&FormValue=${record.formValue}&From=${record.from}&To=${
        record.to
      }&isDone=${Number(record.isDone)}`;
      let response = await this.$axios.get(API);

      let data = response.data;
      commit("setRecords", data.data);
      commit("paginationConfig", {
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
      return e.response.data.message;
    }
  },
  postDocus({ commit, state }) {
    let record = { details: [...state.rowsSelection] };
    return this.$axios.post("accounting/post-docs", JSON.stringify(record));
  }
};
