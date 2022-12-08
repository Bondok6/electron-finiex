<template>
  <el-container class="container  box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-40">
          <div class="inline-button-container d-flex">
            <el-button class="w-250 placeHolderColor color-blue">
              {{$t("attach-a-file")}}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        input: 3
      },
      additionalChoice: false
    };
  }
};
</script>
