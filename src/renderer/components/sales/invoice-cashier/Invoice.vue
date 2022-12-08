<template>
  <el-container class="container ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form" label-position="top" :model="form">
      <el-row :gutter="6">
        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('invoice-number')">
            <el-input v-model="form.invoice_number" placeholder="14">
              <template slot="append">
                <el-button>
                  <i class="el-icon-search"></i>
                </el-button>
              </template>
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('invoice-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.invoice_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('invoice-type')">
            <el-select v-model="form.invoice_type">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('cash')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('box')">
            <el-select v-model="form.box">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('cash-customer-name')">
            <el-select v-model="form.cash_user_name">
              <div class="add-btn add-btn-red" @click="addClient()">
                {{ $t("add-cash-client") }}
                <i class="el-icon-plus mx-1"></i>
              </div>
              <el-option :label="$t('client-1')" :value="1"></el-option>
              <el-option :label="$t('client-2')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('card-no-cust')">
            <el-input v-model="form.card_no_cust" placeholder="14"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('delegate-saler')">
            <el-input v-model="form.delegate_saler" placeholder="14"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="3">
          <el-form-item :label="$t('user-name')">
            <el-select v-model="form.user_name">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
import AddClient from "~/components/dialogs/add-client";

import open_dialogs from '~/components/sales/open_dialogs.js'

export default {
  name: "invoice",

  mixins: [open_dialogs ],

  components: {
    AddClient,
  },

  data: function () {
    return {
      form: {
        invoice_number: "14",
        invoice_date: "",
        invoice_type: 1,
        box: 1,
        cash_user_name: "",
        card_no_cust: "",
        delegate_saler: "",
        user_name: "",
      },
    };
  },

  methods: {
    addClient() {
      const POSTPONED = 1;
      const IN_CASH = 2;

      if (this.form.invoice_type == IN_CASH) {
        this.openAddClientDialog();
      } else if (this.form.invoice_type == POSTPONED) {
        this.$router.push("/customer-management/customers-data");
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>