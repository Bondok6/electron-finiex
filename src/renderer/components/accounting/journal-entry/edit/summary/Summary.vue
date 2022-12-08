<template>
  <div
    class="text-center  container ma-4 mx-8 py-2 mt-0 invoice-summary"
  >
    <expenses class="mb-4" />
  <br />
  <br />
    <div class="mt-4">
      <actions />
    </div>
  </div>
</template>
<script>
import Expenses from "./Expenses";
import Actions from "./Actions";
export default {
  name: "summary-section",
  components: {
    Expenses,
    Actions
  }
};
</script>
