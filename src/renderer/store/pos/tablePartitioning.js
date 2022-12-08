export const state = () => ({
  showDialog: false,
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },
};