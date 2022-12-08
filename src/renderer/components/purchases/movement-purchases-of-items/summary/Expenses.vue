<template>
<div class="text-unbold">
  <el-row :gutter="6"> 
    <el-col :xs="6" :sm="6" :md="4">
      <span>
        {{ $t('total') }}
      </span>
    </el-col>  
    <el-col :xs="6" :sm="6" :md="6">
      <span class="input-style">
        404,210.2222
      </span>
    </el-col>  
  </el-row>
  </div>
</template>

<script>
export default {
  name: "expenses",

  data: function () {
    return {
      form: {
        total: 0,
        total_LE: 0,
        net: 0,
      },
    };
  },
};
</script>