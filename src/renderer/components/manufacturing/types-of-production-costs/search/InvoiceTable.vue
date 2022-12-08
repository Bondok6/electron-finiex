
<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="60" />

      <el-table-column
        align="center"
        prop="type_number"
        :label="$t('type-number')"
      />
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-number')"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.account_number"
            @change="openDialog(true)"
          >
            <el-option :label="$t('117523')" :value="1"></el-option>
            <el-option :label="$t('22761')" :value="2"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="type_name"
        :label="$t('type-name')"
      />

      <el-table-column
        align="center"
        prop="Percentage_of_costs"
        :label="$t('Percentage-of-costs')"
      />

      <el-table-column
        align="center"
        prop="The_value_of_the_costs"
        :label="$t('The-value-of-the-costs')"
      />
      <el-table-column
        align="center"
        prop="type_status"
        :label="$t('type-status')"
      />
      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <accounting-tree />
  </el-container>
</template>


<script>
import AccountingTree from "~/components/dialogs/accounting-tree";
export default {
  name: "invoice",
  components: {
    AccountingTree,
  },
  data: function () {
    return {
      dialog: false,
      tableData: [
        {
          id: "1",
          type_name: "مورد",
          type_number: "14",
          account_number: "",
          Percentage_of_costs: "40",
          The_value_of_the_costs: "50",
          type_status: "مباشر",
        },
      ],
    };
  },

  methods: {
    openDialog(state) {
       
      return this.$store.commit("accountingtree/updateDialogState", state);
    },
  },
};
</script>