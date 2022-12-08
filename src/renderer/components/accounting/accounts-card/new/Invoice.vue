<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("main-account") }}</span>
                  </td>
                  <td>
                    <el-input class="" v-model="form.mainAccountId" disabled>
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        @click="openTreeDialog(true)"
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td>
                    <el-input
                      class=""
                      v-model="form.accountID"
                    >
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-name") }}</span>
                  </td>

                  <td>
                    <el-input class="" v-model="form.accountName"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-level") }}</span>
                  </td>

                  <td>
                    <el-input
                      class=""
                      v-model="form.accountLevel"
                      :disabled="true"
                    >
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("main-sub") }}</span>
                  </td>

                  <td>
                    <el-select
                      :placeholder="$t('main-sub')"
                      v-model="form.subOrMain"
                      class="width-full"
                      disabled
                    >
                      <el-option :label="$t('main')" :value="0"></el-option>
                      <el-option :label="$t('sub')" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <!-- TODO:  accountNatureValue be 0  with text "متاجره" this is confliect with my list      -->
                  <td class="popup-label">
                    <span>{{ $t("account-type") }} </span>
                  </td>
                  <td>
              
                          <el-select
                      v-model="form.accountNatureSeleted"
                      class="width-full"
                    >
                      <el-option
                        v-for="item in accountNatures"
                        :key="item.mddCode"
                        :label="item.mddname"
                        :value="item.mddvalueNo"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-nature") }}</span>
                  </td>
                  <td>

                    <el-select
                      v-model="form.accountTypeSeleted"
                      class="width-full"
                    >
                      <el-option
                        v-for="item in accountTypes"
                        :key="item.mddCode"
                        :label="item.mddname"
                        :value="item.mddvalueNo"
                      ></el-option>
                    </el-select>

                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("indebtedness-limit") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.debitLimit" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("payment-period") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.paymentPeriod" class="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("opening-balance") }}</span>
                  </td>
                  <td>
                    <el-input value="0" class="" :disabled="true" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("debit-balance") }}</span>
                  </td>
                  <td>
                    <el-input value="0" class="" :disabled="true" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("credit-balance") }}</span>
                  </td>
                  <td>
                    <el-input value="0" class="" :disabled="true" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("current-balance") }}</span>
                  </td>
                  <td>
                    <el-input value="0" class="" :disabled="true" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("estimated-balance") }}</span>
                  </td>
                  <td>
                    <el-input value="0" class="" :disabled="true" />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
          <!-- account-guide dialgog -->

          <!-- end account guide dialog -->
          <!-- start copy accounts popup -->

          <!-- end copy accounts popup -->
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <accountingtree @node-selected="selectAccount" />
      <!-- start copy accounts popup -->
      <accountingtreecopy />
      <!-- end Copy accountingtree  -->
    </section>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
import Accountingtreecopy from "~/components/dialogs/accounting-tree-copy";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Accountingtree,
    Accountingtreecopy
  },
  data() {
    return {
      form: {
        mainAccountId: "",
        accountName: "",
        accountID: "",
        accountTypeSeleted: "",
        accountNatureSeleted: "",
        accountLevel: "",
        debitLimit: 0,
        paymentPeriod: 0,
        subOrMain: 1
      },

      accountGuide: false
    };
  },
  computed: {
    ...mapState({
      newAccountDetails: state => state.Accounting.accountingCard.newAccountDetails,
      accountTypes: state => state.lists.accountTypes,
      accountNatures: state => state.lists.accountNatures
    })
  },
  methods: {
    ...mapMutations({
      setAccountDetails: "Accounting/accountingCard/setAccountDetails"
    }),
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
    async selectAccount(data) {
      console.log(data)
      this.form.mainAccountId = data.accID + "---" + data.label;
      this.form.subOrMain = data.hasChildren ? 0 : 1
      console.log(data)
      await this.$store.dispatch(
        "Accounting/accountingCard/getAccountDetails",
        data.accID
      );
      this.$store.dispatch("accountingTree/getChildren", 0);
      this.$store.commit("accountingTree/updateDialogState", false);

     /* this.$set(this.form , "accountID" ,this.newAccountDetails.accountID );
      this.$set(this.form , "accountLevel" ,this.newAccountDetails.accountLevel )
      this.$set(this.form , "accountNatureSeleted" ,this.newAccountDetails.accountNatureValue )
      this.$set(this.form , "accountTypeSeleted" ,this.newAccountDetails.accountTypeText ? 1
        : 0 )*/
      this.form.accountID = this.newAccountDetails.accountID;
      this.form.accountLevel = this.newAccountDetails.accountLevel;
      this.form.accountNatureSeleted = this.newAccountDetails.accountNatureValue;
      this.form.accountTypeSeleted = this.newAccountDetails.accountTypeText
        ? 0
        : 1;
    }
  },
  async created() {
    await this.$store.dispatch("lists/getAccountTypes");
    await this.$store.dispatch("lists/getAccountNatures");
  },
  //deep watch
  watch: {
    form: {
      handler(after) {

        // must be set account details if this props valid TO make create Account
        if (
          after.accountID &&
          after.accountLevel &&
          after.accountName &&
          after.mainAccountId
        ) {
          this.setAccountDetails({ ...after ,
            mainAccountId :   after.mainAccountId?.split("---")[0] ?? ""
          });



        }
      },
      deep: true
    }
  }
};
</script>
