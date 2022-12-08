<template>
  <div class="invoice-summary-top">
    <el-button class="btn-primary px-3" @click="displayRecord">
      {{ $t("display") }}
    </el-button>

    <el-select
      v-model="selectedPrint"
      class="color-primary text-center placeHolderColor"
      placeholder="اختر نوع الطباعة"
    >
      <el-option
        v-for="item in printOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        class="text-center"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "summary-section",
  components: {},
  data() {
    return {
      selectedPrint: "",
      printOptions: [
        {
          value: "print-f4",
          label: this.$t("print-f4")
        },
        {
          value: "print-barcode",
          label: this.$t("print-barcode")
        },
        {
          value: "print-pdf",
          label: this.$t("print-pdf")
        }
      ]
    };
  },
  methods: {
    displayRecord() {
      this.$store.dispatch("inventory/inventoryStorePages/fetchRecords");
    }
  }
};
</script>
