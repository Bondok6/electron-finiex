<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table pt-great mt-4">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="case_number"
        :label="$t('case-number')"
      />
      <el-table-column
        align="center"
        prop="case_name"
        :label="$t('case-name')"
      />
      <el-table-column
        align="center"
        prop="case_color"
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
          case_number: "1",
          case_name: "السلام",
          case_colour: "",
        },
        {
          id: 2,
          case_number: "",
          case_name: "",
          case_colour: "",
        },
      ],
    };
  },

  methods: {},
};
</script>