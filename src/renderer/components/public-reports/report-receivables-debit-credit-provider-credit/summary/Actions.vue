<template>
  <div class="d-flex space-between mt-2 mx-3">
    <div class=" right_buttons text-unbold  ">
      <div>
        <span>
        {{$t('number-of-suppliers')}}
      </span>
      <span class="input-style " >
        404,885.65
      </span>
      </div>
        
      <div>
        <span>
        {{$t('total')}}
      </span>
      <span class="input-style input">
        404,885.65
      </span>
      </div>
        
      
       
    </div>

    <div >
      <el-button size="mini" class="mb-1" type="primary px-3"> {{ $t('display') }}</el-button>

      <el-button size="mini" class="mb-1" type="danger px-2">
        {{ $t('graph') }} <i class="el-icon-s-marketing el-icon-right"></i
      ></el-button>
      <el-button size="mini" class="mb-1" type="warning">{{ $t('print-pdf') }}</el-button>
      <el-button size="mini" class="mb-1 btn-orange">{{ $t('print-f4') }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right_buttons {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  width: 65%;
  
  @media (max-width: 1050px) {
      grid-template-columns: repeat(1,1fr);
      justify-content: center;
  }

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

}
 

</style>
