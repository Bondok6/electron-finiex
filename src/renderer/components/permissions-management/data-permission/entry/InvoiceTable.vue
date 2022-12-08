<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" border stripe max-height="500">
      <el-table-column align="center" prop="id" :label="$t('id')" width="39" />
      <el-table-column
        align="center"
        prop="user_number"
        :label="$t('user-number')"
      >
      <template>
          <NuxtLink :to="localePath('/files/permissions-management/data-permission/edit')"
          >
            <span>1</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="user_name"
        :label="$t('user-name')"
      >
      
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

  data: function () {
    return {
      tableData: [
        {
          id: "1",
          user_number: " 1",
          user_name: "بدون",
        },
        {
          id: "2",
          user_number: "2 ",
          user_name: " بدون",
        },
        {
          id: "3",
          user_number: " 3",
          user_name: "بدون",
        },
        {
          id: "4",
          user_number: " 4",
          user_name: "بدون ",
        },
        {
          id: "5",
          user_number: " 5",
          user_name: "بدون",
        },
        {
          id: "6",
          user_number: " 6",
          user_name: "بدون",
        },
        {
          id: "7",
          user_number: " 7",
          user_name: "بدون",
        },
        {
          id: "8",
          user_number: " 8",
          user_name: "بدون ",
        },
        {
          id: "9",
          user_number: "9",
          user_name: " بدون",
        },
      ],
    };
  },
  methods: {
    openDialogOne(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    },
  },
};
</script>

