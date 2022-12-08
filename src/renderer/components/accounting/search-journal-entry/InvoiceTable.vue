<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="600">
      <el-table-column
        align="center"
        prop="moveCode"
        :label="$t('document-number')"
      />
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('account-name')"
      />
      <el-table-column align="center" prop="details" :label="$t('statement')" />
      <el-table-column
        align="center"
        prop="dateGr"
        :label="$t('document-date')"
      />
      <el-table-column align="center" prop="debitGaid" :label="$t('debit')" />
      <el-table-column align="center" prop="creditGaid" :label="$t('credit')" />
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",
  props: ["data"],

  methods: {}
};
</script>
