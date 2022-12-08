<template>
  <div class="container ma-4 py-2 mt-0 invoice-summary">
    <expenses />
    <div class="text-left mt-2">
      <actions />
    </div>
  </div>
</template>
<script>
import Actions from "./Actions";
export default {
  components: {
    Actions,
  },
};
</script>