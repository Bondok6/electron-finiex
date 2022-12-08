<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
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
            size="small"
            class="text-center"
            v-model="scope.row.id"
          ></el-input>
        </template>
      </el-table-column>
      
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" :min-width="120">
        <template slot-scope="scope">
          <el-input
            ref="lineStart"
            size="small"
            class="text-center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="item_category" label="/" width="60">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.item_category"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.unit"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.warehouse"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="statement" :label="$t('statement')" :min-width="100">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.statement"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="stock" :label="$t('stock')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.stock"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="bonusـamount" :label="$t('bonus-amount')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.bonusـamount"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="price" :label="$t('price')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.price"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="discount" :label="$t('discount')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.discount"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="tax" :label="$t('tax')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.tax"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.total"
            @keyup.enter.native="newRow()"
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
  name: "invoiceTable",

  data: function () {
    return {
      tableData: [
        {
          id: '',
          item_name: '',
          item_category: '',
          unit: '',
          warehouse: '',
          statement: '',
          stock: '',
          bonusـamount : '',
          price: '',
          discount: '',
          tax: '',
          total: ''
        },
      ],

      appenedTableData: [
        {
          id: '',
          item_name: '',
          item_category: '',
          unit: '',
          warehouse: '',
          statement: '',
          stock: '',
          bonusـamount : '',
          price: '',
          discount: '',
          tax: '',
          total: ''
        },
      ]
    };
  },

  mounted() {
    setTimeout((x) => {
      this.$nextTick(() => this.$refs.lineStart.focus());
    }, 1000);
  },

  methods: {
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout((x) => {
        this.$nextTick(() => this.$refs.lineStart.focus());
      }, 20);
    },
  },
};
</script>