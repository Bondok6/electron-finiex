<template>
  <div class="mobile-rotation">
    <img
      src="@/assets/images/logo.png"
      alt="menu image"
      width="auto"
      height="50"
      style="margin-bottom: 20px"
    />
    <div class="phone"></div>
    <div style="margin: 20px">
      {{ $t("please-rotate-your-mobile-for-better-experience") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-rotation",

  data() {
    return {};
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.myEventHandler);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("resize", this.myEventHandler);
    }
  },
  methods: {
    myEventHandler(e) {
      // your code for handling resize...
      if (e.currentTarget.innerWidth <= 320) {
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>


<style lang="scss">
.phone {
  height: 50px;
  width: 100px;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  animation: rotate 1.5s ease-in-out infinite alternate;
  margin: 50px;
  /* display: none; */
}

.mobile-rotation {
  display: none;
}

@media only screen and (max-width: 320px) {
  // mobile-rotation
  .mobile-rotation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    text-align: center;
    position: absolute;
    z-index: 15;

    margin-bottom: -6000px;
    padding-bottom: 6000px;
  }

  // prevent scrolling
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: hidden;
  }
}
</style>