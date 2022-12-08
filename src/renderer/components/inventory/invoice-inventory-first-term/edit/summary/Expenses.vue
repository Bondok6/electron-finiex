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
import { mapMutations } from "vuex";

export default {
  name: "expenses",
  data() {
    return {
      totalQuantity: null,
      total: null
    };
  },
  computed: {
    recordDetails() {
      return this.$store.state.inventory.invoiceInventoryFirstTerm
        .recordDetails;
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "inventory/invoiceInventoryFirstTerm/setRecordDetails"
    })
  },
  watch: {
    recordDetails: {
      handler(newVal) {
        this.totalQuantity = newVal.totalQuantity;
        this.total = newVal.total;
      },

      deep: true
    },
    totalQuantity(newVal) {
      this.setRecordDetails({
        ...this.recordDetails,
        totalQuantity: newVal
      });
    },
    total(newVal) {
      this.setRecordDetails({
        ...this.recordDetails,
        total: newVal
      });
    }
  }
};
</script>
