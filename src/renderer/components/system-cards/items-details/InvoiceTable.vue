<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      stripe
      max-height="250"
    >
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
      />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
      <el-table-column align="center" prop="price" :label="$t('price')" />
      <el-table-column align="center" prop="barcode" :label="$t('barcode')" />
      <el-table-column
        align="center"
        prop="active"
        :label="$t('active')"
        width="60"
      />
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
  data() {
    return {
      tableData: [
        {
          id: "1",
          item_name: "صنف 1-احمر-2",
          quantity: "55",
          price: "0.00",
          barcode: "",
          active: "",
          delete: "",
        },
        {
          id: "2",
          item_name: "صنف 1-اصفر-3",
          quantity: "11",
          price: "0.00",
          barcode: "",
          active: "",
          delete: "",
        },
        {
          id: "3",
          item_name: "صنف 1-اخضر-4",
          quantity: "24",
          price: "0.00",
          barcode: "",
          active: "",
          delete: "",
        },
        {
          id: "4",
          item_name: "صنف 1-اسود-2",
          quantity: "55",
          price: "0.00",
          barcode: "",
          active: "",
          delete: "",
        },
      ],
      dialogTableVisible: false,
    };
  },
};
</script>
