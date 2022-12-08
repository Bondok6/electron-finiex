<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" ::md="6" :lg="5">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="3">
              <el-form-item :label="$t('from-number')">
                <el-input v-model="form.numFrom"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="6" :lg="5">
              <el-form-item :label="$t('supplier-client-name')">
                <el-select v-model="form.pcName">
                  <el-option
                    v-for="item in allProviderList"
                    :key="item.accId"
                    :label="item.pcname + '---' + item.accId"
                    :value="item.pcname"
                  >
                    <span style="float: left">{{ item.pcname }}</span>
                    <span
                      style="float: right; color: #8492a6; font-size: 13px"
                      >{{ item.accId }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="6" :lg="5">
              <el-form-item :label="$t('branch-name')">
                <el-select
                  v-model="form.brID"
                  :placeholder="$t('select-branch')"
                >
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
          </el-row>
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="6" :lg="5">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="6" :lg="3">
              <el-form-item :label="$t('to-number')">
                <el-input v-model="form.numTo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="5">
              <el-form-item :label="$t('tax-number')">
                <el-input v-model="form.taxNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="5">
              <el-form-item :label="$t('document-type')">
                <el-select
                  :placeholder="$t('all')"
                  v-model="form.MvTypeID"
                  ref="firstInput"
                >
                  <el-option value="" label="بدون"></el-option>
                  <el-option
                    v-for="typeMove in movementTypesList"
                    :key="typeMove.mddCode"
                    :value="typeMove.mddCode"
                    :label="typeMove.mddname"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="5">
              <el-form-item :label="$t('tax-category')">
                <el-select v-model="form.taxCat">
                  <el-option
                    :label="$t('taxbale-to-base-rate')"
                    :value="1"
                  ></el-option>
                  <el-option
                    :label="$t('taxbale-to-zero-rate')"
                    :value="0"
                  ></el-option>
                  <el-option
                    :label="$t('taxbale-to-real-estate-tax')"
                    :value="2"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6">
          <div class="inline-button-container d-flex flex-direction-column">
            <div class="vertical-buttons">
              <el-select
                v-model="form.orderBy"
                class="color-blue text-center placeHolderColor"
                :placeholder="$t('order-by')"
              >
                <el-option
                  :label="$t('supplier-client')"
                  :value="1"
                ></el-option>
                <el-option :label="$t('bond-number')" :value="2"></el-option>
                <el-option :label="$t('bond-date')" :value="3"></el-option>
              </el-select>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- dialog -->
  </el-container>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        orderBy: "",
        from: new Date(),
        to: new Date(),
        numFrom: null,
        numTo: null,
        pcName: null,
        brID: null,
        taxCat: null,
        docType: null,
        taxNo: null
      }
    };
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/100ProductsTaxStatement/setRecordDetails",
    })
  },
  computed:{
    ...mapState({
      financialYear: state => state.General.financialYear,
       movementTypesList: state => state.lists.movementTypesList,
      branchesList: state => state.lists.branchesList,
      allProviderList: state => state.lists.allProviderList

    })
  },
  watch: {
    form: {
      handler: function(newVal ) {
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