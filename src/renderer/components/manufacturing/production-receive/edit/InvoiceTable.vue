<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')">
        <template>
          <el-input
            size="small"
            style="text-align: center"
            v-model="tableform.item_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template>
          <el-input
            size="small"
            style="text-align: center"
            v-model="tableform.unit"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <template>
          <el-input
            size="small"
            style="text-align: center"
            v-model="tableform.warehouse"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="actual_cost"
        :label="$t('actual-quantity')"
      >
        <template>
          <el-input
            size="small"
            style="text-align: center"
            v-model="tableform.actual_quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="spoil_amount"
        :label="$t('spoil-amount')"
      >
        <template>
          <el-input
            size="small"
            style="text-align: center"
            v-model="tableform.spoil_amount"
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
      tableform: {
        id: 1,
        item_name: "اسم الصنف",
        unit: "الوحدة",
        warehouse: "معرض",
        actual_quantity: "2000",
        spoil_amount: "100",
      },
      tableData: [
        {
          id: 1,
          item_name: "اسم الصنف",
          unit: "الوحدة",
          warehouse: "معرض",
          actual_cost: "2000",
          spoil_amount: "100",
        },
        {
          id: 2,
          item_name: "",
          unit: "",
          warehouse: "",
          actual_cost: "",
          spoil_amount: "",
        },
      ],
    };
  },

  methods: {},
};
</script>