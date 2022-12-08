<template>
 <el-container class="container  box-shadow ma-4 mb-0 px-2 py-3">

    <el-form class="invoice-form width-full" label-position="top" :model="form">

      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3" >
              <el-form-item :label="$t('from-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3" >
              <el-form-item :label="$t('account-name')">
            <el-select v-model="form.warehouse_name">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
            </el-col>


          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3" >
              <el-form-item :label="$t('to-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="18" :md="19" :lg="21" :xl="21" class="mt-40">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-select
                  v-model="form.type"
                  class="color-blue text-center placeHolderColor  w-150 width-full"
                  :placeholder="$t('invoice-return-type')"

                >
                  <el-option :label="$t('invoice-return-type')" :value="1"></el-option>
                  <el-option :label="$t('invoice-return-type')" :value="2"></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function() {
    return {
      form: {
        input: 3
      }
    };
  }
};
</script>
