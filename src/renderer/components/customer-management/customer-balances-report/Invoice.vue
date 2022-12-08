<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('client')">
            <el-select v-model="form.client">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4" class="mt-2">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="16" :lg="19" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-row :gutter="6">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" class="mt-2">
                <el-form-item>
                  <el-select
                    v-model="form.type"
                    class="
                      color-blue
                      text-center
                      placeHolderColor
                      w-200
                      selectButton
                    "
                    :placeholder="$t('order')"
                  >
                    <el-option
                      :label="$t('client-name')"
                      :value="1"
                      class="selectButton"
                    >
                    </el-option>
                    <el-option
                      :label="$t('maximum-balance')"
                      :value="2"
                      class="selectButton"
                    >
                    </el-option>
                    <el-option
                      :label="$t('minimum-balance')"
                      :value="3"
                      class="selectButton"
                    >
                    </el-option>
                    <el-option
                      :label="$t('account-number')"
                      :value="4"
                      class="selectButton"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" class="mt-2">
                <el-button
                  class="text-center w-250 btn-cyan-light"
                  @click="dialogTableVisible = true"
                >
                  {{ $t("additional-choices") }}
                </el-button>
              </el-col>
            </el-row>
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
            :model="sub_form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("branch") }}</label>
                  <el-select v-model="sub_form.branch">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("city") }}</label>
                  <el-select v-model="sub_form.country">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("client-category") }}</label>
                  <el-select v-model="sub_form.client_group">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("delegate") }}</label>
                  <el-select v-model="sub_form.delegate">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("balance") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="sub_form.balance">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class="text-center"
                        v-model="sub_form.from_transfer_amount"
                        placeholder="55"
                      >
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
          @click="dialogTableVisible = false"
          >{{ $t("agree") }}</el-button
        >
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function () {
    return {
      form: {
        input: 3,
      },
      sub_form: {
        branch: "",
        country: "",
        client_group: "",
        delegate: "",
        from_transfer_amount: "",
        belance: "",
      },
      dialogTableVisible: false,
    };
  },
};
</script>




