<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1 btn-blue px-4-lg">{{
      $t("save-f5")
    }}</el-button>
  </div>
</template>



<script>
export default {
  name: "search",

  data: function () {
    return {
      additionalChoice: false,
      form: {},
      sub_form: {},
      radio: "1",
    };
  },
  methods: {
    OpenDialog(state) {
      this.$store.commit("electronicscale/updateDialogState", state);
    },
  },
};
</script>
