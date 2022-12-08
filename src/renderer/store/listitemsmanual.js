export const state = () => ({
    dialog: false,
  });
  
  export const mutations = {
    updateDialogState(state, key) {
      state.dialog = key;
    },
  };
  