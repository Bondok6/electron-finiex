<template>
  <el-container
    class="container ma-4 mt-0 mb-0 invoice-table new-record-table pt-great mt-4"
  >
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
        prop="case_number"
        :label="$t('case-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.case_number"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="case_name" :label="$t('case-name')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.case_name"
            @keyup.enter.native="newRow()"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="case_colour"
        :label="$t('case-color')"
      >
        <template slot-scope="scope">
          <el-color-picker
            v-model="scope.row.case_colour"
            size="small"
          ></el-color-picker>
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
          case_number: "",
          case_name: "",
          case_colour: "",
        },
      ],
      appenedTableData: {
        id: "",
        type_name: "",
        type_number: "",
        account_number: "",
        Percentage_of_costs: "",
        The_value_of_the_costs: "",
        type_status: 1,
      },
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
