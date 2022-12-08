<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="250">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="salesManCode"
        :label="$t('delegate-number')"
      >
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath(
                '/system-cards/salemen-data/edit/' + scope.row.salesManCode
              )
            "
          >
            <span>{{ scope.row.salesManCode }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="salName"
        :label="$t('delegate-name')"
      />
      <el-table-column
        align="center"
        prop="accId"
        :label="$t('account-number')"
      />
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",
  props: {
    data: {
      type: Array,
      default: []
    }
  }
};
</script>
