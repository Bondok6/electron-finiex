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
        prop="item_number"
        width="40"
        :label="$t('id')"
        type="index"
      />
      <el-table-column align="center" :label="$t('account-name')">
        <template slot-scope="scope">
          {{ scope.row.accountID + "---" + scope.row.accountName }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="mainFinalAccount"
        :label="$t('account-type')"
      />
      <el-table-column align="center" :label="$t('estimated-balance')">
        <template slot-scope="scope">
          <span v-if="!enableEdit">{{
            $numberWithCommas(scope.row.virualBalance)
          }}</span>
          <el-input
            v-else
            v-model="scope.row.virualBalance"
            @blur="updateBalance(scope.row)"
            size="small"
            class="number"
          >
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
  props: ["data"],

  data() {
    return {
      tableData: []
    };
  },
  computed: {
    ...mapState({
      enableEdit: state => state.Accounting.virtualBalance.enableEdit
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/virtualBalance/setRecordDetails"
    }),

    updateBalance(row) {
      this.setRecordDetails({
        accID: row.accountID,
        virualBalance: this.$convertToValidNumber(row.virualBalance)
      });
    }
  },
  watch: {
    data: {
      handler(newVal) {
        let deepClone = JSON.parse(JSON.stringify(newVal));
        this.tableData = deepClone;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
