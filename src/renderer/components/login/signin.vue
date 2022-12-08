<template>
  <div style="padding-top: 3px" class="parent-1">
    <el-form
      style=""
      class="invoice-form width-full direction"
      label-position="top"
      :model="form"
    >
      <el-form-item
        class="el-form-item1"
        style="color: white"
        :label="$t('branch-number')"
      >
        <el-input
          class="transparents"
          style="background: transparent"
          v-model.number="form.branchID"
        >
        </el-input>
      </el-form-item>
      <el-form-item
        class="el-form-item1"
        style="color: white"
        :label="$t('email')"
      >
        <el-input
          class="transparents"
          style="background: transparent"
          v-model="form.userName"
        >
        </el-input>
      </el-form-item>
      <el-form-item
        class="el-form-item1"
        style="color: white"
        :label="$t('password')"
      >
        <el-input
          class="transparents"
          style="background: transparent"
          type="password"
          v-model="form.password"
        >
        </el-input>
      </el-form-item>
      <el-form-item class="el-form-item2">
        <el-button class="font btn-white-2 width-full" @click="login">
          {{ $t("sign-in") }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        branchID: "",
        userName: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({
      accessToken: state => state.General.auth.accessToken,
    })
  },
  methods: {
    ...mapMutations({
      setLoggedIn: "General/auth/setLoggedIn",
      setAccessToken: "General/auth/setAccessToken"
    }),
    async login() {
      try {
        let payload = new FormData();
        payload.append("branchID", this.form.branchID);
        payload.append("userName", this.form.userName);
        payload.append("password", this.form.password);
        let response = await this.$store.dispatch(
          "General/auth/login",
          payload
        );
        this.setLoggedIn(true);
        this.setAccessToken(response.data.accessToken);
        this.$router.push("/")
      } catch (e) {

      }
    }
  }
};
</script>
<style lang="scss">
.font {
  font-family: "Tajawal";
}
.parent-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 440px) {
    border: 0;
  }
}
.direction {
  direction: rtl;
}
.el-form-item1 .el-form-item__label {
  color: white;
}
.transparents .el-input__inner {
  background: transparent;
}
.transparents .el-input__inner {
  color: white;
}

.el-form-item2 .el-form-item__content {
  padding-top: 3pc;
}
.selector .el-input .el-input__suffix {
  right: auto;
  left: 5px;
}
</style>
