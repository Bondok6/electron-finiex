<template>
  <el-dialog
    title=""
    :visible.sync="dialog"
    width="40%"
    v-loading="true"
    @close="closeDialog"

  >
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <!-- Start  Search in Accounting Tree  -->
        <el-form
          class="invoice-form width-full d-flex justify-center mb-2"
          label-position="top"
        >
          <span
            class="width-full"
            style="margin-right: 30px; margin-left: 30px"
          >
            <el-input
              class="text-color bl-none mb-1 mt-4 justify-center"
              :placeholder="$t('search')"
              v-model="searchValue"
              @input="handleSearch"
            >
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </span>
        </el-form>
        <!-- End Search in Accounting Tree  -->
        <!-- Start  Accounting Tree  -->
        <el-tree
          class="label-checkbox-padding"
          :data="data"
          node-key="accID"
          icon-class="el-icon-plus"
          :props="defaultProps"
          :render-content="renderContent"
          :highlight-current="true"
          :expand-on-click-node="false"
          :default-expanded-keys="[0]"
          @node-expand="handleNodeExpandChange"
          ref="tree"
        >
        </el-tree>
        <!-- End Accounting Tree  -->
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
      searchValue: "",
      selectedNode: {},
      loading: true,
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
      }
    };
  },
  methods: {
    renderContent(_, { node, data, store }) {
      let type = data.mainFinalAccount;
      // to check if account is exist in the list before adding it to the tree (renderCountent function is called twice for each node (one of them return undefined)-- matrial ui --)
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

        let defaultStyle = "#000";

        if (allTypes.hasOwnProperty(type) && data.hasChildren) {
          defaultStyle = allTypes[type];
        } else {
          defaultStyle = "#000";
        }
        return (
          <div
            class="width-full ms-1"
            on-dblclick={() => this.doubleClick(data, node)}
            on-click={() => this.handleNodeClick(data, node, store)}
          >
            <span
              type="success"
              id={"node-id-" + data.id}
              style={"color:" + defaultStyle}
            >
              {data.label} -- {data.accID}
            </span>
          </div>
        );
      }
    },
    emitNodeSelected(node) {
      this.$store.commit("accountingTree/updateDialogState", false);
      this.searchValue = "";
      this.$emit("node-selected", node);
      console.log(node);
    },
    // doubleclick on node => emit dataOfAccount to parent component to show it
    doubleClick(data, node) {
      console.log(data ,"dou")
      this.emitNodeSelected(data);
    },
    handleNodeClick(data, node, store) {

      this.selectedNode = data;
    },
    async handleNodeExpandChange(data, node, instance) {
      if (data.children.length > 1) {
        return;
      }
      if (data.id == 0 || !data.hasChildren) {
        return;
      } else {
        try {
          let response = await this.$store.dispatch(
            "accountingTree/getChildren",
            data.accID
          );

          if (response.status == 200) {
            data.children = this.children;
          }
        } catch (e) {}
      }
    },
    async handleSearch() {
      try {
        await this.$store.dispatch(
          "accountingTree/getChildren",
          this.searchValue
        );
        this.data[0].children = [...this.children];
      } catch (e) {}
    },
    // close and emit dataOfAccount to parent component to show it
    closeDialog() {
      this.searchValue = "";
      this.dialog = false;
    }
  },

  computed: {
    dialog: {
      set(state) {
        return this.$store.commit("accountingTree/updateDialogState", state);
      },
      get() {
        let statusDialog = this.$store.state.accountingTree?.dialog || false;
        if (statusDialog && this.data[0].children.length === 0) {
          this.data[0].children = [...this.children];
        } else if (!statusDialog) {
          this.data[0].children = [];
        }
        return statusDialog;
      }
    },
    ...mapState({
      children: state => state.accountingTree.children
    })
  }
};
</script>
<style>
.ms-1 {
  margin-inline-start: 1rem;
}
.el-dialog {
  text-align: initial;
}
</style>
