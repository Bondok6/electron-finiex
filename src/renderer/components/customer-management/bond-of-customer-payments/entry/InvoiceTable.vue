<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="bond_number"
        :label="$t('bond-number')"
      >
        <NuxtLink
          :to="
            localePath('/customer-management/bond-of-customer-payments/edit')
          "
        >
          4
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="bond_date"
        :label="$t('bond-date')"
      />
      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      />
      <el-table-column
        align="center"
        prop="paid_amount"
        :label="$t('paid-amount')"
      />
      <el-table-column
        align="center"
        prop="bond_status"
        :label="$t('bond-status')"
      />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: 1,
          bond_number: "Rs25a",
          bond_date: "حبة",
          client_name: "بدون",
          invoice_number: "15",
          paid_amount: "122",
          bond_status: "بدون",
        },
        {
          id: 2,
          bond_number: "Rs25a",
          bond_date: "حبة",
          client_name: "بدون",
          invoice_number: "15",
          paid_amount: "122",
          bond_status: "بدون",
        },
        {
          id: 3,
          bond_number: "Rs25a",
          bond_date: "حبة",
          client_name: "بدون",
          invoice_number: "15",
          paid_amount: "122",
          bond_status: "بدون",
        },
        {
          id: 4,
          bond_number: "Rs25a",
          bond_date: "حبة",
          client_name: "بدون",
          invoice_number: "15",
          paid_amount: "122",
          bond_status: "بدون",
        },
      ],
    };
  },

  methods: {},
};
</script>