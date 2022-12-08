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
          <el-form-item :label="$t('invoice-number')" prop="invoiceId">
            <el-input
              v-model="invoiceId"
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
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",
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
      singleRecordDetails() {
        return this.$store.state.inventory.invoiceInventoryFirstTerm
          .singleRecordDetails;
      },
      invoiceId() {
        return this.singleRecordDetails.invoiceId;
      },
      invoiceCode() {
        return this.singleRecordDetails.invoiceCode;
      },
      branchName() {
        return this.singleRecordDetails.brancheName;
      }
    })
  },
  data() {
    return {
      form: {},
      formRules: {
        invoiceDate: [{ required: true, message: "يجب ادخال تاريخ الفاتورة" }]
      }
    };
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "inventory/invoiceInventoryFirstTerm/setRecordDetails"
    })
  },
  watch: {
    singleRecordDetails: {
      handler(val) {
        this.form = {
          invoiceDate: val.invoiceDate
        };
      },

      deep: true
    },
    form: {
      // save the form data to RecordDetails store when the form data change
      handler(val) {
        this.setRecordDetails({
          ...this.recordDetails,
          invoiceDate: val.invoiceDate,
          invoiceCode: this.invoiceCode
        });
      },
      deep: true
    }
  }
};
</script>
