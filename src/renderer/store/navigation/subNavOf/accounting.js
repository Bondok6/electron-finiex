module.exports = [
  {
    label: "accounts-card",
    icon: "el-icon-document-checked",
    link: "/accounting/accounts-card"
  },
  {
    label: "journal-entry",
    icon: "el-icon-money",
    link: "/accounting/journal-entry"
  },
  {
    label: "search-journal-entry",
    icon: "el-icon-search",
    link: "/accounting/search-journal-entry"
  },
  {
    label: "card-fixed-assets",
    icon: "el-icon-notebook-2",
    link: "/accounting/card-fixed-assets"
  },
  {
    label: "assets-group",
    icon: "el-icon-collection",
    link: "/accounting/assets-group"
  },
  {
    label: "receipt-normal-vouchers",
    icon: "el-icon-document",
    link: "/accounting/receipt-normal-vouchers"
  },
  {
    label: "receipt-compound-vouchers",
    icon: "el-icon-document",
    link: "/accounting/receipt-compound-vouchers"
  },
  {
    label: "payment-normal-vouchers",
    icon: "el-icon-receiving",
    link: "/accounting/payment-normal-vouchers"
  },
  {
    label: "payment-compound-vouchers",
    icon: "el-icon-receiving",
    link: "/accounting/payment-compound-vouchers"
  },
  {
    label: "discount-vouchers",
    icon: "el-icon-bottom",
    link: "/accounting/discount-vouchers"
  },
  {
    label: "supplier-payment-bond",
    icon: "el-icon-bank-card",
    link: "/accounting/supplier-payment-bond"
  },
  {
    label: "customer-payment-bond",
    icon: "el-icon-bank-card",
    link: "/accounting/client-payment-bond"
  },
  //  اشعار دائن
  {
    label: "creditor-notice",
    icon: "el-icon-menu",
    is_group: true,
    group: [
      {
        label: "credit-note-for-damaged-goods",
        icon: "el-icon-bank-card",
        link: "/accounting/creditor-notice/damaged-goods"
      },
      {
        label: "allowed-discount",
        icon: "el-icon-bank-card",
        link: "/accounting/creditor-notice/allowed-discount"
      }
    ]
  },
  {
    label: "debtor-notice",
    icon: "el-icon-menu",
    is_group: true,
    group: [
      {
        label: "debtor-note-for-damaged-goods",
        icon: "el-icon-bank-card",
        link: "/accounting/debtor-notice/damaged-goods"
      },
      {
        label: "earned-discount",
        icon: "el-icon-bank-card",
        link: "/accounting/debtor-notice/earned-discount"
      }
    ]
    // {
    //   label: "allowed-discount",
    //   icon: "el-icon-bank-card",
    //   link: "/accounting/debtor-notice/allowed-discount"
    // }
  },
  {
    label: "post-all-documents",
    icon: "el-icon-upload2",
    link: "/accounting/post-all-documents"
  },
  {
    label: "funds-and-banks-movement",
    icon: "el-icon-takeaway-box",
    link: "/accounting/funds-and-banks-movement"
  },
  {
    label: "details-of-daily-movement",
    icon: "el-icon-paperclip",
    link: "/accounting/details-of-daily-movement"
  },
  {
    label: "maintenance-chart-of-accounts",
    icon: "el-icon-rank",
    link: "/accounting/maintenance-chart-of-accounts"
  },
  {
    label: "chart-of-accounts",
    icon: "el-icon-files",
    link: "/accounting/chart-of-accounts"
  },
  {
    label: "the-virtual-balance",
    icon: "el-icon-s-order",
    link: "/accounting/the-virtual-balance"
  },
  {
    label: "the-opening-balance",
    icon: "el-icon-s-help",
    link: "/accounting/the-opening-balance"
  },
  {
    label: "debit-limit-customers",
    icon: "el-icon-s-custom",
    link: "/accounting/debit-limit-customers"
  },
  {
    label: "vat-return-filing",
    icon: "el-icon-s-order",
    link: "/accounting/vat-return-filing"
  },
  {
    label: "vat-statement-report",
    icon: "el-icon-s-order",
    link: "/accounting/vat-statement-report"
  },
  {
    label: "100-products-tax-statement",
    icon: "el-icon-s-order",
    link: "/accounting/100-products-tax-statement"
  },


  // التقارير المحاسبية
  {
    label: "accounting-reports",
    icon: "el-icon-menu",
    is_group: true,
    group: [
      {
        label: "estimated-budget-report",
        icon: "el-icon-coin",
        link: "/accounting/accounting-reports/estimated-budget-report"
      },
      {
        label: "trading-balances",
        icon: "el-icon-bank-card",
        link: "/accounting/accounting-reports/trading-balances"
      },
      {
        label: "profit-and-loss-balances",
        icon: "el-icon-money",
        link: "/accounting/accounting-reports/profit-and-loss-balances"
      },
      {
        label: "auxiliary-report",
        icon: "el-icon-s-fold",
        link: "/accounting/accounting-reports/auxiliary-report"
      },
      {
        label: "general-assistant-report",
        icon: "el-icon-s-fold",
        link: "/accounting/accounting-reports/general-assistant-report"
      },
      {
        label: "income-statement-balances",
        icon: "el-icon-bottom",
        link: "/accounting/accounting-reports/income-statement-balances"
      },
      {
        label: "balance-sheet-report-horizontal",
        icon: "el-icon-paperclip",
        link: "/accounting/accounting-reports/balance-sheet-report-horizontal"
      },
      {
        label: "balance-sheet-report-vertical",
        icon: "el-icon-paperclip",
        link: "/accounting/accounting-reports/balance-sheet-report-vertical"
      },
      {
        label: "reference-balance-report-movement-balance",
        icon: "el-icon-guide",
        link:
          "/accounting/accounting-reports/reference-balance-report-movement-balance"
      },
      {
        label: "reference-balance-report-stock-balance",
        icon: "el-icon-guide",
        link:
          "/accounting/accounting-reports/reference-balance-report-stock-balance"
      }
    ]
  }
];
