<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table ">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="supplier" :label="$t('client-name')" width="350"/>
      <el-table-column align="center" prop="start_balance" :label="$t('opening-balance')" />
      <el-table-column align="center" prop="less_than_30" :label="$t('less-than-30-days')"/>
      <el-table-column align="center" prop="between_30_60" :label="$t('between-30-to-60-days')" />
      <el-table-column align="center" prop="between_60_90" :label="$t('between-60-to-90-days')" />
      <el-table-column align="center" prop="between_90_120" :label="$t('between-90-to-120-days')" />
      <el-table-column align="center" prop="more_than_120" :label="$t('greater-than-120-days')" />
      <el-table-column align="center" prop="total_balance" :label="$t('total-balance')" />
      <el-table-column align="center" prop="last_payment_value" :label="$t('value-of-last-payment')" />
      <el-table-column align="center" prop="bond_date" :label="$t('bond-date')" />
      <el-table-column align="center" prop="bond_number" :label="$t('bond-number')"/>
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="supplier" :label="$t('client-name')" width="350"/>
      <el-table-column align="center" prop="start_balance" :label="$t('opening-balance')" />
      <el-table-column align="center" prop="less_than_30" :label="$t('less-than-30-days')" />
      <el-table-column align="center" prop="between_30_60" :label="$t('between-30-to-60-days')" />
      <el-table-column align="center" prop="between_90_120" :label="$t('between-60-to-90-days')"/>
      <el-table-column align="center" prop="between_60_90" :label="$t('between-90-to-120-days')" />
      <el-table-column align="center" prop="more_than_120" :label="$t('greater-than-120-days')" />
      <el-table-column align="center" prop="total_balance" :label="$t('total-balance')" />
      <el-table-column align="center" prop="last_payment_value" :label="$t('value-of-last-payment')"  />
      <el-table-column align="center" prop="bond_date" :label="$t('bond-date')" />
      <el-table-column align="center" prop="bond_number" :label="$t('bond-number')" />
    </el-table>
      </template>
      
    </el-table>
   
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      tableData: [
        {
          id: 1,
          item_number: '11',
          supplier: '',
          start_balance: '',
          less_than_30: '',
          between_30_60: '',
          between_60_90: '',
          between_90_120: '',
          more_than_120: '',
          total_balance: '',
          last_payment_value: '',
          bond_date: '',
          bond_number: '',

        },
        {
          id: 1,
          item_number: '22',
          supplier: '',
          start_balance: '',
          less_than_30: '',
          between_30_60: '',
          between_60_90: '',
          between_90_120: '',
          more_than_120: '',
          total_balance: '',
          last_payment_value: '',
          bond_date: '',
          bond_number: '',
       
        },
        {
          id: 1,
          item_number: '33',
          supplier: '',
          start_balance: '',
          less_than_30: '',
          between_30_60: '',
          between_60_90: '',
          between_90_120: '',
          more_than_120: '',
          total_balance: '',
          last_payment_value: '',
          bond_date: '',
          bond_number: '',
         
        },
       
      ],
      summaryTable : [
        {
          id: this.$t("total"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      }
      ],
      
    };
  },

  methods: {
   arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex > 0 && columnIndex < 2) {
          return [0, 0];
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>





</style>
