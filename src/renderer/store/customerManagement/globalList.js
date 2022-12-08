export const state = () => ({
  customerGroup: []
});

export const mutations = {
  setRecords(state, records) {
    state.customerGroup = records;
  }
};

export const actions = {
  async fetchCustomerGroup({ commit }, searchParams = {}) {
    try {
      let API = `general/customer-groups/paginated?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
      // to send user to same page after edit
      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setRecords", data);
    } catch (e) {
      return e.response;
    }
  }
};
