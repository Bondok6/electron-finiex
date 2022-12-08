<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">

        <el-col :xs="24" :sm="8" :md="8" >
          <el-form-item :label="$t('item-number')">
            <el-select v-model="form.item_number">
              <el-option  :value="112"></el-option>
              <el-option  :value="111"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="8" >
          <el-form-item :label="$t('item-name')">
            <el-select v-model="form.item_name">
              <el-option :value="2"></el-option>
              <el-option :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>


        <el-col :xs="24" :sm="8" :md="8" >
          <el-form-item :label="$t('category')">
            <el-select v-model="form.category">
              <el-option  :label="$t('without')" :value="2"></el-option>
              <el-option  :label="$t('without')" :value="1"></el-option>
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
        category: 1,
        item_name: 1,
        item_number: 1,
      },
    };
  },
};
</script>