<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="5" :lg="5" >
          <el-form-item :label="$t('reservation-return-number')">
            <el-input v-model="form.reservation_return_number" placeholder="14"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="5" :lg="5" >
          <el-form-item :label="$t('reservation-return-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.reservation_return_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="5" :lg="5" >
          <el-form-item :label="$t('box-name')">
            <el-select v-model="form.box_name">
              <el-option label="البنك الاهلي" :value="1"></el-option>
              <el-option label="البنك الاهلي" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="5" :lg="5" >
          <el-form-item :label="$t('reservation-type')">
            <el-select v-model="form.reservation_type">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('normal-cash')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="5" :lg="5" >
          <el-form-item :label="$t('client-name')">
            <div class="select-container">
              <input-drop-down
                v-model="form.client_name"
                placeholder=""
                class="input-menu"
                @keydown.meta.native="openSearchClientDialog()"
                @keydown.ctrl.native="openSearchClientDialog()"
              >
                <div class="add-btn add-btn-red" @click="addClient()">
                  {{$t("add-client")}} 
                  <i class="el-icon-plus mx-1"></i> 
                </div>
                  <el-option :label="$t('client-1')" :value="1" />
                  <el-option :label="$t('client-2')" :value="2" />
              </input-drop-down>
            </div>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="8" :md="5" :lg="5" >
          <el-form-item :label="$t('delegate-name')">
            <el-select  v-model="form.delegate_name" >
              <NuxtLink :to="localePath('/system-cards/salemen-data/new')">
                <div class="add-btn add-btn-red">
                  {{$t("add")}} 
                  <i class="el-icon-plus mx-1"></i> 
                </div>
              </NuxtLink>
              <el-option :label="$t('employee-1')" :value="1"></el-option>
              <el-option :label="$t('without')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!--dummy spacer col-->
        <el-col :xs="1" :sm="1" :md="1" :lg="1" ></el-col>

        <el-col :xs="24" :sm="24" :md="8" :lg="8" class="to-the-side-ar to-the-side-en">
          <div style="padding-top: 2.05rem;">
            <!-- ------- additional data ------ -->
            <el-button
              class="text-center btn-cyan-light width-full mt-1"
            >
              {{ $t("reservation-invoice-number") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- search client -->
    <search-client />

    <!-- add client -->
    <add-client />
  </el-container>
</template>


<script>
import AddClient from '~/components/dialogs/add-client';
import SearchClient from '~/components/dialogs/search-client';

import open_dialogs from '~/components/sales/open_dialogs.js'

export default {
  name: "invoice",

  mixins: [open_dialogs ],

  components: { 
    AddClient, 
    SearchClient
  },

  data: function () {
    return {
      form: {
        reservation_return_number: 1,
        reservation_return_date: "",
        box_name: "",
        reservation_type: "",
        client_name: 1,
        delegate_name: 1,
      },

      showOptions: false,
    };
  },

  methods: {
    addClient(){
      const POSTPONED = 1;
      const IN_CASH = 2;

      if (this.form.reservation_type == IN_CASH) {
        this.openAddClientDialog();
      }
      else if (this.form.reservation_type == POSTPONED) {
        this.$router.push('/customer-management/customers-data/new')
      }
    }, 
  }
};
</script>

<style lang='scss' scoped>
[dir='rtl'] {
  .to-the-side-ar {
    float: left;
  }
}
.to-the-side-en {
  float: right;
}
</style>