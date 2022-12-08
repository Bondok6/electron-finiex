<template>
  <div class="text-unbold d-flex flex-wrap space-around">
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("number-of-bands") }}
      </span>
      <span class="input-style mx-2 mt-2"> 55 </span>
    </span>


    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-debit") }}
      </span>
      <span class="input-style mx-2 mt-2">20000</span>
    </span>
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-credit") }}
      </span>
      <span class="input-style mx-2 mt-2">10000</span>
    </span>
    <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
      <span>
        {{ $t("total-difference") }}
      </span>
      <span class="input-style mx-2 mt-2">30000</span>
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
