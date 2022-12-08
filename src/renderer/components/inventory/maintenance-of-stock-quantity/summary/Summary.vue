<template>
  <div class="container py-2 mt-0 invoice-summary ma-2">
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