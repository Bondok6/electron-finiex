<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full d-flex justify-center"
      label-position="top"
      :model="form"
    >
      <span>
        <el-input
          class="text-color bl-none mb-1 mt-4 w-300 ml-2"
          v-model="form.searchValue"
          @input="handleSearch()"
          :placeholder="$t('search')"
        >
          <template slot="append"><i class="el-icon-search"></i></template>
        </el-input>
      </span>

      <span>
        <el-input
          class="text-color mb-1 mt-4 w-150 ml-2 text-center"
          :placeholder="$t('records-number')"
          readonly="readonly"
        ></el-input>
        <el-input
          class="text-color mb-1 mt-4 w-80 ml-2 text-center"
          :min="1"
          :max="100"
          :value="total"
        ></el-input>
      </span>
    </el-form>
  </el-container>
</template>

<script>
// import EntrySearch from "~/components/static/entrySearch";

export default {
  name: "search",
  components: {
    // EntrySearch
  },

  data: function() {
    return {
      form: {
        searchValue: ""
      }
    };
  },
  props: ["total"],
  methods: {
    handleSearch() {
       
      this.$store.dispatch("Accounting/receiptCompoundVouchers/fetchRecords", {
        pageNumber: 1,
        SearchString: this.form.searchValue
      });
    }
  }
};
</script>
