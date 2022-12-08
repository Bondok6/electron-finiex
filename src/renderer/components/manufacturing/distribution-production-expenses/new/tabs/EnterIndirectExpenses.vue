<template>
  <el-container class="container mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40">
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
        prop="expense_id"
        :label="$t('expense-name')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.expense_id"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="balance" :label="$t('balance')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.balance"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="details" :label="$t('details')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.details"
            @keyup.enter.native="newRow()"
          ></el-input>
        </template>
      </el-table-column>

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
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: 1,
          expense_id: "",
          balance: "",
          details: "",
        },
      ],
      appenedTableData: [
        {
          id: "",
          expense_id: "",
          balance: "",
          details: "",
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
  },
};
</script>