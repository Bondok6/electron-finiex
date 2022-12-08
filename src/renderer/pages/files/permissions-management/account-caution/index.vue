<template>
  <div class="d-grids">
    <span class="d-wed">
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
        <el-tree
          class="label-checkbox-padding"
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1]"
          :props="defaultProps"
          icon-class="el-icon-plus"
          :render-content="renderContent"
        >
        </el-tree>
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer d-flex justify-center pt--2">
      <el-button class="btn-cyan-light px-4-lg" >{{
        $t("ok")
      }}</el-button>
    </span>
  </div>
</template>
<script>
export default {
  name: "accountingtree",
  data: function () {
    return {
      form: {},
      data: [
        {
          id: 1,
          label: this.$t("chart-of-accounts"),
          className: "first-level",
          children: [
            {
              id: 11,
              label: "1000" + " " + this.$t("assets"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي",
                },
              ],
            },
            {
              id: 12,
              label: "2000" + " " + this.$t("liabilities"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي",
                },
              ],
            },
            {
              id: 13,
              label: "3000"  + " " + this.$t("purchases"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي",
                },
              ],
            },
            {
              id: 14,
              label: "4000" + " " + this.$t("sales"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي",
                },
              ],
            },
            {
              id: 15,
              label: " 5000" + " " + this.$t("expenses"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي",
                },
              ],
            },
            {
              id: 16,
              label: "6000" + " " + this.$t("revenues"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي",
                },
              ],
            },
            {
              id: 17,
              label: "7000" + " " + this.$t("goods"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    closeDialog(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    },

    renderContent(h, { node, data, store }) {
      let btn = h("span", {
        props: { type: "success" },
        domProps: {
          innerHTML: data.label,
          id: "node-id-" + data.id,
        },
      });
      return btn;
    },
  },



  computed: {
    dialog: {
      set(state) {
        return this.$store.commit("accountingtree/updateDialogState", state);
      },

      get() {
        return this.$store.state.accountingtree.dialog;
      },
    },
  },
};
</script>
<style >

#node-id-11{
  color: #00BF13;
}

#node-id-12{
  color: #00BF13;
}

#node-id-13{
  color: #FF0000;
}

#node-id-14{
  color: #FF0000;
}

#node-id-15{
  color: #898A95;
}

#node-id-16{
  color: #898A95;
}

#node-id-17{
  color: #FF0000;
}
</style>