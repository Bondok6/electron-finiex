<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
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
      <el-table-column align="center" prop="item_name" :label="$t('item-name')">
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
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.warehouse"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="actual_cost"
        :label="$t('actual-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.actual_cost"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="spoil_amount"
        :label="$t('spoil-amount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.spoil_amount"
            @keyup.enter.native="newRow()"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
          </el-popconfirm>
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
          id: 1,
          item_id: "",
          item_name: "",
          unit: "",
          warehouse: "",
          actual_cost: "",
          spoil_amount: "",
        },
        {
          id: 2,
          item_id: "",
          item_name: "",
          unit: "",
          warehouse: "",
          actual_cost: "",
          spoil_amount: "",
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
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout((x) => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 20);
    },
  },
};
</script>