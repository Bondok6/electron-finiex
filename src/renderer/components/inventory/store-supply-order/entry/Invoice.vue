<template>
<entry-search @search="handleSearch" :record-number="total"/>
</template>

<script>
import EntrySearch from '~/components/static/entrySearch';
export default {
  name: "search",
  components: {
    EntrySearch
  },
  props:['total'],
  methods: {
    handleSearch(value) {
      this.$store.dispatch("inventory/storeSupplyOrder/fetchRecords", {
        SearchString: value
      });
    }
  }
};
</script>
