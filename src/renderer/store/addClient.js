export const state = () => ({
  showDialog: false,
  mobile_number: '',
  client_name: '',
  tax_number: '',
  card_no_cust: '',
  client_address: '',
  employee_driver_name: '',
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },

  updateMobileNumber(state, mobile_number) {
    state.mobile_number = mobile_number;
  },

  updateClientName(state, client_name) {
    state.client_name = client_name;
  },
  
  updateTaxNumber(state, tax_number) {
    state.tax_number = tax_number;
  },

  updateCardNoCust(state, card_no_cust) {
    state.card_no_cust = card_no_cust;
  },

  updateClientAddress(state, client_address) {
    state.client_address = client_address;
  },

  updateEmployeeDriverName(state, employee_driver_name) {
    state.employee_driver_name = employee_driver_name;
  },
};
