<template>
  <el-container>
  <div class="mt-2 action-buttons-nonGrown horizontal-center">
    <NuxtLink :to="localePath('/sales/sales-invoices')">
      <el-button size="mini" class="btn-blue">
        {{$t('save-f5')}}
      </el-button>
    </NuxtLink>
    <el-button size="mini" class="btn-violet-faded">{{$t('search-f7')}}</el-button>
    <el-button size="mini" class="btn-red">{{$t('delete-f8')}}</el-button>
    <NuxtLink :to="localePath('/sales/sales-invoices')" >
      <el-button size="mini" class="btn-violet">
        {{$t('back-f6')}}
      </el-button>
    </NuxtLink>
    <el-button size="mini" class="btn-cyan">{{$t('suspend-invoice-f9')}}</el-button>
    <el-button size="mini"  class="btn-grey" @click="print = true">{{$t('print-pdf')}}</el-button>
    <el-button size="mini"  class="btn-grey">{{$t('print-f4')}}</el-button>
    <el-button size="mini"  class="btn-grey">{{$t('print-cashier')}}</el-button>
  </div>

  <el-dialog title="" :visible.sync="print" width="35%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <label class="label">{{$t('invoice-print-selection')}}</label>
                  <el-select v-model="form.invoice_print_selection">
                    <el-option label="طباعة فاتورة أصل" :value="1"></el-option>
                    <el-option label="طباعة فاتورة أصل" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <label class="label">{{$t('expense-print-selection')}}</label>
                  <el-select v-model="form.expense_print_selection">
                    <el-option label="طباعة فاتورة المصروف" :value="1"></el-option>
                    <el-option label="طباعة فاتورة المصروف" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="print = false"
          >{{ $t("ok") }}</el-button
        >
      </span>
  </el-dialog>
  </el-container>
</template>

<script>
export default {
  data: function () {
    return {
      form : {
        invoice_print_selection: 1,
        expense_print_selection: 1,
      },
      print: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.horizontal-center {
  align-items: center;
}
.label {
  color: #6dd1cf;
}
</style>