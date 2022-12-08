export const state = () => ({
  showDialog: false,
  invoice_number: "",
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateInvoiceNumber(state, invoice_number) {
    state.invoice_number = invoice_number;
  }
};
