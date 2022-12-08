<template>
  <el-form label-position="top" class="total-from">
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="width: 35%">
            <span class="total-label">{{ $t("sum") }}</span>
          </td>
          <td colspan="2">
            <el-input
              disabled
              :value="$numberWithCommas($convertToValidNumber(form.totalInvo))"
              class="text-center pa-0"
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td>
            <span class="total-label">{{ $t("discount-items") }}</span>
          </td>
          <td>
            <el-input
              disabled
              :value="
                $numberWithCommas($convertToValidNumber(form.discountInvo))
              "
              class="text-center pa-0"
            ></el-input>
          </td>
          <td>
            <el-input
              disabled
              class="text-center pa-0"
              :value="$convertToValidNumber(form.discountInvoPercent)"
            >
              <template slot="append">%</template>
            </el-input>
          </td>
        </tr>
        <tr>
          <td>
            <span class="total-label">{{ $t("others-discount") }}</span>
          </td>
          <td>
            <el-input
              :value="$convertToValidNumber(form.allwedDiscount)"
              @input="handleInputDiscount"
              @blur="handleDiscountNumberChange(form.allwedDiscount)"
              class="text-center pa-0"
            ></el-input>
          </td>
          <td>
            <el-input
              :value="$convertToValidNumber(form.allowedDiscountPercent)"
              @blur="handleDiscountPercentChange"
              @input="handleInputDiscountPercent"
              class="text-center pa-0"
            >
              <template slot="append">%</template>
            </el-input>
          </td>
        </tr>

        <!--        <tr>-->
        <!--          <td>-->
        <!--            <span class="total-label">{{$t('total-product-tax-100%')}}</span>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <el-input disabled :placeholder="0" class="text-center pa-0"></el-input>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <el-input disabled :placeholder="0" class="text-center pa-0">-->
        <!--              <template slot="append">%</template>-->
        <!--            </el-input>-->
        <!--          </td>-->
        <!--        </tr>-->
        <!--        </tr>-->

        <tr>
          <td>
            <span class="total-label">{{ $t("total-tax") }}</span>
          </td>
          <td>
            <el-input
              disabled
              :value="$numberWithCommas($convertToValidNumber(form.taxAmount))"
              class="text-center pa-0"
            ></el-input>
          </td>
          <td>
            <el-input
              disabled
              :value="$convertToValidNumber(form.taxAmountPercent)"
              class="text-center pa-0"
            >
              <template slot="append">%</template>
            </el-input>
          </td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{ $t("total-net") }}</span>
          </td>
          <td colspan="2">
            <div class="input-style total-display text-center">
              {{ $numberWithCommas($convertToValidNumber(form.netinv)) }}
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2">
            <el-button
              @click="roundActive = !roundActive ; calcRound()"
              class="mt-1 d-block width-full btn-cyan-light"
              >{{ $t("approximate") }} {{$numberWithCommas($convertToValidNumber(roundNo))}}</el-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </el-form>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "invoice-totals",
  data: function() {
    return {
      roundActive : false,
      roundNo : 0,
      totalBeforeTax: 0,
      form: {
        //
        discountInvoPercent: 0,
        discountInvo: 0,
        netinv: 0,
        //
        allwedDiscount: 0,
        allowedDiscountPercent: 0,
        //
        taxAmount: 0,
        taxAmountPercent: 0,
        //
        totalInvo: 0
      }
    };
  },

  methods: {
    calcRound(){
      let intergerNet = parseInt(this.form.netinv);
      if(this.roundActive){
        console.log("roundActive")
        this.roundNo = this.form.netinv - intergerNet
        this.form.netinv = intergerNet
      }else{
        this.form.netinv = intergerNet +  this.roundNo
        this.roundNo = 0
      }
      this.setRoundNo(this.roundNo)
    },
    handleInputDiscount(value) {
      this.form.allwedDiscount = Number(value);
    },
    handleInputDiscountPercent(value) {
      this.form.allowedDiscountPercent = value;
    },
    ...mapMutations({
      setAllowedDiscountChanged:
        "purchases/purchasesInvoice/setAllowedDiscountChanged",
      setRecordDetails: "purchases/purchasesInvoice/setRecordDetails",
      setRoundNo : "purchases/purchasesInvoice/setRoundNo",
      setTotals : "purchases/purchasesInvoice/setTotals"
    }),
    handleDiscountNumberChange(number) {
      if (Number(number) > this.form.netinv ) {
        this.form.allowedDiscountPercent = 0;
        this.form.allwedDiscount = 0;
        this.setAllowedDiscountChanged(0);
        this.$message("لا يمكن ان تكون قيمه الخصم اكبر من الاجمالي ");
        return;
      } else {
         this.form = {...this.form , allowedDiscountPercent : +(number/this.totalBeforeTax * 100 )}
         console.log({...this.form , allowedDiscountPercent : +(number/this.totalBeforeTax * 100 )})
         this.setAllowedDiscountChanged(+number);
      }

    },
    handleDiscountPercentChange() {
      console.log("handleDiscountPercentChange");
      console.log(this.form.allowedDiscountPercent)
      if (this.form.allowedDiscountPercent > 100) {
        this.form.allowedDiscountPercent = 0;
      }
      this.form.allwedDiscount =
        (this.totalBeforeTax / 100) * this.form.allowedDiscountPercent;
      this.setAllowedDiscountChanged(this.form.allwedDiscount);
    }
  },

  computed: {
    ...mapState({
      recordDetails: state => state.purchases.purchasesInvoice.recordDetails
    })
  },
  watch: {
    recordDetails: {
      handler(newVal) {
        console.log("restart");
        if (newVal.addInvoicesDetails.length > 0) {
          this.form.totalInvo = 0;
          this.form.netinv = 0;
          this.form.taxAmount = 0;
          this.form.discountInvo = 0;
          this.totalBeforeTax = 0;
          this.form.discountInvoPercent = 0;
          newVal.addInvoicesDetails.forEach(itemRow => {
            this.form.totalInvo += itemRow.totalDetails;
            this.form.netinv += itemRow.netDetails;
            this.form.discountInvo += itemRow.discountDetails;
            this.form.taxAmount += itemRow.taxPerItem;
            this.totalBeforeTax += itemRow.priceBeforeTax * itemRow.quantity;
            console.log(this.form);
          });
          console.log(this.totalBeforeTax);
          this.form.discountInvoPercent = this.form.discountInvo
            ? (this.form.discountInvo / this.totalBeforeTax) * 100
            : 0;
          this.form.taxAmountPercent = this.form.taxAmount
            ? (this.form.taxAmount /
                (this.totalBeforeTax -
                  (this.form.allwedDiscount + this.form.discountInvo))) *
              100
            : 0;
          if (this.form.allwedDiscount > this.form.netinv) {
            this.form.allwedDiscount = 0;
            this.form.allowedDiscountPercent = 0;
          }
          let intergerNet = parseInt(this.form.netinv);
          let round = this.form.netinv - Math.floor(this.form.netinv)
            if(this.roundActive){
            this.roundNo = round
            this.form.netinv = intergerNet
          }else{
            this.form.netinv = intergerNet +  round
            this.roundNo = 0
          }
          this.setTotals({totals : this.form})
        }
      },
      deep: true
    },

  }
};
</script>

<style lang="scss" scoped>
.total-display {
  border-radius: 0.4rem;
  background-color: #21798d;
  color: white;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.total-label {
  color: #606266;
}
</style>
