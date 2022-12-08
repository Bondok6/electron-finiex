import Vue from "vue";
export const state = () => ({
  dialogStatus: false,
  // List of accountsJournal to be displayed in the table (Per Page)
  records: [],
  advancedRecords: [],
  recordIsReadonly: false,
  paginationConfig: {
    totalPages: 0,
    totalRecords: 0,
    pageNumber: 1,
    hasPreviousPage: false,
    hasNextPage: true,
    pageSize: 10
  },
  advancedPaginationConfig: {
    totalPages: 0,
    totalRecords: 0,
    pageNumber: 1,
    hasPreviousPage: false,
    hasNextPage: true,
    pageSize: 10
  },
  accountList: [],
  // ##### Account Card edit And Create Page ####
  suggestJournalDetails: {
    accountID: null,
    accountLevel: 0,
    accountTypeValue: false,
    accountTypeText: "Credit",
    accountNatureValue: 0,
    accountNatureText: "Budget"
  },
  newDocumentDetails: {
    moves: []
  },
  globalNewDocumentDetails: {
    totalDebit: 0,
    totalCredit: 0,
    totalRows: 1
  },
  updateDocumentDetails: {},
  updateGlobalDocumentDetails: {
    moveID: 0,
    moveCode: 0,
    totalCredit: 0,
    totalDebit: 0,
    documentDate: "",
    moveTypeID: 0,
    gaidType: 0,
    totalRows: 0
  },
  RecordDetails: {
    moves: [],
    totalRows: 2
  },
  singleRecordDetails: null,
  newGaidDetails: {
    moves: []
  },
  advancedOptions: {
    pageNumber: 1,
    SearchString: "",
    DateFrom: 0,
    DateTo: 0
  },
  filesList: [],
  uploadPercentage: 0
});

