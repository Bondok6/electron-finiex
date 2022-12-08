<template>
  <div
    class="container border-radius-20 box-shadow d-block ma-4 mb-0 px-2 py-3 invoice-table"
  >
    <span>
      <el-row :gutter="6">
        <el-form label-position="top">
          <el-row class="justify-center text-center width-full px-2">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <div class="horizontal-line-white">
                <span>{{ $t("send-options") }}</span>
              </div>
            </el-col>
          </el-row>
          <el-col :xs="24" :sm="24" :md="9">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td>
                    <el-checkbox
                      class="padding-label"
                      style="white-space: normal;"
                    >
                      {{ $t("send-to-a-specific-mobile") }}</el-checkbox
                    >
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      class="padding-label"
                      style="white-space: normal;"
                    >
                      {{ $t("send-to-clients") }}</el-checkbox
                    >
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      class="padding-label"
                      style="white-space: normal;"
                    >
                      {{ $t("send-to-suppliers") }}</el-checkbox
                    >
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      class="padding-label"
                      style="white-space: normal;"
                    >
                      {{ $t("send-to-qitaf-customers") }}</el-checkbox
                    >
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </el-col>
          <el-col :xs="24" :sm="24" :md="9">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobile-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.input"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("client-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select v-model="form.input" class="width-full">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("supplier-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select v-model="form.input" class="width-full">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("client-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select v-model="form.input" class="width-full">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
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
  name: "invoice",
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
.horizontal-line-white {
  border-bottom: 1px solid #21798d;
  line-height: 0.1em;
  text-align: center;
  margin: 10px 0 20px;
}
.horizontal-line-white span {
  background: #fff;
  padding: 0 10px;
  color: #707070;
}
</style>
