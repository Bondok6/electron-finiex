<template>
  <el-container class="container mt-0 mb-0 invoice-table new-record-table">
    <el-table :data="tableData" style="width: 100%" border max-height="500">
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
        width="300"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="item_unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.item_unit"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.warehouse"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="ordered_quantity"
        :label="$t('requested-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.ordered_quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="available_quantity"
        :label="$t('available-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.available_quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="missing_quantity"
        :label="$t('missing-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.quantity"
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
      condition: false,
      tableData: [
        {
          id: "",
          item_name: "",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
      ],
      appenedTableData: [
        {
          id: "",
          item_name: "",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
      ],
    };
  },

  methods: {
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout((x) => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 20);
    },
  },
};
</script>
