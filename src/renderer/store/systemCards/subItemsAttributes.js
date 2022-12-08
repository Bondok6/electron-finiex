export const state = () => ({
  records: [],
  paginationConfig: {},
  searchParams: {},
  listItems: []
});
export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setSearchParams(state, payload) {
    state.searchParams = payload;
  },
  setListItems(state, payload) {
    state.listItems = payload;
  }
};
export const actions = {
  async fetchItemsAttributes(
    { commit },
    // defalt params if user not pass object with searchString
    { searchString } = { searchString: "" }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/items-attributes/paginated?${
        searchString ? `searchString=${searchString}` : ""
      }`;
      // append search params to the API if not empty

      let response = await this.$axios.get(API);
      let { data } = response.data;
      commit("setListItems", data);
    } catch (e) {
      return e.response;
    }
  },
  suggestCode() {
    return this.$axios("general/sub-items-attributes/max-code");
  },
  async fetchRecords({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/sub-items-attributes/paginated?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
      let response = await this.$axios.get(API);
      commit("setSearchParams", searchParams);

      let {
        data,
        totalPages,
        totalCount,
        currentPage,
        hasPreviousPage,
        hasNextPage,
        pageSize
      } = response.data;
      commit("setRecords", data);
      commit("paginationConfig", {
        totalPages: totalPages,
        totalRecords: totalCount,
        pageNumber: currentPage,
        hasPreviousPage: hasPreviousPage,
        hasNextPage: hasNextPage,
        pageSize: pageSize
      });
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      return e.response;
    }
  },
  create(_, payload) {
    let record = new FormData();
    for (let key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key].forEach(item => {
          record.append(`${key}[]`, item);
        });
      } else {
        record.append(key, payload[key]);
      }
    }
    return this.$axios.post("general/sub-items-attributes", record);
  },
  update(_, payload) {
    let record = new FormData();
    for (let key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key].forEach(item => {
          record.append(`${key}[]`, item);
        });
      } else {
        record.append(key, payload[key]);
      }
    }
    return this.$axios.put("general/sub-items-attributes", record);
  },
  delete(_, { id }) {
    return this.$axios.delete(`general/sub-items-attributes/${id}`);
  },
  fetchSingleRecord(_, { id }) {
    return this.$axios.get(`general/sub-items-attributes/${id}`);
  }
};
