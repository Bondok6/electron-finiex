<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                  <el-form-item :label="$t('from-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                  <el-form-item :label="$t('to-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" class="mt-40"> 
          <div class="inline-button-container d-flex inner-flex-buttons">
            <div class="spacer"></div>
              <el-button
              class="btn-cyan-light text-center mx-4-lg width-full-sm"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
            

            <el-form-item>
              <el-select
                v-model="form.sss"
                class="color-blue text-center placeHolderColor width-full-sm"
                :placeholder="$t('order-type')"
              >
                <el-option
                  :label="$t('store-supply-order')"
                  :value="1"
                
                >
                
                </el-option>
                <el-option
                  :label="$t('store-exchange-order')"
                  :value="2"
                  
                >
                 </el-option
                >
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
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
                      <el-col :xs="24" :sm="24" :md="6" :lg="6">
                        <el-form-item>
                          <label>{{ $t("from-number") }}</label>
                          <el-input v-model="form.input"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="6" :lg="6">
                        <el-form-item>
                          <label>{{ $t("delegate-name") }}</label>
                          <el-select v-model="form.comma" :placeholder="$t('all')">
                            <el-option :label="$t('all')" :value="2"></el-option>
                            <el-option :label="$t('all')" :value="1"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="6" class="width-full">
                      <el-col :xs="24" :sm="24" :md="6" :lg="6">
                        <el-form-item>
                          <label>{{ $t("to-number") }}</label>
                          <el-input v-model="form.input"></el-input>
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
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {
        number_to: 1,
        number_from: 1,
        type: 1,
        delegate: 1,
      },
      additionalChoice: false
    };
  },
};
</script>