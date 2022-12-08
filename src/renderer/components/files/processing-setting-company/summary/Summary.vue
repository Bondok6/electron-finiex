<template>
    <div class="text-oppesite ma-4  py-2 mt-0">

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
.text-oppesite {
    [dir='rtl'] & {
        text-align: left;
    }
    [dir='ltr'] & {
        text-align: right;
    }
}
</style>