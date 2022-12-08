<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('inventory-number')">
            <el-input 
              v-model.number="form.inventory_number" 
              type="number" 
              :disabled="!editInventoryNumber && 'disabled'">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('warehouse-name')">
                    <el-select
                      class="width-full"
                      v-model.number="form.warehouseId"
                      :placeholder="$t('search')"
                      @change="updateInventoryNum()"
                    >
                      <el-option
                        v-for="item in relatedWarehouses"
                        :key="item.warehouseId"
                        :value="item.warehouseId"
                        :label="item.bwbrWaName"
                      >
                      </el-option>
                    </el-select>
              </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "invoice",
  computed: {
    ...mapState({
      relatedWarehouses: state => state.General.relatedWarehouses,
      financialYear: state => state.General.financialYear,
      editInventoryNumber: state => state.inventory.inventoryStoreBarcode.editInventoryNumber,
    })
  },
  data: function () {
    return {
      form: {
        inventory_number: null,
        warehouseId: null,
      },
    };
  },
  methods: {    
    ...mapMutations({
      setInvoiceForm: 
      "inventory/inventoryStoreBarcode/setInvoiceForm",
    }),
    updateInventoryNum(){
      if(this.form.inventory_number) {
        this.form.inventory_number++;
      }; 
    },
  },
  watch: {
    financialYear: {
      handler(newVal) {
        let year = Number(newVal.to.slice(0,4));
        this.form.inventory_number = year;
      },
      deep: true,
    },
    relatedWarehouses: {
      handler(newVal) {
        for(let item of newVal){
          if(item.isDefaultWare){
            this.form.warehouseId = item.warehouseId;
          }
        }
        if(!this.form.warehouseId){
          this.form.warehouseId = newVal[0].warehouseId;
        }
      },
      deep: true,
    },
    form: {
      handler(newVal) {
        if(newVal.warehouseId && newVal.inventory_number){
          this.setInvoiceForm({ ...newVal });
        }
      },
      deep: true,
    },
  }
};
</script>