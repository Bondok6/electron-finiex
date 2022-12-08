<template>
<div class="text-unbold d-flex flex-wrap">
    <el-row style="width:100%" :gutter="30">
   <el-col :xs="8" :sm="5" :md="6" :lg="5">
      <span>
       {{$t('amount-in-letters')}}
      </span>
    </el-col>  
    <el-col :xs="14" :sm="6" :md="8" :lg="9">
     <el-input placeholder="" v-model="input"></el-input>
    </el-col>

    <el-col :xs="8" :sm="5" :md="3" :lg="2">
      <span>
       {{$t('total')}}
      </span>
    </el-col>   
   <el-col :xs="14" :sm="7" :md="7" :lg="8">
     <el-input placeholder="" v-model="input1"></el-input>
    </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: "expenses",

  data: function() {
    return {
      form: {
        total: 0,
        total_LE: 0,
        net: 0
      },
      input:"",
      input1:""
    };
  }
};
</script>
