<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('bond-number')">
            <el-input v-model="form.bond_number"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('bond-date')">
            <el-date-picker
              type="datetime"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('client-name')">
            <el-select v-model="form.client">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('account-number')">
            <el-input v-model="form.account_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('amount')">
            <el-input v-model="form.amount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="9">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-row :gutter="6">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" class="mt-2">
                <el-form-item>
                  <el-button
                    class="text-center w-250 mt-2"
                    @click="
                      form.distribution_of_the_amount_to_the_invoices =
                        !form.distribution_of_the_amount_to_the_invoices
                    "
                    :class="[
                      form.distribution_of_the_amount_to_the_invoices
                        ? 'btn-dark-grey'
                        : 'btn-red',
                    ]"
                  >
                    <span v-if="form.distribution_of_the_amount_to_the_invoices"
                      >{{ $t("distribution-of-the-amount-to-the-invoices") }}
                    </span>

                    <span v-else>
                      {{ $t("distribution-of-the-amount-to-the-invoices") }}
                    </span>
                  </el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('box-bank')">
            <el-select v-model="form.box_bank">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('current-balance')">
            <el-input v-model="form.current_balance"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('cost-center')">
            <el-select v-model="form.cost_center">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="6" :lg="6">
          <el-form-item :label="$t('payment-method')">
            <el-row :gutter="6">
              <el-col :span="14">
                <el-select v-model="form.method">
                  <el-option :label="$t('equals')" :value="1"></el-option>
                  <el-option :label="$t('equals')" :value="2"></el-option>
                </el-select>
              </el-col>
              <el-col :span="10" class="amount-append">
                <el-select v-model="form.bank" :placeholder="$t('all')">
                  <el-option :label="$t('equals')" :value="1"></el-option>
                  <el-option :label="$t('equals')" :value="2"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('document-number')">
            <el-input v-model="form.document_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('document-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.document_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function () {
    return {
      form: {
        bond_number: "4",
        bond_date: "",
        client: "",
        account_number: "",
        amount: "",
        box_bank: "",
        current_balance: "",
        cost_center: "",
        payment_method: "",
        bank: "",
        document_number: "",
        document_date: "",
        distribution_of_the_amount_to_the_invoices: 1,
      },
    };
  },
};
</script>




