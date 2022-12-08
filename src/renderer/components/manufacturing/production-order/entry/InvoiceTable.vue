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
        prop="number"
        :label="$t('production-order-number')"
      >
        <NuxtLink :to="localePath('/manufacturing/production-order/edit')">
          rtx5
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="date"
        :label="$t('production-order-date')"
      />
      <el-table-column
        align="center"
        prop="status"
        :label="$t('production-order-status')"
      />
      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="batch_number"
        :label="$t('batch-number')"
      />
      <el-table-column
        align="center"
        prop="total_quantities"
        :label="$t('total-quantities')"
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
          number: "Rs25a",
          date: "كوع زاوية 225*250 كلاس 5",
          status: "حبة",
          client_name: "بدون",
          batch_number: "3",
          total_quantities: "200",
        },
        {
          id: 2,
          number: "Rs25a",
          date: "كوع زاوية 225*250 كلاس 5",
          status: "حبة",
          client_name: "بدون",
          batch_number: "3",
          total_quantities: "200",
        },
        {
          id: 3,
          number: "Rs25a",
          date: "كوع زاوية 225*250 كلاس 5",
          status: "حبة",
          client_name: "بدون",
          batch_number: "3",
          total_quantities: "200",
        },
        {
          id: 4,
          number: "Rs25a",
          date: "كوع زاوية 225*250 كلاس 5",
          status: "حبة",
          client_name: "بدون",
          batch_number: "3",
          total_quantities: "200",
        },
        {
          id: 5,
          number: "Rs25a",
          date: "كوع زاوية 225*250 كلاس 5",
          status: "حبة",
          client_name: "بدون",
          batch_number: "3",
          total_quantities: "200",
        },
      ],
    };
  },

  methods: {},
};
</script>