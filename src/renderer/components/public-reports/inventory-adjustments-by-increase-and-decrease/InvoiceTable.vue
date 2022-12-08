<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="edit_number" :label="$t('edit-number')" />
      <el-table-column align="center" prop="date" :label="$t('date')" />
      <el-table-column align="center" prop="note" :label="$t('notes')" width="750"/>
      <el-table-column align="center" prop="total" :label="$t('total')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
        <el-table-column align="center" prop="edit_number" :label="$t('edit-number')" />
        <el-table-column align="center" prop="date" :label="$t('date')" />
        <el-table-column align="center" prop="note" :label="$t('notes')" width="750"/>
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
          edit_number: 1321321,
          date: '',
          note: '',
          total: '',
         
        },
        {
          edit_number: 1321321,
          date: '',
          note: '',
          total: '',
         
        },
        {
          edit_number: 1321321,
          date: '',
          note: '',
          total: '',
         
        },
        {
          edit_number: 1321321,
          date: '',
          note: '',
          total: '',
         
        },
       
      ],
      summaryTable : [
        {
          edit_number: this.$t('total'),
          date: '',
          note: '',
          total: '',
         
        },
        {
          edit_number: '-',
          date: '-',
          note: '-',
          total: '-',
         
        },
        
        ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 3];
        } else if (columnIndex > 0 && columnIndex < 3) {
          return [0, 0];
        }
      }
    },
  },
};
</script>