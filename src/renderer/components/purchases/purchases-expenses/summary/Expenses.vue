<template>
  <div class="text-unbold d-flex flex-wrap">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("total-net") }}
      </span>
      <span class="input-style expenses-display mt-2"> {{form.total}} </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "expenses",

  data: function () {
    return {
      form: {
        total: 1766.40,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.expenses-display {
  background-color: #21798d; 
  color: white;
  border-radius: 0.4rem;
}
</style>
