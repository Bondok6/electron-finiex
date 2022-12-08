<template>
  <div class="d-flex" style="margin-bottom: 20px">
    <el-button
      icon="el-icon-s-fold mx-4"
      class="fold-icon"
      @click="sidebarDisplay(true)"
    ></el-button>

    <el-breadcrumb
      class="breadcrumb"
      :separator-class="
        direction == 'ltr' ? 'el-icon-arrow-right' : 'el-icon-arrow-left'
      "
    >
      <el-breadcrumb-item v-for="nav in navigation" :key="nav.id">{{
        $t(nav)
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",

  data() {
    return {
      navigation: [],
      direction: "rtl",
    };
  },

  mounted() {
    this.breadcrumb();
  },

  methods: {
    sidebarDisplay(state) {
      this.$store.commit("navigation/sidebarDisplay", state);
      this.$store.commit("navigation/collapse", false);
    },

    breadcrumb() {
      this.navigation = this.$route.path.split("/");

      if (this.navigation[1] == "en") {
        this.direction = "ltr";
        this.$delete(this.navigation, 1);
      }
    },
  },

  watch: {
    $route(to, from) {
      this.navigation = this.$route.path.split("/");

      if (this.navigation[1] == "en") {
        this.direction = "ltr";
        this.$delete(this.navigation, 1);
      }

      this.$store.commit("navigation/sidebarDisplay", false);
    },
  },
};
</script>
<style lang="scss">
// breadcrumb
.breadcrumb {
  margin-bottom: 20px;
  padding: 20px 35px 0 35px;
  display: flex;
  flex-wrap: wrap;

  .el-breadcrumb__item:nth-child(1) {
    display: none;
  }

  .el-breadcrumb__item:nth-child(2) {
    font-weight: 900;
  }

  .el-breadcrumb__item {
    padding-top: 5px;
  }

  [dir="rtl"] & {
    direction: rtl;
  }
}

.fold-icon {
  display: none;
  max-height: 40px;
}

@media only screen and (max-width: 600px) {
  .fold-icon {
    display: inline-block;
  }

  .breadcrumb {
    margin: 0;
    padding: 10px;
  }
}
</style>
