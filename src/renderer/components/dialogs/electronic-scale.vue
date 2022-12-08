<template>
  <el-dialog title=" " :visible.sync="showDialog" width="40%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-row class="wdith-full justify-canter">
          <el-col :span="24" class="d-flex justify-center mt-2">
            <div class="popup-label2" style="width: 90%">
              <span>{{ $t("dispaly-background-image") }}</span>
            </div>
          </el-col>
          <el-col :span="24" class="mt-2 d-flex justify-center">
            <el-select
              v-model="form.item_number"
              style="width: 80%"
              class="mt-2"
            >
              <el-option :label="$t('11')" :value="2"></el-option>
              <el-option :label="$t('9')" :value="1"></el-option>
            </el-select>
          </el-col>
          <el-col :span="24" class="d-flex justify-center mt-2">
            <div class="popup-label2" style="width: 90%">
              <span>{{ $t("dispaly-background-image") }}</span>
            </div>
          </el-col>
          <el-col :span="24" class="d-flex justify-center mt-3">
            <span style="color: #28b4b3">- {{ $t("supplier-address") }} -</span>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :md="10" class="popup-label2 mt-2">
            <span>{{ $t("barcode-indicator") }}</span>
          </el-col>
          <el-col :xs="24" :md="10" class="mt-3">
            <el-input v-model="form.account_number"> </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :md="10" class="popup-label2 mt-2">
            <span>{{ $t("barcode") }}</span>
          </el-col>
          <el-col :xs="24" :md="10" class="mt-3">
            <el-input v-model="form.account_number"> </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :md="10" class="popup-label2 mt-2">
            <span>{{ $t("weight") }}</span>
          </el-col>
          <el-col :xs="24" :md="10" class="mt-3">
            <el-input v-model="form.account_number"> </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :md="10" class="popup-label2 mt-2">
            <span>{{ $t("check-numbers") }}</span>
          </el-col>
          <el-col :xs="24" :md="10" class="mt-3">
            <el-input v-model="form.account_number"> </el-input>
          </el-col>
        </el-row>
        <el-row class="width-full">
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.printing"
            />
            <span class="title mr-3">{{
              $t("printing-the-facility-data-in-report")
            }}</span>
          </el-col>
        </el-row>
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer">
      <div
        class="
          justify-center
          mt-2
          action-buttons-nonGrown
          align-center align-baseline
        "
      >
        <el-button @click="closeDialog()" class="btn-cyan-light px-4-lg">{{
          $t("agree")
        }}</el-button>
      </div>
    </span>
  </el-dialog>
</template>




<script>
export default {
  name: "clienttype",

  data() {
    return {
      form: {
        category_number: "",
        classification_name: "",
        category_type: "",
      },
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("electronicscale/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("electronicscale/updateDialogState", state);
      },

      get() {
        return this.$store.state.electronicscale.showDialog;
      },
    },
  },
};
</script>
