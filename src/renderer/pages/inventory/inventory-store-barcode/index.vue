<template>
  <div class="mb-8">
    <invoice />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="newRecords" v-else/>
    <invoice-summary />

    <div class="text-center">
      <el-pagination
        :background="true"
        :current-page="paginationConfig.pageNumber"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="paginationConfig.totalRecords"
        :page-sizes="[10, 20, 30, 40]"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-size="paginationConfig.pageSize"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Invoice from '~/components/inventory/inventory-store-barcode/Invoice';
import InvoiceTable from '~/components/inventory/inventory-store-barcode/InvoiceTable';
import InvoiceSummary from '~/components/inventory/inventory-store-barcode/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
  data: function (){
    return {
      newRecords: [],
    }
  },
  computed: {
    ...mapState({
      invoiceForm: state => state.inventory.inventoryStoreBarcode.invoiceForm,
      records: state => state.inventory.inventoryStoreBarcode.records,
      paginationConfig: state => state.inventory.inventoryStoreBarcode.paginationConfig,
      isLoading: state => state.isLoading,
    })
  },
  async created(){
    await Promise.all([
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("General/getCurrentBranch"),
    ]);
    await this.$store.dispatch("General/getRelatedWarehouses");
  },
  methods: {
    ...mapMutations({
      setFinancialYear : "General/setFinancialYear",
      setEditInventoryNumber: 
      "inventory/inventoryStoreBarcode/setEditInventoryNumber",
    }),

    async handleSizeChange(val) {
      await this.$store.dispatch("inventory/inventoryStoreBarcode/fetchRecords", {
        InventoryId: this.invoiceForm.inventory_number,
        WarehouseId: this.invoiceForm.warehouseId,
        pageNumber: 1,
        pageSize: val
      });  
    },

    handleCurrentChange(val) {
      this.$store.dispatch("inventory/inventoryStoreBarcode/fetchRecords", {
        InventoryId: this.invoiceForm.inventory_number,
        WarehouseId: this.invoiceForm.warehouseId,
        pageNumber: val
      });
    }
  },
  
  watch: {
    records: {
      handler(newVal) {
        if(newVal.length > 0){
          this.setEditInventoryNumber(false);
          this.newRecords = [{
            itemId: null,
            itemName: '',
            mdcode: null,
            expireDate: "",
            batch: "",
            inventoryQuantity: 0,
            edit: false,
          },  ...newVal.map(item => {
            return {
              ...item,
              edit: true,
            }
          })];
        };
        if(newVal.length === 0){
          this.setEditInventoryNumber(true);
          this.newRecords =[{
            itemId: null,
            itemName: '',
            mdcode: null,
            expireDate: "",
            batch: "",
            inventoryQuantity: 0,
            edit: false,
          }];
        }     
      },
      deep: true,
    },
    invoiceForm: {
      handler(newVal) {
        this.$store.dispatch("inventory/inventoryStoreBarcode/fetchRecords", {
          InventoryId: newVal.inventory_number,
          WarehouseId: newVal.warehouseId,
        });
        this.$store.dispatch("inventory/inventoryStoreBarcode/fetchItems", {
          WarehouseId: newVal.warehouseId,
        });   
      },
      deep: true,
    },
  },
  destroyed(){
    this.setFinancialYear({});
    this.setEditInventoryNumber(true);
  }
}
</script>
