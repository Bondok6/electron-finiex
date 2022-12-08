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
        prop="account_name"
        :label="$t('account-name')"
        width="350"
      />
      <el-table-column
        align="center"
        prop="bond_number"
        :label="$t('bond-number')"
      />
      <el-table-column
        align="center"
        prop="bond_date"
        :label="$t('bond-date')"
      />
      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
      />
      <el-table-column align="center" prop="debtor" :label="$t('debtor')" />
      <el-table-column align="center" prop="Creditor" :label="$t('Creditor')" />
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
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
          stripe
          border
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="40"
          />
          <el-table-column
            align="center"
            prop="account_name"
            :label="$t('account-name')"
            width="350"
          />
          <el-table-column
            align="center"
            prop="bond_number"
            :label="$t('bond-number')"
          />
          <el-table-column
            align="center"
            prop="bond_date"
            :label="$t('bond-date')"
          />
          <el-table-column
            align="center"
            prop="statement"
            :label="$t('statement')"
          />
          <el-table-column align="center" prop="debtor" :label="$t('debtor')" />
          <el-table-column
            align="center"
            prop="Creditor"
            :label="$t('Creditor')"
          />
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
          id: "1",
          account_name: "881273-1000",
          bond_number: "40",
          bond_date: "2014-02-08",
          statement: "320",
          debtor: "ايهاب توفيق",
          Creditor: "211",
        },
        {
          id: "2",
          account_name: "881273-1000",
          bond_number: "40",
          bond_date: "2014-02-08",
          statement: "320",
          debtor: "ايهاب توفيق",
          Creditor: "211",
        },
        {
          id: "3",
          account_name: "881273-1000",
          bond_number: "40",
          bond_date: "2014-02-08",
          statement: "320",
          debtor: "ايهاب توفيق",
          Creditor: "211",
        },
        {
          id: "4",
          account_name: "881273-1000",
          bond_number: "40",
          bond_date: "2014-02-08",
          statement: "320",
          debtor: "ايهاب توفيق",
          Creditor: "211",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          account_name: "",
          bond_number: "",
          bond_date: "",
          statement: "",
          debtor: "",
          Creditor: "",
        },
        {
          id: "-",
          account_name: "",
          bond_number: "",
          bond_date: "",
          statement: "",
          debtor: "",
          Creditor: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex < 2) {
          return [0, 0];
        }
      }
    },
  },
};
</script>