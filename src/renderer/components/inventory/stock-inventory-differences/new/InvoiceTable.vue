<template>
  <el-container
    class="container ma-4 mt-0 mb-0 invoice-table min-height-250 new-record-table"
  >
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="50">
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
        prop="actual_quantity"
        :label="$t('actual-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.actual_quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="inventory_quantity"
        :label="$t('inventory-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.inventory_quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="difference_quantity"
        :label="$t('difference-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.difference_quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="unit_price"
        :label="$t('unit-price')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.unit_price"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total"
            @keyup.enter.native="newRow()"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
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
          id: "",
          item_name: "",
          unit: "",
          warehouse: "",
          actual_quantity: "",
          inventory_quantity: "",
          difference_quantity: "",
          unit_price: "",
          total: "",
        }
      ],

      appenedTableData: [
        {
          id: "",
          item_name: "",
          unit: "",
          warehouse: "",
          actual_quantity: "",
          inventory_quantity: "",
          difference_quantity: "",
          unit_price: "",
          total: "",
        }
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