<template>
    <div class="mb-8">
        <invoice :total="paginationConfig.totalOrders"/>
        <Loading v-if="isLoading"></Loading>
        <invoice-table v-else :data="purchasesOrdersList"/>
        <invoice-summary />
        <div class="text-center">
            <el-pagination
                :background="true"
                :current-page="paginationConfig.pageNumber"
                layout="jumper, prev, pager, next, total ,sizes"
                :total="paginationConfig.totalOrders"
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
import { mapState } from "vuex";
import Invoice from "~/components/purchases/purchases-orders/entry/Invoice.vue";
import InvoiceTable from "~/components/purchases/purchases-orders/entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/purchases/purchases-orders/entry/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceTable,
        InvoiceSummary,
    },
    computed:{
        ...mapState({
        purchasesOrdersList: (state) => state.purchases.purchasesOrders.purchasesOrdersList,
        paginationConfig: (state) => state.purchases.purchasesOrders.paginationConfig,
        isLoading: (state) => state.isLoading,
        })
    },
    methods: {
        handleCurrentChange(val){
            this.$store.dispatch("purchases/purchasesOrders/fetchpurchasesOrdersList",{
                pageNumber: val,
            });
        },
        handleSizeChange(val) {
            this.$store.dispatch("purchases/purchasesOrders/fetchpurchasesOrdersList",{
                pageNumber: 1,
                pageSize: val,
            });
        },
    },
    created() {
        this.$store.dispatch("purchases/purchasesOrders/fetchpurchasesOrdersList",{
            pageNumber : 1
        })
    },
}
</script>