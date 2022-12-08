<template>
  <el-container
    class="container ma-4 mt-0 mb-0 flex-direction-column invoice-table"
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
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="80" />
      <el-table-column
        align="center"
        prop="invoiceNo"
        :label="$t('invoice-number')"
        width="70"
      />
      <el-table-column
        align="center"
        prop="invoiceDate"
        :label="$t('invoice-date')"
        width="100"
      />
      <el-table-column
        align="center"
        prop="invoiceType"
        :label="$t('invoice-type')"
        width="80"
      />
      <el-table-column
        align="center"
        prop="docType"
        :label="$t('document-type')"
      />
      <el-table-column
        align="center"
        prop="providerCustomerName"
        :label="$t('supplier-client-name')"
        width="220"
      />
      <el-table-column align="center" :label="$t('total-invoice')" width="100">
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.invoiceTotal) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoiceDiscount"
        :label="$t('invoice-discount')"
        width="100"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.invoiceDiscount) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoiceNetValue"
        width="100"
        :label="$t('total-net-value')"
      >
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.invoiceNetValue) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="taxValue"
        :label="$t('tax-value')"
        width="100"
      />
      <el-table-column align="center" prop="taxNo" :label="$t('tax-number')" width="180" />
    </el-table>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
const maxRow = 20;
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
         
        if (state.Accounting.vatStatementReport.records?.length) {
          return state.Accounting.vatStatementReport.records;
        } else {
          return [];
        }
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
    if(this.tableWrapper!=undefined){
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
    }
  },
  watch: {
    tableData: {
      handler(newVal) {
        this.tableWrapper.scrollTo(0, 0);

        this.tempList = newVal.slice(this.start, this.end);
        this.$nextTick(() => {
          this.rowHeight = 70;
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
</style>