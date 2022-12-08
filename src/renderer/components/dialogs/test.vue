<template>
  <el-dialog title="" :visible.sync="dialog" width="40%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-form
          class="invoice-form width-full d-flex justify-center mb-2"
          label-position="top"
          :model="form"
        >
          <span
            class="width-full"
            style="margin-right: 30px; margin-left: 30px"
          >
            <el-input
              class="text-color bl-none mb-1 mt-4 justify-center"
              :placeholder="$t('search')"
            >
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </span>
        </el-form>
        <!--show-checkbox
          check-on-click-node-->
        <el-tree
          class="label-checkbox-padding"
          :data="data"
          node-key="id"
          :props="defaultProps"
          icon-class="el-icon-plus"
          :render-content="renderContent"
          @node-click="handleNodeClick"
          :highlight-current="true"
          @check-change="handleCheckChange"
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
          label: this.$t("chart-of-accounts"),
          className: "first-level",
          children: []
        }
      ],

      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    closeDialog(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    },

    async handleNodeClick(data, node, instance) {
       
      if (data.id == 0 || !data.hasChildren) return;
      else {
        try {
          let response = await this.$store.dispatch(
            "tree/getChildren",
            data.accID
          );
          if (response.status == 200) {
             
            // let singleBranch = this.data.children.find(
            //   child => child.accID == data.accID
            // );\
            data.children = [...this.children];
            // singleBranch.children.push(this.children);
             
          }
        } catch (e) {
           
        }
      }
    },
    renderContent(h, { node, data, store }) {
      return (
        <div>
          <input
            type="checkbox"
            class="el-checkbox__original"
            value={data.label}
            tabindex="-1"
            checked="false"
            name={"checkbox" + data.id}
          />
          <span type="success" id={"node-id-" + data.id}></span>
        </div>
      );
    },
    handleCheckChange(data, node, instance) {
       
       
       
    }
  },
  created() {},
  computed: {
    dialog: {
      set(state) {
        return this.$store.commit("accountingtree/updateDialogState", state);
      },

      get() {
        let statusDialog = this.$store.state.accountingtree.dialog;

        if (statusDialog && this.data[0].children.length == 0) {
          this.data[0].children = [...this.children];
        }
        return statusDialog;
      }
    },
    ...mapState({
      children: state => state.tree.children
    })
  }
};
</script>
<style >
#node-id-11 {
  color: #00bf13;
}

#node-id-12 {
  color: #00bf13;
}

#node-id-13 {
  color: #ff0000;
}

#node-id-14 {
  color: #ff0000;
}

#node-id-15 {
  color: #898a95;
}

#node-id-16 {
  color: #898a95;
}

#node-id-17 {
  color: #ff0000;
}
</style>