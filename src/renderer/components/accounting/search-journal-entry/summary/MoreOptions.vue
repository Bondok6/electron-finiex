<template>
  <el-dialog :visible.sync="dialog" width="70%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-form
          class="invoice-form width-full"
          label-position="top"
          :model="form"
        >
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="12" :md="6" :lg="4">
              <el-form-item :label="$t('movement-type')">
                <el-select :placeholder="$t('all')" v-model="form.MvTypeID" ref="firstInput">
                  <el-option value="" label="بدون"></el-option>
                  <el-option
                    v-for="typeMove in movementTypesList"
                    :key="typeMove.mddCode"
                    :value="typeMove.mddCode"
                    :label="typeMove.mddname"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="6" :lg="4">
              <el-form-item :label="$t('from-registration-number')">
                <el-input v-model="form.MvcodFrom" class="number"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="6" :lg="5">
              <el-form-item :label="$t('from-no-entry-type')">
                <el-input v-model="form.MSbCodFrom" class="number"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="6" :lg="4">
              <el-form-item :label="$t('constraint-type')">
                <el-select v-model="form.MvGdTypeID">
                  <el-option :label="$t('all')" value="" ></el-option>
                  <el-option
                    v-for="gaidType in gaidTypesList"
                    :key="gaidType.mddvalueNo"
                    :value="gaidType.mddvalueNo"
                    :label="gaidType.mddname"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="6" :lg="4">
              <el-form-item :label="$t('cost-center')">
                <el-select v-model="form.CstCntrID">
                  <el-option :label="$t('without')" value=""></el-option>
                  <el-option
                    v-for="costCenter in costCentersList"
                    :key="costCenter.mdcodeId"
                    :value="costCenter.mdcodeId"
                    :label="costCenter.mname"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('registeration-status')">
                <el-select v-model="form.gaidStatus">
                  <el-option label="متساوي" :value="0"></el-option>
                  <el-option label="غير متساوي" :value="1"></el-option>
                  <el-option label="غير صحيح" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('to-registration-number')">
                <el-input v-model="form.MvcodTo" class="number"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('to-registration-number-type')">
                <el-input v-model="form.MSbCodTo" class="number"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('statement')">
                <el-input v-model="form.statement"> </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('document-number')">
                <el-input v-model="form.DocNo" class="number"> </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('amount')">
                <el-input v-model="form.amount" class="number"> </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('order-by')">
                <el-select v-model="form.orderby">
                  <el-option label="رقم القيد" value="MoveCode"></el-option>
                  <el-option label="تاريخ القيد" value="DateGr"></el-option>
                  <el-option label="مبلغ القيد" value="Amount"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('comparison-helper')">
                <el-select v-model="form.Cmpr">
                  <el-option label="اكبر من" value="0"></el-option>
                  <el-option label="اصغر من " value="1"></el-option>
                  <el-option label="متساوي" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="5" :lg="4">
              <el-form-item :label="$t('account-type')">
                <el-select v-model="form.AccType">
                  <el-option label="دائن" value="0"></el-option>
                  <el-option label="مدين" value="1"></el-option>
                  <el-option label="دائن ومدين" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button class="btn-cyan-light px-4-lg" @click="confirmDailog()">{{
        $t("agree")
      }}</el-button>
            <el-button class="btn-cyan-light px-4-lg" @click="resetOptions()">{{
        $t("reset")
      }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        DocNo: "",
        MvTypeID: "", // نوع الحركه,'
        MvcodFrom: "", // رقم االقيد من
        MvcodTo: "", // رقم االقيد الي,
        CstCntrID: "", //مركز التكلفة,
        MvGdTypeID: "", // نوع التقييد,
        gaidStatus: "",
        //أرقام نوع القيد
        MSbCodFrom: "",
        MSbCodTo: "",
        statement: "",
        amount: "",
        orderby: "",
        Cmpr: "",
        AccType: ""
      }
    };
  },
  computed: {
    dialog: {
      set(state) {

        return this.$store.commit(
          "Accounting/accountingDailyJournal/updateDialogState",
          state
        );
      },

      get() {
        if (this.$store.state.Accounting.accountingDailyJournal.dialogStatus) {
          this.$store.dispatch("lists/getMovementTypesList");
          this.$store.dispatch("lists/getCostCentersList");
          this.$store.dispatch("lists/getGaidTypesList");
          this.$nextTick(()=>{

            this.$refs.firstInput.focus();
          })
        }
        return this.$store.state.Accounting.accountingDailyJournal.dialogStatus;
      }
    },
    ...mapState({
      movementTypesList: state => state.lists.movementTypesList,
      costCentersList: state => state.lists.costCentersList,
      gaidTypesList: state => state.lists.gaidTypesList
    })
  },
  methods: {
    ...mapMutations({
      setAdvancedOptions: "Accounting/accountingDailyJournal/setAdvancedOptions"
    }),
    confirmDailog() {
      this.dialog = false;
      this.setAdvancedOptions({ ...this.form });
    },
    resetOptions(){
      this.form = {

      } ;
      this.setAdvancedOptions({ });
    }
  },
  destroy() {
    this.setAdvancedOptions({});
  }
};
</script>

<style></style>
