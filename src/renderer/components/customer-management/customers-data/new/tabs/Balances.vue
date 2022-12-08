<template>
  <div>
    <el-row :gutter="30">
      <el-col :lg="15" :md="15" :sm="20" :xs="20">
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
      <el-col :xs="24" :md="15">
        <el-row :gutter="10" class="width-full">
          <el-col :lg="8" :md="8" :sm="24" :xs="24">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
            >
              <span>
                {{ $t("client-account-statement") }}
              </span>
            </el-button>
          </el-col>
          <el-col :lg="8" :md="8" :sm="24" :xs="24">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
            >
              <span>
                {{ $t("client-opening-balances") }}
              </span>
            </el-button>
          </el-col>
          <el-col :lg="8" :md="8" :sm="24" :xs="24">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
            >
              <span>
                {{ $t("debit-limit-client") }}
              </span>
            </el-button>
          </el-col>
        </el-row>
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
