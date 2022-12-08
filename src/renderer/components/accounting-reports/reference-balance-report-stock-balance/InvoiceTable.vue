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
      <el-table-column align="center" prop="id" :label="$t('id')" width="70" />
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('account-name')"
      />
      <el-table-column
        align="center"
        prop="sDebit"
        :label="$t('old-debit-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.sDebit) }}</template
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="sCredit"
        :label="$t('old-credit-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.sCredit) }}</template
        >
      </el-table-column>
      <el-table-column align="center" prop="debit" :label="$t('debit-balance')">
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.debit) }}</template
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="credit"
        :label="$t('credit-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.credit) }}</template
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="debitCurr"
        :label="$t('current-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.debitCurr) }}</template
        >
      </el-table-column>
    </el-table>
    <el-table
      :data="tableInfo"
      border
      :span-method="arraySpanMethod"
      class="width-full summaryTable"
      max-height="250"
      style="width: 100%; display: block"
      stripe
    >
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('account-name')"
        width="80"
      />
      <el-table-column align="center" />
      <el-table-column
        align="center"
        prop="sDebit"
        :label="$t('old-debit-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.sDebit) }}</template
        >

      </el-table-column>
      <el-table-column
        align="center"
        prop="sCredit"
        :label="$t('old-credit-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.sCredit) }}</template
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="debit"
        :label="$t('debit-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.debit) }}</template
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="credit"
        :label="$t('credit-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.credit) }}</template
        >

      </el-table-column>
      <el-table-column
        align="center"
        prop="debitCurr"
        :label="$t('current-balance')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.debitCurr) }}</template
        >

      </el-table-column>
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
        if (
          state.Accounting.Reports.referenceBalanceReportStockBalance.records
            ?.length
        ) {
          return state.Accounting.Reports.referenceBalanceReportStockBalance
            .records;
        } else {
          return [];
        }
      },
      tableInfo: function(state) {
        return state.Accounting.Reports.referenceBalanceReportStockBalance
          .recordsInfo;
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
    this.tableWrapper.removeEventListener("scroll", this.handleScroll, false);
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
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
          this.rowHeight = 65;
          document.querySelector("tbody").style.height = `${this.rowHeight *
            newVal.length}px`;

          let heigthTableWrapper =
            this.rowHeight * (newVal.length > maxRow ? maxRow : newVal.length);

          this.tableWrapper.style.height = `${heigthTableWrapper}px`;
          this.handleResize();
        });
      },
      deep: true
    }
  }
};
</script>
<style lang="scss">
.table {
  width: 100%;
  .rows {
    position: absolute;
  }
  .el-table__body-wrapper {
    overflow-y: auto;
  }
  tbody {
    position: relative;
  }
}
.summaryTable .el-table__header-wrapper {
  display: none;
}
</style>