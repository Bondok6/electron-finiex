export const state = () => ({
  children: [],
  dialog: false
});

export const mutations = {
  setData(state, payload) {
    state.children = payload.map(item => {
      return {
        id: item.id,
        label: item.accName,
        children: item.hasChildren ? [{}] : [],
        hasChildren: item.hasChildren,
        accID: item.accID,
        mainFinalAccount: item.mainFinalAccount
      };
    });
  },
  updateDialogState(state, key) {
    state.dialog = key;
  }
};

export const actions = {
  async getChildren({ commit }, branchId) {
    let response = await this.$axios.get(
      `accounting/account-card/parent/${branchId}`
    );
    let data = response.data.data;
    commit("setData", data);
    return response;
  },
  async copyAccounts({ commit }, IDs) {
    let body = new FormData();
    // body.append("AccountIDs", JSON.stringify(IDs));
    //  
    for (var i = 0; i < IDs.length; i++) {
      body.append("AccountIDs[]", IDs[i]);
    }
    let response = await this.$axios.post(
      "accounting/account-card/copy-accounts",
      body
    );
  },
  async search({ commit }, searchString) {
    let response = await this.$axios.post(
      `accounting/account-card/${searchString}`,
      body
    );
    let data = response.data.data;

    commit("setData", data);
    return response;
  }
};
