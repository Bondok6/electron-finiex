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
        type="index"
      />
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-name')"
      >
        <template slot-scope="scope">
          {{ scope.row.accName + "  --- " + scope.row.accId }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="mainFinalAccount"
        :label="$t('account-type')"
      />
      <el-table-column
        align="center"
        prop="startDebit"
        :label="$t('debit-opening-balance')"
      >
        <template slot-scope="scope">
          <span v-if="!enableEdit">{{ $numberWithCommas(scope.row.startDebit) }}</span>
          <el-input
            v-else
            v-model="scope.row.startDebit"
            size="small"
            class="number editable-table-input"
            @input="updateCell(scope.row)"
          >
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="startCredit"
        :label="$t('credit-opening-balance')"
      >
        <template slot-scope="scope">
          <span v-if="!enableEdit">{{$numberWithCommas(scope.row.startCredit) }}</span>
          <el-input
            v-else
            v-model="scope.row.startCredit"
            size="small"
            class="number editable-table-input"
            @input="updateCell(scope.row)"
          >
          </el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="dateGr" :label="$t('date')">
        <template slot-scope="scope">
          <span v-if="!enableEdit">{{ scope.row.dateGr }}</span>
          <el-date-picker
            v-else
            v-model="scope.row.dateGr"
            size="small"
            class="editable-table-input"
            :picker-options="inFinancialYearDatePicked"
            @input="updateCell(scope.row)"
          >
          </el-date-picker>
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
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tableData: []
    };
  },

  computed: {
    ...mapState({
      enableEdit: state => state.Accounting.openingBalance.enableEdit,
      inFinancialYearDatePicked: state => {
        let financialYear = state.General.financialYear;
        return {
          disabledDate: time => {
            return time.getTime() >= new Date(financialYear.from) &&
              time.getTime() <= new Date(financialYear.to)
              ? false
              : true;
          }
        };
      }
    })
  },
  methods: {
    ...mapMutations({
      setRecordsWillEdit: "Accounting/openingBalance/setRecordsWillEdit"
    }),
    updateCell({ dateGr, startDebit, startCredit, accId, branchId, id }) {
      this.setRecordsWillEdit({
        dateGr,
        startDebit: Number(startDebit),
        startCredit: Number(startCredit),
        accId,
        branchId,
        id
      });
    }
  },
  watch: {
    data: {
      // assign prop to local data to Avoid Error *** cannot mutate the original data [prop]**
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
