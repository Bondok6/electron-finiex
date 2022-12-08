<template>
  <div class="mb-8 background-form">
    <invoice />
    <!-- <invoice-table /> -->
    <el-tabs
      style="
        background: transparent;
        border-bottom: 1px solid #e4e7ed;
        margin: 0;
      "
      class="items-cards-tabs-2"
      type="card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('address')"><Address /> </el-tab-pane>
    <el-tab-pane :label="$t('client-balances')"><Balances /> </el-tab-pane>
      <el-tab-pane :label="$t('client-movement')">
        <SupplierMovement />
      </el-tab-pane>
      <el-tab-pane :label="$t('tax')">
        <Tax />
      </el-tab-pane>
      <el-tab-pane :label="$t('social-media')">
        <SocialMedia />
      </el-tab-pane>
      <el-tab-pane :label="$t('notes')">
        <Notes />
      </el-tab-pane>
    </el-tabs>
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/customer-management/customers-data/edit/Invoice.vue";
import Address from "~/components/customer-management/customers-data/edit/tabs/Address.vue";
import Balances from "~/components/customer-management/customers-data/edit/tabs/Balances.vue";
import SupplierMovement from "~/components/customer-management/customers-data/edit/tabs/SupplierMovement.vue";
import Tax from "~/components/customer-management/customers-data/edit/tabs/Tax.vue";
import Notes from "~/components/customer-management/customers-data/edit/tabs/Notes.vue";
import SocialMedia from "~/components/customer-management/customers-data/edit/tabs/SocialMedia.vue";
import InvoiceSummary from "~/components/customer-management/customers-data/edit/summary/Summary.vue";
export default {
  components: {
    Invoice,
    InvoiceSummary,
    Address,
    Balances,
    SupplierMovement,
    Tax,
    Notes,
    SocialMedia,
  },

  async created(){
    await Promise.all([
      this.$store.dispatch("customerManagement/customer/fetchSingleRecord" , this.$route.params.id),
      this.$store.dispatch("lists/getSalesMenList"),
      this.$store.dispatch("lists/getCountriesList"),
      this.$store.dispatch("customerManagement/globalList/fetchCustomerGroup"),
      ])

  },
      methods: {
    handleClick(tab) {
      if (tab.index == 2) {
        this.$store.commit("tableselection/price_of_attached_item_zero", true);
      } else {
        this.$store.commit("tableselection/price_of_attached_item_zero", false);
      }
    },
  },
};
</script>
