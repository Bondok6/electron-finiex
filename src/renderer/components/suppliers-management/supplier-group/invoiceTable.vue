<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="data"
      style="width: 100%"
      stripe
      border
      max-height="750"
    >
      <el-table-column align="center" type="index" width="40" :label="$t('id')" />
      <el-table-column
        align="center"
        prop="code"
        :label="$t('group-number')"
      >
        <template slot-scope="scope">
          <button
            @click="openEditDialog(scope.row)"
            style="background: transparent; border: none"
            class="width-full"
          >
            <span>{{scope.row.code}}</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        :label="$t('group-name')"
      />
    </el-table>
    <supplierGroup :singleRecord="singleRecord"/>
  </el-container>
</template>

<script>
import { mapMutations } from "vuex";
import supplierGroup from "~/components/dialogs/supplier-group";
export default {
  name: "invoice-table",
  components: {
    supplierGroup
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      singleRecord: null
    }
  },
  methods: {
    ...mapMutations({
      updateDialogState: "suppliersManagement/supplierGroup/updateDialogState",
      setEditMode: "suppliersManagement/supplierGroup/setEditMode",
    }),
    openEditDialog(row) {
      this.setEditMode(true);
      this.$store.dispatch("suppliersManagement/supplierGroup/fetchSingleRecord", {id : row.id}).then(response => {
        this.singleRecord = response.data.data
        this.updateDialogState(true);
      }).catch(error => {
        this.$message.error(error.response.data.message);
      });

    }
  }
};
</script>
