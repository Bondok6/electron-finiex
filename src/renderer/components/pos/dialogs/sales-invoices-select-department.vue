<template>
    <el-dialog title="" :visible.sync="showDialog" width="70%">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>

      <div class="list mt-1">
        <div  v-for="(department, index) in departments" :key="index"
              class="item-block box-shadow">
          {{$t(department)}}
        </div>
      </div>
    </el-dialog>
</template>


<script>
export default {
  name: "SalesInvoicesSelectDepartment",

  data: function () {
    return {
      departments: [
        'department-1',
      ]
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/salesInvoicesSelectDepartment/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/salesInvoicesSelectDepartment/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.salesInvoicesSelectDepartment.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: flex-end;
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