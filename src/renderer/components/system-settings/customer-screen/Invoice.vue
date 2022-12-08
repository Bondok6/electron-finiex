<template>
  <div
    class="container border-radius-20 box-shadow d-block ma-4 mb-0 px-2 py-3 invoice-table"
  >
    <span>
      <!-- <el-form label-position="top">
        <el-row :gutter="6">
          <el-col :xs="24" :sm="24" :md="24">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="text-center">
                    <span class="border-td">{{ $t("welcome-message") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.input"></el-input>
                  </td>
                </tr>
                <tr>
                    <td class="text-center">
                    <span class="border-td">{{ $t("port") }}</span>
                  </td>
                  <td class="input-padding">

                  </td>
                </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
      </el-form> -->
      <el-form
            class="invoice-form width-full"
            label-position="right"
            :model="form"
          >
            <el-row :gutter="6" class="width-full mt-2">
              <el-col
                :xs="24"
                :sm="24"
                :md="12"
                :lg="8"
                class="d-flex px-2 mt-1"
              >
                <div style="background: #21798d">&nbsp;</div>
                <label class="mr-2">{{ $t("welcome-message") }}</label>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="16">
                <el-form-item>
                  <el-input v-model="form.input"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full mt-2">
              <el-col :xs="24" :sm="24" :md="12" :lg="6" class="d-flex mt-1">
                <div style="background: #21798d">&nbsp;</div>
                <label class="mr-2">{{ $t("prot") }}</label>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <el-input v-model="form.input"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6" class="d-flex mt-1">
                <div style="background: #21798d">&nbsp;</div>
                <label class="mr-2">{{ $t("speed") }}</label>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <el-input v-model="form.input"></el-input>
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
      },
      radio : '1'
    };
  }
};
</script>
<style lang="scss" scoped>
.border-td {
  [dir="rtl"] & {
    border-right: 5px solid #21798d;
  }
  [dir="ltr"] & {
    border-left: 5px solid #21798d;
  }
  padding: 10px;
}
</style>
