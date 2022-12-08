<template>
  <el-container class="container mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      :cell-class-name="tableRowClassName"
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="60">
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.id"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="350"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.unit"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_sort_quantity"
        :label="$t('total-sorting-amount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_sort_quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_sort_cost"
        :label="$t('total-sorting-cost')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_sort_cost"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_sort_lost"
        :label="$t('total-sorting-wastage')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_sort_lost"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_sort_cost"
        :label="$t('total-sorting-cost')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_sort_cost"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="estimated_cost"
        :label="$t('estimated-cost')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.estimated_cost"
            @keyup.enter.native="newRow()"
          ></el-input>
        </template>
      </el-table-column>
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
          id: "",

          item_name: "",
          unit: "",
          total_sort_quantity: "",
          total_sort_cost: "",
          total_sort_lost: "",
          estimated_cost: "",
        },
      ],
      appenedTableData: [
        {
          id: "",
          item_name: "",
          unit: "",
          total_sort_quantity: "",
          total_sort_cost: "",
          total_sort_lost: "",
          estimated_cost: "",
        },
      ],
    };
  },

  mounted() {
    setTimeout((x) => {
      this.$nextTick(() => this.$refs.id.focus());
    }, 1000);
  },

  methods: {
    tableRowClassName({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 5) {
        {
          return "warning-row";
        }
      }
      return "";
    },
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout((x) => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 20);
    },
  },
};
</script>

<style>
.el-table .warning-row {
  background: #ff9999;
}
</style>