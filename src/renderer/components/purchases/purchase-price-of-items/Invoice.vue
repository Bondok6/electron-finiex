<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="8" :lg="5">
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.account_name">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="5">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  class="width-full"
                  type="datetime"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="8" :lg="5">
              <el-form-item :label="$t('item-name')">
                <el-select v-model="form.account_name">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="5">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  class="width-full"
                  type="datetime"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="8" :lg="14">
              <div class="inline-button-container d-flex inner-flex-buttons">
                <el-form-item class="mt-2">
                  <el-button
                    class="btn-cyan-light width-full"
                    @click="dialogTableVisible = true"
                    >{{ $t("additional-choices") }}</el-button
                  >
                </el-form-item>

                <el-form-item>
                  <el-select
                    v-model="form.sss"
                    class="
                      color-blue
                      text-center
                      placeHolderColor
                      width-full-sm
                    "
                    :placeholder="$t('order')"
                  >
                    <el-option :label="$t('highest-price')" :value="1">
                    </el-option>
                    <el-option :label="$t('lowest-price')" :value="2">
                    </el-option>
                    <el-option :label="$t('invoice-number')" :value="3">
                    </el-option>
                    <el-option :label="$t('invoice-date')" :value="4">
                    </el-option>
                    <el-option :label="$t('supplier-name')" :value="5">
                    </el-option>
                    <el-option :label="$t('item-number')" :value="6">
                    </el-option>
                    <el-option :label="$t('item-name')" :value="7"> </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- start dialog -->
      <el-dialog :visible.sync="dialogTableVisible" width="70%">
        <span>
          <el-container class="d-block box-shadow mb-0 px-2 py-2">
            <el-form
              class="invoice-form width-full"
              label-position="top"
              :model="form"
            >
              <el-row :gutter="6" class="width-full">
                <el-col :xs="24" :sm="12" :md="6" :lg="8">
                  <el-form-item :label="$t('unit')">
                    <el-input v-model="form.input"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="8">
                  <el-form-item :label="$t('category')">
                    <el-input v-model="form.input"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="6" class="width-full">
                <el-col :xs="24" :sm="12" :md="6" :lg="8">
                  <el-form-item :label="$t('invoice-type')">
                    <el-select :placeholder="$t('all')" v-model="form.input">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="8">
                  <el-form-item :label="$t('supplier-name')">
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
            @click="dialogTableVisible = false"
            >{{ $t("agree") }}</el-button
          >
        </span>
      </el-dialog>
      <!-- end dialog -->
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      additionalChoice: false,

      form: {
        branch: 1,
        account_name: 1,
        cost: 1,
        currency: 1,
        input: 1
      },
      dialogTableVisible: false
    };
  }
};
</script>

<style scoped lang="scss">
.inner-flex-buttons {
  justify-content: flex-end;
  margin-top: 30px;
  .el-form-item {
    flex-grow: 0 !important;
    margin: 5px 15px;

    @media only screen and (max-width: 450px) {
      margin: 5px 0px;
    }
  }
}
</style>
