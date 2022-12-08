<template>
  <div class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('branch-name')">
                <el-select
                  v-model="form.branchID"
                  :placeholder="$t('select-branch')"
                >
                  <el-option :label="$t('all')" :value="0"> </el-option>
                  <el-option
                    v-for="item in branchesList"
                    :label="item.name"
                    :value="item.id"
                    :key="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('cost-center')">
                <el-select
                  v-model="form.costCenterID"
                  :placeholder="$t('choose')"
                  class="width-full"
                >
                  <el-option :label="$t('without')" :value="0"> </el-option>

                  <el-option
                    v-for="item in costCentersList"
                    :key="item.mdcode"
                    :label="item.mname"
                    :value="item.mdcode"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('main-account')">
                <el-select
                  class="width-full"
                  v-model="form.mainAccID"
                  :placeholder="$t('search')"
                  filterable
                  remote
                  :remote-method="remoteMethod"
                  :loading="loading"
                >
                  <el-option
                    v-for="item in accountList"
                    :key="item.accID"
                    :label="item.accName + ' --- ' + item.accID"
                    :value="item.accID"
                  >
                    <span style="float: left">{{ item.accName }}</span>
                    <span
                      style="float: right; color: #8492a6; font-size: 13px"
                      >{{ item.accID }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('level')">
                <el-select v-model="form.accLevel">
                  <el-option :label="$t('all')" :value="maxLevel"></el-option>
                  <el-option
                    v-for="level in maxLevel ? maxLevel - 1 : maxLevel"
                    :key="level"
                    :label="level"
                    :value="level"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="14" :lg="18" class="mt-40">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-form-item>
                  <el-button
                    @click="form.excludeZeroAccs = !form.excludeZeroAccs"
                    :class="[
                      form.excludeZeroAccs ? 'btn-dark-grey' : 'btn-red'
                    ]"
                  >
                    <span v-if="form.excludeZeroAccs">
                      {{ $t("showing-accounts-with-a-zero-balance") }}
                    </span>

                    <span v-else>
                      {{ $t("hide-accounts-with-a-zero-balance") }}
                    </span>
                  </el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
    <invoice-summary />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import InvoiceSummary from "./summary/Summary.vue";

export default {
  name: "invoice",
  components: {
    InvoiceSummary
  },

  data: function() {
    return {
      form: {
        from: new Date(),
        to: new Date(),
        mainAccID: null,
        accLevel: null,
        costCenterID: null,
        branchID: null,
        excludeZeroAccs: true
      },
      loading: false
    };
  },
  computed: {
    ...mapState({
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      branchesList: state => state.lists.branchesList,
      costCentersList: state => state.lists.costCentersList,
      financialYear: state => state.General.financialYear,
      maxLevel: state => state.lists.maxLevel
    })
  },
  methods: {
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "Accounting/accountingDailyJournal/fetchSubAccountsList",
          {
            SearchString: query,
            mainOrSub: false
          }
        );

        this.loading = false;
      } catch (e) {}
    },
    ...mapMutations({
      setRecordDetails:
        "Accounting/Reports/referenceBalanceReportStockBalance/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler(newVal) {
        this.setRecordDetails({
          ...newVal,
          to: new Date(newVal.to).toISOString(),
          from: new Date(newVal.from).toISOString()
        });
      },
      deep: true
    },
    financialYear: {
      handler: function(newVal) {
        this.form.from = newVal?.from ? new Date(newVal.from) : new Date();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
