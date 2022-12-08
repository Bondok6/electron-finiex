<template>
  <el-menu
    :default-active="upperNavBar"
    class="el-menu-demo upperNavBar"
    mode="horizontal"
  >
    <el-menu-item index="1" class="float-left">
      <i class="el-icon-bell bell-icon"></i>
    </el-menu-item>

    <el-menu-item index="2" class="float-left">
      <img
        src="@/assets/images/menu_image.jpg"
        alt="menu image"
        width="40"
        height="auto"
        class="border-radius-20"
      />
    </el-menu-item>

    <!-- <li
      role="menuitem"
      tabindex="0"
      class="el-menu-item border-bottom-transparent float-left"
    >
      <nuxt-link
        v-if="$i18n.locale !== 'en'"
        v-on:click.native="changeDirection('rtl')"
        :to="switchLocalePath('en')"
      >
        English
      </nuxt-link>

      <nuxt-link
        v-if="$i18n.locale !== 'ar'"
        v-on:click.native="changeDirection('ltr')"
        :to="switchLocalePath('ar')"
      >
        العربية
      </nuxt-link>
    </li> -->

    <li
      role="menuitem"
      tabindex="0"
      class="el-menu-item border-bottom-transparent float-left"
    >
      <el-select
        class="text-center width-full-sm"
        :placeholder="$t('language')"
        v-model="language"
      >
        <nuxt-link
          v-on:click.native="changeDirection('ltr')"
          :to="switchLocalePath('en')"
        >
          <el-option label="English" :value="2"> English </el-option>
        </nuxt-link>

        <nuxt-link
          v-on:click.native="changeDirection('rtl')"
          :to="switchLocalePath('ar')"
        >
          <el-option label="Arabic" :value="3"> العربية </el-option>
        </nuxt-link>
      </el-select>
    </li>

    <el-menu-item index="3" class="float-right">
      <img
        src="@/assets/images/logo.png"
        alt="menu image"
        width="auto"
        height="50"
      />
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "uppernavbar",

  data() {
    return {
      language: this.$t("language"),
      upperNavBar: ""
    };
  },

  methods: {
    changeDirection(direction) {
      this.$store.commit("navigation/direction", direction);

      this.$nav = this.$route.path.split("/");
      if (this.$nav[1] == "en") {
        this.$store.commit(
          "navigation/updateCurrentSubNavItem",
          "/en/" +
            this.$nav[2] +
            "/" +
            this.$nav[3] +
            (this.$nav[4] == undefined ? "" : "/" + this.$nav[4])
        );
      } else {
        this.$store.commit(
          "navigation/updateCurrentSubNavItem",
          "/" +
            this.$nav[1] +
            "/" +
            this.$nav[2] +
            (this.$nav[3] == undefined ? "" : "/" + this.$nav[3])
        );
      }

      if (process.browser) {
        if (direction == "rtl") {
          localStorage.setItem("language", "ar");
          localStorage.setItem("direction", "rtl");
        } else {
          localStorage.setItem("language", "en");
          localStorage.setItem("direction", "ltr");
        }
      }
    }
  }
};
</script>


<style lang="scss">
.upperNavBar {
  padding: 0.5rem;
  padding-inline-start: 0 !important;
}

.upperNavBar .is-active {
  border-bottom: none !important;
}
</style>