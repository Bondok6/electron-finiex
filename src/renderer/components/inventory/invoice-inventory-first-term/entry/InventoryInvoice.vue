<template>
  <entry-search @search="handleSearch" :recordNumber="total" />
</template>

<script>
import EntrySearch from "~/components/static/entrySearch";

export default {
  name: "search",
  props: ["total"],
  components: {
    EntrySearch
  },
  methods: {
    handleSearch(searchstring) {
      this.$store.dispatch(
        "inventory/invoiceInventoryFirstTerm/fetchfirstTermInvoiceList",
        {
          pageNumber: 1,
          SearchString: searchstring
        }
      );
    }
  }
};
</script>
