<template>
  <el-dialog :visible.sync="showDialog" width="70%">
      <div>
        <div class="box-shadow px-2 py-3 container invoice-table">
          <el-container class="container ma-4 mb-0 px-2 pb-3">
            <el-form
              class="invoice-form width-full container"
              label-position="top"
            >
              <el-row :gutter="6" class="width-full">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item
                    :label="$t('number-box-bank')"
                    class="text-large"
                  >
                    <el-input v-model="box_bank_number"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item
                    :label="$t('account-number')"
                    class="text-large"
                  >
                    <el-input v-model="account_number">
                      <template slot="append">
                        <i class="el-icon-search" style="color: #21798d;"></i>
                      </template>
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="6" class="width-full">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('name-box-bank')" class="text-large">
                    <el-input v-model="box_bank_name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('payment-type')" class="text-large">
                    <el-select v-model="payment_type">
                      <el-option
                        :label="$t('postponed')"
                        :value="1"
                      ></el-option>
                      <el-option
                        :label="$t('postponed')"
                        :value="2"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="12">
                  <div class="inline-button-container d-flex flex-direction-column">
                    <div class="vertical-buttons mt-0">
                      <el-form-item>
                        <el-button
                          class="float-left mt-point5"
                          @click="
                            show_bank_payment_interface =
                              !show_bank_payment_interface
                          "
                          :class="[
                            show_bank_payment_interface
                              ? 'btn-dark-grey'
                              : 'btn-red',
                          ]"
                        >
                          <span>
                            {{ $t("show-bank-payment-interface") }}
                          </span>
                        </el-button>
                      </el-form-item>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </el-container>
          <el-row>
            <el-col :xs="24" :sm="24" :md="18" :lg="18">
              <el-container class="container ma-4 mt-0 mb-0 invoice-table"
              :class="[
                        show_bank_payment_interface
                        ? 'unactivatedTable'
                        : 'activated',
                      ]"
              >
                <el-table
                  :data="bankBoxTable"
                  style="width: 100%"
                  stripe
                  border
                  max-height="250"
                  id="mytab1"
                >
                  <el-table-column
                    align="center"
                    prop="item_number"
                    width="40"
                    :label="$t('id')"
                  />
                  <el-table-column
                    align="center"
                    prop="card_type"
                    :label="$t('card-type')"
                  />

                  <el-table-column
                    align="center"
                    prop="commition_percentage"
                    :label="$t('commition-percentage')"
                  />
                  <el-table-column
                    align="center"
                    prop="amount_limit"
                    :label="$t('amount-limit')"
                  />
                  <el-table-column
                    align="center"
                    prop="static_commition"
                    :label="$t('static-commition')"
                  />
                  <el-table-column
                    align="center"
                    prop="listing"
                    :label="$t('listing')"
                  />
                </el-table>
              </el-container>
            </el-col>
          </el-row>
        </div>
        <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
          <el-button
            size="mini"
            class="mb-1 btn-blue"
            @click="closeDialog()"
            >{{ $t("save-f5") }}</el-button
          >
          <el-button
            size="mini"
            class="mb-1 btn-red"
            @click="closeDialog()"
            >{{ $t("delete-f8") }}</el-button
          >
          <el-button
            size="mini"
            class="mb-1 btn-violet"
            @click="closeDialog()"
            >{{ $t("back-f6") }}</el-button
          >
          <el-button
            size="mini"
            class="mb-1 btn-grey"
            @click="closeDialog()"
            >{{ $t("print-f4") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
</template>

<script>
export default {
  name: 'addBoxBank',

  data() {
    return {
      show_bank_payment_interface: true,

      bankBoxTable: [
        {
          item_number: "1",
          card_type: "-",
          commition_percentage: "-",
          amount_limit: "-",
          static_commition: "-",
          listing: "-",
        },
        {
          item_number: "1",
          card_type: "-",
          commition_percentage: "-",
          amount_limit: "-",
          static_commition: "-",
          listing: "-",
        },
        {
          item_number: "1",
          card_type: "-",
          commition_percentage: "-",
          amount_limit: "-",
          static_commition: "-",
          listing: "-",
        },
        {
          item_number: "1",
          card_type: "-",
          commition_percentage: "-",
          amount_limit: "-",
          static_commition: "-",
          listing: "-",
        },
      ],
    }
  },

  methods: {
    closeDialog() {
      this.$store.commit("addBoxBank/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("addBoxBank/updateDialogState", state);
      },

      get() {
        return this.$store.state.addBoxBank.showDialog;
      },
    },

    box_bank_name: {
      set(state) {
        return this.$store.commit("addBoxBank/updateBoxBankName", state);
      },

      get() {
        return this.$store.state.addBoxBank.box_bank_name;
      },
    },

    
    box_bank_number: {
      set(state) {
        return this.$store.commit("addBoxBank/updateBoxBankNumber", state);
      },

      get() {
        return this.$store.state.addBoxBank.box_bank_number;
      },
    },

    
    account_number: {
      set(state) {
        return this.$store.commit("addBoxBank/updateAccountNumber", state);
      },

      get() {
        return this.$store.state.addBoxBank.account_number;
      },
    },

    payment_type: {
      set(state) {
        return this.$store.commit("addBoxBank/updatePaymetType", state);
      },

      get() {
        return this.$store.state.addBoxBank.payment_type;
      },
    },
  },
}
</script>

<style>

</style>