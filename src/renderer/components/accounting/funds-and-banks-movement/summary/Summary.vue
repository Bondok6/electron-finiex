<template>
  <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
    <div>
      <div class="totals-left">
        <span>
          <span class="mb-1 d-inline-block">
            {{ $t("total-credit") }}
          </span>
          <span class="input-style d-inline-block">
            {{
              infoRecords.totalCredit
                ? Number(+infoRecords.totalCredit.toFixed(2)).toLocaleString()
                : "0"
            }}
          </span>
        </span>
        <span>
          <span class="mb-1 d-inline-block">
            {{ $t("total-debit") }}
          </span>
          <span class="input-style d-inline-block">
            {{
              infoRecords.totalCredit
                ? Number(+infoRecords.totalDebit.toFixed(2)).toLocaleString()
                : "0"
            }}
          </span>
        </span>
      </div>
      <div
        class="
          justify-center
          mt-2
          action-buttons-nonGrown
          align-center align-baseline
        "
      >
        <el-button
          size="mini"
          class="mb-1 btn-violet-faded"
          @click="displayRecord"
          >{{ $t("display-f7") }}</el-button>
          <NuxtLink to="../../report-management">
            <el-button
            size="mini"
            class="mb-1 btn-grey"
            @click="$refs.reportInstance.openReport(reportData);">
            {{ $t("print-f4") }}</el-button>
          </NuxtLink>
        <report ref="reportInstance"></report>
      </div>
    </div>
  </div>
</template>
<script>
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";
import { mapState } from "vuex";
export default {
  name: "summary-section",
  components: {
    report,
  },
  data() {
    return {
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
      form: {
        pageSize: null,
      },
    };
  },
  computed: {
    ...mapState({
      infoRecords: state => state.Accounting.fundsAndBanksMovement.infoRecords
    }),
    reportData(){
      return {
        reportPath: reportsPaths["funds-and-banks-movement"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/reports/bank-fund-movements;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):JSON.stringify(this.$store.state.Accounting.fundsAndBanksMovement.records),
      }
    }
  },
  methods: {
    async displayRecord() {
      let response = this.$store
        .dispatch("Accounting/fundsAndBanksMovement/fetchRecords")
        .catch(err => {
          this.$message.error(err.message);
        });
        let data = await response;
        this.data = data;
    }
  },
};
</script>

<style lang="scss">
.totals-left {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 5px 20px;
}
</style>