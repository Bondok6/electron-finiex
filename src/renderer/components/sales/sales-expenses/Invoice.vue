<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('invoice-number')">
            <el-input v-model="form.invoice_number" placeholder="14">
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('invoice-date')">
            <el-date-picker
              type="datetime"
              placeholder="2020-10-15"
              format="yyyy-MM-dd HH:mm"
              Value-format="yyyy-MM-dd HH:mm"
              v-model="form.from_date"
              >
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('invoice-type')">
            <el-select v-model="form.invoice_type">
              <el-option label="آجل" :value="1"></el-option>
              <el-option label="غير آجل" :value="2"></el-option>
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
      form: {
        invoice_number: '',
        invoice_date: '',
        invoice_type: 1,
      },
    };
  },
};
</script>