<template>
  <el-container class="container  box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="14" :lg="16">
          <div class="inline-button-container d-flex mt-40">
            <div class="spacer"></div>
            <el-button
              class="text-center btn-cyan-light width-full-sm px-15-lg"
              @click="dialogTableVisible = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
            <el-dialog :visible.sync="dialogTableVisible" width="70%">
              <span>
                <el-container class="d-block box-shadow mb-0 px-2 py-2">
                  <el-form
                    class="invoice-form width-full"
                    label-position="top"
                    :model="form"
                  >
                    <el-row :gutter="6" class="width-full">
                      

                      <el-col :xs="24" :sm="12" :md="6">
                        <el-form-item :label="$t('from-number')">
                          <el-input> </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="6">
                        <el-form-item :label="$t('to-number')">
                          <el-input> </el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :xs="24" :sm="12" :md="6">
                        <el-form-item :label="$t('branch-transferred-from')">
                          <el-select v-model="form.warehouse_name" :placeholder="$t('all')">
                            <el-option
                              :label="$t('all')"
                              :value="2"
                            ></el-option>
                            <el-option
                              :label="$t('all')"
                              :value="1"
                            ></el-option>
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
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function() {
    return {
      form: {
        input: 3
      },
      dialogTableVisible: false
    };
  }
};
</script>
