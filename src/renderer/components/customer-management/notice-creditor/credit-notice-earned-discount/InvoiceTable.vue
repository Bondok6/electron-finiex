<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="account_number  "
        :label="$t('account-number')"
      />
      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
      />
      <el-table-column
        align="center"
        prop="document_date"
        :label="$t('document-date')"
      />
      <el-table-column align="center" prop="amount" :label="$t('amount')" />
      <el-table-column align="center" prop="tax" :label="$t('tax')" />
      <el-table-column align="center" prop="total" :label="$t('total')" />

      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
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
          id: "1",
          account_number: "44-1200",
          statement: "2014-02-08",
          document_date: "بدون",
          statement: "-",
          amount: "211",
          tax: "211",
          total: "211",
        },
        {
          id: "2",
          account_number: "44-1200",
          statement: "2014-02-08",
          document_date: "بدون",
          statement: "-",
          amount: "211",
          tax: "211",
          total: "211",
        },
        {
          id: "3",
          account_number: "44-1200",
          statement: "2014-02-08",
          document_date: "بدون",
          statement: "-",
          amount: "211",
          tax: "211",
          total: "211",
        },
      ],
    };
  },
};
</script>
