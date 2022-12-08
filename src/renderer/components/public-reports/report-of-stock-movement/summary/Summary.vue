<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <Notes />
    <actions />
  </div>
</template>

<script>
import Notes from "./Notes";
import Actions from "./Actions";

export default {
  name: "summary-section",
  components: {
    Notes,
    Actions
  }
};
</script>
