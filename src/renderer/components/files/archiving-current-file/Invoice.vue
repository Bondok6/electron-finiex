<template>
  <div class="container border-radius-20 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="16">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8" :lg="6">
              <el-form-item :label="$t('fiscal-year')">
                <el-input v-model="form.input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6">
              <el-form-item :label="$t('date-created')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6">
              <el-form-item :label="$t('beginning-of-the-fiscal-year')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6">
              <el-form-item :label="$t('end-of-fiscal-year')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div
            class="inline-button-container d-flex flex-direction-column mt-40"
          >
          <div class="vertical-buttons">
              <el-form-item>
                <el-button
                  class="float-left mt-point-5"
                  @click="form.archive = !form.archive"
                  :class="[form.archive ? 'btn-cyan-light' : 'btn-red']"
                >
                <span v-if="form.archive">
                  {{ $t("archive") }}
                </span>
                <span v-else>
                  {{ $t("unarchive") }}
                </span>
                </el-button>
              </el-form-item>
          </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "invoice",
  data: function() {
    return {
      form: {
        input: "2021",
        date: "",
        archive : 1
      }
    };
  }
};
</script>
