<template>
  <el-form label-position="top" :model="form" class="total-from">
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="width: 35%">
            <span class="total-label">{{$t('insurance-cost')}}</span>
          </td>
          <td>
            <el-input v-model="form.insurance_cost" placeholder="0" 
                      class="yellow-input text-center pa-0">
            </el-input>
          </td>
        </tr>

        <tr>
          <td>
            <span class="total-label">{{$t('returned-amount')}}</span>
          </td>
          <td><el-input v-model="form.returned_amount" placeholder="0" 
                        class="yellow-input text-center pa-0"></el-input></td>
        </tr>

        <tr>
          <td style="width: 35%">
            <span class="total-label">{{$t('total-net')}}</span>
          </td>
          <td>
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
        insurance_cost: "1,536.00",
        returned_amount: "1,742",
        remaining_amount: "788",
        total: "1,766.00",
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
  margin-bottom: 0 !important;
}

.total-label{
  color: #606266;
}
</style>