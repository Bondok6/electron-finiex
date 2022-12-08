<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" border stripe  max-height="250">
     <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="account_name" :label="$t('account-name')" width="300"/>
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="debtor" :label="$t('debtor')" />
      <el-table-column align="center" prop="Creditor" :label="$t('Creditor')" />
  
  
   <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
          >
            
            <i slot="reference" class="setting-button danger-color el-icon-delete-solid"></i>
          </el-popconfirm>

        </template>
      </el-table-column>  
   
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
          id:"1",
          account_name: "202391 -        اصناف",
          document_number: '3',
          document_date: '01/04/2021',
          statement: 'بدون',
          debtor:'0.00',
          Creditor:"0.00"
        },
        {
          id:"2",
          account_name: "2332312  -       اصناف",
          document_number: '2',
          document_date: '01/04/2021',
          statement: 'بدون',
          debtor:'0.00',
          Creditor:"0.00"
        },
        {
          id:"3",
          account_name:"2343212  -       اصناف",
          document_number: '5',
          document_date: '01/04/2021',
          statement: 'بدون',
          debtor:'0.00',
          Creditor:"0.00"
        },
      
      ]
    };
  },

  methods: {
  
  }
};
</script>