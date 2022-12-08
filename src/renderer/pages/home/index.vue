<template>
  <div class="upper-parent">
    <div class="parent">
      <div class="text">
        Welcome to Finiex Soft, this web application is under construction.
      </div>
      <img
        class="image"
        src="@/assets/images/logo.png"
        alt="menu image"
        width="250"
        height="auto"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "home-page",
  layout: "home",
  /*
  async asyncData({ $axios, $config }) {
    let response = await $axios.$get("/todos");
     
  }
  */

  async created() {}
};
</script>
<style scoped lang="scss">
.upper-parent {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 20px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 15px;
  margin: 20px;

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
</style>
