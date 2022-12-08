export const state = () => ({
  showDialog: false,
  item_price: "",
  selling_amount: "",
  selling_net: "",
});

export const mutations = {
  updateDialogState(state, showDialog) {
    state.showDialog = showDialog;
  },
  updateItemPrice(state, item_price) {
    state.item_price = item_price;
  },
  updateSellingAmount(state, selling_amount) {
    state.selling_amount = selling_amount;
  },
  updateSellingNet(state, selling_net) {
    state.selling_net = selling_net;
  }
};
