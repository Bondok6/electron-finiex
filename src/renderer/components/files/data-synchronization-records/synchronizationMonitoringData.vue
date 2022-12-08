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
        prop="synchronization_time"
        :label="$t('synchronization-time')"
      />
      <el-table-column
        align="center"
        prop="computer_name"
        :label="$t('computer-name')"
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
  name: "synchronization-data",
  data: function() {
    return {
      tableData: [
        {
          item_number: 1,
          synchronization_date: "",
          synchronization_time: "",
          computer_name: "",
          branch_number: ""
        },
        {
          item_number: 1,
          synchronization_date: "",
          synchronization_time: "",
          computer_name: "",
          branch_number: ""
        },
        {
          item_number: 1,
          synchronization_date: "",
          synchronization_time: "",
          computer_name: "",
          branch_number: ""
        },
        {
          item_number: 1,
          synchronization_date: "",
          synchronization_time: "",
          computer_name: "",
          branch_number: ""
        },
        {
          item_number: 1,
          synchronization_date: "",
          synchronization_time: "",
          computer_name: "",
          branch_number: ""
        },
        {
          item_number: 1,
          synchronization_date: "",
          synchronization_time: "",
          computer_name: "",
          branch_number: ""
        }
      ]
    };
  }
};
</script>
