<template>
  <div class="text-unbold d-flex flex-wrap">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("amount-in-letters") }}
      </span>
      <span class="input-style mx-2 mt-2">{{
        totalWords ? totalWords : " "
      }}</span>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total") }}
      </span>
      <span class="input-style mx-2 mt-2">
        {{ totalNumbers ? totalNumbers.toLocaleString() : 0 }}</span
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
      form: {
        total: 0,
        total_LE: 0,
        net: 0
      }
    };
  },
  computed: {
    ...mapState({
      totalNumbers: state =>
        state.Accounting.paymentCompoundVouchers.RecordDetails.total
    }),
    totalWords() {
      if (this.totalNumbers) {
        let word = new Tafgeet(this.totalNumbers, "SAR").parse().split(" ");
        word.splice(0, 1);
        // remove first word "فقط"
        return word.join(" ");
      } else {
        return "لا يوجد";
      }
    }
  }
};
</script>
