export const state = () => ({
  showIntervals: false,
});

export const mutations = {
  updateShowIntervals(state, key) {
    state.showIntervals = key;
  },
};
