export const state = () => ({
    show_currency : false,
});

export const mutations = {
    show_currency(state, key) {
        state.show_currency = key;
    },
}