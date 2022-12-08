<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full d-flex"
      label-position="top"
      :model="form"
    >
      <el-row class="width-full">
        <el-row :gutter="6">
          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item :label="$t('item-number')">
              <el-select v-model="form.selectnumber">
                <el-option :label="$t('all')" :value="1"></el-option>
                <el-option :label="$t('all')" :value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item :label="$t('item-name')">
              <el-select v-model="form.selectname">
                <el-option :label="$t('all')" :value="1"></el-option>
                <el-option :label="$t('all')" :value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="6">
          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item :label="$t('branch-name')">
              <el-select v-model="form.selectbranchname">
                <el-option :label="$t('all')" :value="1"></el-option>
                <el-option :label="$t('all')" :value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item :label="$t('unit')">
              <el-select v-model="form.selectunit">
                <el-option :label="$t('all')" :value="1"></el-option>
                <el-option :label="$t('all')" :value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

            <el-col :xs="24" :sm="24" :md="14" :lg="16" class="mt-40">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-form-item>
                  <el-button
                    class="btn-cyan-light px-4-lg width-full-sm"
                    @click="dialogTableVisible = true"
                  >
                    {{ $t("add-attributes") }}
                  </el-button>
                </el-form-item>
              </div>
            </el-col>
        </el-row>
      </el-row>
    </el-form>
    <el-dialog :visible.sync="dialogTableVisible">
      <div>
        <insert />
        <insert-summary />
      </div>
    </el-dialog>
  </el-container>
</template>
<script>
import Insert from "~/components/system-cards/items-details/insert/Invoice";
import InsertSummary from "~/components/system-cards/items-details/insert/summary/Summary";
export default {
  components: {
    Insert,
    InsertSummary,
  },
  data: function () {
    return {
      form: {
        selectnumber: 1,
        selectname: 1,
        selectbranchname: 1,
        selectunit: 1,
      },
      dialogTableVisible: false,
    };
  },
};
</script>
