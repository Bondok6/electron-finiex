<template>
  <div style="padding-top:3pc;" class="parent-1">
  <el-form  class="invoice-form width-full direction" label-position="top" :model="form">
    <el-form-item class="el-form-item1" style="color:white" >
      <el-select class="transparents selector" style="background:transparent;display:flex;" v-model="form.input" >
        <el-option :label="$t('open-previous-file')" :value="1"></el-option>
        <el-option :label="$t('open-new-file')" :value="2"></el-option>
      </el-select>
    </el-form-item>
    <span class="newFolder" >
    <div class="borderRight"></div>
    {{$t('open-new-file')}}
    <div class="borderLeft"></div>
    </span>
    <el-form-item class="el-form-item3" style="color:white" :label="$t('open-new-file')">
      <el-input class="transparents" style="background:transparent" type="password" v-model="form.password"> </el-input>
    </el-form-item>
    <el-form-item class="el-form-item2">
      <el-button class="font btn-white-2 width-full" >
        {{ $t("Save-and-open-the-file") }}
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
        input:"فتح ملف سابق",
        user_name: "Administrator",
        password: "",
      },
      
    };
  },
  
};
</script>
<style>
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
.font{
font-family:'Tajawal';
}
.el-form-item1 .el-form-item__label{
  color: white;
  font-family:'Tajawal';
}
.el-form-item3 .el-form-item__label{
  color: white;
  font-size:17px;
}

.transparents .el-input__inner{
  background: transparent;
  font-family:'Tajawal';
}
.transparents .el-input__inner{
  color:white;
  font-family:'Tajawal';
}

.el-form-item2 .el-form-item__content{
  padding-top:3pc;
}
.selector .el-input .el-input__suffix{
right:auto;
left:5px;
}
.newFolder{
display:flex;
justify-content: center;
padding:1pc;
padding-top:3pc;
font-size:16px;
color:white
}
.borderLeft {
  border-bottom: 2px solid white;
  position: absolute;
  left: 10%;
  right: 60%;
  margin-right:1.5pc;
  margin-top:0.6pc;
}
.borderRight {
  border-bottom: 2px solid white;
  position: absolute;
  left: 35%;
  right: 16%;
  margin-left:10pc;
  margin-top:0.6pc;
}

</style>