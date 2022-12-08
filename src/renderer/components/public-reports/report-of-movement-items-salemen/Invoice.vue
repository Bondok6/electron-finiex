<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="6">
          <el-form-item :label="$t('item-number')">
            <el-select v-model="form.item_number" :placeholder="$t('all')">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6">
          <el-form-item :label="$t('item-name')">
            <el-select v-model="form.item_name" :placeholder="$t('all')">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="6">
          <el-form-item :label="$t('delegate-name')">
            <el-select v-model="form.delegate_name" :placeholder="$t('all')">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="18">
          <div class="inline-button-container d-flex mt-40">
            <div class="spacer"></div>
            <el-button
              class="text-center btn-cyan-light width-full-sm px-15-lg"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
      <!-- start dialog -->
      <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
        <span>
          <el-container class="d-block box-shadow mb-0 px-2 py-2">
            <el-form
              class="invoice-form width-full mb-8"
              label-position="top"
              :model="form"
            >
              <el-row :gutter="6" class="width-full">
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                  <el-form-item :label="$t('from-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      format="yyyy-MM-dd"
                      Value-format="yyyy-MM-dd"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                  <el-form-item>
                    <label>{{ $t("sub-category") }}</label>
                    <el-select v-model="form.input" :placeholder="$t('all')">
                      <el-option :label="$t('all')" :value="2"></el-option>
                      <el-option :label="$t('all')" :value="1"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                  <el-form-item>
                    <label>{{ $t("delegate-type") }}</label>
                    <el-select v-model="form.input" :placeholder="$t('all')">
                      <el-option :label="$t('all')" :value="2"></el-option>
                      <el-option :label="$t('all')" :value="1"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="6" class="width-full">
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                  <el-form-item :label="$t('to-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      format="yyyy-MM-dd"
                      Value-format="yyyy-MM-dd"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                  <el-form-item>
                    <label>{{ $t("category") }}</label>
                    <el-select v-model="form.input" :placeholder="$t('all')">
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
      <!-- end dialog -->
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        item_number: 1,
        item_name: 1,
        delegate_name: 1,
        date: 1,
        input: 1
      },
      additionalChoice: false
    };
  }
};
</script>
