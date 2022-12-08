<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      style="width: 100%"
      stripe
      border
      max-height="750"
      :data="[...data]"
    >
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
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
      >
<template slot-scope="scope">
        
         {{ $numberWithCommas(scope.row.creditGaid) }}
        
      </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>



<script>
import { mapState, mapMutations } from "vuex";
const maxRow = 30;
export default {
  name: "invoice",

  props: ["data"]
};
</script>