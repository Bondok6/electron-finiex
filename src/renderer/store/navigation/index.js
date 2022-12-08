export const state = () => ({
  currentPrimaryNavItem: "sales",
  currentSubNavItem: "/sales/sales-invoices",
  direction: "rtl",
  collapse: true,
  sidebarDisplay: false,

  navItems: [
    // الملفات
    {
      key: "files",
      label: "files",
      subNavItems: require("./subNavOf/files")
    },

    // بطاقات النظام
    {
      key: "system-cards",
      label: "system-cards",
      subNavItems: require("./subNavOf/systemCards")
    },

    // ادارة العملاء
    {
      key: "customer-management",
      label: "customer-management",
      subNavItems: require("./subNavOf/customerManagement")
    },

    // ادارة الموردين
    {
      key: "suppliers-management",
      label: "suppliers-management",
      subNavItems: require("./subNavOf/suppliersManagement")
    },

    // المخزون
    {
      key: "inventory",
      label: "inventory",
      subNavItems: require("./subNavOf/inventory")
    },

    // التصنيع
    {
      key: "manufacturing",
      label: "manufacturing",
      subNavItems: require("./subNavOf/manufacturing")
    },

    // المبيعات
    {
      key: "sales",
      label: "sales",
      subNavItems: require("./subNavOf/sales")
    },

    // نقاط البيع
    {
      key: "pos",
      label: "pos",
      subNavItems: require("./subNavOf/pos")
    },

    // المشتريات
    {
      key: "purchases",
      label: "purchases",
      subNavItems: require("./subNavOf/purchases")
    },

    // المحاسبة
    {
      key: "accounting",
      label: "accounting",
      subNavItems: require("./subNavOf/accounting")
    },

    // التقارير و الكشوفات العامة
    {
      key: "reports-and-statements",
      label: "reports-and-statements",
      subNavItems: require("./subNavOf/reportsAndStatements")
    }

    // التقارير العامة
    // {
    //   key: "public-reports",
    //   label: "public-reports",
    //   subNavItems: require("./subNavOf/publicReports")
    // },

    // الكشوفات العامة
    // {
    //   key: "public-statements",
    //   label: "public-statements",
    //   subNavItems: require("./subNavOf/publicStatements")
    // }
  ]
});

export const mutations = {
  updateCurrentPrimaryNavItem(state, key) {
    state.currentPrimaryNavItem = key;
  },

  updateCurrentSubNavItem(state, key) {
    state.currentSubNavItem = key;
  },

  direction(state, key) {
    state.direction = key;
  },

  collapse(state, key) {
    state.collapse = key;
  },

  sidebarDisplay(state, key) {
    state.sidebarDisplay = key;
  }
};
