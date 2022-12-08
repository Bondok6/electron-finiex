<template>
  <div class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline">
    <el-button  @click="additionalChoice = true" size="mini" class="mb-1" type="primary">{{ $t('new-f2') }}</el-button>
    <el-button size="mini"  class="mb-1 btn-grey">{{ $t('print-f4') }}</el-button>
    <el-dialog :visible.sync="additionalChoice" width="70%">
      <div>
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
                        <el-input class="" v-model="form.search"> </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("group-status") }}</span>
                      </td>
                      <td class="input-padding">
                       <el-form-item class="formItem">
                              <el-button
                                @click="form.active = !form.active"
                                :class="[
                                  form.active 
                                  ? 'btn-red' 
                                  : 'btn-dark-grey',
                                ]"
                              >
                                <span v-if="form.active">
                                  {{ $t("active") }}
                                </span>

                                <span v-else>
                                  {{ $t("not-active") }}
                                </span>
                              </el-button>
                            </el-form-item>
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
              mt-4
              action-buttons-nonGrown
              align-center align-baseline
            "
          >
              <el-button
                @click="additionalChoice = false"
                size="mini"
                class="mb-1 btn-blue"
                >{{ $t("save-f5") }}</el-button
              >
            <el-button
              @click="additionalChoice = false"
              size="mini"
              class="mb-1 btn-red"
              >{{ $t("delete-f8") }}</el-button
            >

              <el-button
                @click="additionalChoice = false"
                size="mini"
                class="mb-1 btn-violet"
                >{{ $t("back-f6") }}</el-button
              >
            <el-button
              @click="additionalChoice = false"
              size="mini"
              class="mb-1 btn-grey"
              >{{ $t("print-f4") }}</el-button
            >
          </div>
        </span>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
  components: {
    Accountingtree,
  },

  name: "invoice",

  data: function () {
    return {
      form: {
        name: "10000",
        region: "Islam Yasser",
        date1: "1111111111",
        search: "",
        date2: "",
        active: 1,
        delivery: false,
        type: [],
        resource: "1",
        desc: "1",
      },
      additionalChoice: false,
    };
  },
};
</script>


