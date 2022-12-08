<template>
  <el-container class="d-block ma-4 mb-0 px-2 py-3">

    <el-row :gutter="6" class="width-full">
      <el-col :span="24" class="mt-2">
        <div class="inline-button-container d-flex">
          <div class="spacer"></div>
          <el-button
            class="btn-teal mr-4 border-radius w-250"
            @click="additionalChoice = true"
          >
            {{ $t("print-client-card") }}
          </el-button>
        </div>
      </el-col>
    </el-row>
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
        <div class="d-flex justify-end">
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
<!--    <el-dialog title=" " :visible.sync="searchBy" width="40%">-->
<!--      <span>-->
<!--        <el-container class="d-block box-shadow mb-0 px-2 py-2 background-form">-->
<!--          <el-form-->
<!--            class="invoice-form width-full"-->
<!--            label-position="top"-->
<!--            :model="sub_form"-->
<!--          >-->
<!--            <el-row :gutter="6" class="width-full">-->
<!--              <el-col-->
<!--                :xs="3"-->
<!--                :sm="3"-->
<!--                :md="6"-->
<!--                :lg="7"-->
<!--                style="border-top: 1px solid back; margin-top: 25px"-->
<!--              >-->
<!--                <hr-->
<!--              /></el-col>-->
<!--              <el-col :xs="16" :sm="18" :md="12" :lg="10">-->
<!--                <h1 style="text-align: center">-->
<!--                  {{ $t("search-by") }}-->
<!--                </h1>-->
<!--              </el-col>-->
<!--              <el-col-->
<!--                :xs="3"-->
<!--                :sm="3"-->
<!--                :md="6"-->
<!--                :lg="7"-->
<!--                style="border-top: 1px solid back; margin-top: 25px"-->
<!--                ><hr />-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--            <div-->
<!--              class="container box-shadow mb-0 px-2 py-2"-->
<!--              style="width: 80%; margin: auto"-->
<!--            >-->
<!--              <el-row :gutter="6" class="width-full input-rows">-->
<!--                <el-col :span="4">-->
<!--                  <el-checkbox v-model="checked" />-->
<!--                </el-col>-->
<!--                <el-col :span="8">-->
<!--                  <span class="title">{{ $t("subscription-number") }}</span>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                  <el-form-item>-->
<!--                    <el-input v-model="sub_form.delegate_name" v-if="checked">-->
<!--                    </el-input>-->
<!--                  </el-form-item>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--              <el-row :gutter="6" class="width-full input-rows">-->
<!--                <el-col :span="4">-->
<!--                  <el-checkbox v-model="checked2" class="ml-1" />-->
<!--                </el-col>-->
<!--                <el-col :span="8">-->
<!--                  <span>{{ $t("mobile-number") }}</span>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                  <el-form-item>-->
<!--                    <el-input-->
<!--                      v-model="sub_form.delegate_invoice_date"-->
<!--                      v-if="checked2"-->
<!--                    >-->
<!--                    </el-input>-->
<!--                  </el-form-item>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--          </el-form>-->
<!--        </el-container>-->
<!--      </span>-->
<!--    </el-dialog>-->
  </el-container>
</template>

<script>
import {mapMutations} from "vuex";
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
  created () {
    this.$store.dispatch("customerManagement/qitafCustomers/fetchMaxCode").then(res => {
      this.form.code = res.data.data;
    }).catch(err => {
      this.$message.error(err.response.data.message);
    });
  },
  methods:{
    ...mapMutations({
      setRecordDetails : "customerManagement/qitafCustomers/setRecordDetails"
    })
  },
  watch:{
    form: {
      handler: function (val) {
        let DeepClone = structuredClone(val);
        this.setRecordDetails(DeepClone);
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

