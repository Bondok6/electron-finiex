<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="adjustment_number" :label="$t('adjustment-number')" />
      <el-table-column align="center" prop="date" :label="$t('date')" />
      <el-table-column align="center" prop="delegate" :label="$t('delegate-name')"/>
      <el-table-column align="center" prop="order_type" :label="$t('order-type')"/>
      <el-table-column align="center" prop="total" :label="$t('total')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="adjustment_number" :label="$t('adjustment-number')" />
      <el-table-column align="center" prop="date" :label="$t('date')" />
      <el-table-column align="center" prop="delegate" :label="$t('delegate-name')"/>
      <el-table-column align="center" prop="order_type" :label="$t('order-type')"/>
      <el-table-column align="center" prop="total" :label="$t('total')" />
    </el-table>
      </template>
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
          adjustment_number: 1321321,
          date: '',
          delegate: '',
          order_type: '',
          total: '',
        },
        {
          adjustment_number: 1321321,
          date: '',
          delegate: '',
          order_type: '',
          total: '',
        },
        {
          adjustment_number: 1321321,
          date: '',
          delegate: '',
          order_type: '',
          total: '',
        },
        {
          adjustment_number: 1321321,
          date: '',
          delegate: '',
          order_type: '',
          total: '',
        },
       
      ],
      summaryTable : [
        {
          adjustment_number: this.$t('total'),
          date: '',
          delegate: '',
          order_type: "",
          total: '',
        },
        {
          adjustment_number: '-',
          date: '-',
          delegate: '-',
          order_type: '-',
          total: '-',
        }
      ],
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        } else if (columnIndex > 0 && columnIndex < 4) {
          return [0, 0];
        }
      }
    },
  },
};
</script>