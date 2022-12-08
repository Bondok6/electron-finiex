<template></template>
<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    window.$nuxt.$router.push(this.localePath("/pos/internal-orders"));
  },
  methods: {},
};
</script>
