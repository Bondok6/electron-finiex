export const state = () => ({
  records: [],
  singleRecordDetails: null,

  paginationConfig: {
    totalPages: 0,
    totalRecords: 0,
    pageNumber: 1,
    hasPreviousPage: false,
    hasNextPage: true,
    pageSize: 10
  },
  recordDetails: null
});

export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setSingleRecordDetails(state, payload) {
    state.singleRecordDetails = payload;
  },
  setRecordDetails(state, payload) {
    state.recordDetails = { ...state.recordDetails, ...payload };
  }
};

export const actions = {
  async fetchRecords(
    { commit, state },
    { pageNumber = 1, SearchString = "", pageSize = 10 }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/br-wh/list-branches?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchString=${SearchString}`;
      let response = await this.$axios.get(API);
      let data = response.data;
      commit("setRecords", data.data);
      commit("paginationConfig", {
        totalPages: data.totalPages,
        totalRecords: data.totalCount,
        pageNumber: data.currentPage,
        hasPreviousPage: data.hasPreviousPage,
        hasNextPage: data.hasNextPage,
        pageSize: data.pageSize
      });
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      return e.response;
    }
  },
  create({ state }) {
    let payload = state.recordDetails;
    console.log(payload["dataNotComplated"], payload);
    if (payload["dataNotComplated"]) {
      // TODO : Lang
      return Promise.reject(new Error(this.$i18n.t("complate_your_data")));
    }
    let record = new FormData();
    for (let key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key].forEach(item => {
          record.append(`${key}[]`, item);
        });
      } else {
        record.append(key, payload[key] ?? "");
      }
    }
    // return response to handle it from inside cmp
    return this.$axios.post("general/br-wh/branches", record);
  },

  fetchSingleRecord({ commit }, id) {
    return this.$axios
      .get(`general/br-wh/branche/${id}`)
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setSingleRecordDetails", {
            ...data
          });
        }
      })
      .catch(e => {
        throw Error(e.response.data.message);
      });
  },

  update({ state }) {
    let payload = state.recordDetails;
    if (payload["dataNotComplated"]) {
      // TODO : Lang
      return Promise.reject(new Error(this.$i18n.t("complate_your_data")));
    }
    let record = new FormData();
    for (let key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key].forEach(item => {
          record.append(`${key}[]`, item);
        });
      } else {
        record.append(key, payload[key] ?? "");
      }
    }
    return this.$axios.put(`general/br-wh/branches`, record);
  },
  delete(_, id) {
    return this.$axios.delete(`general/br-wh/branches/${id}`);
  },

  suggestCode() {
    return this.$axios.get(`general/br-wh/branch-max-code`);
  },
  maxAccId() {
    return this.$axios.get(`general/br-wh/branch-max-accid`);
  }
};
