export const state = () => ({
    purchasesOrdersList: [],
    paginationConfig: {
        pageNumber: 1,
        totalOrders: 0,
        pageSize: 10,
    },
});

export const mutations = {
    setpurchasesOrdersList(state, payload) {
        state.purchasesOrdersList = payload;
    },
    setPaginationConfig(state, payload) {
        state.paginationConfig = payload;
    },
}

export const actions = {
    async fetchpurchasesOrdersList(
        { commit }, 
        SearchParams = {}
        ){
        this.commit("loaded", false, { root: true });
          try {
            const api = `purchases/purchases-orders`;
            const response = await this.$axios.get(api,{params: SearchParams});
            let data = response.data;
            commit("setpurchasesOrdersList", data.data);
            commit("setPaginationConfig",{
                pageNumber: data.currentPage,
                totalOrders: data.totalCount,
                pageSize: data.pageSize,
            });
            window.scrollTo(0, 200);
            this.commit("loaded", true, { root: true });  
          }catch (e) {
            console.log(e.response);
          }  
    }
}