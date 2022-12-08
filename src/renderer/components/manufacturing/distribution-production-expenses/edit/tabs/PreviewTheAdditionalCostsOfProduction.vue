<template>
  <el-container class="container mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="450"
      />
      <el-table-column
        align="center"
        prop="material_quantity"
        :label="$t('materials-quantity')"
      />
      <el-table-column
        align="center"
        prop="material_cost"
        :label="$t('materials-cost')"
      />
      <el-table-column
        align="center"
        prop="additional_cost"
        :label="$t('additional-costs')"
      />
      <el-table-column
        align="center"
        prop="estimated_cost"
        :label="$t('estimated-cost')"
      />
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
          material_quantity: "",
          material_cost: "",
          additional_cost: "",
          estimated_cost: "",
        },
        {
          id: 2,
          item_name: "2000 - نقاص",
          material_quantity: "",
          material_cost: "",
          additional_cost: "",
          estimated_cost: "",
        },
        {
          id: 3,
          item_name: "2000 - نقاص",
          material_quantity: "",
          material_cost: "",
          additional_cost: "",
          estimated_cost: "",
        },
        {
          id: 4,
          item_name: "2000 - نقاص",
          material_quantity: "",
          material_cost: "",
          additional_cost: "",
          estimated_cost: "",
        },
        {
          id: 5,
          item_name: "2000 - نقاص",
          material_quantity: "",
          material_cost: "",
          additional_cost: "",
          estimated_cost: "",
        },
      ],
    };
  },

  methods: {},
};
</script>