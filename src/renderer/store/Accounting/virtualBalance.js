export const state = () => ({
  records: null,
  paginationConfig: {},
  RecordDetails: [],
  advancedSearch: {
    SearchString: "",
    MainOrSub: "",
    MainFinalAccount: "",
    LevelAccount: "",
    OrderBy: "",
    BrID: ""
  },
  enableEdit: false
});

export const mutations = {
  setRecords(state, payload) {
    // special case to aware any row updated
    state.records = payload.map(item => {
      item.balanceBerforeUpdate = item.virualBalance;
      return item;
    });
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setRecordDetails(state, payload) {
    if (Object.keys(payload).length > 0) {
      // if payload is exist in recorddetails remove it and add new one
      state.RecordDetails = state.RecordDetails?.filter(
        item => item.accID != payload.accID
      );
      state.RecordDetails = [payload, ...state.RecordDetails];
    } else {
      state.RecordDetails = {};
    }
  },
  setEdit(state, payload) {
    state.enableEdit = payload;
  }
};

export const actions = {
  async fetchRecords(
    { commit, state },
    {
      SearchString = "",
      MainOrSub = "",
      MainFinalAccount = "",
      LevelAccount = "",
      OrderBy = "",
      BrID = "",
      pageNumber = 1,
      pageSize = 10
    } = {}
  ) {
    this.commit("loaded", false, { root: true });
    let [record] = state.RecordDetails;
    try {
      let API = "accounting/virual-balance/list?";
      let recordEntries = Object.entries(record);

      recordEntries.forEach(([key, value], index) => {
        API += value
          ? `${key}=${value}${recordEntries.length - 1 == index ? "" : "&"}`
          : "";
      });
      let response = await this.$axios.get(API);
      let data = await response.data;

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
      return response;
    } catch (e) {
      return e.response.data.message;
    }
  },
  update({ commit, state }) {
    let record = {
      accountBalance: state.RecordDetails.filter(
        item => item.balanceBerforeUpdate !== item.virualBalance
      )
    };

    return this.$axios.put("accounting/virual-balance", JSON.stringify(record));
  }
};
