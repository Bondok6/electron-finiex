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
  props: ["total"],
  data: function() {
    return {
      form: {
        searchValue: ""
      }
    };
  },
  methods: {
    handleSearch() {
      this.$store.dispatch(
        "purchases/purchasesInvoice/fetchPurchasesInvoiceList",
        {
          pageNumber: 1,
          SearchString: this.form.searchValue
        }
      );
    }
  }
};
</script>
