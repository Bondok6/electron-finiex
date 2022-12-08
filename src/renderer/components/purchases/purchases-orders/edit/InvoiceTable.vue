<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
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

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        :min-width="200"
      >
        <template slot-scope="scope">
          <div class="select-container">
            <el-select
              v-model="scope.row.item_name"
              placeholder=""
              class="item-select input-menu"
              @keydown.meta.native="goToSearch($event)"
              @keydown.ctrl.native="goToSearch($event)"
            >
              <div class="add-btn add-btn-red" @click="openAddItemDialog()">
                {{ $t("add-item") }}
                <i class="el-icon-plus mx-1"></i>
              </div>
              <el-option :label="$t('item-1')" :value="1" />
              <el-option :label="$t('item-2')" :value="2" />
            </el-select>
          </div>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="item_category" label="/" width="60">
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

      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
        :min-width="100"
      >
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
    <!-- serch items -->
    <search-items />
        <!-- serial item info -->
    <add-serial-item />
  </el-container>
</template>
<script>
import AddItem from "~/components/dialogs/add-item";
import AddSerialItem from '~/components/dialogs/add-serial-item';
import SearchItems from "~/components/dialogs/search-items";
export default {
  name: "invoiceTable",
  components: {
    SearchItems,
    AddItem,
    AddSerialItem
  },
  data: function() {
    return {
      tableData: [
        {
          id: "1",
          item_name: "صنف كوع زاوية 5",
          item_category: "/",
          unit: "حبة",
          warehouse: "مستودع المعرض",
          statement: "",
          stock: "8",
          price: "20000",
          discount: "10000",
          tax: "10.255",
          total: "1000000"
        },
        {
          id: "1",
          item_name: "صنف كوع زاوية 5",
          item_category: "/",
          unit: "حبة",
          warehouse: "مستودع المعرض",
          statement: "",
          stock: "8",
          price: "20000",
          discount: "10000",
          tax: "10.255",
          total: "1000000"
        },
        {
          id: "1",
          item_name: "صنف كوع زاوية 5",
          item_category: "/",
          unit: "حبة",
          warehouse: "مستودع المعرض",
          statement: "",
          stock: "8",
          price: "20000",
          discount: "10000",
          tax: "10.255",
          total: "1000000"
        },
        {
          id: "1",
          item_name: "صنف كوع زاوية 5",
          item_category: "/",
          unit: "حبة",
          warehouse: "مستودع المعرض",
          statement: "",
          stock: "8",
          price: "20000",
          discount: "10000",
          tax: "10.255",
          total: "1000000"
        },
        {
          id: "1",
          item_name: "صنف كوع زاوية 5",
          item_category: "/",
          unit: "حبة",
          warehouse: "مستودع المعرض",
          statement: "",
          stock: "8",
          price: "20000",
          discount: "10000",
          tax: "10.255",
          total: "1000000"
        }
      ]
    };
  },
  methods: {
    openSearchItemsDialog() {
      this.$store.commit("searchItems/updateDialogState", true);
    },
    goToSearch(event) {
      const input = event.target;
      const inputLength = input.value.length;

      const isInputEmpty = inputLength === 0;
      if (isInputEmpty) {
        this.$router.push(
          "/inventory/invoice-inventory-first-term/search-items"
        );
      } else {
        this.openSearchItemsDialog();
      }
    },
    openAddItemDialog(){
      this.$store.commit(
        "additem/updateDialogState", true
      );
    },
    openAddSerialItemDialog(){
      this.$store.commit(
        "addSerialItem/updateDialogState",true
      );
    },
  }
};
</script>

<style lang="scss" scoped>
.item-select {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 5px 0.5rem;
}

.select-container {
  width: 100%;
  height: 2.5rem;
}
</style>
