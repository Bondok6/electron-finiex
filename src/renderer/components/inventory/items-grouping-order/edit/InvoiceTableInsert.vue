<template>
  <el-container class="container mt-0 mb-0 invoice-table editable-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
      class="editable-table"
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
        prop="item_name"
        :label="$t('item-name-compound')"
        width="450"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="item_unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_unit"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.warehouse"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="quantity" :label="$t('quantity')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.quantity"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
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
          item_name: '2000 - ?????? ?????????? 225*250 ????????',
          item_unit: '??????',
          warehouse: '????????????????',
          quantity: 8,
        },
        {
          id: 2,
          item_name: '2000 - ?????? ?????????? 225*250 ????????',
          item_unit: '??????',
          warehouse: '????????????????',
          quantity: 9,
        },
        {
          id: 3,
          item_name: '2000 - ?????? ?????????? 225*250 ????????',
          item_unit: '??????',
          warehouse: '????????????????',
          quantity: 2,
        },
        {
          id: 4,
          item_name: '2000 - ?????? ?????????? 225*250 ????????',
          item_unit: '??????',
          warehouse: '????????????????',
          quantity: 32,
        },
        {
          id: 5,
          item_name: '2000 - ?????? ?????????? 225*250 ????????',
          item_unit: '??????',
          warehouse: '????????????????',
          quantity: 62,
        },
      ]
    };
  },

  methods: {
    
  }
};
</script>