export const mutations = {
  updateDialogState(state, dialogStatus) {
    state.dialogStatus = dialogStatus;
  },
  setRecords(state, records) {
    state.records = records;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  advancedPaginationConfig(state, config) {
    state.advancedPaginationConfig = config;
  },
  // when set count of records per page [10, 20 , 30 , 40]
  setRecordsPerPage(state, perPage) {
    state.paginationConfig.pageSize = perPage;
  },
  setAdvancedRecordsPerPage(state, perPage) {
    state.advancedPaginationConfig.pageSize = perPage;
  },
  setAdvancedRecords(state, payload) {
    state.advancedRecords = payload;
  },
  // ##### accountJournal details when edit Journal ####
  setUpdateDocumentDetails(state, details) {
    state.updateDocumentDetails = details;
  },
  setUpdateGlobalDocumentDetails(state, details) {
    state.updateGlobalDocumentDetails = {
      ...details
    };
    for (let i in details) {
      // llop thrwo details and puy in updateDocumentDetails
      state.updateDocumentDetails[i] = details[i];
    }
  },
  setRecordDetails(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.RecordDetails = { ...state.RecordDetails, ...payload };
    } else {
      state.RecordDetails = {};
    }
  },
  setSingleRecordDetails(state, details) {
    state.singleRecordDetails = {
      ...details
    };
  },

  setRecordsDetails(state, record) {
    if (Array.isArray(record)) {
      state.recordDetails.moves = record;
    } else {
      state.recordDetails = {
        ...state.recordDetails,
        ...record
      };
    }
  },
  // ##### account details when create account ####
  // setAccountDetails(state, details) {
  //   state.accountDetails = details;
  // },
  // editAccountDetails(state, details) {
  //   state.accountDetailsUpdates = details;
  // },
  setJournalDetailsSuggets(state, details) {
    state.suggestJournalDetails = details;
  },
  setAccountList(state, list) {
    state.accountList = list.map(item => {
      return {
        accID: item.accID,
        accName: item.accName
      };
    });
  },
  setStatusRecord(state, status) {
    state.recordIsReadonly = status;
  },
  setAdvancedOptions(state, options) {
    state.advancedOptions = { ...state.advancedOptions, ...options };
  },
  deleteRecord(state, FileId) {
    state.filesList.forEach((item, index) => {
      if (item.id == FileId) state.filesList.splice(index, 1);
    });
  },
  setFilesList(state, files) {
    state.filesList = files;
  },
  setUploadPercentage(state, percentage) {
    state.uploadPercentage = percentage;
  }
};
export const actions = {
  async fetchRecords({ commit, state }, { pageNumber }) {
    this.commit("loaded", false, { root: true });
    let response = await this.$axios.get(
      `accounting/journal-entry/list?PageNumber=${pageNumber}&PageSize=${state.paginationConfig.pageSize}`
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
      throw new Error(response.statusText);
    }
  },
  async fetchRecordsByName({ commit }, { pageNumber, SearchString }) {
    this.commit("loaded", false, { root: true });
    let response = await this.$axios.get(
      `accounting/journal-entry/list?PageNumber=${pageNumber}&SearchString=${SearchString}`
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
  fetchSingleRecord({ commit }, id) {
    return this.$axios.get(`accounting/journal-entry/${id}`).then(response => {
      if (response.status == 200) {
        let data = response.data.data;
        commit("setSingleRecordDetails", {
          ...data,
          totalRows: data.details.length
        });
        // السندات و الفواتير غير مسموح بالتعديل
        if (data.gaidType == 1 || data.gaidType == 2) {
          commit("setStatusRecord", true);
        } else {
          commit("setStatusRecord", false);
        }
      }
    });
  },
  async getSuggestJournalDetails({ commit }, { gaid_type_id }) {
    let response = await this.$axios.get(
      `accounting/journal-entry/suggest-ids?GaidTypeID=${gaid_type_id}`
    );
    if (response.status == 200) {
      let data = response.data.data;
      commit("setJournalDetailsSuggets", data);
    } else {
      throw new Error(response.statusText);
    }
  },
  async fetchSubAccountsList(
    { commit },
    { SearchString = "", mainOrSub = "true" } = {}
  ) {
    try {
      let response = await this.$axios.get(
        `accounting/account-card/list?PageNumber=1&SearchString=${SearchString}&mainOrSub=${mainOrSub}`
      );

      let data = response.data.data;
      commit("setAccountList", data);
    } catch (e) {
      throw new Error(e.response.data.message);
    }
  },

  requestHandler({ state }, { request }) {
    let record = state.RecordDetails;

    if (record.moves.length < 2) {
      return new Promise((resolve, reject) => {
        reject("At least 2 rows are required");
      });
    } else if (record.totalCredit != record.totalDebit) {
      return new Promise((resolve, reject) => {
        reject("Total Debit and Total Credit must be equal");
      });
    } else if (
      record.moves.some(
        item =>
          item.localDebit == 0 &&
          item.localCredit == 0 &&
          item.isDeleted == false
      )
    ) {
      return new Promise((resolve, reject) => {
        // Debit and Credit at least one of each wasn't zero
        reject(
          "Debit and Credit for each row at least one of each wasn't zero"
        );
      });
    } else {
      if (request == "post") {
        return this.$axios.post(
          `accounting/journal-entry`,
          JSON.stringify(record)
        );
      } else {
        return this.$axios.put(
          `accounting/journal-entry`,
          JSON.stringify(record)
        );
      }
    }
  },
  attachFile({ commit }, payload) {
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
    return this.$axios.post(`general/files/gaids`, record, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: progressEvent => {
        commit(
          "setUploadPercentage",
          parseInt(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          )
        );
      }
    });
  },
  fetchFiles({ commit }, { gaidId }) {
    return this.$axios
      .get(`general/files/gaids?ID=${gaidId}`)
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setFilesList", data);
          // السندات و الفواتير غير مسموح بالتعديل
        } else {
          throw new Error(response.statusText);
        }
      });
  },
  deleteFile({ commit }, id) {
    return this.$axios
      .delete(`general/files/${id}`)
      .then(_ => {
        commit("deleteRecord", id);
      })
      .catch(e => {
        // commit global state to show error message With get Request
      });
  },
  create({ dispatch }) {
    return dispatch("requestHandler", { request: "post" });
  },
  update({ dispatch }) {
    return dispatch("requestHandler", { request: "put" });
  },
  delete({ commit }, { id }) {
    return this.$axios.delete(`/accounting/journal-entry/${id}`);
  },
  async fetchAdvancedRecords({ commit, state }, { pageNumber }) {
    this.commit("loaded", false, { root: true });
    let API = `accounting/search-journal-entry?PageNumber=${pageNumber}&PageSize=${
      state.advancedPaginationConfig.pageSize
    }${
      state.advancedOptions.SearchString
        ? "&SearchString=" + state.advancedOptions.SearchString
        : ""
    }${
      state.advancedOptions.DateFrom
        ? "&DateFrom=" + state.advancedOptions.DateFrom
        : ""
    }${
      state.advancedOptions.DateTo
        ? "&DateTo=" + state.advancedOptions.DateTo
        : ""
    }${
      state.advancedOptions.MvTypeID
        ? "&MvTypeID=" + state.advancedOptions.MvTypeID
        : ""
    }${
      state.advancedOptions.MvcodFrom
        ? "&MvcodFrom=" + state.advancedOptions.MvcodFrom
        : ""
    }${
      state.advancedOptions.MvcodTo
        ? "&MvcodTo=" + state.advancedOptions.MvcodTo
        : ""
    }${
      state.advancedOptions.CstCntrID
        ? "&CstCntrID=" + state.advancedOptions.CstCntrID
        : ""
    }${
      state.advancedOptions.MvGdTypeID
        ? "&MvGdTypeID=" + state.advancedOptions.MvGdTypeID
        : ""
    }${
      state.advancedOptions.gaidStatus
        ? "&gaidStatus=" + state.advancedOptions.gaidStatus
        : ""
    }${
      state.advancedOptions.MSbCodFrom
        ? "&MSbCodFrom=" + state.advancedOptions.MSbCodFrom
        : ""
    }${
      state.advancedOptions.MSbCodTo
        ? "&MSbCodTo=" + state.advancedOptions.MSbCodTo
        : ""
    }${
      state.advancedOptions.statement
        ? "&statement=" + state.advancedOptions.statement
        : ""
    }${
      state.advancedOptions.amount
        ? "&amount=" + state.advancedOptions.amount
        : ""
    }${
      state.advancedOptions.orderby
        ? "&orderby=" + state.advancedOptions.orderby
        : ""
    }${
      state.advancedOptions.Cmpr ? "&Cmpr=" + state.advancedOptions.Cmpr : ""
    }${
      state.advancedOptions.AccType
        ? "&AccType=" + state.advancedOptions.AccType
        : ""
    }`;
    let response = await this.$axios.get(API);
    if (response.status == 200) {
      let data = response.data;
      commit("setAdvancedRecords", data.data);
      commit("advancedPaginationConfig", {
        totalRecords: data.totalCount,
        pageNumber: data.currentPage,
        hasPreviousPage: data.hasPreviousPage,
        hasNextPage: data.hasNextPage,
        pageSize: data.pageSize
      });

      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } else {
      throw new Error(response.statusText);
    }
  }
};
