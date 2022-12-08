<template>
  <div>
    <el-container class="container ma-4 mt-0 mb-0 invoice-table">
      <el-table :data="data" style="width: 100%" stripe border max-height="750">
        <el-table-column
          align="center"
          prop="item_number"
          width="40"
          :label="$t('id')"
        />
        <el-table-column
          align="center"
          prop="code"
          :label="$t('cost-center-number')"
        >
          <template slot-scope="scope">
            <button
              @click="editCostCenter(scope.row.id)"
              style="background: transparent; border: none"
            >
              <span>{{ scope.row.code }}</span>
            </button>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="name"
          :label="$t('cost-center-name')"
        />
      </el-table>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "invoice",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    };
  },
  methods: {
    editCostCenter(id) {
      this.$store
        .dispatch("systemCards/costCenterData/fetchSingleRecord", { id })
        .then(({ data }) => {
          this.$store.commit(
            "systemCards/costCenterData/setSingleRecord",
            data.data
          );
          this.$store.commit("addcostcenter/updateDialogState", true);
        });
    }
  }
};
</script>
