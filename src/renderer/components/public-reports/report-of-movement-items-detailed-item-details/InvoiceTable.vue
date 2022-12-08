<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="400"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="document_number"
        :label="$t('document-number')"
        width="350"
      />
      <el-table-column
        align="center"
        prop="document_date"
        :label="$t('document-date')"
      />
      <el-table-column
        align="center"
        prop="document_type"
        :label="$t('document-type')"
      />
      <el-table-column align="center" prop="price" :label="$t('price')" />
      <el-table-column align="center" prop="value" :label="$t('value')" />
      <el-table-column
        align="center"
        prop="importedـquantity"
        :label="$t('imported-quantity')"
      />
      <el-table-column
        align="center"
        prop="suppliedـquantity"
        :label="$t('supplied-quantity')"
      />
      <el-table-column
        align="center"
        prop="balanceـquantity"
        :label="$t('balance-quantity')"
      />
      <el-table-column
        align="center"
        prop="customerـsupplier"
        :label="$t('customer-supplier')"
      />

      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
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
            prop="document_number"
            :label="$t('document-number')"
            width="350"
          />
          <el-table-column
            align="center"
            prop="document_date"
            :label="$t('document-date')"
          />
          <el-table-column
            align="center"
            prop="document_type"
            :label="$t('document-type')"
          />
          <el-table-column align="center" prop="price" :label="$t('price')" />
          <el-table-column align="center" prop="value" :label="$t('value')" />
          <el-table-column
            align="center"
            prop="importedـquantity"
            :label="$t('imported-quantity')"
          />
          <el-table-column
            align="center"
            prop="suppliedـquantity"
            :label="$t('supplied-quantity')"
          />
          <el-table-column
            align="center"
            prop="balanceـquantity"
            :label="$t('balance-quantity')"
          />
          <el-table-column
            align="center"
            prop="customerـsupplier"
            :label="$t('customer-supplier')"
          />
        </el-table>

        <el-table
          :data="remaining"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
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
            prop="document_number"
            :label="$t('document-number')"
            width="350"
          />
          <el-table-column
            align="center"
            prop="document_date"
            :label="$t('document-date')"
          />
          <el-table-column
            align="center"
            prop="document_type"
            :label="$t('document-type')"
          />
          <el-table-column align="center" prop="price" :label="$t('price')" />
          <el-table-column align="center" prop="value" :label="$t('value')" />
          <el-table-column
            align="center"
            prop="importedـquantity"
            :label="$t('imported-quantity')"
          />
          <el-table-column
            align="center"
            prop="suppliedـquantity"
            :label="$t('supplied-quantity')"
          />
          <el-table-column
            align="center"
            prop="balanceـquantity"
            :label="$t('balance-quantity')"
          />
          <el-table-column
            align="center"
            prop="customerـsupplier"
            :label="$t('customer-supplier')"
          />
        </el-table>

        <el-table
          :data="highestPurchasePrice"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
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
            prop="document_number"
            :label="$t('document-number')"
            width="350"
          />
          <el-table-column
            align="center"
            prop="document_date"
            :label="$t('document-date')"
          />
          <el-table-column
            align="center"
            prop="document_type"
            :label="$t('document-type')"
          />
          <el-table-column align="center" prop="price" :label="$t('price')" />
          <el-table-column align="center" prop="value" :label="$t('value')" />
          <el-table-column
            align="center"
            prop="importedـquantity"
            :label="$t('imported-quantity')"
          />
          <el-table-column
            align="center"
            prop="suppliedـquantity"
            :label="$t('supplied-quantity')"
          />
          <el-table-column
            align="center"
            prop="balanceـquantity"
            :label="$t('balance-quantity')"
          />
          <el-table-column
            align="center"
            prop="customerـsupplier"
            :label="$t('customer-supplier')"
          />
        </el-table>

        <el-table
          :data="lowestPurchasePrice"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
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
            prop="document_number"
            :label="$t('document-number')"
            width="350"
          />
          <el-table-column
            align="center"
            prop="document_date"
            :label="$t('document-date')"
          />
          <el-table-column
            align="center"
            prop="document_type"
            :label="$t('document-type')"
          />
          <el-table-column align="center" prop="price" :label="$t('price')" />
          <el-table-column align="center" prop="value" :label="$t('value')" />
          <el-table-column
            align="center"
            prop="importedـquantity"
            :label="$t('imported-quantity')"
          />
          <el-table-column
            align="center"
            prop="suppliedـquantity"
            :label="$t('supplied-quantity')"
          />
          <el-table-column
            align="center"
            prop="balanceـquantity"
            :label="$t('balance-quantity')"
          />
          <el-table-column
            align="center"
            prop="customerـsupplier"
            :label="$t('customer-supplier')"
          />
        </el-table>

        <el-table
          :data="averagePurchasePrice"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
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
            prop="document_number"
            :label="$t('document-number')"
            width="350"
          />
          <el-table-column
            align="center"
            prop="document_date"
            :label="$t('document-date')"
          />
          <el-table-column
            align="center"
            prop="document_type"
            :label="$t('document-type')"
          />
          <el-table-column align="center" prop="price" :label="$t('price')" />
          <el-table-column align="center" prop="value" :label="$t('value')" />
          <el-table-column
            align="center"
            prop="importedـquantity"
            :label="$t('imported-quantity')"
          />
          <el-table-column
            align="center"
            prop="suppliedـquantity"
            :label="$t('supplied-quantity')"
          />
          <el-table-column
            align="center"
            prop="balanceـquantity"
            :label="$t('balance-quantity')"
          />
          <el-table-column
            align="center"
            prop="customerـsupplier"
            :label="$t('customer-supplier')"
          />
        </el-table>
      </template>
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
          id: 1,
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
        {
          id: 1,
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
        {
          id: 1,
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
      ],

      summaryTable: [
        {
          id: this.$t('total-incoming-period'),
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
        {
          id: "-",
          document_number: "-",
          document_date: "-",
          document_type: "-",
          price: "-",
          value: "-",
          importedـquantity: "-",
          suppliedـquantity: "-",
          balanceـquantity: "-",
          customerـsupplier: "-"
        },
      ],

      remaining: [
        {
          id: this.$t('total-elapsed-time'),
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
        {
          id: "-",
          document_number: "-",
          document_date: "-",
          document_type: "-",
          price: "-",
          value: "-",
          importedـquantity: "-",
          suppliedـquantity: "-",
          balanceـquantity: "-",
          customerـsupplier: "-"
        },
      ],

      highestPurchasePrice: [
        {
          id: this.$t('highest-purchase-price'),
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
        {
          id: "-",
          document_number: "-",
          document_date: "-",
          document_type: "-",
          price: "-",
          value: "-",
          importedـquantity: "-",
          suppliedـquantity: "-",
          balanceـquantity: "-",
          customerـsupplier: "-"
        },
      ],

      lowestPurchasePrice: [
        {
          id: this.$t('lowest-purchase-price'),
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
        {
          id: "-",
          document_number: "-",
          document_date: "-",
          document_type: "-",
          price: "-",
          value: "-",
          importedـquantity: "-",
          suppliedـquantity: "-",
          balanceـquantity: "-",
          customerـsupplier: "-"
        },
      ],

      averagePurchasePrice: [
        {
          id: this.$t('average-purchase-price'),
          document_number: "",
          document_date: "",
          document_type: "",
          price: "",
          value: "",
          importedـquantity: "",
          suppliedـquantity: "",
          balanceـquantity: "",
          customerـsupplier: ""
        },
        {
          id: "-",
          document_number: "-",
          document_date: "-",
          document_type: "-",
          price: "-",
          value: "-",
          importedـquantity: "-",
          suppliedـquantity: "-",
          balanceـquantity: "-",
          customerـsupplier: "-"
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex > 0 && columnIndex < 5) {
          return [0, 0];
        }
      }
    }
  }
};
</script>
