<template>
  <div class="text-unbold d-flex flex-wrap space-around">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("number-of-bands") }}
      </span>
      <span class="input-style mx-2 mt-2">
        {{ details.totalRows }}
      </span>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-debit") }}
      </span>
      <span class="input-style mx-2 mt-2">{{ details.totalDebit }}</span>
    </span>
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-credit") }}
      </span>
      <span class="input-style mx-2 mt-2">{{ details.totalCredit }}</span>
    </span>
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-difference") }}
      </span>
      <span class="input-style mx-2 mt-2">{{
        details.totalDebit - details.totalCredit
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
      details: {
        totalRows: 0,
        totalDebit: 0,
        totalCredit: 0
      }
    };
  },
  computed: {
    ...mapState({
      RecordDetails: state => state.Accounting.accountingDailyJournal.RecordDetails
    })
  },
  watch: {
    RecordDetails: {
      handler: function(val) {
        this.details = {
          totalRows: val.totalRows,
          totalDebit: val.totalDebit,
          totalCredit: val.totalCredit
        };
      },
      deep: true
    }
  }
};
</script>
