<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%" >
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("supplier-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      v-model.number="form.code"
                      disabled
                    >
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      class="babyblue-color"
                      v-model="form.accID"
                    >
                  <template slot="append">
                     <el-button
                        class="mb-1 btn-cyan-light px-4-lg"
                         @click="openAccountTree(true)"
                        
                        ><i class="el-icon-search"></i
                      >
                      </el-button>
                      </template>
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("supplier-client-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      v-model="form.name"
                    >
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("responsible-person") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      v-model="form.supervisor"
                    >
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("post-box") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.mailNo"  
                    >
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobilephone") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      v-model="form.mobile"
                      
                    >
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("email") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      v-model="form.email"
                      
                    >
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("post-code") }}</span>
                  </td>
                  <td class=" input-padding">
                    <el-select
                      
                      v-model="form.zipCodeType"
                      class="width-full"
                    >
                     

                      <el-option :label="$t('internal')" :value="2"></el-option>
                      <el-option :label="$t('external')" :value="3"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("Supplier-Type") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      v-model.number="form.providerType"
                      class="width-full"
                    >
                      <el-option :label="$t('internal')" :value="2"></el-option>
                      <el-option :label="$t('external')" :value="3"></el-option>
                    </el-select>
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
                    <span>{{ $t("telephone-only") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      v-model="form.phone"
                    >
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("fax") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.fax"
                    >
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-nature") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      v-model="form.accountNature"
                      class="width-full"
                    >
                      <el-option :label="$t('main')" :value="2"></el-option>
                      <el-option :label="$t('sub')" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
          <!-- account-guide dialgog -->
          <!-- <el-dialog title="" :visible.sync="accountGuide" width="50%">
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
          end account guide dialog
          start copy accounts popup
          <el-dialog title=" " :visible.sync="copyAccounts" width="50%">
            <span>
              <el-container class="d-block box-shadow mb-0 px-2 py-2">
                <el-tree
                  class="label-checkbox-padding"
                  :data="copyData"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps"
                >
                </el-tree>
              </el-container>
            </span>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="btn-cyan-light px-4-lg"
                @click="copyAccounts = false"
                >{{ $t("copy-selected-accounts-to-current-branch") }}</el-button
              >
            </span>
          </el-dialog> -->
          <!-- end copy accounts popup -->
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <accountingtree @node-selected="selectAccount"/>
      <!-- end accountingtree  -->
    </section>
        <!-- <el-dialog :visible.sync="additionalChoice" width="70%">
      <div >
        <section
          class="mb-0 box-shadow px-2 py-3 invoice-table container"
          style="border-radius: 10px"
        >
          <el-row>
            <el-col :xs="24" :md="18" class="px-15-lg">
              <el-form label-position="top">
                <table style="width: 100%">
                  <tbody>
                  <tr>
                      <td class="popup-label">
                        <span>{{ $t("category-number") }}</span>
                      </td>
                      <td>
                        <el-input class="" v-model="form.search"> </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                         <span>{{ $t("classification-name") }}</span>
                      </td>
                      <td>
                         <el-input class="" v-model="form.search"> </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                     <span>{{ $t("category-type") }}</span>
                      </td>
                      <td>
                      <el-input class="" v-model="form.search"> </el-input>
                      </td>
                    </tr>

                   
                  </tbody>
                </table>
              </el-form>
            </el-col>
          </el-row>
        </section>
      <span slot="footer" class="dialog-footer">
        <div
          class="
          d-flex
            justify-center
            mt-2
            action-buttons-nonGrown
            align-center align-baseline
          "
        >
          <NuxtLink :to="localePath('/suppliers-management/supplier-data/edit')">
            <el-button  @click="additionalChoice = false" size="mini" class="mb-1 btn-blue">{{
              $t("save-f5")
            }}</el-button>
          </NuxtLink>
          <el-button  @click="additionalChoice = false" size="mini" class="mb-1 btn-red">{{
            $t("delete-f8")
          }}</el-button>

          <NuxtLink :to="localePath('/suppliers-management/supplier-data/edit')">
            <el-button  @click="additionalChoice = false" size="mini" class="mb-1 btn-violet">{{
              $t("back-f6")
            }}</el-button>
          </NuxtLink>
          <el-button  @click="additionalChoice = false" size="mini" class="mb-1 btn-grey">{{
            $t("print-f4")
          }}</el-button>
        </div>
      </span>
      </div>
    </el-dialog> -->

  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
import { mapMutations }  from "vuex";

export default {
  components: {
    Accountingtree,
  },
  data() {
    return {
      form: {
        code: "",
        accID: "",
        name: "",
        supervisor: "",
        mailNo: "",
        email: "",
        mobile: "",
        zipCodeType: null,
        providerType:null,
        phone: "",
        fax: "",
        accountNature: null,
      },
    };
  },
  created() {
    this.$store.dispatch("suppliersManagement/supplierData/fetchMaxCode").then(res => {
      this.form.code = res.data.data;
    }).catch(err => {
      this.$message.error(err.response.data.message);
    });
  },
  methods:{
    ...mapMutations({
      updateDialogState: "accountingTree/updateDialogState",
      setRecordDetails : "suppliersManagement/supplierData/setRecordDetails"
    }),
    selectAccount(data) {
     this.form.accID = data.accID + "---" + data.label;
    },
   async openAccountTree(state){
      try{
        // get root
      await this.$store.dispatch(`accountingTree/getChildren`, 0);
      this.updateDialogState(state);
      }catch (e) {
          this.$message.error(e.response.data.message);
      }
    },
  },
  watch: {
    form :{
      handler(newval) {
        this.setRecordDetails({
          ...newval,
          accID: newval.accID?.split("---")[0],
        })
      },
      deep: true,
    }
  }
};
</script>
