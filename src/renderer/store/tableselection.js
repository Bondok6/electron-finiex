export const state = () => ({
    select: true,
    price_of_attached_item_zero: false,
  });
  
  export const mutations = {
    select(state, key) {
      state.select = key;
    },

    price_of_attached_item_zero(state, key) {
      state.price_of_attached_item_zero = key;
    },
  };
  