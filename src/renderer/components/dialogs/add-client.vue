<template>
  <el-dialog :visible.sync="showDialog" width="40%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item class="text-center">
                  <label class="label">{{$t('mobile-number')}}</label>
                  <el-input v-model="mobile_number" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item class="text-center">
                  <label class="label">{{$t('client-name')}}</label>
                  <el-input v-model="client_name" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item class="text-center">
                  <label class="label">{{$t('tax-number')}}</label>
                  <el-input v-model="tax_number" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item class="text-center">
                  <label class="label">{{$t('card-no-cust')}}</label>
                  <el-input v-model="card_no_cust" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item class="text-center">
                  <label class="label">{{$t('client-address')}}</label>
                  <el-input v-model="client_address" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item class="text-center">
                  <label class="label">{{$t('employee-driver-name')}}</label>
                  <el-select v-model="employee_driver_name">
                    <NuxtLink :to="localePath('/system-cards/employees-data/new')">
                      <div class="add-btn add-btn-red">
                        {{$t("add")}} 
                        <i class="el-icon-plus mx-1"></i> 
                      </div>
                    </NuxtLink>
                    <el-option :label="$t('without')" :value="1"></el-option>
                    <el-option :label="$t('without')" :value="2"></el-option>
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
          @click="closeDialog()"
          >{{ $t("ok") }}</el-button
        >
      </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddClient',

  methods: {
    closeDialog() {
      this.$store.commit("addClient/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("addClient/updateDialogState", state);
      },

      get() {
        return this.$store.state.addClient.showDialog;
      },
    },

    mobile_number: {
      set(state) {
        return this.$store.commit("addClient/updateMobileNumber", state);
      },

      get() {
        return this.$store.state.addClient.mobile_number;
      },
    },

    
    client_name: {
      set(state) {
        return this.$store.commit("addClient/updateClientName", state);
      },

      get() {
        return this.$store.state.addClient.client_name;
      },
    },

    
    tax_number: {
      set(state) {
        return this.$store.commit("addClient/updateTaxNumber", state);
      },

      get() {
        return this.$store.state.addClient.tax_number;
      },
    },

    card_no_cust: {
      set(state) {
        return this.$store.commit("addClient/updateCardNoCust", state);
      },

      get() {
        return this.$store.state.addClient.card_no_cust;
      },
    },
    client_address: {
      set(state) {
        return this.$store.commit("addClient/updateClientAddress", state);
      },

      get() {
        return this.$store.state.addClient.client_address;
      },
    },
    employee_driver_name: {
      set(state) {
        return this.$store.commit("addClient/updateEmployeeDriverName", state);
      },

      get() {
        return this.$store.state.addClient.employee_driver_name;
      },
    }
  },
}
</script>

<style>
.label {
  color: #28B4B3;
}
</style>