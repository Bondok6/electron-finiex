<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
      <notes />
    <br />
    <actions />
  </div>
</template>


<script>
import Actions from "./Actions";
import Notes from "./Notes";

export default {
  name: "summary-section",
  components: {
    Actions,
    Notes,
  },
};
</script>