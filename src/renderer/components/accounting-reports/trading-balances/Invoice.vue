<template>
  <div class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="4" :lg="3">
              <el-form-item :label="$t('branch-name')">
                <el-select
                  v-model="form.branchID"
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

            <el-col :xs="24" :sm="6" :md="4" :lg="3">
              <el-form-item :label="$t('level')">
                <el-select v-model="form.accLevel">
                  <el-option :label="$t('all')" :value="maxLevel"></el-option>
                  <el-option
                    v-for="level in maxLevel ? maxLevel - 1 : maxLevel"
                    :key="level"
                    :label="level"
                    :value="level"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="3">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="3">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="4" :lg="3">
              <el-form-item :label="$t('cost-center')">
                <el-select
                  v-model="form.costCenterID"
                  :placeholder="$t('choose')"
                  class="width-full"
                >
                  <el-option :label="$t('without')" :value="0"> </el-option>

                  <el-option
                    v-for="item in costCentersList"
                    :key="item.mdcode"
                    :label="item.mname"
                    :value="item.mdcode"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="18" :md="20" :lg="21" class="mt-2">
              <div class="d-flex justify-center flex-wrap">
                <div class="spacer"></div>
                <el-row>
                  <el-col :span="24">
                    <el-form-item>
                      <el-button
                        class="width-full"
                        @click="form.excludeZeroAccs = !form.excludeZeroAccs"
                        :class="[
                          form.excludeZeroAccs ? 'btn-red' : 'btn-dark-grey'
                        ]"
                      >
                        <span v-if="!form.excludeZeroAccs">
                          {{ $t("showing-accounts-with-a-zero-balance") }}
                        </span>

                        <span v-else>
                          {{ $t("not-showing-accounts-with-a-zero-balance") }}
                        </span>
                      </el-button>
                    </el-form-item>
                    <div
                      class="d-flex mt-2 align-center doubleButtons flex-wrap"
                    >
                      <el-form-item class="mr-3">
                        <el-button
                          @click="form.includeStock = !form.includeStock"
                          :class="[
                            form.includeStock ? 'btn-dark-grey' : 'btn-red'
                          ]"
                        >
                          <span v-if="!form.includeStock">
                            {{ $t("not-include-inventory-value") }}
                          </span>

                          <span v-else>
                            {{ $t("include-inventory-value") }}
                          </span>
                        </el-button>
                      </el-form-item>

                      <el-form-item>
                        <el-button
                          class="float-left mt-point5"
                          @click="
                            form.includeOpeningBalances = !form.includeOpeningBalances
                          "
                          :class="[
                            form.includeOpeningBalances
                              ? 'btn-dark-grey'
                              : 'btn-red'
                          ]"
                        >
                          <span v-if="!form.includeOpeningBalances">
                            {{ $t("not-include-the-opening-balances") }}
                          </span>

                          <span v-else>
                            {{ $t("include-the-opening-balances") }}
                          </span>
                        </el-button>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
    <invoice-summary />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import InvoiceSummary from "./summary/Summary.vue";
export default {
  name: "invoice",
  components: {
    InvoiceSummary
  },

  data: function() {
    return {
      form: {
        from: new Date(),
        to: new Date(),
        accLevel: null,
        costCenterID: 0,
        branchID: null,
        excludeZeroAccs: false,
        includeStock: false,
        includeOpeningBalances: true
      },
      loading: false
    };
  },
  computed: {
    ...mapState({
      costCentersList: state => state.lists.costCentersList,
      branchesList: state => state.lists.branchesList,
      financialYear: state => state.General.financialYear,
      maxLevel: state => state.lists.maxLevel
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/Reports/tradingBalances/setRecordDetails"
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
