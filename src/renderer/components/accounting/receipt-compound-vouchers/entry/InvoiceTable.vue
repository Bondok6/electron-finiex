<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        width="40"
        type="index"
        :label="$t('id')"
      />
      <el-table-column align="center" :label="$t('bond-number')">
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath(
                `${
                  $i18n.locale == 'ar' ? '/' : 'en/'
                }accounting/receipt-compound-vouchers/edit/${
                  scope.row.voucherID
                }`
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

      <el-table-column align="center" prop="total" :label="$t('total')" />
      <el-table-column align="center" prop="isDone" :label="$t('bond-status')">
        <template slot-scope="scope">
          {{ scope.row.isDone ? $t("posted") : $t("not-posted") }}
        </template></el-table-column
      >
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
  }
};
</script>
