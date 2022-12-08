<template>
  <!-- <div class="container invoice-summary here pb-2 px-2">
    <p>{{$t("total-debit")}}: {{ $numberWithCommas(totals.totalDebit) }}</p>
    <p>{{$t("total-credit")}}: {{ $numberWithCommas(totals.totalCredit) }}</p>
    <p>{{$t("total-difference")}}: {{ $numberWithCommas(totals.totalDebit - totals.totalCredit) }}</p>
  </div> -->
  <div class="text-center  container ma-4 mx-8 py-2 mt-0 invoice-summary">
    <div class="text-unbold d-flex flex-wrap space-around">
      <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
        <span>
          {{ $t("total-debit") }}
        </span>
        <span class="input-style mx-2 mt-2">{{ $numberWithCommas(totals.totalDebit) }}</span>
      </span>
      <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
        <span>
          {{ $t("total-credit") }}
        </span>
        <span class="input-style mx-2 mt-2">{{ $numberWithCommas(totals.totalCredit) }}</span>
      </span>
      <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
        <span>
          {{ $t("total-difference") }}
        </span>
        <span class="input-style mx-2 mt-2">{{
          $numberWithCommas(totals.totalDebit - totals.totalCredit)
        }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "summary-section",
  computed: {
    ...mapState({
      totals: state => state.Accounting.openingBalance.totals,
    })
  }
};
</script>
<style scoped>

.container.invoice-summary.here {
  padding-top: 2rem;
}
</style>
