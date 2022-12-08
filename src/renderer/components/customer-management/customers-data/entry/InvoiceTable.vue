<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="data"
      style="width: 100%"
      stripe
      border
      max-height="750"
    >
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column
        align="center"
        prop="client_number"
        :label="$t('client-number')"

      >
      <template slot-scope="scope">
        <NuxtLink
          :to="localePath('/customer-management/customers-data/edit/' + scope.row.id)"
        >
          {{scope.row.code}}
        </NuxtLink>
      </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="accID"
        :label="$t('account-number')"
      />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",
  props:{
    data:{
      type: Array,
      default: () => []
    },
  }
};
</script>
