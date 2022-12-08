export const state = () => ({
    dialog: true,
    nestedNestedDialog: false,
  });
  
  export const mutations = {
    updateDialogState(state, key) {
      state.dialog = key;
    },

    nestedNestedDialog(state, key) {
      state.nestedNestedDialog = key;
    },
  };
  