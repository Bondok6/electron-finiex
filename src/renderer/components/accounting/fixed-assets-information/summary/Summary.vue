<template>
     <div class="container  ma-4 mx-8 py-2 mt-0 invoice-summary">
   <notes />
   <div class="text-left mt-2 ml-6">
   <actions />
   </div>
  </div>
</template>
<script>
import Actions from './Action';
import Notes from './Notes';
export default {
    components : {
        Notes,
        Actions
    }
}
</script>
