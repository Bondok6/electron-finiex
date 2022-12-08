<template>
  <entry-search @search="handleSearch" :record-number="total"/>
</template>
<script>
import EntrySearch from '~/components/static/entrySearch';

export default {
  name: "invoice",
  components: {
    EntrySearch
  },
  props:['total'],
  methods: {
    handleSearch(value) {
      this.$store.dispatch("suppliersManagement/supplierData/fetchRecords", {
        SearchString: value
      });
    }
  }
};
</script>
