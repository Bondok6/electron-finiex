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
        :label="$t('sort-quantities')"
      />
      <el-table-column
        align="center"
        prop="sort_lost"
        :label="$t('q-sorting-loss')"
      />
      <el-table-column align="center" prop="cost" :label="$t('unit-cost')" />

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
          item_name: "1000 - نقاص225*255 كلاس 5",
          item_unit: "حبة",
          warehouse: "مستودع المعرض",
          quantity: "8",
          sort_lost: "6",
          cost: "2",
        },
        {
          id: 2,
          item_name: "",
          item_unit: "",
          warehouse: "",
          quantity: "",
          sort_lost: "",
          cost: "",
        },
        {
          id: 3,
          item_name: "",
          item_unit: "",
          warehouse: "",
          quantity: "",
          sort_lost: "",
          cost: "",
        },
      ],
    };
  },

  methods: {},
};
</script>