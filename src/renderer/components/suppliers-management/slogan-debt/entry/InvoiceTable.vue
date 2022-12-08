<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="500">
       <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="bond_number" :label="$t('bond-number')">
        <template>
        <NuxtLink :to="localePath('/suppliers-management/slogan-debt/edit/')">
          <span>1</span>
        </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="bond_date" :label="$t('bond-date')" />
      <el-table-column align="center" prop="supplier_name" :label="$t('supplier-name')" />
      <el-table-column align="center" prop="invoice_number" :label="$t('invoice-number')" />
      <el-table-column align="center" prop="amount_paid" :label="$t('amount-paid')" />
      <el-table-column align="center" prop="bond_type" :label="$t('bond-status')" />
    </el-table>
      <accountingtree />
  </el-container>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
  components: {
    Accountingtree,
  },

  name: "invoice",

  data: function () {
    return {
      tableData: [
        {

          item_number: '1',
          bond_number : '1',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'مرحل',

        },
        {

          item_number: '2',
          bond_number : '2',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'غير مرحل ',

        },
        {

          item_number: '3',
          bond_number : '3',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'مرحل',
        },
        {

          item_number: '4',
          bond_number : '4',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'غير مرحل',
        },
        {

          item_number: '5',
          bond_number : '5',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'مرحل',

        },
        {

          item_number: '6',
          bond_number : '6',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'غير مرحل',

        },
        {

          item_number: '7',
          bond_number : '7',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'مرحل',

        },
        {

          item_number: '8',
          bond_number : '8',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'غير مرحل',

        },
        {

          item_number: '9',
          bond_number : '9',
          bond_date : '01 / 04 / 2021',
          supplier_name: 'احمد',
          invoice_number : '5362863',
          amount_paid : '3052562',
          bond_type : 'غير مرحل',

        },
      ]
    };
  },
  methods: {
  },
};
</script>

