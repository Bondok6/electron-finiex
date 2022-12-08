<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('from-number')">
            <el-input v-model="form.number_from" placeholder="14"> </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('to-number')">
            <el-input v-model="form.to" placeholder="14"> </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="4" :lg="8" :xl="8" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-form-item>
              <el-button class="btn-cyan-light width-full" @click="dialogOne = true">
                {{ $t("zeroing-out-the-unedited-items")
                }}<i class="el-icon-refresh-right mr-2"></i
              ></el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog title=" " :visible.sync="dialogOne" width="50%">
      <span>
        <el-container class="d-block mb-0">
          <br />
          <div class="text-center">
                <h1 style="color:#64688E;">
                  {{ $t("you-about-zero-non-existent-items-are-you-sure?") }}
                </h1>
              </div>
              <div class="text-center ma-4 py-2 mt-0">
            <div class="mt-2 action-buttons-nonGrown justify-center  align-center align-baseline">
              <el-button class="mb-1 px-4-lg btn-navy" @click="dialogOne = false">{{
                $t("agree")
              }}</el-button>
              <el-button class="mb-1 btn-white px-4-lg mr-2" @click="dialogOne = false">{{
                $t("cancel")
              }}</el-button>
            </div>
          </div>
        </el-container>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        number_to: 1,
        number_from: 1
      },
      dialogOne: false
    };
  }
};
</script>
