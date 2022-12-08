<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-row class="width-full mt-4">
      <el-col :span="24" class="mt-3 d-flex">
        <el-checkbox
          class="additional-data-checkbox"
          v-model="form.value_add_tax"
        />
        <span class="title mr-3">{{
          $t("automatic-numbering-of-item-card-in-items-card")
        }}</span>
      </el-col>
      <el-col :span="24" class="mt-3 d-flex">
        <el-checkbox
          class="additional-data-checkbox"
          v-model="form.value_add_tax"
        />
        <span class="title mr-3">{{
          $t("system-does-not-include-value-added-tax")
        }}</span>
      </el-col>
      <el-row :gutter="10" class="width-full">
        <el-col :xs="24" :md="8" class="popup-label2 mt-2">
          <span>{{
            $t("closing-time-for-daily-orders-at-points-of-sale")
          }}</span>
        </el-col>
        <el-col :xs="10" :md="4" class="mt-3">
          <el-select v-model="form.item_number" class="width-full">
            <el-option :label="$t('11')" :value="2"></el-option>
            <el-option :label="$t('9')" :value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :xs="10" :md="4" class="popup-label2 mt-2">
          <span>{{ $t("hour") }}</span>
        </el-col>
      </el-row>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "search",

  data: function () {
    return {
      form: {},
    };
  },
};
</script>
