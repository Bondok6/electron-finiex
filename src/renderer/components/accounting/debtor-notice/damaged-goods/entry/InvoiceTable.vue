<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column
        align="center"
        prop="bond_number"
        :label="$t('bond-number')"
      >
        <template>
          <NuxtLink
            :to="localePath('/accounting/debtor-notice/damaged-goods/edit/2')"
          >
            <span>22</span>
          </NuxtLink>
        </template>
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
      <el-table-column align="center" prop="total" :label="$t('total')" />
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

  data: function() {
    return {
      tableData: [
        {
          id: "1",
          bond_number: "22",
          bond_date: "10/10/2010",
          client_name: "احمد",
          invoice_number: "4544",
          total: "4444",
          bond_status: "مرحل"
        },
        {
          id: "2",
          bond_number: "22",
          bond_date: "10/10/2010",
          client_name: "احمد",
          invoice_number: "4544",
          total: "4444",
          bond_status: "مرحل"
        },
        {
          id: "3",
          bond_number: "22",
          bond_date: "10/10/2010",
          client_name: "احمد",
          invoice_number: "4544",
          total: "4444",
          bond_status: "مرحل"
        },
        {
          id: "4",
          bond_number: "22",
          bond_date: "10/10/2010",
          client_name: "احمد",
          invoice_number: "4544",
          total: "4444",
          bond_status: "مرحل"
        }
      ]
    };
  },

  methods: {}
};
</script>
