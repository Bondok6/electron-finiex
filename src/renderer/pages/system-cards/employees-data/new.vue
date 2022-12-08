<template>
  <div class="mb-8 background-form">
    <invoice />
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/employees-data/new/Invoice.vue";
export default {
  components: { Invoice },
  async created() {
    try {
      await this.$store.dispatch("systemCards/employeesData/getJobs");
      await this.$store.dispatch("lists/getGenderList");
      await this.$store.dispatch("lists/getMaritalStatus");
      await this.$store.dispatch("lists/getCountriesList");
    } catch (e) {
      this.$message.error(e.message || "Error");
    }
  }
};
</script>