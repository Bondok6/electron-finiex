export const state = () => ({
  showDialog: false,
  showPayByTotalSeg: false,
  delivery: false,
  activePane: '0',
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateShowByTotal(state, showPayByTotalSeg) {
    state.showPayByTotalSeg = showPayByTotalSeg;
  },

  updateActivePane(state, activePane) {
    state.activePane = activePane;
  },

  updateDelivery(state, delivery) {
    state.delivery = delivery;
  }
};
