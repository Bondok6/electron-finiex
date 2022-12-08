<template>
  <div class="text-unbold d-flex flex-wrap">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("quantity") }}
      </span>
      <span class="input-style mt-2"> {{ totalQuantity }} </span>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("total") }}
      </span>
      <span class="input-style mt-2"> {{ total }} </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "expenses",
  computed: {
    state() {
      return this.$store.state.inventory.invoiceInventoryFirstTerm;
    },
    total() {
      return this.state.recordDetails.total;
    },
    totalQuantity() {
      return this.state.recordDetails.totalQuantity;
    }
  },
  data() {
    return {};
  }
};
</script>
