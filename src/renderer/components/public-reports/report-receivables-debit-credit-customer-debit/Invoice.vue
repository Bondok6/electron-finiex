<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
      <el-col :xs="24" :sm="24" :md="17">
          <el-row :gutter="6" class="width-full">
             <el-col :xs="24" :sm="6" :md="6" :lg="6" >
              <el-form-item :label="$t('client-name')">
                <el-select v-model="form.supplier">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col
              :xs="24"
              :sm="6"
              :md="6"
              :lg="6"
              class="d-flex align-end"
            >
              <el-form-item label="الرصيد">
                <el-select v-model="form.balance">
                  <el-option label=" " :value="1"></el-option>
                  <el-option label=" " :value="2"></el-option>
                </el-select>
              </el-form-item>
              <span class="numberAppend number">0</span>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="6">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          
        </el-col>

         <el-col :xs="24" :sm="8" :md="6">
          <div class="inline-button-container d-flex inner-flex-buttons flex-direction-column">
            <!-----order ---->
            <el-select
              v-model="form.type"
              class="color-blue text-center placeHolderColor mt-2 width-full"
              :placeholder="$t('order-by')"
            >
              <el-option :label="$t('client-name')" :value="1"></el-option>
              <el-option :label="$t('maximum-balance')" :value="2"></el-option>
              <el-option :label="$t('minimum-balance')" :value="3"></el-option>
              <el-option :label="$t('account-number')" :value="4"></el-option>
              
            </el-select>    

            <!---- extras---->
            <el-button
              class="text-center btn-cyan-light width-full additionalChoices mt-2"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!---------------- dialog ------------------>

    <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("branch") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("client-category") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("country") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("delegate-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
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
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      additionalChoice: false,
      form: {
        item_name: 1,
        item_number: 1,
        category: 1,
        subcategory: "",
        order: "",
        invoice_type: 1,
        warehouse: "",
        item_type: 1,
        branch: 1,
        company_name: 1,
        item_price: 1,
        unit: 1,
        quantity: 1,
        document_type: 1,
        item_status: 1,
        supplier: 1,
        balance: 1,
        show_item_price: 1,
        show_item_quantity: 1
      }
    };
  }
};
</script>

<style lang="scss" scoped>


.number{
 padding-top: 6px;
 border-radius: 5px;
}

.selector-mod {
  padding-top: 0.5rem;
  
}
.additionalChoices {
  margin-left: -0.1rem;
}
</style>
