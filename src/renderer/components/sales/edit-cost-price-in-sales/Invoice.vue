<template>
  <el-container class="container box-shadow  ma-4 mb-0 px-2 py-3 box-shadow">
    <el-form class="invoice-form" label-position="top" :model="form">
      <p class="inner-search">خيارات البحث</p>
      <el-row :gutter="6">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.item_number">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('item-name')">
                <el-select v-model="form.item_name">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('category')">
                <el-select v-model="form.category">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <p class="inner-search mt-4">خيارات الصيانة</p>
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('from-invoice-number')">
                <el-input v-model="form.from_invoice_number" />
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('to-invoice-number')">
                <el-input v-model="form.to_invoice_number" />
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('movement-type')">
                <el-select v-model="form.movement_type">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('maintenance-type')">
                <el-select v-model="form.maintenance_type">
                  <el-option :label="$t('update-item-cost-prices')" :value="1"></el-option>
                  <el-option :label="$t('update-item-cost-prices')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
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
        item_number: 1,
        item_name: 1,
        category: 1,
        from_invocie_number: "",
        to_invoice_number: "",
        movement_type: 1,
        maintenance_type: 1,
        from_date: 1,
        to_date: 1,
      },
    };
  },
};
</script>
