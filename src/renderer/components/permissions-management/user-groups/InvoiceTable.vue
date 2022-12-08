<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      stripe
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="39" />
      <el-table-column
        align="center"
        prop="user_number"
        :label="$t('group-number')"
      >
         <template>
          <button
            @click="additionalChoice = true"
            style="background: transparent; border: none"
          >
          <span>1</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="user_name"
        :label="$t('group-name')"
      >
      </el-table-column>
    </el-table>
    <accountingtree />
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
                          <template>
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
                          </template>
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
                class="mb-1 btn-blue ml-02"
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
  </el-container>
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
        search: "Mark مارك",
        date2: "1",
        active: 1,
        delivery: false,
        type: [],
        resource: "1",
        desc: "1",
      },
      tableData: [
        {
          id: "1",
          user_number: " 1",
          user_name: "بدون",
        },
        {
          id: "2",
          user_number: "2 ",
          user_name: " بدون",
        },
        {
          id: "3",
          user_number: " 3",
          user_name: "بدون",
        },
        {
          id: "4",
          user_number: " 4",
          user_name: "بدون ",
        },
        {
          id: "5",
          user_number: " 5",
          user_name: "بدون",
        },
        {
          id: "6",
          user_number: " 6",
          user_name: "بدون",
        },
        {
          id: "7",
          user_number: " 7",
          user_name: "بدون",
        },
        {
          id: "8",
          user_number: " 8",
          user_name: "بدون ",
        },
        {
          id: "9",
          user_number: "9",
          user_name: " بدون",
        },
      ],
      additionalChoice: false,
    };
  },
  methods: {
    openDialogOne(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    },
  },
};
</script>

