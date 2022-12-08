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
        prop="item_name"
        :label="$t('item-name')"
      />
      <el-table-column align="center" prop="item_category" label="/" width="40">
        <template>
          <span> // </span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="item_unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="warehouse"
        :label="$t('warehouse')"
      />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
      <el-table-column
        align="center"
        prop="price"
        :label="$t('selling-price')"
      />
      <el-table-column align="center" prop="total" :label="$t('total')" />

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

      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full addItemTable"
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

          <el-table-column align="center">
            <template>
              <el-button plain size="mini" type="danger">{{
                $t("add-item")
              }}</el-button>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            prop="item_category"
            label="/"
            width="40"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="warehouse"
            :label="$t('warehouse')"
          />
          <el-table-column
            align="center"
            prop="quantity"
            :label="$t('quantity')"
          />
          <el-table-column align="center" prop="cost" :label="$t('cost')" />
          <el-table-column align="center" prop="total" :label="$t('total')" />
          <el-table-column
            align="center"
            prop="delete_icon"
            :label="$t('total')"
            width="60"
          />
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
          id: 1,
          item_name: "Rs25a - كوع زاوية 225*250 كلاس ",
          item_category: "||||",
          item_unit: "حبة",
          warehouse: "مستودع المعرض",
          quantity: 8,
          price: "1,324.00",
          total: "642.00",
        },
        {
          id: 2,
          item_name: "Rs25a - كوع زاوية 225*250 كلاس ",
          item_category: "||||",
          item_unit: "حبة",
          warehouse: "مستودع المعرض",
          quantity: 9,
          price: "932.00",
          total: "828.00",
        },
        {
          id: 3,
          item_name: "Rs25a - كوع زاوية 225*250 كلاس ",
          item_category: "||||",
          item_unit: "حبة",
          warehouse: "مستودع المعرض",
          quantity: 2,
          price: "453.00",
          total: "129.00",
        },
      ],

      summaryTable: [
        {
          id: "-",
          item_name: "-",
          item_category: "-",
          unit: "-",
          warehouse: "-",
          quantity: "-",
          cost: "-",
          total: "-",
          delete_icon: "-",
        },
        {
          id: "-",
          item_name: "-",
          item_category: "-",
          unit: "-",
          warehouse: "-",
          quantity: "-",
          cost: "-",
          total: "-",
          delete_icon: "-",
        },
      ],

    };
  },

  methods: {},
};
</script>