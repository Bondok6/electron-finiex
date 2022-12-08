export const state = () => ({
  showDialog: false,
  table_number : "",
  order_number: "",
  invoice_number: "",
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },
  updateTableNumber(state, table_number) {
    state.table_number = table_number;
  },
  updateOrderNumber(state, order_number) {
    state.order_number = order_number;
  },
  updateInvoiceNumber(state, invoice_number) {
    state.invoice_number = invoice_number;
  }
};
