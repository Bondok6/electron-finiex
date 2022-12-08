<template>
  <div
    class="container border-radius-20 box-shadow d-block ma-4 mb-0 px-2 py-3 invoice-table"
  >
    <span>
      <el-row :gutter="6">
        <el-form label-position="top">
          <el-col :xs="24" :sm="24" :md="24">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("name-of-communication-company") }}</span>
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
                    <span> {{ $t("the-sender-is-name") }} </span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span> {{ $t("user-name") }} </span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span> {{ $t("password") }} </span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name"></el-input>
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
  name: "Invoice",
  data: function() {
    return {
      form: {
        input: "",
        name: ""
      }
    };
  }
};
</script>
