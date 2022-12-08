<template>
  <el-form label-position="top" :model="form" class="total-from pb-2">
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="width: 35%">
            <span class="total-label">{{$t('sum')}}</span>
          </td>
          <td colspan="2"><el-input v-model="form.sum" placeholder="0" class="text-center pa-0"></el-input></td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('discount-amount')}}</span>
          </td>
          <td>
            <el-input v-model="form.discount_amount" placeholder="0" class="text-center pa-0"></el-input>
          </td>
          <td>
            <el-input v-model="form.discount_amount" placeholder="0" class="text-center pa-0">
              <template slot="append">%</template>
            </el-input>
          </td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('total-tax')}}</span>
          </td>
          <td>
            <el-input v-model="form.total_tax" placeholder="0" class="text-center pa-0"></el-input>
          </td>
          <td>
            <el-input v-model="form.total_tax" placeholder="0" class="text-center pa-0">
              <template slot="append">%</template>
            </el-input>
          </td>
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
        total: "1,742",
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