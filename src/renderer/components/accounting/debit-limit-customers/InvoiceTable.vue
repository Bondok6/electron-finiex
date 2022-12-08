<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="750"
    >
      <el-table-column
        align="center"
        width="40"
        type="index"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="accountID"
        :label="$t('account-number')"
      />
      <el-table-column
        align="center"
        prop="accountName"
        :label="$t('account-name')"
      />
      <el-table-column
        align="center"
        prop="mainFinalAccount"
        :label="$t('account-type')"
      />
      <el-table-column
        align="center"
        prop="maxBalance"
        :label="$t('indebtedness-limit')"
      >
        <template slot-scope="scope">
          <span v-if="!enableEdit">{{
            $numberWithCommas(scope.row.maxBalance)
          }}</span>
          <el-input
            v-else
            align="center"
            v-model="scope.row.maxBalance"
            size="small"
            class="number editable-table-input"
            @input="updateCell(scope.row)"
          >
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="accountPeriod"
        :label="$t('payment-period')"
      >
        <template slot-scope="scope">
          <span v-if="!enableEdit">{{ scope.row.accountPeriod }}</span>
          <el-input
            v-else
            align="center"
            v-model="scope.row.accountPeriod"
            size="small"
            class="number editable-table-input"
            @input="updateCell(scope.row)"
          >
            <template slot="append">{{ $t("day") }}</template>
          </el-input>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "invoice",
  props: {
    data: {
      default: [],
      required: true,
    },
  },
  data: function () {
    return {
      tableData: [],
    };
  },
  computed: {
    ...mapState({
      enableEdit: (state) => state.debitLimitCustomers.enableEdit,
    }),
  },
  methods: {
    ...mapMutations({
      setRecordsWillEdit: "debitLimitCustomers/setRecordsWillEdit",
    }),
    updateCell({ accountID, maxBalance, accountPeriod }) {
      // { accountID, maxBalance, accountPeriod }
      this.setRecordsWillEdit({
        accID: accountID,
        debitLimit: maxBalance,
        accPeriod: accountPeriod,
      });
    },
  },
  watch: {
    data: {
      // assign prop to local data to Avoid Error *** cannot mutate the original data [prop]**
      handler(newVal) {
        let deepClone = JSON.parse(JSON.stringify(newVal));
        this.tableData = deepClone;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style scoped>
.number .el-input__inner {
  text-align: center !important;
}
</style>
