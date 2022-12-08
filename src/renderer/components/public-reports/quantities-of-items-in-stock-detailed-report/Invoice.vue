<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="10" :lg="14">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="14" :md="18" :lg="12">
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.cost">
                  <el-option :label="$t('without')" :value="1"></el-option>
                  <el-option :label="$t('without')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="14" :md="18" :lg="12">
              <el-form-item :label="$t('item-name')">
                <el-select v-model="form.branch">
                  <el-option :label="$t('main-branch')" :value="1"></el-option>
                  <el-option :label="$t('main-branch')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="14" :lg="10">
          <div class="inline-button-container d-flex mt-40 justify-end flex-wrap-sm">
            <span class="mx-4-lg">
            <!-- show item price -->
            <el-button
              @click="form.show_item_price = !form.show_item_price"
              :class="[form.show_item_price ? 'btn-dark-grey' : 'btn-red']"
              class="width-full mt-1"
            >
              <span v-if="form.show_item_price">
                {{ $t("show-item-price") }}
              </span>

              <span v-else>
                {{ $t("hide-item-price") }}
              </span>
            </el-button>
            <!-- show item quantites -->
            <el-button
              @click="form.show_item_quantity = !form.show_item_quantity"
              :class="[form.show_item_quantity ? 'btn-dark-grey' : 'btn-red']"
              class="width-full mt-1 text-center"
            >
              <span v-if="form.show_item_quantity">
                {{ $t("show-item-quantity") }}
              </span>

              <span v-else>
                {{ $t("hide-item-quantity") }}
              </span>
            </el-button>

            </span>

            <span class="mt-4">
            <!-----order ---->
            <el-select
              v-model="form.type"
              class="color-blue text-center placeHolderColor width-full"
              :placeholder="$t('order-by')"
            >
              <el-option :label="$t('item-number')" :value="1"></el-option>
              <el-option :label="$t('item-name')" :value="2"></el-option>
              <el-option :label="$t('group')" :value="3"></el-option>
            </el-select>

            

            <!---- extras---->
            <el-button
              class="text-center btn-cyan-light width-full mt-1 additionalChoices"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </span>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!---------------- dialog ------------------>

    <el-dialog title=" " :visible.sync="additionalChoice" width="80%">
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
                  <label>{{ $t("branch-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("category") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("warehouse") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("item-price") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("item-status") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("company-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("sub-category") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("unit") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("item-type") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("quantity-balance") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="form.form">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="11" class="amount-append" >
                      <el-input class="text-color text-center text-background-color " v-model="form.transfer_number" placeholder="55" >
                      </el-input>
                    </el-col>
                  </el-row>
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
        unit: 1,
        balance: 1,
        show_item_price: 1,
        show_item_quantity: 1
      }
    };
  }
};
</script>

<style lang="scss" >
.additionalChoices {
  margin-left: -0.1rem;
}
.text-background-color .el-input__inner{
  background-color: #feffdc;
}

</style>
