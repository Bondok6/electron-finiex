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
        prop="item_number"
        :label="$t('plan-number')"
      >
        <NuxtLink
          :to="localePath('/manufacturing/production-orders-plan/edit')"
        >
          1
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="item_date"
        :label="$t('plan-date')"
      />
      <el-table-column
        align="center"
        prop="status"
        :label="$t('production-order-status')"
      />
      <el-table-column align="center" prop="notes" :label="$t('notes')" />
      <el-table-column
        align="center"
        prop="requested_quantity"
        :label="$t('requested-quantity')"
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
          item_name: "Rs25a",
          item_date: "01/04/2021",
          status: "جيدة",
          notes: "13123",
          requested_quantity: "444995",
        },
        {
          id: 2,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          status: "جيدة",
          notes: "13123",
          requested_quantity: "444995",
        },
        {
          id: 3,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          status: "جيدة",
          notes: "13123",
          requested_quantity: "444995",
        },
        {
          id: 4,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          status: "جيدة",
          notes: "13123",
          requested_quantity: "444995",
        },
        {
          id: 5,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          status: "جيدة",
          notes: "13123",
          requested_quantity: "444995",
        },
      ],
    };
  },

  methods: {},
};
</script>