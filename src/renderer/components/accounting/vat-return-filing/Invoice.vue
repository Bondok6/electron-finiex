<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('branch-name')">
            <el-select v-model="form.brID" :placeholder="$t('select-branch')">
              <el-option :label="$t('all')" :value="0"> </el-option>
              <el-option
                v-for="item in branchesList"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.from"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.to"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        from: new Date(),
        to: new Date(),
        brID: null
      },
      loading: false
    };
  },
  computed: {
    ...mapState({
      branchesList: state => state.lists.branchesList,
            financialYear: state => state.General.financialYear

    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/vatReturnFiling/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler(newVal, oldVal) {
        this.setRecordDetails({
          ...newVal,
          from: new Date(newVal.from).toISOString(),
          to: new Date(newVal.to).toISOString()
        });
      },
      deep: true
    },
      financialYear: {
      handler: function(newVal) {
         
        this.form.from = newVal?.from ? new Date(newVal.from) : new Date();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>