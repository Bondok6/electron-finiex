<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('registeration-number')">
            <!-- Move code  === gaid Number -->
            <el-input class="bl-none" v-model="form.moveCode" disabled>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item
            :label="$t('registeration-date')"
            :readonly="recordIsReadonly"
          >
            <el-date-picker
              :disabled="recordIsReadonly"
              type="date"
              placeholder="2020/10/15"
              v-model="form.documentDate"
              format="yyyy/MM/dd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('registeration-type-number')">
            <el-input class="bl-none" v-model="form.moveTypeID" disabled>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('registeration-type')">
            <el-select
              v-model="form.gaidType"
              @change="handleGaidTypeChange()"
              :disabled="recordIsReadonly"
            >
              <el-option
                :label="type.mddname"
                :value="type.mddvalueNo"
                v-for="type in listOfGaidTypes"
                :key="type.mddcode"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="8" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="form.type"
              class="color-blue text-center placeHolderColor w-250 selectButton"
              :placeholder="$t('registeration-options')"
            >
              <el-option
                :label="$t('duplicate-the-current-entry')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("duplicate-the-current-entry") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('hide-cost-center')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("hide-cost-center") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('add-new-account')"
                :value="3"
                class="selectButton"
              >
                <NuxtLink :to="localePath('/accounting/accounts-card/new')">
                  <el-button class="width-full">
                    {{ $t("add-new-account") }}
                  </el-button>
                </NuxtLink>
              </el-option>
              <el-option
                :label="$t('transfer-document-to-an-entry')"
                :value="4"
                @click="dialogOne = true; "
                class="selectButton"
              >
                <el-button class="width-full" @click="dialogOne = true">
                  {{ $t("transfer-document-to-an-entry") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('attach-a-file')"
                :value="5"
                class="selectButton"
                @click="attachFileDialog = true"
              >
                <el-button class="width-full" @click="attachFileDialog = true;fetchFiles()">
                  {{ $t("attach-a-file") }}
                </el-button>
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <!-- start dialog -->
    <el-dialog title=" " :visible.sync="dialogOne" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item :label="$t('movement-type')">
                  <el-select v-model="form.comma">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item :label="$t('from-registration-number')">
                  <el-input v-model="form.journal_entries"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item :label="$t('from-date')">
                  <el-date-picker
                    type="date"
                    placeholder="2020-10-15"
                    v-model="form.date"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item :label="$t('constraint-type')">
                  <!-- <label>{{ $t("constraint-type") }}</label> -->
                  <el-select v-model="form.comma">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item :label="$t('to-registration-number')">
                  <el-input v-model="form.journal_entries"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item :label="$t('to-date')">
                  <el-date-picker
                    type="date"
                    placeholder="2020-10-15"
                    v-model="form.date"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <br />
          <el-container class="container mt-0 mb-0 invoice-table">
            <el-table
              :data="tableOne"
              style="width: 100%"
              stripe
              border
              max-height="250"
              class="invoice-table"
            >
              <el-table-column
                align="center"
                width="40"
                prop="item_number"
                :label="$t('id')"
              />
              <el-table-column
                align="center"
                prop="registeration_number"
                :label="$t('registeration-number')"
              />
              <el-table-column
                align="center"
                prop="registeration_type_number"
                :label="$t('registeration-type-number')"
              />
              <el-table-column
                align="center"
                prop="registeration_date"
                :label="$t('registeration-date')"
              />
              <el-table-column
                align="center"
                prop="amount"
                :label="$t('amount')"
              />
            </el-table>
          </el-container>

          <div class="container ma-4 py-2 mt-0 invoice-summary">
            <div class="mt-2 action-buttons-nonGrown ml-6">
              <el-button size="mini" class="mb-1 px-3" type="primary">{{
                $t("display")
              }}</el-button>
              <el-button size="mini" class="mb-1" type="warning">{{
                $t("print-pdf")
              }}</el-button>
            </div>
          </div>
        </el-container>
      </span>
    </el-dialog>
    <!-- end dialog -->
    <!-- start attachFile dialog -->
    <el-dialog
      title=" "
      :visible.sync="attachFileDialog"
      width="70%"
      @close="close"
    >
      <el-container class="d-block box-shadow pb-2">
        <el-tabs
          class="border-none invoice-tab"
          type="border-card"
          stretch
          style="margin: 0"
          @tab-click="handleTabClicked"
          v-model="tabPosition"
           
        >
          <el-tab-pane
            :label="$t('archive-new-files')"
            name="archive-new-files"
            style="margin: 10px"
            v-if="form.gaidType == 0"
          >
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
    <!-- end attachFile dialog -->
  </el-container>
</template>

<script>
import CustomUpload from "~/components/static/customUpload.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",
  components: {
    CustomUpload
  },
  data: function() {
    return {
      tabPosition: "archive-new-files",
      showProgress: false,
      showPreview: true,
      fileDetails: {
        file: "",
        Title: "",
        gaidID: this.$route.params.id
      },
      form: {
        moveCode: 0,
        moveTypeID: 0,
        gaidType: 0,
        documentDate: new Date()
      },
      tableOne: [
        {
          item_number: "-",
          registeration_number: "-",
          registeration_type_number: "-",
          registeration_date: "-",
          amount: "-"
        },
        {
          item_number: "-",
          registeration_number: "-",
          registeration_type_number: "-",
          registeration_date: "-",
          amount: "-"
        },
        {
          item_number: "-",
          registeration_number: "-",
          registeration_type_number: "-",
          registeration_date: "-",
          amount: "-"
        },
        {
          item_number: "-",
          registeration_number: "-",
          registeration_type_number: "-",
          registeration_date: "-",
          amount: "-"
        }
      ],
      tableTwo: [
        {
          document_title: "-",
          addition_date: "-",
          display_document: "-"
        },
        {
          document_title: "-",
          addition_date: "-",
          display_document: "-"
        },
        {
          document_title: "-",
          addition_date: "-",
          display_document: "-"
        },
        {
          document_title: "-",
          addition_date: "-",
          display_document: "-"
        },
        {
          document_title: "-",
          addition_date: "-",
          display_document: "-"
        }
      ],
      dialogOne: false,
      attachFileDialog: false,
      fileLink: ""
    };
  },
  computed: {
    ...mapState({
      listOfGaidTypes: state => state.lists.gaidTypesList,
      suggestJournalDetails: state =>
        state.Accounting.accountingDailyJournal.suggestJournalDetails,
      recordIsReadonly: state => state.Accounting.accountingDailyJournal.recordIsReadonly,
      singleRecordDetails: state =>
        state.Accounting.accountingDailyJournal.singleRecordDetails,
      filesList: state => state.General.files.filesList,
      uploadPercentage: state => state.General.files.uploadPercentage,
      gaidTypesForFiles: state => state.General.files.gaidTypesForFiles
    })
  },

  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/accountingDailyJournal/setRecordDetails",
      getSuggestJournalDetails:
        "Accounting/accountingDailyJournal/getSuggestJournalDetails",
      setUploadPercentage: "General/files/setUploadPercentage"
    }),
    handleGaidTypeChange() {
      // check if gaid type was initialy selected not Send requests To back
      let gaidTypeID = this.singleRecordDetails.gaidType;
      if (this.form.gaidType == gaidTypeID) {
        this.form.moveTypeID = this.singleRecordDetails.moveTypeID;
        return;
      }
      this.getJournalDetails(this.form.gaidType);
    },
    async getJournalDetails(gaidId = 0) {
      await this.$store.dispatch(
        "Accounting/accountingDailyJournal/getSuggestJournalDetails",
        {
          gaid_type_id: gaidId
        }
      );
      this.form.moveTypeID = this.suggestJournalDetails.gaidTypeNumber;
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
        .dispatch("General/files/attachGaidFile", this.fileDetails)
        .then(res => {
          if ((res.status = 201)) {
            this.$notify({
              title: "Success",
              message: this.$t("done-attach-a-file"),
              type: "success"
            });
            this.attachFileDialog = false;
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
    handleTabClicked() {
     this.fetchFiles()
    },
    fetchFiles(){
       if (this.tabPosition == "archive-files") {
        this.$store.dispatch("General/files/fetchGiadFiles", {
          generalType: this.singleRecordDetails.details[0].generalType,
          type:
            this.form.gaidType == 0
              ? this.gaidTypesForFiles.gaid
              : this.form.gaidType == 1
              ? this.gaidTypesForFiles.invoice
              : this.gaidTypesForFiles.voucher,
          code:
            this.form.gaidType == 0
              ? this.singleRecordDetails.moveCode
              : this.singleRecordDetails.details[0].documentID
        });
      }
    },
    deleteFile(id) {
       
      this.$store.dispatch("General/files/deleteFile", id);
    },
    close() {
      this.showProgress = false;
      this.showPreview = false;
      this.fileDetails = {
        file: "",
        title: "",
        gaidID: this.$route.params.id
      };
    }
  },
  watch: {
    singleRecordDetails: {
      handler: function(val) {
        this.form = {
          moveID: val.moveID,
          moveCode: val.moveCode,
          gaidType: val.gaidType,
          moveTypeID: val.moveTypeID,
          documentDate: new Date(val.documentDate)
        };
        this.tabPosition =
          this.form?.gaidType == 0 ? "archive-new-files" : "archive-files";
      }
    },
    form: {
      handler: function(newValue, oldValue) {
        this.setRecordDetails({
          moveID: newValue.moveID,
          moveTypeID: newValue.moveTypeID,
          gaidType: newValue.gaidType,
          documentDate: new Date(newValue.documentDate).toISOString()
        });
      },
      deep: true
    }
  }
};
</script>
