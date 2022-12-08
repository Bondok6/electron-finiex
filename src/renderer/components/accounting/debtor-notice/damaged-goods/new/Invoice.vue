<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('bond-number')">
                <el-input v-model="form.bond_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('notice-type')">
                <el-select v-model="form.branch_from">
                  <el-option
                    :label="$t('damaged-goods')"
                    :value="1"
                  ></el-option>
                  <NuxtLink :to="localePath('/accounting/creditor-notice/earned-discount')">
                  <el-option
                      label="إشعار دائن خصم مكتسب"
                      :value="2"
                    ></el-option>
                  </NuxtLink>
                </el-select>
              </el-form-item>
            </el-col>
            
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('client-name')">
                <el-select v-model="form.branch_from">
                  <el-option :label="$t('without')" :value="1"></el-option>
                  <el-option :label="$t('without')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('box-bank')">
                <el-select v-model="form.branch_from">
                  <el-option :label="$t(' ')" :value="1"></el-option>
                  <el-option :label="$t(' ')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            
            
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('payment-method')">
                  <el-row :gutter="6">
                    <el-col :span="12">
                      <el-select v-model="form.equals">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12" class="amount-append">
                      <el-input
                        class="text-color text-center"
                        v-model="form.transfer_number"
                        placeholder=" "
                      >
                      </el-input>
                    </el-col>
                  </el-row>
              </el-form-item>
            </el-col>

            
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('cost-center')">
                <el-select v-model="form.branch_from">
                  <el-option :label="$t('main-branch')" :value="1"></el-option>
                  <el-option :label="$t('main-branch')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('bond-date')">
                <el-date-picker
                  type="date"
              placeholder="2020-10-15"
              format="yyyy-MM-dd"
              Value-format="yyyy-MM-dd"
              v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

       
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('sales-number')">
                <el-input v-model="form.bond_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('account-number')">
                <el-input v-model="form.bond_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>
            
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('current-balance')">
                <el-input v-model="form.bond_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('document-number')">
                <el-select v-model="form.warehouse_to">
                  <el-option :value="1"></el-option>
                  <el-option :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
    
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('document-date')">
                <el-date-picker
                  type="date"
              placeholder="2020-10-15"
              format="yyyy-MM-dd"
              Value-format="yyyy-MM-dd"
              v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {
        equals: 1,
        receipt_number: 1,
        transfer_price: 1,
        // warehouse_to: 1,
        warehouse_from: 1,
        // branch_to: 1,
        branch_from: 1,
      },
    };
  },
};
</script>