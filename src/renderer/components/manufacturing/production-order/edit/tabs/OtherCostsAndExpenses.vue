<template>
  <div style="background: none; margin-bottom: 60px">
    <el-container class="container mt-0 mb-0 invoice-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="250"
      >
        <el-table-column
          align="center"
          prop="id"
          :label="$t('id')"
          width="40"
        />
        <el-table-column
          align="center"
          prop="expense_name"
          :label="$t('expense-name')"
        />
        <el-table-column
          align="center"
          prop="percentage"
          :label="$t('ratio%')"
        />
        <el-table-column align="center" prop="value" :label="$t('value')" />
        <el-table-column align="center" prop="details" :label="$t('details')" />

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
    <div class="container mt-0 mb-0 invoice-table width-full">
      <el-button
        class="text-center w-250 btn-cyan-light mt-2"
        style="float: left; margin-left: 60px"
      >
        {{ $t("update-new-production-prices") }}
      </el-button>
    </div>
  </div>
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
        {
          id: 2,
          expense_name: "",
          percentage: "",
          value: "",
          details: "",
        },
        {
          id: 3,
          expense_name: "",
          percentage: "",
          value: "",
          details: "",
        },
        {
          id: 4,
          expense_name: "",
          percentage: "",
          value: "",
          details: "",
        },
        {
          id: 5,
          expense_name: "",
          percentage: "",
          value: "",
          details: "",
        },
      ],
    };
  },

  methods: {},
};
</script>