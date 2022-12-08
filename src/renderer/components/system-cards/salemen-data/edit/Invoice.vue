<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="18" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.code" disabled></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.accID">
                      <template slot="append">
                        <el-button @click="openAccountTree(true)">
                          <i class="el-icon-search"></i>
                        </el-button>
                      </template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("telephone") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.phone" class="" />
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
                    <span>{{ $t("delegate-box") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.salesManFund" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobile") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.mobile" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("address") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.address" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("saleman-type") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      placeholder=""
                      v-model="form.salesManType"
                    >
                      <el-option
                        :label="$t('typeSalesmen.internal')"
                        :value="0"
                      >
                      </el-option>
                      <el-option
                        :label="$t('typeSalesmen.external')"
                        :value="1"
                      >
                      </el-option>
                      <el-option
                        :label="$t('typeSalesmen.cooperational')"
                        :value="2"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :md="18" class="px-15-lg mt-40">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="text-center">
                    <span class="color-green"
                      >- {{ $t("delegate-commission") }} -</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("commission-type") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      v-model="form.commissionType"
                      class="width-full"
                      placeholder=""
                    >
                      <el-option
                        :label="$t('commissionTypes.profitsOfSales')"
                        :value="1"
                      ></el-option>
                      <el-option
                        :label="$t('commissionTypes.virtualSales')"
                        :value="0"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("monthly-sales") }}</span>
                  </td>
                  <td class="input-padding">
                    <span class="d-flex nestedLabel">
                      <el-input v-model="form.monthlySalesTarget" />
                      <td class="popup-label">
                        <span>{{ $t("sales-percentage") }}</span>
                      </td>
                      <el-input v-model="form.monthlySalesRatio"> </el-input>
                      <el-button
                        class="btn-dark-blue"
                        style="float: left; padding: 0 4px !important"
                        >%</el-button
                      >
                    </span>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("monthly-sales") }}</span>
                  </td>
                  <td class="input-padding">
                    <span class="d-flex nestedLabel">
                      <el-input v-model="form.monthlyIncomeTarget" />
                      <td class="popup-label">
                        <span>{{ $t("revenues-percentage") }}</span>
                      </td>
                      <el-input v-model="form.monthlyIncomeRatio"> </el-input>
                      <el-button
                        class="btn-dark-blue"
                        style="float: left; padding: 0 4px !important"
                        >%</el-button
                      >
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>

      <!-- add delegate type -->

      <!-- start accountingtree  -->
      <accountingtree @node-selected="selectAccount" />
      <!-- end accountingtree  -->
    </section>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Accountingtree
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        fax: "",
        accID: "",
        salesManFund: "",
        mobile: "",
        address: "",
        salesManType: "",
        monthlySalesTarget: "",
        monthlySalesRatio: "",
        monthlyIncomeTarget: "",
        monthlyIncomeRatio: "",
        commissionType: "",
        code: ""
      },
      dialogTableVisible: false
    };
  },
  computed: {
    ...mapState({
      singleRecordDetails: state =>
        state.systemCards.salesmenData.singleRecordDetails
    })
  },
  watch: {
    singleRecordDetails(newVal) {
      this.form = { ...newVal };
      console.log(this.form);
    },
    form: {
      handler(newVal) {
        this.setRecordDetails({ ...newVal, id: this.$route.params.id });
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "systemCards/salesmenData/setRecordDetails"
    }),
    selectAccount(state) {
      console.log("test");
    },
    openAccountTree(state) {
      this.$store.dispatch(`accountingTree/getChildren`, 0);
      this.$store.commit("accountingTree/updateDialogState", state);
    }
  }
};
</script>
<style scoped lang="scss">
.nestedLabel {
  .popup-label {
    margin-right: 0px;

    [dir="rtl"] & {
      margin-right: 20px;
      margin-left: 0;
    }
    span {
      line-height: 2;
    }
    @media only screen and (max-width: 742px) {
      margin: 0 !important;
      span {
        font-size: 14px;
      }
    }
  }

  .input-label {
    padding: 10px 2px;
    margin-right: 10px;

    @media only screen and (max-width: 742px) {
      margin: 0 !important;
    }

    width: 20% !important;
  }

  .el-input {
    width: 35%;
    margin-left: 2px;
    margin-right: 2px;
    @media only screen and (max-width: 742px) {
      margin: 0 !important;
    }
  }
}

.popup-fixed-asset {
  margin-right: 10px;
  width: 65%;
}
@media (max-width: 768px) {
  .popup-fixed-asset {
    width: 100%;
  }
}
</style>