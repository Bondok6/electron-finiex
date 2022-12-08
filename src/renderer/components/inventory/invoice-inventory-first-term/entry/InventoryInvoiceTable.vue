<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column align="center" :label="$t('invoice-number')">
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath(
                `/inventory/invoice-inventory-first-term/edit/${scope.row.invoiceCode}?invoiceId=${scope.row.invoiceId}`
              )
            "
          >
            <span>{{ scope.row.invoiceId }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('invoice-date')">
        <template slot-scope="scope">
          <span>{{ DateFormater(scope.row.invoiceDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="total" :label="$t('total')" />
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "inventoryInvoiceTable",
  props: {
    data: {
      default: [],
      required: true
    }
  },
  methods: {
    DateFormater(date) {
      return date
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/");
    }
  }
};
</script>
