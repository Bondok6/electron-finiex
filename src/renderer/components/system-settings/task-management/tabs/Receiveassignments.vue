<template>
  <el-container class="container mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" border max-height="500">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="task_title"
        :label="$t('task-title')"
      />
      <el-table-column
        align="center"
        prop="assignment_date"
        :label="$t('assignment-date')"
      />

      <el-table-column align="center" prop="display" :label="$t('display')" />

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
          task_title: "R250*225",
          assignment_date: "نقاص 225",
          display: "50",
        },
        {
          id: 2,
          task_title: "R250*225",
          assignment_date: "نقاص 225",
          display: "50",
        },
        {
          id: 3,
          task_title: "R250*225",
          assignment_date: "نقاص 225",
          display: "50",
        },
        {
          id: 4,
          task_title: "R250*225",
          assignment_date: "نقاص 225",
          display: "50",
        },
      ],
    };
  },
};
</script>

