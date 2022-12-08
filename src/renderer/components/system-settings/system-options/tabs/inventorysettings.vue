<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-row class="width-full mt-4 d-flex justify-center">
      <el-col :xs="24" :md="14">
           <el-col :xs="24" :sm="24" :md="14" :lg="8" class="popup-label2 mt-2">
            <span>{{ $t("type-inventory-store") }}</span>
          </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="10" class="my-3">
            <el-select
              :placeholder="$t('all')"
              class="width-full mb-2"
            >
            <!-- TODO: -->
              <el-option :label="$t('جرد دوري')" :value="2"></el-option>
              <el-option :label="$t('جرد مستمر')" :value="1"></el-option>
            </el-select>
          </el-col>
          <el-col :md="24">

            <el-container
              class="container ma-4 mt-0 mb-0 invoice-table table-header-blue"
            >
    
    
              <el-table
                :data="tableData"
                style="width: 100%"
                border
                max-height="600"
              >
                <el-table-column align="right" prop="item_name" />
    
                <el-table-column
                  align="center"
                  prop="category"
                  :label="$t('being-deported')"
                >
                  <el-checkbox
                    class="additional-data-checkbox"
                    v-model="main_form.check9"
                  />
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="category"
                  :label="$t('auto-relay')"
                >
                  <el-checkbox
                    class="additional-data-checkbox"
                    v-model="main_form.check9"
                  />
                </el-table-column>
              </el-table>
            </el-container>
          </el-col>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "search",

  data: function () {
    return {
      main_form: {},
      tableData: [
        {
          item_name: this.$t("edit-with-increase"),
        },
        {
          item_name: this.$t("edit-with-decrease"),
        },
        {
          item_name: this.$t("store-supply-order"),
        },
        {
          item_name: this.$t("receipts-branches"),
        },
        {
          item_name: this.$t("branch-transfers"),
        },
        {
          item_name: this.$t("store-exchange-order"),
        },
        {
          item_name: this.$t("inventory-store"),
        },
      ],
    };
  },
};
</script>
