<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('name-of-class-product')">
            <el-select v-model="main_form.name">
                <el-option :value="0">
                <button
                  class="danger-color"
                  style="border: none; background: none"
                  @click="OpenDialog(true)"
                >
                  {{ $t("add") }} <i class="el-icon-plus"></i>
                </button>
              </el-option>
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('unit')">
            <el-select v-model="main_form.unit">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('classification-name')">
            <el-select v-model="main_form.classification_name">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <invoice-dialog />
  </el-container>
</template>


<script>
import InvoiceDialog from "~/components/dialogs/add-item";
export default {
  name: "invoice",
  components: {
    InvoiceDialog,
  },
  data: function () {
    return {
      main_form: {
        name: "",
        unit: "",
        classification_name: "",
      },
      sub_form: {},
    };
  },
  methods: {
    OpenDialog(state) {
      this.$store.commit("additem/updateDialogState", state);
    },
  },
};
</script>