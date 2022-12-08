<template>
  <el-container
    class="container ma-4 mt-0 mb-0 invoice-table flex-direction-column"
  >
    <el-table
      style="width: 100%"
      stripe
      border
      max-height="750"
      ref="table"
      :data="tempList"
      class="table not-hoverd"
      row-class-name="rows"
      row-key="id"
      :cell-style="rowStyle"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('account-name')"
        width="300"
      >
        <template slot-scope="scope">
          {{ scope.row.accID + " -- " + scope.row.accName }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="mainFinalAccount"
        :label="$t('account-type')"
        width="150"
      />
      <el-table-column
        align="center"
        prop="balance"
        :label="$t('current-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.balance) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="virualBalance"
        :label="$t('estimated-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.virualBalance) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="virualBalanceDiff"
        :label="$t('deviation-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.virualBalanceDiff) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="virualBalanceStats"
        :label="$t('balance-status')"
      />
    </el-table>
    <el-table
      :data="tableInfo"
      class="width-full summaryTable"
      stripe
      border
      :span-method="arraySpanMethod"
      max-height="250"
    >
      <el-table-column align="center" prop="label" width="300" />
      <el-table-column align="center" width="190" />

      <el-table-column align="center" prop="balance" label="الرصيد الحالي">
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.balance) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="virualBalance"
        label="الرصيد التقديري"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.virualBalance) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="virualBalanceDiff"
        label="رصيد الانحراف"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.virualBalanceDiff) }}
        </template>
      </el-table-column>
      <el-table-column align="center" />
    </el-table>
  </el-container>
</template>


<script>
import { mapState, mapMutations } from "vuex";
const maxRow = 30;
export default {
  name: "invoice",
  data: function() {
    return {
      tempList: [],
      rowHeight: 0,
      start: 0,
      names: [],
      widths: [],
      scrolling: false
    };
  },
  computed: {
    end() {
      return this.start + maxRow + 1;
    },
    ...mapState({
      tableData: state => {
        if (state.Accounting.Reports.estimatedBudgetReport.records?.length) {
          return state.Accounting.Reports.estimatedBudgetReport.records;
        } else {
          return [];
        }
      },
      tableInfo: function(state) {
        return state.Accounting.Reports.estimatedBudgetReport.recordsInfo.map(
          item => {
            let totalLabel = item.accName.replace(/#/g, "").trim();
            return {
              label: totalLabel,
              virualBalance: item.virualBalance,
              virualBalanceDiff: item.virualBalanceDiff,
              balance: item.balance
            };
          }
        );
      }
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.tableWrapper = document.querySelector(".el-table__body-wrapper");
      this.tableWrapper.addEventListener("scroll", this.handleScroll, false);
    });
    window.addEventListener("resize", this.handleResize, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize, false);
    if(this.tableWrapper != undefined){
      this.tableWrapper.removeEventListener("scroll", this.handleScroll, false);
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 || rowIndex === 1) {
        if (columnIndex === 0) {
          return {
            rowspan: 1,
            colspan: 2
          };
        } else if (columnIndex === 1) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },

    handleResize() {
      this.$nextTick(() => {
        this.names = [];
        this.widths = [];
        for (const item of document.querySelectorAll(
          ".el-table__body colgroup col"
        )) {

          this.names.push(item.getAttribute("name"));
          this.widths.push(item.getAttribute("width"));
        }
        this.setWidth();
        this.setRows();
      });
    },
    // set columns widths
    setWidth() {

      for (const [index, width] of this.widths.entries()) {
        for (const item of document.querySelectorAll("." + this.names[index])) {
          item.style.width = `${width}px`;
        }
      }
    },
    setRows() {
      for (const [index] of this.tempList.entries()) {
        const rows = document.querySelectorAll(".rows");
        rows[index].style.top = `${(index + this.start) * this.rowHeight}px`;
        rows[index].style.height = `${this.rowHeight}px`;
        rows[index].children.forEach(item => {
          item.style.height = `${this.rowHeight}px`;
        });
      }
    },
    handleScroll(el) {
      const start = ~~(el.target.scrollTop / this.rowHeight);
      if (start === this.start) return;

      this.start = start;
      this.scrolling = true;
      this.tempList = this.tableData.slice(this.start, this.end);
      this.$nextTick(() => {
        this.setWidth();
        this.setRows();
      });
    },
    rowStyle({ row }) {
      return {
        color: row.color,
        backgroundColor: row.backgroundColor
      };
    }
  },
  watch: {
    tableData: {
      handler(newVal) {
        this.tableWrapper.scrollTo(0, 0);

        this.tempList = newVal.slice(this.start, this.end);
        this.$nextTick(() => {
          this.rowHeight = 60;
          document.querySelector("tbody").style.height = `${this.rowHeight *
            newVal.length}px`;

          let heigthTableWrapper =
            this.rowHeight * (newVal.length > maxRow ? maxRow : newVal.length);

          this.tableWrapper.style.height = `${heigthTableWrapper}px`;
        });
        this.handleResize();
      },
      deep: true
    }
  }
};
</script>
<style lang="scss">
.table {
  .rows {
    position: absolute;
  }
  .el-table__body-wrapper {
    width: 100%;
  }
  tbody {
    position: relative;
  }
}
.summaryTable .el-table__header-wrapper {
  display: none;
}
</style>
