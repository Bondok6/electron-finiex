<template>
  <div class="cash">
    <el-row class="d-flex pt-2 pb-2">
      <el-col :md="11" :lg="11" class="value-currency-col">
        <div class="value-currency-card">
          <div class="value">1</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>

        <div class="value-currency-card">
          <div class="value">10</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>

        <div class="value-currency-card">
          <div class="value">50</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>

        <div class="value-currency-card">
          <div class="value">200</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>
      </el-col>

      <el-col :md="2" :lg="2"></el-col>

      <el-col :md="11" :lg="11" class="value-currency-col">
        <div class="value-currency-card">
          <div class="value">5</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>

        <div class="value-currency-card">
          <div class="value">20</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>

        <div class="value-currency-card">
          <div class="value">100</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>

        <div class="value-currency-card">
          <div class="value">500</div>
          <div class="currency">{{$t('SAR')}}</div>
        </div>
      </el-col> 
    </el-row>
      
    <el-row>
      <div class="d-flex justify-center pb-2">
        <el-button class="others-btn px-3" @click="$emit('showKeypad')">
          {{$t("others")}}
        </el-button>
      </div>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "Col-1-cash",

  data: function () {
    return {
      
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.value-currency-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.value-currency-card {
  background-color: #E2F5D5;
  height: 5rem;
  width: 12rem;
  margin: 1rem 0;
  border-radius: 1rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0 0 5px rgba(112, 112, 112, 0.45);
}

.value {
  height: 2.5rem;
  color: white;
  font-size: 2.5rem;
  font-weight: 500;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #21798D;
}

.currency {
  height: 2.5rem;
  line-height: 2.5rem;
  color: #707070;
  font-size: large;
}

.others-btn {
  background-color: #E2F5D5;
  color: #21798D;
  border: none;
  font-size: large;
}

.cash {
  border-left: 1px solid rgba(112, 112, 112, 0.45);
  border-right: 1px solid rgba(112, 112, 112, 0.45);
}
</style>