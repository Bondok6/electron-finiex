<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item :label="$t('from-registration-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.dateFrom"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="3">
          <el-form-item>
            <label>{{ $t("from-number") }}</label>
            <el-input v-model="form.mvcodFrom"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item>
            <label>{{ $t("account-name") }}</label>
            <el-select
              class="width-full"
              v-model="form.searchString"
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
            <label>{{ $t("cost-center") }}</label>
            <el-select v-model="form.cstCntrID">
              <el-option :label="$t('without')" value=""></el-option>
              <el-option
                v-for="costCenter in costCentersList"
                :key="costCenter.mdcodeId"
                :value="costCenter.mdcodeId"
                :label="costCenter.mname"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="22" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('to-registration-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.dateTo"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="3">
          <el-form-item>
            <label>{{ $t("to-number") }}</label>
            <el-input v-model="form.mvcodTo"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item>
            <label>{{ $t("statement") }}</label>
            <el-input v-model="form.statement"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <el-form-item>
            <label>{{ $t("movement-type") }}</label>
            <el-select v-model="form.mvTypeID">
              <el-option value="" label="بدون"></el-option>
              <el-option
                v-for="typeMove in movementTypesList"
                :key="typeMove.mddCode"
                :value="typeMove.mddCode"
                :label="typeMove.mddname"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="8">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="form.orderBy"
              class="color-blue text-center placeHolderColor w-250 selectButton"
              :placeholder="$t('order-by')"
            >
              <el-option
                :label="$t('account-name')"
                value="AccName"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-name") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('document-number')"
                value="DocNo"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("document-number") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('document-date')"
                value="DateGrD"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("document-date") }}
                </el-button>
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="6" :lg="3">
          <el-form-item>
            <label>{{ $t("amount") }}</label>

            <el-input
              class="text-color text-center"
              v-model="form.amount"
              placeholder=" "
            >
            </el-input>
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
      form: {
        mvTypeID: "", // نوع الحركه,'
        mvcodFrom: "", // رقم االقيد من
        mvcodTo: "", // رقم االقيد الي,
        cstCntrID: "", //مركز التكلفة,
        statement: "",
        amount: "",
        orderBy: "",
        dateFrom: new Date(),
        dateTo: new Date(),
        searchString: ""
      },
      loading: false
    };
  },
  computed: {
    ...mapState({
      movementTypesList: state => state.lists.movementTypesList,
      costCentersList: state => state.lists.costCentersList,
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      financialYear: state => state.General.financialYear,

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
      } catch (e) {
         
      }
    },
    ...mapMutations({
      setRecordDetails: "Accounting/detailsOfDailyMovement/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler(newval) {
        this.setRecordDetails({
          ...newval,
          dateFrom: new Date(newval.dateFrom).toISOString(),
          dateTo: new Date(newval.dateTo).toISOString()
        });
      },
      deep: true
    },
     financialYear: {
      handler: function(newVal) {
         
        this.form.dateFrom = newVal?.from ? new Date(newVal.from) : new Date();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
