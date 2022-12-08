<template>
  <div class="mt-2 action-buttons-nonGrown ml-4 align-baseline">
    <span>
      <el-button size="mini" class="mb-1 btn-violet-light">
        {{ $t("search-f7") }}
      </el-button>

      <el-button size="mini" class="mb-1 btn-blue" @click="edit()">
        {{ $t("save-f5") }}
      </el-button>
    </span>
    <span>
      <el-button size="mini" class="mb-1 btn-red">
        {{ $t("delete-f8") }}
      </el-button>
      <NuxtLink :to="localePath('/inventory/invoice-inventory-first-term')">
        <el-button size="mini" class="mb-1 btn-violet">
          {{ $t("back-f6") }}
        </el-button>
      </NuxtLink>
    </span>
    <span>
      <el-button size="mini" class="mb-1" type="warning">
        {{ $t("print-pdf") }}
      </el-button>

      <el-button size="mini" class="mb-1 btn-orange">
        {{ $t("print-f4") }}
      </el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: "actions",
  computed: {
    state() {
      return this.$store.state.inventory.invoiceInventoryFirstTerm;
    },
    recordDetails() {
      return this.state.recordDetails;
    }
  },
  methods: {
    async edit() {
      delete this.recordDetails.totalQuantity;
      try {
        console.log(this.recordDetails);
        await this.$axios.$put(
          `/inventory/first-term-invoice/edit`,
          this.recordDetails
        );
        this.$message({
          type: "success",
          message: "تمت العملية بنجاح"
        });
        this.$router.push("/inventory/invoice-inventory-first-term");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
