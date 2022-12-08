<template>
    <div
      class="justify-center mt-2 action-buttons-nonGrown ml-6 align-center align-baseline"
    >
    <el-button size="mini" class="mb-1 btn-blue">{{
        $t("save-f5")
      }}</el-button>
      <NuxtLink :to="localePath('/customer-management/notice-creditor')">
        <el-button size="mini" class="mb-1 btn-violet-faded mx-1">{{
          $t("search-f7")
        }}</el-button>
      </NuxtLink>
      <el-button size="mini" class="mb-1 btn-red">{{
        $t("delete-f8")
      }}</el-button>
      <NuxtLink :to="localePath('/customer-management/notice-creditor')">
        <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}</el-button>
      </NuxtLink>
      <el-button size="mini" class="mb-1 btn-cyan">{{
        $t("attach-a-file")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-grey">{{ $t("archive") }}</el-button>
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
      <el-dialog fullscreen append-to-body :visible="outerVisible">
        <div slot="footer" class="dialog-footer">
          <div id="viewer-host" style="direction: ltr"></div>
          <el-button class="my-3">{{$t("cancel")}}</el-button>
        </div>
      </el-dialog>
      <el-button size="mini" class="mb-1 btn-blue">{{
        $t("deferred-bond")
      }}</el-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        token: "bearer " + localStorage.getItem("accessToken"),
        reportResponse: {},
        reportChartResponse: {},
        data: null,
        outerVisible: false,
        report: {},
        chart: {},
        viewer: null
      };
    },
  };
  </script>
  