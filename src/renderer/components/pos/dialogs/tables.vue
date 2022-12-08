<template>
  <span>
    <el-dialog
      class="pt-0-dialog"
      title=" "
      :visible.sync="showDialog"
      width="75%"
    >
      <el-row class="mb-1">
        <el-col
          :xs="24"
          :md="8"
          class="d-flex justify-center align-center"
          style="flex-direction: column"
        >
          <el-button class="tables-button" @click="active = 'vacant_sessions'" :class="[active == 'vacant_sessions' ? 'tables-active-button' : '']">
            {{ $t("vacant-sessions") }} (0)</el-button
          >
          <el-button class="tables-button" @click="active = 'busy_sessions'" :class="[active == 'busy_sessions' ? 'tables-active-button' : '']">
            {{ $t("busy-sessions") }} (0)</el-button
          >
          <el-button class="tables-button" @click="active = 'reserved_session'" :class="[active == 'reserved_session' ? 'tables-active-button' : '']">
            {{ $t("reserved-sessions") }} (0)</el-button
          >
          <br />
          <el-button class="tables-button-blue" @click="showSubButton()">
            {{ $t("transfer-request") }}
          </el-button>
          <el-button  class="sub-button-blue" v-if="subButton"
                      @click="openTableSelectDialog(true)">
            {{ $t("transfer-some-items") }}
          </el-button>
          <el-button  class="sub-button-blue" v-if="subButton"
                      @click="openTableSelectDialog(false)">
            {{ $t("transfer-all-items") }}
          </el-button>
          <el-button class="tables-button-pink">
            {{ $t("cancel-request") }}
          </el-button>
          <el-button @click="closeDialog()" class="exitButton">
              {{ $t("exit") }}
              <span>
              {{ $t("smallArrow") }}
              </span>
          </el-button>
        </el-col>

      <!-- style here to be changed when data receieved from database -->
        <el-col :xs="24" :md="8" style="border-right: 1px solid; border-left: 1px solid; padding-bottom: 300px;">
          <div class="d-flex flex-wrap justify-center">
            <span class="tables-circle-green"> 1 </span>
            <span class="tables-circle-green"> 2 </span>
          </div>
        </el-col>

        <el-col :xs="24" :md="8">
          <div class="d-flex flex-wrap justify-center">
            <span class="tables-circle-pink"> 3 </span>
            <span class="tables-circle-pink"> 4 </span>
          </div>
        </el-col>
      </el-row>
    </el-dialog>

    <TableSelect />
  </span>
</template>


<script>
import TableSelect from "~/components/pos/dialogs/table-select"

export default {
  name: "Tables",

  components: {
    TableSelect, 
  },

  data: function () {
    return {
      subButton: false,
      active: "vacant_sessions",
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/tables/updateDialogState", false);
    },

    showSubButton() {
      this.subButton = true;
    },

    openTableSelectDialog(transferSomeItems) {
      this.$store.commit("pos/tables/updateTransferSomeItems", transferSomeItems);
      this.$store.commit("pos/tableSelect/updateDialogState", true);
      this.closeDialog();
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/tables/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.tables.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.tables-active-button{
  background-color: #6dd1cf !important;
  color: #fff !important;
}

.tables-button {
  border-radius: 0px !important;
  width: 100%;
  background-color: #fff;
  color: #000;
  border-color: transparent;
  &:hover,
  &:focus {
    background-color: #6dd1cf;
    color: #fff;
    border-color: transparent;
  }
  &:active {
    background-color: #6dd1cf;
    color: #fff;
    border-color: transparent;
  }
}

.tables-circle-green {
  padding: 15px 30px;
  background-color: #e2f5d5;
  border-radius: 50%;
  font-size: 22px;
  margin: 5px 20px;
}

.tables-circle-pink {
  padding: 15px 30px;
  background-color: #f5dfd4;
  border-radius: 50%;
  font-size: 22px;
  margin: 5px 20px;
}

.el-dialog__header {
  padding-top: 0px !important;
}

.tables-button-blue {
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 10px;
  width: 40%;
  background-color: #6dd1cf;
  color: #fff;
  border-color: transparent;
  &:hover,
  &:focus {
    background-color: #6dd1cf;
    color: #fff;
    border-color: transparent;
  }
  &:active {
    background-color: #6dd1cf;
    color: #fff;
    border-color: transparent;
  }
}

.tables-button-pink {
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 10px;
  width: 40%;
  background-color: #f5dfd4;
  color: #000;
  border-color: transparent;
  &:hover,
  &:focus {
    background-color: #f5dfd4;
    color: #000;
    border-color: transparent;
  }
  &:active {
    background-color: #f5dfd4;
    color: #000;
    border-color: transparent;
  }
}

.sub-button-blue {
  margin-bottom: 5px;
  width: 70%;
  background-color: #e8fafe;
  color: #21798d;
  border-color: transparent;
  &:hover,
  &:focus {
    background-color: #e8fafe;
    color: #21798d;
    border-color: transparent;
  }
  &:active {
    background-color: #e8fafe;
    color: #21798d;
    border-color: transparent;
  }
}

.exitButton {
  display: flex;
  border: none;
  width: 100%;
  background-color: transparent;
  border-color: transparent;
  &:hover,
  &:focus {
    background-color: transparent;
    border-color: transparent;
  }
  &:active {
    background-color: transparent;
    border-color: transparent;
  }

}
</style>
