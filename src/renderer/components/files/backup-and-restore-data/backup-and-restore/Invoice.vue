<template>
  <div
    class="container border-radius-20 mb-0 px-2 py-3"
  >
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div class="mb-2" style="padding:20px;">
          <span>{{ $t("make-a-copy-of-the-existing-data") }}</span>
        </div>
        <el-form label-position="top">
          <table style="width: 100%">
            <tbody>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("data-copy-site") }}</span>
                </td>
                <td class="input-padding">
                  <el-input v-model="form.input"></el-input>
                </td>
                <td>
                  <el-button
                    class="btn-dark-blue"
                    icon="el-icon-search"
                  ></el-button>
                </td>
              </tr>
            </tbody>
          </table>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div class="mb-2" style="padding:20px;">
          <span>{{
            $t("restore-a-previous-copy-of-the-data-to-the-real-database")
          }}</span>
        </div>
        <el-form label-position="top">
          <table style="width: 100%">
            <tbody>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("data-copy-site") }}</span>
                </td>
                <td class="input-padding">
                  <el-input v-model="form.input"></el-input>
                </td>
                <td>
                  <el-button
                    class="btn-dark-blue"
                    icon="el-icon-search"
                  ></el-button>
                </td>
              </tr>
            </tbody>
          </table>
        </el-form>
      </el-col>
    </el-row>
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

<style></style>
