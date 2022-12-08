<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker type="date" v-model="form.from"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item>
            <label>{{ $t("user-name") }}</label>
            <el-select
              class="width-full"
              v-model="form.userID"
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
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.accID
                }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item>
            <label>{{ $t("box-bank") }}</label>
            <el-select
              v-model="form.bankFundID"
              :placeholder="$t('select-branch')"
            >
              <el-option :label="$t('all')" :value="0"> </el-option>
              <el-option
                v-for="fund in banksAndFundsList"
                :key="fund.maccId"
                :value="fund.maccId"
                :label="fund.mname"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker v-model="form.to" type="date"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="6" :lg="6">
          <el-checkbox
            class="padding-label arround-checkbox inner-checkbox mt-40"
            v-model="form.hidePrvBal"
            >{{ $t("hide-previous-balance") }}</el-checkbox
          >
        </el-col>
      </el-row>
    </el-form>

  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: function() {
    return {
      form: {
        to: new Date(),
        from:  new Date(),
        hidePrvBal: false,
        bankFundID: null,
        userID: null
      },
      loading: false
    };
  },
  computed: {
    ...mapState({
      banksAndFundsList: state => state.lists.banksAndFundsList,
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      financialYear: state => state.General.financialYear
    })
  },
  mounted() {
     
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
      } catch (e) {
        this.$message.error(e.message);
      }
    },
    ...mapMutations({
      setRecordDetails: "Accounting/fundsAndBanksMovement/setRecordDetails"
    })
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
      deep: true,
      immediate: true
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
