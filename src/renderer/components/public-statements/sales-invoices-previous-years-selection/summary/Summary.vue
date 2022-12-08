<template>
  <div class="container ma-2 py-2 mt-0 invoice-summary" id="sales-select-footer">
   <actions />
  </div>
</template>


<script>
import Actions from './Actions';

export default {
  name: 'summary-section',
  components: { 
    Actions,
  }
}
</script>

<style lang="scss" scoped>
#sales-select-footer {
  padding-top: 1rem;
}
</style>