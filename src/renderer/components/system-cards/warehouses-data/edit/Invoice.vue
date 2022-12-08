<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" >
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("warehouse-No") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="pr-append" v-model="form.search">
                      <el-button slot="append" @click="openDialogOne(true)"
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
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("responsible-person") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("address") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("telephone") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobile") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("fax") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="d-flex justify-center" >
          <div class="inline-button-container mt-4">
            <div>
              <el-button class="width-full"
              @click="form.main_warehouse = !form.main_warehouse"
              :class="[form.main_warehouse ? 'btn-dark-grey' : 'btn-red']"
              >
                <span>{{ $t("main-warehouse-branch") }}</span>
              </el-button>
            </div>
            <div class="branches-card mt-3 width-full">
              <div class="px-2">
                <el-checkbox class="padding-label">{{
                  $t("branch-1")
                }}</el-checkbox>
              </div>
              <div class="px-2">
                <el-checkbox class="padding-label">{{
                  $t("branch-2")
                }}</el-checkbox>
              </div>
              <div class="px-2">
                <el-checkbox class="padding-label">{{
                  $t("branch-3")
                }}</el-checkbox>
              </div>
            </div>
          </div>
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
  components: {
    Accountingtree
  },
  data() {
    return {
      form: {
        name: "1",
        region: "1",
        date1: "1",
        search: "1",
        date2: "1",
        delivery: false,
        type: [],
        resource: "1",
        desc: "1",
        main_warehouse : 1
      },
      dialogOne: false
    };
  },
  methods: {
    openDialogOne(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    }
  }
};
</script>
