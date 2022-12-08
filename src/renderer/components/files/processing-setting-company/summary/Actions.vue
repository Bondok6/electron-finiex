<template>
  <div class="mt-2 action-buttons-nonGrown">
    <el-button size="mini" class="mb-1 px-3 btn-primary">{{
      $t("save-f5")
    }}</el-button>
    <el-button size="mini" class="mb-1 px-3 btn-red">{{
      $t("delete-notice")
    }}</el-button>
    <el-button
      size="mini"
      class="mb-1 px-3 btn-purple"
      @click="additionalInformation = true"
      >{{ $t("additional-information") }}</el-button
    >

    <el-dialog :visible.sync="additionalInformation" width="40%">
      <span>
        <div class="">
          <el-row :gutter="6">
          <el-form class="" label-position="top">
            <el-col :xs="24" :sm="24" :md="24">
            <el-form-item
              :label="$t('please-write-additional-information')"
              class="form-item-with-right-label"
            >
              <el-input
                class="notes-input"
                type="textarea"
                v-model="form.input"
                :placeholder="$t('write-text-here')"
                :rows="7"
              >
              </el-input>
            </el-form-item>
            </el-col>
          </el-form>
          </el-row>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="additionalInformation = false"
          >{{ $t("ok") }}</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      additionalInformation: false,
      form : {
        input : ""
      }

    };
  }
};
</script>
