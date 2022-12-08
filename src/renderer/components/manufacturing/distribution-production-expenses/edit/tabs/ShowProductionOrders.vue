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
        prop="order_number"
        :label="$t('order-number')"
      />
      <el-table-column
        align="center"
        prop="order_date"
        :label="$t('order-date')"
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
        prop="total_cost"
        :label="$t('total-costs')"
      />
      <el-table-column
        align="center"
        prop="operation"
        :label="$t('operating-price')"
      />
      <el-table-column
        align="center"
        prop="operation_number"
        :label="$t('batch-number')"
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
          order_number: "",
          order_date: "",
          material_cost: "",
          additional_cost: "",
          total_cost: "",
          opertation: "",
          operation_number: "",
        },
        {
          id: 2,
          order_number: "",
          order_date: "",
          material_cost: "",
          additional_cost: "",
          total_cost: "",
          opertation: "",
          operation_number: "",
        },
        {
          id: 3,
          order_number: "",
          order_date: "",
          material_cost: "",
          additional_cost: "",
          total_cost: "",
          opertation: "",
          operation_number: "",
        },
        {
          id: 4,
          order_number: "",
          order_date: "",
          material_cost: "",
          additional_cost: "",
          total_cost: "",
          opertation: "",
          operation_number: "",
        },
        {
          id: 5,
          order_number: "",
          order_date: "",
          material_cost: "",
          additional_cost: "",
          total_cost: "",
          opertation: "",
          operation_number: "",
        },
      ],
    };
  },

  methods: {},
};
</script>