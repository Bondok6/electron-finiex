<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('item-name')">
            <el-select v-model="main_form.item_name" :label="$t('all')">
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('item-name')">
            <el-select v-model="main_form.item_name" :label="$t('all')">
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="16" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-input
              class="text-color bl-none mb-1 mt-1"
              style="width: 400px"
              v-model="main_form.search"
              :placeholder="$t('search')"
            >
              <template slot="append"
                ><i
                  class="el-icon-search"
                  style="font-size: large; font-weight: bold"
                ></i
              ></template>
            </el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :span="24" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-button
              class="text-center width-full mt-4 w-250"
              @click="main_form.remove_all = !main_form.remove_all"
              :class="[main_form.remove_all ? 'btn-dark-grey' : 'btn-red']"
            >
              <span v-if="main_form.remove_all">{{ $t("select-all") }} </span>

              <span v-else>
                {{ $t("remove-all") }}
              </span>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function () {
    return {
      additionalChoice: false,
      main_form: {
        item_number: 1,
        item_name: 1,
        from_date: 1,
        to_date: 1,
        remove_all: 1,
      },
    };
  },
};
</script>
