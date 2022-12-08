<template>
  <el-container
    class="container ma-4 mt-0 mb-0 invoice-table  flex-direction-column"
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
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="invoiceNo"
        :label="$t('invoice-number')"
      />
      <el-table-column
        align="center"
        prop="invoiceDate"
        :label="$t('invoice-date')"
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
      />

      <el-table-column
        align="center"
        prop="invoiceDiscount"
        :label="$t('invoice-discount')"
        width="80"
      >
      <template slot-scope="scope">
        
         {{ $numberWithCommas(scope.row.invoiceDiscount) }}
        
      </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="taxValue"
        :label="$t('tax-value')"
      >
   <template slot-scope="scope">
        
         {{ $numberWithCommas(scope.row.taxValue) }}
        
      </template>
      </el-table-column>
      <el-table-column align="center" prop="taxNo" :label="$t('tax-number')" />
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
        if (state.Accounting["100ProductsTaxStatement"].records?.length) {
          return state.Accounting["100ProductsTaxStatement"].records;
        } else {
          return [];
        }
      },
   
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
          // height Row 
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