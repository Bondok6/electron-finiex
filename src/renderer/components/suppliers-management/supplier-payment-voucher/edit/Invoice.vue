<template>
  <el-container class="container  box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("bond-number") }}</label>
                    <el-input
                      class="text-color bl-none"
                      v-model="form.transfer_number"
                      placeholder="14"
                    >                    
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("bond-date") }}</label>
                    <el-date-picker
                      type="datetime"
                      placeholder="2020-10-15"
                      format="yyyy-MM-dd HH:mm"
                      Value-format="yyyy-MM-dd HH:mm"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("all") }}</label>
                    <el-select v-model="form.type">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("account-number") }}</label>
                    <el-input v-model="form.transfer_number" placeholder="">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("amount") }}</label>
                    <el-input v-model="form.transfer_number" placeholder="">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col style="padding-left:0;padding-right:0" :span="24">
              <el-row :gutter="8">
                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="3">
                  <el-form-item>
                    <label>{{ $t("box-bank") }}</label>
                    <el-input
                      class="text-color bl-none"
                      v-model="form.transfer_number"
                      placeholder=""
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="3">
                  <el-form-item>
                    <label>{{ $t("current-balance") }}</label>
                    <el-input
                      class="text-color bl-none"
                      v-model="form.transfer_number"
                      placeholder=""
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("cost-center") }}</label>
                    <el-select v-model="form.type">
                      <el-option :label="$t('without')" :value="1"></el-option>
                      <el-option :label="$t('without')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="3">
                  <el-form-item>
                    <label>{{ $t("payment-method") }}</label>
                    <el-select v-model="form.type">
                      <el-option :label="$t('chic')" :value="1"></el-option>
                      <el-option :label="$t('chic')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                 
                </el-col>
                 <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                  <label style="color:white">{{ $t("payment-method") }}</label>
                   <el-select v-model="form.type">
                      <el-option :label="$t('Ahli-Bank')" :value="1"></el-option>
                      <el-option :label="$t('Ahli-Bank')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                 
                </el-col>
                 
                <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{
                      $t("document-number")
                    }}</label>
                    <el-input v-model="form.transfer_number" placeholder="">
                    </el-input>
                  </el-form-item>
                </el-col>
                 <el-col style="padding-left:0;padding-right:0" :xs="24" :sm="24" :md="8" :lg="3">
                  <el-form-item>
                    <label>{{
                      $t("document-date")
                    }}</label>
                    <el-input v-model="form.transfer_number" placeholder="">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6">
          <div class="inline-button-container d-flex flex-direction-column">
            <!-- <div class="spacer"></div> -->
            <div class="vertical-buttons">
              <el-form-item>
                <el-button
                  @click="
                    form.distribution_of_the_amount_to_the_invoices =
                      !form.distribution_of_the_amount_to_the_invoices
                  "
                  :class="[
                    form.distribution_of_the_amount_to_the_invoices
                      ? 'btn-dark-grey'
                      : 'btn-hover-select',
                  ]"
                >
                  <span
                    v-if="form.distribution_of_the_amount_to_the_invoices"
                  >
                    {{ $t("distribution-of-the-amount-to-the-invoices") }}
                  </span>

                  <span v-else>
                    {{ $t("distribution-of-the-amount-to-the-invoices") }}
                  </span>
                </el-button>
              </el-form-item>

             
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        paymentMethod: 1,
        invoicePrice: 1,
        boxName: 1,
        branch: 1,
        type: 1,
        cost: 1,
        currency: 1,
        item_number: 1,
        item_name: 1,
        category: 1,
        distribution_of_the_amount_to_the_invoices: 1,
      }
    };
  }
};
</script>
