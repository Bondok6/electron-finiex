<template>
  <div>
    <mobilerotation />

    <uppernavbar />
    <navbar />

    <div class="d-flex">
      <sidebar />

      <main class="width-full min-width-0">
        <breadcrumb />
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import uppernavbar from "~/components/static/upperNavbar";
import navbar from "~/components/static/navbar";
import sidebar from "~/components/static/sidebar";
import mobilerotation from "~/components/static/mobileRotation";
import breadcrumb from "~/components/static/breadcrumb";

export default {
  // middleware: ["auth-admin"],

  name: "Home",
  components: {
    navbar,
    sidebar,
    uppernavbar,
    mobilerotation,
    breadcrumb
  },

  data() {
    return {
      direction: "rtl"
    };
  }
};
</script>
