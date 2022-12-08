export const state = () => ({
  firstTermInvoiceList: [],
  recordDetails: {},
  singleRecordDetails: {},
  paginationConfig: {
    pageNumber: 1,
    totalPages: 0,
    totalfirstTermInvoices: 0,
    pageSize: 10,
    hasPreviousPage: false,
    hasNextPage: true
  },
  listItems: [],
  currentBranch: {},
  relatedWarehouses: [],
  maxId: null
});

export const mutations = {
  setTermInvoiceList(state, payload) {
    state.firstTermInvoiceList = payload;
  },
  setPaginationConfig(state, payload) {
    state.paginationConfig = payload;
  },
  setRecordDetails(state, val) {
    if (Object.keys(val).length === 0) {
      state.recordDetails = { ...val };
    } else {
      state.recordDetails = { ...state.recordDetails, ...val };
    }
  },
  setListItems(state, payload) {
    state.listItems = payload;
  },
  setCurrentBranch(state, payload) {
    state.currentBranch = payload;
  },
  setRelatedWarehouses(state, payload) {
    state.relatedWarehouses = payload;
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = { ...payload };
  },
  setMaxId(state, payload) {
    state.maxId = payload;
  }
};

export const actions = {
  async fetchfirstTermInvoiceList({ commit }, SearchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      const api = `inventory/first-term-invoice`;
      const response = await this.$axios.get(api, { params: SearchParams });
      let data = response.data;
      commit("setTermInvoiceList", data.data);
      commit("setPaginationConfig", {
        pageNumber: data.currentPage,
        totalPages: data.totalPages,
        totalfirstTermInvoices: data.totalCount,
        pageSize: data.pageSize,
        hasPreviousPage: data.hasPreviousPage,
        hasNextPage: data.hasNextPage
      });
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      console.log(e.response);
    }
  },
  async fetchListItems({ commit }, SearchParams = {}) {
    try {
      // fetch the current branch name and id
      const res = await this.$axios.get(
        "/inventory/first-term-invoice/current-branch-warehouse-related"
      );
      const {
        currentBranceName,
        currentBranceId,
        warehouseRelated
      } = res.data.data;
      commit("setCurrentBranch", { currentBranceName, currentBranceId });
      commit("setRelatedWarehouses", warehouseRelated);

      // fetch the list items
      const response = await this.$axios.get(
        `inventory/first-term-invoice/items?BrancheId=${currentBranceId}`,
        {
          params: SearchParams
        }
      );
      const { data } = response.data;
      commit("setListItems", data);
    } catch (e) {
      console.log(e.response);
    }
  },
  // fetch max id
  async fetchMaxId({ commit }) {
    try {
      const maxIdRes = await this.$axios.get(
        "/inventory/first-term-invoice/max-id"
      );
      const maxId = maxIdRes.data.data;
      commit("setMaxId", maxId);
    } catch (e) {
      console.log(e.response);
    }
  },
  // fetch item by InvoiceCode
  async fetchItem({ commit }, obj) {
    try {
      const { invoiceCode, invoiceId } = obj;
      const response = await this.$axios.get(
        `inventory/first-term-invoice/details?InvoiceCode=${invoiceCode}`
      );
      const { data } = response.data;
      const item = { ...data, invoiceId };
      commit("setSingleRecordDetails", item);
    } catch (e) {
      console.log(e.response);
    }
  },
  async SearchListItems({ commit }, searchParams = {}) {
    try {
      const API = `general/items/list`;
      const response = await this.$axios.get(API, { params: searchParams });
      const { data } = response.data;
      commit("setListItems", data);
    } catch (e) {
      return e.response;
    }
  }
};
