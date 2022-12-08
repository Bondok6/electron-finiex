<template>
  <el-container class="container mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" border max-height="500">
      <el-table-column
        align="center"
        prop="category_name"
        :label="$t('category-name')"
      />
      <el-table-column
        align="center"
        prop="printer_name"
        :label="$t('printer-name')"
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
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          category_name: "R250*225",
          printer_name: "نقاص 225",
        },
        {
          category_name: "R250*225",
          printer_name: "نقاص 225",
        },
        {
          category_name: "R250*225",
          printer_name: "نقاص 225",
        },
        {
          category_name: "R250*225",
          printer_name: "نقاص 225",
        },
      ],
    };
  },
};
</script>

