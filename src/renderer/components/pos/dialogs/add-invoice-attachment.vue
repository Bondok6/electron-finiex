<template>
    <el-dialog class="pd-0-dialog" title=" " :visible.sync="showDialog" width="70%">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>

      <span>
        <el-container
          class="mt-1 mb-1 pos-container orders-table" 
        >
          <el-table
            :data="searchTable"
            style="width: 100%"
            border
            max-height="250"
           >
            <el-table-column
              align="center"
              prop="id"
              :label="$t('id')"
              width="40"
            />
            <el-table-column
              align="center"
              prop="attachment_name_note"
              :label="$t('attachment-name-note')"
            />
            <el-table-column
              align="center"
              prop="quantity"
              :label="$t('quantity')"
            />    
            <el-table-column
              align="center"
              prop="category"
              :label="$t('category')"
            />        
          </el-table>
        </el-container>
      </span>

      <div class="mt-4 width-full d-flex justify-center">
        <el-button class="btn-pastal-blue px-3 mx-1">
          {{$t("list-attachment-note")}}
        </el-button>

        <el-button class="btn-pastal-red px-3 mx-1" @click="closeDialog()">
          {{$t("back-exit")}}
        </el-button>
      </div>
    </el-dialog>
</template>


<script>
export default {
  name: "SalesInvoices",

  data: function () {
    return {
      searchTable: [
        {
          id: "-",
          attachement_name_note: "",
          quantity: "",
          category: "",
        },
        {
          id: "-",
          attachement_name_note: "",
          quantity: "",
          category: "",
        },
        {
          id: "-",
          attachement_name_note: "",
          quantity: "",
          category: "",
        },
        {
          id: "-",
          attachement_name_note: "",
          quantity: "",
          category: "",
        },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/addInvoiceAttachment/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/addInvoiceAttachment/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.addInvoiceAttachment.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.cancel-btn {
  position: absolute;
  top: 0;
  color: black;
  font-size: x-large;
  cursor: pointer;
  padding: 0 20px;
}
</style>