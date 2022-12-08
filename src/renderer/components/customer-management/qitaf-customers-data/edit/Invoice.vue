<template>
  <el-container class="d-block ma-4 mb-0 px-2 py-3">

    <el-row class="width-full" style="margin-top: 40px">
      <el-col :xs="24" :md="12">
        <el-form label-position="top" class="mt-4">
          <table style="width: 100%">
            <tbody>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("serial-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.code" disabled> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("client-name") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.name"> </el-input>
                </td>
              </tr>

              <tr>
                <td class="popup-label">
                  <span>{{ $t("mail") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.email"> </el-input>
                </td>
              </tr>

              <tr>
                <td class="popup-label">
                  <span>{{ $t("address") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.address"> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("type-customer") }}</span>
                </td>
                <td class="input-padding">
                  <el-select
                    :placeholder="$t('main-sub')"
                    v-model="form.status"
                    class="width-full"
                  >
                    <el-option :label="$t('main')" :value="2"></el-option>
                    <el-option :label="$t('sub')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("subscription-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.subscriptionNo"> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("mobile-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.phone"> </el-input>
                </td>
              </tr>
            </tbody>
          </table>
        </el-form>
      </el-col>
      <el-col :xs="24" :md="12" class="mt-4">
        <div class="d-flex justify-end" style="margin-top: 140px">
          <el-input
            class="notes-summary"
            type="textarea"
            :rows="7"
            :placeholder="$t('notes')"
            v-model="form.notes"
          >
          </el-input>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>

import {mapMutations, mapState} from "vuex";
export default {

  data: function () {
    return {

      form: {
        "code": "",
        "name": "",
        "email": "",
        "address": "",
        "status": "",
        "subscriptionNo": "",
        "phone": "",
        "notes": ""
      },

    };
  },
  computed:{
    ...mapState({
      singleRecordDetails : state => state.customerManagement.qitafCustomers.singleRecordDetails
    })
  },
  methods:{
      ...mapMutations({
        setRecordDetails: "customerManagement/qitafCustomers/setRecordDetails"
      })
  },
  watch: {
    singleRecordDetails(newVal) {
      this.form = { ...newVal };
    },
    form: {
      handler(newVal) {
        this.setRecordDetails({ ...newVal, id: this.$route.params.id });
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.input-rows {
  min-height: 42px;
}
</style>

