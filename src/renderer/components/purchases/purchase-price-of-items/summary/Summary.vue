<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
        <expenses />
        <br />

        <actions />

    
  </div>
</template>


<script>
import Expenses from "./Expenses";
import Actions from "./Actions";

export default {
  name: "summary-section",
  components: {
    Expenses,
    Actions,
  },
};
</script>