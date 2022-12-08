<template>
  <div class="text-unbold d-flex flex-wrap">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("bonds-number") }}
      </span>
      <span class="input-style mx-2 mt-2"> 550 </span>
    </span>

    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total") }}
      </span>
      <span class="input-style mx-2 mt-2"> 404,210.2222 </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "expenses",

  data: function() {
    return {
      form: {
        total: 0,
        total_LE: 0,
        net: 0
      }
    };
  }
};
</script>
