<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table editable-table">
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
              class="text-center index"
              :value="scope.$index"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="item_name"
          :label="$t('item-name')"
        >
          <template slot-scope="scope">
            <el-select
              class="width-full"
              v-model="scope.row.joinItem"
              :placeholder="$t('search')"
              :loading="loadingItem"
              :remote-method="remoteFetchItems"
              filterable
              remote
              clearable
            >
              <el-option
                v-for="item in itemsCardList"
                :key="item.itemId"
                :value="item.itemId"
                :label="item.itemName"
              >
                <span style="float: left">{{ item.itemName }}</span>
                <span
                  style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                  >{{ item.itemId }}</span
                >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="unit" :label="$t('unit')">
          <template slot-scope="scope">
            <el-select
              class="width-full"
              v-model="scope.row.unitId"
              :placeholder="$t('search')"
              :loading="loadingUnit"
              :remote-method="remoteFetchUnits"
              filterable
              remote
              clearable
            >
              <el-option
                v-for="item in unitsList"
                :key="item.id"
                :value="item.id"
                :label="item.name"
              >
                <span style="float: left">{{ item.name }}</span>
                <span
                  style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                  >{{ item.code }}</span
                >
              </el-option>
            </el-select>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="warehouse"
          :label="$t('warehouse')"
        >
          <template slot-scope="scope">
            <el-select
              class="width-full"
              v-model="scope.row.warehouseID"
              :placeholder="$t('search')"
              :loading="loadingWarehouse"
              :remote-method="remoteFetchWarehouse"
              filterable
              remote
              clearable
            >
              <el-option
                v-for="item in warehousesList"
                :key="item.id"
                :value="item.id"
                :label="item.name"
              >
                <span style="float: left">{{ item.name }}</span>
                <span
                  style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                  >{{ item.code }}</span
                >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="quantity" :label="$t('quantity')">
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.quantity"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column align="center" prop="price" :label="$t('price')">
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.price"
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

   
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      loadingWarehouse: false,
      loadingUnit: false,
      loadingItem: false,
      tableData: [
        {
          joinItem: "",
        unitId: "",
        warehouseID: "",
        quantity: "",
        price: ""
        }
      ],

      appenedTableData: {
        joinItem: "",
        unitId: "",
        warehouseID: "",
        quantity: "",
        price: ""
      }
    };
  },

  mounted() {
    setTimeout(x => {
      this.$nextTick(() => this.$refs.id.focus());
    }, 1000);
  },
  computed: {
    ...mapState({
      unitsList: state => state.systemCards.globalList.unitsList,
      warehousesList: state => state.systemCards.globalList.warehousesList,
      itemsCardList: state => state.systemCards.globalList.itemsCardList
    })
  },
  methods: {
    ...mapMutations({
            setRecordDetails : "systemCards/itemsCards/setRecordDetails"

    }),
    async remoteFetchUnits(query) {
      this.loadingUnit = true;
      try {
        await this.$store.dispatch("systemCards/globalList/fetchUnitsList", {
          searchString: query
        });
        this.loadingUnit = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    async remoteFetchWarehouse(query) {
      this.loadingWarehouse = true;
      try {
        await this.$store.dispatch(
          "systemCards/globalList/fetchWarehousesList",
          {
            searchString: query
          }
        );
        this.loadingWarehouse = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    async remoteFetchItems(query) {
      this.loadingItem = true;
      try {
        await this.$store.dispatch(
          "systemCards/globalList/fetchItemsCardList",
          {
            searchString: query
          }
        );
        this.loadingItem = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout(x => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 20);
    }
  },
   watch: {
    tableData: {
      handler: function (val) {
        // Deep Clone the array
        let DeepClone = structuredClone(val);
        this.setRecordDetails({itemsPOs : DeepClone});
      },
      deep: true
    }
  }
};
</script>
