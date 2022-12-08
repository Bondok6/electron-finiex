<template>
  <div>
    <ReturnInvoices />
  </div>
</template>

<script>
import ItemList from "~/components/pos/dialogs/item-list"
import CategoryList from "~/components/pos/dialogs/category-list"
import TableSelect from "~/components/pos/dialogs/table-select"
import TableTransition from "~/components/pos/dialogs/table-transition"
import OrdersTransfer from "~/components/pos/dialogs/orders-transfer"
import SalesInvoices from "~/components/pos/dialogs/sales-invoices"
import addInvoiceAttachment from "~/components/pos/dialogs/add-invoice-attachment"
import SalesInvoicesSelectDepartment from "~/components/pos/dialogs/sales-invoices-select-department"
import SalesInvoicesSelectTable from "~/components/pos/dialogs/sales-invoices-select-table"
import keypadAddItem from "~/components/pos/dialogs/keypad-add-item"
import Keypad from "~/components/pos/dialogs/keypad"
import DelegateSelect from "~/components/pos/dialogs/delegate-select"
import ClientSelect from "~/components/pos/dialogs/client-select"
import Payment from "~/components/pos/dialogs/payment/payment"
import tablePartitioning from "~/components/pos/dialogs/payment/table-partitioning/table-partition-by-items"
import DeliveryType from "~/components/pos/dialogs/payment/dialogs/delivery-type"
import TablePartitionForm from "~/components/pos/dialogs/payment/dialogs/table-partition-form"
import Tables from "~/components/pos/dialogs/tables"
import InternalOrders from "~/components/pos/internal-orders"
import RestaurantSalesInvoice from "~/components/pos/restaurant-sales-invoice"
import ReturnInvoices from "~/components/pos/return-invoice"
import PosSalesInvoice from "~/components/pos/pos-sales-invoice"

export default {
  components : {  ItemList, CategoryList, TableSelect,
                  TableTransition, OrdersTransfer, SalesInvoices,
                  addInvoiceAttachment, SalesInvoicesSelectDepartment,
                  SalesInvoicesSelectTable,
                  Tables, InternalOrders, RestaurantSalesInvoice,
                  Tables, InternalOrders, RestaurantSalesInvoice, PosSalesInvoice,
                  keypadAddItem, Keypad, DelegateSelect, ClientSelect, Payment,
                  tablePartitioning, DeliveryType, TablePartitionForm, Tables,
                  ReturnInvoices },

  mounted() {
    // this.$store.commit("pos/tables/updateDialogState", true);
  }
}
</script>
