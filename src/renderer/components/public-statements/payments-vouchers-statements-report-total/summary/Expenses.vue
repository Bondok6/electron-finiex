<template>
  <div class="text-unbold d-flex flex-wrap">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("bonds-number") }}
      </span>
      <span class="expenses-display input-style mt-2"> 1457 </span>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("total") }}
      </span>
      <span class="expenses-display input-style mt-2"> 404,210.2222 </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "expenses",

  data: function () {
    return {
      form: {
        total: 0,
        total_LE: 0,
        net: 0,
      },
    };
  },
};
</script>

<style scoped>
.expenses-display {
  border-radius: 0.4rem;
}
</style>

