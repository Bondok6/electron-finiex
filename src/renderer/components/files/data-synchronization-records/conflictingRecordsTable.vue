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
        prop="synchronization_date"
        :label="$t('synchronization-date')"
      />
      <el-table-column
        align="center"
        prop="document_number"
        :label="$t('document-number')"
      />
      <el-table-column
        align="center"
        prop="document_type"
        :label="$t('document-type')"
      />
      <el-table-column
        align="center"
        prop="branch_number"
        :label="$t('branch-number')"
      />
    </el-table>
  </el-container>
</template>

<script>
export default {
    name : "conflicting-name-table",
    data : function() {
        return {
            tableData : [
                {
                    item_number : 1,
                    synchronization_date : "",
                    document_number : "",
                    document_type : "",
                    branch_number : ""
                },
                {
                    item_number : 1,
                    synchronization_date : "",
                    document_number : "",
                    document_type : "",
                    branch_number : ""
                },
                {
                    item_number : 1,
                    synchronization_date : "",
                    document_number : "",
                    document_type : "",
                    branch_number : ""
                },
                {
                    item_number : 1,
                    synchronization_date : "",
                    document_number : "",
                    document_type : "",
                    branch_number : ""
                },
                {
                    item_number : 1,
                    synchronization_date : "",
                    document_number : "",
                    document_type : "",
                    branch_number : ""
                },
            ]
        }
    }
}
</script>
