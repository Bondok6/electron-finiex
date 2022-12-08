<template>
  <el-container class="container mt-0 mb-0 invoice-table">
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
        width="450"
      />
      <el-table-column align="center" prop="item_unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="warehouse"
        :label="$t('warehouse')"
      />
      <el-table-column
        align="center"
        prop="quantity"
        :label="$t('quantity-of-production')"
      />
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
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          quantity: "",
        },
        {
          id: 2,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          quantity: "",
        },
        {
          id: 3,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          quantity: "",
        },
        {
          id: 4,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          quantity: "",
        },
        {
          id: 5,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          quantity: "",
        },
      ],
    };
  },

  methods: {},
};
</script>