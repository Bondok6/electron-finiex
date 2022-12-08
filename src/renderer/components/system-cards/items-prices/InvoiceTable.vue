<template>
  <div>
    <el-container
      class="container ma-4 mt-0 mb-0 invoice-table flex-direction-column"
    >
      <div class="d-flex justify-end" v-if="priceItemsPercentage">
        <el-button size="medium" class="btn-primary mb-1" @click="selectAll">
          {{ $t("select-all") }}
        </el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="750"
        ref="multipleTable"
        @select="handleOnceChange"
        @select-all="handleAllChanges"
      >
        <el-table-column align="center" type="index" :label="$t('id')" />
        <el-table-column
          align="center"
          prop="itemID"
          :label="$t('item-number')"
        />
        <el-table-column align="center" prop="name" :label="$t('item-name')" />
        <el-table-column align="center" prop="unitID" :label="$t('unit')" />
        <el-table-column align="center" :label="$t('opening-cost')">
          <template slot-scope="scope">
            <span v-if="!editMode">{{
              $numberWithCommas(scope.row.openingCost)
            }}</span>
            <el-input
              v-else
              v-model.number="scope.row.openingCost"
              size="small"
              class="number editable-table-input"
              @input="updateCell(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="lastPurchasePrice"
          :label="$t('last-purchase-price')"
        >
          <template slot-scope="scope">
            <span v-if="!editMode">{{
              $numberWithCommas(scope.row.lastPurchasePrice)
            }}</span>
            <el-input
              v-else
              v-model.number="scope.row.lastPurchasePrice"
              size="small"
              class="number editable-table-input"
              @input="updateCell(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="costPrice"
          :label="$t('cost-price')"
        >
          <template slot-scope="scope">
            <span v-if="!editMode">{{
              $numberWithCommas(scope.row.costPrice)
            }}</span>
            <el-input
              v-else
              v-model.number="scope.row.costPrice"
              size="small"
              class="number editable-table-input"
              @input="updateCell(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="wholesalePrice"
          :label="$t('wholesale-price')"
        >
          <template slot-scope="scope">
            <span v-if="!editMode">{{
              $numberWithCommas(scope.row.wholesalePrice)
            }}</span>
            <el-input
              v-else
              v-model.number="scope.row.wholesalePrice"
              size="small"
              class="number editable-table-input"
              @input="updateCell(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="lowestSalePrice"
          :label="$t('lowest-selling-price')"
        >
          <template slot-scope="scope">
            <span v-if="!editMode">{{
              $numberWithCommas(scope.row.lowestSalePrice)
            }}</span>
            <el-input
              v-else
              v-model.number="scope.row.lowestSalePrice"
              size="small"
              class="number editable-table-input"
              @input="updateCell(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="salePriceBeforeTax"
          :label="$t('selling-price-before-tax')"
        >
          <template slot-scope="scope">
            <span v-if="!editMode">
              {{ scope.row.check ? "YEA" : "NOO" }}
              {{ $numberWithCommas(scope.row.salePriceBeforeTax) }}</span
            >
            <el-input
              v-else
              v-model.number="scope.row.salePriceBeforeTax"
              size="small"
              class="number editable-table-input"
              @input="updateCell(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="barCode"
          :label="$t('unit-barcode')"
          v-if="showUnitBarcode"
          :key="Math.random()"
        >
          <template slot-scope="scope"> {{ scope.row.barCode }} </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="show_sales_price_after_tax"
          :label="$t('show-sales-price-after-tax')"
          v-if="showSalesAfterTax"
          :key="Math.random()"
        >
          <template slot-scope="scope">
            {{
              $numberWithCommas(
                scope.row.salePriceBeforeTax * (scope.row.taxValue / 100)
              )
            }}
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          v-if="price"
          type="selection"
          class-name="table-selection"
        >
        </el-table-column>
      </el-table>
    </el-container>
    <div class="text-center container ma-4 py-2 mt-0 invoice-summary"></div>
  </div>
</template>

