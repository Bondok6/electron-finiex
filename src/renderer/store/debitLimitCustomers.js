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
  enableEdit: false,
  recordsWillEdit: [],
  // accountList: [],
  searchForm: {
    branchSelected: "",
    accountNameSelected: "",
    orderBy: ""
  }
});
export const mutations = {
  setRecords(state, records) {
    state.records = records;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setRecordsWillEdit(state, payload) {
    if (Object.keys(payload).length > 0) {
      if (state.recordsWillEdit.length == 0) {
        state.recordsWillEdit = [payload];
      } else {
        if (state.recordsWillEdit.some(item => item.id == payload.id)) {
          state.recordsWillEdit = state.recordsWillEdit
            .filter(item => item.id != payload.id)
            .concat([payload]);
        } else {
          state.recordsWillEdit = [...state.recordsWillEdit, payload];
        }
      }
    } else {
      state.recordsWillEdit = [];
    }
  },
  setRecordsPerPage(state, perPage) {
    state.paginationConfig.pageSize = perPage;
  },
  // setAccountList(state, list) {
  //   state.accountList = list.map(item => {
  //     return {
  //       accID: item.accID,
  //       accName: item.accName
  //     };
  //   });
  // },
  setSearchForm(state, payload) {
    state.searchForm = payload;
  },
  setBranchSelected(state, branchId) {
    state.searchForm.branchSelected = branchId;
  },
  setAccountNameSelected(state, accountName) {
    state.searchForm.accountNameSelected = accountName;
  },
  setEdit(state, payload) {
    state.enableEdit = payload;
  }
};
export const actions = {
  //### Account Card index Page ###
  async fetchRecords(
    { commit, state },
    searchParams = {}
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `accounting/debit-limit-customers/list`;
      let response = await this.$axios.get(API, { params: searchParams});
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
      return e.response
    }
  },
  async fetchRecordsByName({ commit }, { pageNumber, SearchString }) {
    this.commit("loaded", false, { root: true });
    let response = await this.$axios.get(
      `accounting/debit-limit-customers/list?PageNumber=${pageNumber}&SearchString=${SearchString}`
    );
    if (response.status == 200) {
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
      this.commit("loaded", true, { root: true });
    } else {
      return e.response;
    }
  },
  async getAccountNameList({ commit, state }, { SearchString }) {
    let response = await this.$axios.get(
      `accounting/account-card/list?PageNumber=1&SearchString=${SearchString}`
    );
    if (response.status == 200) {
      let data = response.data;
    }
  },
  update({ state }) {
    let payload = {
      accounts: state.recordsWillEdit
    };
    return this.$axios.put(
      "accounting/debit-limit-customers",
      payload
    );
  }
  // async fetchAccountList({ commit }, { SearchString = "" } = {}) {
  //   let response = await this.$axios.get(
  //     `accounting/account-card/list?PageNumber=1&SearchString=${SearchString}`
  //   );

  //   if (response.status == 200) {
  //     let data = response.data.data;
  //      
  //     commit("setAccountList", data);
  //   } else {
  //     throw new Error(response.statusText);
  //   }
  // }
};
