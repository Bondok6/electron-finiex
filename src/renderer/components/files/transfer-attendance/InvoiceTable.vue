<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
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
        prop="employee_number"
        :label="$t('employee-number')"
      />
      <el-table-column
        align="center"
        prop="employee_name"
        :label="$t('employee-name')"
      />
      <el-table-column
        align="center"
        prop="entry_date"
        :label="$t('entry-date')"
      />
      <el-table-column
        align="center"
        prop="entry_time"
        :label="$t('entry-time')"
      />
      <el-table-column
        align="center"
        prop="entry_status"
        :label="$t('entry-status')"
      />
      <el-table-column
        align="center"
        prop="device_number"
        :label="$t('device-number')"
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
          item_number: "1",
          employee_number: "2154254128",
          employee_name: "احمد ابراهيم",
          entry_date: "10/10/2020",
          entry_time: "10 AM",
          entry_status: "بدون",
          device_number : "0.00"
        },
        {
          item_number: "1",
          employee_number: "2154254128",
          employee_name: "احمد ابراهيم",
          entry_date: "10/10/2020",
          entry_time: "10 AM",
          entry_status: "بدون",
          device_number : "0.00"
        },
        {
          item_number: "1",
          employee_number: "2154254128",
          employee_name: "احمد ابراهيم",
          entry_date: "10/10/2020",
          entry_time: "10 AM",
          entry_status: "بدون",
          device_number : "0.00"
        },
        {
          item_number: "1",
          employee_number: "2154254128",
          employee_name: "احمد ابراهيم",
          entry_date: "10/10/2020",
          entry_time: "10 AM",
          entry_status: "بدون",
          device_number : "0.00"
        },
        {
          item_number: "1",
          employee_number: "2154254128",
          employee_name: "احمد ابراهيم",
          entry_date: "10/10/2020",
          entry_time: "10 AM",
          entry_status: "بدون",
          device_number : "0.00"
        },
      ]
    };
  }
};
</script>
