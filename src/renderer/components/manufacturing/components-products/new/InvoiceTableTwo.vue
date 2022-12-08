<template>
  <div>
    <el-container class="container ma-4 mt-4 mb-0 invoice-table new-record-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="500"
      >
        <el-table-column align="center" prop="id" width="60" :label="$t('id')">
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
          prop="unit_name"
          :label="$t('unit-name')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.unit_name"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="packing_quantity"
          :label="$t('packing-quantity')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.packing_quantity"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="last_purchase_price"
          :label="$t('last-purchase-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.last_purchase_price"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="cost_price"
          :label="$t('cost-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.cost_price"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="wholesale_price"
          :label="$t('wholesale-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.wholesale_price"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="lowest_selling_price"
          :label="$t('lowest-selling-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.lowest_selling_price"
              @keyup.enter.native="newRow()"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="selling_price"
          :label="$t('selling-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.selling_price"
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
  </div>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: "",
          unit_name: "",
          packing_quantity: "",
          last_purchase_price: "",
          cost_price: "",
          wholesale_price: "",
          lowest_selling_price: "",
          selling_price: "",
        },
      ],
      appenedTableData: [
        {
          id: "",
          unit_name: "",
          packing_quantity: "",
          last_purchase_price: "",
          cost_price: "",
          wholesale_price: "",
          lowest_selling_price: "",
          selling_price: "",
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