<template>
  <el-container class="container mt-0 mb-0 invoice-table new-record-table">
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

      <el-table-column align="center" prop="item_name" :label="$t('item-name')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="material_quantity"
        :label="$t('materials-quantity')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.material_quantity"
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
        prop="estimated_cost"
        :label="$t('estimated-cost')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.estimated"
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
          item_name: "",
          material_quantity: "",
          material_cost: "",
          additional_cost: "",
          estimated_cost: "",
        },
      ],
      appenedTableData: [
        {
          id: "",
          item_name: "",
          material_quantity: "",
          material_cost: "",
          additional_cost: "",
          estimated_cost: "",
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