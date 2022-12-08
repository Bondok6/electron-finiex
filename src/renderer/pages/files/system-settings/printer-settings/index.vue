<template>
  <div class="mb-8">
    <invoice />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/system-settings/printer-settings/Invoice";
import InvoiceSummary from "~/components/system-settings/printer-settings/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceSummary,
  },

  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
