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
  priceTransfer: null,
  priceColumnSelected: "",
  PriceColumn: {
    openingCost: 0,
    lastPurchasePrice: 1,
    costPrice: 2,
    wholesalePrice: 3,
    lowestSalePrice: 4,
    salePriceBeforeTax: 5
  },
  recordDetails: {},
  singleRecordDetails: {},
  newRecordDetails: {},
  items: [],
})

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
  },
  setnewRecordDetails(state, val){
    state.newRecordDetails = { ...val };
  },
  setItems(state, val){
    if (val.length === 0) {
      state.items = []
    }else {
      state.items = [ ...val ]
    }
  },
  setRecordDetails(state, val) {
    if (Object.keys(val).length === 0) {
      state.recordDetails = { ...val }
    } else {
      state.recordDetails = { ...state.recordDetails, ...val };
    }
  },
  setPriceTransfer(state,val) {
    state.priceTransfer = val ;
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = { ...payload };
  }
}

export const actions = {
  async fetchRecords(
    { commit },
    searchParams= {}
  ){
    this.commit("loaded", false, { root: true });
    try {
      let API = 'inventory/transfer-branches/list'
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
  },
  fetchMaxCode() {
    return this.$axios.get("inventory/transfer-branches/max-id");
  },
  async fetchNewRecord({ commit }) {
    this.commit("loaded", false, { root: true });
    try{
      let response = await this.$axios.get("inventory/transfer-branches/current-branch-with-related");
      let data = response.data.data;
      console.log(data)
      commit("setnewRecordDetails", data);
      this.commit("loaded", true, { root: true });
    }catch (e) {
      return e.response;
    }
  },
  fetchWareHousesRelated(_,branchId) {
    return this.$axios.get(`inventory/transfer-branches/warehouse-related?BrancheId=${branchId}`)
  },
  async fetchItems({commit}, searchParams = {}) {
    try{
      let api = "inventory/transfer-branches/items";
      const res = await this.$axios.get(api, { params: searchParams });
      const data = res.data.data;
      commit("setItems", data)
    }catch (e){
      console.log(e)
    }
  },
  fetchItemDetails(_,searchParams= {}) {
    return this.$axios.get(`inventory/transfer-branches/details-items`, {params: searchParams})
  },
  create({ state }) {
    let data = JSON.stringify(state.recordDetails);
    console.log(state.recordDetails);
    return this.$axios.post("inventory/transfer-branches/new", data);
  },
  async fetchPriceTransfer({commit}) {
    try {
      const res = await this.$axios.get("inventory/transfer-branches/hide-price");
      const data = res.data.data;
      commit("setPriceTransfer", data);
    }catch(e){ 
     console.log(e) 
    }
  },
  fetchPriceTransferQty() {
    return this.$axios.get(`inventory/transfer-branches/price-transfer-qty`)
  },
  async editSingleRecordDetails({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      const res = await this.$axios.get(`inventory/transfer-branches/details`, { params: searchParams });
      const data = res.data.data;
      console.log(data) 
      commit("setSingleRecordDetails", data);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      console.log(e)
    }
  },
  update({ state }) {
    let data = JSON.stringify(state.recordDetails);
    console.log(state.recordDetails)
    return this.$axios.put("inventory/transfer-branches/edit", data);
  },
  delete(_, code) {
    return this.$axios.delete(`inventory/transfer-branches/delete?InvoiceCode=${code}`);
  },
}