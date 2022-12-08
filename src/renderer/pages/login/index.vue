<template>
  <div class="loginPage">
    <div class="upper-parent">
      <div style="height: 100%">
        <el-tabs
          v-model="tabIndex"
          :tab-position="tabPosition"
          class="items-cards-tabs-3"
          type="card"
          @tab-click="handleClick"
          style="height: 100%; width: 1050px; background-color: white"
        >
          <el-tab-pane
            style="
              font-family: Tajawal;
              background-color: #28b4b3;
              width: 650px;
              height: 100%;
              display: block;
            "
          >
            <Signin />
            <span slot="label">
              {{ $t("sign-in") }}
              <span
                :class="[active == 0 ? 'visible' : 'hidden']"
                class="arrow"
                >{{ $t("arrow") }}</span
              ></span
            >
          </el-tab-pane>
          <el-tab-pane
            style="
              font-family: Tajawal;
              background-color: #28b4b3;
              width: 650px;
              height: 100%;
              display: block;
            "
            ><Database />
            <span slot="label">
              {{ $t("Database") }}
              <span
                :class="[active == 1 ? 'visible' : 'hidden']"
                class="arrow"
                >{{ $t("arrow") }}</span
              ></span
            >
          </el-tab-pane>
          <el-tab-pane
            style="
              font-family: Tajawal;
              background-color: #28b4b3;
              width: 650px;
              height: 100%;
              display: block;
            "
          >
            <Systemfiles />
            <span slot="label">
              {{ $t("system-files") }}
              <span
                :class="[active == 2 ? 'visible' : 'hidden']"
                class="arrow"
                >{{ $t("arrow") }}</span
              ></span
            >
          </el-tab-pane>

          <el-tab-pane
            style="
              font-family: Tajawal;
              background-color: #28b4b3;
              width: 650px;
              height: 100%;
              display: block;
            "
          >
            <Additionalsettings />
            <span slot="label">
              {{ $t("additional-settings") }}
              <span
                :class="[active == 3 ? 'visible' : 'hidden']"
                class="arrow"
                >{{ $t("arrow") }}</span
              ></span
            >
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="image2">
        <!-- <img
          class="image"
          src="@/assets/images/logo.png"
          alt="menu image"
          width="250"
          height="auto"
        /> -->
      </div>
    </div>
  </div>
</template>
<script>
import Signin from "~/components/login/signin.vue";
import Database from "~/components/login/database.vue";
import Systemfiles from "~/components/login/system-files.vue";
import Additionalsettings from "~/components/login/additional-settings.vue";

export default {
  name: "home-page",
  layout: "home",

  components: {
    Signin,
    Database,
    Systemfiles,
    Additionalsettings
  },

  data() {
    return {
      tabPosition: "right",
      tabIndex: 0,
      active: 0
    };
  },

  methods: {
    handleClick(tab) {
      if (tab.index == 0) {
        this.active = 0;
      } else if (tab.index == 1) {
        this.active = 1;
      } else if (tab.index == 2) {
        this.active = 2;
      } else {
        this.active = 3;
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&display=swap");
.background {
  background-color: white;
}
.upper-parent {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
}
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 20px;
  border: 1px solid rgb(180, 180, 180);

  @media (max-width: 440px) {
    border: 0;
  }
}

.text {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

.image {
  border-radius: 20px;
  border: 1px solid #eee;
}
.borderRight {
  border-bottom: 2px solid white;
  position: absolute;
  left: 40%;
  right: 7%;
  margin-left: 10pc;
  margin-top: 0.6pc;
}
body,
input,
button {
  background-color: white;
}

.arrow {
  font-size: 45px;
  margin: 3px 10px;
}
.visible {
  visibility: visible;
}

.hidden {
  visibility: hidden;
}
.loginPage .el-tabs__content {
  height: 100% !important;
}
</style>
