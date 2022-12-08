<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="entry_number"
        :label="$t('registeration-number')"
      />
      <el-table-column
        align="center"
        prop="date"
        :label="$t('registeration-date')"
      />
      <el-table-column
        align="center"
        prop="entry_number_type"
        :label="$t('registeration-type-number')"
      />
      <el-table-column
        align="center"
        prop="entry_type"
        :label="$t('registeration-type')"
      />
      <el-table-column align="center" prop="user" :label="$t('user')" />
      <el-table-column align="center" prop="amount" :label="$t('amount')" />
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="40"
          />
          <el-table-column
            align="center"
            prop="entry_number"
            :label="$t('registeration-number')"
          />
          <el-table-column
            align="center"
            prop="date"
            :label="$t('registeration-date')"
          />
          <el-table-column
            align="center"
            prop="entry_number_type"
            :label="$t('registeration-type-number')"
          />
          <el-table-column
            align="center"
            prop="entry_type"
            :label="$t('registeration-type')"
          />
          <el-table-column align="center" prop="user" :label="$t('user')" />
          <el-table-column align="center" prop="amount" :label="$t('amount')" />
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
          id: "1",
          entry_number: " ",
          date: " ",
          entry_number_type: " ",
          entry_type: " ",
          user: " ",
          amount: " ",
        },
        {
          id: "2",
          entry_number: " ",
          date: " ",
          entry_number_type: " ",
          entry_type: " ",
          user: " ",
          amount: " ",
        },
        {
          id: "3",
          entry_number: " ",
          date: " ",
          entry_number_type: " ",
          entry_type: " ",
          user: " ",
          amount: " ",
        },
        {
          id: "4",
          entry_number: " ",
          date: " ",
          entry_number_type: " ",
          entry_type: " ",
          user: " ",
          amount: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          entry_number: " ",
          date: " ",
          entry_number_type: " ",
          entry_type: " ",
          user: " ",
          amount: "1",
        },
        {
          id: "-",
          entry_number: " ",
          date: " ",
          entry_number_type: " ",
          entry_type: " ",
          user: " ",
          amount: " ",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 6];
        } else if (columnIndex < 6) {
          return [0, 0];
        }
      }
    },
  },
};
</script>