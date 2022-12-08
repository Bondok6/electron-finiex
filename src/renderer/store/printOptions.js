export const state = () => ({
  showDialog: false,
  invoice_print_selection: "",
  expense_print_selection: "",
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateInvoicePrintSelection(state, invoice_print_selection) {
    state.invoice_print_selection = invoice_print_selection;
  },

  updateExpensePrintSelection(state, expense_print_selection) {
    state.expense_print_selection = expense_print_selection;
  }
};
