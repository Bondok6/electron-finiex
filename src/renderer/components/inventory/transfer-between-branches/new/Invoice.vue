<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('transfer-number')">
                <el-input v-model="form.invoiceCode" disabled />
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('transfer-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd"
                  v-model="form.invoiceDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('branch-transferred-from')">
                <el-select v-model="form.fromBrancheId" disabled>
                  <el-option :label="$t(form.currentBranceName)" :value="form.fromBrancheId"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              
              <el-form-item :label="$t('warehouse-transferred-from')">
                <el-select
                      class="width-full"
                      v-model.number="form.fromWarehouseId"
                      @change="getBranches"
                      :placeholder="$t('search')"
                    >
                      <el-option
                        v-for="item in form.listWarehousesWithBrancesRelated"
                        :key="item.warehouseId"
                        :value="item.warehouseId"
                        :label="item.warehouseName"
                      >
                      </el-option>
                    </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('receiving-branch')">
                <el-select
                      class="width-full"
                      v-model.number="form.toBrancheId"
                      @change="getWareHouses"
                      :placeholder="$t('search')"
                    >
                      <el-option
                        v-for="item in receivedBranches"
                        :key="item.branceId"
                        :value="item.branceId"
                        :label="item.branceName"
                      >
                      </el-option>
                    </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('receiving-warehouse')">
                <el-select
                      class="width-full"
                      v-model.number="form.toWarehouseId"
                      :placeholder="$t('search')"
                    >
                      <el-option
                        v-for="item in receivedWareHouses"
                        :key="item.warehouseId"
                        :value="item.warehouseId"
                        :label="item.warehouseName"
                      >
                      </el-option>
                    </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('transfer-price')">
                <el-select v-model.number="form.priceTransferQty" :disabled="priceTransfer === true && 'disabled'">
                      <el-option
                        :label="$t('opening-cost')"
                        :value="PriceColumn.openingCost"
                      ></el-option>
                      <el-option
                        :label="$t('selling-price')"
                        :value="PriceColumn.salePriceBeforeTax"
                      ></el-option>
                      <el-option
                        :label="$t('last-purchase-price')"
                        :value="PriceColumn.lastPurchasePrice"
                      ></el-option>
                      <el-option
                        :label="$t('cost-price')"
                        :value="PriceColumn.costPrice"
                      ></el-option>
                      <el-option
                        :label="$t('lowest-selling-price')"
                        :value="PriceColumn.lowestSalePrice"
                      ></el-option>
                      <el-option
                        :label="$t('wholesale-price')"
                        :value="PriceColumn.wholesalePrice"
                      ></el-option> 
                    </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
  import { mapState, mapMutations } from 'vuex';
export default {
  name: "invoice",

  data: function () {
    return {
      receivedBranches: [],
      receivedWareHouses:[],
      form: {
        invoiceCode: null,
        invoiceDate: "2022-10-17T07:53:33.955Z",
        fromBrancheId: null,
        toBrancheId: null,
        fromWarehouseId: null,
        toWarehouseId:null,
        priceTransferQty: null,
      },
    };
  },
  computed: {
    ...mapState({
      newRecordDetails: state => state.inventory.transferBetweenBranches.newRecordDetails, 
      priceTransfer: state =>  state.inventory.transferBetweenBranches.priceTransfer,
      PriceColumn: state => state.inventory.transferBetweenBranches.PriceColumn,
    }),
  },
  methods:{
    ...mapMutations({
      setRecordDetails: 
      "inventory/transferBetweenBranches/setRecordDetails",
    }),
    getBranches(){
      this.form.toBrancheId = null ;
      this.form.toWarehouseId = null ; 
      this.$store.dispatch("inventory/transferBetweenBranches/fetchItems", {
        BrancheId: this.form.fromBrancheId,
        WarehouseId: this.form.fromWarehouseId,
      });
      for(let item of this.form.listWarehousesWithBrancesRelated) {
        if(item.warehouseId === this.form.fromWarehouseId){
          this.receivedBranches = item.brancesRelated;
        }
      }
    },
    getWareHouses(){
      this.$store.dispatch("inventory/transferBetweenBranches/fetchWareHousesRelated", 
        this.form.toBrancheId).then((res) =>{
          this.receivedWareHouses = res.data.data;
          this.checkToWareHouse();
        }).catch(err => {
          console.log(err);
      });

    },
    checkToWareHouse() {
      if(this.form.fromBrancheId === this.form.toBrancheId) {
        this.receivedWareHouses = this.receivedWareHouses.filter(item => {
          return item.warehouseId !== this.form.fromWarehouseId;
        })
      }
    }
  },
  async created(){
    await Promise.all([
      this.$store.dispatch("inventory/transferBetweenBranches/fetchMaxCode").then( res =>{
        this.form.invoiceCode = res.data.data;
      }).catch(err => {
        this.$message(err.response.data.message);
      }),
        this.$store.dispatch("inventory/transferBetweenBranches/fetchPriceTransferQty").then(res => {
          this.form.priceTransferQty = res.data.data;
        }).catch(err => {
          this.$message(err.response.data.message);
      }),
    ])
  },
  watch:{
    newRecordDetails: {
      handler({ currentBranceId ,...data}) {
        this.form = {
          ...this.form,
          ...data,
          fromBrancheId: currentBranceId,
          invoiceCode: this.form.invoiceCode,
        }
      },
      deep: true,
    },
    form: {
        handler({listWarehousesWithBrancesRelated ,...newVal}) {
        this.setRecordDetails({
          ...newVal,
          note: "",
        })
      },
      deep: true,
    }
  }
};
</script>