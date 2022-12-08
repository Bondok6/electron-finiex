<template>
  <div>
    <el-row :gutter="30">
      <el-col :lg="15" :md="15" :sm="20" :xs="20">
        <el-table
          :data="[form]"
          class="invoice-tab-header"
          style="padding-right: 1pc; background: transparent"
        >
          <el-table-column
            align="center"
            prop="openBalance"
            :label="$t('opening-balance')"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="debit"
            :label="$t('Balance-debit')"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="credit"
            :label="$t('credit-balance')"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="currentBalance"
            :label="$t('current-balance')"
          >
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row class="p-2" :gutter="20">
      <el-col :xs="24" :md="15">
        <el-row :gutter="10" class="width-full">
          <el-col :lg="8" :md="8" :sm="24" :xs="24">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
            >
              <span>
                {{ $t("client-account-statement") }}
              </span>
            </el-button>
          </el-col>
          <el-col :lg="8" :md="8" :sm="24" :xs="24">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
            >
              <span>
                {{ $t("client-opening-balances") }}
              </span>
            </el-button>
          </el-col>
          <el-col :lg="8" :md="8" :sm="24" :xs="24">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
            >
              <span>
                {{ $t("debit-limit-client") }}
              </span>
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState , mapMutations} from "vuex";

export default {
  data() {
    return {
      form: {
        openBalance: "0.00",
        credit: "0.00",
        debit: "0.00",
        currentBalance: "0.00",
      }
    };
  },
  methods: {
  ...mapMutations({
    setRecordDetails: "customerManagement/customer/setRecordDetails"
  }),
},
  computed:{
    ...mapState({
      singleRecordDetails : state => state.customerManagement.customer.singleRecordDetails

    })
  },
  watch:{
    singleRecordDetails:{
      handler({openBalance , credit , debit , currentBalance}){
        this.form = {openBalance , credit , debit , currentBalance}
      },
      deep :true
    },
    form:{
      handler({openBalance , credit , debit , currentBalance}){
           this.setRecordDetails({
             openBalance , credit ,debit , currentBalance
           })
      },
      deep : true
    }
  }
};
</script>
