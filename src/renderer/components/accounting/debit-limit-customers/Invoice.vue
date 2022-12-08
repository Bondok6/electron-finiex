<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('branch-name')">
            <el-select
              v-model="form.branchSelected"
              :placeholder="$t('select-branch')"
            >
              <el-option :label="$t('all')" :value="null"> </el-option>
              <el-option
                v-for="item in branchesList"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              ></el-option>
              <!--
              // <el-option :label="$t('all')" :value="1"></el-option>
              // <el-option :label="$t('all')" :value="2"></el-option>
              -->
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('order-by')">
            <el-select
              v-model="form.orderBy"
              :placeholder="$t('order-by')"
            >
              <el-option :label="$t('all')" :value="null"></el-option>
              <el-option
                :label="$t('account-name')"
                value="AccName"
              ></el-option>
              <el-option
                :label="$t('account-number')"
                value="AccId"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="5" :lg="6">
          <el-form-item :label="$t('account-name')">
            <!--


          <el-input
              class="w-300"
              v-model="form.searchValue"
              @input="handleSearch"
              :placeholder="$t('search')"
            >
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
         -->
            <el-select
              v-model="form.searchValue"
              filterable
              remote
              :placeholder="$t('search')"
              :remote-method="remoteMethod"
              :loading="loading"
              class=""
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
            <i class="el-icon-search icon" @click="openTreeDialog(true)"></i>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="9" :lg="10" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-form-item>
              <el-button
                @click="
                  form.showCustomersOverIndebtedness =
                    !form.showCustomersOverIndebtedness
                "
                :class="[
                  form.showCustomersOverIndebtedness
                    ? 'btn-dark-grey'
                    : 'btn-red',
                ]"
              >
                <span v-if="form.showCustomersOverIndebtedness">
                  {{ $t("show-customers-over-indebtedness") }}
                </span>

                <span v-else>
                  {{ $t("Hide-only-over-indebted-clients") }}
                </span>
              </el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <invoice-summary />
      </el-row>
    </el-form>
    <!-- <accountingtree @node-selected="selectAccount" /> -->
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Accountingtree from "~/components/dialogs/accounting-tree";
import InvoiceSummary from "./summary/Summary.vue";


export default {
  name: "invoice",
  components: { Accountingtree, InvoiceSummary },
  data: function() {
    return {
      form: {
        branchSelected: "",
        orderBy: "",
        showCustomersOverIndebtedness: false,
        searchValue: ""
      },
      loading: false,
      list: []
    };
  },
  computed: {
    ...mapState({
      branchesList: state => state.lists.branchesList,
      accountList: state => state.Accounting.accountingDailyJournal.accountList
    })
  },
  created() {
    this.$store.dispatch("lists/getBranchesList");
    this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList");
  },
  methods: {
    ...mapMutations({
      setSearchForm: "debitLimitCustomers/setSearchForm",
    }),
    async openTreeDialog(state) {
      try {
        await this.$store.dispatch(`accountingTree/getChildren`, 0);

        this.$store.commit("accountingTree/updateDialogState", state);
      } catch (e) {
         
      }
    },

    async remoteMethod(query) {
       
      this.loading = true;
      await this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSubAccountsList",
        {
          SearchString: query
        }
      );

      this.loading = false;
    },

  },
  watch: {
    form: {
      handler: function(newVal, oldVal) {
        console.log({...newVal});
        this.setSearchForm({
          ...newVal
        });
      },
      deep: true
    }
  }
};
</script>
