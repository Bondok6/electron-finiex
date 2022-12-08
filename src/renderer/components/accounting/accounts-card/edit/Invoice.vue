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
                    <el-input
                      class=""
                      v-model="form.accountNumber"
                      disabled
                    >
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
                    <el-input class="" v-model="form.accountID"> </el-input>
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
                      v-model="form.mainOrSub"
                      class="width-full"
                      :disabled="true"
                    >
                      {{ form.mainOrSub }}
                      <el-option
                        :label="$t('main')"
                        :value="Number(0)"
                      ></el-option>
                      <el-option
                        :label="$t('sub')"
                        :value="Number(1)"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-type") }}</span>
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
                    <span>{{ $t("account-nature") }}</span>
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
                    <span>{{ $t("indebtedness-limit") }}</span>
                  </td>
                  <td>
                    <el-input
                      v-model="form.debitLimit"
                      class=""
                    />
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
                    <el-input v-model="form.dummy" :disabled="true" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("debit-balance") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.dummy" :disabled="true" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("credit-balance") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.dummy" :disabled="true" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("current-balance") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.dummy" :disabled="true" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("estimated-balance") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.dummy" :disabled="true" class="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>

          <!-- account-guide dialgog -->
          <!--

          <el-dialog title=" " :visible.sync="accountGuide" width="50%">
            <span>
              <el-container class="d-block mb-0 px-2 py-2">
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <div class="text-center mt-40">
                      <h1>
                        {{
                          $t(
                            "do-you-want-to-clear-the-current-accounting-evidence?"
                          )
                        }}
                      </h1>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="6" class="width-full">
                  <div class="text-center mt-40">
                    <el-col :xs="24" :sm="24" :md="24" :lg="12">
                      <el-button class="mb-1 btn-cyan-light px-4-lg">{{
                        $t("yes")
                      }}</el-button>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="24" :lg="12">
                      <el-button
                        class="mb-1 btn-cyan-light px-4-lg"
                        @click="accountGuide = false"
                        >{{ $t("no") }}</el-button
                      >
                    </el-col>
                  </div>
                </el-row>
              </el-container>
            </span>
          </el-dialog>
          -->
          <!-- end account guide dialog -->
          <!-- start copy accounts popup -->

          <!-- end copy accounts popup -->
        </el-col>
      </el-row>
      <accountingtree @node-selected="selectAccount" />
      <!-- start copy accounts popup -->

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
  computed: {
    ...mapState({
      accountDetails: state => state.Accounting.accountingCard.recordDetails,
      accountTypes: state => state.lists.accountTypes,
      accountNatures: state => state.lists.accountNatures
    })
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
        mainOrSub: "",
        taxNo: "",
        accountNumber: 0,
        dummy: 0,
        nameOfMainAccount : ""
      },

      accountGuide: false,
      dialogOne: false,
      copyAccounts: false
    };
  },
  methods: {
    ...mapMutations({
      editAccountDetails: "Accounting/accountingCard/editAccountDetails"
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
    selectAccount(data) {
      this.form.mainAccountId = data.accID + "---" + data.label;
      this.form.accountNumber = data.accID + "---" + data.label;
      this.$store.commit("accountingTree/updateDialogState", false);
    }
  },
  async created() {
    await this.$store.dispatch(
      "Accounting/accountingCard/fetchSingleRecord",
      this.$route.params.id
    );
    // "id": "137",
    //   "accID": "2000",
    //   "accName": "الخصوم",
    //   "mainFinalAccount": 2,
    //   "maxBalance": 2000.0000,
    //   "mainAccountNo": "0",
    //   "accPeriod": "20",
    //   "mainOrSub": 0,
    //   "levelAccount": 1,
    //   "joinCOstCenter": false,
    //   "accNameEng": null,
    //   "taxNo": null
    await this.$store.dispatch("lists/getAccountTypes");
    await this.$store.dispatch("lists/getAccountNatures");
    this.form.accountID = this.accountDetails.accID;
    this.form.accountName = this.accountDetails.accName;
    this.form.accountNumber = this.accountDetails.mainAccountNo +'---'+ this.accountDetails.nameOfMainAccount;
    this.form.mainOrSub = this.accountDetails.mainOrSub;
    this.form.accountNatureSeleted = this.accountDetails.joinCOstCenter ? 1 : 0;
    this.form.debitLimit = this.accountDetails.maxBalance;
    this.form.accountLevel = this.accountDetails.levelAccount;
    this.form.mainAccountId = this.accountDetails.mainAccountNo +'---'+ this.accountDetails.nameOfMainAccount;
    this.form.paymentPeriod = this.accountDetails.accPeriod;
    this.form.accountTypeSeleted = this.accountDetails.joinCOstCenter ? 1 : 0;
    this.form.taxNo = this.accountDetails.taxNo;


  },
  watch: {
    form: {
      handler(after) {
        // must be set account details if this props valid TO make create Account
        if (after.accountID && after.accountName) {
          this.editAccountDetails({ ...after ,
            mainAccountId : after.mainAccountId?.split("---")[0] ?? ""
          });
        }
      },
      deep: true
    }
  }
};
</script>
