<template>
  <div class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline">
     <NuxtLink :to="localePath('/suppliers-management/supplier-data')">
    <el-button size="mini" class="mb-1 btn-blue" @click="update">{{ $t('save-f5') }}</el-button>
     </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red">{{ $t('delete-f8') }}</el-button>

    <NuxtLink :to="localePath('/suppliers-management/supplier-data')">
    <el-button size="mini" class="mb-1 btn-violet">{{ $t('back-f6') }}</el-button>
    </NuxtLink>
    <el-button size="mini"  class="mb-1 btn-grey">{{ $t('print-f4') }}</el-button>
    <el-button size="mini"  class="mb-1 btn-grey">{{ $t('print-pdf') }}</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    update() {
      this.$store.dispatch("suppliersManagement/supplierData/update").then(()=> {
          this.$notify({
          title: "Success",
          message: "Provider Updated",
          type: "success"
        });
      }).catch((err)=>{
        this.$notify({
            title: "Error",
            message: "Error NOT Update",
            type: "error"
          });
      })
    }
  }
}
</script>
