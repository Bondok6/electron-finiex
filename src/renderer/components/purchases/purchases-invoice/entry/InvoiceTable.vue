<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
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
        type="index"
        :label="$t('id')"
      />

      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      >
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath(
                '/purchases/purchases-invoice/edit/' + scope.row.invoiceID
              )
            "
          >
            <span>{{ scope.row.invoiceID }}</span>
          </NuxtLink>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="dateGr" :label="$t('invoice-date')">
        <template slot-scope="scope">
          {{ DateFormater(scope.row.dateGr) }}
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="customerName"
        :label="$t('supplier-name')"
      />

      <el-table-column align="center" prop="netInv" :label="$t('total')" />

      <el-table-column align="center" :label="$t('invoice-status')">
        <template slot-scope="scope">
          {{ scope.row.done ? $t("posted") : $t("not-posted") }}
        </template>
      </el-table-column>
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
  methods: {
    DateFormater(date) {
      // Format the Date from "2022-11-01T10:12:09.593" to "01/11/2022"
      return date
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/");
    }
  }
};
</script>
