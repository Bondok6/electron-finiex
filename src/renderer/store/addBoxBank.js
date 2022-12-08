export const state = () => ({
  showDialog: false,
  box_bank_name: '',
  box_bank_number: '',
  account_number: '',
  payment_type: 1,
});
"Accounting/clientPayment/setRecord"
export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateBoxBankName(state, box_bank_name) {
    state.box_bank_name = box_bank_name;
  },

  updateBoxBankNumber(state, box_bank_number) {
    state.box_bank_number = box_bank_number;
  },
  
  updateAccountNumber(state, account_number) {
    state.account_number = account_number;
  },

  updatePaymentType(state, payment_type) {
    state.payment_type = payment_type;
  }
};
