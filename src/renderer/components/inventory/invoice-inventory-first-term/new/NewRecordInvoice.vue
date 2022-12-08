<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="form"
      :rules="formRules"
      ref="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('invoice-number')" prop="invoiceCode">
            <el-input
              v-model="invoiceCode"
              type="number"
              readonly
              disabled
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('invoice-date')" prop="invoiceDate">
            <el-date-picker
              type="date"
              v-model="form.invoiceDate"
              :picker-options="inFinancialYearDatePicked"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('branch-name')" prop="invoiceBranch">
            <el-input v-model="branchName" readonly disabled></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="9" :lg="12" class="mt-40">
          <div class="d-flex">
            <div class="spacer"></div>
            <el-upload
              :on-change="handleFileChange"
              :show-file-list="false"
              accept=".xlsx"
            >
              <el-button class="btn-cyan-light mobile-width-full">
                {{ $t("inserting-items-via-excel-file") }}
              </el-button>
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "invoice",
  data() {
    return {
      form: {
        invoiceDate: ""
      },
      formRules: {
        invoiceDate: [{ required: true, message: "يجب ادخال تاريخ الفاتورة" }]
      }
    };
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "inventory/invoiceInventoryFirstTerm/setRecordDetails"
    }),
    // handleFileChange(file) {
    //   //TODO: send file to server inventory/first-term-invoice/file-first-term
    //   this.$axios
    //     .post("inventory/first-term-invoice/file-first-term", file)
    //     .then(res => {
    //       console.log(res.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  },
  computed: {
    ...mapState({
      inFinancialYearDatePicked: state => {
        const { financialYear } = state.General;
        return {
          disabledDate: time => {
            return (
              time.getTime() < new Date(financialYear.from).getTime() ||
              time.getTime() > new Date(financialYear.to).getTime()
            );
          }
        };
      },
      state() {
        return this.$store.state.inventory.invoiceInventoryFirstTerm;
      },
      branchName() {
        return this.state.currentBranch.currentBranceName;
      },
      recordDetails() {
        return this.state.recordDetails;
      },
      invoiceCode() {
        return this.state.maxId;
      }
    })
  },
  watch: {
    form: {
      // save the form data to RecordDetails store when the form data change
      handler(val) {
        this.setRecordDetails({
          ...this.recordDetails,
          invoiceDate: val.invoiceDate,
          invoiceID: this.invoiceCode
        });
      },
      deep: true
    }
  }
};
</script>
