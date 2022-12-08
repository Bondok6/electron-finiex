<template>
  <div class="col-1 pt-4 pb-4 px-4">
    <div>
      <el-row class="info-input bordered-ar  bordered-en">
        <el-col :span="8">
          <div class="info-label">{{$t('amount')}}</div>
        </el-col>

        <el-col :span="14">
          <el-input v-model="form.amount" 
                    @focus="$emit('showKeypad')"
                    class="input-radius-15" />
        </el-col>
      </el-row>

      <el-row class="info-input bordered-ar  bordered-en" style="margin-top: 4rem;">
        <el-col :span="8">
          <div class="info-label">{{$t('bank')}}</div>
        </el-col>

        <el-col :span="14">
          <el-select class="width-full input-radius-15" v-model="form.bank">
            <el-option label="البنك الأهلي" :value="1" />
            <el-option label="البنك الأهلي" :value="2" />
          </el-select>
        </el-col>
      </el-row>

      <el-row class="bordered-ar bordered-en" style="margin-top: 2rem;">
        <el-col :span="8">
          <div class="info-label" style="height: 40px; line-height: 40px;">{{$t('card')}}</div>
        </el-col>
      </el-row>

      <el-row class="width-full payment_cards_display">
        <div class="payment_card">
          <img src="~/assets/images/pos/apple_pay.svg" width="75px">
        </div>

        <div class="payment_card">
          <img src="~/assets/images/pos/google_pay.svg" width="75px">
        </div>

        <div class="payment_card">
          <img src="~/assets/images/pos/visa_master_card.svg" width="75px">
        </div>

        <div class="payment_card">
          <img src="~/assets/images/pos/stc_pay.svg" width="75px">
        </div>

        <div class="payment_card mada">
          <img src="~/assets/images/pos/mada.svg" width="75px">
        </div>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  name: "Col-1-postponed",

  data: function () {
    return {
      form: {
        amount: '',
        bank: '',
      }
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.info-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.info-label {
  padding-left: 1rem;
  padding-right: 1rem;
}

.payment_cards_display {
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .payment_card {
    cursor: pointer;
  }

  .mada {
    padding: 0.5rem;
    padding-bottom: 0.2rem;
    border: 1px solid #21798D;
    border-radius: 4px;
  }
}
</style>