<template>
  <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">
    <NuxtLink :to="localePath('/accounting/supplier-payment-bond')">
      <el-button size="mini" class="mb-1" type="info" @click="create()">{{
        $t("save-f5")
      }}</el-button>
    </NuxtLink>

    <NuxtLink :to="localePath('/accounting/supplier-payment-bond')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-pdf")
    }}</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    create() {
      this.$store.dispatch("Accounting/supplierPaymentBond/create").then(() => {
        this.$notify({
          title: "Success",
          message: "supplier Payment bond Created successfully",
          type: "success"
        });
        this.$router.push("/accounting/supplier-payment-bond");
      });
    }
  }
};
</script>
