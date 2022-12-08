<template>
  <div
    class="container border-radius-20 d-block ma-4 mb-0 px-2 py-3 invoice-table"
  >
    <span>
      <el-row :gutter="6">
        <el-form label-position="top">
          <el-col :xs="24" :sm="24" :md="18">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td>
                    <div class="horizontal-line-white">
                      <span>{{ $t("sync-settings") }}</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("main-server-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.input"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("file-database-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="navy-color" v-model="form.input">
                      <template slot="append">
                        <span class="mb-1" style="font-weight: bold"
                          ><i class="el-icon-plus"></i>
                        </span>
                      </template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span> {{ $t("user-name") }} </span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.input"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span> {{ $t("user-password") }} </span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.input"></el-input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="horizontal-line-white mt-4">
                      <span>{{ $t("synchronization-time") }}</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      class="padding-label"
                      style="white-space: normal;"
                    >
                      {{ $t("manual-synchronization") }}</el-checkbox
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
                      {{ $t("synchronization-after") }}</el-checkbox
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
                      {{
                        $t("synchronize-when-you-exit-the-program")
                      }}</el-checkbox
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
                      {{ $t("out-of-sync") }}</el-checkbox
                    >
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </el-col>
        </el-form>
      </el-row>
      <el-row :gutter="6">
        <el-col :xs="24" :sm="24" :md="24">
          <div class="text-oppesite  py-2 mt-0">
            <div class="mt-2 action-buttons-nonGrown">
              <el-button class="mb-1 px-4-lg btn-cyan-light">{{
                $t("save-settings")
              }}</el-button>
              <el-button class="mb-1 px-4-lg btn-yellow">{{
                $t("synchronization-procedure")
              }}</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </span>
  </div>
</template>
<script>
export default {
  name: "Invoice",
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
.bl-green .el-input-group__append {
  background-color: #21798d;
  // padding:10px;
  color: #fff;
}
.text-oppesite {
  [dir="rtl"] & {
    text-align: left;
  }
  [dir="ltr"] & {
    text-align: right;
  }
}
</style>
