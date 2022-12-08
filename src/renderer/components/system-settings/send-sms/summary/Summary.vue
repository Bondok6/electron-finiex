<template>
    <div class="container ma-4  py-2 mt-0 invoice-summary">
        <expenses />
        <actions />
    </div>
</template>
<script>
import Expenses from "./Expenses.vue"
import Actions from "./Actions.vue"
export default {
    name : "summary",
    components : {
        Expenses,
        Actions
    }
}
</script>