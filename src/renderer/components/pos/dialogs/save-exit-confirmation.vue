<template>
  <el-dialog class="dialog-padding-0-all" title=" " :visible.sync="showDialog" width="50%">
    <el-row class="mb-1">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>
    </el-row>

    <el-row class="d-flex justify-center">
      <div>{{$t('sure-to-save-exit')}}</div>
    </el-row>

    <el-row class="mt-1 mb-2 d-flex justify-center">
      <el-button class="btn-navy px-3 mx-1" @click="closeDialog()">
        {{$t("ok")}}
      </el-button>

      <el-button class="btn-navy-bordered navy-color px-3 mx-1" @click="closeDialog()">
        {{$t("cancel")}}
      </el-button>
    </el-row>

    <el-row></el-row>
  </el-dialog>
</template>

<script>
export default {
  name: "SaveExitConfirmation",

  data: function () {
    return {
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/saveExitConfirmation/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/saveExitConfirmation/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.saveExitConfirmation.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.cancel-btn {
  color: black;
  font-size: x-large;
  cursor: pointer;
  margin: 0.4rem 0.4rem;
}
</style>