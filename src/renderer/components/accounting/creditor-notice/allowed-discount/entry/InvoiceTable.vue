<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column
        align="center"
        prop="bond_number"
        :label="$t('bond-number')"
      >
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath(
                '/accounting/creditor-notice/allowed-discount/edit/' +
                  scope.row.voucherID
              )
            "
          >
            <span>{{ scope.row.voucherCode }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="voucherDate"
        :label="$t('bond-date')"
      />
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="billNumber"
        :label="$t('invoice-number')"
      />
      <el-table-column align="center" prop="total" :label="$t('total')" />
      <el-table-column align="center" :label="$t('bond-status')">
        <template slot-scope="scope">
          {{ scope.row.isDone ? $t("posted") : $t("not-posted") }}
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {};
  },

  methods: {},
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>
