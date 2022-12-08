<template>
  <el-dialog title="" :visible.sync="dialog" width="40%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-tree
          ref="tree"
          class="label-checkbox-padding"
          :data="data"
          node-key="id"
          icon-class="el-icon-plus"
          :props="defaultProps"
          :render-content="renderContent"
          :highlight-current="true"
          :expand-on-click-node="false"
          show-checkbox
          @node-expand="handleNodeExpandChange"
          :default-expanded-keys="[0]"
        >
        </el-tree>
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button class="btn-cyan-light px-4-lg" @click="closeDialog(false)">{{
        $t("ok")
      }}</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "accountingtree",
  data: function() {
    return {
      form: {},
      data: [
        {
          id: 0,
          accID: 0,
          label: this.$t("chart-of-accounts"),
          className: "first-level",
          children: [],
          mainFinalAccount: "Main Parent"
        }
      ],

      defaultProps: {
        children: "children",
        label: "label"
      },
      AccountIDs: []
    };
  },
  methods: {
    closeDialog(state) {
      this.$store.commit("accountingtreecopy/updateDialogState", state);
      this.$store.dispatch("accountingTree/getChildren", 0);
      this.copyAccounts();
    },
    async copyAccounts() {
       
      await this.$store.dispatch(
        "accountingtreecopy/copyAccounts",
        this.nodesCheckedIds
      ).catch(e => {
        this.$notify({
          group: "actions",
          title: "Error",
          type: "error",
          message: e.response.data.Message
        });
      });
    },

    renderContent(_, { node, data, store }) {
      let type = data.mainFinalAccount;
      if (!type) return;
      else {
        let allTypes = {
          Budget: "green",
          ميزانيه: "green",
          Trading: "blue",
          متاجره: "blue",
          "Revenue and Losses": "red",
          "أرباح وخسائر": "red"
        };

        let style = "#000";
        if (allTypes.hasOwnProperty(type) && data.hasChildren) {
          style = allTypes[type];
        } else {
          style = "#000";
        }
        return (
          <div class="width-full ms-1">
            <span
              type="success"
              id={"node-id-" + data.id}
              style={"color:" + style}
            >
              {data.label} -- {data.accID}
            </span>
          </div>
        );
      }
    },

    async handleNodeExpandChange(data, node, instance) {
      if (data.id == 0 || !data.hasChildren) return;
      else {
        try {
          let response = await this.$store.dispatch(
            "accountingtreecopy/getChildren",
            data.accID
          );

          if (response.status == 200) {
            data.children = [...this.children];
          }
        } catch (e) {
           
        }
      }
    }
  },

  computed: {
    dialog: {
      set(state) {
        return this.$store.commit(
          "accountingtreecopy/updateDialogState",
          state
        );
      },

      get() {
        let statusDialog = this.$store.state.accountingtreecopy.dialog;
        console.log(this.data[0]);
        if (statusDialog && this.data[0].children.length == 0) {
          this.data[0].children = [...this.children];
        } else if (!statusDialog) {
          this.data[0].children = [];
          this.$store.dispatch("accountingtreecopy/getChildren", 0);
        }
        return statusDialog;
      }
    },
    ...mapState({
      children: state => state.accountingtreecopy.children
    }),
    nodesCheckedIds() {
      let nodes = this.$refs.tree.getCheckedNodes();
      return nodes.map(({ accID }) => accID).filter(Boolean);
    }
  }
};
</script>
<style>
.ms-1 {
  margin-inline-start: 1rem;
}
</style>
