<template>
<div class="text-center ma-4 mx-8 py-2 mt-0 pt-4">
  <el-container class="container mt-0 mb-0 ma-4 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="1250"
    >
      <el-table-column align="center" :label="$t('addition-details')">
        <template slot-scope="scope">
          <el-input
            size="small"
            v-model="scope.row.name"
            :disabled="disable"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="addition_date"
        :label="$t('addition-date')"
      >
        <template slot-scope="scope">
          <el-date-picker
            class="width-full"
            placeholder="yyyy/MM/dd"
            Value-format="yyyy/MM/dd"
            v-model="scope.row.dateCreated"
            :disabled="disable"
          ></el-date-picker>
          <!-- @keypress.native.enter="newRow()" -->
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('addition-value')">
        <template slot-scope="scope">
          <el-input
            :disabled="disable"
            size="small"
            class="number"
            v-model="scope.row.amount"
            @input="addOriginFixed(scope.row.amount)"
            @keyup.native.enter="newRow()"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        width="60"
        v-if="!(tableData.length == 1)"
      >
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
            @confirm="deleteRow(scope.$index)"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
          </el-popconfirm>
        </template>
      </el-table-column>

      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full visible-table"
          stripe
          border
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="originValue"
            :label="$t('the-value-of-the-original-at-the-time-of-purchase')"
          />
          <el-table-column
            align="center"
            prop="additionsValue"
            :label="$t('the-value-of-the-additions-to-the-discount')"
          />
          <el-table-column
            align="center"
            prop="netValue"
            :label="$t('net-asset-value')"
          />

        </el-table>
      </template>
    </el-table>
</el-container>
<div class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    ">
    <el-button v-if="!disable" size="mini" class="mb-1 btn-blue" @click="update()">{{ $t("save-f5") }}</el-button>
    <NuxtLink :to="
      localePath(
        '/reports-and-statements/public-statements/report-of-fixed-assets'
      )
    ">
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
      $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
    $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/card-fixed-assets')">
      <el-button size="mini" class="mb-1 btn-violet">{{
      $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <NuxtLink to="../../../report-management">
      <el-button size="mini" class="mb-1 btn-grey" @click="$refs.reportInstance.openReport(reportData);">
        {{ $t("print-f4") }}</el-button>
      </NuxtLink>
    <report ref="reportInstance"></report>
  </div>
</div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";

export default {
  name: "fixed-addition",
  components: {
    report,
  },
  data: function() {
    return {
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
      form: {
        pageSize: null,
      },
      tableData: [],
      appendData: {
        name: "",
        amount: "",
        dateCreated: new Date()
      },
      summaryTable: [
        {
          originValue: 0,
          additionsValue: 0,
          netValue: 0
        },
        {
          originValue: "-",
          additionsValue: "-",
          netValue: "-"
        }
      ]
    };
  },
  methods: {
    newRow() {
      this.tableData.push({ ...this.appendData });
    },
     deleteRow(row) {
      this.tableData.splice(this.tableData.indexOf(row), 1);
    },
    ...mapMutations({
      setRecordDetails: "Accounting/cardFixedAssets/setRecordDetails"
    }),
    addOriginFixed() {
      this.summaryTable[0].additionsValue = this.tableData.reduce(
        (prev, curr) => {
          return prev + Number(curr.amount);
        },
        0
      );
      this.summaryTable[0].netValue = this.tableData.reduce((prev, curr) => {
        return prev + Number(curr.amount);
      }, Number(this.singleRecordDetails.purchasePrice));
      this.summaryTable[0].originValue = this.singleRecordDetails.purchasePrice;
    }
  },
  computed: {
    reportData() {
      return {
        reportPath: reportsPaths["Fixed-Origin-Additions"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/card-fixed-assets/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/card-fixed-assets/${this.$route.params.id};Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
      };
    },
    ...mapState({
      singleRecordDetails: state =>
        state.Accounting.cardFixedAssets.singleRecordDetails,
      disable: state => state.Accounting.cardFixedAssets.disable
    })
  },
  watch: {
    singleRecordDetails: {
      handler({
        fixedAssetsAddedList: fixedAssetsAddedList,
        fixedAssetsDetailsList: fixedAssetsDetailsList,
        ...fixedAdditions
      }) {
        this.tableData =
          fixedAssetsAddedList.length > 0
            ? fixedAssetsAddedList
            : [
                {
                  name: "",
                  dateCreated: new Date(),
                  amount: ""
                }
              ];
        this.addOriginFixed();
      },
      deep: true
    },
    tableData: {
      handler(newVal) {
         
        let deepClone = JSON.parse(JSON.stringify(newVal));
        this.setRecordDetails({ fixedAssetsAddedList: [...deepClone] });
         
      },
      deep: true
    }
  }
};
</script>