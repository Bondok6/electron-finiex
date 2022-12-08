<template>
  <div class="container d-flex justify-center align-center flex-direction-column">
    <h2>الصفحة تحت الإنشاء</h2>
    <img
      src="@/assets/images/under_construction.png"
      alt="under construction"
      width="200"
      height="auto"
      class="mb-4"
    />
  </div>
</template>
<script>
export default {
  created() {
    this.navigationUpdate();
  },

  methods: {
    navigationUpdate() {

      this.$store.commit(
        "navigation/updateCurrentPrimaryNavItem",
        'sales'
      );

      this.$store.commit(
        "navigation/updateCurrentSubNavItem",
        '/sales/sales-invoice'
      );
    },
  },
};
</script>