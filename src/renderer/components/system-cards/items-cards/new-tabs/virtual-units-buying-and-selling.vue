<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table editable-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="250"
      >
        <el-table-column align="center" prop="id" :label="$t('id')" width="40">
          <template slot-scope="scope">
            <el-input
              ref="id"
              size="small"
              class="text-center index"
              :value="scope.$index  +1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="virtual_unit_for_sale"
          :label="$t('virtual-unit-for-sale')"
        >
          <template slot-scope="scope">

            <el-select
              v-model="scope.row.salesDefaultUnit"
              size="small"
              style="text-align: center"

            >
              <el-option
                v-for="unit in userUnitsSelectedList"
                :value="unit.id"
                :key="unit.id"
                :label="unit.name">

              </el-option>

            </el-select>

          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="purchaseDefaultUnit"
          :label="$t('virtual-unit-for-purchase')"
        >


          <template slot-scope="scope">
            <el-select
              v-model="scope.row.purchaseDefaultUnit"
              size="small"
              style="text-align: center"

            >
              <el-option
                v-for="unit in userUnitsSelectedList"
                :value="unit.id"
                :key="unit.id"
                :label="unit.name">

              </el-option>

            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="offerDefaultUnit"
          :label="$t('virtual-unit-for-price-offers')"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.offerDefaultUnit"
              size="small"
              style="text-align: center"

            >
              <el-option
                v-for="unit in userUnitsSelectedList"
                :value="unit.id"
                :key="unit.id"
                :label="unit.name">

              </el-option>

            </el-select>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="bookingDefaultUnit"
          :label="$t('virtual-unit-for-reservation-orders')"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.bookingDefaultUnit"
              size="small"
              style="text-align: center"

            >
              <el-option
                v-for="unit in userUnitsSelectedList"
                :value="unit.id"
                :key="unit.id"
                :label="unit.name">

              </el-option>

            </el-select>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="orderDefaultUnit"
          :label="$t('virtual-unit-for-purchase-orders')"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.orderDefaultUnit"
              size="small"
              style="text-align: center"

            >
              <el-option
                v-for="unit in userUnitsSelectedList"
                :value="unit.id"
                :key="unit.id"
                :label="unit.name">

              </el-option>

            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </el-container>


  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      tableData: [
        {
          salesDefaultUnit: "",
          purchaseDefaultUnit: "",
          offerDefaultUnit: "",
          bookingDefaultUnit: "",
          orderDefaultUnit: ""
        }
      ]
    };
  },
  computed: {
    ...mapState({
      selectedUnit: state => state.systemCards.itemsCards.selectedUnit,
      userUnitsSelectedList  : state => state.systemCards.itemsCards.userUnitsSelectedList,
    })
  },
  mounted() {
    setTimeout(x => {
      this.$nextTick(() => this.$refs.id.focus());
    }, 1000);
  },

  methods: {
    ...mapMutations({
      setRecordDetails: "systemCards/itemsCards/setRecordDetails"
    }),
  },
  watch: {
    tableData: {
        handler: function (val) {
        let DeepClone = structuredClone(val[0]);
        for (let key in DeepClone) {
          // assign id instead of name for unit before send to server (name for only show in table)
          DeepClone[key] = this.selectedUnit.id
        }
        this.setRecordDetails({...DeepClone});
      },
        deep: true
    },
    selectedUnit: function(newVal, oldVal) {
      for (let row in this.tableData[0]) {
      this.tableData[0][row] = newVal.name
    }
    }
  }
};
</script>
