<template>
  <div class="text-unbold d-flex flex-wrap">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("amount-in-letters") }}
      </span>
      <el-input v-model="form.amount" class="w-200"> </el-input>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span class="mx-1">
        {{ $t("total") }}
      </span>
      <el-input v-model="form.total" class="w-200"> </el-input>
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
        amount: 0,
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

