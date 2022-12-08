<template>
  <div class="text-center d-flex justify-center flex-wrap align-center mt-4">
    <span>
      {{$t('next')}}
    </span>
    <el-pagination
      :background="true"
      :current-page.sync="page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="prev, pager, next"
      :total="45"
    >
    </el-pagination>
    <span>
      {{$t('previous')}}
    </span>
    <!-- <span>
      <span>
      {{$t('navigate-to')}}
      </span>
      <el-input v-model="page" type="number" class="pa-0 pagination-navigate-to"> </el-input>
    </span> -->

  </div>
</template>

<script>
export default {
  name: "erp-pagination",
  data: function () {
    return {
      page: 3,
    };
  },
};
</script>