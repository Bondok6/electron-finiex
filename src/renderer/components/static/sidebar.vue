<template>
  <el-menu
    :default-active="currentSubNavItem"
    class="sidebar-menu"
    :collapse="collapse"
    :collapse-transition="false"
    :router="true"
    :class="[sidebarDisplay ? 'd-block' : '']"
  >
    <!-- OPEN / CLOSE -->
    <el-radio-group v-model="collapse" class="mb-6">
      <span @click="$store.commit('navigation/collapse', false)">
        <el-radio-button v-if="collapse == true" :label="false"
          ><i class="el-icon-s-fold mx-4"></i>
        </el-radio-button>
      </span>
      <span @click="sidebarClose()">
        <el-radio-button v-if="collapse == false" :label="true"
          ><i class="el-icon-close mx-4"></i
        ></el-radio-button>
      </span>
    </el-radio-group>

    <span v-for="subNavItem in subNavItems" :key="subNavItem.link">
      <!-- MENU ITEMS -->
      <!-- if not in group -->
      <el-menu-item
        v-if="!subNavItem.is_group"
        :index="localePath(subNavItem.link)"
        @click="
          $store.commit('navigation/updateCurrentSubNavItem', subNavItem.link),
            $store.commit('navigation/collapse', true)
        "
      >
        <i :class="subNavItem.icon"></i>
        <span slot="title">{{ $t(subNavItem.label) }}</span>
      </el-menu-item>
      <!-- if sidebar group -->
      <el-submenu v-if="subNavItem.is_group" :index="subNavItem.label">
        <template slot="title">
          <i :class="subNavItem.icon"></i>
          <span>{{ $t(subNavItem.label) }}</span>
        </template>
        <el-menu-item-group>
          <span v-for="gp in subNavItem.group" :key="gp.link" :index="gp.label">
            <!-- if not in subgroup -->
            <el-menu-item
              v-if="!gp.is_group"
              :index="localePath(gp.link)"
              @click="
                $store.commit('navigation/updateCurrentSubNavItem', gp.link),
                  $store.commit('navigation/collapse', true)
              "
            >
              <i :class="gp.icon"></i>
              <span slot="title">{{ $t(gp.label) }}</span>
            </el-menu-item>

            <!-- if in subgroup -->
            <el-submenu v-else :index="gp.label" class="sub-group">
              <template slot="title">
                <i :class="gp.icon"></i>
                <span>{{ $t(gp.label) }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="subgroup in gp.group"
                  :key="subgroup.link"
                  :index="localePath(subgroup.link)"
                  @click="
                    $store.commit(
                      'navigation/updateCurrentSubNavItem',
                      subgroup.link
                    ),
                      $store.commit('navigation/collapse', true)
                  "
                >
                  <i :class="subgroup.icon"></i>
                  <span slot="title">{{ $t(subgroup.label) }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </span>
        </el-menu-item-group>
      </el-submenu>
    </span>
  </el-menu>
</template>


<script>
export default {
  data() {
    return {
      $nav: []
    };
  },

  mounted() {
    this.navigationUpdate();
  },

  methods: {
    sidebarClose() {
      // this.$store.commit('navigation/collapse', true);
      this.$store.commit("navigation/sidebarDisplay", false);
    },

    navigationUpdate() {
      this.$nav = this.$route.path.split("/");

      if (this.$nav[1] == "en") {
        this.$store.commit(
          "navigation/updateCurrentPrimaryNavItem",
          this.$nav[2]
        );

        if (this.$nav[4] == "new" || this.$nav[4] == "edit" || !this.$nav[4]) {
          this.$nav[4] = "";
        } else {
          this.$nav[4] = "/" + this.$nav[4];
        }

        this.$store.commit(
          "navigation/updateCurrentSubNavItem",
          "/en/" + this.$nav[2] + "/" + this.$nav[3] + this.$nav[4]
        );

        this.$store.commit("navigation/direction", "ltr");
      } else {
        this.$store.commit(
          "navigation/updateCurrentPrimaryNavItem",
          this.$nav[1]
        );

        if (this.$nav[3] == "new" || this.$nav[3] == "edit" || !this.$nav[3]) {
          this.$nav[3] = "";
        } else {
          this.$nav[3] = "/" + this.$nav[3];
        }

        this.$store.commit(
          "navigation/updateCurrentSubNavItem",
          "/" + this.$nav[1] + "/" + this.$nav[2] + this.$nav[3]
        );

        this.$store.commit("navigation/direction", "rtl");
      }
    }
  },

  watch: {
    $route(to, from) {
      this.navigationUpdate();
    }
  },

  computed: {
    currentSubNavItem() {
      return this.$store.state.navigation.currentSubNavItem;
    },

    collapse: {
      set(state) {
        return this.$store.commit("navigation/collapse", true);
      },

      get() {
        return this.$store.state.navigation.collapse;
      }
    },

    sidebarDisplay: {
      set(state) {
        return this.$store.commit("navigation/sidebarDisplay", true);
      },

      get() {
        return this.$store.state.navigation.sidebarDisplay;
      }
    },

    subNavItems() {
      const navItems = this.$store.state.navigation.navItems;
      const currentPrimaryNavItem = this.$store.state.navigation
        .currentPrimaryNavItem; // current module
      console.log("currentPrimaryNavItem" , currentPrimaryNavItem);

      return navItems.find(item => {
         return item.key == currentPrimaryNavItem})?.subNavItems;
    }
  }
};
</script>


<style lang="scss">
.sidebar-menu {
  @media only screen and (max-width: 600px) {
    display: none;
  }

  border-left: 1px solid #e6e6e6;
  padding-inline-start: 0px;
  min-height: 100vh;

  .el-menu-item i,
  .el-submenu i:first-child {
    margin-left: 0;
    margin-right: 5px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 5px;
    }
  }

  .el-submenu__icon-arrow {
    color: white;
    background-color: #49bcff;
    border-radius: 50%;
    padding: 2px;
    right: 5px;
    left: auto;

    [dir="rtl"] & {
      left: 5px;
      right: auto;
    }
  }

  @media (max-width: 992px) {
    &:not(.el-menu--collapse) {
      position: absolute;
      z-index: 3;
    }
  }
}

.sidebar-menu:not(.el-menu--collapse) {
  width: 300px;
}

.sidebar-menu {
  .el-menu-item {
    display: flex;
    align-items: center;
    white-space: break-spaces;
    line-height: normal;
    margin-bottom: 5px;
  }

  .el-radio-button__inner {
    border: 1px solid #dcdfe6;
  }
}

.sidebar-menu .el-submenu {
  .el-menu-item {
    padding: 0 5px !important;
  }
  ul.el-menu {
    padding-inline-start: 15px !important;
  }
  .el-menu-item-group .el-menu-item-group__title {
    display: none;
  }
  .el-submenu__icon-arrow {
    [dir="rtl"] & {
      left: 20px;
      right: auto;
    }
  }
}

.el-submenu__title {
  padding-right: 50px;

  [dir="rtl"] & {
    padding-left: 50px !important;
    padding-right: 20px;
  }
}

.el-menu--collapse {
  i:not(.el-icon-s-fold) {
    margin-top: 20px;
  }

  .el-submenu__title {
    padding-right: 20px;

    i {
      margin-top: 0px;
    }

    [dir="rtl"] & {
      padding-left: 20px !important;
      padding-right: 20px;
    }
  }
}

.sub-group {
  padding: 0 5px;
  height: 100%;
  .el-submenu__title {
    padding: 0 !important;
    height: 100%;
  }

  .el-menu {
    border-radius: 10px;
    z-index: 2;
    border: 1px solid #eee;
  }

  .el-submenu__title:first-of-type {
    i:first-of-type {
      color: #000 !important;
    }

    span:first-of-type {
      color: #000 !important;
    }
  }
  [dir="rtl"] & {
    .el-submenu__icon-arrow {
      left: 5px !important;
      right: auto;
    }
  }
}

.el-menu--vertical {
  // top: 0px !important;
  max-height: 100vh;

  .el-menu--vertical {
    bottom: auto !important;
    right: 300px;
    width: 150%;
  }
}
</style>