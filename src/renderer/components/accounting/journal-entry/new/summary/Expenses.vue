<template>
  <div class="text-unbold d-flex flex-wrap space-around">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("number-of-bands") }}
      </span>
      <span class="input-style mx-2 mt-2">
        {{ RecordDetails.totalRows ?  RecordDetails.totalRows : 2 }}
      </span>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-debit") }}
      </span>
      <span class="input-style mx-2 mt-2">{{
        RecordDetails.totalDebit ? RecordDetails.totalDebit : 0
      }}</span>
    </span>
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-credit") }}
      </span>
      <span class="input-style mx-2 mt-2">{{
        RecordDetails.totalCredit ? RecordDetails.totalCredit : 0
      }}</span>
    </span>
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-difference") }}
      </span>
      <span class="input-style mx-2 mt-2">{{
        RecordDetails.totalDebit - RecordDetails.totalCredit
          ? RecordDetails.totalDebit - RecordDetails.totalCredit
          : 0
      }}</span>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "expenses",

  data: function() {
    return {
      form: {
        total: 0,
        total_LE: 0,
        net: 0
      }
    };
  },
  computed: {
    ...mapState({
      RecordDetails: state => state.Accounting.accountingDailyJournal.RecordDetails
    })
  }
};
</script>
