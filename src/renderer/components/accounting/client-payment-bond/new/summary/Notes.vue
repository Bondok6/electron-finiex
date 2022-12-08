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
          v-model="notes"
        >
        </el-input>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Tafgeet from "tafgeetjs";
export default {
  data() {
    return {
      notes: ""
    };
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/clientPaymentBond/setRecordDetails"
    })
  },

  computed: {
    ...mapState({
      RecordDetails: state => state.Accounting.clientPaymentBond.RecordDetails
    }),
    totalInvoicesAmountWord() {
      console.log(this.RecordDetails.total_voucher_amount);
      if (this.RecordDetails.total_voucher_amount) {
        // remove first word "فقط"
        return new Tafgeet(this.RecordDetails.total_voucher_amount, "SAR")
          .parse()
          .replace(/فقط/g, "");
      } else {
        return "صفر";
      }
    },
    totalRemainAmountWord() {
      if (this.RecordDetails.total_remain_amount) {
        // remove first word "فقط"
        return new Tafgeet(this.RecordDetails.total_remain_amount, "SAR")
          .parse()
          .replace(/فقط/g, "");
      } else {
        return "صفر";
      }
    }
  },
  watch: {
    voucherDetails: {
      handler(newValue, oldValue) {
        this.setRecordDetails({
          voucherDetails: newValue
        });
      }
    }
  }
};
</script>
