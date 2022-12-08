<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="16">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="6" :md="6" :lg="6">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  placeholder="2020-10-15"
                  v-model="form.from"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="6">
              <el-form-item :label="$t('document-type')">
                <el-select v-model="form.formValue">
                <el-option :label="$t('all')" value="0"></el-option>
                  <el-option
                    v-for="(value, name) in formValues"
                    :value="value"
                    :key="value"
                    :label="$t(name)"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="6" :md="6" :lg="6">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  placeholder="2020-10-15"
                  v-model="form.to"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="6">
              <el-form-item :label="$t('document-status')">
                <el-select v-model="form.isDone">
                  <el-option :label="$t('posted')" value="1"></el-option>
                  <el-option :label="$t('not-posted')" value="0"></el-option>
                  <el-option :label="$t('both')" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Invoice",
  data: function() {
    return {
      form: {
        to: new Date(),
        from: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        isDone: "0",
        formValue: "0"
      }
    };
  },
  computed: {
    ...mapState({
      formValues: state => state.formValues
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/postAllDocus/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler(val, oldVal) {
         
        this.setRecordDetails({
          ...val,
          from: new Date(val.from).toISOString(),
          to: new Date(val.to).toISOString(),
          pageNumber: 1
        });
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
