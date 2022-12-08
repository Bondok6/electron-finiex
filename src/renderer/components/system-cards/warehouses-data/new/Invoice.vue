<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row justify="between" :gutter="20">
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("warehouse-No") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.code" disabled> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("account-number") }}</span>
                </td>
                <td class="input-padding">
                  <el-input v-model="form.accID" disabled>
                    <el-button slot="append" @click="openAccountTree(true)"
                    ><i class="el-icon-search"></i
                    ></el-button>
                  </el-input>
                </td>
              </tr>

              <tr>
                <td class="popup-label">
                  <span>{{ $t("warehouse-name") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.name" :disabled="form.accID != '0'"> </el-input>
                </td>
              </tr>

              <tr>
                <td class="popup-label">
                  <span>{{ $t("responsible-person") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.adminName"> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("address") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.addressAr"> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("telephone") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.phone"> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("mobile") }}</span>
                </td>
                <td class="input-padding">
                  <el-input class="" v-model="form.mobile"> </el-input>
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
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="10" >
          <el-form label-position="top">
                  <div class="popup-label p-2 mb-1">Branches</div>
                <span class="input-padding">
                  <el-select
                    class="width-full"
                    :value="defaultBranchsID"
                    @input="selectBranch($event)"
                    multiple
                    filterable
                    remotes
                    reserve-keyword
                    placeholder="Search"
                    :remote-method="remoteMethodFetchBranches"
                    :loading="loading"
                  >
                    <el-option
                      v-for="item in branchList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </span>
            <div class="popup-label p-2 mt-1 mb-1">Branche Default</div>
            <span class="input-padding">
              <el-radio-group v-model="radio">
              <el-radio
           v-for="item in form.setDefaultBranches"
           :label="item.brancheId"
           :key="item.brancheId" >
                {{item.name +'--'+ item.brancheId}}

              </el-radio>
</el-radio-group>
                </span>
          </el-form>
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <accountingtree @node-selected="selectAccount" />
      <!-- end accountingtree  -->
    </section>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
import { mapMutations , mapState} from "vuex";
export default {
  components: {
    Accountingtree
  },
  computed:{
    ...mapState({
      branchList : state => state.systemCards.globalList.branchesList
    })
  },
  data() {
    return {
      loading : false,
      form: {
        code: "",
        accID: "0",
        name: "",
        nameEn: "",
        adminName: "",
        addressAr: "",
        phone: "",
        mobile: "",
        fax: "",
        setDefaultBranches: [],
      },
        radio : "",
      defaultBranchsID :[]
    };
  },
  created() {
      this.$store.dispatch("systemCards/warehouseData/suggestCode")
        .then(({ data }) => (this.form.code = data.data)).catch(err => {
        this.$notify.error({
        message: err.response.data.message
      });
    });
  },
  methods: {
    selectDefault(ev) {
      // console.log(ev)
      this.form.setDefaultBranches = this.form.setDefaultBranches.map(el=>{
       return el.brancheId == this.isDefaultID  ? {...el , default : true} : {...el ,default :false}
      })
    },
    selectBranch(event){
      console.log(event)
      this.defaultBranchsID = [...event];
      let branchsSelected = []
          this.defaultBranchsID.forEach((BranchID)=>{
             this.branchList.forEach(({id , name })=>{
            if(BranchID == id){
              branchsSelected.push({brancheId : id  , name , default :false})
            }
          })
            this.form.setDefaultBranches = [...branchsSelected]
            console.log(  this.form.setDefaultBranches )
      })

    },
   async remoteMethodFetchBranches(query){
      this.loading = true;
      try {
        await this.$store.dispatch(
          "systemCards/globalList/fetchBranchesList",
          {
            SearchString: query,
          }
        );
        this.loading = false;
      } catch (e) {
          console.log(e.response.data.message)
      }
    },
    ...mapMutations({
      setRecordDetails: "systemCards/warehouseData/setRecordDetails"
    }),
    openAccountTree(state) {
      this.$store.dispatch(`accountingTree/getChildren`, 0);
      this.$store.commit("accountingTree/updateDialogState", state);
    },
    selectAccount(node) {
      (this.form.accID = node.accID);
      this.form.name = node.label;
    }
  },
  watch: {
    form: {
      handler(newVal) {
        this.setRecordDetails({ ...newVal });
      },
      deep: true
    }
  }
};
</script>
<style>
.el-select .el-tag__close.el-icon-close {
  background-color: #C0C4CC;
  right: 6px !important;
}

</style>
