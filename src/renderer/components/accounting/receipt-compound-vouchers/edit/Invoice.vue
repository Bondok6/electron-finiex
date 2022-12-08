<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("bond-number") }}</label>
                    <el-input
                      class="text-color bl-none"
                      v-model.number="form.voucherCode"
                      disabled
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("bond-date") }}</label>
                    <el-date-picker
                      type="date"
                      placeholder="yyyy/MM/dd"
                      format="yyyy/MM/dd"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("box-bank") }}</label>
                    <el-select v-model="form.fromAccId" @change="getBalance">
                      <el-option
                        v-for="fund in banksAndFundsList"
                        :key="fund.maccId"
                        :value="fund.maccId"
                        :label="fund.mname"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("current-balance") }}</label>
                    <el-input v-model="form.balance" :readonly="true">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("details") }}</label>
                    <el-input
                      class="text-color bl-none"
                      v-model="form.voucherDetails"
                      placeholder=""
                      @input="form.details = form.voucherDetails"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("delegate-name") }}</label>
                    <el-select v-model="form.salesManCode">
                      <el-option :value="0" :label="$t('without')"> </el-option>

                      <el-option
                        v-for="salesMen in salesMenList"
                        :key="salesMen.salesManCode"
                        :value="salesMen.salesManCode"
                        :label="salesMen.salName + '---' + salesMen.accId"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("date-of-the-delegate-is-document") }}</label>
                    <el-date-picker
                      type="date"
                      placeholder="yyyy/MM/dd"
                      format="yyyy/MM/dd"
                      v-model="form.refDocDate"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{
                      $t("number-of-the-delegate-is-document")
                    }}</label>
                    <el-input v-model="form.refDocNo" placeholder="">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <!--  -->

        <el-col :xs="24" :sm="24" :md="6" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              class="color-blue text-center placeHolderColor w-250 selectButton"
              :placeholder="$t('additional-choices')"
              v-model="form.type"
            >
              <el-option
                :value="1"
                class="selectButton"
              >
                <NuxtLink :to="{ name: 'accounting-receipt-compound-vouchers-new___ar', params: { copying: $route.params.id } }">
                  <el-button class="width-full this-btn">
                    {{ $t("duplicate-the-current-arrest-warrant") }}
                  </el-button>
                </NuxtLink>
              </el-option>

              <el-option
                :value="5"
                class="selectButton"
                @click="attachFileDialog = true"
              >
                <el-button class="width-full" @click="attachFileDialog = true">
                  {{ $t("attach-a-file") }}
                </el-button>
              </el-option>
            </el-select>
          </div>
        </el-col>
        <!--  -->
        <!-- <el-col :xs="24" :sm="24" :md="6"> -->
        <!-- <div class="inline-button-container d-flex flex-direction-column"> -->
        <!-- <div class="spacer"></div> -->
        <!-- <div class="vertical-buttons">
              <el-form-item>
                <el-button class="btn-cyan-light">
                  <span>
                    {{ $t("duplicate-the-current-arrest-warrant") }}
                  </span>
                </el-button>
              </el-form-item>
            </div> -->
        <!-- </div> -->
        <!-- </el-col> -->
      </el-row>
    </el-form>
    <el-dialog title=" " :visible.sync="attachFileDialog" width="70%">
      <el-container class="d-block box-shadow pb-2">
        <el-tabs
          class="border-none invoice-tab"
          type="border-card"
          stretch
          style="margin: 0"
          @tab-click="handleTabClicked"
        >
          <el-tab-pane :label="$t('archive-new-files')" style="margin: 10px">
            <span>
              <el-row :gutter="6" class="width-full">
                <div class="text-center mt-40">
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" class="px-15-lg">
                      <custom-upload
                      @file-selected="fileSelected"
                      :showPreview="showPreview"
                    >
                      <span class="mx-2">
                        {{ $t("drag-document-photo-file") }}
                      </span>
                      <template #progress>
                        <el-progress
                          :percentage="uploadPercentage"
                          v-if="showProgress"
                        ></el-progress>
                      </template>

                      <!-- <template #preview="{file , fileLink}"> -->

                      <!-- </template> -->
                      <!-- </template> -->
                    </custom-upload>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" class="px-15-lg">
                    <el-button class="btn-cyan-light">{{
                      $t("scan-photo")
                    }}</el-button>
                  </el-col>
                </div>
              </el-row>
              <el-row :gutter="6" class="width-full">
                <el-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="10"
                  class="px-15-lg mt-2 d-flex"
                >
                  <span>{{ $t("document-title") }}</span>
                  <el-input v-model="fileDetails.Title"> </el-input>
                </el-col>
              </el-row>
            </span>
            <span>
              <!-- <div class="width-full mt-4">
                <el-form class="" label-position="top" :model="form">
                  <el-form-item class="form-item-with-right-label width-full">
                    <el-input
                      class="notes-input width-full"
                      type="textarea"
                      :rows="7"
                    >
                    </el-input>
                  </el-form-item>
                </el-form>
              </div> -->
            </span>
            <span class="mt-4">
              <el-button
                class="btn-cyan-light px-4-lg mt-2"
                @click="attachFile()"
                >{{ $t("ok") }}</el-button
              >
            </span>
          </el-tab-pane>
          <el-tab-pane
            :label="$t('display-archive-files')"
            name="archive-files"
          >
            <el-container class="container mt-0 mb-0 invoice-table">
              <el-table
                :data="filesList"
                style="width: 100%"
                stripe
                border
                max-height="250"
                class="invoice-table"
              >
                <el-table-column
                  align="center"
                  prop="title"
                  :label="$t('document-title')"
                />
                <el-table-column
                  align="center"
                  :label="$t('addition-date')"
                  prop="dateImages"
                />

                <el-table-column
                  align="center"
                  prop="display_document"
                  :label="$t('display-document')"
                  ><template slot-scope="scope">
                    <a :href="scope.row.imagePath" target="_blank">{{
                      $t("display-file")
                    }}</a>
                  </template>
                </el-table-column>
                <el-table-column align="center" width="60">
                  <template slot-scope="scope">
                    <el-popconfirm
                      icon="el-icon-info"
                      icon-color="red"
                      title="تأكيد حذف الصنف ؟"
                      @confirm="deleteFile(scope.row.id)"
                    >
                      <i
                        slot="reference"
                        class="setting-button danger-color el-icon-delete-solid"
                      ></i>
                    </el-popconfirm>
                  </template>
                </el-table-column>
              </el-table>
            </el-container>
            <span class="">
              <el-button
                class="mt-2 btn-cyan-light px-4-lg"
                @click="attachFileDialog = false"
                >{{ $t("ok") }}</el-button
              >
            </span>
          </el-tab-pane>
        </el-tabs>
      </el-container>
    </el-dialog>
  </el-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import CustomUpload from "~/components/static/customUpload.vue";

