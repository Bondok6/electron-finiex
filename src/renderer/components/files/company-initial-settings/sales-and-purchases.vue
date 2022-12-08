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
                    <span>{{ $t("purchasing-expenses") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class="">
                      <el-button slot="append" @click="companyInitial = true"
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

      <!-- start dialog -->
      <el-dialog :visible.sync="companyInitial" width="70%">
        <section
          class="mb-0 box-shadow px-2 py-3 invoice-table container"
          style="border-radius: 10px"
        >
        <div class="mb-2">
          <div class="horizontal-line-white-dialog">
          <span class="ma-4">{{ $t("account-number") }}</span>
          <span class="ma-4">{{ $t("account-name") }}</span>
        </div>
        </div>
          <el-row>
            <el-col :xs="24" :md="24">
              <el-form label-position="top">
                <table style="width: 100%">
                  <tbody>
                    <tr>
                      <td class="input-padding">
                        <el-input v-model="form.name" :placeholder="$t('المشتريات النقدية 1')">
                          <el-button slot="append"
                            ><i class="el-icon-search"></i
                          ></el-button>
                        </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="input-padding">
                        <el-input v-model="form.name" :placeholder="$t('المشتريات الاجلة 1')">
                          <el-button slot="append"
                            ><i class="el-icon-search"></i
                          ></el-button>
                        </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="input-padding">
                        <el-input v-model="form.name" :placeholder="$t('مردود المبيعات النقدية 1')">
                          <el-button slot="append"
                            ><i class="el-icon-search"></i
                          ></el-button>
                        </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="input-padding">
                        <el-input v-model="form.name" :placeholder="$t('مردود المبيعات الآجله 1')">
                          <el-button slot="append"
                            ><i class="el-icon-search"></i
                          ></el-button>
                        </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="input-padding">
                        <el-input v-model="form.name" :placeholder="$t('مردود المبيعات الآجله 1')">
                          <el-button slot="append"
                            ><i class="el-icon-search"></i
                          ></el-button>
                        </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="input-padding">
                        <el-input v-model="form.name" :placeholder="$t('مردود المبيعات الآجله 1')">
                          <el-button slot="append"
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
        </section>
        <span slot="footer" class="dialog-footer">
          <el-button
            class="btn-cyan-light px-4-lg"
            @click="companyInitial = false"
            >{{ $t("ok") }}</el-button
          >
        </span>
      </el-dialog>
      <!-- end dialog -->
            <!-- start accountingtree  -->
      <accountingtree />
      <!-- end accountingtree  -->
    </section>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
  name: "purchases-and-invoice",
  components: {
    Accountingtree
  },
  data: function() {
    return {
      form: {
        name: ""
      },
      companyInitial: false
    };
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
  text-align: -webkit-center;
  padding: 10px;
  position: relative;
}
.border-form {
  [dir="rtl"] & {
    border-left: 1px solid #707070;
  }
  [dir="ltr"] & {
    border-right: 1px solid #707070;
  }
}
.horizontal-line-white {
  width: 600px;
  border-bottom: 1px solid #9a9fa0;
  line-height: 0.1em;
  position: relative;
  // margin: 10px 0 20px;
}
.horizontal-line-white span {
  background: #ecf9fc;
  padding: 0 10px;
  color: #21798d;
}
.horizontal-line-white-dialog {
  width: 500px;
  border-bottom: 1px solid #9a9fa0;
  text-align: center;
  line-height: 0.1em;
  // margin: 10px 0 20px;
}
.horizontal-line-white-dialog span{
  background: #fff;
  padding: 0 10px;
  color: #21798d;
  text-align: center;
}
</style>
