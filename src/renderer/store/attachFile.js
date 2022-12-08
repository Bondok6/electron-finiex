export const state = () => ({
  showDialog: false,
  document_title: '',
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateDocumentTitle(state, document_title) {
    state.document_title = document_title;
  },
};
