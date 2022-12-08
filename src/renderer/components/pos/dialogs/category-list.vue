<template>
    <el-dialog title=" " :visible.sync="showDialog" width="70%">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>

      <span>
        <el-form
          class="
            width-full
            d-flex
            justify-center
          "
          label-position="top"
        >
          <el-form-item>
            <el-input
              class="text-color bl-none mb-1 w-300"
              v-model="search_target"
              :placeholder="$t('search-here')"
            />
          </el-form-item>
        </el-form>
      </span>
      <div class="list mt-1">
        <div  v-for="(category, index) in categories" :key="index"
              class="item-block">
          {{$t(category)}}
        </div>
      </div>
    </el-dialog>
</template>


<script>
export default {
  name: "CategoryList",

  data: function () {
    return {
      categories: [
        'category-1',
        'category-1',
        'category-1',
        'category-1',
        'category-1',
        'category-1',
        'category-1',
        'category-1',
        'category-1',
        'category-1',
      ]
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/categoryList/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/categoryList/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.categoryList.showDialog;
      },
    },

    search_target: {
      set(state) {
        return this.$store.commit("pos/categoryList/updateSearchTarget", state);
      },

      get() {
        return this.$store.state.pos.categoryList.search_target;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  min-height: 25rem;
}

.item-block {
  height: 5rem;
  width: 6rem;
  background-color: #F5DFD4;
  text-align: center;
  line-height: 5rem;
  margin: 0.3rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(112, 112, 112, 0.45);
  color: #707070;
}

.cancel-btn {
  position: absolute;
  top: 0;
  color: black;
  font-size: x-large;
  cursor: pointer;
}
</style>