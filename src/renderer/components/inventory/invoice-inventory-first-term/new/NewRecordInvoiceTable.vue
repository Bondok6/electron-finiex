<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" type="index" :label="$t('id')" width="45">
      </el-table-column>

      <el-table-column align="center" prop="item_name" :label="$t('item-name')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.itemID"
            filterable
            remote
            ref="name"
            :placeholder="$t('search')"
            :remote-method="remoteMethod"
            :loading="loading"
            @change="getItemDetalis(scope)"
            class="account-name width-full"
          >
            <el-option
              v-for="item in listItems"
              :key="item.itemId"
              :label="item.itemName + ' --- ' + item.itemId"
              :value="item.itemId"
            >
              <span style="float: left">{{ item.itemName }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">
                {{ item.itemId }}
              </span>
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        v-if="hasPersonality"
        :label="$t('items-attributes')"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.personality"
            filterable
            ref="name"
            :placeholder="$t('search')"
            class="account-name width-full"
          >
            <el-option
              v-for="item in personalityList"
              :key="item.id"
              :label="item.name + ' --- ' + item.id"
              :value="item.id"
            >
              <span style="float: left">{{ item.name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">
                {{ item.id }}
              </span>
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        v-if="hasBatch"
        :label="$t('patch-number')"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.batchNumber"
            @change="setExpireDateBasedOnBatchNumber(scope)"
            filterable
            :placeholder="$t('search')"
            clearable
            :disabled="!hasBatch"
          >
            <el-option
              v-for="item in batchList"
              :key="item.expireDateBatch"
              :label="item.batchNumber"
              :value="item.batchNumber"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        v-if="hasBatch"
        :label="$t('expire-date')"
      >
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.expireDateBatch"
            type="date"
            @change="setBatchNumberBasedOnExpireDate(scope)"
            :disabled="!hasBatch"
          ></el-date-picker>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.unitId"
            class="account-name width-full"
            @change="setQuantityFull(scope)"
            :disabled="!scope.row.itemID"
          >
            <el-option
              v-for="unit in unitsList"
              :key="unit.unitId"
              :label="unit.unitName"
              :value="unit.unitId"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.warehouseId"
            class="account-name width-full"
            :disabled="!scope.row.itemID"
          >
            <el-option
              v-for="warehouse in warehousesList"
              :key="warehouse.warehouseId"
              :label="warehouse.warehouseName"
              :value="warehouse.warehouseId"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="quantity" :label="$t('quantity')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.quantity"
            type="number"
            :min="1"
            :disabled="!scope.row.warehouseId"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="price" :label="$t('cost')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.price"
            type="number"
            :min="1"
            @input="calculateTotal(scope)"
            :disabled="!scope.row.quantity"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total"
            type="number"
            @keyup.enter.native="newRow()"
            readonly
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
            @confirm="tableData.splice(scope.$index, 1)"
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
import { mapMutations } from "vuex";
export default {
  name: "invoice",
  computed: {
    state() {
      return this.$store.state.inventory.invoiceInventoryFirstTerm;
    },
    listItems() {
      return this.state.listItems;
    },
    warehousesList() {
      return this.state.relatedWarehouses;
    },
    branchId() {
      return this.state.currentBranch.currentBranceId;
    },
    recordDetails() {
      return this.state.recordDetails;
    }
  },
  data() {
    return {
      loading: false,
      hasPersonality: false,
      hasBatch: false,
      unitsList: [],
      personalityList: [],
      batchList: [],
      tableData: [
        {
          id: "1",
          unitId: "",
          warehouseId: "",
          quantity: null,
          quantityFull: null,
          price: null,
          total: null,
          personality: null,
          batchNumber: null,
          expireDateBatch: null
        }
      ],
      appenedTableData: [
        {
          id: "1",
          unitId: "",
          warehouseId: "",
          quantity: null,
          quantityFull: null,
          price: null,
          total: null,
          personality: null,
          batchNumber: null,
          expireDateBatch: null
        }
      ]
    };
  },
  methods: {
    newRow() {
      this.tableData.push({ ...this.appenedTableData });
      setTimeout(x => {
        this.$nextTick(() => this.$refs.name.focus());
      }, 20);
    },

    ...mapMutations({
      setRecordDetails: "inventory/invoiceInventoryFirstTerm/setRecordDetails"
    }),

    remoteMethod(query) {
      if (!query) return;
      this.loading = true;
      this.$store
        .dispatch("inventory/invoiceInventoryFirstTerm/SearchListItems", {
          SearchString: query
        })
        .then(e => {
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
          this.$message.error(e.message);
        });
    },

    async getItemDetalis(scope) {
      const { itemID } = scope.row;
      console.log(itemID);
      const res = await this.$axios.get(
        `/inventory/first-term-invoice/details-items?ItemId=${itemID}`
      );
      const { data } = res.data;
      this.unitsList = data.itemstUnit;

      if (data.typeStock === 1) {
        this.hasPersonality = true;
        this.personalityList = data.personality;
      }
      if (data.typeStock === 2) {
        this.hasBatch = true;
        this.batchList = data.batch;
      }
    },

    setQuantityFull(scope) {
      const { unitId } = scope.row;
      const unit = this.unitsList.find(x => x.unitId === unitId);
      this.quantityFull = unit.quantityFull;
    },

    calculateTotal(scope) {
      const { quantity, price } = scope.row;
      scope.row.total = quantity * price;
    },

    calculateTotalRecords(data) {
      let total = 0;
      data.forEach(x => {
        total += +x.total || 0;
      });
      return total;
    },

    CalculateQuantityRecords(data) {
      let total = 0;
      data.forEach(x => {
        total += +x.quantity || 0;
      });
      return total;
    },

    setExpireDateBasedOnBatchNumber(scope) {
      const { batchNumber } = scope.row;
      const batchItem = this.batchList.find(x => x.batchNumber === batchNumber);
      if (batchItem) {
        scope.row.expireDateBatch = batchItem.expireDateBatch;
      }
    },

    setBatchNumberBasedOnExpireDate(scope) {
      const { expireDateBatch } = scope.row;

      // Add one day to expire date
      const expireDateBatchNextDay = new Date(expireDateBatch);
      expireDateBatchNextDay.setDate(expireDateBatchNextDay.getDate() + 1);

      const batchItem = this.batchList.find(
        x =>
          x.expireDateBatch ===
          this.DateFormater(expireDateBatchNextDay.toISOString())
      );

      if (batchItem) {
        scope.row.batchNumber = batchItem.batchNumber;
      }
    },

    DateFormater(date) {
      return date
        .split("T")[0]
        .split("-")
        .join("-");
    }
  },
  watch: {
    // save table data in record details state
    tableData: {
      handler(val) {
        const listInvoiceDetails = val.map(x => {
          return {
            itemId: x.itemID,
            unitId: x.unitId,
            quantity: +x.quantity,
            quantityFull: +x.quantityFull || 0,
            price: +x.price,
            total: x.total,
            warehouseId: x.warehouseId,
            serialNumber: x.serialNumber || "0",
            personality: x.personality || "0",
            batchNumber: x.batchNumber || "0",
            expireDateBatch: x.expireDateBatch || null
          };
        });
        const total = this.calculateTotalRecords(listInvoiceDetails);
        const totalQuantity = this.CalculateQuantityRecords(listInvoiceDetails);

        this.setRecordDetails({
          ...this.recordDetails,
          listInvoiceDetails,
          total,
          totalQuantity
        });
      },
      deep: true
    }
  }
};
</script>
