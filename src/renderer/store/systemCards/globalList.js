export const state = () => ({
  itemsCardList: [],
  unitsList: [],
  itemsTypesList: [],
  companiesList: [],
  itemsCategoriesList: [],
  itemsSubCategoryiesList: [],
  warehousesList: [],
  branchesList: [],
  subCategories: [],
  fundsAndBanksList: [],
  typeStock: {
    Normal: 0,
    Attrs: 1,
    Patch: 2
  },
  typeItems: {
    commodityItem: 0,
    serviceItem: 1,
    weightItem: 2,
    serialItem: 3,
    productItem: 4,
    aggregateItem: 5,
    pointOfSale: 6
  },
  bankCommisions: []
});

export const mutations = {
  setItemsCardList(state, payload) {
    state.itemsCardList = payload;
  },
  setUnitsList(state, payload) {
    state.unitsList = payload;
  },
  setItemsTypesList(state, payload) {
    state.itemsTypesList = payload;
  },
  setCompaniesList(state, payload) {
    state.companiesList = payload;
  },
  setItemsCategoriesList(state, payload) {
    state.itemsCategoriesList = payload;
  },
  setItemsSubCategoryiesList(state, payload) {
    state.itemsSubCategoryiesList = payload;
  },
  setWarehousesList(state, payload) {
    state.warehousesList = payload;
  },
  setBranchesList(state, payload) {
    state.branchesList = payload;
  },
  setSubCategories(state, payload) {
    state.subCategories = payload;
  },
  setFundsAndBanksList(state, payload) {
    state.fundsAndBanksList = payload;
  },
  setBankCommisions(state, payload) {
    state.bankCommisions = payload;
  }
};

export const actions = {
  async fetchItemsCardList({ commit }, searchParams = {}) {
    try {
      let API = `general/items/list`;
      let response = await this.$axios.get(API, { params: searchParams });
      let { data } = response.data;
      commit("setItemsCardList", data);
    } catch (e) {
      return e.response;
    }
  },

  async fetchUnitsList({ commit }, { searchString } = { searchString: "" }) {
    try {
      let API = `general/units/list?${
        searchString ? `searchString=${searchString}` : ""
      }`;
      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setUnitsList", data);
    } catch (e) {
      return e.response;
    }
  },
  async fetchItemsCategoryiesList(
    { commit },
    { searchString } = { searchString: "" }
  ) {
    try {
      let API = `general/items-categories/paginated?${
        searchString ? `searchString=${searchString}` : ""
      }`;
      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setItemsCategoriesList", data);
    } catch (e) {
      return e.response;
    }
  },
  async fetchCompaniesList(
    { commit },
    { searchString } = { searchString: "" }
  ) {
    try {
      let API = `general/manufactoring-compaines/paginated?${
        searchString ? `searchString=${searchString}` : ""
      }`;

      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setCompaniesList", data);
    } catch (e) {
      return e.response;
    }
  },
  async fetchItemsTypeList(
    { commit },
    { searchString } = { searchString: "" }
  ) {
    try {
      let API = `general/items-types/paginated?${
        searchString ? `searchString=${searchString}` : ""
      }`;

      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setItemsTypesList", data);
    } catch (e) {
      return e.response;
    }
  },
  async fetchItemsSubCategoryiesList(
    { commit },
    { searchString } = { searchString: "" }
  ) {
    try {
      let API = `general/sub-items-categories/paginated?${
        searchString ? `searchString=${searchString}` : ""
      }`;

      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setItemsSubCategoryiesList", data);
    } catch (e) {
      return e.response;
    }
  },
  async fetchWarehousesList(
    { commit },
    { searchString } = { searchString: "" }
  ) {
    try {
      let API = `general/br-wh/list-warehouses?${
        searchString ? `searchString=${searchString}` : ""
      }`;

      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setWarehousesList", data);
    } catch (e) {
      return e.response;
    }
  },
  async fetchBranchesList({ commit }, { searchString } = { searchString: "" }) {
    try {
      let API = `general/br-wh/list-branches?${
        searchString ? `searchString=${searchString}` : ""
      }`;

      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setBranchesList", data);
    } catch (e) {
      return e.response;
    }
  },
  async getSubCategorysById({ commit }, { id }) {
    try {
      let API = `general/sub-items-categories/children?ParentID=${id}`;
      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setSubCategories", data);
    } catch (e) {
      return e.response;
    }
  },
  async fetchFundsAndBanks(
    { commit },
    { searchString } = { searchString: "" }
  ) {
    try {
      let API = `general/banks-funds/paginated?${
        searchString ? `searchString=${searchString}` : ""
      }`;
      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setFundsAndBanksList", data);
    } catch (e) {
      return e.response;
    }
  },
  async getListBankCommisions({ commit }) {
    try {
      let API = `general/bank-commisions/paginated`;
      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setBankCommisions", data);
      return data;
    } catch (e) {
      return e.response;
    }
  }
};
