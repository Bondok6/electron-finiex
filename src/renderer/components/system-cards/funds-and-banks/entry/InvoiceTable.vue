<template>
  <div>
    <el-container class="container ma-4 mt-0 mb-0 invoice-table">
      <el-table :data="data" style="width: 100%" stripe border max-height="750">
        <el-table-column
          align="center"
          type="index"
          width="40"
          :label="$t('id')"
        />
        <el-table-column align="center" prop="code" :label="$t('box-number')">
          <template slot-scope="scope">
            <button
              @click="openEditDialog(scope.row.id)"
              style="background: transparent; border: none"
            >
              <span>{{ scope.row.code }}</span>
            </button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" :label="$t('box-name')" />
        <el-table-column
          align="center"
          prop="accID"
          :label="$t('account-number')"
        />
      </el-table>
    </el-container>
    <accountingtree @node-selected="accountSelected" v-if="editDialog"/>

  <el-dialog :visible.sync="editDialog" width="70%">
      <div>
        <div class="box-shadow px-2 container invoice-table">
          <el-container class="container ma-4 mb-0 px-2 py-3">
            <el-form
              class="invoice-form width-full container"
              label-position="top"
              :model="form"
            >
              <el-row :gutter="6" class="width-full">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item
                    :label="$t('number-box-bank')"
                    class="text-large"
                  >
                    <el-input v-model="form.bankFundCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
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
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('name-box-bank')" class="text-large">
                    <el-input v-model="form.bankFundName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('payment-type')" class="text-large">
                    <el-select v-model.number="form.payType" @change="changePayType">
                      <!--   TODO: translation lang-->
                      <el-option
                        label = "صندوق / نقدي"
                        :value = "0"
                      ></el-option>
                      <el-option
                        label = "بنك / شبكة"
                        :value = "1"
                      ></el-option>
                      <el-option
                        label = "صندوق / إستبدال"
                        :value = "2"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                  <div
                    class="inline-button-container d-flex flex-direction-column"
                  >
                    <div class="vertical-buttons mt-0">
                      <el-form-item>
                        <el-button
                          class="float-left mt-point5"
                          @click="
                       form.showBankUpfront=
                              !form.showBankUpfront
                          "
                          :class="[
                       form.showBankUpfront
                              ? 'btn-dark-grey'
                              : 'btn-red',
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
                        disabled
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
                      <custom-upload  @file-selected="fileSelected"
                                      :row="scope.row"
                                      :showPreview="false"
                                      :accept="'image/*'">

                          <span  style="font-size: 12px">
                                {{ $t("attach-file") }}
                           </span>
                      </custom-upload>
                      <a :href="scope.row.imageUrl" v-if="scope.row.imageUrl" target="_blank" > Image Link</a>
                    </template>
                  </el-table-column>
                </el-table>
              </el-container>
            </el-col>
          </el-row>
        </div>
        <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
          <el-button
            size="mini"
            class="mb-1 btn-blue"
            @click="edit"
            >{{ $t("save-f5") }}</el-button
          >
          <el-button
            size="mini"
            class="mb-1 btn-red"
            @click="deleteRecord"
            >{{ $t("delete-f8") }}</el-button
          >
          <el-button
            size="mini"
            class="mb-1 btn-violet"
            @click="dialogTableVisible = false"
            >{{ $t("back-f6") }}</el-button
          >
          <el-button
            size="mini"
            class="mb-1 btn-grey"
            @click="dialogTableVisible = false"
            >{{ $t("print-f4") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CustomUpload from "~/components/static/customUpload"
import accountingtree from "~/components/dialogs/accounting-tree";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    accountingtree , CustomUpload
  },
  name: "invoice",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data: function() {
    return {
      form : {
        accID: '' ,
        payType: '' ,
        bankFundName : '',
        bankFundCode : '',
        showBankUpfront : true
      },
      cards: [],
      formatTable:{
        cardName: "",
        commissionPercentage: "",
        amountLimit: "",
        imageUrl: "",
        fixedCommission: "",
      },
      editDialog: false
    };
  },
  computed: {
    ...mapState({
      searchParams: state =>state.systemCards.banksAndFunds.searchParams,
      bankCommisions : state=> state.systemCards.globalList.bankCommisions
    })
  },
  methods: {
    ...mapMutations({
      openDialogAccountTree: "accountingTree/updateDialogState"
    }),
    changePayType(selected){
      if (selected == 1 && this.cards.length == 0) {
        this.$store
          .dispatch("systemCards/globalList/getListBankCommisions")
          .then(res => {
            this.cards = res.map(el => {
              return {
                ...this.formatTable,
                cardName: el.cardName + "---" + el.id
              };
            });
          });
      }
    },
    openAccountTree(state) {
      this.$store.dispatch(`accountingTree/getChildren`, 0);
      this.openDialogAccountTree(state);
    },
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/banksAndFunds/fetchSingleRecord", { id
        })
        .then(({data}) => {
          let  {cards , ...form} = data.data;
          this.form = {...form , payType:  +form.payType};
          if(this.form.payType == 1 && cards.length == 0){
            this.cards  = this.$store
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
          }else{
            this.cards = cards.map((el)=>({imageUrl: "", ...el}))
          }
          this.editDialog = true;
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        });
    },
        deleteRecord() {
      this.$store
        .dispatch("systemCards/banksAndFunds/delete", {
          id: this.form.id
        })
        .then(_ => {
          this.$message.success("deleted Successfully");
          this.$store.dispatch(
            "systemCards/banksAndFunds/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          console.log(err)
          this.$message.error(err.response.data.message);
        })
        .finally(() => {
          this.editDialog = false;

        });
    },
    edit() {
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
      this.$store
        .dispatch("systemCards/banksAndFunds/update", payload)
        .then(res => {
          this.$message.success("Updated Successfully");
          this.$store.dispatch(
            "systemCards/banksAndFunds/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        })
        .finally(() => {
          this.editDialog = false;
        });
    },
    accountSelected(accountSelected) {
      this.form.accID = accountSelected.accID;
    },
    fileSelected(imageSelected , _,row){
      let payload = new FormData()
      payload.append("file" , imageSelected)
      this.$axios.post("general/files/upload" , payload).then(({data})=>{
        row.imageUrl = data.data
      })
    },
  }
};
</script>
<style scoped>
.vertical-buttons {
  margin-top: -10px !important;
}
</style>
