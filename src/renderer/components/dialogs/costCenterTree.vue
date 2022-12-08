<template>
  <el-dialog title="" :visible.sync="dialogStatus" width="40%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
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
        <el-tree
          class="label-checkbox-padding"
          :data="dataCostCenter"
          node-key="costCenterCode"
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
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer">
      <div>
        <el-button
          size="mini"
          @click="dialogStatus = false"
          class="mb-1 btn-violet"
          >{{ $t("back-f6") }}</el-button
        >
        <el-button
          size="mini"
          @click="dialogStatus = false"
          class="mb-1 btn-grey"
          >{{ $t("print-f4") }}</el-button
        >
      </div>
    </span>
  </el-dialog>
</template>


<script>
export default {
  name: "costCenterTree",
  data() {
    return {
      searchValue: "",
      // selectedNode: {},
      dataCostCenter: [
        {
          id: 0,
          costCenterCode: 0,
          costCenterName: "شجره مراكز التكلفة",
          className: "first-level",
          children: []
        }
      ],
      defaultProps: {
        children: "children",
        label: "costCenterName"
      }
    };
  },
  computed: {
    dialogStatus: {
      set(state) {
        return this.$store.commit("costCenterTree/updateDialogState", state);
      },
      get() {
        let statusDialog = this.$store.state.costCenterTree.dialog;
        if (statusDialog && this.dataCostCenter[0].children.length == 0) {
          this.$store
            .dispatch("costCenterTree/getChildren", {
              parentID: 0
            })
            .then(res => {
              let { data } = res.data;
              this.dataCostCenter[0].children = data.map(child => {
                return {
                  ...child,
                  children: child.hasChildren ? [{ hasChildren: false }] : []
                };
              });
            })
            .catch(err => {
              this.$message.error(err.response.data.message);
            });
        } else if (!statusDialog) {
          this.dataCostCenter[0].children = [];
        }
        console.log(statusDialog);
        return statusDialog;
      }
    }
  },
  methods: {
    async handleSearch() {
      try {
        let response = await this.$store.dispatch(
          "costCenterTree/getChildren",
          { parentID: this.searchValue }
        );
        if (response.status == 200) {
          this.dataCostCenter[0].children = [...response.data.data];
        }
      } catch (e) {
        if (e.response.status == 400 && this.searchValue == "") {
          this.$message.info("تم عرض الشجرة بشكل تلقائي");
        } else {
          this.$message.error(
            e.response?.data?.message ?? "حدث خطأ أثناء البحث"
          );
        }
      }
    },
    renderContent(_, { node, data, store }) {
      return (
        <div
          class="width-full ms-1"
          on-dblclick={() => this.doubleClick(data, node)}
          // on-click={() => this.handleNodeClick(data, node, store)}
        >
          <span type="success" id={"node-id-" + data.id}>
            {data.costCenterName} -- {data.costCenterCode}
          </span>
        </div>
      );
    },
    emitNodeSelected(node) {
      this.dialogStatus = false;
      // this.searchValue = "";
      this.$emit("node-selected", node);
    },
    doubleClick(data) {
      this.emitNodeSelected(data);
    },
    // handleNodeClick(data, node, store) {
    //   this.selectedNode = data;
    // },
    async handleNodeExpandChange(data) {
      // TO CHECK NODE HAS CHILDREN ==> check if first index (object) contains more than one props beacuse by default it has one props
      if (Object.keys(data.children[0]).length > 1) {
        return;
      } else {
        try {
          let response = await this.$store.dispatch(
            "costCenterTree/getChildren",
            { parentID: data.id }
          );

          if (response.status == 200) {
            data.children =
              response.data.data.length > 0
                ? response.data.data.map(child => {
                    return {
                      ...child,
                      children: child.hasChildren
                        ? [{ hasChildren: false }]
                        : []
                    };
                  })
                : [{}];
          }
        } catch (e) {
          this.$message.error(e.response.data.message);
        }
      }
    }
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