<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="12" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="5">
          <el-form-item :label="$t('registeration-number')">
            <el-select v-model="form.input" :placeholder="$t('selling-price')">
                <el-option :label="$t('selling-price')" :value="1"></el-option>
                <el-option :label="$t('selling-price')" :value="2"></el-option>
              </el-select>
          </el-form-item>
        </el-col>
      
      </el-row>
        <el-row :gutter="12" class="width-full">
          <el-col
            style="padding-right: 0; padding-left: 0"
            :xs="8"
            :sm="8"
            :md="6"
            :lg="5"
          >
            <el-form-item :label="$t('registeration-type')">
              <el-select v-model="form.input" placeholder="1231">
                <el-option :label="$t('all')" :value="1"></el-option>
                <el-option :label="$t('all')" :value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
                  <el-col :xs="15" :sm="16" :md="18" :lg="19" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="form.type"
              class="
                color-blue
                text-center
                placeHolderColor
                mobile-width-full
                selectButton
              "
              :placeholder="$t('registeration-options')"
            >
              <el-option
                :label="$t('hide-cost-center')"
                :value="1"
                class="selectButton"
              >
               </el-option
              >
              <el-option
                :label="$t('add-new-account')"
                :value="2"
                class="selectButton"
              >
              </el-option>
              <el-option
                :label="$t('transfer-document-to-an-entry')"
                :value="3"
                class="selectButton"
              >
              </el-option>
              <el-option
                :label="$t('attach-file')"
                :value="4"
                class="selectButton"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>

        </el-row>
    </el-form>

    <!-- first dialog -->
    <listitemsmachine />

    <!-- second dialog -->
    <listitemsmanual />
  </el-container>
</template>


<script>
import Listitemsmanual from "~/components/dialogs/listing-items-by-manual-inventory";
import Listitemsmachine from "~/components/dialogs/listing-items-by-machine";

export default {
  name: "invoice",
  components: {
    Listitemsmanual,
    Listitemsmachine,
  },

  data: function () {
    return {
      form: {
        inventory_number: 1,
        inventory_name: 1,
        comma: 1,
        warehouse: 1,
      },
    };
  },

  methods: {
    openListManualDialog(state) {
      this.$store.commit("listitemsmanual/updateDialogState", state);
    },

    openListMachineDialog(state) {
      this.$store.commit("listitemsmachine/updateDialogState", state);
    },
  },
};
</script>