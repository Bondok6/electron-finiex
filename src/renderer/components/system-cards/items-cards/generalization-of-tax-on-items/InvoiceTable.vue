<template>
  <div>
    <el-container class="container ma-4 mt-0 mb-0 invoice-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="750"
        @select="handleOnceChange"
        ref="multipleTable"
        @select-all="handleAllChanges"
      >
        <el-table-column
          align="center"
          prop="itemID"
          :label="$t('item-number')"
        />
        <el-table-column align="center" prop="name" :label="$t('item-name')" />
        <el-table-column align="center" prop="taxValue" :label="$t('tax%')">
          <template slot-scope="scope">
            <span v-if="!editMode">{{
              $numberWithCommas(scope.row.taxValue)
            }}</span>
            <el-input
              v-else
              v-model.number="scope.row.taxValue"
              size="small"
              class="number editable-table-input"
              @blur="updateCell({ ...scope.row })"
            >
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          v-if="percentage"
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
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      tableData: []
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapState({
      editMode: state => state.systemCards.generalization.editMode,
      percentage: state => state.systemCards.generalization.percentage
    })
  },
  methods: {
    ...mapMutations({
      setRecordsWillEdit: "systemCards/generalization/setRecordsWillEdit",
      removeRecordFromWillEdit:
        "systemCards/generalization/removeRecordFromWillEdit"
    }),
    updateCell({ itemID, taxValue }) {
      console.log({ itemID, taxValue });
      this.setRecordsWillEdit({
        itemID,
        percentage: taxValue
      });
    },
    handleOnceChange(val, row) {
      this.changePrice(row);
    },
    handleAllChanges(val) {
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
          row.taxValue = this.data[i].taxValue;
          row.check = false;
        });
        this.removeRecordFromWillEdit({});
      }
    },
    changePrice(row) {
      console.log(row);
      row.check = !row.check;
      this.tableData.forEach((item, i) => {
        if (item.check) {
          item.taxValue = +this.percentage;

          this.setRecordsWillEdit({ 
            itemID: item.itemID,
            percentage: item.taxValue

          });
        } else {
          item.taxValue = this.data[i].taxValue;
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
          .dispatch("systemCards/generalization/updateAll", {
            percentage: this.price,
            priceColumnSelected: this.priceColumnSelected
          })
          .then(() => {
            this.$store.dispatch("systemCards/generalization/fetchRecords", {
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
    }
  }
};
</script>

<style lang="scss" >
.table-selection {
  pointer-events: auto !important;
}
</style>
