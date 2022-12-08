export const state = () => ({
  filesList: [],
  uploadPercentage: 0,
  gaidTypesForFiles: {
    gaid: 0,
    voucher: 1,
    invoice: 2,
    asset: 3
  }
});

export const mutations = {
  deleteRecord(state, FileId) {
    state.filesList.forEach((item, index) => {
      if (item.id == FileId) state.filesList.splice(index, 1);
    });
  },
  setFilesList(state, files) {
    state.filesList = files;
  },
  setUploadPercentage(state, percentage) {
    state.uploadPercentage = percentage;
  }
};
export const actions = {
  attachFile({ commit }, payload, type) {
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
    return this.$axios.post(`general/files/${payload.type}`, record, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: progressEvent => {
        commit(
          "setUploadPercentage",
          parseInt(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          )
        );
      }
    });
  },
  fetchFiles({ commit }, { Id, type }) {
    return this.$axios
      .get(`general/files/${type}?ID=${Id}`)
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setFilesList", data);
        }
      })
      .catch(error => {
        // commit global state to show error message With get Request
      });
  },
  attachGaidFile({ dispatch }, payload) {
    return dispatch("attachFile", { ...payload, type: "gaids" });
  },
  attachVoucherFile({ dispatch }, payload) {
    return dispatch("attachFile", { ...payload, type: "vouchers" });
  },
  attachInvoicesFile({ dispatch }, payload) {
    return dispatch("attachFile", { ...payload, type: "invoices" });
  },
  attachAssetFile({ dispatch }, payload) {
    return dispatch("attachFile", { ...payload, type: "assets" });
  },
  fetchVoucherFiles({ dispatch }, { voucherId }) {
    return dispatch("fetchFiles", { Id: voucherId, type: "vouchers" });
  },
  fetchInvoiceFiles({ dispatch }, { invoiceId }) {
    return dispatch("fetchFiles", { Id: invoiceId, type: "invoices" });
  },
  fetchAssetFiles({ dispatch }, { assetId }) {
    return dispatch("fetchFiles", { Id: assetId, type: "assets" });
  },
  fetchGiadFiles({ dispatch, commit }, { code, generalType, type }) {
    return this.$axios
      .get(
        `general/files/gaids?code=${code}&generalType=${generalType}&type=${Number(
          type
        )}`
      )
      .then(response => {
        if (response.status == 200) {
          let data = response.data.data;
          commit("setFilesList", data);
        }
      });
  },
  deleteFile({ commit }, id) {
    return this.$axios
      .delete(`general/files/${id}`)
      .then(response => {
        if (response.status == 200) {
          commit("deleteRecord", id);
        }
      })
      .catch(error => {
        // commit global state to show error message With get Request
      });
  }
};
