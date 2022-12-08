export const state = () => ({
  error: null,
  accessToken: localStorage.getItem("accessToken") || "",
  loggedIn: localStorage.getItem("loggedIn") || "",
});

export const mutations = {
  setLoggedIn(state, value) {
    localStorage.setItem("loggedIn", value);
    state.loggedIn = value;
  },
  setAccessToken(state, value) {
    localStorage.setItem("accessToken", value);
  }
};
export const actions = {
  login(_, form) {
    return this.$axios.$post("/auth/sign-in", form);
  }
};
