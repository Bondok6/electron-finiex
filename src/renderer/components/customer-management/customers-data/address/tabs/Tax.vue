<template>
  <div>
    <el-checkbox class="checked text-black" v-model="checked">{{
      $t("taxable")
    }}</el-checkbox>
    <el-row :gutter="10" style="margin-right: 3pc">
      <el-col :lg="3" :md="5" :sm="9" :xs="10">
        <td class="popup-label-mobiel">
          <span>{{ $t("tax-number") }}</span>
        </td>
      </el-col>
      <el-col :lg="1" :md="5" :sm="1" :xs="10">
        <td>
          <el-button>
            <span> 2132323 </span>
          </el-button>
        </td>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>
