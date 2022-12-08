<template>
    <div class="text-center container ma-4  py-2 mt-0 invoice-summary">

        <div class="px-2-lg py-2 mt-0 invoice-summary">
        <expenses />
        </div>
    <div class="text-center px-2-lg py-2 mt-0 invoice-summary">
     <actions />
     </div>
    </div>
</template>
<script>
import Expenses from './Expenses';
import Actions from './Actions';
export default {
    name : 'summary-section',
    components : {
        Expenses,
        Actions
    }
}
</script>
