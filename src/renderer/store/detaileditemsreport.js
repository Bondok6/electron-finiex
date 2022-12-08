export const state = () => ({
    summaryTable: false,
  });
  
  export const mutations = {
    updateTableState(state, key) {
      state.summaryTable = key;
    },
  };
  