<template>
  <el-form label-position="top" :model="form" class="total-from">
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="width: 35%">
            <span class="total-label">{{$t('insurance-cost')}}</span>
          </td>
          <td><el-input v-model="form.insurance_cost" placeholder="0" class="text-center pa-0"></el-input></td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('amount-paid')}}</span>
          </td>
          <td><el-input v-model="form.amount_paid" placeholder="0" class="text-center pa-0"></el-input></td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('remaining-amount')}}</span>
          </td>
          <td><el-input v-model="form.remaining_amount" placeholder="0" class="text-center pa-0"></el-input></td>
        </tr>
      </tbody>
    </table>
  </el-form>
</template>


<script>
export default {
  name: "invoice-totals",

  data: function () {
    return {
      form: {
        insurance_cost: "1,536.00",
        amount_paid: "1,742",
        remaining_amount: "788",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.total-label{
  color: #606266;
}
</style>