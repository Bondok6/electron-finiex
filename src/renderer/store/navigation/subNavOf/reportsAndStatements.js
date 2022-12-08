module.exports = [
  // التقارير العامة
  {
    label: "public-reports",
    icon: "el-icon-tickets",
    is_group: true,
    group: [
      {
        label: "differences-stock-inventory",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/differences-stock-inventory"
      },
      {
        label: "inventory-adjustments-increase-and-decrease",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/inventory-adjustments-increase-and-decrease"
      },
      {
        label: "incoming-and-outcoming-stock",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/incoming-and-outcoming-stock"
      },
      {
        label: "transfer-of-branches",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/transfer-of-branches"
      },
      {
        label: "report-delivery-quantity-sales",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/report-delivery-quantity-sales"
      },
      {
        label: "report-transfer-or-receive-branches",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/report-transfer-or-receive-branches"
      },
      {
        label: "receives-of-branches",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/receives-of-branches"
      },
      {
        label: "report-sales-and-revenues-salemen",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/report-sales-and-revenues-salemen"
      },
      {
        label: "report-movement-documents",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/report-movement-documents"
      },
      {
        label: "report-sales-and-commission",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/report-sales-and-commission"
      },
      {
        label: "report-of-movement-items-salemen",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/report-of-movement-items-salemen"
      },

      {
        label: "movement-item-items",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "report-of-movement-items-summary-items-report",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-of-movement-items-summary-items-report"
          },
          {
            label: "report-of-movement-items-detailed-items-report",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-of-movement-items-detailed-items-report"
          },
          {
            label: "report-of-movement-items-detailed-item-details",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-of-movement-items-detailed-item-details"
          }
        ]
      },

      {
        label: "items-in-inventory",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "quantities-of-items-in-stock-summary-report",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/quantities-of-items-in-stock-summary-report"
          },
          {
            label: "quantities-of-items-in-stock-detailed-report",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/quantities-of-items-in-stock-detailed-report"
          }
        ]
      },

      {
        label: "report-items-sales-profits",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "report-sales-profits-summary-report",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-sales-profits-summary-report"
          },
          {
            label: "report-sales-profits-detailed-report",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-sales-profits-detailed-report"
          }
        ]
      },

      {
        label: "report-receivables-debit-credit",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "report-receivables-debit-credit-provider-credit",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-receivables-debit-credit-provider-credit"
          },
          {
            label: "report-receivables-debit-credit-customer-debit",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-receivables-debit-credit-customer-debit"
          },
          {
            label: "report-receivables-debit-credit-debit-or-credit",
            icon: "el-icon-tickets",
            link:
              "/reports-and-statements/public-reports/report-receivables-debit-credit-debit-or-credit"
          }
        ]
      },
      
      {
        label: "the-qty-required-for-items",
        icon: "el-icon-tickets",
        link:
          "/reports-and-statements/public-reports/the-qty-required-for-items"
      },
      {
        label: "report-movements-items",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/report-movements-items"
      },
      {
        label: "report-stagnant-items",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/report-stagnant-items"
      },
      {
        label: "report-ungroup-synthesis",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/report-ungroup-synthesis"
      },
      {
        label: "report-expired-date-items",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/report-expired-date-items"
      },
      {
        label: "report-of-stock-movement",
        icon: "el-icon-tickets",
        link: "/reports-and-statements/public-reports/report-of-stock-movement"
      }
    ]
  },

  // الكشوفات العامة
  {
    label: "public-statements",
    icon: "el-icon-document-copy",
    is_group: true,
    group: [
      {
        label: "sales-invoices-previous-years-selection",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/sales-invoices-previous-years-selection"
      },

      {
        label: "account-statements",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "account-statements-single-account-statement",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/account-statements-single-account-statement"
          },
          {
            label: "account-statements-multi-account-statement",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/account-statements-multi-account-statement"
          },
          {
            label: "account-statements-previous-years-account",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/account-statements-previous-years-account"
          }
        ]
      },

      {
        label: "report-payment-invoice-cashier",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "report-payment-invoice-cashier-report-total",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/report-payment-invoice-cashier-report-total"
          },
          {
            label: "report-payment-invoice-cashier-report-details",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/report-payment-invoice-cashier-report-details"
          }
        ]
      },

      {
        label: "receipt-vouchers-statements-report",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "receipt-vouchers-statements-report-total",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/receipt-vouchers-statements-report-total"
          },
          {
            label: "receipt-vouchers-statements-report-details",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/receipt-vouchers-statements-report-details"
          },
          {
            label: "payments-vouchers-statements-report-total",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/payments-vouchers-statements-report-total"
          },
          {
            label: "payments-vouchers-statements-report-details",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/payments-vouchers-statements-report-details"
          },
        ]
      },
      
      {
        label: "كشف مصروفات الفواتير",
        icon: "el-icon-plus",
        is_group: true,
        group: [
          {
            label: "expenses-purchase-sales-report-total",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/expenses-purchase-sales-report-total"
          },
          {
            label: "expenses-purchase-sales-report-details",
            icon: "el-icon-document-copy",
            link:
              "/reports-and-statements/public-statements/expenses-purchase-sales-report-details"
          }
        ]
      },
      
      {
        label: "report-of-price-offers",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/report-of-price-offers"
      },
      {
        label: "report-of-special-offers",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-of-special-offers"
      },
      {
        label: "report-of-booking-orders",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-of-booking-orders"
      },
      {
        label: "return-booking-order",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/return-booking-order"
      },
      {
        label: "sales-invoices-statements",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/sales-invoices-statements"
      },
      {
        label: "return-invoices-sales",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/return-invoices-sales"
      },
      {
        label: "report-delivery-customer",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-delivery-customer"
      },
      {
        label: "report-of-due-date-sales",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-of-due-date-sales"
      },
      {
        label: "report-of-payments-sales",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-of-payments-sales"
      },
      {
        label: "report-of-neqati-customer",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-of-neqati-customer"
      },
      {
        label: "purchases-orders",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/purchases-orders"
      },
      {
        label: "purchases-invoices-statement",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/purchases-invoices-statement"
      },
      {
        label: "return-purchase-invoices",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/return-purchase-invoices"
      },
      {
        label: "discount-vouchers",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/discount-vouchers"
      },
      {
        label: "report-of-booking-seats",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-of-booking-seats"
      },
      {
        label: "report-balancs-cost-center",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-balancs-cost-center"
      },
      {
        label: "daily-movement-statements",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/daily-movement-statements"
      },
      {
        label: "checks-movement",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/checks-movement"
      },
      {
        label: "report-movement-cost",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/report-movement-cost"
      },
      {
        label: "report-fund-bank",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/report-fund-bank"
      },
      {
        label: "report-employees-balance",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-employees-balance"
      },
      {
        label: "report-of-account",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/report-of-account"
      },
      {
        label: "report-of-fixed-assets",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/report-of-fixed-assets"
      },
      {
        label: "report-depreciation-fixed",
        icon: "el-icon-document-copy",
        link:
          "/reports-and-statements/public-statements/report-depreciation-fixed"
      },
      {
        label: "report-exclude-fixed",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/report-exclude-fixed"
      },
      {
        label: "client-payment-bond",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/client-payment-bond"
      },
      {
        label: "supplier-payment-bond",
        icon: "el-icon-document-copy",
        link: "/reports-and-statements/public-statements/supplier-payment-bond"
      }
    ]
  }
];
