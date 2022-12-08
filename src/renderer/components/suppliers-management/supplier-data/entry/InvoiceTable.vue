<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" border stripe max-height="750" id="mytab1">
      <el-table-column align="center" type="index" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        :label="$t('supplier-number')"
      >
        <template slot-scope="scope">
          <NuxtLink :to="localePath('/suppliers-management/supplier-data/edit/' + scope.row.id)">
            <span>{{ scope.row.code }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="accName"
        :label="$t('supplier-name')"
      />
      <el-table-column
        align="center"
        :label="$t('account-number')"
      >
        <template slot-scope="scope">
          <button
            @click="openDialogOne(true)"
            style="background: transparent; border: none"
          >
            <span>{{scope.row.accID}}</span>
          </button>
        </template>
      </el-table-column>
    </el-table>
      <accountingtree />
  </el-container>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
  components: {
    Accountingtree,
  },
  name: "invoice",
  props: ['data'],
  methods: {
    openDialogOne(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    },
  },
};
</script>

