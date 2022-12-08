<template>
  <!-- <el-dialog fullscreen append-to-body :visible.sync="dialogState"> -->
    <div slot="footer" class="dialog-footer">
      <div id="viewer-host" style="direction: ltr"></div>
      <!-- <el-button class="my-3" @click="setReportDialogState(false)">{{
        $t("cancel")
      }}</el-button> -->
    </div>
  <!-- </el-dialog> -->
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      data: null,
      viewer: null,
    };
  },
  computed: {
    ...mapState({
      dialogState: (state) => state.reportsManagment.reportDialog,
      stateReport: (state) => state.reportsManagment.report,
    }),
  },
  mounted(){},
  methods: {
    ...mapMutations("reportsManagment", ["setReportDialogState"]),
    ...mapActions("reportsManagment", ["showReport","assignDataToReport"]),
    openReport(data) {
      let componentData = data;

      this.showReport(componentData).then((report) => {
        this.viewer = new ActiveReports.Viewer("#viewer-host");
        this.viewer.open(report);
      });
    },
  },
};
</script>