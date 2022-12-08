<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <!--:data="tableData"-->

    <el-table
      :data="data"
      style="width: 100%"
      stripe
      border
      max-height="750"
      id="mytab1"
    >
      <el-table-column
        align="center"
        width="40"
        :label="$t('id')"
        type="index"
      />
      <el-table-column align="center" :label="$t('account-number')">
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath(`/accounting/accounts-card/edit/${scope.row.accID}`)
            "
          >
            <span>{{ scope.row.accID }} -- {{ scope.row.accName }}</span>
          </NuxtLink>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="mainFinalAccount"
        :label="$t('account-nature')"
      />
      <el-table-column
        align="center"
        prop="joinCOstCenter"
        :label="$t('account-type')"
      />
      <el-table-column
        align="center"
        prop="balance"
        :label="$t('current-balance')"
      />
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",
  props: {
    data: {
      default: [],
      required: true
    }
  },

  methods: {}
};
</script>
