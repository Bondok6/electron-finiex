export const state = () => ({
         records: [],
         paginationConfig: {},
         searchParams: {},
         itemsCardList: [],
         unitsList: [],
         itemsTypesList: [],
         companiesList: [],
         itemsCategoriesList: [],
         showUnitBarcode: false,
         showSalesAfterTax: false,
         priceItemsPercentage: false,
         editMode: false,
         recordsWillEdit: [],
         price: 0,
         priceColumnSelected: "",
         // Enum
         PriceColumn: {
           openingCost: 0,
           lastPurchasePrice: 1,
           costPrice: 2,
           wholesalePrice: 3,
           lowestSalePrice: 4,
           salePriceBeforeTax: 5
         }
       });
export const mutations = {
  showUnitBarcode(state, key) {
    state.showUnitBarcode = key;
  },
  showSalesAfterTax(state, key) {
    state.showSalesAfterTax = key;
    console.log(state.showSalesAfterTax);
  },
  showPriceItemsPercentage(state, key) {
    state.priceItemsPercentage = key;
  },
  setRecords(state, payload) {
    state.records = payload;
  },
  paginationConfig(state, config) {
    state.paginationConfig = config;
  },
  setSearchParams(state, payload) {
    state.searchParams = payload;
  },
  setItemsCardList(state, payload) {
    state.itemsCardList = payload;
  },
  setUnitsList(state, payload) {
    state.unitsList = payload;
  },
  setItemsTypesList(state, payload) {
    state.itemsTypesList = payload;
  },
  setCompaniesList(state, payload) {
    state.companiesList = payload;
  },
  setItemsCategoriesList(state, payload) {
    state.itemsCategoriesList = payload;
  },
  toggleEditMode(state, status) {
    state.editMode = status;
  },
  pricePercentage(state, price) {
    state.price = price;
  },
  setPriceColumnSelected(state, payload) {
    state.priceColumnSelected = payload;
  },
  setRecordsWillEdit(state, payload) {
    if (Object.keys(payload).length > 0) {
      if (state.recordsWillEdit.length == 0) {
        state.recordsWillEdit = [payload];
      } else {
        if (
          // check if the item has itemID is exist in the array
          state.recordsWillEdit.some(item => item.ID == payload.ID)
        ) {
          state.recordsWillEdit = state.recordsWillEdit
            .filter(item => item.ID != payload.ID)
            .concat([payload]);
        } else {
          state.recordsWillEdit.push(payload);
        }
      }
    } else {
      state.recordsWillEdit = [];
    }
    console.log(state.recordsWillEdit);
  },
  removeRecordFromWillEdit(state, payload) {
    if (Object.keys(payload).length > 0) {
      state.recordsWillEdit = state.recordsWillEdit.filter(
        item => item.ID != payload.ID
      );
    } else {
      state.recordsWillEdit = [];
    }
  }
};
export const actions = {
         // select search
         async fetchItemsCardList(
           { commit },
           { searchString } = { searchString: "" }
         ) {
           try {
             let API = `general/items/list?${
               searchString ? `searchString=${searchString}` : ""
             }`;
             let response = await this.$axios.get(API);
             let { data } = response.data;
             commit("setItemsCardList", data);
           } catch (e) {
             return e.response;
           }
         },

         async fetchUnitsList(
           { commit },
           { searchString } = { searchString: "" }
         ) {
           try {
             let API = `general/units/list?${
               searchString ? `searchString=${searchString}` : ""
             }`;
             let response = await this.$axios.get(API);
             let { data } = response.data;
             console.log(data)
             commit("setUnitsList", data);
           } catch (e) {
             return e.response;
           }
         },
         async fetchItemsCategorysList(
           { commit },
           { searchString } = { searchString: "" }
         ) {
           try {
             let API = `general/items-categories/paginated?${
               searchString ? `searchString=${searchString}` : ""
             }`;
             let response = await this.$axios.get(API);
             let { data } = response.data;
             commit("setItemsCategoriesList", data);
           } catch (e) {
             return e.response;
           }
         },
         async fetchCompaniesList(
           { commit },
           { searchString } = { searchString: "" }
         ) {
           try {
             let API = `general/manufactoring-compaines/paginated${
               searchString ? `searchString=${searchString}` : ""
             }`;

             let response = await this.$axios.get(API);
             let { data } = response.data;
             commit("setCompaniesList", data);
           } catch (e) {
             return e.response;
           }
         },
         async fetchItemsTypeList(
           { commit },
           { searchString } = { searchString: "" }
         ) {
           try {
             let API = `general/items-types/paginated${
               searchString ? `searchString=${searchString}` : ""
             }`;

             let response = await this.$axios.get(API);
             let { data } = response.data;
             commit("setItemsTypesList", data);
           } catch (e) {
             return e.response;
           }
         },
         async fetchRecords({ commit }, searchParams = {}) {
           this.commit("loaded", false, { root: true });
           try {
             let API = `general/item-units/list?`;
             let params = Object.entries(searchParams);
             // append search params to the API if not empty
             params.forEach(([key, value], index) => {
               console.log(params.length - 1 == index ? "" : "&");
               API +=
                 value !== null
                   ? `${key}=${value}${params.length - 1 == index ? "" : "&"}`
                   : "";
             });
             // to send user to same page after edit
             commit("setSearchParams", searchParams);
             let response = await this.$axios.get(API);
             let {
               data,
               totalPages,
               totalCount,
               currentPage,
               hasPreviousPage,
               hasNextPage,
               pageSize
             } = response.data;
             let records = data.map(item => {
               return {
                 ...item,
                 check: false,

                 ID:
                   Math.random()
                     .toString(36)
                     .substring(7) + new Date().getTime()
               };
             });
             commit("setRecords", records);
             commit("paginationConfig", {
               totalPages: totalPages,
               totalRecords: totalCount,
               pageNumber: currentPage,
               hasPreviousPage: hasPreviousPage,
               hasNextPage: hasNextPage,
               pageSize: pageSize
             });
             window.scrollTo(0, 200);
             this.commit("loaded", true, { root: true });
           } catch (e) {
             return e.response;
           }
         },

         update(_, payload) {
           let record = JSON.stringify({ items: payload });
           return this.$axios.put("general/item-units", record);
         },
         updateAll(_, payload) {
           let record = new FormData();
           record.append("priceColumn", payload.priceColumnSelected);
           record.append("percentage", payload.percentage);
           return this.$axios.put("general/item-units/per", record);
         }
       };
