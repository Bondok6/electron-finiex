<template>
  <div class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
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

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
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
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('account-name')">
                <el-select
                  class="width-full"
                  v-model="form.accID"
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

            <el-col :xs="24" :sm="18" :md="19" :lg="20" class="mt-40">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-form-item>
                  <el-button
                    @click="form.excludeZeroAccs = !form.excludeZeroAccs"
                    :class="[
                      form.excludeZeroAccs ? 'btn-red' : 'btn-dark-grey'
                    ]"
                  >
                    <span v-if="form.excludeZeroAccs">{{
                      $t("not-showing-accounts-with-a-zero-balance")
                    }}</span>
                    <span v-else
                      >{{ $t("showing-accounts-with-a-zero-balance") }}
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
        accLevel: null,
        branchID: null,
        excludeZeroAccs: false,
        accID: null
      },
      loading: false
    };
  },
  computed: {
    ...mapState({
      branchesList: state => state.lists.branchesList,
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      financialYear: state => state.General.financialYear,
      maxLevel: state => state.lists.maxLevel
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails:
        "Accounting/Reports/estimatedBudgetReport/setRecordDetails"
    }),
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
    }
  },
  watch: {
    form: {
      handler(newVal, oldVal) {
        this.setRecordDetails({
          ...newVal,
          from: new Date(newVal.from).toISOString(),
          to: new Date(newVal.to).toISOString()
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
