<template>
  <div class="col-1 pt-4 pb-4 px-1_5">
    <div>
      <el-row class="section">
        <el-row class="d-flex align-items-center mb-1">
          <el-checkbox v-model="sections_control.cash" />
          <div class="side-title">{{ $t("money-cash") }}</div>
        </el-row>

        <el-row class="info-input bordered-ar bordered-en mx-2"
                v-show="sections_control.cash">
          <el-col :span="8">
            <div class="info-label">{{$t('amount')}}</div>
          </el-col>

          <el-col :span="14">
            <el-input v-model="form.cash.amount" 
                      @focus="$emit('showKeypad')"
                      class="input-radius-15" />          
          </el-col>
        </el-row>
      </el-row>

      <el-row class="section">
        <el-row class="d-flex align-items-center mb-1">
          <el-checkbox v-model="sections_control.visa" />
          <div class="side-title">{{ $t("provider-visa") }}</div>
        </el-row>

        <span v-show="sections_control.visa">
          <el-row class="info-input bordered-ar bordered-en mx-2">
            <el-col :span="8">
              <div class="info-label">{{$t('amount')}}</div>
            </el-col>

            <el-col :span="14">
              <el-input v-model="form.visa.amount" 
                        @focus="$emit('showKeypad')"
                        class="input-radius-15" />
            </el-col>
          </el-row>

          <el-row class="info-input bordered-ar bordered-en mx-2">
            <el-col :span="8">
              <div class="info-label">{{$t('bank')}}</div>
            </el-col>

            <el-col :span="14">
              <el-select class="width-full input-radius-15" v-model="form.visa.bank">
                <el-option label="البنك الأهلي" :value="1" />
                <el-option label="البنك الأهلي" :value="2" />
              </el-select>
            </el-col>
          </el-row>

          <el-row class="width-full payment_cards_display mx-2">
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
        </span>
      </el-row>

      <el-row class="section">
        <el-row class="d-flex align-items-center mb-1">
          <el-checkbox v-model="sections_control.discount" />
          <div class="side-title">{{ $t("discount-qitafi") }}</div>
        </el-row>

        <el-row class="info-input bordered-ar bordered-en mx-2"
                v-show="sections_control.discount">
          <el-col :span="8">
            <div class="info-label">{{$t('amount')}}</div>
          </el-col>

          <el-col :span="14">
            <el-input v-model="form.discount.amount" 
                      @focus="$emit('showKeypad')"
                      class="input-radius-15" />          
          </el-col>
        </el-row>
      </el-row>

      <el-row class="mb-1">
        <el-row class="d-flex align-items-center mb-1">
          <el-checkbox v-model="sections_control.postponed" />
          <div class="side-title">{{ $t("postponed") }}</div>
        </el-row>

        <el-row class="info-input bordered-ar bordered-en mx-2"
                v-show="sections_control.postponed">
          <el-col :span="8">
            <div class="info-label">{{$t('client-name')}}</div>
          </el-col>

          <el-col :span="14">
            <el-select  class="width-full input-radius-15" 
                        v-model="form.postponed.client_name">
              <el-option :label="$t('client-1')" :value="1" />
              <el-option :label="$t('client-2')" :value="2" />
            </el-select>         
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  name: "Col1Mutual",

  data: function () {
    return {
      form: {
        cash: {
          amount: '',
        },
        visa: {
          amount: '',
          bank: '',
        },
        discount: {
          amount: '',
        },
        postponed: {
          client_name: '',
        }
      },

      sections_control: {
        cash: false,
        visa: false,
        discount: false,
        postponed: false,
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
  margin-top: 0.5rem;
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

.side-title {
  margin: 0 1rem;
  color: #21798D;
}

.align-items-center {
  align-items: center;
}

.section {
  border-bottom: 1px solid rgba(112, 112, 112, 0.45);
  margin-bottom: 1rem;
}

.el-checkbox:last-of-type {
  margin-right: 0 !important;
}

.px-1_5 {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
</style>