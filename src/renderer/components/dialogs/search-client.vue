<template>
  <el-dialog title=" " :visible.sync="showDialog" width="80%">
    <span>
      <el-form
        class="
          width-99
          d-flex
          justify-center
        "
      >
        <el-form-item>
          <div class="side-label-container">
            <div class="side-label">{{$t('search-type')}}</div>
            <el-input
              class="text-color mb-1 mt-2 w-150 ml-2 dialogInput dialog-input-modifier"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-input
            class=" text-color bl-none mb-1 mt-2 w-300 ml-2 
                    dialogInput dialog-search-input-modifier-ar
                    dialog-search-input-modifier-en"
            v-model="search_target"
            :placeholder="$t('search-here')"
          >
          <template slot="append"><i class="el-icon-search"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="side-label-container">
            <div class="side-label">{{$t('customer-type')}}</div>
            <el-input
              class="text-color mb-1 mt-2 w-150 ml-2 dialogInput dialog-input-modifier"
            ></el-input>
          </div>
        </el-form-item>
      </el-form>
    </span>
    <span>
      <el-container class=" container ma-4 mt-3 mb-0 invoice-table 
                            container-modifier container-extra-height">
        <el-table :data="tableOne" style="width: 100%" stripe border  max-height="250">
          <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
          <el-table-column align="center" prop="client_name" :label="$t('client-name')" width="400"/>
          <el-table-column align="center" prop="client_country" :label="$t('client-country')" />
          <el-table-column align="center" prop="mobile_number" :label="$t('mobile-number')" />
        </el-table>
      </el-container>
    </span>
    <div class="divider" style="height: 2rem;"></div>
    <span>
      <el-container class="container ma-4 mt-3 mb-0 invoice-table container-modifier rounded-bottom-corners">
        <el-table :data="tableTwo" style="width: 100%" stripe border  max-height="250">
          <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
          <el-table-column align="center" prop="card_no_cust" :label="$t('card-no-cust')" />
          <el-table-column align="center" prop="indebtedness_limit" :label="$t('indebtedness-limit')" />
          <el-table-column align="center" prop="payment_period_day" :label="$t('payment-period-day')" />
          <el-table-column align="center" prop="current_balance" :label="$t('current-balance')" />
        </el-table>
      </el-container>
    </span>

    <span slot="footer" class="dialog-footer">
      <el-button class="btn-cyan-light px-4-lg" @click="closeDialog()">
        {{$t("ok")}}
        </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'SearchClient',

  data() {
    return {
      tableOne: [
        {
          id: "-",
          client_name: "-",
          client_country: "_",
          mobile_number: "_",
        },
        {
          id: "-",
          client_name: "-",
          client_country: "_",
          mobile_number: "_",
        },
        {
          id: "-",
          client_name: "-",
          client_country: "_",
          mobile_number: "_",
        },
        {
          id: "-",
          client_name: "-",
          client_country: "_",
          mobile_number: "_",
        },
        {
          id: "-",
          client_name: "-",
          client_country: "_",
          mobile_number: "_",
        },
      ],

      tableTwo: [
        {
          id: "-",
          card_no_cust: "-",
          indebtedness_limit: "_",
          payment_period_day: "_",
          current_balance: "_",
        },
        {
          id: "-",
          card_no_cust: "-",
          indebtedness_limit: "_",
          payment_period_day: "_",
          current_balance: "_",
        },
        {
          id: "-",
          card_no_cust: "-",
          indebtedness_limit: "_",
          payment_period_day: "_",
          current_balance: "_",
        },
        {
          id: "-",
          card_no_cust: "-",
          indebtedness_limit: "_",
          payment_period_day: "_",
          current_balance: "_",
        },
      ]
    }
  },

  methods: {
    closeDialog() {
      this.$store.commit("searchClient/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("searchClient/updateDialogState", state);
      },

      get() {
        return this.$store.state.searchClient.showDialog;
      },
    },
    search_target: {
      set(state) {
        return this.$store.commit("searchClient/updateSearchTarget", state);
      },

      get() {
        return this.$store.state.searchClient.search_target;
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.container-modifier {
  border-radius: 1rem;
  .el-table {
    border-radius: 1rem 1rem 0 0;
    border-bottom: none;
  }

  .el-table--border::after, .el-table--group::after, .el-table::before {
    background-color: white;
  }
}

.container-extra-height {
  height: 30rem;
}

.rounded-bottom-corners {
  .el-table {
    border-radius: 1rem;
  }
}

.el-dialog .dialogInput {
  border-radius: 0 !important;
}

.side-label-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.side-label {
  padding-top: 0.65rem;
  padding-bottom: 0;
  padding-left: 1rem;
  color: #21798d;
}
</style>