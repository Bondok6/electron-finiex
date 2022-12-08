<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full" >
              <el-col :xs="24" :sm="8" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("item-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("category") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="8" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("sub-category") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
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
  data: function() {
    return {
      additionalChoice: false,
      form: {
        item_name: 1,
        item_number: 1,
        category: 1,
        subcategory: "",
        order: "",
        invoice_type: 1,
        warehouse: "",
        item_type: 1,
        branch: 1,
        company_name: 1,
        item_price: 1,
        unit: 1,
        quantity: 1,
        document_type: 1,
        item_status: 1,
        form: 1,
        balance: 1,
        show_item_price: 1,
        show_accounts_balance: 1
      }
    };
  }
};
</script>
