<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
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
        :label="$t('item-name')"
        width="350"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="slash" :label="$t('/')" width="40">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.slash"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.unit"
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
      <el-table-column align="center" prop="statement" :label="$t('statement')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.statement"
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
      <el-table-column align="center" prop="k_bonus" :label="$t('k-bonus')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.k_bonus"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="price_sale"
        :label="$t('price-sale')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.price_sale"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="discount" :label="$t('discount')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.discount"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="tax" :label="$t('tax')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.tax"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total"
            @keyup.enter.native="newRow()"
          ></el-input>
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
          item_name: "2000 - كوع زاوية 225*250 كلاس",
          unit: "50",
          warehouse: "مستودع المعرض",
          statement: "",
          quantity: 8,
          k_bonus: 8,
          price_sale: 8,
          discount: 8,
          tax: 8,
          total: 8,
        },
        {
          id: 2,
          item_name: "2000 - كوع زاوية 225*250 كلاس",
          unit: "50",
          warehouse: "مستودع المعرض",
          statement: "",
          quantity: 8,
          k_bonus: 8,
          price_sale: 8,
          discount: 8,
          tax: 8,
          total: 8,
        },
        {
          id: 3,
          item_name: "2000 - كوع زاوية 225*250 كلاس",
          unit: "50",
          warehouse: "مستودع المعرض",
          statement: "",
          quantity: 8,
          k_bonus: 8,
          price_sale: 8,
          discount: 8,
          tax: 8,
          total: 8,
        },
      ],
    };
  },

  methods: {},
};
</script>