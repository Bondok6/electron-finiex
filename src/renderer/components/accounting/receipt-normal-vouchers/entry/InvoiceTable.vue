<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        prop="item_number"
        width="40"
        type="index"
        :label="$t('id')"
      />
      <el-table-column align="center" :label="$t('bond-number')">
        <template slot-scope="scope">
          <NuxtLink
            :to="
              scope.row.detailsCount > 1 ?
              localePath(
                    `${
                      $i18n.locale == 'ar' ? '/' : 'en/'
                    }accounting/receipt-compound-vouchers/edit/${
                      scope.row.voucherID
                    }`
                  ):
                 localePath(
                    `${
                      $i18n.locale == 'ar' ? '/' : 'en/'
                    }accounting/receipt-normal-vouchers/edit/${
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
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('account-name')"
      />
      <el-table-column
        align="center"
        prop="billNumber"
        :label="$t('invoice-number')"
      >
        <template slot-scope="scope">
          {{
            scope.row.billNumber ==  null ? $t("without") : scope.row.billNumber
          }}
        </template></el-table-column
      >
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
      required: true,
    },
  },
};
</script>
