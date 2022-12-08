<template>
  <div class="mt-0_6 action-buttons-nonGrown ml-6">
    <el-button size="mini" class="mb-1 btn-blue" @click="salesInvoiceNumberEntry = true">
      {{ $t("save-f5") }}
    </el-button>

    <el-button size="mini" class="mb-1 btn-red">
      {{$t("delete-f8")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-violet">
      {{$t("back-f6")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-cyan px-3">{{ $t("list-f12") }}</el-button>

    <el-button size="mini" class="mb-1 btn-grey">
      {{ $t("print-pdf")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-grey">
      {{$t("print-f4")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-grey">
      {{$t("print-cashier")}}
    </el-button>

    <!-- sales invoice number entry dialog -->
    <el-dialog title=" " :visible.sync="salesInvoiceNumberEntry" width="45%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
          >
            <el-row class="width-full">
              <el-col :span="24" class="mb-2">
                <h1 class="dialog-title">
                  {{ $t("please-insert-sales-invoice-number") }}
                </h1>
              </el-col>
            </el-row>

            <el-row class="width-full input-row">
              <el-col :span="6">
                <div class="side-title">{{$t('sales-invoice-number')}}</div>
              </el-col>

              <el-col :span="9" class="mx-1">
                <el-input class="text-center pa-0"></el-input>
              </el-col>
              
              <el-col :span="7">
                <el-select v-model="return_type">
                  <el-option :label="$t('normal-return')" :value="1"></el-option>
                  <el-option :label="$t('normal-return')" :value="2"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <div class="d-flex justify-center width-full">
        <span class="mx-2">
          <el-button  class="btn-cyan-light px-4-lg mt-4" 
                      @click="salesInvoiceNumberEntry = fasle">{{
            $t("listing")
          }}</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "actions",

  data: function () {
    return {
      sales_invoice_number: "",
      salesInvoiceNumberEntry: false,   
      return_type: 1, 
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog-title {
  color: #606266;
  text-align: center;
  font-size: x-large;
  font-weight: 300;
  overflow: hidden;
}
.side-title {
  text-align: center;
  height: 40px;
  line-height: 40px;
}
</style>