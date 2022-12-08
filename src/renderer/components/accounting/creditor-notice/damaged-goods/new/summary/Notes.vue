<template>
  <el-row class="mt-2 mx-3">
    <el-col :sm="24" :md="12" :lg="16">
      <div
        class="
          text-unbold
          d-flex
          flex-wrap
          align-baseline
          action-buttons-right
          mb-2
        "
      >
        <span>
          <span class="mb-1 d-inline-block">
            {{ $t("amount-in-letters") }}
          </span>
          <span class="input-style mr-4 d-inline-block"> اثنين مليون و ثلاثمئة الف ريال </span>
        </span>

        <span class="mt-2"> 
          <span class="mb-1  d-inline-block">
            {{ $t("total") }}
          </span>
          <span class="input-style mr-4"> 2.300.000 </span>
        </span>
        
      </div>
    </el-col>

    <el-col :sm="24" :md="12" :lg="8">
      <div>
        <el-input
          class="notes-summary text-center"
          type="textarea"
          :rows="7"
          :placeholder="$t('details')"
        >
        </el-input>
      </div>
    </el-col>
  </el-row>
</template>