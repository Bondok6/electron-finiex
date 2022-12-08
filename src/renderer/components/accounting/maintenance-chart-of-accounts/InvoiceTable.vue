<template>
  <section class="mb-0 px-2 py-3">
    <el-container class="container ma-4 mt-40 mb-0 invoice-table">
      <el-table :data="data" style="width: 100%" stripe border max-height="750">
        <el-table-column
          align="center"
          type="index"
          width="40"
          :label="$t('id')"
        />
        <el-table-column
          align="center"
          prop="moveCode"
          :label="$t('document-number')"
        />
        <el-table-column
          align="center"
          prop="dateGr"
          :label="$t('document-date')"
        />
        <el-table-column
          align="center"
          prop="accId"
          :label="$t('account-number')"
        />
        <el-table-column
          align="center"
          prop="accName"
          :label="$t('account-name')"
        />
        <el-table-column
          align="center"
          prop="debitGaid"
          :label="$t('debit-amount')"
        >
          <template slot-scope="scope">
            {{ $numberWithCommas(scope.row.debitGaid) }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="creditGaid"
          :label="$t('credit-amount')"
          ><template slot-scope="scope">
            {{ $numberWithCommas(scope.row.creditGaid) }}
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </section>
</template>


<script>
export default {
  name: "invoice",
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>
