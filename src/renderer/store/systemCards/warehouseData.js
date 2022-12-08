export const state = () => ({
  records: [],
  recordDetails  : {}
,  paginationConfig: {
    totalPages: 0,
    totalRecords: 0,
    pageNumber: 1,
    hasPreviousPage: false,
    hasNextPage: true,
    pageSize: 10
  }
});

export const mutations = {
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setRecordDetails(state, payload) {
    console.log(payload);
    state.recordDetails = payload;
  }
};

export const actions = {
  maxAccId() {
    return this.$axios("general/br-wh/warehouse-max-accid");
  },
  suggestCode() {
    return this.$axios("general/br-wh/warehouse-max-code");
  },
  async fetchRecords(
    { commit, state },
    { pageNumber = 1, SearchString = "", pageSize = 10 }
  ) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/br-wh/list-warehouses?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchString=${SearchString}`;
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
      return e.response.data.message;
    }
  },
  create({state}, payload) {
    return this.$axios.post("general/br-wh/warehouses", JSON.stringify(state.recordDetails));
  },

  fetchSingleRecord({ commit }, id) {
    return this.$axios
      .get(`general/br-wh/warehouses/${id}`)
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setRecordDetails", {
            ...data
          });
        }
      })
      .catch(e => {
        throw Error(e.response.data.message);
      });
  },

  update({ state }, payload) {
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
    return this.$axios.post("general/br-wh/warehouses", record);
  }
};
