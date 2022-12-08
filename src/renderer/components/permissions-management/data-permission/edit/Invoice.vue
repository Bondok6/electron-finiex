<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
           <span  class="d-flex justify-start popup-label-text pt-8">-- {{ $t("data-permission") }} --</span>
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("user-number") }}</span>
                  </td>
                  <td class="input-padding">

                    <el-input v-model="form.name"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("user-name") }}</span>
                  </td>
                  <td  class="input-padding">
                    <el-input class="pr-append" v-model="form.region">
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("password") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input type="password" class="" v-model="form.date1"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("confirm-password") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input type="password" class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                 <tr>
                  <td class="popup-label">
                    <span>{{ $t("user-information") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.date2"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("user-status") }}</span>
                  </td>
                 <td class=" input-padding">
                    <el-select
                      placeholder="نــــشط"
                      v-model="form.item_number"
                      class="width-full placeHolderDialog"
                    >
                     

                      <el-option :label="$t('internal')" :value="2"></el-option>
                      <el-option :label="$t('external')" :value="3"></el-option>
                    </el-select>
                  </td>    
                 </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-name") }}</span>
                  </td>
                  <td class=" input-padding">
                    <el-select
                      placeholder="Abdel Rahman"
                      v-model="form.item_number"
                      class="width-full placeHolderDialog"
                    >
                      <el-option :label="$t('internal')" :value="2"></el-option>
                      <el-option :label="$t('external')" :value="3"></el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
              <span class="d-flex justify-start popup-label-text pt-4">-- {{ $t("allowed-discount") }} --</span>
            <table style="width: 100%;">
              <tbody>
              
                  <tr>
                  <td class="popup-label">
                    <span>{{ $t("cash-money") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      class="babyblue-color placeHolderDialog "
                      v-model="account_number"
                    >
                  <template slot="append">
                     <el-button
                        class="mb-1 btn-cyan-light px-4-lg"
                        
                        ><i class="fal fa-percentage"></i>
                      </el-button>
                      </template>
                    </el-input>
                  </td>
                </tr>
                  <tr>
                  <td class="popup-label">
                    <span>{{ $t("okay") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      class="babyblue-color placeHolderDialog "
                      v-model="account_number"
                    >
                  <template slot="append">
                     <el-button
                        class="mb-1 btn-cyan-light px-4-lg"
                        
                        ><i class="fal fa-percentage"></i>
                      </el-button>
                      </template>
                    </el-input>
                  </td>
                </tr>
                </tbody>
              </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg pb-2 d-flex justify-end">
            <img
            src="@/assets/images/man_face.jpg"
            alt="avatar"
            width="200"
            height="auto"
            class=" mt-4"
            />
            </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg pb-2 inline-block justify-end">
           <span class="popup-label-text d-flex justify-start">-- {{ $t("import-permissions") }} --</span>
                  <table class="pt-2 p-bottom" style="width: 100%;">
              <tbody>
                               <tr>
                  <td class="popup-label">
                    <span>{{ $t("user-name") }}</span>
                  </td>
                 <td class=" input-padding">
                    <el-select
                      placeholder="بدون"
                      v-model="form.item_number"
                      class="width-full placeHolderDialog"
                    >
                      <el-option :label="$t('internal')" :value="2"></el-option>
                      <el-option :label="$t('external')" :value="3"></el-option>
                    </el-select>
                  </td>
                </tr>
                </tbody>
              </table>
                <span class="popup-label-text-special">-- {{ $t("time-limit-for-password-prompt") }} --</span>
              <table class="pb-22 pt-2" style="width: 100%;">
              <tbody>
               
                  <tr>
                  <td class="popup-label">
                    <span>{{ $t("duration") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      class="babyblue-color placeHolderDialog "
                      v-model="account_number"
                    >
                  <template slot="append">
                     <el-button
                        class="mb-1 btn-cyan-light px-4-lg"
                        
                        ><span>{{ $t('miniute') }}</span>
                      </el-button>
                      </template>
                    </el-input>
                  </td>
                </tr>
                </tbody>
              </table>
              <span class="popup-label-text d-flex justify-start">-- {{ $t("powers") }} --</span>
              <table style="width: 100%;">
              <tbody>
               
                  <tr>
                  <td class="popup-label">
                    <span>{{ $t("user-name") }}</span>
                  </td>
                 <td class=" input-padding">
                    <el-select
                      placeholder="الرجاء التحديد"
                      v-model="form.item_number"
                      class="width-full placeHolderDialog"
                    >
                      <el-option
                        :label="$t('add')"
                        :value="1"
                        class="addSelect"
                      >
                        
                          <el-button @click="additionalChoice = true" class="width-full"
                            >{{ $t("add") }} <i class="el-icon-plus mx-1"></i
                          ></el-button>
                      </el-option>
                      <el-option :label="$t('data-entry')" :value="2"></el-option>
                      <el-option :label="$t('sales-only')" :value="3"></el-option>
                    </el-select>
                  </td>
                </tr>
                </tbody>
              </table>
            </el-col>

      </el-row>
              <el-dialog :visible.sync="additionalChoice" width="70%" >
      <div >
        <section
          class="mb-0 box-shadow px-2 py-3 invoice-table container "
          style="border-radius: 10px"
        >
          <el-row>
            <el-col :xs="24" :md="18" class="px-15-lg">
              <el-form label-position="top">
                <table style="width: 100%">
                  <tbody>
                  <tr>
                      <td class="popup-label">
                        <span>{{ $t("group-number") }}</span>
                      </td>
                      <td class="input-padding">
                        <el-input class="" v-model="form.date2"> </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                         <span>{{ $t("group-name") }}</span>
                      </td>
                      <td class="input-padding">
                         <el-input class="" v-model="form.date2"> </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                     <span>{{ $t("group-status") }}</span>
                      </td>
                      <td class="input-padding">
                      <el-input class="dialogRedInput" v-model="form.active"> </el-input>
                      </td>
                    </tr>

                   
                  </tbody>
                </table>
              </el-form>
            </el-col>
          </el-row>
        </section>
      <span slot="footer" class="dialog-footer invoice-summary">
        <div
          class="
          d-flex
            justify-center
            mt-2
            action-buttons-nonGrown
            align-center align-baseline
          "
        >
          <NuxtLink :to="localePath('/files/permissions-management/data-permission/edit')">
            <el-button  @click="additionalChoice = false" size="mini" class="mb-1 btn-blue">{{
              $t("save-f5")
            }}</el-button>
          </NuxtLink>
          <el-button  @click="additionalChoice = false" size="mini" class="mb-1 btn-red">{{
            $t("delete-f8")
          }}</el-button>

          <NuxtLink :to="localePath('/files/permissions-management/data-permission/edit')">
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
    </el-dialog>

       <!-- start accountingtree  -->
      <accountingtree />
      <!-- end accountingtree  -->
    </section>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
  components : {
    Accountingtree
  },
   data() {
     return {
       form: {
        name: "10000",
        region: "Islam Yasser",
        date1: "1111111111",
        search: "111111111",
        date2: "",
        active:"نشط",
        delivery: false,
        type: [],
        resource: "1",
        desc: "1",
       
      },
       account_number:"",
      dialogOne: false,
       additionalChoice: false,
     }
   },
   methods: {
      openDialogOne(state){
        this.$store.commit(
          "accountingtree/updateDialogState",
          state
        );
      },
  }
}
</script>
