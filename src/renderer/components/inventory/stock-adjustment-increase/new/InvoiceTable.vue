<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" label="م" width="40">
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
        width="250"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="item_category" label="/" width="40">
        <template>
          <span @click="openAddSerialItemDialog()"> // </span>
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
      <el-table-column align="center" prop="quantity" :label="$t('quantity')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.quantity"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="price" :label="$t('price-sale')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.price"
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

    <!-- serial item info -->
    <add-serial-item />
  </el-container>
</template>


<script>
import AddSerialItem from '~/components/dialogs/add-serial-item';

export default {
  name: "invoice",
  components : {
      AddSerialItem
    },
  data: function () {
    return {
      tableData: [
        {
          id: "",
          item_id: "",
          item_name: "",
          item_category: "",
          item_unit: "",
          warehouse: "",
          quantity: "",
          price: "",
          total: "",
        }
      ],

      appenedTableData: [
        {
          id: "",
          item_id: "",
          item_name: "",
          item_category: "",
          item_unit: "",
          warehouse: "",
          quantity: "",
          price: "",
          total: "",
        }
      ]
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
    openAddSerialItemDialog(){
    this.$store.commit(
      "addSerialItem/updateDialogState",true
      );
    },
  },
};
</script>