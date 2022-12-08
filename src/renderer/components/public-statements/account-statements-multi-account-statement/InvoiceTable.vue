<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="500">
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debit" :label="$t('debit')" />
      <el-table-column align="center" prop="credit" :label="$t('credit')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />

      <template #append>
        <el-table
          :data="numberOfMoves"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
         
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debit" :label="$t('debit')" />
      <el-table-column align="center" prop="credit" :label="$t('credit')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      </el-table>
      
        <el-table
          :data="totalPeriod"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
         
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debit" :label="$t('debit')" />
      <el-table-column align="center" prop="credit" :label="$t('credit')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      </el-table>
      
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
         
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debit" :label="$t('debit')" />
      <el-table-column align="center" prop="credit" :label="$t('credit')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      </el-table>
      
        <el-table
          :data="balance"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
         
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debit" :label="$t('debit')" />
      <el-table-column align="center" prop="credit" :label="$t('credit')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      </el-table>
    </template>


    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: '1',
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: ' ',
          credit: ' ',
          balance: ' ',
     
        },
        {
         id: '2',
        registeration_number: ' ',
        account: ' ',
        statement: ' ',
        document_number: ' ',
        document_type: ' ',
        document_date: ' ',
        debit: ' ',
        credit: ' ',
        balance: ' ',
        },
        {
         id: '3',
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: ' ',
          credit: ' ',
          balance: ' ',
        },
        {
          id: '4',
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: ' ',
          credit: ' ',
          balance: ' ',
        },
      ],

      numberOfMoves: [
        {
          id: this.$t("number-of-moves"),
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: '1',
          credit: '2',
          balance: '3',
        },
        {
          id: "-",
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: ' ',
          credit: ' ',
          balance: ' ',
        },
      ],

      totalPeriod: [
        {
          id: this.$t("total-period"),
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: '11',
          credit: '22',
          balance: '33',
        },
        {
          id: "-",
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: ' ',
          credit: ' ',
          balance: ' ',
        },
      ],

      totalAmount: [
        {
          id: this.$t("total-amount"),
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: '111',
          credit: '222',
          balance: '333',
        },
        {
          id: "-",
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: ' ',
          credit: ' ',
          balance: ' ',
        },
      ],

      balance: [
        {
          id: this.$t("balance"),
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: '1111',
          credit: '2222',
          balance: '3333',
        },
        {
          id: "-",
          registeration_number: ' ',
          account: ' ',
          statement: ' ',
          document_number: ' ',
          document_type: ' ',
          document_date: ' ',
          debit: ' ',
          credit: ' ',
          balance: ' ',
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 7];
        } else if (columnIndex > 0 && columnIndex < 7) {
          return [0, 0];
        }
      }
    },
  },
};
</script>