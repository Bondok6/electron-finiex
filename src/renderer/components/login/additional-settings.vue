<template>
  <div style="padding-top:3px;height : 100%;" class="parent-1">
  <el-form style="" class="invoice-form width-full direction" label-position="top" :model="form">
   <span class="spanText">{{$t('Password-prompt-when-you-stop-using-it-The-device-is-for-specified-period')}}</span>
    <el-form-item class="el-form-item1" style="color:white" :label="$t('Time-specified-in-minutes')">
      <el-input class="transparents" style="background:transparent" v-model="form.user_name" >
      </el-input>
    </el-form-item>
    
    <el-form-item class="el-form-item2">
      <el-button class="font btn-white-2 width-full" >
        {{ $t("save") }}
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
        user_name: "دقيقة 60",
        password: "",
      },
       radio: '1'
    };
  },
  
};
</script>
<style lang="scss"> 
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
.spanText{
color:white;
display:flex;
justify-content:center;
padding-bottom:4pc;
}
</style>