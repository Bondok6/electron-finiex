<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table editable-table">
      <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column align="center" prop="id" :label="$t('id')" width="40">
          <template slot-scope="scope">
            <el-input
              ref="id"
              size="small"
              class="text-center index"
              :value="scope.$index + 1"
              :disabled="!userSelectMainUnit"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="unit" :label="$t('unit')"

        >
          <template slot-scope="scope">
            <el-select
              class="width-full"
              v-model="scope.row.unitId"
              :placeholder="$t('search')"
              :loading="loading"
              :remote-method="remoteMethodFetchUnits"
              filterable
              remote
              clearable
              @change="handleRowUnit(scope.row)"
              :disabled="!userSelectMainUnit || scope.$index == 0"

            >
              <el-option
                v-for="item in unitsList"
                :key="item.id"
                :value="item.id"
                :label="item.name"
              >
                <span style="float: left">{{ item.name }}</span>
                <span
                  style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                  >{{ item.code }}</span
                >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="packing_quantity"
          :label="$t('packing-quantity')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.quantityFill"
              :disabled="!userSelectMainUnit"

            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="opening_cost"
          :label="$t('opening-cost')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.openingCostPrice"
              :disabled="!userSelectMainUnit"

            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="last_purchase_price"
          :label="$t('last-purchase-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.lastPurchasePrice"
              :disabled="!userSelectMainUnit"

            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="cost_price"
          :label="$t('cost-price%')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.costPrice"
              :disabled="!userSelectMainUnit"

            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="selling_price_percentage"
          :label="$t('selling-price%')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.sellingPerice"
              :disabled="!userSelectMainUnit"

            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="lowest_selling_price_percentage"
          :label="$t('lowest-selling-price%')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.minSellingPerice"
              :disabled="!userSelectMainUnit"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="wholesale_price"
          :label="$t('wholesale-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.wholesalePrice"
              :disabled="!userSelectMainUnit"

            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="unit_barcode"
          :label="$t('unit-barcode')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.barCode"
              @keyup.enter.native="newRow()"
              :disabled="!userSelectMainUnit"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" width="60" v-if="tableData.length > 1">
          <template slot-scope="scope">
            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              :title="$t('confirm')"
              @confirm="deleteRow(scope.$index)"
            >
              <i
                slot="reference"
                class="setting-button danger-color el-icon-delete-solid"
              ></i>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

    </el-container>
  <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
      <div class="text-unbold d-flex flex-wrap space-around">
        <span class="mt-2">
          <el-select class="btn-grey px-4-lg"
                     v-model="global.itemTaxType"
          >
            <el-option value="1" label="خاضع للضريبه"></el-option>
            <el-option value="1" label="غير خاضع للضريبه"></el-option>
          </el-select>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center">
          <span class="mx-2 mb-2-sm">
            {{ $t("tax-percentage") }}
          </span>
          <span>
            <el-input v-model="global.itemTaxRatio" class="input-style mt-2 px-4-lg ma-0">
            </el-input>
            <span>%</span>
          </span>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center">
          <span class="mx-2 mb-2-sm">
            {{ $t("selling-price-profit") }}
          </span>
          <span>
            <el-input class="input-style mt-2 px-4-lg mb-2-sm d-inline-block" v-model="global.profitSalesPrice">
            </el-input>
          </span>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center">
          <span class="mx-2 mb-2-sm">
            {{ $t("demand-point") }}
          </span>
          <span>
            <el-input v-model="global.requestPoint" class="input-style px-4-lg mt-2">

            </el-input>
          </span>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center">
          <span class="mx-2 mb-2-sm">
            {{ $t("quantity") }}
          </span>
          <el-input v-model="global.requestQty" class="input-style mx-2 mt-2">

          </el-input>
        </span>
      </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      does_not_include_tax: 1,
      loading: false,
      global:{
        requestPoint: "",
        requestQty : "",
        profitSalesPrice :"",
        itemTaxType : "",
        itemTaxRatio: ""
      },
      tableData: [
        {
          unitId: "",
          quantityFill: "",
          openingCostPrice: "",
          lastPurchasePrice: "",
          costPrice: "",
          sellingPerice: "",
          minSellingPerice: " ",
          wholesalePrice: "",
          barCode: ""
        }
      ],
      userSelectMainUnit : false,
      appendTableData: {
        unitId: "",
        quantityFill: "",
        openingCostPrice: "",
        lastPurchasePrice: "",
        costPrice: "",
        sellingPerice: "",
        minSellingPerice: " ",
        wholesalePrice: "",
        barCode: ""
      }
    };
  },
  computed: {
    ...mapState({
      unitsList: state => state.systemCards.globalList.unitsList,
      selectedUnit: state => state.systemCards.itemsCards.selectedUnit
    })
  },
  mounted() {
    setTimeout(x => {
      this.$nextTick(() => this.$refs.id.focus());
    }, 1000);
  },

  methods: {
    ...mapMutations({
      setRecordDetails: "systemCards/itemsCards/setRecordDetails",
      setUserUnitsSelectedList : "systemCards/itemsCards/setUserUnitsSelectedList"
    }),
    handleRowUnit(row) {
      if (this.tableData.filter(x => x.unitId == row.unitId).length > 1) {
        row.unitId = "";
        this.$message.error("this unit is already added");
      }
    },
    async remoteMethodFetchUnits(query) {
      this.loading = true;
      try {
        await this.$store.dispatch("systemCards/globalList/fetchUnitsList", {
          searchString: query
        });
        this.loading = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    newRow() {
      this.tableData.push({ ...this.appenedTableData });
      setTimeout(x => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 20);
    },
    deleteRow(index) {
      this.tableData.splice(index, 1);
    }
  },
  watch: {
    tableData: {
      handler: function(val) {
        let deepClone = structuredClone(val);
        this.setRecordDetails({priceUnits : deepClone });
        let listOfUnitUserSelected = []
        deepClone.forEach((row=>{
          for(let unit of this.unitsList){
            console.log(row.unitId)
            console.log(unit.id )
             row.unitId === unit.id ? listOfUnitUserSelected.push({...unit}) : false
          }
        }))
     this.setUserUnitsSelectedList(listOfUnitUserSelected);
      },
      deep: true
    },
    global:{
      handler:function (val){
        this.setRecordDetails({...val});
      },
      immediate : true ,
      deep :true
    },
    selectedUnit: {
      handler(val) {
         if (val?.id) {
           this.tableData[0].unitId = val.id;
           this.userSelectMainUnit = true
        }else{
           this.userSelectMainUnit = false
        }
      },
      immediate: true,
      deep : true
    }
  }
};
</script>

<style scoped lang="scss">
.width-75-lg {
  @media only screen and (min-width: 1280px) {
    width: 75%;
  }

  .mb-1 {
    @media only screen and (min-width: 768px) {
      margin-bottom: 0 !important;
    }
  }

  .input-style {
    @media only screen and (min-width: 768px) {
      margin: 0 1px !important;
    }
  }
}
</style>
