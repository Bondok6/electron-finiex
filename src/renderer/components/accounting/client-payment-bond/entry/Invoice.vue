<template>
  <div>
    <entry-search @search="handleSearch" :recordNumber="total" />
  </div>
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
       

      this.$store.dispatch("Accounting/clientPaymentBond/fetchRecords", {
        SearchString: Value
      });
    }
  }
};
</script>
