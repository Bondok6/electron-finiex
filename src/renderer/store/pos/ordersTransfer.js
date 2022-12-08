export const state = () => ({
  showDialog: false,
  invoice_number : "",
  order_number: "",
  table_number_transfered_from: "",
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },
  updateInvoiceNumber(state, invoice_number) {
    state.invoice_number = invoice_number;
  },
  updateOrderNumber(state, order_number) {
    state.order_number = order_number;
  },
  updateTableNumberTransferedFrom(state, table_number_transfered_from) {
    state.table_number_transfered_from = table_number_transfered_from;
  }
};
