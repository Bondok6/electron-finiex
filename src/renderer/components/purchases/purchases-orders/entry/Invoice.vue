<template>
<entry-search @search="handleSearch" :recordNumber="total"/>
</template>

<script>
import EntrySearch from '~/components/static/entrySearch';

export default {
  name: "search",
  props:["total"],
  components: {
    EntrySearch
  },

  methods: {
    handleSearch(searchstring){
      this.$store.dispatch("purchases/purchasesOrders/fetchpurchasesOrdersList", {
        pageNumber: 1,
        SearchString: searchstring
      });
    }
  }
};
</script>