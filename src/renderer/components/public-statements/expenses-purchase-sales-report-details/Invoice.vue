<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('from-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.from_bond_date"
            ></el-date-picker> 
          </el-form-item>
        </el-col>       

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('supplier-client')">
            <el-select v-model="form.supplier_client">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('to-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.to_bond_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="20" :lg="20">
          <div class="inline-button-container d-flex mt-4">
            <!-- spacer -->
            <div class="spacer"></div>
            <el-button 
                class="text-center btn-cyan-light mt-1 px-6 "
                @click="additionalChoice = true"
              >
                {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("from-number") }}</label>
                  <el-select v-model="additional_choices.from_number">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("amount") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="additional_choices.amount">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class=" text-center"
                        v-model="additional_choices.transfer_number"
                        placeholder="55"
                      >
                      </el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>


              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("box-bank") }}</label>
                  <el-select v-model="additional_choices.box_bank">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="additional_choices.invoice_type">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>


              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-select v-model="additional_choices.to_number">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

                            
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("expenses-account") }}</label>
                  <el-select v-model="additional_choices.expenses_account">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("document-type") }}</label>
                  <el-select v-model="additional_choices.document_type">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
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
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      additionalChoice: false,
      order_type: null,
      form: {
        from_bond_date: 1,
        to_bond_date: 1,
        supplier_client: 1,
      },

      additional_choices: {
        from_number: 1,
        amount: 1,
        transfer_number: null,
        to_number: 1,
        box_bank: 1,
        invoice_type: 1,
        document_type: 1,
        expenses_account: 1,
      }
    };
  },
};
</script>