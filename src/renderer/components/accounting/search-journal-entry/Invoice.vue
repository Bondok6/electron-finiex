<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.dateFrom"
              @input="handleInput"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.dateTo"
              @input="handleInput"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('account-name')">
            <el-input
              class="text-color bl-none w-300"
              v-model.trim="form.searchValue"
              @input="handleInput"
              :placeholder="$t('search')"
            >
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="18" :md="19" :lg="20">
          <div class="inline-button-container d-flex mt-40">
            <div class="spacer"></div>
            <el-button
              class="text-center btn-cyan-light width-full-sm"
              @click="
                $store.commit('Accounting/accountingDailyJournal/updateDialogState', true)
              "
            >
              {{ $t("additional-choices") }}
            </el-button>
            <more-options></more-options>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapMutations } from "vuex";
import MoreOptions from "./summary/MoreOptions.vue";
export default {
  components: {
    MoreOptions
  },
  name: "Invoice",
  data: function() {
    return {
      form: {
        searchValue: "",
        dateFrom: "",
        dateTo: ""
      },
      dialogTableVisible: false
    };
  },
  methods: {
    handleInput() {
      // this.$store.dispatch("Accounting/accountingDailyJournal/fetchAdvancedRecords", {
      //   SearchString: this.form.searchValue,
      //   pageNumber: 1,
      //   DateFrom: this.formatDate(this.form.dateFrom),
      //   DateTo: this.formatDate(this.form.dateTo)
      // });
      this.setAdvancedOptions({
        SearchString: this.form.searchValue,
        pageNumber: 1,
        DateFrom: this.formatDate(this.form.dateFrom),
        DateTo: this.formatDate(this.form.dateTo)
      });
    },
    formatDate(date) {
      // swap month and day
      //input data format is mm-dd-yyyy ==> output format is yyyy-mm-dd
      let arrayOfdate = new Date(date).toLocaleDateString().split("/");
       
      if (arrayOfdate[0] === "Invalid Date") {
        return undefined;
      } else {
        let dataString =
          arrayOfdate[2] + "-" + arrayOfdate[0] + "-" + arrayOfdate[1];
         
        return dataString;
      }
    },
    ...mapMutations({
      setAdvancedOptions: "Accounting/accountingDailyJournal/setAdvancedOptions"
    })
  }
};
</script>
