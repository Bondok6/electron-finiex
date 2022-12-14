<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
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
            size="small"
            class="text-center"
            v-model="scope.row.id"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="item_name" :label="$t('item-name')" :min-width="200">
        <template slot-scope="scope">
          <div class="select-container">
            <input-drop-down
              v-model="scope.row.item_name"
              placeholder=""
              class="item-select row-start"
              @keydown.meta.native="goToSearch($event)"
              @keydown.ctrl.native="goToSearch($event)"
            >
              <div class="add-btn add-btn-red" @click="openAddItemDialog()">
                {{$t("add-item")}} 
                <i class="el-icon-plus mx-1"></i> 
              </div>
              <el-option :label="$t('item-1')" :value="1" />
              <el-option :label="$t('item-2')" :value="2" />
            </input-drop-down>
          </div>
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
            @keydown.meta.native="openBatchDialog()"
            @keydown.ctrl.native="openBatchDialog()"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="price_sale" :label="$t('price-sale')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.price_sale"
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

    <!-- add item dialog -->
    <add-item />

    <!-- serial item info -->
    <add-serial-item />

    <!-- batch -->
    <batch />

    <!-- serch items -->
    <search-items />
  </el-container>
</template>


<script>
import AddItem from '~/components/dialogs/add-item';
import AddSerialItem from '~/components/dialogs/add-serial-item';
import Batch from '~/components/dialogs/batch';
import SearchItems from '~/components/dialogs/search-items';
import InputDropDown from '~/components/input-with-drop-down/input-drop-down.vue';

import editable_table from '~/components/sales/editable_table.js';
import open_dialogs from '~/components/sales/open_dialogs.js'

export default {
  name: "invoiceTable",

  mixins: [ editable_table, open_dialogs ],

  components: {
    AddItem,
    AddSerialItem,
    Batch,
    SearchItems,
    InputDropDown
  },

  data: function () {
    return {
      tableData: [
        {
          id: '',
          item_name: '',
          item_category: '',
          unit: '',
          warehouse: '',
          stock: '',
          statement: '',
          price_sale: '',
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
          stock: '',
          statement: '',
          price_sale: '',
          discount: '',
          tax: '',
          total: ''
        },
      ]
    };
  },

  methods: {    
    goToSearch(event) {
      const input = event.target;
      const inputLength = input.value.length;

      const isInputEmpty = inputLength === 0;
      if(isInputEmpty) {
        this.$router.push("/inventory/invoice-inventory-first-term/search-items");
      }
      else {
        this.openSearchItemsDialog();
      }
    }
  },
};
</script>