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
        prop="record_type"
        :label="$t('record-type')"
      />
      <el-table-column
        align="center"
        prop="add_records"
        :label="$t('add-records')"
      />
      <el-table-column
        align="center"
        prop="edit_records"
        :label="$t('edit-records')"
      />
      <el-table-column
        align="center"
        prop="delete_records"
        :label="$t('delete-records')"
      />
    </el-table>
  </el-container>
</template>
<script>
export default {
  name: "records-recieve-table",
  data: function() {
    return {
      tableData: [
          {
              item_number : '-',
              record_type : '-',
              add_records : '-',
              edit_records : '-',
              delete_records : '-'
          },
          {
              item_number : '-',
              record_type : '-',
              add_records : '-',
              edit_records : '-',
              delete_records : '-'
          },
          {
              item_number : '-',
              record_type : '-',
              add_records : '-',
              edit_records : '-',
              delete_records : '-'
          },
          {
              item_number : '-',
              record_type : '-',
              add_records : '-',
              edit_records : '-',
              delete_records : '-'
          },
          {
              item_number : '-',
              record_type : '-',
              add_records : '-',
              edit_records : '-',
              delete_records : '-'
          },

      ]
    };
  }
};
</script>
