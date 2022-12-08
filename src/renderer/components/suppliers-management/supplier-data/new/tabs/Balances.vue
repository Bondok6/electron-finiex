<template>
  <div>
            <el-row :gutter="30">
        <el-col :lg="10" :md="15" :sm="20" :xs="20">
          <el-table
            :data="tableData"
            class="invoice-tab-header"
            style="padding-right: 1pc; background: transparent"
          >
            <el-table-column
              align="center"
              prop="opening_balance"
              :label="$t('opening-balance')"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="Balance_debit"
              :label="$t('Balance-debit')"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="credit_balance"
              :label="$t('credit-balance')"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="current_balance"
              :label="$t('current-balance')"
            >
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>


      <el-row class="p-2" :gutter="20">
        <el-col class="d-grid" :lg="4" :md="5" :sm="8" :xs="12">
          <el-button style="background:transparent" class="border-green color-green">
            <span>
              {{ $t("Supplier-account-statement") }}
            </span>
          </el-button>
        </el-col>
        <el-col :lg="4" :md="10" :sm="10" :xs="12">
          <el-button style="background:transparent" class="border-green color-green">
            <span>
              {{ $t("Supplier-opening-balances") }}
            </span>
          </el-button>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          opening_balance: "0.00",
          Balance_debit: "0.00",
          credit_balance: "0.00",
          current_balance: "0.00",
        },
      ],
    };
  },
};
</script>