<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" :cell-style="redBg" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="client_name" :label="$t('client-name')"/>
      <el-table-column align="center" prop="document_type" :label="$t('document-type')"/>
      <el-table-column align="center" prop="total_sales" :label="$t('total-sales')"/>
      <el-table-column align="center" prop="total_revenues" :label="$t('total-revenues')" />
      <el-table-column align="center" prop="remaining" :label="$t('remaining-amount')" />
      <template #append>
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
            <el-table-column align="center" prop="id" ::label="$t('id')" width="40"/>
            <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
            <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
            <el-table-column align="center" prop="client_name" :label="$t('client-name')"/>
            <el-table-column align="center" prop="document_type" :label="$t('document-type')"/>
            <el-table-column align="center" prop="total_sales" :label="$t('total-sales')"/>
            <el-table-column align="center" prop="total_revenues" :label="$t('total-revenues')" />
            <el-table-column align="center" prop="remaining" :label="$t('remaining-amount')" />
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
          id: '11',
          document_number: '',
          document_date: '',
          client_name: '',
          document_type: '',
          total_sales: '',
          total_revenues: '',
          remaining: '',
         
        },
        {
          id: '11',
          document_number: '',
          document_date: '',
          client_name: '',
          document_type: '',
          total_sales: '',
          total_revenues: '',
          remaining: '',
         
        },
        {
          id: '11',
          document_number: '',
          document_date: '',
          client_name: '',
          document_type: '',
          total_sales: '',
          total_revenues: '',
          remaining: '',
         
        },
      ], 
      summaryTable : [
        {
          id: this.$t('the-rest'),
          document_number: '',
          document_date: '',
          client_name: '',
          document_type: '',
          total_sales: '',
          total_revenues: '',
          remaining: '',
         
        },
        {
          id: '-',
          document_number: '-',
          document_date: '-',
          client_name: '-',
          document_type: '-',
          total_sales: '-',
          total_revenues: '-',
          remaining: '-',
         
        },
      ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex > 0 && columnIndex < 5) {
          return [0, 0];
        }
      }
    },
    redBg({ row, column, rowIndex, columnIndex }){
      if(rowIndex == 0){
        if(columnIndex == 7){
          return {
            background : '#08FF00'
          }
        }
      }else if (rowIndex != 0 && columnIndex == 7){
        return {
          background : '#FF0000'
        }
      }
    }
  },
};
</script>