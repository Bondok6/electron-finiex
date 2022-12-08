<template>
  <div
    class="container border-radius-20 background-popup box-shadow mb-0 px-2 py-3 invoice-table"
  >
    <span>
      <el-row :gutter="6">
        <el-form label-position="top">
          <el-col :xs="24" :sm="24" :md="24">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("previous-file-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="width-full text-center"
                      :placeholder="$t('all')"
                      v-model="form.input"
                    >
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("branch-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="width-full text-center"
                      :placeholder="$t('main-branch')"
                      v-model="form.input"
                    >
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("rotation-type") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="width-full text-center"
                      :placeholder="$t('all')"
                      v-model="form.input"
                    >
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option
                        :label="$t('closing-entries')"
                        :value="2"
                      ></el-option>
                      <el-option
                        :label="$t('recycle-quantity-balances')"
                        :value="2"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-col>
        </el-form>
      </el-row>
    </span>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      form: {
        input: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.background-popup {
  background-color: #e6f8fc;
}
</style>
