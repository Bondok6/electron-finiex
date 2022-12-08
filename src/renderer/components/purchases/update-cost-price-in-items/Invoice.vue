<template>
  <el-container class="container  box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('item-number')">
            <el-select :placeholder="$t('all')" v-model="form.input">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('item-name')">
            <el-select :placeholder="$t('all')" v-model="form.input">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('maintenance-type')">
            <el-select :placeholder="$t('all')" v-model="form.input">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('hide-items')">
            <el-select :placeholder="$t('all')" v-model="form.input">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="inline-button-container d-flex mt-40">
            <div class="spacer"></div>
            <el-button
              class="text-center btn-cyan-light width-full-sm"
              @click="dialogTableVisible = true"
              style="width: 30%"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog title=" " :visible.sync="dialogTableVisible" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="8">
                <el-form-item :label="$t('company-name')">
                  <el-select :placeholder="$t('all')" v-model="form.input">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="8">
                <el-form-item :label="$t('category-name')">
                  <el-select :placeholder="$t('all')" v-model="form.input">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="8">
                <el-form-item :label="$t('item-status')">
                  <el-select :placeholder="$t('all')" v-model="form.input">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="8">
                <el-form-item :label="$t('item-type')">
                  <el-select :placeholder="$t('all')" v-model="form.input">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-checkbox
              class="padding-label arround-checkbox inner-checkbox"
              >{{ $t("include-purchase-expenses") }}</el-checkbox
            >
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
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        input: 1
      },
      dialogTableVisible: false
    };
  }
};
</script>
