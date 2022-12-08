<template>
  <el-form label-position="top" :model="form" class="total-from">
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="width: 35%">
            <span class="total-label">{{$t('sum')}}</span>
          </td>
          <td colspan="2"><el-input v-model="form.id" placeholder="0" class="text-center pa-0"></el-input></td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('discount-amount')}}</span>
          </td>
          <td>
            <el-input v-model="form.id" placeholder="0" class="text-center pa-0"></el-input>
          </td>
          <td>
            <el-input v-model="form.id" placeholder="0" class="text-center pa-0">
              <template slot="append">%</template>
            </el-input>
          </td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('total-product-tax-100%')}}</span>
          </td>
          <td>
            <el-input v-model="form.id" placeholder="0" class="text-center pa-0"></el-input>
          </td>
          <td>
            <el-input v-model="form.id" class="text-center pa-0">
              <template slot="append">%</template>
            </el-input>
          </td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('total-tax')}}</span>
          </td>
          <td>
            <el-input v-model="form.id" placeholder="0" class="text-center pa-0"></el-input>
          </td>
          <td>
            <el-input v-model="form.id" class="text-center pa-0">
              <template slot="append">%</template>
            </el-input>
          </td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('total-net')}}</span>
          </td>
          <td colspan="2">
            <div class="input-style total-display text-center">{{form.total}}
            </div>
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
        id: 0,
        total: "1,742",
      },
    };
  },
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

.total-label{
  color: #606266;
}
</style>