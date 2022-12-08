<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.from_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('asset-name')">
            <el-select v-model="main_form.warehouse_name">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.to_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-button
              class="text-center btn-cyan-light px-4-lg width-full-sm"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog
      title=" "
      :visible.sync="additionalChoice"
      width="70%"
      class="align-center"
    >
      <span>
        <el-container class="box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="sub_form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <el-form-item>
                    <label>{{ $t("from-number") }}</label>
                    <el-input v-model="sub_form.from_no"></el-input>
                  </el-form-item>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("status-asset") }}</label>
                  <el-select v-model="sub_form.status_asset">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("cost-center") }}</label>
                  <el-select v-model="sub_form.cost_center">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-input v-model="sub_form.to_no"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("original-group") }}</label>
                  <el-select v-model="sub_form.original_group">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="additionalChoice = false"
          >{{ $t("agree") }}</el-button
        >
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data: function () {
    return {
      main_form: {
        from_date: "",
        to_date: "",
        warehouse_name: "",
      },
      sub_form: {
        from_no: "",
        to_no: "",
        status_asset: "",
        cost_center: "",
        original_group: "",
      },
      additionalChoice: false,
    };
  },
};
</script>
