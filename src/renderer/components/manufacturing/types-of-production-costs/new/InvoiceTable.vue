
<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="60">
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.id"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="type_number"
        :label="$t('type-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.type_number"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-number')"
      >
        <template slot-scope="scope">
          <el-select v-model="scope.row.account_number">
            <el-option>
              <button
                class="danger-color"
                style="border: none; background: none"
                @click="OpenDialog(true)"
              >
                {{ $t("add") }} <i class="el-icon-plus"></i>
              </button>
            </el-option>
            <el-option :label="$t('117523')" :value="1"></el-option>
            <el-option :label="$t('22761')" :value="2"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="type_name" :label="$t('type-name')">
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.type_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="Percentage_of_costs"
        :label="$t('Percentage-of-costs')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.Percentage_of_costs"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="The_value_of_the_costs"
        :label="$t('The-value-of-the-costs')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.The_value_of_the_costs"
            @keyup.enter.native="newRow()"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="type_status"
        :label="$t('type-status')"
      >
        <template slot-scope="scope">
          <el-select v-model="scope.row.type_status">
            <el-option :label="$t('direct-costs')" :value="1"></el-option>
            <el-option :label="$t('indirect-costs')" :value="2"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" width="60"> </el-table-column>
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
          id: "",
          type_name: "",
          type_number: "",
          account_number: "",
          Percentage_of_costs: "",
          The_value_of_the_costs: "",
          type_status: 1,
        },
      ],
      appenedTableData: [
        {
          id: "",
          type_name: "",
          type_number: "",
          account_number: "",
          Percentage_of_costs: "",
          The_value_of_the_costs: "",
          type_status: 1,
        },
      ],
    };
  },

  mounted() {
    setTimeout((x) => {
      this.$nextTick(() => this.$refs.id.focus());
    }, 1000);
  },

  methods: {
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout((x) => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 20);
    },
    OpenDialog(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    },
  },
};
</script>