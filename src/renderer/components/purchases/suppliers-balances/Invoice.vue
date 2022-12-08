<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="16">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                  <el-form-item :label="$t('to-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                  <el-form-item :label="$t('supplier')">
                    <el-select :placeholder="$t('all')" v-model="form.input">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" class="mt-40"> 
          <div class="inline-button-container d-flex inner-flex-buttons">
            <div class="spacer"></div>
            <el-button
              class="btn-cyan-light text-center ml-3 mr-3"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>

            <el-form-item>
              <el-select
                v-model="form.sss"
                class="color-blue text-center placeHolderColor width-full-sm"
                :placeholder="$t('order')"
              >
                <el-option
                  :label="$t('supplier-name')"
                  :value="1"
                
                >
              
                </el-option>
                <el-option
                  :label="$t('maximum-balance')"
                  :value="2"
                  
                >
                 </el-option
                >
                <el-option
                  :label="$t('minimum-balance')"
                  :value="3"
                  
                >
                 </el-option
                >
                <el-option
                  :label="$t('account-number')"
                  :value="4"
                  
                >
                 </el-option
                >
              </el-select>
            </el-form-item>
          </div>
        </el-col>
         <!-- start dialog -->
        <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
          <span>
            <el-container class="d-block box-shadow mb-0 px-2 py-2">
              <el-form
                class="invoice-form width-full mb-8"
                label-position="top"
                :model="form"
              >
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="6" :lg="4">
                    <el-form-item>
                      <label>{{ $t("branch") }}</label>
                      <el-select :placeholder="$t('all')">
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6" :lg="4">
                    <el-form-item>
                      <label>{{ $t("country") }}</label>
                      <el-select :placeholder="$t('all')">
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("balance") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="form.form" :placeholder="$t('equals')">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="11" class="amount-append">
                      <el-input
                        class="text-color text-center "
                        v-model="form.transfer_number"
                        placeholder="55"
                      >
                      </el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>
                </el-row>
              </el-form>
            </el-container>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button
              class="btn-cyan-light px-4-lg"
              @click="additionalChoice = false"
              >{{ $t("agree") }}</el-button
            >
          </span>
        </el-dialog>
        <!-- end dialog -->
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data : function()
  {
    return {
      form : {
        date : 1,
        input : 1
      },
      additionalChoice : false
    }
  }
}
</script>