<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
 
    <el-row :gutter="6" class="mt-2 width-full">
      <el-col :md="15">
        <el-form
            class="invoice-form width-full d-flex justify-center"
            label-position="top"
            :model="form"
          >
            <span>
              <el-input
                class="text-color bl-none mb-1 w-300 ml-2"
                v-model="form.searchValue"
                @input="handleSearch"
                :placeholder="$t('search')"
              >
                <template slot="append"><i class="el-icon-search"></i></template>
              </el-input>
            </span>

            <span class="text-center">
              <el-input
                class="text-color mb-1 w-150 ml-2 text-center"
                :placeholder="$t('records-number')"
                readonly="readonly"
              ></el-input>
              <el-input
                class="text-color mb-1 w-80 ml-2 text-center"
                :min="1"
                :max="100"
                :value="total"
              ></el-input>
            </span>
          </el-form>
      </el-col>
      <el-col :xs="24" :md="8" class="px-15">
        <el-form>
          <el-form-item class="options-end">
            <el-select
              value=""
              class="color-teal text-center placeHolderColor w-250"
              :placeholder="$t('accounting-card-options')"
            >
              <el-option
                :value="1"
                @click="accountGuide = true"
                class="selectButton"
              >
                <el-button v-if="length == 1" class="width-full mx-0" @click="handleCreateGuide">
                  {{ $t("accounting-guide-create") }}
                </el-button>
                <el-button v-else class="width-full mx-0" @click="handleDeleteGuide">
                  {{ $t("accounting-guide-delete") }}
                </el-button>
              </el-option>
              <el-option
                :value="2"
                @click="accountGuide = true"
                class="selectButton"
              >
                <el-button
                  class="mb-1 width-full mx-0"
                  @click="openTreeCopyDialog(true)"
                  >{{
                    $t("copy-the-accounts-to-the-current-branch")
                  }}</el-button
                >
              </el-option>
              <el-option
                :value="3"
                @click="accountGuide = true"
                class="selectButton"
              >
                <NuxtLink :to="localePath('/accounting/debit-limit-customers')">
                  <el-button class="mb-1 width-full mx-0">{{
                    $t("debt-limit-and-repayment-period")
                  }}</el-button>
                </NuxtLink>
              </el-option>
              <el-option
                :value="3"
                @click="accountGuide = true"
                class="selectButton"
              >
                <NuxtLink :to="localePath('/accounting/the-opening-balance')">
                  <el-button class="mb-1 width-full mx-0">{{
                    $t("account-opening-balances")
                  }}</el-button>
                </NuxtLink>
              </el-option>
              <el-option
                :value="4"
                @click="accountGuide = true"
                class="selectButton"
              >
                <el-button
                  class="mb-1 width-full mx-0"
                  @click="openTreeDialog(true)"
                  >{{ $t("accounting-tree-review") }}</el-button
                >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <accountingtree @node-selected="selectAccount" />
    <accountingtreecopy />
  </el-container>
</template>

<script>
import { mapActions } from "vuex";
import Accountingtree from "~/components/dialogs/accounting-tree";
import Accountingtreecopy from "~/components/dialogs/accounting-tree-copy";
import EntrySearch from "~/components/static/entrySearch";

export default {
  name: "search",
  components: {
    Accountingtree,
    Accountingtreecopy,
    EntrySearch
  },

  data: function() {
    return {
      form: {
        searchValue: ""
      }
    };
  },
  props: ["total", "length"],
  methods: {
    handleSearch() {
      this.$store.dispatch("Accounting/accountingCard/fetchRecordsByName", {
        pageNumber: 1,
        SearchString: this.form.searchValue
      });
    },
    async getRootTree(cmpName) {
      try {
        await this.$store.dispatch(`${cmpName}/getChildren`, 0);
      } catch (e) {

      }
    },
    openTreeDialog(state) {
      try {
        this.getRootTree("accountingTree");
        this.$store.commit("accountingTree/updateDialogState", state);
      } catch (e) {

      }
    },
    openTreeCopyDialog(state) {
      try {
        this.getRootTree("accountingtreecopy");
        this.$store.commit("accountingtreecopy/updateDialogState", state);
      } catch (e) {

      }
    },
    selectAccount(data) {
      this.form.mainAccountId = data.accID + "---" + data.label;
      this.form.accountNumber = data.accID + "---" + data.label;
      this.$store.commit("accountingTree/updateDialogState", false);
    },
    handleDeleteGuide() {
      this.$store.dispatch("Accounting/accountingCard/deleteAccountingGuide").then(({response})=>{
        this.$notify({
          title: "Success",
          message: response.data.message,
          type: "success"
        })
      }).catch(({response}) => {
        this.$notify({
          title: "Error",
          message: response.data.Message,
          type: "error"
        })
      })
    },
    handleCreateGuide() {
      this.$store.dispatch("Accounting/accountingCard/createAccountingGuide")
    },
  }
};
</script>
<style scoped>
.options-end {
  display: flex;
  justify-content: flex-end;
}
</style>