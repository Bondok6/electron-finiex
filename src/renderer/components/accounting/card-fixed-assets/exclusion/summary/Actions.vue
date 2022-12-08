<template>
  <div class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline">

    <!-- <NuxtLink :to="localePath('/accounting/card-fixed-assets')"> -->
    <el-button size="mini" class="mb-1 btn-blue"
      @click="createExclusion"
    >{{ $t('save-f5') }}</el-button>
    <!-- </NuxtLink> -->
    <!-- <el-button size="mini" class="mb-1 btn-red">{{ $t('delete-f8') }}</el-button> -->
  </div>
</template>
<script>

export default {
methods:{
  createExclusion(){
         this.$store
        .dispatch("Accounting/cardFixedAssets/createExclusion")
        .then(res => {
          this.$router.push({
            path: "/accounting/card-fixed-assets"
          });
          this.$notify({
            title: "Success",
            message: "createExclusion Created",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify({
            title: "Error",
            message: err.response.data.message,
            type: "error"
          });
        });
  }
}
}
</script>