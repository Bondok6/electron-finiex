<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" label="م" width="40" />
      <el-table-column align="center" prop="item_id" label="رقم الصنف" width="250" />
      <el-table-column align="center" prop="item_name" label="اسم الصنف" width="450" />
      <el-table-column align="center" prop="item_unit" label="الوحدة" />
      <el-table-column align="center" prop="quantity" label="الكمية" />

      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
          >
            
            <i slot="reference" class="setting-button danger-color el-icon-delete-solid"></i>
          </el-popconfirm>

        </template>
      </el-table-column>
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
          item_id: 'Rs25a',
          item_name: 'كوع زاوية 225*250 كلاس 5',
          item_category: '',
          item_unit: 'حبة',
          quantity: 8,
        },
        {
          id: 2,
          item_id: 'X521a',
          item_name: 'كوع زاوية 225*250 كلاس 5',
          item_category: '',
          item_unit: 'حبة',
          quantity: 9,
        },
        {
          id: 3,
          item_id: 'Yu925a',
          item_name: 'كوع زاوية 225*250 كلاس 5',
          item_category: '',
          item_unit: 'حبة',
          quantity: 2,
        },
        {
          id: 4,
          item_id: 'OP925a',
          item_name: 'كوع زاوية 225*250 كلاس 5',
          item_category: '',
          item_unit: 'حبة',
          quantity: 32,
        },
        {
          id: 5,
          item_id: 'TG92ab',
          item_name: 'كوع زاوية 225*250 كلاس 5',
          item_category: '',
          item_unit: 'حبة',
          quantity: 62,
        },
      ]
    };
  },

  methods: {
  
  }
};
</script>