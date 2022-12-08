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
        prop="order_number"
        :label="$t('order-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.order_number"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="order_date"
        :label="$t('order-date')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.order_date"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="material_cost"
        :label="$t('materials-cost')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.material_cost"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="additional_cost"
        :label="$t('additional-costs')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.additional_cost"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_cost"
        :label="$t('total-costs')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_cost"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="operation"
        :label="$t('operating-price')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.operation"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="operation_number"
        :label="$t('batch-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.operation_number"
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
          order_number: "",
          order_date: "",
          material_cost: "",
          additional_cost: "",
          total_cost: "",
          opertation: "",
          operation_number: "",
        },
      ],
      appenedTableData: [
        {
          id: "",
          order_number: "",
          order_date: "",
          material_cost: "",
          additional_cost: "",
          total_cost: "",
          opertation: "",
          operation_number: "",
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