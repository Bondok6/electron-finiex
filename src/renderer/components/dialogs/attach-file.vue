<template>
    <el-dialog title=" " :visible.sync="showDialog" width="70%">
      <span>
      <el-tabs class="border-none invoice-tab" type="border-card" stretch style="margin: 0;">
        <el-tab-pane :label="$t('archive-new-files')" style="margin: 10px;">
          <span >
            <el-row :gutter="6" class="width-full">
              <div class="text-center mt-40">
                <el-col :xs="24" :sm="24" :md="24" :lg="12" class="px-15-lg">
                  <el-button class="btn-cyan-light">{{
                    $t("drag-document-photo-file")
                  }}</el-button>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" class="px-15-lg">
                  <el-button class="btn-cyan-light">{{
                    $t("scan-photo")
                  }}</el-button>
                </el-col>
              </div>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="6" class="px-15-lg mt-2">
                <el-form class="" label-position="top">
                  <el-form-item class="">
                    <span>{{ $t("document-title") }}</span>
                    <el-input v-model="document_title"> </el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </span>
          <span>
            <div class="width-full mt-4">
              <el-form class="" label-position="top">
                <el-form-item class="form-item-with-right-label width-full">
                  <el-input class="notes-input width-full" type="textarea" :rows="7">
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </span>
        </el-tab-pane>
        <el-tab-pane :label="$t('display-archive-files')">
          <el-container class="container mt-0 mb-0 invoice-table">
            <el-table
              :data="documentTableData"
              style="width: 100%"
              stripe
              border
              max-height="250"
              class="invoice-table"
            >

              <el-table-column
                align="center"
                prop="document_title"
                :label="$t('document-title')"
              />
              <el-table-column
                align="center"
                prop="addition_date"
                :label="$t('addition-date')"
              />
              <el-table-column
                align="center"
                prop="display_document"
                :label="$t('display-document')"
              />
            </el-table>
          </el-container>
        </el-tab-pane>
      </el-tabs>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light px-4-lg" @click="closeDialog()">{{
          $t("ok")
        }}</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
  name: 'AttachFile',

  data() {
    return {
      documentTableData : [
        {
          document_title : "-",
          addition_date  : "-",
          display_document : "-"

        },
        {
          document_title : "-",
          addition_date  : "-",
          display_document : "-"

        },
        {
          document_title : "-",
          addition_date  : "-",
          display_document : "-"

        },
        {
          document_title : "-",
          addition_date  : "-",
          display_document : "-"

        },
        {
          document_title : "-",
          addition_date  : "-",
          display_document : "-"

        },
      ],
    }
  },

  methods: {
    closeDialog() {
      this.$store.commit("attachFile/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("attachFile/updateDialogState", state);
      },

      get() {
        return this.$store.state.attachFile.showDialog;
      },
    },

    document_title: {
      set(state) {
        return this.$store.commit("attachFile/updateDocumentTitle", state);
      },

      get() {
        return this.$store.state.attachFile.document_title;
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>