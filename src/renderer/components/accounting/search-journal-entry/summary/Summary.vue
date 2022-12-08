<template>
     <div class="container ma-4 mx-8 py-2 mt-0 invoice-summary">
   <notes />
   <actions />
  </div>
</template>
<script>
import Actions from './Actions';
import Notes from './Notes';
export default {
    components : {
        Notes,
        Actions
    }
}
</script>