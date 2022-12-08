<template>
  <el-container class="container ma-4 mt-4 mb-0 invoice-table editable-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="unit_name" :label="$t('unit-name')">
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.packing_quantity"
              :placeholder="$t('packing-quantity')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="packing_quantity"
        :label="$t('packing-quantity')"
      >
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.packing_quantity"
              :placeholder="$t('packing-quantity')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="last_purchase_price"
        :label="$t('last-purchase-price')"
      >
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.last_purchase_price"
              :placeholder="$t('last-purchase-price')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="cost_price"
        :label="$t('cost-price')"
      >
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.cost_price"
              :placeholder="$t('cost-price')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="wholesale_price"
        :label="$t('wholesale-price')"
      >
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.wholesale_price"
              :placeholder="$t('wholesale-price')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="lowest_selling_price"
        :label="$t('lowest-selling-price')"
      >
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.lowest_selling_price"
              :placeholder="$t('lowest-selling-price')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="selling_price"
        :label="$t('selling-price')"
      >
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.selling_price"
              :placeholder="$t('selling-price')"
            >
            </el-input>
          </span>
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
      tableform: {
        unit_name: "R250*225",
        packing_quantity: "نقاص 225",
        last_purchase_price: "50",
        cost_price: "60",
        wholesale_price: "30",
        lowest_selling_price: "40",
        selling_price: "60",
      },
      tableData: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "yellow-row";
      }
      return "";
    },
  },
};
</script>

<style>
.el-table .yellow-row {
  background: rgb(252, 252, 169);
}
</style>