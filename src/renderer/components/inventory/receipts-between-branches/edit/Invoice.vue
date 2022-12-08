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
              <el-form-item :label="$t('receipt-number')">
                <el-input v-model="form.invoiceId" disabled>
                </el-input>
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
              <el-form-item :label="$t('receiving-branch')">
                <el-input v-model="form.toBrancheName" disabled/>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('receiving-warehouse')">
                <el-input v-model="form.toWarehouseName" disabled/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('transfer-number')">
                <el-input v-model="form.invoiceId" disabled/>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('branch-transferred-from')">
                <el-select
                      class="width-full"
                      v-model="form.fromBrancheName"
                      :placeholder="$t('search')"
                      :loading="loadingBranches"
                      :remote-method="remoteBranchesList"
                      filterable
                      remote
                    >
                      <el-option
                        v-for="item in branchesList"
                        :key="item.id"
                        :value="item.id"
                        :label="item.name"
                      >
                      </el-option>
                    </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('warehouse-transferred-from')">
                <el-select
                      class="width-full"
                      v-model="form.fromWarehouseName"
                      :placeholder="$t('search')"
                      :loading="loadingWareHouses"
                      :remote-method="remoteWarehousesList"
                      filterable
                      remote
                    >
                      <el-option
                        v-for="item in warehousesList"
                        :key="item.id"
                        :value="item.id"
                        :label="item.name"
                      >
                      </el-option>
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

  data() {
    return {
      loadingItems: false,
      loadingWareHouses: false,
      loadingBranches: false,
      form: {
        invoiceId: null,
        invoiceCode: null,
        invoiceDate: "",
        fromBrancheId: null,
        fromBrancheName:"",
        fromWarehouseId: null,
        toWarehouseName: "",
        toBrancheId: null,
        toWarehouseId: null,
        toBrancheName: "",
        toWarehouseName: "",
      }
    }
  },
  computed:{
    ...mapState({
      warehousesList: state => state.systemCards.globalList.warehousesList,
      branchesList: state => state.systemCards.globalList.branchesList,
      singleRecordDetails: state => state.inventory.receiptsBetweenBranches.singleRecordDetails,
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: 
      "inventory/receiptsBetweenBranches/setRecordDetails"
    }),
    remoteWarehousesList(query) {
      this.loadingWareHouses = true;
      this.$store.dispatch("systemCards/globalList/fetchWarehousesList" , query).then(() => {
        this.loadingWareHouses = false;        
      });
    },
    remoteBranchesList(query) {
      this.loadingBranches = true;
      this.$store.dispatch("systemCards/globalList/fetchBranchesList" , query).then(() => {
        this.loadingBranches = false;
      });
    },
  },
  watch: {
    singleRecordDetails: {
      handler(newVal) {
        this.form = {
          ...newVal,
        }
      },
      deep: true,
    },
    form: {
      handler(newVal) {
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