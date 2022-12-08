export const state = () => ({
  dialog: false
});

export const mutations = {
  updateDialogState(state, status) {
    state.dialog = status;
  }
};
