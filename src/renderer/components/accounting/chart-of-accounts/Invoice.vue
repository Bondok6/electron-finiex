<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item>
            <label>{{ $t("account-name") }}</label>
            <el-select
              class="width-full"
              v-model="form.accountName"
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
            <label>{{ $t("account-type") }}</label>
            <el-select v-model="form.accNature" class="width-full">
              <el-option
                v-for="item in accountNatures"
                :key="item.mddCode"
                :label="item.mddname"
                :value="item.mddvalueNo"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item>
            <label>{{ $t("branch-name") }}</label>
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
      </el-row>

      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('level')">
            <el-select v-model="form.lvl" >
            <el-option :label="$t('all')" :value="5"></el-option>
                  <el-option label="1" :value="1"></el-option>
                  <el-option label="2" :value="2"></el-option>
                  <el-option label="3" :value="3"></el-option>
                  <el-option label="4" :value="4"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('grade-type')">
            <el-select v-model="form.accType" :placeholder="$t('all')">
              <el-option :label="$t('all')" :value="null"></el-option>
              <el-option :label="$t('main')" :value="0"></el-option>
              <el-option :label="$t('sub')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="16" :lg="15" :xl="16" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="form.orderBy"
              class="color-blue text-center placeHolderColor w-250 selectButton"
              :placeholder="$t('order-by')"
            >
              <el-option
                :label="$t('account-number')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-number") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('account-name')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-name") }}
                </el-button>
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="6" :lg="6">
          <el-checkbox
            class="padding-label arround-checkbox inner-checkbox"
            @change="form.excZeroAccs = !form.excZeroAccs"
          >
            <span v-if="form.excZeroAccs">
              {{ $t("not-showing-accounts-with-a-zero-balance") }}
            </span>
            <span v-else>
              {{ $t("showing-accounts-with-a-zero-balance") }}
            </span>
          </el-checkbox>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Invoice",
  data: function() {
    return {
      form: {
        accNature: null,
        lvl: null,
        branchID: null,
        accID: null,
        accType: null,
        excZeroAccs: false,
        orderBy: null
      },
      loading: false
    };
  },
  computed: {
    ...mapState({
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      accountNatures: state => state.lists.accountNatures,
      branchesList: state => state.lists.branchesList
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/chartOfAccounts/setRecordDetails"
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
      } catch (e) {
         
      }
    }
  },
  watch: {
    form: {
      handler(newVal, oldVal) {
        this.setRecordDetails({
          ...newVal
        });
      },
      deep: true
    }
  }
};
</script>
