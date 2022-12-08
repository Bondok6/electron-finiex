<template>
  <div>
    <div class="title">
      <span>{{$t('customer')}}</span> 
      <span class="px-1">{{customerId}}</span>
    </div>

    <el-container class="container invoice-table new-record-table table-mod d-flex flex-col">
      <el-table
          :data="tableData"
          style="width: 100%"
          border
        >
          <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="200">
            <template slot-scope="scope">
              <el-input
                size="small"
                class="text-center"
                v-model="scope.row.item_name"
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

          <el-table-column align="center" prop="quantity" :label="$t('quantity')">
            <template slot-scope="scope">
              <el-input
                size="small"
                class="text-center"
                v-model="scope.row.quantity"
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

          <el-table-column align="center" width="50">
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

    <div class="width-full btn-container">
      <div class="pay-btn" @click="payNow()">{{$t('pay-now')}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CustomerTable",

  props: {
    customerId: {
      type: Number,
      required: true,
    }
  },

  data: function () {
    return {
      tableData: [
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },     
      ]
    };
  },

  methods: {
    payNow() {
      this.$store.commit("pos/tablePartitioning/updateDialogState", false);
            this.$store.commit("pos/payment/updateActivePane", '1');

      this.$store.commit("pos/payment/updateDialogState", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-col {
  flex-direction: column;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.title {
  height: 1.5rem;
  display: flex;
  align-items: center;
}
</style>