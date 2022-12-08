<template>
  <el-container class="ma-2 mb-0">
    <el-form
      class="invoice-form width-full d-flex justify-center invoice-inventory-first-term-label"
      label-position="top"
      :model="form"
    >
      <div class="d-flex flex-wrap width-full space-between">
        <span class="mb-4 d-flex align-baseline">
          <span class="input-label">{{ $t("item-number") }}</span>
          <el-input class="small-input"> </el-input>
        </span>

        <span class="mb-4 d-flex align-baseline" >
          <span class="input-label">{{ $t("item-name") }}</span>
          <el-input placeholder=" " v-model="input1"> </el-input>
        </span>

        <span class="mb-4 d-flex align-baseline">
          <span class="input-label">{{ $t("unit") }}</span>
          <el-select v-model="input2">
            <el-option :label="$t('all')" :value="1"></el-option>
            <el-option :label="$t('all')" :value="2"></el-option>
          </el-select>
        </span>

        <span class="mb-4 d-flex align-baseline">
          <span class="input-label">{{ $t("category") }}</span>
          <el-select v-model="input2">
            <el-option :label="$t('all')" :value="1"></el-option>
            <el-option :label="$t('all')" :value="2"></el-option>
          </el-select>
        </span>
      </div>
    </el-form>
  </el-container>
</template>
<script>
export default {
  name: "invoice",
  data: function () {
    return {
      input1: "",
      input2: 1,
      form: {},
    };
  },
};
</script>
