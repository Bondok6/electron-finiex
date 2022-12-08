<template>
    <el-dialog class="pd-0-dialog" title=" " :visible.sync="showDialog" width="70%">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>

      <span>
        <el-row class="width-full info-row">
          <el-col :xs="24" :md="7" :lg="7">
            <el-row class="info-input bordered-ar  bordered-en">
              <el-col :span="12">
                <div class="info-label">{{$t('table-number')}}</div>
              </el-col>
              <el-col :span="12">
                <el-input v-model="table_number"></el-input>
              </el-col>
            </el-row>
          </el-col>

          <el-col :md="1" :lg="1"></el-col>

          <el-col :xs="24" :md="7" :lg="7">
            <el-row class="info-input bordered-ar  bordered-en">
              <el-col :span="12">
                <div class="info-label">{{$t('order-number')}}</div>
              </el-col>
              <el-col :span="12">
                <el-input v-model="order_number"></el-input>
              </el-col>
            </el-row>
          </el-col>

          <el-col :md="1" :lg="1"></el-col>

          <el-col :md="7" :lg="7">
            <el-row class="info-input bordered-ar  bordered-en">
              <el-col :span="12">
                <div class="info-label">{{$t('invoice-number')}}</div>
              </el-col>
              <el-col :span="12">
                <el-input v-model="invoice_number"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </span>
      <span>
        <el-container
          class="mt-1 mb-1 pos-container orders-table" 
        >
          <el-table
            :data="searchTable"
            style="width: 100%"
            border
            max-height="250"
           >
            <el-table-column
              align="center"
              prop="id"
              :label="$t('id')"
              width="40"
            />
            <el-table-column
              align="center"
              prop="invoice_number"
              :label="$t('invoice-number')"
            />
            <el-table-column
              align="center"
              prop="invoice_date"
              :label="$t('invoice-date')"
            />
            <el-table-column
              align="center"
              prop="invoice_time"
              :label="$t('invoice-time')"
            />            
            <el-table-column
              align="center"
              prop="order_number"
              :label="$t('order-number')"
            />            
            <el-table-column
              align="center"
              prop="table_number"
              :label="$t('table-number')"
            />            
          </el-table>
        </el-container>
      </span>

      <div class="mt-4 width-full d-flex justify-center">
        <el-button  class="btn-pastal-green px-3 mx-1" 
                    @click="closeDialog(), closeParentDialog()">
          {{$t("list-invoice")}}
        </el-button>

        <el-button  class="btn-pastal-red px-3 mx-1" 
                    @click="closeDialog()">
          {{$t("back-exit")}}
        </el-button>
      </div>
    </el-dialog>
</template>


<script>
export default {
  name: "SalesInvoices",

  data: function () {
    return {
      searchTable: [
        {
          id: "-",
          invoice_number: "",
          invoice_date: "",
          invoice_time: "",
          order_number: "",
          table_number: "",
        },
        {
          id: "-",
          invoice_number: "",
          invoice_date: "",
          invoice_time: "",
          order_number: "",
          table_number: "",
        },
        {
          id: "-",
          invoice_number: "",
          invoice_date: "",
          invoice_time: "",
          order_number: "",
          table_number: "",
        },
        {
          id: "-",
          invoice_number: "",
          invoice_date: "",
          invoice_time: "",
          order_number: "",
          table_number: "",
        },
        {
          id: "-",
          invoice_number: "",
          invoice_date: "",
          invoice_time: "",
          order_number: "",
          table_number: "",
        },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/chooseOrder/updateDialogState", false);
    },
    closeParentDialog() {
      this.$store.commit("pos/returnInvoice/updateShowReturnByOrderDialog", false);
    }
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/chooseOrder/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.chooseOrder.showDialog;
      },
    },
    
    invoice_number: {
      set(state) {
        return this.$store.commit("pos/chooseOrder/updateInvoiceNumber", state);
      },

      get() {
        return this.$store.state.pos.chooseOrder.updateInvoiceNumber;
      },
    },    
    order_number: {
      set(state) {
        return this.$store.commit("pos/chooseOrder/updateOrderNumber", state);
      },

      get() {
        return this.$store.state.pos.chooseOrder.updateOrderNumber;
      },
    },    
    table_number: {
      set(state) {
        return this.$store.commit("pos/chooseOrder/updateTableNumber", state);
      },

      get() {
        return this.$store.state.pos.chooseOrder.updateTableNumber;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.info-row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
}

.info-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.info-label {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.cancel-btn {
  position: absolute;
  top: 0;
  color: black;
  font-size: x-large;
  cursor: pointer;
  padding: 0 20px;
}
</style>