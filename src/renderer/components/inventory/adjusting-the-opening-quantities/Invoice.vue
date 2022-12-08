<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('inventory-number')">
            <el-input
              v-model="form.inventory_number"
              placeholder="14"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="18" :md="19" :lg="20" class="mt-40">
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
              :placeholder="$t('listing-items')"
            >
              <el-option
                :label="$t('listing-items-by-manual-inventory')"
                :value="1"
                class="selectButton"
              >
                <el-button
                  class="width-full"
                  @click="openListManualDialog(true)"
                  >{{ $t("listing-items-by-manual-inventory") }}</el-button
                ></el-option
              >
              <el-option
                :label="$t('listing-items-through-the-inventory-machine')"
                :value="2"
                class="selectButton"
              >
                <el-button
                  class="width-full"
                  @click="openListMachineDialog(true)"
                  >{{
                    $t("listing-items-through-the-inventory-machine")
                  }}</el-button
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