export default {
  name: "invoice",
  components: {
    CustomUpload
  },
  data: function() {
    return {
      attachFileDialog: false,
      showProgress: false,
      showPreview: true,
      fileDetails: {
        file: "",
        Title: "",
        voucherId: this.$route.params.id
      },
      form: {
        voucherCode: 0,
        date: new Date(),
        fromAccId: "", // الصندوق و البنوك
        details: "",
        voucherDetails: "",
        refDocNo: "", // رقم سند المندوب
        refDocDate: new Date(), // تاريخ سند المندوب
        salesManCode: 0, // اسم المندوبو
        balance: 0
      }
    };
  },
  computed: {
    ...mapState({
      singleRecordDetails: state =>
        state.Accounting.receiptCompoundVouchers.singleRecordDetails,
      banksAndFundsList: state => state.lists.banksAndFundsList,
      salesMenList: state => state.lists.salesMenList,
      banksAndFundsList: state => state.lists.banksAndFundsList,
      filesList: state => state.General.files.filesList,
      uploadPercentage: state => state.General.files.uploadPercentage
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/receiptCompoundVouchers/setRecordDetails",
      banksOrFundsSelected:
        "Accounting/receiptCompoundVouchers/banksOrFundsSelected",
           setUploadPercentage: "General/files/setUploadPercentage"
    }),
    getBalance() {
      // mnotes = 1 ==>  user select bank ==> on invioceTable (grid) -> Enable voucher type payment and banks list
      // mnote = 2  ==>  user select fund => on invioceTable (grid) -> Disable voucher type payment and banks list
       
       
      let BanksOrFund =
        this.banksAndFundsList.find(el => el.maccId === this.form.fromAccId)
          ?.mnotes ?? "1";
      if (BanksOrFund === "1") {
        this.banksOrFundsSelected("banks");
      } else {
        this.banksOrFundsSelected("funds");
      }

      this.$store
        .dispatch("Accounting/receiptCompoundVouchers/getBalance", {
          Id: this.form.fromAccId
        })
        .then(response => {
          let data = response.data.data;

          this.form.balance = data;
          this.form.balance = this.$convertToValidNumber(this.form.balance);

        })
        .catch(error => {
           
          this.$notify.error({
            title: "خطا",
            message: "حدث خطا اثناء جلب الرصيد"
          });
        });
    },
        attachFile() {
      if (this.fileDetails.file == "") {
        this.$message({
          message: "please-select-file",
          type: "warning"
        });
        return;
      }
      this.showProgress = true;
      this.setUploadPercentage(0);
      this.$store
        .dispatch("General/files/attachVoucherFile", this.fileDetails)
        .then(res => {
          if ((res.status = 201)) {
            this.$notify({
              title: "Success",
              message: this.$t("done-attach-a-file"),
              type: "success"
            });
            this.fileDetails = {
              file: "",
              Title: "",
              voucherId: this.$route.params.id
            };
            this.attachFileDialog = false;
            this.showProgress = false;
            this.showPreview = false;
          } else {
            this.$notify({
              title: "Error",
              message: this.$t("error-attach-a-file"),
              type: "error"
            });
          }
        });
    },
    fileSelected(file, fileLink) {
      this.showPreview = true;
      this.fileDetails.file = file;
      this.fileLink = fileLink;
    },
    handleTabClicked(tab) {
      if (tab.name == "archive-files") {
        this.$store.dispatch("General/files/fetchVoucherFiles", {
          voucherId: this.$route.params.id
        });
      }
    },
    deleteFile(id) {
       
      this.$store.dispatch("General/files/deleteFile", id);
    }
  },

  watch: {
    singleRecordDetails: {
      handler: function(val) {
        this.form = {
          // spared form which include default value that not get from server
          ...this.form,
          ...val,
          date: new Date(val.date),
          refDocDate: new Date(),
          details: val.voucherDetails
        };
        this.$nextTick(() => {
          this.getBalance();
        });
      },
      attachFile() {
        if (this.fileDetails.file == "") {
          this.$message({
            message: "please-select-file",
            type: "warning"
          });
          return;
        }
        this.showProgress = true;
        this.setUploadPercentage(0);
        this.$store
          .dispatch("Accounting/accountingDailyJournal/attachFile", this.fileDetails)
          .then(res => {
            if ((res.status = 201)) {
              this.$notify({
                title: "Success",
                message: this.$t("done-attach-a-file"),
                type: "success"
              });
              this.fileDetails = {
                file: "",
                title: "",
                gaidID: this.$route.params.id
              };
              this.attachFileDialog = false;
              this.showProgress = false;
              this.showPreview = false;
            } else {
              this.$notify({
                title: "Error",
                message: this.$t("error-attach-a-file"),
                type: "error"
              });
            }
          });
      },
      fileSelected(file, fileLink) {
        this.showPreview = true;
        this.fileDetails.file = file;
        this.fileLink = fileLink;
      },
      handleTabClicked(tab) {
        if (tab.name == "archive-files") {
          this.$store.dispatch("Accounting/accountingDailyJournal/fetchFiles", {
            gaidId: this.$route.params.id
          });
        }
      },
      deleteFile(id) {
         
        this.$store.dispatch("Accounting/accountingDailyJournal/deleteFile", id);
      }
    },
    form: {
      handler: function(newValue) {
         
        this.setRecordDetails({
          ...newValue,
          refDocDate: new Date().toISOString(),
          date: new Date(newValue.date).toISOString()
        });
      },
      deep: true
    }
  },

};
</script>
<style scoped>
.this-btn{
  margin: 0;
}
</style>
