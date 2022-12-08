<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
      <el-table-column align="center" prop="recieve_number" :label="$t('receipt-number')" />
      <el-table-column align="center" prop="date" :label="$t('receipt-date')" width="120"/>
      <el-table-column align="center" prop="branch" :label="$t('branch-transferred-from')" width="600"/>
      <el-table-column align="center" prop="quantity" :label="$t('quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
          <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
          <el-table-column align="center" prop="recieve_number" :label="$t('receipt-number')" width="120"/>
          <el-table-column align="center" prop="date" :label="$t('receipt-date')" />
          <el-table-column align="center" prop="branch" :label="$t('branch-transferred-from')" width="600" />
          <el-table-column align="center" prop="quantity" :label="$t('quantity')"/>
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
          id: '1',
          recieve_number: 1321321,
          date: '2012-04-12',
          branch : "",
          quantity : "",
          total : ""

        },
       {
          id: '1',
          recieve_number: 1321321,
          date: '2012-04-12',
          branch : "",
          quantity : "",
          total : ""

        },
        {
          id: '1',
          recieve_number: 1321321,
          date: '2012-04-12',
          branch : "",
          quantity : "",
          total : ""

        },
        {
          id: '1',
          recieve_number: 1321321,
          date: '2012-04-12',
          branch : "",
          quantity : "",
          total : ""

        },
      ],
      summaryTable : [
        {
          id: this.$t('total'),
          recieve_number: "",
          date: "",
          branch : "",
          quantity : "",
          total : ""

        },
        {
          id: '-',
          recieve_number: '-',
          date: '-',
          branch : "-",
          quantity : "-",
          total : "-"

        },
      ],
    };
  },
methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        } else if (columnIndex > 0 && columnIndex < 4){
          return [0, 0];
        }

      }
    },
  }
  
};
</script>