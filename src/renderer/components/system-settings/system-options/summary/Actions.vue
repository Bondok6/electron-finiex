<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button
      size="mini"
      class="mb-1 btn-cyan px-4-lg"
      @click="OpenDialog(true)"
      >{{ $t("electronic-scale") }}</el-button
    >
    <el-button size="mini" class="mb-1 btn-blue px-4-lg">{{
      $t("save-f5")
    }}</el-button>

    <el-button
      size="mini"
      class="mb-1 btn-orange px-4-lg"
      @click="additionalChoice = true"
      >{{ $t("customer-screen") }}</el-button
    >
    <electronicscale />
    <el-dialog
      title=" "
      :visible.sync="additionalChoice"
      width="60%"
      class="align-center"
    >
      <span>
        <el-container class="box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="right"
            :model="sub_form"
          >
            <el-row :gutter="6" class="width-full mt-2">
              <el-col
                :xs="24"
                :sm="24"
                :md="12"
                :lg="8"
                class="d-flex px-2 mt-1"
              >
                <div style="wdith: 20px; background: #21798d">&nbsp;</div>
                <label class="mr-2">{{ $t("welcome-message") }}</label>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="16">
                <el-form-item>
                  <el-input v-model="sub_form.formNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full mt-2">
              <el-col :xs="24" :sm="24" :md="12" :lg="6" class="d-flex mt-1">
                <div style="wdith: 20px; background: #21798d">&nbsp;</div>
                <label class="mr-2">{{ $t("port") }}</label>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <el-input v-model="sub_form.formNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6" class="d-flex mt-1">
                <div style="wdith: 20px; background: #21798d">&nbsp;</div>
                <label class="mr-2">{{ $t("speed") }}</label>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <el-input v-model="sub_form.formNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="mt-4">
              <label style="color: #28b4b3">{{ $t("symmetry") }}</label>
            </el-row>
            <el-row class="width-full mt-2 mb-4">
              <el-col :xs="12" :md="4">
                <el-radio v-model="radio" label="1">{{
                  $t("without")
                }}</el-radio>
              </el-col>
              <el-col :xs="12" :md="4">
                <el-radio v-model="radio" label="2">{{ $t("odd") }}</el-radio>
              </el-col>
              <el-col :xs="12" :md="4">
                <el-radio v-model="radio" label="3">{{ $t("even") }}</el-radio>
              </el-col>
              <el-col :xs="12" :md="4">
                <el-radio v-model="radio" label="4">{{ $t("mark") }}</el-radio>
              </el-col>
              <el-col :xs="12" :md="4">
                <el-radio v-model="radio" label="5">{{ $t("space") }}</el-radio>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="additionalChoice = false"
          >{{ $t("agree") }}</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>



<script>
import Electronicscale from "~/components/dialogs/electronic-scale.vue";
export default {
  components: {
    Electronicscale,
  },
  name: "search",

  data: function () {
    return {
      additionalChoice: false,
      form: {},
      sub_form: {},
      radio: '1',
    };
  },
  methods: {
    OpenDialog(state) {
      this.$store.commit("electronicscale/updateDialogState", state);
    },
  },
};
</script>
