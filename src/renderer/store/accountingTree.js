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
        children: item.hasChildren ? [{ hasChildren: false }] : [],
        hasChildren: item.hasChildren,
        accID: item.accID,
        mainFinalAccount: item.mainFinalAccount
      };
    });
  },
  updateDialogState(state, key) {
    state.dialog = key;
    //
  }
};

export const actions = {
  async getChildren({ commit }, branchId) {
// condition on template Liter to handel if branchId is empty ==> mean user remove text from input field
    let response = await this.$axios.get(
      `accounting/account-card/parent/${branchId == '' ? 0 : branchId}`
    );
    let data = response.data.data;
    commit("setData", data);
    return response;
  }
  // async search({ commit }, searchString) {
  //   let response = await this.$axios.post(
  //     `accounting/account-card/parent/${searchString}`
  //   );
  //   let data = response.data.data;

  //   commit("setData", data);
  //   return response;
  // }
};
