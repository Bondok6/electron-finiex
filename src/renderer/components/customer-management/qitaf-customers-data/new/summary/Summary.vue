<template>
  <div class="text-center container ma-4 py-2 mt-0">
    <div
      class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    ">
      <el-button size="mini" class="mb-1 btn-orange">{{
          $t("print-client-card")
        }}</el-button>
      <el-button size="mini" class="mb-1 btn-blue" @click="create()">{{ $t("save-f5") }}</el-button>
      <el-button size="mini" class="btn-violet">{{ $t("back-f6") }}</el-button>
    </div>
  </div>
</template>


<script>

export default {
  name: "summary-section",
  components: {
  },
  methods:{
    create(){
      this.$store.dispatch("customerManagement/qitafCustomers/create").then(() => {
        this.$notify({
          title: "Success",
          message: "qitafCustomers created",
          type: "success"
        });
        this.$router.push("/customer-management/qitaf-customers-data");
      }).catch(error => {
        this.$notify({
          title: "Error",
          message: error.response.data.message,
          type: "error"
        });
      });
    }
  }
};
</script>
