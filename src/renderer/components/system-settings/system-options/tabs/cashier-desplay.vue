<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-row class="width-full mt-4">
      <el-form v-model="main_form">
        <el-col :xs="24" :md="12">
          <el-col :span="24" class="d-flex justify-center">
            <div class="popup-label2" style="width: 70%">
              <span>{{ $t("dispaly-background-image") }}</span>
            </div>
          </el-col>
          <el-col :span="24" class="mt-2">
            <el-button style="width: 200px; height: 200px"
              ><i
                class="el-icon-plus mx-1"
                style="font-size: 40px; font-weight: 800"
              ></i
            ></el-button>
          </el-col>
          <el-col :span="24" class="d-flex justify-center mt-2">
            <el-button class="btn-dark-blue ml-2">{{
              $t("download-image")
            }}</el-button>
            <el-button class="btn-dark-blue">{{
              $t("delete-image")
            }}</el-button>
          </el-col>
        </el-col>
        <el-col :xs="24" :md="12" class="mt-4">
          <el-col :span="24" class="d-flex justify-center">
            <div class="popup-label2" style="width: 70%">
              <span>{{ $t("display-size") }}</span>
            </div>
          </el-col>
          <el-col :span="24">
            <el-row class="width-full d-flex justify-center mt-2">
              <el-col :span="8">
                <h3>{{ $t("height") }}</h3>
              </el-col>
              <el-col :span="8">
                <el-input type="text" class="mt-2"></el-input>
              </el-col>
              <el-col :span="8">
                <h3>{{ $t("pixel") }}</h3>
              </el-col>
            </el-row>
            <el-row class="width-full d-flex justify-center mt-2">
              <el-col :span="8">
                <h3>{{ $t("width") }}</h3>
              </el-col>
              <el-col :span="8">
                <el-input type="text" class="mt-2"></el-input>
              </el-col>
              <el-col :span="8">
                <h3>{{ $t("pixel") }}</h3>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="d-flex justify-center">
            <div class="popup-label2" style="width: 70%">
              <span>{{ $t("display-size") }}</span>
            </div>
          </el-col>
          <el-col :span="24">
            <el-row class="width-full d-flex justify-center mt-2">
              <el-col :span="8">
                <h3>{{ $t("period") }}</h3>
              </el-col>
              <el-col :span="8">
                <el-input type="text" class="mt-2"></el-input>
              </el-col>
              <el-col :span="8">
                <h3>{{ $t("second") }}</h3>
              </el-col>
            </el-row>
            <el-row class="width-full d-flex justify-center mt-2">
              <el-col :xs="24" :lg="16">
                <span>{{
                  $t("type-of-the-sales-invoice-when-entering-program")
                }}</span>
              </el-col>
              <el-col :xs="24" :lg="8">
                <el-select
                  :placeholder="$t('all')"
                  v-model="main_form.item_number"
                  class="mb-2"
                >
                  <el-option
                    :label="$t('without-invoice')"
                    :value="1"
                  ></el-option>
                  <el-option
                    :label="$t('cashier-sales-invoice')"
                    :value="2"
                  ></el-option>
                  <el-option
                    :label="$t('pos-sales-invoice')"
                    :value="3"
                  ></el-option>
                  <el-option
                    :label="$t('customer-screen-sales-invoice')"
                    :value="4"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-form>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "search",
  data: function () {
    return {
      main_form: {},
    };
  },
};
</script>