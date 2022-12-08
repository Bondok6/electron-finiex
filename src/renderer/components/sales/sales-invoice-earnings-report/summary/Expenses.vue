<template>
  <div class="text-unbold d-flex flex-wrap justify-start px-2">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("number-of-invoices") }}
      </span>
      <span class="input-style mt-2 expenses-display"> 1457 </span>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("total-profit") }}
      </span>
      <span class="input-style mt-2 expenses-display"> 404,210.65 </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "expenses",

  data: function () {
    return {
      form: {
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
