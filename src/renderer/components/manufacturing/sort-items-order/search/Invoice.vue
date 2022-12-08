a<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="6" :lg="5">
          <el-form-item :label="$t('from-production-order-number')">
            <el-select v-model="main_form.from_number">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="6" :lg="5">
          <el-form-item :label="$t('from-production-order-date')">
            <el-select v-model="main_form.from_date">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="6" :lg="5">
          <el-form-item :label="$t('cost-center')">
            <el-select v-model="main_form.cost">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="6" :lg="5">
          <el-form-item :label="$t('to-production-order-number')">
            <el-select v-model="main_form.to_number">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="5">
          <el-form-item :label="$t('to-production-order-date')">
            <el-select v-model="main_form.to_date">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="6" :lg="5">
          <el-form-item :label="$t('supplier-name')">
            <el-select v-model="main_form.supplier_name">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      main_form: {
        cost: 1,
        supplier: "احمد ابراهيم",
        from_date: 3,
        to_date: 3,
        from_number: 14,
        to_number: 9,
      },
    };
  },
};
</script>