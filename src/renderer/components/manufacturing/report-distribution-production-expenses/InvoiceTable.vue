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
        prop="movement_number"
        :label="$t('movement-number')" />
      <el-table-column
        align="center"
        prop="movement_date"
        :label="$t('movement-date')" />
      <el-table-column
        align="center"
        prop="movement_type"
        :label="$t('movement-type')" />
      <el-table-column align="center" prop="notes" :label="$t('notes')" />
      <el-table-column
        align="center"
        prop="total_expenses"
        :label="$t('total-expenses')" />
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
          stripe
          border
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
            prop="movement_number"
            :label="$t('movement-number')"
          />
          <el-table-column
            align="center"
            prop="movement_date"
            :label="$t('movement-date')"
          />
          <el-table-column
            align="center"
            prop="movement_type"
            :label="$t('movement-type')"
          />
          <el-table-column align="center" prop="notes" :label="$t('notes')" />
          <el-table-column
            align="center"
            prop="total_expenses"
            :label="$t('total-expenses')"
          />
        </el-table> </template></el-table
  ></el-container>
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
          movement_number: "44",
          movement_date: "2014-02-08",
          movement_type: "بدون",
          notes: "-",
          total_expenses: "211",
        },
        {
          id: "2",
          movement_number: "44",
          movement_date: "2014-02-08",
          movement_type: "بدون",
          notes: "-",
          total_expenses: "211",
        },
        {
          id: "3",
          movement_number: "44",
          movement_date: "2014-02-08",
          movement_type: "بدون",
          notes: "-",
          total_expenses: "211",
        },
        {
          id: "4",
          movement_number: "44",
          movement_date: "2014-02-08",
          movement_type: "بدون",
          notes: "-",
          total_expenses: "211",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          movement_number: "",
          movement_date: "",
          movement_type: "",
          notes: "",
          total_expenses: "211",
        },
        {
          id: "-",
          movement_number: "",
          movement_date: "",
          movement_type: "",
          notes: "",
          total_expenses: "211",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex < 5) {
          return [0, 0];
        }
      }
    },
  },
};
</script>