<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="name" :label="$t('item-name')" />
      <el-table-column align="center" prop="/" :label="$t('/')" width="40">
        /
      </el-table-column>
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="warehouse"
        :label="$t('warehouse')"
      />
      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
      />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
      <el-table-column align="center" prop="bonus" :label="$t('k-bonus')" />
      <el-table-column
        align="center"
        prop="price_sale"
        :label="$t('price-sale')"
      />

      <el-table-column align="center" prop="discount" :label="$t('discount')" />
      <el-table-column align="center" prop="tax" :label="$t('tax')" />
      <el-table-column align="center" prop="total" :label="$t('total')" />
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
          id: "1",
          name: "44-1200",
          unit: "2014-02-08",
          warehouse: "بدون",
          statement: "-",
          quantity: "211",
          bonus: "211",
          price_sale: "211",
          discount: "211",
          tax: "211",
          total: "211",
        },
        {
          id: "2",
          name: "44-1200",
          unit: "2014-02-08",
          warehouse: "بدون",
          statement: "-",
          quantity: "211",
          bonus: "211",
          price_sale: "211",
          discount: "211",
          tax: "211",
          total: "211",
        },
        {
          id: "3",
          name: "44-1200",
          unit: "2014-02-08",
          warehouse: "بدون",
          statement: "-",
          quantity: "211",
          bonus: "211",
          price_sale: "211",
          discount: "211",
          tax: "211",
          total: "211",
        },
      ],
    };
  },
};
</script>
