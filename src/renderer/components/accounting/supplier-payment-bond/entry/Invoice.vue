<template>
  <entry-search @search="handleSearch" :recordNumber="total" />
</template>

<script>
import EntrySearch from "~/components/static/entrySearch";

export default {
  name: "search",
  components: {
    EntrySearch
  },

  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSearch(Value) {
      this.$store.dispatch("Accounting/supplierPaymentBond/fetchRecords", {
        SearchString: Value
      });
    }
  }
};
</script>
