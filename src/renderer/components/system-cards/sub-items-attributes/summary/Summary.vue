<template>
  <div class="text-center py-2 mt-0 container invoice-summary">
    <actions />
  </div>
</template>
<script>
import Actions from "./Actions";
export default {
  name: "summary-section",
  components: {
    Actions,
  },
};
</script>
