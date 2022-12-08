<template>
  <el-row class="mt-2 mx-3">
    <el-col :sm="24" :md="12" :lg="16">
      <div
        class="
          text-unbold
          d-flex
          flex-wrap
          align-baseline
          action-buttons-right
          mb-2
        "
      >
        <span>
          <span class="mb-1 d-inline-block">
            {{ $t("amount-in-letters") }}
          </span>
          <span class="input-style d-inline-block">
            {{ totalInvoicesAmountWord }}
          </span>
        </span>
        <span class="mt-2">
          <span class="mb-1 d-inline-block">
            {{ $t("total") }}
          </span>
          <span class="input-style"
            >{{
              RecordDetails.total_voucher_amount
                ? RecordDetails.total_voucher_amount.toLocaleString()
                : ""
            }}
          </span>
        </span>
        <div v-if="RecordDetails.total_remain_amount > 0">
          <span class="mt-2">
            <span class="mb-1 d-inline-block">
              {{ $t("remaining-amount-owed-to-the-customer") }}
            </span>
            <span class="input-style" style="color: red"
              >{{
                RecordDetails.total_remain_amount
                  ? RecordDetails.total_remain_amount.toLocaleString()
                  : ""
              }}
            </span>
          </span>
          <!-- 
          <span class="mt-2">
            <span class="mb-1 d-inline-block">
              {{ $t("remaining-amount-owed-to-the-customer") }}
            </span>
            <span class="input-style">{{ totalRemainAmountWord }} </span>
          </span> -->
        </div>
        <div v-else-if="RecordDetails.total_remain_amount < 0">
          <span class="mt-2">
            <span class="mb-1 d-inline-block">
              {{ $t("remaining-amount-to-customer") }}
            </span>
            <span class="input-style"
              >{{
                RecordDetails.total_remain_amount
                  ? Math.abs(RecordDetails.total_remain_amount).toLocaleString()
                  : ""
              }}
            </span>
          </span>

          <!-- <span class="mt-2">
            <span class="mb-1 d-inline-block">
              {{ $t("remaining-amount-owed-to-the-customer") }}
            </span>
            <span class="input-style">{{ totalRemainAmountWord }} </span>
          </span> -->
        </div>
      </div>
    </el-col>

    <el-col :sm="24" :md="12" :lg="8">
      <div>
        <el-input
          class="notes-summary text-center"
          type="textarea"
          :rows="7"
          :placeholder="$t('details')"
          v-model="voucherDetails"
        >
        </el-input>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Tafgeet from "tafgeetjs";

export default {
  data() {
    return {
      voucherDetails: ""
    };
  },

  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/supplierPaymentBond/setRecordDetails"
    })
  },

  watch: {
    singleRecordDetails: {
      handler: function(newValue, oldValue) {
        this.voucherDetails = newValue.voucherDetails;
      }
    },
    voucherDetails: {
      handler: function(newValue, oldValue) {
        this.setRecordDetails({
          voucherDetails: newValue
        });
      }
    }
  },
  computed: {
    ...mapState({
      // to Get voucherDetails value
      singleRecordDetails: state =>
        state.Accounting.supplierPaymentBond.singleRecordDetails,
      // to get total paid amount
      RecordDetails: state => state.Accounting.supplierPaymentBond.RecordDetails
    }),
    totalInvoicesAmountWord() {
      console.log(this.RecordDetails.total_voucher_amount);
      if (this.RecordDetails.total_voucher_amount) {
        let word = new Tafgeet(this.RecordDetails.total_voucher_amount, "SAR")
          .parse()
          .split(" ");
        word.splice(0, 1);
        // remove first word "فقط"
        return word.join(" ");
      } else {
        return "لا يوجد";
      }
    },
    totalRemainAmountWord() {
      if (this.RecordDetails.total_remain_amount) {
        let word = new Tafgeet(this.RecordDetails.total_remain_amount, "SAR")
          .parse()
          .split(" ");
        word.splice(0, 1);
        // remove first word "فقط"
        return word.join(" ");
      } else {
        return "لا يوجد";
      }
    }
    // totalRemainAmountWord() {
    //   if (this.RecordDetails.total_remain_amount) {
    //     let word = new Tafgeet(this.RecordDetails.total_remain_amount, "SAR")
    //       .parse()
    //       .split(" ");
    //     word.splice(0, 1);
    //     // remove first word "فقط"
    //     return word.join(" ");
    //   } else {
    //     return "لا يوجد";
    //   }
    // }
  }
};
</script>
