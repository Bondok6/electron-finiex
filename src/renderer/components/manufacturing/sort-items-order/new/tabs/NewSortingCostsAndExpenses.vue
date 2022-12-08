<template>
  <el-container class="container mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
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
        prop="expense_name"
        :label="$t('expense-name')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.expense_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="percentage" :label="$t('ratio%')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.percentage"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="value" :label="$t('value')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.value"
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
          expense_name: "",
          percentage: "",
          value: "",
          details: "",
        },
      ],
      appenedTableData: [
        {
          id: "",
          expense_name: "",
          percentage: "",
          value: "",
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