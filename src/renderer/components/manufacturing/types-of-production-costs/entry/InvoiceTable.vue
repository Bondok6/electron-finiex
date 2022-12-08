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
        prop="type_number"
        :label="$t('type-number')"
      >
        <NuxtLink
          :to="localePath('/manufacturing/types-of-production-costs/edit')"
        >
          rtx5
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="type_name"
        :label="$t('type-name')"
      />
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-number')"
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
          type_name: "Rs25a",
          type_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
        },
        {
          id: 2,
          type_name: "Rs25a",
          type_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
        },
        {
          id: 3,
          type_name: "Rs25a",
          type_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
        },
        {
          id: 4,
          type_name: "Rs25a",
          type_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
        },
        {
          id: 5,
          type_name: "Rs25a",
          type_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
        },
      ],
    };
  },

  methods: {},
};
</script>