<template>
    <el-dialog title="" :visible.sync="showDialog" width="70%">
      <template slot="title">
        <div class="title width-full">{{$t('please-choose-the-table-to-transition-to')}}</div>
      </template>

      <div class="list mt-1">
        <div  v-for="(table, index) in tables" :key="index"
              class="item-block box-shadow">
          {{$t(table)}}
        </div>
      </div>
    </el-dialog>
</template>


<script>
export default {
  name: "TableTransition",

  data: function () {
    return {
      tables: [
        'table-1',
      ]
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/tableTransition/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/tableTransition/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.tableTransition.showDialog;
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
  background-color: #E2F5D5;
  text-align: center;
  line-height: 5rem;
  margin: 0.3rem;
  border-radius: 0.5rem;
  color: #707070;
}

.cancel-btn {
  position: absolute;
  top: 0;
  color: black;
  font-size: x-large;
  cursor: pointer;
}

.title { 
  padding-top: 0.5rem;
  text-align: center;
  color: #21798d;
}
</style>