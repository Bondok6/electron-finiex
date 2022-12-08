<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="12" :md="8">
                  <el-form-item :label="$t('from-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

                
                  <el-col :xs="24" :sm="12" :md="8">
                    <el-form-item :label="$t('item-number')">
                      <el-select v-model="form.branch_name" >
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>


              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="12" :md="8">
                  <el-form-item :label="$t('to-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

                
                  <el-col :xs="24" :sm="12" :md="8">
                    <el-form-item :label="$t('item-name')">
                      <el-select v-model="form.branch_name" >
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>


              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12">
          <div class="inline-button-container d-flex flex-direction-column">
            <div class="vertical-buttons">
              <el-select
                v-model="form.type"
                class="color-blue text-center placeHolderColor"
                :placeholder="$t('order')"
              >
                <el-option :label="$t('item-number')" :value="2"></el-option>
                <el-option :label="$t('item-date')" :value="3"></el-option>
              </el-select>

              <el-form-item class="mt-2">
                <el-button
                  class="btn-cyan-light width-full"
                  @click="dialog = true"
                  >{{ $t("additional-choices") }}</el-button
                >
              </el-form-item>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- dialog -->
    <el-dialog title=" " :visible.sync="dialog" width="70%">
      <span>
        <el-container class="container box-shadow mb-0 px-2 py-2">
          <el-form class="invoice-form" label-position="top" :model="form">
            <el-row :gutter="6">
              <el-col :span="24">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="6" :md="5" :lg="5">
                    <el-form-item :label="$t('from-number')">
                      <el-input v-model="form.id" placeholder="3"></el-input>
                    </el-form-item>
                  </el-col>



                  <el-col :xs="24" :sm="6" :md="5" :lg="5">
                    <el-form-item :label="$t('supplier-client-name')">
                      <el-input v-model="form.id" placeholder="3"></el-input>
                    </el-form-item>
                  </el-col>


                  <el-col :xs="24" :sm="6" :md="5" :lg="5">
                    <el-form-item :label="$t('branch-name')">
                      <el-select v-model="form.branch_name" >
                        <el-option :label="$t('main-branch')" :value="2"></el-option>
                        <el-option :label="$t('main-branch')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :xs="24" :sm="6" :md="5" :lg="5">
                    <el-form-item :label="$t('tax-category')">
                      <el-select v-model="form.maintenance">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>

              <el-col :span="24" class="mt-2">
                <el-row :gutter="6">

                  
                  <el-col :xs="24" :sm="6" :md="5" :lg="5">
                    <el-form-item :label="$t('to-number')">
                      <el-input v-model="form.id" placeholder="6"></el-input>
                    </el-form-item>
                  </el-col>



                  <el-col :xs="24" :sm="6" :md="5" :lg="5">
                    <el-form-item :label="$t('tax-number')">
                      <el-input v-model="form.id" placeholder="6"></el-input>
                    </el-form-item>
                  </el-col>



                  <el-col :xs="24" :sm="6" :md="5" :lg="5">
                    <el-form-item :label="$t('document-type')">
                      <el-select v-model="form.status">
                        <el-option :label="$t('all')" :value="1"></el-option>
                        <el-option :label="$t('all')" :value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light" @click="dialog = false">{{
          $t("agree")
        }}</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      dialog: false,

      form: {
        branch: 1,
        account_name: 1,
        cost: 1,
        currency: 1,
      },
    };
  },
};
</script>