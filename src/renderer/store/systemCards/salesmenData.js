export const state = () => ({
  records: [],
  paginationConfig: {},
  RecordDetails: {},
  singleRecordDetails: null
});
export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setRecordDetails(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.RecordDetails = { ...state.RecordDetails, ...payload };
    } else {
      state.RecordDetails = {};
    }
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = payload;
  }
};
export const actions = {
  async fetchRecords({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/sales-men/paginated?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        API +=
          value !== null
            ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
            : "";
      });
      let response = await this.$axios.get(API);
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
  suggestCode() {
    return this.$axios("general/sales-men/max-code");
  },
  create({ commit, state }) {
    let payload = state.RecordDetails;
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

    return this.$axios.post("general/sales-men", record);
  },
  fetchSingleRecord({ commit }, id) {
    return this.$axios.get(`general/sales-men/${id}`).then(response => {
      if (response.status == 200) {
        let data = response.data.data;
        commit("setSingleRecordDetails", {
          ...data
        });
      }
    });
  },

  update({ state }) {
    let payload = state.RecordDetails;
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
    return this.$axios.put(`general/sales-men`, record);
  },
  delete(_, { id }) {

    return this.$axios.delete(`general/sales-men/${id}`);
  },

};
