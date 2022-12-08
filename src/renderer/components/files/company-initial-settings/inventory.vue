<template>
  <div>
    <div class="card-tab mb-2 width-full">
      <div class="horizontal-line-white">
          <span class="ma-4">{{ $t("account-number") }}</span>
          <span class="ma-4">{{ $t("account-name") }}</span>
        </div>
    </div>
    <section class="border-none mb-0 px-2-lg">
      <el-row>
        <el-col :xs="24" :md="12" :lg="18" style="padding:10px;" class="border-form">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("cash-sales") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("forward-sales") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("cash-purchases") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("forward-purchases") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("cash-sales-return") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("forward-sales-returns") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("cash-purchase-returns") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("forward-purchase-returns") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("cash-sales-invoices") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("reservation-revenue") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("sales-cost") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class=""> 
                        <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <accountingtree />
      <!-- end accountingtree  -->
    </section>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
    name : "purchases-and-invoice",
    components : {
      Accountingtree
    },
    data : function() {
        return {
            form : {
                name : ""
            }
        }
    },
    methods: {
    openDialogOne(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    }
  }
}; 
</script>
<style lang="scss" scoped>
.card-tab {
  background-color: #ecf9fc;
  text-align: center;
  text-align: -webkit-center;
  padding: 10px;
  position: relative;
}
.border-form {
    [dir='rtl'] & {
        border-left : 1px solid #707070;
    }
    [dir='ltr'] & {
        border-right : 1px solid #707070;
    }
}
.horizontal-line-white {
  width: 600px;
  border-bottom: 1px solid #9a9fa0;
  text-align: center;
  line-height: 0.1em;
  position: relative;
  // margin: 10px 0 20px;
}
.horizontal-line-white span {
  background: #ecf9fc;
  padding: 0 10px;
  color: #21798d;
}
</style>
