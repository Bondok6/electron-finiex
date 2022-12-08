<template>
  <el-container class="container mt-0 mb-0 ma-4 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="1250"
    >
      <el-table-column align="center" :label="$t('addition-details')">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="addition_date"
        :label="$t('addition-date')"
      >
        <template slot-scope="scope">
          <el-date-picker
            class="width-full"
            placeholder="yyyy/MM/dd"
            Value-format="yyyy/MM/dd"
            v-model="scope.row.dateCreated"
          ></el-date-picker>
          <!-- @keypress.native.enter="newRow()" -->
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('addition-value')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="number"
            v-model="scope.row.amount"
            @input="addOriginFixed(scope.row.amount)"
            @keyup.native.enter="newRow()"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
            @confirm="deleteRow(scope.$index)"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
          </el-popconfirm>
        </template>
      </el-table-column>

      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full visible-table"
          stripe
          border
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="originValue"
            :label="$t('the-value-of-the-original-at-the-time-of-purchase')"
          />
          <el-table-column
            align="center"
            prop="additionsValue"
            :label="$t('the-value-of-the-additions-to-the-discount')"
          />
          <el-table-column
            align="center"
            prop="netValue"
            :label="$t('net-asset-value')"
          />
        </el-table>
      </template>
    </el-table>
  </el-container>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "fixed-addition",
  data: function() {
    return {
      tableData: [
        {
          name: "",
          amount: "",
          dateCreated: new Date()
        }
      ],
      appendData: {
        name: "",
        amount: "",
        dateCreated: new Date()
      },
      summaryTable: [
        {
          originValue: 0,
          additionsValue: 0,
          netValue: 0
        },
        {
          originValue: "-",

          additionsValue: "-",
          netValue: "-"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      RecordDetails: state => state.Accounting.cardFixedAssets.RecordDetails
    })
  },
  watch: {
    tableData: {
      handler(NewValue) {
        let deepClone = JSON.parse(JSON.stringify(NewValue));
         
        this.setRecordDetails({ fixedAssetsAddedList: deepClone });
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/cardFixedAssets/setRecordDetails"
    }),
    newRow() {
      this.tableData.push({ ...this.appendData });
    },
    addOriginFixed(value) {
      this.summaryTable[0].additionsValue = this.tableData.reduce((prev, curr) => {
        return prev + Number(curr.amount);
      }, 0);
      this.summaryTable[0].netValue = this.tableData.reduce(
        (prev, curr) => {
          return prev + Number(curr.amount);
        },
        Number(this.RecordDetails.purchasePrice)
      );
    },
    deleteRow(row) {
      this.tableData.splice(this.tableData.indexOf(row), 1);
    }
  },
  watch: {
    RecordDetails: {
      handler(NewValue) {
        this.summaryTable[0].originValue = NewValue.purchasePrice;
      },
      deep: true
    },
    tableData: {
      handler(NewValue) {
        let deepClone = JSON.parse(JSON.stringify(NewValue));
        this.setRecordDetails({
          fixedAssetsAddedList: deepClone,
          netValue: this.summaryTable[0].netValue
        });
      },
      deep: true
    }
  },
  created() {
    this.setRecordDetails({
      fixedAssetsAddedList: []
    });
  }
};
</script>
