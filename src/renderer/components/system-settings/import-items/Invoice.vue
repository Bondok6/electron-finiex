
<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full mb-4">
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('warehouse')">
            <el-select v-model="main_form.item_name" :label="$t('all')">
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('category-name')">
            <el-select v-model="main_form.item_name" :label="$t('all')">
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('item-unit')">
            <el-select v-model="main_form.item_name" :label="$t('all')">
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
import EntrySearch from "~/components/static/entrySearch";
export default {
  name: "search",
  components: {
    EntrySearch,
  },
  data: function () {
    return {
      main_form: {},
    };
  },
};
</script>
