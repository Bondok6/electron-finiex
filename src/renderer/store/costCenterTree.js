export const state = () => ({
  dialog: false
});

export const mutations = {
  updateDialogState(state, status) {
    state.dialog = status;
  }
};
export const actions = {
  getChildren(_, { parentID }) {
    return this.$axios.get(
      `general/cost-centers/children?ParentID=${parentID}`
    );
  }
};
