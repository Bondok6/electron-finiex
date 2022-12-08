<template>
    <el-dialog title=" " :visible.sync="showDialog" width="50%">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>

      <el-row :gutter="6" class="width-full two-sides">
        <el-col :md="11" :lg="11">
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

          <el-row>
            <div class="mt-1 width-full d-flex justify-center">
              <el-button class="btn-navy px-3 mx-1" @click="closeDialog()">
                {{$t("agree")}}
              </el-button>

              <el-button class="btn-navy-bordered navy-color px-3 mx-1" @click="closeDialog()">
                {{$t("cancel")}}
              </el-button>
            </div>
          </el-row>
        </el-col>

        <el-col :md="1" :lg="1"></el-col>

        <el-col :md="12" :lg="12">
          <el-form
            class="
              form-side
            "
            label-position="top"
          >
            <el-form-item >
              <div class="text-center">{{$t('item-price')}}</div>
              <el-input class="teal-border"/>
            </el-form-item>

            <el-form-item>
              <div class="text-center">{{$t('sale-quantity')}}</div>
              <el-input class="teal-border"/>
            </el-form-item>

            <el-form-item>
              <div class="text-center">{{$t('selling-net')}}</div>
              <el-input class="teal-border"/>
            </el-form-item>
          </el-form>  
        </el-col>
      </el-row>
    </el-dialog>
</template>


<script>
export default {
  name: "KeypadAddItem",

  data: function () {
    return {
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/keypadAddItem/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/keypadAddItem/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.keypadAddItem.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.two-sides {
  display: flex;
  flex-wrap: wrap;
}

.form-side {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
}

.cancel-btn {
  position: absolute;
  top: 0;
  color: black;
  font-size: x-large;
  cursor: pointer;
}

.keypad-row {
  display: flex;
  justify-content: space-evenly;
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
}

.btn-navy-bordered {
  border: 1px solid #21798d;
}
.navy-color {
  color: #21798d;
}
</style>