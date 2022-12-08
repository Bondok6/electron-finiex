export const state = () => ({
  showDialog: false,
  transferSomeItems: false,
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateTransferSomeItems(state, transferSomeItems) {
    state.transferSomeItems = transferSomeItems;
  }
};
