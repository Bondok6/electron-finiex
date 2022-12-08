<template>
  <div style="padding-top:3pc;" class="parent-1">
  <el-form style="" class="invoice-form width-full direction" label-position="top" :model="form">
    <el-form-item class="el-form-item1" style="color:white" :label="$t('server-name')">
      <el-select class="transparents selector" style="background:transparent;display:flex;" v-model="form.input" >
        <el-option :label="$t('main-branch')" :value="1"></el-option>
        <el-option :label="$t('main-branch')" :value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="el-form-item1" style="color:white" :label="$t('user-name')">
      <el-input class="transparents" style="background:transparent" v-model="form.user_name" >
      </el-input>
    </el-form-item>
    <el-form-item class="el-form-item1" style="color:white" :label="$t('password')">
      <el-input class="transparents" style="background:transparent" type="password" v-model="form.password"> </el-input>
    </el-form-item>
     <el-form-item class="el-form-item1" style="color:white" >
      <div class="d-flex flex-direction-column">
       <el-radio class="radio1" v-model="radio" :label="$t('local-database')"></el-radio>
       <el-radio class="radio2" v-model="radio" :label="$t('Network/server-database')"></el-radio>
    </div>
    </el-form-item>
    <el-form-item class="el-form-item2">
      <el-button class="font btn-white-2 width-full" >
        {{ $t("save-settings") }}
      </el-button>
    </el-form-item> 
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input:"DESKTOP-C8Q5UMC",
        user_name: "Administrator",
        password: "",
      },
       radio: '1'
    };
  },
  
};
</script>
<style>
.font{
font-family:'Tajawal';
}

.parent-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  @media (max-width: 440px) {
    border: 0;
  }
}
.direction{
    direction:rtl;
}
.el-form-item1 .el-form-item__label{
  color: white;
}
.transparents .el-input__inner{
  background: transparent;
}
.transparents .el-input__inner{
  color:white;
}

.el-form-item2 .el-form-item__content{
  padding-top:2pc;
}
.selector .el-input .el-input__suffix{
right:auto;
left:5px;
}

</style>