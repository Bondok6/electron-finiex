export const state = () => ({
  financialYear: {},
  currentBranch: {},
  relatedWarehouses: [],
});

export const mutations = {
  setFinancialYear(state, data) {
    if(Object.keys(data).length === 0){
      state.financialYear = {}
    }else {
      state.financialYear = { ...data };
    }
  },
  setCurrentBranch(state, data) {
    state.currentBranch = { ...data };
  },
  setRelatedWarehouses(state, data) {
    state.relatedWarehouses = [ ...data ];
  },
};
export const actions = {
  async getFinancialYear({ commit, state }) {
    if (Object.keys(state.financialYear).length > 0) {
      return;
    } else {
      try {
        let response = await this.$axios.get("general/financial-year/current");
        let data = response.data.data;
        console.log(data);
        commit("setFinancialYear", data);
      } catch (e) {
        return e.response;
      }
    }
  },
  async getCurrentBranch({ commit }){
    try {
      let response = await this.$axios.get("general/br-wh/main-branch");
      let data = response.data.data;
      commit("setCurrentBranch", data);
    } catch (e) {
      return e.response;
    }
  },
  async getRelatedWarehouses({ commit, state }){
    try {
      let response = await this.$axios.get(`general/br-wh/warehouses/${state.currentBranch.id}`);
      let data = response.data.data;
      commit("setRelatedWarehouses", data);
    } catch (e) {
      return e.response;
    }
  }
};
