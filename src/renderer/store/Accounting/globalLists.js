export const state = () => ({
    accountCardList: [],
});

export const mutations = {
    setAccountCardList(state, payload) {
        state.accountCardList = [ ...payload ];
    },
};

export const actions = {
    async getAccountCardList({ commit },searchString) {
        try {
          let response = await this.$axios.get(`accounting/account-card/list?PageNumber=1&PageSize=10&MainOrSub=true&SearchString=${searchString}`);
          let data = response.data.data;
          commit("setAccountCardList", data);
          return data
        } catch (e) {
          return e.response.data.message;
        }
      },
};