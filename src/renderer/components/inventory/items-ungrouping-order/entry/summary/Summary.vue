<template>
  <div class="container ma-4 container py-2 mt-0 invoice-summary">
    <actions />
  </div>
</template>
<script>
import Actions from "./Actions";
export default {
  name: "summary-section",
  components: {
    Actions
  }
};
</script>
