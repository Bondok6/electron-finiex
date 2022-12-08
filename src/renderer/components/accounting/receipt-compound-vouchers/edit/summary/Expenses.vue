<template>
  <div class="text-unbold d-flex flex-wrap">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("amount-in-letters") }}
      </span>
      <span class="input-style mx-2 mt-2">
        {{ totalWords ? totalWords : " " }}</span
      >
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total") }}
      </span>
      <span class="input-style mx-2 mt-2">
        {{ total ? total.toLocaleString() : 0 }}</span
      >
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tafgeet from "tafgeetjs";
export default {
  name: "expenses",

  data: function() {
    return {
      total: 0
    };
  },
  computed: {
    ...mapState({
      RecordDetails: state =>
        state.Accounting.receiptCompoundVouchers.RecordDetails
    }),
    totalWords() {
      if (this.total) {
        let word = new Tafgeet(this.total, "SAR").parse().split(" ");
        word.splice(0, 1);
        // remove first word "فقط"
        return word.join(" ");
      } else {
        return "لا يوجد";
      }
    }
  },
  watch: {
    RecordDetails: {
      handler: function(val) {
         
        this.total = val.total;
      },
      deep: true
    }
  }
};
</script>
