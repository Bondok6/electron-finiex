<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <el-row class="justify-center text-center width-full px-2">
              <el-col :xs="24" :sm="9" :md="24" :lg="8">
                <label style="color: #21798d"
                  >- {{ $t("basic-information") }} -</label
                >
              </el-col>
            </el-row>
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("client-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model.number="form.code"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      class=""
                      v-model="form.accID"
                    >
                      <template slot="append">
                        <el-button
                          class="mb-1 btn-cyan-light px-4-lg"
                          @click="openAccountTree(true)"
                        ><i class="el-icon-search"></i>
                        </el-button>
                      </template>
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("client-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.name"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("responsible-person") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.supervisor"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("post-box") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.mailNo"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobilephone") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.mobile"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mail") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.email"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="width-full"
                      v-model.number="form.salesManID"
                      :placeholder="$t('search')"
                    >
                      <el-option
                        v-for="item in salesMenList"
                        :key="item.accId"
                        :value="item.accId"
                        :label="item.salName"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-nature") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      :placeholder="$t('all')"
                      v-model.number="form.accountNature"
                      class="width-full"
                    >
                      <el-option :label="$t('credit')" :value="0"></el-option>
                      <el-option :label="$t('debit') + '/' + $t('credit')" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top" class="mt-3">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("client-category") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="width-full"
                      v-model.number="form.customerGroupID"
                      :placeholder="$t('search')"
                      :loading="loading"
                      :remote-method="remoteMethod"
                      filterable
                      remote
                    >
                      <el-option
                        v-for="item in customerGroup"
                        :key="item.id"
                        :value="item.id"
                        :label="item.name"
                      >


                      </el-option>
                    </el-select>


                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("customer-type") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      :placeholder="$t('all')"
                      v-model.number="form.customerType"
                      class="width-full"
                    >
                      <!--  // TODO  language-->
                      <el-option label="محلي " :value="0"></el-option>
                      <el-option label="خارجي" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("phone") }}</span>
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
                    <span>{{ $t("post-code") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model.number="form.zipCodeType" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("bar-code-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.barCode" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("client-price") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model.number="form.price" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("discount-percentage") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input
                      class="babyblue-color placeHolderDialog"
                      v-model.number="form.discount"
                    >
                      <template slot="append">
                        <span
                          class="mb-1"
                          style="background: #97dada; font-size: 20px"
                          >%
                        </span>
                      </template>
                    </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <accountingtree
        @node-selected="selectAccount"
      />
    </section>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";

import {mapState , mapMutations}  from "vuex";

export default {
  components: {
    Accountingtree,
  },
  data() {
    return {
      form: {
        "code": "",
        "accID": "",
        "name": "",
        "supervisor": "",
        "mailNo": "",
        "mobile": "",
        "email": "",
        "salesManID": "",
        "accountNature": "",
        "customerGroupID": '',
        "customerType": '',
        "phone": "",
        "fax": "",
        "zipCodeType": '',
        "barCode": "",
        "price": '',
        "discount": '',
      },
      loading : false,
      salesMenList : []
    };
  },
  computed:{
    ...mapState({
      singleRecordDetails : state => state.customerManagement.customer.singleRecordDetails,
      customerGroup  : state => state.customerManagement.globalList.customerGroup,

    })
  },
  created () {
    this.$store.dispatch("lists/getSalesMenList").then((data) => {
      this.salesMenList = data
    });
    this.$store.dispatch("customerManagement/customer/fetchMaxCode").then(res => {
      console.log(res)
      this.form.code = res.data.data;
    }).catch(err => {
      this.$message.error(err.response.data.message);
    });
  },
  methods:{

    ...mapMutations({
      updateDialogState: "accountingTree/updateDialogState",
      setRecordDetails : "customerManagement/customer/setRecordDetails"
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
    remoteMethod(query) {
      this.loading = true;
      this.$store.dispatch("customerManagement/globalList/fetchCustomerGroup" , query).then((data) => {
        this.loading = false;
      });
    },
  },
  watch: {
    singleRecordDetails : {
      handler({code,accID, name,supervisor,mailNo,
                mobile,
                email,
                salesManID,
                accountNature,
                customerGroupID,
                customerType,
                phone,
                fax,
                zipCodeType,
                barCode,
                price,
                discount,
                accName
              }){
        this.form = {
          code,
          accID : accID + "---" + accName ,
          name,
          supervisor,
          mailNo,
          mobile,
          email,
          salesManID,
          accountNature,
          customerGroupID,
          customerType,
          phone,
          fax,
          zipCodeType,
          barCode,
          price,
          discount,
        }

      },
      deep : true
    },
    form: {
      handler(newValue) {
        // deep clone by spread operator
        this.setRecordDetails({
          ...newValue,
          id : this.$route.params.id ,
          accID: newValue.accID?.split("---")[0]
        });
      },
      deep: true
    }
  }

};
</script>
