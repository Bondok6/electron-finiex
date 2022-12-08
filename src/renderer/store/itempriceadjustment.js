export const state = () => ({
  unit_barcode: false,
  show_sales_after_tax: false,
  price_items_percentage: false,
  });
  
  export const mutations = {
    unit_barcode(state, key) {
      state.unit_barcode = key;
    },

    show_sales_after_tax(state, key) {
      state.show_sales_after_tax = key;
    },

    price_items_percentage(state, key) {
      state.price_items_percentage = key;
    },
  };
  