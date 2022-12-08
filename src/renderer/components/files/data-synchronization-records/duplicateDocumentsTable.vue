<template>
  <el-container class="container mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column
        align="center"
        prop="item_number"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="document_number"
        :label="$t('document-number')"
      />
      <el-table-column
        align="center"
        prop="document_date"
        :label="$t('document-date')"
      />
      <el-table-column
        align="center"
        prop="document_type"
        :label="$t('document-type')"
      />
      <el-table-column
        align="center"
        prop="number_repetitions"
        :label="$t('number-of-repetitions')"
      />
    </el-table>
  </el-container>
</template>
<script>
export default {
  name: "invoice-table",
  data: function() {
    return {
      tableData: [
        {
          item_number: 1,
          document_number: "2000",
          document_date: "10/10/2020",
          document_type: "بدون",
          number_repetitions: "20"
        },
        {
          item_number: 1,
          document_number: "2000",
          document_date: "10/10/2020",
          document_type: "بدون",
          number_repetitions: "20"
        },
        {
          item_number: 1,
          document_number: "2000",
          document_date: "10/10/2020",
          document_type: "بدون",
          number_repetitions: "20"
        },
        {
          item_number: 1,
          document_number: "2000",
          document_date: "10/10/2020",
          document_type: "بدون",
          number_repetitions: "20"
        }
      ]
    };
  }
};
</script>
