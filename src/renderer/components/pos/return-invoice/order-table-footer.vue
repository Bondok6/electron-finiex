<template>
  <div class="width-full d-flex flex-wrap mt-2 button-mod footer">
    <el-col :md="3">
      <el-button class="width-full btn-red">
        {{$t("print")}}
      </el-button>
    </el-col>

    <el-col :md="3">
      <el-button  class="width-full btn-green"
                  @click="$emit('openPayment')">
        {{$t("save")}}
      </el-button>
    </el-col>

    <el-col :md="18">
      <div class="footer-info">
        <div class="date-container">11/05/2021</div>
      <div class="d-flex justify-center width-full align-items-center">
        <div class="value-currency px-1">
          SAR
        </div>
        <div class="value-currency px-1">
          500.00
        </div>
      </div>
      </div>
    </el-col>
  </div>
</template>

<style lang="scss" scoped>
.button-mod {  
  .el-button {
    height: 100%;
    border: none;
    margin: 0 !important;
    border-radius: 0 !important;
  }
}

.footer-info {
  background-color: #f39c12;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.footer {
  height: 3rem;

  .value-currency {
    font-size: 15px; 
    font-weight: bolder; 
    color: #fff;
  }
}

.date-container {
  background-color: #fff;
  border-radius: 10px;
  padding: 3px;
  margin-left: auto;
  margin-right: 1rem;
  font-size: 12px;
  width: 5rem;
  text-align: center;
}
</style>