<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
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
        prop="del_number"
        :label="$t('delivery-order-number')"
      >
        <NuxtLink :to="localePath('/manufacturing/production-receive/edit')">
          rtx5
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="del_date"
        :label="$t('delivery-order-date')"
      />
      <el-table-column
        align="center"
        prop="number"
        :label="$t('production-order-number')"
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
          del_number: "Rs25a",
          del_date: "كوع زاوية 225*250 كلاس 5",
          number: "24",
          client_name: "بدون",
          batch_number: "3",

          total_quantities: "200",
        },
        {
          id: 2,
          del_number: "Rs25a",
          del_date: "كوع زاوية 225*250 كلاس 5",
          number: "24",
          client_name: "بدون",
          batch_number: "3",

          total_quantities: "200",
        },
        {
          id: 3,
          del_number: "Rs25a",
          del_date: "كوع زاوية 225*250 كلاس 5",
          number: "24",
          client_name: "بدون",
          batch_number: "3",

          total_quantities: "200",
        },
        {
          id: 4,
          del_number: "Rs25a",
          del_date: "كوع زاوية 225*250 كلاس 5",
          number: "24",
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