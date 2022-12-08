<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table ">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="350">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')"/>
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')"/>
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debitor" :label="$t('debitor')" />
      <el-table-column align="center" prop="creditor" :label="$t('creditor')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      
      <template #append>

    
    <el-table :data="number_of_moves" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')"/>
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debitor" :label="$t('debitor')" />
      <el-table-column align="center" prop="creditor" :label="$t('creditor')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      
    </el-table>
    <el-table :data="total_period" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')"/>
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debitor" :label="$t('debitor')" />
      <el-table-column align="center" prop="creditor" :label="$t('creditor')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      
    </el-table>
    <el-table :data="total_amount" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')"/>
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debitor" :label="$t('debitor')" />
      <el-table-column align="center" prop="creditor" :label="$t('creditor')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      
    </el-table>
    <el-table :data="balance" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="registeration_number" :label="$t('registeration-number')" />
      <el-table-column align="center" prop="account" :label="$t('account')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')"/>
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_type" :label="$t('document-type')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="debitor" :label="$t('debitor')" />
      <el-table-column align="center" prop="creditor" :label="$t('creditor')" />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      
    </el-table>
      </template>
      
    </el-table>
   
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      tableData: [
        {
          id: 1,
          item_number: '11',
          registeration_number: '',
          account: '',
          statement: '',
          document_number: '',
          between_60_90: '',
          document_date: '',
          debitor: '',
          creditor: '',
          balance: '',
          bond_date: '',
          bond_number: '',

        },
        {
          id: 1,
          item_number: '22',
          registeration_number: '',
          account: '',
          statement: '',
          document_number: '',
          between_60_90: '',
          document_date: '',
          debitor: '',
          creditor: '',
          balance: '',
          bond_date: '',
          bond_number: '',
       
        },
        {
          id: 1,
          item_number: '33',
          registeration_number: '',
          account: '',
          statement: '',
          document_number: '',
          between_60_90: '',
          document_date: '',
          debitor: '',
          creditor: '',
          balance: '',
          bond_date: '',
          bond_number: '',
         
        },
       
      ],
      summaryTable : [
        {
          id: this.$t("total"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      }
      ],
       number_of_moves : [
        {
          id: this.$t("number-of-moves"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      }
      ],
      total_period : [
        {
          id: this.$t("total-period"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      }
      ],
      total_amount : [
        {
          id: this.$t("total-amount"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      }
      ],
      balance : [
        {
          id: this.$t("balance"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      }
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
  }
};
</script>
<style lang="scss" scoped>





</style>
