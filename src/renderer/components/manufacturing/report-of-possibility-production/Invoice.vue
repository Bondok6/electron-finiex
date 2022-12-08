<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="10" :md="6" :lg="4">
          <el-form-item :label="$t('item-number')">
            <el-input v-model="main_form.item_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="10" :md="6" :lg="4">
          <el-form-item :label="$t('item-name')">
            <el-select v-model="main_form.item_name" :label="$t('all')">
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :span="24" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
          </div>
        </el-col>
        <el-col :span="24" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-button
              class="text-center w-250 btn-cyan-light"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
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
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("item-type") }}</label>
                        <el-select
                          v-model="sub_form.item_type"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("category") }}</label>
                        <el-select
                          v-model="sub_form.category"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("branch-name") }}</label>
                        <el-select
                          v-model="sub_form.branch_name"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="6" class="width-full">
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("item-status") }}</label>
                        <el-select
                          v-model="sub_form.item_status"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("sub-category") }}</label>
                        <el-select
                          v-model="sub_form.sub_category"
                          :label="$t('all')"
                        >
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
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function () {
    return {
      main_form: {
        item_name: "",
        item_number: "",
      },
      sub_form: {
        sub_category: "",
        category: "",
        item_type: "",
        item_status: "",
        branch_name: "",
      },
      additionalChoice: false,
    };
  },
};
</script>
