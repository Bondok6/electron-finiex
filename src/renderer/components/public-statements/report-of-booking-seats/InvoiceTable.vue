<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      />
      <el-table-column align="center" prop="date" :label="$t('invoice-date')" />
      <el-table-column
        align="center"
        prop="customer_name"
        :label="$t('client-name')"
        width="300"
      />
      <el-table-column
        align="center"
        prop="phone_number"
        :label="$t('mobile-number')"
      />
      <el-table-column
        align="center"
        prop="session_number"
        :label="$t('site-no.')"
      />
      <el-table-column
        align="center"
        prop="order_number"
        :label="$t('order-no')"
      />
      <el-table-column
        align="center"
        prop="attendance_date"
        :label="$t('attendance-date')"
      />
      <el-table-column
        align="center"
        prop="attendance_time"
        :label="$t('attendance-time')"
      />
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
          id: "1",
          invoice_number: " ",
          date: " ",
          customer_name: " ",
          phone_number: " ",
          session_number: " ",
          order_number: " ",
          attendance_date: " ",
          attendance_time: " ",
        },
        {
          id: "2",
          invoice_number: " ",
          date: " ",
          customer_name: " ",
          phone_number: " ",
          session_number: " ",
          order_number: " ",
          attendance_date: " ",
          attendance_time: " ",
        },
        {
          id: "3",
          invoice_number: " ",
          date: " ",
          customer_name: " ",
          phone_number: " ",
          session_number: " ",
          order_number: " ",
          attendance_date: " ",
          attendance_time: " ",
        },
        {
          id: "4",
          invoice_number: " ",
          date: " ",
          customer_name: " ",
          phone_number: " ",
          session_number: " ",
          order_number: " ",
          attendance_date: " ",
          attendance_time: " ",
        },
      ],
    };
  },

  methods: {},
};
</script>