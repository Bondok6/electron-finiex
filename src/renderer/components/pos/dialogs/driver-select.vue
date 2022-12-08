<template>
    <el-dialog class="pt-0-dialog" title=" " :visible.sync="showDialog" width="35%">
      <el-row class="">
        <div class="cancel-btn" @click="closeDialog()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>

      <el-row>
        <div class="title width-full">{{$t('please-select-driver')}}</div>
      </el-row>

      <el-row class="d-flex justify-center mt-1">
        <el-input
          class="text-color bl-none pastal-blue-border"
          :placeholder="$t('search-here')"
          v-model="search_target"
          style="width: 70%"
        >
          <template slot="append"><i class="el-icon-search"></i></template>
        </el-input>
      </el-row>

      <el-row style="padding: 0 2rem;">
        <div class="select-container box-shadow mt-2">
          <div class="header">
            {{$t('name')}}
          </div>

          <div class="names-list">
            <el-menu v-model="driver">
              <el-menu-item v-for="(name, index) in names" :key="index" 
                            class="name-card" @click="select_delegate(index)">
                {{name}}
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-row>
      
      <div class="mt-2 d-flex justify-center">
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
  name: "DriverSelect",

  data: function () {
    return {
      names: [
        "محمد عبد الله",
        "سيف الله أحمد",
        "فرج محمد"
      ],
      driver: "",
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/driverSelect/updateDialogState", false);
    },

    select_delegate(index) {
      this.driver = index;
    }
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/driverSelect/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.driverSelect.showDialog;
      },
    },

    search_target: {
      set(state) {
        return this.$store.commit("pos/driverSelect/updateSearchTarget", state);
      },

      get() {
        return this.$store.state.pos.driverSelect.updateSearchTarget;
      },
    }
  },
};
</script>

<style lang="scss" scoped>
.cancel-btn {
  color: black;
  font-size: x-large;
  cursor: pointer;
}
.title {
  text-align: center;
  color: #21798D;
  font-size: larger;
  font-weight: bold;
}

.select-container {
  height: 20rem;
  border-radius: 1rem;
}

.header {
  background-color: #E8FAFE;
  color: #21798D;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
</style>