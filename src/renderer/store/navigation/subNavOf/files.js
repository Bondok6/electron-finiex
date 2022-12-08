module.exports = [
{
  label: "processing-setting-company",
  icon: "el-icon-menu",
  link: '/files/processing-setting-company'
},
{
  label: "company-initial-settings",
  icon: "el-icon-menu",
  link: '/files/company-initial-settings'
},
{
  label: "closing-financial-year",
  icon: "el-icon-menu",
  link: '/files/closing-financial-year'
},
{
  label: "closing-entries",
  icon: "el-icon-menu",
  link: '/files/closing-entries'
},
{
  label: "archiving-current-file",
  icon: "el-icon-menu",
  link: '/files/archiving-current-file'
},
{
  label: "backup-and-restore-data",
  icon: "el-icon-menu",
  link: '/files/backup-and-restore-data'
},
{
  label: "data-synchronization-records",
  icon: "el-icon-menu",
  link: '/files/data-synchronization-records'
},
{
  label: "transfer-attendance",
  icon: "el-icon-menu",
  link: '/files/transfer-attendance'
},
// ادارة الصلاحيات
{
  label: "permissions-management",
  icon: "el-icon-menu",
  is_group: true,
  group: [{
          label: "data-permission",
          icon: "el-icon-menu",
          link: '/files/permissions-management/data-permission'
      },
      {
          label: "movement-monitoring-logs",
          icon: "el-icon-menu",
          link: '/files/permissions-management/movement-monitoring-logs'
      },
      {
          label: "user-groups",
          icon: "el-icon-menu",
          link: '/files/permissions-management/user-groups'
      },
      {
          label: "existing-users-system",
          icon: "el-icon-menu",
          link: '/files/permissions-management/existing-users-system'
      },
      {
          label: "تغيير كلمة المرور الجديدة",
          icon: "el-icon-menu",
          link: '/files/permissions-management/change-new-password'
      },
      {
        label: "account-caution",
        icon: "el-icon-menu",
        link: '/files/permissions-management/account-caution'
    }
  ]
},
// خيارات البحث
{
  label: "search-options",
  icon: "el-icon-menu",
  link: "/files/",
  is_group: true,
  group: [{
          label: "البحث برقم الباركود",
          icon: "el-icon-menu"
              // link: '/files/wizard-facility-set'
      },
      {
          label: "البحث برقم المستند",
          icon: "el-icon-menu"
              // link: '/files/wizard-facility-set'
      },
      {
          label: "البحث بمبلغ المستند",
          icon: "el-icon-menu"
              // link: '/files/wizard-facility-set'
      },
      {
          label: "البحث بتاريخ المستند",
          icon: "el-icon-menu"
              // link: '/files/wizard-facility-set'
      }
  ]
},
// اعدادات النظام
{
  label: "system-settings",
  icon: "el-icon-menu",
  is_group: true,
  group: [{
          label: "خيارات النظام",
          icon: "el-icon-menu",
              link: '/files/system-settings/system-options'
      },
      {
          label: "إعدادات الطابعة",
          icon: "el-icon-menu",
              link: '/files/system-settings/printer-settings'
      },
      {
          label: "إدارة المهام",
          icon: "el-icon-menu",
              link: '/files/system-settings/task-management'
      },
      {
          label: "إعدادات طابعة الكاشير",
          icon: "el-icon-menu",
              link: '/files/system-settings/cashier-printer-settings'
      },
      {
          label: "نسخ الأصناف",
          icon: "el-icon-menu",
              link: '/files/system-settings/copy-items'
      },
      {
          label: "إستيراد الأصناف",
          icon: "el-icon-menu",
              link: '/files/system-settings/import-items'
      },
      {
          label: "POS ترتيب تصنيفات",
          icon: "el-icon-menu",
              link: '/files/system-settings/pos-ranking-rankings'
      },
      {
          label: "data-synchronization-between-branches",
          icon: "el-icon-menu",
          link: '/files/system-settings/data-synchronization-between-branches'
      },
      {
          label: "setting-sms",
          icon: "el-icon-menu",
          link: '/files/system-settings/setting-sms'
      },
      {
          label: "send-sms",
          icon: "el-icon-menu",
          link: '/files/system-settings/send-sms'
      },
      {
          label: "setting-e-mail",
          icon: "el-icon-menu",
          link: '/files/system-settings/setting-e-mail'
      },
      {
          label: "customer-screen",
          icon: "el-icon-menu",
          link: '/files/system-settings/customer-screen'
      },
      {
          label: "electronic-balance",
          icon: "el-icon-menu",
          link: '/files/system-settings/electronic-balance'
      }
  ]
}
]
