<template>
    <el-dialog class="pt-0-dialog" title=" " :visible.sync="showDialog" width="35%">
      <el-row class="">
        <div class="cancel-btn" @click="closeDialog()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>

      <el-row>
        <div class="title width-full">{{$t('please-select-client')}}</div>
      </el-row>

      <el-row class="d-flex justify-center mt-1" id="client-search-box">
        <input-drop-down
          v-model="search_target"
          :placeholder="$t('search-here')"
          class="pastal-blue-border"
          style="width: 70%"
        >
          <div class="add-btn add-btn-red" @click="addClient()">
            {{ $t("add-client") }}
            <i class="el-icon-plus mx-1"></i>
          </div>
          <el-option v-for="(name, index) in names" :key="index" :label="name" :value="index" />
        </input-drop-down>
      </el-row>

      <el-row style="padding: 0 2rem;">
        <div class="select-container box-shadow mt-2">
          <div class="header">
            {{$t('name')}}
          </div>

          <div class="names-list">
            <el-menu v-model="client">
              <el-menu-item v-for="(name, index) in names" :key="index" 
                            class="name-card" @click="select_client(index)">
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
import InputDropDown from '~/components/input-with-drop-down/input-drop-down.vue';

export default {
  name: "ClientSelect",

  components: {
    InputDropDown
  },

  data: function () {
    return {
      names: [
        "محمد عبد الله",
        "سيف الله أحمد",
        "فرج محمد"
      ],
      client: "",
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/clientSelect/updateDialogState", false);
    },

    select_client(index) {
      this.client = index;
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/clientSelect/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.clientSelect.showDialog;
      },
    },

    search_target: {
      set(state) {
        return this.$store.commit("pos/clientSelect/updateSearchTarget", state);
      },

      get() {
        return this.$store.state.pos.clientSelect.updateSearchTarget;
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