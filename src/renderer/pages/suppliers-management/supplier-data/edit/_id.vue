<template>
  <div class="mb-8 background-form">
    <invoice />

    <el-tabs
    style="background:transparent;border-bottom: 1px solid #E4E7ED;margin: 0;"
      class="items-cards-tabs-2"
      type="card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('address')"
        ><Address/>
        </el-tab-pane>
      <!-- <el-tab-pane :label="$t('suppliers-balances')"
        ><Balances/>
        </el-tab-pane> -->
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
import Invoice from "~/components/suppliers-management/supplier-data/edit/Invoice";
import Address from "~/components/suppliers-management/supplier-data/edit/tabs/Address.vue";
// import Balances from "~/components/suppliers-management/supplier-data/tabs/Balances.vue";
import SupplierMovement from "~/components/suppliers-management/supplier-data/edit/tabs/SupplierMovement.vue";
import Tax from "~/components/suppliers-management/supplier-data/edit/tabs/Tax.vue";
import Notes from "~/components/suppliers-management/supplier-data/edit/tabs/Notes.vue";
import SocialMedia from "~/components/suppliers-management/supplier-data/edit/tabs/SocialMedia.vue";
import InvoiceSummary from "~/components/suppliers-management/supplier-data/edit/summary/Summary";
export default {
  components: {
    Invoice,
    Address,
    // Balances,
    SupplierMovement,
    Tax,
    Notes,
    SocialMedia,
    InvoiceSummary,
  },
  async created(){
    await Promise.all([
      this.$store.dispatch("suppliersManagement/supplierData/fetchSingleRecord" , this.$route.params.id),
      this.$store.dispatch("lists/getCountriesList"),
      ])

  },
  validate({ params, app }) {
    // must route id be digit
    if (!isNaN(params.id)) {
      return true;
    } else {
      window.$nuxt.$notify({
        title: "cannot assuccss this HERE"
      });
      app.router.push(
        `${app.i18n.locale == "ar" ? "/" : "en/"}system-cards/salemen-data`
      );
      return false;
    }
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
