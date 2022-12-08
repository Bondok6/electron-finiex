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
                    <span>{{ $t("branch-Code") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.code" disabled> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.accID" disabled>
                      <el-button slot="append" @click="openTreeDialog(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("branch-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.name"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("nameEng") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.nameEn"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("admin-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.adminName"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("address-en") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.addressEn"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("address-ar") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.addressAr"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("phone") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.phone"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobile") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.mobile"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("fax") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.fax" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("branch-status") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select v-model="form.branchState" class="width-full">
                      <el-option :label="$t('active')" :value="0"> </el-option>

                      <el-option :label="$t('not-active')" :value="1">
                      </el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>

        <el-col :xs="24" :md="12" class="px-15-lg">
          <table style="width: 100%">
            <tbody>
              <tr>
                <el-button
                  class="width-full"
                  @click="
                    optinalForm.readBranchData = !optinalForm.readBranchData
                  "
                  :class="[
                    !optinalForm.readBranchData ? 'btn-dark-grey' : 'btn-red'
                  ]"
                >
                  <span>{{ $t("read-branch-data") }}</span>
                </el-button>
              </tr>
              <!--  may be disable -->

              <tr>
                <td class="popup-label">
                  <span>{{ $t("facility-name") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.companyNameAr"
                    class=""
                    :disabled="!optinalForm.readBranchData"
                  />
                </td>
              </tr>

              <tr>
                <td class="popup-label">
                  <span>{{ $t("facility-name-en") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.companyNameEn"
                    class=""
                    :disabled="!optinalForm.readBranchData"
                  />
                </td>
              </tr>
              <tr>
                <td
                  class="
                   popup-label
                  "
                >
                  <span>{{ $t("bank-account-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.bankAccountNumber"
                    :disabled="!optinalForm.readBranchData"
                  />
                </td>
              </tr>
              <!-- may dis -->
              <tr>
                <td
                  class="
                    popup-label
                  "
                >
                  <span>{{ $t("zip-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.zipNumber"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
              <!-- may dis -->
              <tr>
                <td class="popup-label">
                  <span>{{ $t("zip-code") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.zipCode"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
              <!-- may dis -->
              <tr>
                <td
                  class="
                   popup-label
                  "
                >
                  <span>{{ $t("additional-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.additionalNumber"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
              <!-- may disable -->
              <tr>
                <td class="popup-label">
                  <span>{{ $t("email") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.email"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("tax-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.taxNumber"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("country") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.countryId"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("city") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.cityId"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("trade-record") }}</span>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="optinalForm.tradeRecord"
                    :disabled="!optinalForm.readBranchData"
                    class=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <accountingtree @node-selected="selectAccount" />
      <!-- end accountingtree  -->
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations , mapGetters } from "vuex";
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
  components: {
    Accountingtree
  },
  data() {
    return {
      isAdditionalInputs: false,
      form: {},
      optinalForm: {}
    };
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "systemCards/branchData/setRecordDetails"
    }),
    async openTreeDialog(state) {
      try {
        await this.$store.dispatch(`accountingTree/getChildren`, 0);
        this.$store.commit("accountingTree/updateDialogState", state);
      } catch (e) {
        console.log(e);
      }
    },
    selectAccount(node) {
      this.form.accID = node.accID;
    },
    checkDataComplated(objectChecker) {
      let dataNotComplated = false;
      if (this.getTaxInformation.taxType && objectChecker.readBranchData) {
        if (!Object.values(this.optinalForm).every(el => el)) {
          dataNotComplated = true;
        }
      }
      return dataNotComplated;
    }
  },
  computed: {
    ...mapGetters(["getTaxInformation"]),

    ...mapState({
      singleRecordDetails: state =>
        state.systemCards.branchData.singleRecordDetails
    })
  },
  watch: {
    singleRecordDetails({
      code,
      accID,
      name,
      nameEn,
      adminName,
      addressAr,
      addressEn,
      phone,
      mobile,
      fax,
      branchState,
      email,
      taxNumber,
      countryId,
      cityId,
      companyNameEn,
      companyNameAr,
      bankAccountNumber,
      zipNumber,
      zipCode,
      tradeRecord,
      readBranchData,
      branchInfo,
      AdditionalNumber
    }) {
      this.form = {
        code,
        accID,
        name,
        nameEn,
        adminName,
        addressAr,
        addressEn,
        phone,
        mobile,
        fax,
        branchState
      };
      this.optinalForm = {
        email,
        taxNumber,
        countryId,
        cityId,
        companyNameEn,
        companyNameAr,
        bankAccountNumber,
        zipNumber,
        zipCode,
        tradeRecord,
        readBranchData,
        branchInfo,
        AdditionalNumber
      };
    },
    form: {
      handler(newVal) {
        this.setRecordDetails({
          ...newVal,
          ...this.optinalForm,
          dataNotComplated: this.checkDataComplated(this.optinalForm),
          id: this.$route.params.id
        });
      },
      deep: true
    },
    optinalForm: {
      handler(newVal) {
        this.setRecordDetails({
          ...this.form,
          ...newVal,
          dataNotComplated: this.checkDataComplated(this.optinalForm),
          id: this.$route.params.id
        });
      },
      deep: true
    }
  }
};
</script>
