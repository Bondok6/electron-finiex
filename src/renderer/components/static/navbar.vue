<template>
  <el-menu
    :default-active="currentPrimaryNavItem"
    class="primary-navbar el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item
      v-for="navItem in navItems"
      :key="navItem.key"
      :index="navItem.key"
      @click="
        $store.commit('navigation/updateCurrentPrimaryNavItem', navItem.key),
        $store.commit('navigation/collapse', false),
        $store.commit('navigation/sidebarDisplay', true)
      "
      >{{ $t(navItem.label) }}</el-menu-item
    >

  </el-menu>
</template>


<script>
export default {
  computed: {
    navItems() {
      return this.$store.state.navigation.navItems;
    },
    currentPrimaryNavItem() {
      return this.$store.state.navigation.currentPrimaryNavItem;
    },
  },

  head() {
    return {
      bodyAttrs: {
        dir: this.$store.state.navigation.direction,
      },
    };
  },

  methods: {
  },
};
</script>


<style lang="scss">
.primary-navbar {
  padding: 0 0.5rem 0 0;
  background-color: #FCFCFC;

  @media(max-width:992px) {
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 3px #eeeeee;
    }

    &::-webkit-scrollbar-thumb {
      padding: 2px;
      background: #DDDDDD;
      box-shadow: inset 0 0 2px #BBBBBB;
      border-radius: 20px;       /* roundness of the scroll thumb */

    }
  }
}


</style>

