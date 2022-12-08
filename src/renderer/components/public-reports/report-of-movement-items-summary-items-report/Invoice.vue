<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="16">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8">
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.item_number" :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8">
               <el-form-item :label="$t('item-name')">
                <el-select v-model="form.item_name" :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="inline-button-container d-flex flex-direction-column">
            <div class="vertical-buttons">
              <el-form-item>
                <el-button
                class="float-left mt-point-5t"
                @click="form.show_only_items_that_have_movement =! form.show_only_items_that_have_movement"
                 :class="[
                    form.show_only_items_that_have_movement
                      ? 'btn-dark-grey'
                      : 'btn-red'
                  ]"
                >
                  <span v-if="form.show_only_items_that_have_movement">
                    {{ $t('show-only-items-that-have-movement') }}
                  </span>
                  <span v-else>
                    {{ $t('non-show-only-items-that-have-movement') }}
                  </span>
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button
                class="float-left mt-point-5t"
                @click="form.include_sales_invoices_associated_external_representative =! form.include_sales_invoices_associated_external_representative"
                :class="[
                    form.include_sales_invoices_associated_external_representative
                      ? 'btn-dark-grey'
                      : 'btn-red'
                  ]"
                >
                <span v-if="form.include_sales_invoices_associated_external_representative">
                  {{ $t('include-sales-invoices-associated-external-representative') }}
                </span>
                <span v-else>
                  {{ $t('non-include-sales-invoices-associated-external-representative') }}
                </span>
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="float-left mt-point-5 btn-cyan-light"
                  @click="additionalChoice = true"
                >
                  {{ $t("additional-choices") }}
                </el-button>
              </el-form-item>
            </div>
          </div>
        </el-col>
        <!-- --- start dialog ---  -->
         <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
          <span>
            <el-container class="d-block box-shadow mb-0 px-2 py-2">
              <el-form
                class="invoice-form width-full mb-8"
                label-position="top"
                :model="form"
              >
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('company-name') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('category') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('item-price') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                   <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('item-type') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('warehouse-name') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('sub-category') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('cost-center') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                   <el-col :xs="24" :sm="24" :md="6">
                    <el-form-item>
                      <label>{{ $t('branch-name') }}</label>
                      <el-select :placeholder="$t('all')" v-model="form.input">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
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
        <!-- --- end dialog ---  -->
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {
        delegate_name: 1,
        date : 1,
        item_number : 1,
        item_name : 1,
        input : 1,
        show_only_items_that_have_movement : 1,
        include_sales_invoices_associated_external_representative : 1
      },
      additionalChoice : false
    };
  },
};
</script>