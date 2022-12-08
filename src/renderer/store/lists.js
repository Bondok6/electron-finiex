import Vue from "vue";
export const state = () => ({
  accountTypes: [],
  accountNatures: [],
  branchesList: [],
  gaidTypesList: [],
  costCentersList: [],
  banksList: [],
  fundsList: [],
  salesMenList: [],
  movementTypesList: [],
  voucherPaymentTypesList: [],
  banksAndFundsList: [],
  providerCustomerList: [],
  providerSupplierList: [],
  allProviderList: [],
  invoicesSupplierORCustomerList: [],
  maxLevel: 0,
  maritalStatusList: [],
  genderList: [],
  allPaymentType: [],
  countriesList: [],
  citiesList : [],
});

export const mutations = {
  setAccountTypes(state, data) {
    state.accountTypes = data;
  },
  setAccountNatures(state, data) {
    state.accountNatures = data;
  },
  setBranchesList(state, data) {
    state.branchesList = data;
  },
  setGaidTypesList(state, data) {
    state.gaidTypesList = data;
  },
  setCostCentersList(state, data) {
    state.costCentersList = data;
  },
  setBanksList(state, data) {
    state.banksList = data;
  },
  setFundsList(state, data) {
    state.fundsList = data;
  },
  setSalesMenList(state, data) {
    state.salesMenList = data;
  },
  setMovementTypesList(state, data) {
    state.movementTypesList = data;
  },
  setVoucherPaymentTypes(state, data) {
    state.voucherPaymentTypesList = data;
  },
  setBanksAndFundsList(state, data) {
    state.banksAndFundsList = data;
  },
  setProviderCustomerList(state, data) {
    state.providerCustomerList = data;
  },
  setProviderSupplierList(state, data) {
    state.providerSupplierList = data;
  },
  setAllProviderList(state, data) {
    state.allProviderList = data;
  },
  setInvoicesSupplierORCustomerList(state, data) {
    state.invoicesSupplierORCustomerList = data;
  },
  setMaxLevel(state, data) {
    state.maxLevel = data;
  },
  setMaritalStatus(state, data) {
    state.maritalStatusList = data;
  },
  setGenderList(state, data) {
    state.genderList = data;
  },
  setAllPaymentType(state, data) {
    console.log(data);
    state.allPaymentType = data;
  },
  setCountriesList(state, data) {
    state.countriesList = data;
    console.log(state.countriesList )
  },
  setCitiesList(state,data){
    state.citiesList = data
  },

};
export const actions = {
  async getAccountTypes({ commit }) {
    try {
      let response = await this.$axios.get(
        "general/data-default/account-nature"
      );
      if (response.status == 200) {
        let data = response.data.data;
        commit("setAccountTypes", data);
      }
    } catch (err) {
      return err;
    }
  },
  async getAccountNatures({ commit }) {
    try {
      let response = await this.$axios.get(
        "general/data-default/account-types"
      );
      let data = response.data.data;

      commit("setAccountNatures", data);
    } catch (err) {
      return err.response.data.message;
    }
  },
  async getBranchesList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/br-wh/list-branches");
      let data = response.data.data;
      commit("setBranchesList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getGaidTypesList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/data-default/gaid-types");
      let data = response.data.data;
      commit("setGaidTypesList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getCostCentersList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/data/cost-centers-list");
      let data = response.data.data;
      commit("setCostCentersList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },

  async getFundsList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/data/funds-list");
      let data = response.data.data;
      commit("setFundsList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getSalesMenList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/sales-men/list");
      let data = response.data.data;
      commit("setSalesMenList", data);
      return data
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getMovementTypesList({ commit, state }) {
    try {
      let response = await this.$axios.get(
        "general/data-default/movements-types"
      );
      let data = response.data.data;
      commit("setMovementTypesList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getVoucherPaymentTypes({ commit, state }) {
    try {
      let response = await this.$axios.get(
        "general/data-default/voucher-payment-types"
      );

      let data = response.data.data;
      commit("setVoucherPaymentTypes", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getBanksList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/banks/list");
      let data = response.data.data;
      commit("setBanksList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getBanksAndFundsList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/data/banks-funds-list");
      let data = response.data.data;
      commit("setBanksAndFundsList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getProviderCustomerList({ commit, state }) {
    try {
      let response = await this.$axios.get(
        "general/provider-customer/customers"
      );
      let data = response.data.data;
      commit("setProviderCustomerList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getProviderSupplierList({ commit, state }) {
    try {
      let response = await this.$axios.get(
        "general/provider-customer/provider"
      );
      let data = response.data.data;
      commit("setProviderSupplierList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getAllProviderList({ commit, state }) {
    try {
      let response = await this.$axios.get("general/provider-customer/list");
      let data = response.data.data;
      commit("setAllProviderList", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getInvoicesSupplierORCustomer({ commit, state }, { Id , providerId }) {
    try {
      let response = await this.$axios.get(
        `general/invoices/supplier-and-customer?AccId=${Id}&providerId=${providerId}`
      );
    let data = response.data.data;
      commit("setInvoicesSupplierORCustomerList", data);
      if (data.length == 0) {
        Vue.prototype.$notify.error({
          title: "Error",
          message: "لا يوجد فواتير لهذا المورد"
        });
      }
    } catch (e) {
      Vue.prototype.$notify.error({
        title: "Error",
        message: e.message
      });
    }
  },
  async getMaxLevel({ commit }) {
    try {
      let response = await this.$axios.get("accounting/account-card/max-level");
      let data = response.data.data;
      commit("setMaxLevel", data);
    } catch (e) {
      return e.response.data.message;
    }
  },
  async getMaritalStatus({ commit, state }) {
    if (state.maritalStatusList.length != 0) {
      return;
    }
    try {
      let response = await this.$axios.get("general/employees/marital-status");
      let data = response.data.data;

      commit("setMaritalStatus", data);
    } catch (err) {
      return err.response.data.message;
    }
  },
  async getGenderList({ commit, state }) {
    if (state.maritalStatusList.length != 0) {
      return;
    }
    try {
      let response = await this.$axios.get("general/employees/genders");
      let data = response.data.data;

      commit("setGenderList", data);
    } catch (err) {
      return err.response.data.message;
    }
  },
  async getAllPaymentType({ commit, state }) {
    if (state.allPaymentType.length != 0) {
      return;
    }
    try {
      let response = await this.$axios.get(
        "general/data-default/all-payment-types"
      );
      let { data } = response.data;
      console.log(data);
      commit("setAllPaymentType", data);
    } catch (err) {
      return err.response.data.message;
    }
  },
  async getCountriesList({ commit, state }) {
    if (state.countriesList.length != 0) {
      return;
    }
    try {
      let response = await this.$axios.get("general/countries/list");
      let data = response.data.data;
      commit("setCountriesList", data);
    } catch (err) {
      return err.response.data.message;
    }
  },
  async getCitiesList({commit , state}, id){
    try {
      let response = await this.$axios.get("general/cities/" + id);
      let data = response.data.data;
      commit("setCitiesList", data);
    } catch (err) {
      return err.response.data.message;
    }
  }
};
