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
        prop="movement_number"
        :label="$t('movement-number')"
      >
        <NuxtLink
          :to="
            localePath('/manufacturing/distribution-production-expenses/edit')
          "
        >
          1
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="movement_date"
        :label="$t('movement-date')"
      />
      <el-table-column
        align="center"
        prop="type"
        :label="$t('movement-type')"
      />
      <el-table-column align="center" prop="notes" :label="$t('notes')" />
      <el-table-column
        align="center"
        prop="total_expenses"
        :label="$t('total-expenses')"
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
          movement_number: "Rs25a",
          movement_date: "01/04/2021",
          type: "جيدة",
          notes: "13123",
          total_expenses: "444995",
        },
        {
          id: 2,
          movement_number: "Rs25a",
          movement_date: "01/04/2021",
          type: "جيدة",
          notes: "13123",
          total_expenses: "444995",
        },
        {
          id: 3,
          movement_number: "Rs25a",
          movement_date: "01/04/2021",
          type: "جيدة",
          notes: "13123",
          total_expenses: "444995",
        },
        {
          id: 4,
          movement_date: "Rs25a",
          item_date: "01/04/2021",
          type: "جيدة",
          notes: "13123",
          total_expenses: "444995",
        },
        {
          id: 5,
          movement_number: "Rs25a",
          movement_date: "01/04/2021",
          type: "جيدة",
          notes: "13123",
          total_expenses: "444995",
        },
      ],
    };
  },

  methods: {},
};
</script>