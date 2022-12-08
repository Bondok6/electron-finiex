export const state = () => ({
  purchasesInvoiceList: [],
  paginationConfig: {
    pageNumber: 1,
    totalPages: 0,
    totalPurchases: 0,
    meta: null,
    pageSize: 10,
    hasPreviousPage: false,
    hasNextPage: true,
  },
  showCurrencyColumn : {status : false , rate : 1},
  allowedDiscountValue : 0,
  recordDetails: {},
  lastFive: [],
  notes: "",
  providerTaxable : false,
  totals :{}
});

export const mutations = {
  setTotals (state , payload ){
    state.totals = {...payload.totals}
  },
  setProviderTaxable(state,payload){
    state.providerTaxable = payload
  },
  setRoundNo(state , payload){
    state.recordDetails = {...state.recordDetails , roundNo : payload}
  },
  // records
  setPurchasesInvoiceList(state, payload) {
    state.purchasesInvoiceList = payload;
  },
  setPaginationConfig(state, payload) {
    state.paginationConfig = payload;
  },
  setAllowedDiscountChanged(state , payload){
    state.allowedDiscountValue = payload
  },
  toggleCurrencyColumn(state, payload) {
    state.showCurrencyColumn = payload;
  },
  setRecordDetails(state, payload) {
    state.recordDetails = {
      ...state.recordDetails ,
      ...payload ,
    };
    console.log(state.recordDetails)
  },
  setLastFive(state, payload) {
    state.lastFive = payload;
  },
  setNotes(state, payload) {
    state.notes = payload;
  },
}
export const actions = {
  async fetchPurchasesInvoiceList(
    { commit },
    SearchParams = {}
  ) {
    commit("loaded", false, { root: true });
    try {
      const api = `purchases/purchases-invoice`;
      const response = await this.$axios.get(api, {params: SearchParams});
      let data = response.data;
      commit("setPurchasesInvoiceList", data.data);
      commit("setPaginationConfig", {
        pageNumber: data.currentPage,
        totalPages: data.totalPages,
        totalPurchases: data.totalCount,
        meta: data.meta,
        pageSize: data.pageSize,
        hasPreviousPage: data.hasPreviousPage,
        hasNextPage: data.hasNextPage,
      });
      window.scrollTo(0, 200);
      commit("loaded", true, { root: true });
    } catch (e) {
      console.log(e.response);
    }
  },
  async getMaxCode({ commit }) {
    return this.$axios.get("purchases/purchases-invoice/get-max-invoiceid");
  },
  async fetchLastFive({ commit }, SearchParams = {}) {
    try {
      const api = "purchases/purchases-invoice/get-five-purchases-invoice";
      const response = await this.$axios.get(api, {params: SearchParams});
      let data = response.data;
      commit("setLastFive", data.data);
    } catch (e) {
      console.log(e.response);
    }
  },
  async create({ state }) {
    try {
      const api = "purchases/purchases-invoice/new";
      let payload = {
        ...state.recordDetails ,
        allInvoicesDetailsPayment : {...state.recordDetails.allInvoicesDetailsPayment , netinv : +(state.recordDetails.netinv.toFixed(6))},
        addInvoicesDetails : state.recordDetails.addInvoicesDetails,
        allwedDiscount : state.totals.allwedDiscount ,
        totalInvo :  state.totals.totalInvo ,
        taxable : state.providerTaxable ? true : false ,
        discountInvo : state.totals.discountInvo ,
        taxAmount : state.totals.taxAmount,
        roundNo : state.roundNo ? state.roundNo : 0,
      }
      return this.$axios.post(api, JSON.stringify(payload));
    } catch (e) {
       return e.response
    }
  },
  async getItemDetails({commit} , Id){
    try {
      console.log({includes : "units,quantityWarehouse"  ,  Id })
      const api = `general/items/itemid`;
      const response = await this.$axios.get(api, {params: {includes : "units,quantityWarehouse"  ,  Id }});
      let {units , quantityWarehouse , quantityBatches , taxValue , purchasePersonality , typeItems , typeStock ,mdpurUnit} = response.data.data;
      let valueReturned = {
        warehouse : quantityWarehouse,
        batches : quantityBatches ,
        personalities : purchasePersonality ,
        taxValue,
        units,
        typeItems,
        typeStock,
        defaultUnit : mdpurUnit,
      }
      return valueReturned
    } catch (error) {
      return error
    }
  }
}
