export const state = () => ({
  showReturnMethodDialog: true,
  showReturnByOrderDialog: false,
  showReturnByTableDialog: false,
});

export const mutations = {
  updateShowReturnMethodDialog(state, showReturnMethodDialog) {
    state.showReturnMethodDialog = showReturnMethodDialog;
  },

  updateShowReturnByOrderDialog(state, showReturnByOrderDialog) {
    state.showReturnByOrderDialog = showReturnByOrderDialog;
  },

  updateShowReturnByTableDialog(state, showReturnByTableDialog) {
    state.showReturnByTableDialog = showReturnByTableDialog;
  },
};
