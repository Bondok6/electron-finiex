<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column
        align="center"
        prop="item_number"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="account_name"
        :label="$t('account-name')"
      />
      <el-table-column
        align="center"
        prop="document_number"
        :label="$t('document-number')"
      />
      <el-table-column
        align="center"
        prop="document_date"
        :label="$t('document-date')"
      />
      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
      />
      <el-table-column align="center" prop="debit" :label="$t('debitor')" />
      <el-table-column align="center" prop="credit" :label="$t('creditor')" />

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

  data: function() {
    return {
      tableData: [
        {
          item_number: "1",
          account_name: "أوامر التشغيل",
          document_number: "1",
          document_date: "10/10/2010",
          statement: "موجل",
          debit: "0.00",
          credit: "0.00"
        },
        {
          item_number: "2",
          account_name: "أوامر التشغيل",
          document_number: "1",
          document_date: "10/10/2010",
          statement: "موجل",
          debit: "0.00",
          credit: "0.00"
        },
        {
          item_number: "3",
          account_name: "أوامر التشغيل",
          document_number: "1",
          document_date: "10/10/2010",
          statement: "موجل",
          debit: "0.00",
          credit: "0.00"
        },
        {
          item_number: "4",
          account_name: "أوامر التشغيل",
          document_number: "1",
          document_date: "10/10/2010",
          statement: "موجل",
          debit: "0.00",
          credit: "0.00"
        }
      ]
    };
  }
};
</script>
