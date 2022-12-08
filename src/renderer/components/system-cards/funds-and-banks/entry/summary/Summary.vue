<template>
  <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
    <div
      class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
    >
      <el-button
        size="mini"
        class="mb-1"
        type="primary"
        @click="openCreateDialog"
        >{{ $t("new-f2") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
      <el-dialog :visible.sync="createDialog" width="70%">
        <div class="mb-8">
          <div class="box-shadow px-2 container invoice-table">
            <el-container class="container ma-4 mb-0 px-2 py-3">
              <el-form
                class="invoice-form width-full"
                label-position="top"
                :model="form"
              >
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="5" :lg="6">
                    <el-form-item
                      :label="$t('number-box-bank')"
                      class="text-large"
                    >
                      <el-input v-model="form.bankFundCode" disabled></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="6">
                    <el-form-item
                      :label="$t('account-number')"
                      class="text-large"
                    >
                      <el-input v-model="form.accID" disabled>
                        <el-button slot="append" @click="openAccountTree(true)"
                          ><i class="el-icon-search"></i
                        ></el-button>
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="5" :lg="6">
                    <el-form-item
                      :label="$t('name-box-bank')"
                      class="text-large"
                    >
                      <el-input v-model="form.bankFundName"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="6">
                    <el-form-item
                      :label="$t('payment-type')"
                      class="text-large"
                    >
                      <el-select
                        v-model.number="form.payType"
                        @change="changePayType"
                      >
                        <!--   TODO: translation lang-->
                        <el-option label="صندوق / نقدي" :value="0"></el-option>
                        <el-option label="بنك / شبكة" :value="1"></el-option>
                        <el-option
                          label="صندوق / إستبدال"
                          :value="2"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="19" :lg="12" :xl="12">
                    <div
                      class="inline-button-container d-flex flex-direction-column"
                    >
                      <div class="vertical-buttons">
                        <el-form-item>
                          <el-button
                            class="float-left mt-point5"
                            @click="
                              form.showBankUpfront = !form.showBankUpfront
                            "
                            :class="[
                              form.showBankUpfront ? 'btn-dark-grey' : 'btn-red'
                            ]"
                          >
                            <span>
                              {{ $t("show-bank-payment-interface") }}
                            </span>
                          </el-button>
                        </el-form-item>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-form>
            </el-container>
            <el-row v-if="this.form.payType == 1">
              <el-col :xs="24" :sm="24" :md="18" :lg="18">
                <el-container
                  class="container ma-4 mt-0 mb-0 invoice-table editable-table activated"
                >
                  <el-table
                    :data="cards"
                    style="width: 100%"
                    stripe
                    border
                    max-height="250"
                    id="mytab1"
                  >
                    <el-table-column
                      align="center"
                      prop="item_number"
                      width="40"
                      :label="$t('id')"
                    >
                      <template slot-scope="scope">
                        <el-input
                          ref="id"
                          size="small"
                          style="text-align: center"
                          disabled
                          type="index"
                        ></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      prop="card_type"
                      :label="$t('card-name')"
                    >
                      <template slot-scope="scope">
                        <el-input
                          size="small"
                          style="text-align: center"
                          v-model="scope.row.cardName"
                        ></el-input>
                      </template>
                    </el-table-column>

                    <el-table-column
                      align="center"
                      prop="commition_percentage"
                      :label="$t('commition-percentage')"
                    >
                      <template slot-scope="scope">
                        <el-input
                          size="small"
                          style="text-align: center"
                          v-model.number="scope.row.commissionPercentage"
                        ></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      prop="amount_limit"
                      :label="$t('amount-limit')"
                    >
                      <template slot-scope="scope">
                        <el-input
                          size="small"
                          style="text-align: center"
                          v-model.number="scope.row.amountLimit"
                        ></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      prop="static_commition"
                      :label="$t('static-commition')"
                    >
                      <template slot-scope="scope">
                        <el-input
                          size="small"
                          style="text-align: center"
                          v-model.number="scope.row.fixedCommission"
                        ></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      prop="listing"
                      :label="$t('listing')"
                    >
                      <template slot-scope="scope">
                        <custom-upload
                          @file-selected="fileSelected"
                          :row="scope.row"
                          :showPreview="false"
                          :accept="'image/*'"
                        >
                          <span style="font-size: 12px">
                            {{ $t("attach-file") }}
                          </span>
                        </custom-upload>
                        <a
                          :href="scope.row.imageUrl"
                          v-if="scope.row.imageUrl"
                          target="_blank"
                        >
                          Image Link</a
                        >
                      </template>
                    </el-table-column>
                  </el-table>
                </el-container>
              </el-col>
            </el-row>
          </div>
          <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
            <el-button size="mini" class="mb-1 btn-blue" @click="create">{{
              $t("save-f5")
            }}</el-button>

            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="createDialog = false"
              >{{ $t("back-f6") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-grey"
              @click="createDialog = false"
              >{{ $t("print-f4") }}</el-button
            >
          </div>
        </div>
      </el-dialog>
      <accountingtree @node-selected="accountSelected" v-if="createDialog" />
    </div>
  </div>
</template>
<script>
import accountingtree from "~/components/dialogs/accounting-tree";
import { mapMutations, mapState } from "vuex";
import CustomUpload from "~/components/static/customUpload";
export default {
  name: "summary-section",
  components: {
    accountingtree,
    CustomUpload
  },
  data: function() {
    return {
      form: {
        accID: "",
        payType: "",
        bankFundName: "",
        bankFundCode: "",
        showBankUpfront: true
      },
      cards: [],
      formatTable: {
        cardName: "",
        commissionPercentage: "0",
        amountLimit: "0",
        imageUrl: "",
        fixedCommission: "0"
      },
      createDialog: false
    };
  },
  computed: {
    ...mapState({
      searchParams: state => state.systemCards.banksAndFunds.searchParams,
      bankCommisions: state => state.systemCards.globalList.bankCommisions
    })
  },
  methods: {
    changePayType(selected) {
      if (selected == 1) {
        this.$store
          .dispatch("systemCards/globalList/getListBankCommisions")
          .then(res => {
            console.log(res);
            this.cards = res.map(el => {
              return {
                ...this.formatTable,
                cardName: el.cardName + "---" + el.id
              };
            });
          });
      }
    },
    fileSelected(imageSelected, _, row) {
      let payload = new FormData();
      payload.append("file", imageSelected);
      this.$axios.post("general/files/upload", payload).then(({ data }) => {
        console.log(row)
        row.imageUrl = data.data;
      });
    },
    ...mapMutations({
      openDialogAccountTree: "accountingTree/updateDialogState"
    }),
    accountSelected(node) {
      this.form.accID = node.accID + "---" + node.label;
    },

    openAccountTree(state) {
      // get root Tree Account
      this.$store.dispatch(`accountingTree/getChildren`, 0);
      this.openDialogAccountTree(state);
    },
    async openCreateDialog() {
      this.createDialog = true;
      await Promise.all([
        this.$store
          .dispatch("systemCards/banksAndFunds/suggestCode")
          .then(({ data }) => (this.form.bankFundCode = data.data)),
        this.$store
          .dispatch("systemCards/banksAndFunds/maxAccId")
          .then(({ data }) => {(this.form.accID = String(data.data))

          })

      ]).catch(err => {
        this.$message.error(err.message);
      });
    },
    create() {
      let payload = {
        ...this.form,
        accID: this.form.accID.split("---")[0],
        cards:
          this.form.payType == 1
            ? this.cards.map(el => {
                return { ...el, cardName: el.cardName.split("---")[0] };
              })
            : []
      };
      console.log(payload);
      this.$store
        .dispatch("systemCards/banksAndFunds/create", payload)
        .then(() => {
          this.createDialog = false;
          this.$store.dispatch(
            "systemCards/banksAndFunds/fetchRecords",
            this.searchParams
          );
          this.$notify({
            title: "Success",
            message: "banksAndFunds  Created",
            type: "success"
          });
          this.$router.push("/system-cards/funds-and-banks");
          this.form =  {
            accID: "",
            payType: "",
            bankFundName: "",
            bankFundCode: "",
            showBankUpfront: true
          }
            this.cards  = []
        })
        .catch(err => {
          this.$notify.error({
            message: err.response.data.message
          });
        });
    }
  }
};
</script>
<style scoped>
.vertical-buttons {
  margin-top: -10px !important;
}
</style>
