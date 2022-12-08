<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
      :cell-style="redBg"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" :width="50" />
      <el-table-column
        align="center"
        prop="user_name"
        :label="$t('user-name')"
        :width="300"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="entry_date"
        :label="$t('entry-date')"
      />
      <el-table-column
        align="center"
        prop="date_of_entry"
        :label="$t('date-of-entry')"
      />
      <el-table-column
        align="center"
        prop="computer_name"
        :label="$t('computer-name')"
      />
      <el-table-column
        align="center"
        prop="computer_name"
        :label="$t('computer-name')"
      />
      <el-table-column
        align="center"
        prop="status_now"
        :label="$t('status-now')"
      >
      </el-table-column>
    </el-table>
  </el-container>
</template>
<style>
.tableindex1 .el-input__inner {
  background-color:#05D821;
  color: white;
}
.tableindex2 .el-input__inner {
  background-color:#D80505;
  color: white;
}

</style>
<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: "1",
          user_name: "محمود عبده",
          entry_date: "2021 / 03 / 02",
          date_of_entry: "AM 08 : 53 : 12",
          computer_name: "1000",
          status_now: "متصل",
        },
        {
          id: "2",
          user_name: "علي  مصطفى",
          entry_date: "2021 / 03 / 02",
          date_of_entry: "AM 08 : 53 : 12",
          computer_name: "2000",
          status_now: "غير متصل",
        },
        {
          id: "3",
          user_name: "أدهم النجار",
          entry_date: "2021 / 03 / 02",
          date_of_entry: "AM 02 : 56 : 11",
          computer_name: "2000",
          status_now: "متصل",
        },
      ],
    };
  },
  methods: {
    redBg({ row, column, rowIndex, columnIndex }) {
      if (rowIndex != 1) {
        if (columnIndex == 6) {
          return {
            background: 'green',
            color:'white',
            padding:0.5
          };
        }
      } else if (rowIndex == 1 && columnIndex == 6) {
        return {
          background: 'red',
          color:'white',
          padding:0.5
        };
      }
    },
  },
};
</script>