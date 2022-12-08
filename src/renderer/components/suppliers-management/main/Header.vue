<template>
  <el-container class="container box-shadow ma-4 mb-2 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
       <el-row :gutter="24" class="demo-avatar demo-basic justify-center d-flex flex-wrap">
    <el-col :lg="5" :md="6" :sm="9" :xs="14">
      <div class="demo-basic--circle d-flex align-center ">
        <el-avatar class="pink" :size="70"><i class="fas fa-edit icon-pink fa-2x"></i></el-avatar>
        <div class="d-flex flex-direction-column mr-1">
        <span>{{$t('quotations')}}</span>
        <span>{{$t('140-this-month')}}</span>
        </div>
      </div>
    </el-col>
      <el-col :lg="5" :md="6" :sm="9" :xs="14">
      <div class="demo-basic--circle d-flex align-center">
        <el-avatar class="blue" :size="70"><i class="fas fa-edit icon-blue fa-2x"></i></el-avatar>
        <div class="d-flex flex-direction-column mr-1">
        <span>{{$t('reservation-orders')}}</span>
        <span>{{$t('140-this-month')}}</span>
        </div>
      </div>
    </el-col>
      <el-col :lg="5" :md="6" :sm="9" :xs="14">
      <div class="demo-basic--circle d-flex align-center ">
        <el-avatar class="green" :size="70"><i class="fas fa-sack fa-2x icon-green"></i></el-avatar>
        <div class="d-flex flex-direction-column mr-1">
        <span>{{$t('sales-invoices')}}</span>
        <span>{{$t('140-this-month')}}</span>
        </div>
      </div>
    </el-col>
      <el-col :lg="6" :md="6" :sm="9" :xs="14">
      <div class="demo-basic--circle d-flex align-center">
        <el-avatar class="halfBlack" :size="70"><i class="fas fa-unlock-alt fa-2x icon-halfBlack"></i></el-avatar>
        <div class="d-flex flex-direction-column mr-1">
        <span>{{$t('return-of-sales-invoices')}}</span>
        <span>{{$t('140-this-month')}}</span>
        </div>
      </div>
    </el-col>
    </el-row>
      </el-row>
    </el-form>
    <!-- dialog -->

  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {
        delegate_name: 1,
        item_name: 1,
        item_balance: 1,
        category: 1,
        subcategory: "",
        order: "",
        invoice_type: 1,
        input: 1,
        date: 1,
        warehouse: "",
        include_billing_expenses_for_delegates: 1,
        network_commissions_included_for_delegates: 1,
      },
      additionalChoice: false,
      input3: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.pink{
  background-color:#f0a9cf;
}
.icon-pink{
  color:#E4318F;
  margin-top:1pc;
}
.blue{
  background-color:#bca7f1;
}
.icon-blue{
  color:#4805EA;
}
.green{
  background-color:#77ffa5;
}
.icon-green{
  color:#04E94F;
}
.halfBlack{
  background-color:#7fb8c5;
}
.icon-halfBlack{
  color:#21798D;
}
.four-button-invoice {
  padding-top: 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  margin: auto;
  el-button {
    border-radius: 12px;
  }
}
.selector-mod {
  padding-top: 0.5rem;
}

.font-size-12 {
  span span {
    font-size: 12px !important;
  }
}
</style>
