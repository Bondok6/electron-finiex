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
      class="table"
      row-class-name="rows"
      row-key="id"
      :cell-style="rowStyle"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="debit"
        :label="$t('debit-balance')"
        width="150"
      >
        <template slot-scope="scope">
          {{
            scope.row.debit
              ? Number(+scope.row.debit.toFixed(2)).toLocaleString()
              : "0"
          }}</template
        >
      </el-table-column>

      <el-table-column
        align="center"
        prop="accNameDebit"
        :label="$t('debit-account-name')"
      >
        <template slot-scope="scope">
          {{ scope.row.accNameDebit + " -- " + scope.row.accIDDebit }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="credit_account_name"
        :label="$t('credit-account-name')"
      >
        <template slot-scope="scope">
          {{ scope.row.accNameCredit + " -- " + scope.row.accIDCredit }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="credit"
        width="150"
        :label="$t('credit-balance')"
      >
        <template slot-scope="scope">
          {{
            scope.row.credit
              ? Number(+scope.row.credit.toFixed(2)).toLocaleString()
              : "0"
          }}</template
        >
      </el-table-column>
    </el-table>
    <el-table
      :data="tableInfo"
      class="width-full summaryTable middleSummaryCell"
      border
      max-height="250"
      stripe
    >
      <el-table-column align="center" prop="debit" width="190">
        <template slot-scope="scope">
          {{
            scope.row.debit
              ? Number(+scope.row.debit.toFixed(2)).toLocaleString()
              : "0"
          }}</template
        >
      </el-table-column>

      <el-table-column align="center" prop="accNameDebit">
        <template slot-scope="scope">
          {{ scope.row.label ? scope.row.label : "Not Exist" }}
        </template>
      </el-table-column>

      <el-table-column align="center" prop="credit" width="150">
        <template slot-scope="scope">
          {{
            scope.row.credit
              ? Number(+scope.row.credit.toFixed(2)).toLocaleString()
              : "0"
          }}</template
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
          state.Accounting.Reports.balanceSheetReportHorizontal.records?.length
        ) {
          return state.Accounting.Reports.balanceSheetReportHorizontal.records;
        } else {
          return [];
        }
      },
      tableInfo(state) {
        return state.Accounting.Reports.balanceSheetReportHorizontal.recordsInfo.map(
          item => {
            return {
              label: item.accNameDebit.replace(/#/g, "").trim(),
              debit: item.debit,
              credit: item.credit
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
    if(this.tableWrapper!= undefined){
      this.tableWrapper.removeEventListener("scroll", this.handleScroll, false);
    }
  },
  methods: {


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

</style>