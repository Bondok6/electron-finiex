<template>
<div>


    <el-container class="container box-shadow ma-4 mb-0 px-2 py-3 d-flex justify-center">
    <section>
     <section
          class="mb-0 box-shadow px-2 py-3 invoice-table container "
          style="border-radius: 10px;padding:4pc;width:50%"
        >
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <table style="width: 100%">
                  <tbody>
                    <tr>
                      <td class="popup-label-width">
                        <span>{{ $t("user-name") }}</span>
                      </td>
                      <td class="input-padding">
                        <el-input class="border-Width" v-model="form.date2"> </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label-width">
                        <span>{{ $t("new-password") }}</span>
                      </td>
                      <td class="input-padding">
                        <el-input class="border-Width" v-model="form.search"> </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label-width">
                        <span>{{ $t("confirm-the-new-password") }}</span>
                      </td>
                      <td class="input-padding">
                        <el-input class="border-Width" v-model="form.search"> </el-input>
                      </td>
                    </tr>
                  </tbody>
                </table>

        <!-- end dialog -->
    </el-form>
    </section>
     <span slot="footer" class="dialog-footer ">
          <div
            class="
              d-flex
              justify-center
              mt-4
              action-buttons-nonGrown
              align-center align-baseline
            "
          >
      <el-button size="mini" class="mb-1 ml-2 btn-cyan" type="primary">{{ $t('ok') }}</el-button>
      <el-button size="mini"  class="mb-1 btn-cyan">{{ $t('save-f5') }}</el-button>

             
          </div>
        </span>
        </section>
  </el-container>

  </div>
</template>
<script>
export default {
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