<script>
import { checkPrime } from "crypto";
import { mapState, mapMutations } from "vuex";
export default {
  components: {},
  name: "invoice",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      tableData: [],
      selectedAll: false,
      selected: []
    };
  },
  computed: {
    ...mapState({
      showUnitBarcode: state => state.systemCards.itemsPrices.showUnitBarcode,
      showSalesAfterTax: state =>
        state.systemCards.itemsPrices.showSalesAfterTax,
      priceItemsPercentage: state =>
        state.systemCards.itemsPrices.priceItemsPercentage,
      editMode: state => state.systemCards.itemsPrices.editMode,
      price: state => state.systemCards.itemsPrices.price,
      priceColumnSelected: state =>
        state.systemCards.itemsPrices.priceColumnSelected,
      PriceColumn: function(state) {
        return Object.entries(state.systemCards.itemsPrices.PriceColumn);
      },
      searchParams: function(state) {
        return state.systemCards.itemsPrices.searchParams;
      }
    })
  },

  methods: {
    ...mapMutations({
      setRecordsWillEdit: "systemCards/itemsPrices/setRecordsWillEdit",
      pricePercentage: "systemCards/itemsPrices/pricePercentage",
      removeRecordFromWillEdit:
        "systemCards/itemsPrices/removeRecordFromWillEdit",
      showPriceItemsPercentage:
        "systemCards/itemsPrices/showPriceItemsPercentage"
    }),
    updateCell({
      openingCost,
      unitID,
      branchID,
      itemID,
      lastPurchasePrice,
      costPrice,
      wholesalePrice,
      lowestSalePrice,
      salePriceBeforeTax,
      ID
    }) {
      this.setRecordsWillEdit({
        openingCost,
        unitID,
        branchID,
        itemID,
        lastPurchasePrice,
        costPrice,
        wholesalePrice,
        lowestSalePrice,
        salePriceBeforeTax,
        ID
      });
    },
    handleOnceChange(val, row) {
      this.changePrice(row);
    },
    handleAllChanges(val) {
      console.log(val.length > 0);
      if (val.length > 0) {
        val.forEach(row => {
          if (!row.check) {
            this.changePrice(row);
          }
        });
      } else {
        // reset all prices
        this.$refs.multipleTable.clearSelection();
        this.tableData.forEach((row, i) => {
          row[this.PriceColumn[this.priceColumnSelected][0]] = this.data[i][
            this.PriceColumn[this.priceColumnSelected][0]
          ];
          row.check = false;
        });
        this.removeRecordFromWillEdit({});
      }
    },
    changePrice(row) {
      row.check = !row.check;
      this.tableData.forEach((item, i) => {
        if (
          item.check &&
          this.data[i][this.PriceColumn[this.priceColumnSelected][0]] !=
            item[this.PriceColumn[this.priceColumnSelected][0]] -
              (this.data[i][this.PriceColumn[this.priceColumnSelected][0]] *
                this.price) /
                100
        ) {
          item[this.PriceColumn[this.priceColumnSelected][0]] +=
            item[this.PriceColumn[this.priceColumnSelected][0]] *
            (this.price / 100);
          this.setRecordsWillEdit({ ...item });
        } else if (!item.check) {
          console.log(item[this.PriceColumn[this.priceColumnSelected][0]]);
          item[this.PriceColumn[this.priceColumnSelected][0]] = this.data[i][
            this.PriceColumn[this.priceColumnSelected][0]
          ];
          this.removeRecordFromWillEdit({ ...item }); 
        }
      });
    },
    selectAll() {
      this.$confirm(
        "are you sure you want to change all items",

        {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "warning"
        }
      ).then(() => {
        this.$store
          .dispatch("systemCards/itemsPrices/updateAll", {
            percentage: this.price,
            priceColumnSelected: this.priceColumnSelected
          })
          .then(() => {
            this.$store.dispatch("systemCards/itemsPrices/fetchRecords", {
              ...this.searchParams
            });
            this.showPriceItemsPercentage(false);
            this.$notify({
              title: "updated successfully",
              type: "success"
            });
          });
      });
    }
  },
  watch: {
    data: {
      // assign prop to local data to Avoid Error * * cannot mutate the original data [prop]**
      handler(newVal) {
        let deepClone = structuredClone(newVal);
        this.tableData = deepClone;
      },
      deep: true,
      immediate: true
    },
    priceColumnSelected: {
      handler(newVal, oldVal) {
        if (oldVal !== undefined) {
          // reset checks and get back to original data
          this.$refs.multipleTable?.clearSelection();
          this.tableData = structuredClone(this.data);
          this.removeRecordFromWillEdit({});
        }
      }
    },
    priceItemsPercentage: {
      handler(newVal, oldVal) {
        if (newVal === false) {
          // reset checks and get back to original data
          this.$refs.multipleTable?.clearSelection();
          this.tableData = structuredClone(this.data);
          this.pricePercentage(null);
          this.removeRecordFromWillEdit({});
        }
      }
    }
  }
};
</script>

<style lang="scss">
.table-selection {
  pointer-events: auto !important;
}
</style>
