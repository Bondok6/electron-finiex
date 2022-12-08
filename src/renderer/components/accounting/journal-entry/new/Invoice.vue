<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form  class="invoice-form width-full" label-position="top" :model="form"  :rules="
    {
      gaidDate: [
        { required: true, message: 'Please pick a date', trigger: 'change'  , type:'date' }
      ]
   
    }
  ">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('registeration-number')">
            <el-input class="bl-none" v-model.number="form.gaidID" disabled> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('registeration-date')" prop="gaidDate">
            <el-date-picker
              type="date"
              placeholder="yyyy/MM/dd"
              format="yyyy/MM/dd"
              v-model="form.gaidDate"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('registeration-type-number')">
            <el-input
              class="bl-none"
              v-model="form.gaidTypeNumber"
              :disabled="true"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('registeration-type')">
            <el-select v-model="form.giadType" @change="handleGaidTypeChange()">
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
                <NuxtLink :to="localePath('/accounting/accounts-cardddd/new')">
                  <el-button class="width-full">
                    {{ $t("add-new-account") }}
                  </el-button>
                </NuxtLink>
              </el-option>
              <el-option
                :label="$t('transfer-document-to-an-entry')"
                :value="4"
                @click="dialogOne = true"
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
                @click="attachFile = true"
              >
                <el-button class="width-full" @click="attachFile = true">
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
                    placeholder="2020/10/15"
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
                    placeholder="2020/10/15"
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
    <el-dialog title=" " :visible.sync="attachFile" width="70%">
      <el-container class="d-block box-shadow pb-2">
        <el-tabs
          class="border-none invoice-tab"
          type="border-card"
          stretch
          style="margin: 0"
        >
          <el-tab-pane :label="$t('archive-new-files')" style="margin: 10px">
            <span>
              <el-row :gutter="6" class="width-full">
                <div class="text-center mt-40">
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" class="px-15-lg">
                    <el-button class="btn-cyan-light">{{
                      $t("drag-document-photo-file")
                    }}</el-button>
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
                  :lg="6"
                  class="px-15-lg mt-2"
                >
                  <el-form class="" label-position="top" :model="form">
                    <el-form-item class="">
                      <label>{{ $t("document-title") }}</label>
                      <el-input> </el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
              </el-row>
            </span>
            <span>
              <div class="width-full mt-4">
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
              </div>
            </span>
          </el-tab-pane>
          <el-tab-pane :label="$t('display-archive-files')">
            <el-container class="container mt-0 mb-0 invoice-table">
              <el-table
                :data="tableTwo"
                style="width: 100%"
                stripe
                border
                max-height="250"
                class="invoice-table"
              >
                <el-table-column
                  align="center"
                  prop="document_title"
                  :label="$t('document-title')"
                />
                <el-table-column
                  align="center"
                  prop="addition_date"
                  :label="$t('addition-date')"
                />
                <el-table-column
                  align="center"
                  prop="display_document"
                  :label="$t('display-document')"
                />
              </el-table>
            </el-container>
          </el-tab-pane>
        </el-tabs>
      </el-container>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light px-4-lg" @click="attachFile = false">{{
          $t("ok")
        }}</el-button>
      </span>
    </el-dialog>
    <!-- end attachFile dialog -->
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        gaidID: 0,
        gaidDate: new Date(),
        gaidTypeNumber: 0,
        giadType: 0
        // journal_entries: 1,
        // warehouse_name: 1
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
      attachFile: false
    };
  },
  computed: {
    ...mapState({
      listOfGaidTypes: state => state.lists.gaidTypesList,
      suggestJournalDetails: state =>
        state.Accounting.accountingDailyJournal.suggestJournalDetails
    })
  },
  created() {
    // get suggest gaid information depend on gaid type => to fill inputs
    // gaid type default value is 0
    this.suggestGaidInformation(this.form.giadType);
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/accountingDailyJournal/setRecordDetails"
    }),
    async suggestGaidInformation(gaidId = 0) {
      await this.$store.dispatch(
        "Accounting/accountingDailyJournal/getSuggestJournalDetails",
        {
          gaid_type_id: gaidId
        }
      );
      this.form.gaidTypeNumber = this.suggestJournalDetails.gaidTypeNumber;
      this.form.gaidID = this.suggestJournalDetails.gaidID;
    },
    handleGaidTypeChange() {
      this.suggestGaidInformation(this.form.giadType);
    }
  },
  watch: {
    form: {
      handler: function(newValue, oldValue) {
        this.setRecordDetails({
          moveTypeID: newValue.gaidTypeNumber,
          gaidType: newValue.giadType,
          moveCode: newValue.gaidID,
          documentDate: new Date(newValue.gaidDate).toISOString()
        });
      },
      deep: true
    }
  }
};
</script>
