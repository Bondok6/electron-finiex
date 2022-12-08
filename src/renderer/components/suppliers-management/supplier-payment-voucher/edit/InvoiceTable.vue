<template>
  <div>
    <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
      <el-table
        :data="tableData" style="width: 100%" border stripe max-height="500"
      >
        <el-table-column
          align="center"
          prop="item_number"
          width="40"
          :label="$t('id')"
        >
          <template slot-scope="scope">
            <el-input
              ref="id"
              size="small"
              style="text-align: center"
              v-model="scope.row.item_number"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="invoice_number"
          :label="$t('invoice-number')"
          width="190"
        >
          <template slot-scope="scope">
           <el-input size="small" v-model="scope.row.invoice_number"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="bond_number"
          :label="$t('bond-number')"
        >
          <template slot-scope="scope">
            <el-input size="small" v-model="scope.row.bond_number"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="invoice_date"
          :label="$t('invoice-date')"
        >
          <template slot-scope="scope">
            <el-input size="small" v-model="scope.row.invoice_date"></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="due_date" :label="$t('due-date')">
          <template slot-scope="scope">
            <el-input size="small" v-model="scope.row.due_date"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="invoice_amount"
          :label="$t('invoice-amount')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              v-model="scope.row.invoice_amount"
            ></el-input>
          </template>
        </el-table-column>
        
        <el-table-column align="center" prop="remaining_amount" :label="$t('remaining-amount')">
          <template slot-scope="scope">
            <el-input size="small" v-model="scope.row.remaining_amount"></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="amount_paid" :label="$t('amount-paid')">
          <template slot-scope="scope">
            <el-input
              size="small"
              v-model="scope.row.amount_paid"
              @keyup.enter.native="newRow()"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" width="60">
          <template>
            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              title="تأكيد حذف الصنف ؟"
            >
              <i
                slot="reference"
                class="setting-button danger-color el-icon-delete-solid"
              ></i>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
    <!-- first dialog -->
    <addcostcenter />
  </div>
</template>

<script>
import Addcostcenter from '~/components/dialogs/add-cost-center';
export default {
  components: {
    Addcostcenter,
  },
  name: "invoice",

  data: function() {
    return {
      tableData: [
        {
          item_number: "1",
          invoice_number: "R250x225",
          bond_number: "نقاص 225*250 كلاس 5",
          invoice_date: " 01 / 04 / 2021",
          due_date: "01 / 04 / 2021",
          invoice_amount: "0.00",
          remaining_amount: "108.00",
          amount_paid: "108.00",
          
        },
        {
          item_number: "2",
          invoice_number: "CR200x160",
          bond_number: "نقاص 160*200 ملم كلاس",
          invoice_date: " 01 / 04 / 2021",
          due_date: "01 / 04 / 2021",
          invoice_amount: "0.00",
          remaining_amount: "108.00",
          amount_paid: "43.20",
        },
        {
          item_number: "3",
          invoice_number: "CG160.5",
          bond_number: "كوع زاوية 160 ملم اتش اس كلاس 5",
          invoice_date: " 01 / 04 / 2021",
          due_date: "01 / 04 / 2021",
          invoice_amount: "0.00",
          remaining_amount: "79.20",
          amount_paid: "79.20",
        },
        
        
      ],
      form: {
        adjustment_number: "1"
      },
      dialogOne: false
    };
  },
};
</script>
