<template>
  <div class="text-center mt-2">
    <el-button
      size="mini"
      class="mb-1 btn-violet-faded"
      @click="display"
      @keyup.enter="display"
      >{{ $t("display-f7") }}</el-button
    >
    <el-button size="mini" class="mb-1 btn-dark-grey">{{
      $t("print-f4")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-dark-grey">{{
      $t("print-pdf")
    }}</el-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "actions",
  computed: {
    ...mapState({
      advancedOptions: "Accounting/accountingDailyJournal/advancedOptions"
    })
  },
  methods: {
    display() {
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchAdvancedRecords", {
        pageNumber: 1
      });
    }
  }
};
</script>
