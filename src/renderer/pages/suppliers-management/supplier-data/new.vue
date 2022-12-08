<template>
  <div class="mb-8 background-form">
    <invoice />

    <el-tabs style="background:transparent"
      class="items-cards-tabs-2"
      type="card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('address')"
        ><Address/>
        </el-tab-pane>
      <el-tab-pane :label="$t('supplier-movement')">
            <SupplierMovement/>
        </el-tab-pane>
      <el-tab-pane :label="$t('tax')">
          <Tax/>
        </el-tab-pane>
      <el-tab-pane :label="$t('social-media')">
          <SocialMedia/>
        </el-tab-pane>
      <el-tab-pane :label="$t('notes')">
            <Notes/>
        </el-tab-pane>
    </el-tabs>
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/suppliers-management/supplier-data/new/Invoice";
import Address from "~/components/suppliers-management/supplier-data/new/tabs/Address.vue";
import SupplierMovement from "~/components/suppliers-management/supplier-data/new/tabs/SupplierMovement.vue";
import Tax from "~/components/suppliers-management/supplier-data/new/tabs/Tax.vue";
import Notes from "~/components/suppliers-management/supplier-data/new/tabs/Notes.vue";
import SocialMedia from "~/components/suppliers-management/supplier-data/new/tabs/SocialMedia.vue";
import InvoiceSummary from "~/components/suppliers-management/supplier-data/new/summary/Summary";
export default {
  components: {
    Invoice,
    Address,
    SupplierMovement,
    Tax,
    Notes,
    SocialMedia,
    InvoiceSummary,
  },
  methods: {
    handleClick(tab) {
      if (tab.index == 2) {
        this.$store.commit("tableselection/price_of_attached_item_zero", true);
      } else {
        this.$store.commit("tableselection/price_of_attached_item_zero", false);
      }
    }
  },
  async created() {
    await this.$store.dispatch("lists/getCountriesList");
  }
};
</script>
