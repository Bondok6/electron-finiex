export const state = () => ({
  generalizationRecords: [],
  paginationConfigGeneralization: {},
  editMode: false,
  recordsWillEdit: [],
  searchParams: {},
  percentage: 0
});
export const mutations = {

  setSearchParams(state, payload) {
    state.searchParams = payload;
  },
  setGeneralizationRecordsRecords(state, payload) {
    state.generalizationRecords = payload;
  },
  paginationConfigGeneralization(state, config) {
    state.paginationConfigGeneralization = config;
  },
  toggleEditMode(state, status) {
    state.editMode = status;
  },
  setRecordsWillEdit(state, payload) {
    console.log(payload);
    if (Object.keys(payload).length > 0) {
      // if payload is exist in recorddetails remove it and add new one
      console.log("payload", state.recordsWillEdit);
      state.recordsWillEdit = state.recordsWillEdit?.filter(
        item => item?.itemID != payload.itemID
      );
      console.log("payload", state.recordsWillEdit);

      state.recordsWillEdit.push(payload);
    } else {
      state.recordsWillEdit = [];
    }
  },
  taxPercentage(state, payload) {
    state.percentage = payload;
  },
  removeRecordFromWillEdit(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.recordsWillEdit = state.recordsWillEdit.filter(
        item => item.itemID != payload.itemID
      );
    } else {
      state.recordsWillEdit = [];
    }
  }
};
export const actions = {

  async fetchGeneralizationRecords({ commit }, searchParams = {}) {
    this.commit("loaded", false, { root: true });
    try {
      let API = `general/items-tax/paginated?`;
      let params = Object.entries(searchParams);
      // append search params to the API if not empty
      params.forEach(([key, value], index) => {
        // not send empty string to the API beacuse will send => search=&
        API +=
          value !== null && value !== ""
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
      let records = data.map(item => {
        return {
          ...item,
          check: false
        };
      });
      commit("setGeneralizationRecordsRecords", records);
      commit("paginationConfigGeneralization", {
        totalPages: totalPages,
        totalRecords: totalCount,
        pageNumber: currentPage,
        hasPreviousPage: hasPreviousPage,
        hasNextPage: hasNextPage,
        pageSize: pageSize
      });
      commit("setSearchParams", searchParams);
      window.scrollTo(0, 200);
      this.commit("loaded", true, { root: true });
    } catch (e) {
      return e.response;
    }
  },
  update(_, payload) {
    let record = JSON.stringify({ items: payload });
    return this.$axios.put("general/items-tax", record);
  },
  updateAll(_, payload) {
    let record = JSON.stringify(payload);
    return this.$axios.put("general/items-taxall", record);
  }
};
