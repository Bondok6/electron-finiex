export default {
  methods: {
    openAddBoxBankDialog() {
      this.$store.commit(
        "addBoxBank/updateDialogState", true
      );
    },
    openAddClientDialog() {
      this.$store.commit(
        "addClient/updateDialogState", true
      );
    },
    openAttachFileDialog() {
      this.$store.commit(
        "attachFile/updateDialogState", true
      );
    },
    openSearchInvoiceCategoriesDialog() {
      this.$store.commit(
        "searchInvoiceCategories/updateDialogState", true
      );
    },
    openSearchClientDialog() {
      this.$store.commit(
        "searchClient/updateDialogState", true
      );
    },
    openAddCostCenterDialog() {
      this.$store.commit(
        "addcostcenter/updateDialogState", true
      );
    },
    openAddItemDialog(){
      this.$store.commit(
        "additem/updateDialogState", true
      );
    },   
    openAddSerialItemDialog(){
      this.$store.commit(
        "addSerialItem/updateDialogState",true
      );
    },  
    openBatchDialog() {
      this.$store.commit(
        "batch/updateDialogState", true
      );
    },
    openSearchItemsDialog() {
      this.$store.commit(
        "searchItems/updateDialogState", true
      );
    },
    openPrintOptionsDialog() {
      this.$store.commit(
        "printOptions/updateDialogState", true
      );
    },
    openIvoiceNumberEntyrDialog() {
      this.$store.commit(
        "invoiceNumberEntry/updateDialogState", true
      );
    }
  }
}