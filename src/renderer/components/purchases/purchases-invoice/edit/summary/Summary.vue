<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :md="12" :lg="6" class="border-side-totals">
        <totals />
      </el-col>

      <el-col :md="12" :lg="3" class="border-side-totals">
        <expenses class="px-2" v-if="showCurrency == true" />
      </el-col>
      <el-col :md="12" :lg="15">
        <el-row :gutter="20"> 
            <el-col :md="24" :lg="15">
            <intervals />
          </el-col>
          <el-col :md="24" :lg="9">
              <notes />
          </el-col>
        </el-row>
        <actions />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Totals from "./Totals";
import Expenses from "./Expenses";
import Intervals from "./Intervals";
import Notes from "./Notes";
import Actions from "./Actions";
export default {
  name: "summary-section",
  components: {
    Totals,
    Expenses,
    Intervals,
    Notes,
    Actions
  },
  computed : {
    showCurrency() {
      return this.$store.state.addExpenses.show_currency;
    }
  }
};
</script>

<style lang="scss" scoped>

.border-side-totals{
    [dir='rtl'] & {
        border-left : 1px solid #707070;
    }
    [dir='ltr'] & {
        border-right : 1px solid #707070;
    }
    @media only screen and (max-width : 1300px) {
     [dir='rtl'] & {
        border-left : none;
    }
    [dir='ltr'] & {
        border-right : none;
    } 
    }
}
.border-side-table{
    [dir='rtl'] & {
        border-right: 1px solid #707070;
    }
    [dir='ltr'] & {
        border-left: 1px solid #707070;
    }
    @media only screen and (max-width : 1300px) {
     [dir='rtl'] & {
        border-right: none;
    }
    [dir='ltr'] & {
        border-left: none;
    } 
    }
}
</style>
