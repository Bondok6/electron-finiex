<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column
        align="center"
        prop="account_name"
        :label="$t('account-name')"
      />
      <el-table-column
        align="center"
        prop="account_type"
        :label="$t('account-type')"
      />
      <el-table-column
        align="center"
        prop="indebtedness_limit"
        :label="$t('indebtedness-limit')"
      />
      <el-table-column
        align="center"
        prop="payment_period"
        :label="$t('payment-period')"
      />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: "1",
          account_name: "1",
          account_type: "بدون",
          indebtedness_limit: "10",
          payment_period: "احمد",
        },
        {
          id: "1",
          account_name: "1",
          account_type: "بدون",
          indebtedness_limit: "10",
          payment_period: "احمد",
        },
        {
          id: "1",
          account_name: "1",
          account_type: "بدون",
          indebtedness_limit: "10",
          payment_period: "احمد",
        },
      ],
    };
  },
};
</script>
