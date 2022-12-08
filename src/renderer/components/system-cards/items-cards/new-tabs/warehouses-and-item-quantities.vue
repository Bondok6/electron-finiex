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
              :value="scope.$index + 1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="warehouses"
          :label="$t('warehouses')"
        >
          <template slot-scope="scope">
            <el-select
              class="width-full"
              v-model="scope.row.warehouseID"
              :placeholder="$t('search')"
              :loading="loading"
              :remote-method="remote"
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
        <el-table-column
          align="center"
          prop="openingQuantity"
          :label="$t('opening-quantity')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.openingQuantity"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="actualQuantity"
          :label="$t('actual-quantity')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.actualQuantity"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="notes" :label="$t('notes')">
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.notes"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="date" :label="$t('expire-date')">
          <template slot-scope="scope">
            <el-input
              size="small"
              type="date"
              style="text-align: center"
              v-model="scope.row.date"
              @keyup.enter.native="newRow()"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" width="60" v-if="tableData.length > 1">
          <template slot-scope="scope">
            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              :title="$t('confirm')"
              @confirm="deleteRow(scope.$index)"
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
      does_not_include_tax: 1,
      loading: false,
      tableData: [
        {
          warehouseID: "",
          openingQuantity: "",
          actualQuantity: "",
          notes: "",
          date: "",
          expire_date: "",
          branchId: "0"
        }
      ],
      appenedTableData: {
        warehouseID: "",
        openingQuantity: "",
        actualQuantity: "",
        notes: "",
        date: "",
        expire_date: "",
        branchId: "0"
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
      warehousesList: state => state.systemCards.globalList.warehousesList
    })
  },
  methods: {
    ...mapMutations({
      "setRecordDetails" : 'systemCards/itemsCards/setRecordDetails'
    }),
    async remote(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "systemCards/globalList/fetchWarehousesList",
          {
            searchString: query
          }
        );
        this.loading = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    // add new row to table
    deleteRow(index) {
      this.tableData.splice(index, 1);
    },
    // remove spcific row from table
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
        let DeepClone = structuredClone(val);
        this.setRecordDetails({quantityAndWarehouses : DeepClone});
      },
      deep: true
    }
  }
};
</script>
<style scoped lang="scss">
.width-75-lg {
  @media only screen and (min-width: 1280px) {
    width: 75%;
  }

  .mb-1 {
    @media only screen and (min-width: 768px) {
      margin-bottom: 0 !important;
    }
  }

  .input-style {
    @media only screen and (min-width: 768px) {
      margin: 0 1px !important;
    }
  }
}
</style>