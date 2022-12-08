<template>
  <div class="container ma-4  py-2 mt-0">
    <el-row :gutter="25" class="px-2">
      <el-col :lg="14" :md="12" :sm="22" :xs="25">
        <div class="text-unbold  d-flex flex-wrap px-2">
     <el-table class="summaryTables box-shadow"
      :data="tableData"
      style="width: 100%">
      <el-table-column align="center"
        prop="date"
        :label="$t('date')"
         width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="clients"
        :label="$t('clients')"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="number_of_invoices"
        width="180"
        :label="$t('number-of-invoices')">
      </el-table-column>
    </el-table>
  </div>
    </el-col>
<el-col :lg="10" :md="12" :sm="16" :xs="25">
        <div class="d-flex space-between box-shadow mx-3 mt-1">
     <el-table class="summaryTables box-shadow"
      :data="tableData1"
      style="width: 100%">
      <el-table-column align="center"
        prop="Billing_type"
        :label="$t('Billing-type')"
         width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="number_of_invoices"
        :label="$t('number-of-invoices')"
        width="180">
      </el-table-column>
    </el-table>
  </div>
        </el-col>
      </el-row>

  </div>
</template>


<script>

export default {
  name: 'summary-section',
   data: function () {
    return {
       tableData: [{
            date: '30 / 06 / 2021',
            clients: 'محمد علي القاسم',
            number_of_invoices: '12'
          }, {
            date: '30 / 06 / 2021',
            clients: 'إسلام ياسر السيد',
            number_of_invoices: '10'
          }, {
            date: '30 / 06 / 2021',
            clients: 'محمد علي القاسم',
            number_of_invoices: '12'
          }, ],
           tableData1: [{
            Billing_type: 'فواتير نقدية',
            number_of_invoices: '80',
          }, {
            Billing_type: 'آجلة',
            number_of_invoices: '15',
          }, {
            Billing_type: 'مرحلة - غير مرحلة',
            number_of_invoices: '6',
          }],
      form: {
        total: 0,
        total_LE: 0,
        net: 0,
       
      },
    };
  },

}
</script>