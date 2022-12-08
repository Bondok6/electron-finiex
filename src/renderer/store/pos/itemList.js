export const state = () => ({
  showDialog: false,
  search_target: "",
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateSearchTarget(state, search_target) {
    state.search_target = search_target;
  },
};
