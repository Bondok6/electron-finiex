<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="6">
          <el-form-item>
            <label>{{ $t("account-name") }}</label>
            <el-select
              v-model="form.SearchString"
              filterable
              remote
              :placeholder="$t('search')"
              :remote-method="remoteMethod"
              :loading="loading"
              class="account-name width-full"
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
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item>
            <label>{{ $t("main-sub") }}</label>
            <el-select
              :placeholder="$t('main-sub')"
              v-model="form.MainOrSub"
              class="width-full"
            >
              <el-option :label="$t('all')" :value="null"></el-option>
              <el-option :label="$t('main')" :value="0"></el-option>
              <el-option :label="$t('sub')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item>
            <label>{{ $t("account-type") }}</label>
            <el-select v-model="form.MainFinalAccount" :placeholder="$t('all')">
              <el-option
                v-for="item in accountTypes"
                :key="item.mddCode"
                :label="item.mddname"
                :value="item.mddvalueNo"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item>
            <label>{{ $t("branch-name") }}</label>
            <el-select v-model="form.BrID" :placeholder="$t('all')">
              <el-option :label="$t('all')" :value="null"> </el-option>
              <el-option
                v-for="item in branchesList"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="10" :lg="12" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="form.OrderBy"
              class="color-blue text-center placeHolderColor w-250 selectButton"
              :placeholder="$t('order-by')"
            >
              <el-option
                :label="$t('account-number')"
                value="AccID"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-number") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('account-name')"
                value="AccName"
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
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('level')">
            <el-select v-model="form.LevelAccount">
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
    </el-form>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Invoice",
  data: function() {
    return {
      loading: false,
      form: {
        SearchString: "",
        MainOrSub: "",
        MainFinalAccount: "",
        LevelAccount: "",
        OrderBy: "",
        BrID: ""
      },
      additionalChoice: false
    };
  },
  computed: {
    ...mapState({
      accountTypes: state => state.lists.accountTypes,
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      maxLevel: state => state.lists.maxLevel,
      branchesList: state => state.lists.branchesList
    })
  },
  methods: {
    remoteMethod(query) {
      this.loading = true;
      this.$store
        .dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList", {
          SearchString: query
        })
        .then(e => {
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
          this.$message.error(e.message);
        });
    },
    ...mapMutations({
      setRecordDetails: "Accounting/virtualBalance/setRecordDetails"
    })
  },

  watch: {
    form: {
      handler(newVal, oldVal) {
        this.setRecordDetails({
          ...this.form
        });
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
