<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3 pb-1">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('offer-number')">
            <el-input v-model="form.offer_number" placeholder="1">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('offer-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.offer_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('offer-type')">
            <el-select v-model="form.offer_type">
              <el-option :label="$t('lower-price')" :value="1"></el-option>
              <el-option :label="$t('lower-price')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('offer-finish')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.offer_finish"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6" :lg="6" class="to-the-side-ar to-the-side-en">
          <div style="padding-top: 2.05rem;">
            <!-- ------- items listiing ------ -->
            <el-button
              class="text-center btn-cyan-light width-full mt-1 px-1"
              @click="itemsListing = true"
            >              
              <template>
                <div class="list-items-btn width-full">
                  <div style="margin: auto;"> {{ $t("items-listing") }} </div>
                  <div>
                    <i class="el-icon-search"></i>
                  </div> 
                </div>
              </template>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- items listing -->
    <el-dialog :visible.sync="itemsListing" width="50%">
      <div slot="title" class="pt-2">
        <el-row :gutter="6" class="width-full section-title">
          <el-col :xs="3" :sm="3" :md="9" :lg="9">
            <div class="side-line"></div>
          </el-col>
          <el-col :xs="16" :sm="18" :md="6" :lg="6">
            <div class="section-title-text">
              {{ $t("items-listing") }}
            </div>
          </el-col>
          <el-col :xs="3" :sm="3" :md="9" :lg="9">
            <div class="side-line"></div>
          </el-col>
        </el-row>
      </div>

      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
          >
            <el-row :gutter="6" class="width-full input-rows px-2">
              <el-col :span="10">
                <div class="side-title">{{ $t("company-name") }}</div>
              </el-col>
              <el-col :span="2"></el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="form.delegate_name"
                  >
                    <el-option :label="$t('')" :value="1"></el-option>
                    <el-option :label="$t('')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows px-2">
              <el-col :span="10">
                <div class="side-title">{{ $t("classification-name") }}</div>
              </el-col>
              <el-col :span="2"></el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="form.delegate_name"
                  >
                    <el-option :label="$t('')" :value="1"></el-option>
                    <el-option :label="$t('')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows px-2">
              <el-col :span="10">
                <div class="side-title">{{ $t("item-type") }}</div>
              </el-col>
              <el-col :span="2"></el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="form.delegate_name"
                  >
                    <el-option :label="$t('')" :value="1"></el-option>
                    <el-option :label="$t('')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows px-2">
              <el-col :span="10">
                <div class="side-title">{{ $t("item-status") }}</div>
              </el-col>
              <el-col :span="2"></el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="form.delegate_name"
                  >
                    <el-option :label="$t('')" :value="1"></el-option>
                    <el-option :label="$t('')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows px-2">
              <el-col :span="10">
                <div class="side-title">{{ $t("sale-quantity") }}</div>
              </el-col>
              <el-col :span="2"></el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            
            <el-row :gutter="6" class="width-full input-rows px-2">
              <el-col :span="10">
                <div class="side-title">{{ $t("offer-quantity") }}</div>
              </el-col>
              <el-col :span="2"></el-col>
              <el-col :span="12">
                <el-form-item>
                 <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows px-2">
              <el-col :span="10">
                <div class="side-title">{{ $t("discount") }}</div>
              </el-col>
              <el-col :span="2"></el-col>
              <el-col :span="12">
                <el-form-item>
                 <el-input>
                  <template slot="append">
                    <span>%</span>
                  </template>
                 </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg m-l-r-1"
          @click="itemsListing = false"
          >{{ $t("listing") }}</el-button
        >

        <el-button
          class="px-4-lg m-l-r-1"
          style="background-color: transparent"
          @click="itemsListing = false"
          >{{ $t("exit") }}</el-button
        >
      </span>
    </el-dialog>

    <!-- search invoice categories -->
    <search-invoice-categories />
  </el-container>
</template>

<script>
import SearchInvoiceCategories from '~/components/dialogs/search-invoice-categories';

import open_dialogs from '~/components/sales/open_dialogs.js'

export default {
  name: "invoice",

  mixins: [open_dialogs ],

  components: {
    SearchInvoiceCategories,
  },

  data: function() {
    return {
      form: {
        offer_number: "",
        offer_date: "",
        offer_type: 1,
        offer_finish: "",
      },
      itemsListing: false,
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
  },
};
</script>

<style lang="scss" scoped>

[dir='rtl'] {
  .to-the-side-ar {
    float: left;
  }
}
.to-the-side-en {
  float: right;
}

.list-items-btn {
  display: flex;
  justify-content: center;
}

.input-rows {
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.side-title {
  background-color: #21798d;
  text-align: center;
  color: white;
  height: 39px;
  border-radius: 4px;
  line-height: 39px;
}

.side-line {
  width: 100%;
  border-bottom: 1px solid #00ced5;
}

.section-title {
  display: flex;
  align-items: center;
}

.section-title-text {
  height: 1rem;
  text-align: center;
  color: #00ced5;
  line-height: 1rem;
}

.m-l-r-1 {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
