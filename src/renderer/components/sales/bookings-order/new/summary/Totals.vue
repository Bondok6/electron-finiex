<template>
  <el-form label-position="top" :model="form" class="total-from">
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="width: 35%">
            <span class="total-label">{{$t('sum')}}</span>
          </td>
          <td><el-input v-model="form.id" placeholder="" class="text-center pa-0"></el-input></td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('total-product-tax-100%')}}</span>
          </td>
          <td><el-input v-model="form.total_product_tax" placeholder="" class="text-center pa-0"></el-input></td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('total-tax')}}</span>
          </td>
          <td><el-input v-model="form.total_tax" placeholder="" class="text-center pa-0"></el-input></td>
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
        sum: "",
        total: "",
        total_product_tax: "",
        total_tax: "" 
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