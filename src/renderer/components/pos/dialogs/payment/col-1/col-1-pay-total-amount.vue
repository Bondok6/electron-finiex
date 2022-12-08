<template>
  <div class="bordered-ar bordered-en">
    <div  v-for="(customer, index) in customers" :key="index"
          class="customer-card">
      <el-row class="navy-color mb-2">
        <span>{{$t('customer')}}</span>
        <span class="px-1">{{index +1}}</span>
      </el-row>

      <el-row class="d-flex mb-1">
        <el-col :span="4">
          <div class="black-color">{{$t('tax')}}</div>
        </el-col>
        <el-col :span="4">
          <div class="text-center">{{customer.tax}}</div>
        </el-col>
      </el-row>

      <div class="d-flex align-item-center mb-1">
        <el-col :span="4">
          <div class="black-color">{{$t('total')}}</div>
        </el-col>
        <el-col :span="4">
         <div class="text-center">{{customer.total}}</div>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="8">
          <div  class="pay-btn pay-btn-mod"
                @click="payNow()">
            {{$t('pay-now')}}
          </div>   
        </el-col>   
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Col1PayTotalAmount",

  data: function () {
    return {
      customers: [
        {
          tax: 102,
          total: 23125,
        },
        {
          tax: 102,
          total: 23125,
        },
        {
          tax: 102,
          total: 23125,
        },
      ]
    };
  },
  methods: {
    payNow() {
      this.$store.commit("pos/payment/updateShowByTotal", false);
      this.$store.commit("pos/payment/updateDialogState", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.customer-card {
  width: 50%;
  margin: 1.5rem 2rem;
}

.black-color {
  color: black;
}

.align-item-center {
  align-items: center;
}

.pay-btn-mod {
  height: 1.5rem;
}

[dir = 'rtl'] {
  .bordered-ar {
    border-right: none;
    border-left: 1px solid rgba(112, 112, 112, 0.45);
  }
}

.bordered-en {
  border-right: 1px solid rgba(112, 112, 112, 0.45);
  border-left: none;
}
</style>