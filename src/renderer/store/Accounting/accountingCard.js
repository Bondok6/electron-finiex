import Vue from "vue";
export const state = () => ({
  //#### Account Card index Page ####
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
  // ##### Account Card edit And Create Page ####
  newAccountDetails: {
    accountID: null,
    accountLevel: 0,
    accountTypeValue: false,
    accountTypeText: "Credit",
    accountNatureValue: 0,
    accountNatureText: "Budget"
  },
  accountDetailsUpdates: {}
});

export const mutations = {
  setRecords(state, records) {
    state.records = records;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setRecordsPerPage(state, perPage) {
    state.paginationConfig.pageSize = perPage;
  },
  // ##### account details when edit account ####
  setSingleRecordDetails(state, details) {
    state.recordDetails = details;
  },
  // ##### account details when create account ####
  setAccountDetails(state, details) {
    console.log(details);
    state.newAccountDetails = details;
  },
  editAccountDetails(state, details) {
    state.accountDetailsUpdates = details;
  }
};
export const actions = {
  //### Account Card index Page ###
  async fetchRecords({ commit, state }, { pageNumber }) {
    this.commit("loaded", false, { root: true });
    let response = await this.$axios.get(
      `accounting/account-card/list?PageNumber=${pageNumber}&PageSize=${state.paginationConfig.pageSize}`
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
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } else {
      return response;
    }
  },
  async fetchRecordsByName({ commit }, { pageNumber, SearchString }) {
    this.commit("loaded", false, { root: true });
    let response = await this.$axios.get(
      `accounting/account-card/list?PageNumber=${pageNumber}&SearchString=${SearchString}`
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
      throw new Error(response.statusText);
    }
  },
  async fetchSingleRecord({ commit }, id) {
    let response = await this.$axios.get(
      `accounting/account-card/${id}`
    );
    let data = response.data.data;
    commit("setSingleRecordDetails", data);
  },
  //### Account Card Edit Page ###
  async getAccountDetails({ commit }, id) {
    let response = await this.$axios.get(
      `accounting/account-card/suggest?Id=${id}`
    );
    let data = response.data;
    commit("setAccountDetails", data.data);
  },
  createAccount({ commit, state }) {
    //
    if (
      state.newAccountDetails.accountID &&
      state.newAccountDetails.accountLevel &&
      state.newAccountDetails.accountName &&
      state.newAccountDetails.mainAccountId
    ) {
      let payload = new FormData();
      payload.append(
        "accID",
        state.newAccountDetails.accountID.toString()
      );
      payload.append("accName", state.newAccountDetails.accountName);
      payload.append(
        "mainFinalAccount",
        state.newAccountDetails.accountTypeSeleted
      );
      payload.append(
        "mainAccountNo",
        state.newAccountDetails.mainAccountId
      );
      payload.append(
        "accPeriod",
        state.newAccountDetails?.paymentPeriod?.toString() ?? ""
      );
      payload.append("mainOrSub", state.newAccountDetails.subOrMain);
      payload.append(
        "levelAccount",
        state.newAccountDetails.accountLevel
      );
      payload.append(
        "joinCOstCenter",
        state.newAccountDetails.accountNatureSeleted ? true : false
      );
      payload.append("accNameEng", state.newAccountDetails.accountName);
      return this.$axios.post("accounting/account-card", payload);
    }
  },
  updateAccount({ commit, state }) {

    if (
      state.accountDetailsUpdates.accountID &&
      state.accountDetailsUpdates.mainAccountId
    ) {


      let payload = new FormData();
      let objectLikeFormData = {
        accID: state.accountDetailsUpdates.accountID.toString(),
        accName: state.accountDetailsUpdates.accountName,
        mainFinalAccount: state.accountDetailsUpdates.accountTypeSeleted,
        mainAccountNo: state.accountDetailsUpdates.mainAccountId,
        accPeriod:
          state.accountDetailsUpdates.paymentPeriod?.toString() ?? "",
        mainOrSub: state.accountDetailsUpdates.mainOrSub,
        levelAccount: state.accountDetailsUpdates.accountLevel,
        joinCOstCenter: state.accountDetailsUpdates.accountNatureSeleted
          ? true
          : false,
        accNameEng: state.accountDetailsUpdates.accountName,
        taxNo: state.accountDetailsUpdates?.taxNo ?? "",
        maxBalance:
          state.accountDetailsUpdates.debitLimit?.toString() ?? 0
      };
      payload.append(
        "accID",
        state.accountDetailsUpdates.accountID.toString()
      );
      payload.append("accName", state.accountDetailsUpdates.accountName);
      payload.append(
        "mainFinalAccount",
        state.accountDetailsUpdates.accountTypeSeleted
      );
      payload.append(
        "mainAccountNo",
        state.accountDetailsUpdates.mainAccountId
      );
      payload.append(
        "accPeriod",
        state.accountDetailsUpdates.paymentPeriod?.toString() ?? ""
      );
      payload.append("mainOrSub", state.accountDetailsUpdates.mainOrSub);
      payload.append(
        "levelAccount",
        state.accountDetailsUpdates.accountLevel
      );
      payload.append(
        "joinCOstCenter",
        state.accountDetailsUpdates.accountNatureSeleted ? true : false
      );
      payload.append(
        "accNameEng",
        state.accountDetailsUpdates.accountName
      );
      payload.append(
        "taxNo",
        state.accountDetailsUpdates.taxNo?.toString() ?? ""
      );
      payload.append(
        "maxBalance",
        state.accountDetailsUpdates.debitLimit?.toString() ?? 0
      );

      return this.$axios.put("accounting/account-card", payload);

    }
  },
  delete({ state }) {
    console.log(state.recordDetails.accID);
    return this.$axios.delete(
      "accounting/account-card/" + state.recordDetails.accID
    );
  },
  deleteAccountingGuide() {
    return this.$axios.delete(
      "accounting/account-card/delete-all"
    );
  },
  createAccountingGuide() {
    return this.$axios.post(
      "accounting/account-card/create-accounts-default"
    );
  },
};
