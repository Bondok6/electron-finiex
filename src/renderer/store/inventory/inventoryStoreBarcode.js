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
    editInventoryNumber: true,
    invoiceForm: {},
    items: [],
    recordDetails: {},
  });
  
  export const mutations = {
    setRecords(state, val){
      state.records = val;
    },
    setPaginationConfig(state, val){
      state.paginationConfig = val;
    },
    setEditInventoryNumber(state, data) {
        state.editInventoryNumber = data;
    },
    setInvoiceForm(state, data) {
        state.invoiceForm = { ...data };
    },
    setItems(state, val){
        if (val.length === 0) {
          state.items = []
        }else {
          state.items = [ ...val ]
        }
      },
    setRecordDetails(state, val) {
        state.recordDetails = { ...val }
    },
  };

  export const actions = {
    async fetchRecords(
      { commit },
      searchParams= {}
    ){
      this.commit("loaded", false, { root: true });
      try {
        let API = 'inventory/inventorystorebarecode/list'
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
    async fetchItems({commit}, searchParams = {}) {
    try{
      let api = "inventory/inventorystorebarecode/getitemslist";
      const res = await this.$axios.get(api, { params: searchParams });
      const data = res.data.data;
      commit("setItems", data)
    }catch (e){
      return e.response;
    }
  },
  fetchItemDetails(_,searchParams= {}) {
    return this.$axios.get(`inventory/inventorystorebarecode/getitemdetails`, {params: searchParams})
  },
  create({ state }) {
    let data = JSON.stringify(state.recordDetails);
    return this.$axios.post("inventory/inventorystorebarecode/create", data);
  },
  update({ state }) {
    let data = JSON.stringify(state.recordDetails);
    return this.$axios.put("inventory/inventorystorebarecode/update", data);
  },
  delete(_, code) {
    return this.$axios.delete(`inventory/inventorystorebarecode/delete?PageNoId=${code}`);
  },
  };
  