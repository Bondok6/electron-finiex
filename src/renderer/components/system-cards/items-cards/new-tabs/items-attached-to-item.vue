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
          prop="item_name"
          :label="$t('item-name')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.joinItem"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="unit" :label="$t('unit')">
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.unitId"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="quantity" :label="$t('quantity')">
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              type="number"
              v-model="scope.row.quantity"
              @keyup.enter.native="newRow()"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" width="60">
          <template slot-scope="scope">
            <el-popconfirm
              @confirm="deleteRow(scope.$index)"
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
      tableData: [
        {
          joinItem: "",
          unitId: "",
          quantity: ""
        }
      ],
      appenedTableData: {
        joinItem: "",
        unitId: "",
        quantity: ""
      }
    };
  },

  mounted() {
    setTimeout(x => {
      this.$nextTick(() => this.$refs.id.focus());
    }, 1000);
  },

  methods: {
    ...mapMutations({
      setRecordDetails: "systemCards/itemsCards/setRecordDetails"
    }),
    deleteRow(index) {
      this.tableData.splice(index, 1);
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
      handler: function(val) {
        // Deep Clone the array
        let DeepClone = structuredClone(val);
        this.setRecordDetails({ itemsJoins: DeepClone });
      },
      deep: true
    }
  }
};
</script>
