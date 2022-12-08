<template>
    <el-dialog class="pt-0-dialog" title=" " :visible.sync="showDialog" width="25%">
      <el-row class="mb-1">
        <div class="cancel-btn" @click="closeDialog()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>

        <el-row class="keypad-row">
          <div class="box-shadow keypad-display"></div>
        </el-row>
      
          <el-row class="keypad-row">
            <div class="keypad-btn">9</div>
            <div class="keypad-btn">8</div>
            <div class="keypad-btn">7</div>
          </el-row>
          <el-row class="keypad-row">
            <div class="keypad-btn">6</div>
            <div class="keypad-btn">5</div>
            <div class="keypad-btn">4</div>
          </el-row>
          <el-row class="keypad-row">
            <div class="keypad-btn">3</div>
            <div class="keypad-btn">2</div>
            <div class="keypad-btn">1</div>
          </el-row>
          <el-row class="keypad-row">
            <div class="keypad-btn">.</div>
            <div class="keypad-btn">0</div>
            <div class="keypad-btn"></div>
          </el-row>

      <div class="mt-1 d-flex justify-center">
        <el-button class="btn-navy px-3 mx-1" @click="closeDialog()">
          {{$t("ok")}}
        </el-button>

        <el-button class="btn-navy-bordered navy-color px-3 mx-1" @click="closeDialog()">
          {{$t("cancel")}}
        </el-button>
      </div>
  </el-dialog>
</template>


<script>
export default {
  name: "Keypad",

  data: function () {
    return {
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/keypad/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/keypad/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.keypad.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.keypad-display {
  height: 6rem;
  width: 16rem;
  margin-bottom: 1rem;
}

.cancel-btn {
  color: black;
  font-size: x-large;
  cursor: pointer;
}

.keypad-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.keypad-btn {
  width: 4.5rem;
  height: 3rem;
  background-color: #6dd1cf;
  border-radius: 0.5rem;
  color: white;
  text-align: center;
  line-height: 3.5rem;
  font-size: xx-large;
  margin: 0 0.5rem;
}
</style>