<template>
  <div>
    <section class="border-none mb-0 px-2 pt-6">
      <el-row>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("fixed-original-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.assetCode" disabled class="">
                      <template slot="append"
                        ><i class="el-icon-search"></i
                      ></template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("beginning-consumption-original") }}</span>
                  </td>

                  <td>
                    <el-date-picker
                      class="width-full"
                      placeholder="2020-10-15"
                      disabled
                      v-model="form.startDeprationDate"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("date-exclusion-original") }}</span>
                  </td>

                  <td>
                    <el-date-picker
                      class="width-full"
                      placeholder="2020-10-15"
                      v-model="form.exclusionDate"
                      @change="handleExclusionDateChange"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("original-exclusion-value") }}</span>
                  </td>

                  <td>
                    <el-input v-model="form.exclusionValue" class="" @input="form.benefitOrLossValue =  $convertToValidNumber(form.exclusionValue - form.bookingValue , true) " />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("value-profil-or-loss-asset") }}</span>
                  </td>

                  <td>
                    <el-input
                      disabled
                      v-model="form.benefitOrLossValue"
                      class=""
                    />
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
                    <span>{{ $t("fixed-original-value") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.assetValue" disabled class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("former-depreciation-complex") }}</span>
                  </td>
                  <td>
                    <el-input
                      v-model="form.lastDeprationValue"
                      disabled
                      class=""
                    />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("period-depreciation-complex") }}</span>
                  </td>
                  <td>
                    <el-input
                      v-model="form.periodDeprationValue"
                      disabled
                      class=""
                    />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("current-depreciation-complex") }}</span>
                  </td>
                  <td>
                    <el-input
                      v-model="form.commandDeprationValue"
                      disabled
                      class=""
                    />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("book-value") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.bookingValue" disabled class="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg mt-40">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("bank-box-account-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.bankFundAccID" class="">
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        @click="openDialogBankFund"
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("disposal-profit-and-loss-account") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.execlusionAccID" class="">
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        @click="openDialogExeclusion"
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("details-exclusion-original") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.execlusionDetails" class="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
    </section>
    <accountingtree
      v-if="bankFundAccount"
      @node-selected="selectBankFundAccount"
    />
    <accountingtree
      @node-selected="selectExeclusionAccount"
      v-if="execlusionAccount"
    />
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";

import { mapState, mapMutations } from "vuex";
export default {
  name: "addition-form",
  components: {
    Accountingtree
  },
  data() {
    return {
      bankFundAccount: false,
      execlusionAccount: false,
      form: {
        assetCode: null, //d
        assetID: null, //d
        assetValue: null, //d
        bankFundAccID: null, //d
        benefitOrLossValue: null, //d
        bookingValue: null,
        bookingValueWithoutAddedAssets: null,
        commandDeprationValue: null,
        exclusionDate: null, //d
        execlusionAccID: null, //d
        exclusionValue: null, //d
        execlusionDetails: null, //d
        lastDeprationValue: null,
        periodDeprationValue: null,
        startDeprationDate: null //d
      },

      dialogTableVisible: false
    };
  },
  computed: {
    ...mapState({
      exclusionDetails: state =>
        state.Accounting.cardFixedAssets.exclusionDetails
    })
  },
  methods: {
    ...mapMutations({
      updateDialogState: "accountingTree/updateDialogState",
      setExclusionRecord: "Accounting/cardFixedAssets/setExclusionRecord"
    }),
    async openDialogBankFund(state) {
      try {
        this.execlusionAccount = false;
        this.bankFundAccount = true;
        await this.$store.dispatch(`accountingTree/getChildren`, 0);
        this.updateDialogState(state);
      } catch (err) {
            return err
      }
    },
    async openDialogExeclusion(state) {
      try {
        this.bankFundAccount = false;
        this.execlusionAccount = true;
        await this.$store.dispatch(`accountingTree/getChildren`, 0);
        this.updateDialogState(state);
      } catch (err) {
            return err
      }
    },
    selectBankFundAccount(data) {
      if (data.hasChildren) {
        this.$confirm(
          this.$t("youSelectAccountBeMainAccount_SelectSubAccount"),
          "Warning",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: false,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        ).then(() => {
          return this.$store
            .dispatch(`accountingTree/getChildren`, 0)
            .then(() => {
              this.updateDialogState(true);
            });
        });
      } else {
        this.form.bankFundAccID = data.accID + "---" + data.label;
         
        this.updateDialogState(false);
      }
    },
    selectExeclusionAccount(data) {
      if (data.hasChildren) {
        this.$confirm(
          this.$t("youSelectAccountBeMainAccount_SelectSubAccount"),
          "Warning",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: false,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        ).then(() => {
          return this.$store
            .dispatch(`accountingTree/getChildren`, 0)
            .then(() => {
              this.updateDialogState(true);
            });
        });
      } else {
        this.form.execlusionAccID = data.accID + "---" + data.label;
         
        this.updateDialogState(false);
      }
    },
   async  handleExclusionDateChange(value) {
      console.log(value)
          await this.$store.dispatch("Accounting/cardFixedAssets/getSingleExclusion" , {
      id: this.$route.params.id,
      // send any date from fixedAssetsDetailsList records 
      exclusionDate : new Date(value).toISOString()
    });
    },
  },
  watch: {
    exclusionDetails: {
      handler(val) {
        this.form = { ...val };
      },
      deep: true
    },
    form: {
      handler(val) {
        this.setExclusionRecord({
          ...val,
          execlusionAccID: val.execlusionAccID?.split("---")[0],
          bankFundAccID: val.bankFundAccID?.split("---")[0]
        });
      },
      deep: true
    }
  }
};
</script>
