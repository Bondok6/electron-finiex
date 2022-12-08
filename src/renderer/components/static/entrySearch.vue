<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full justify-center"
      label-position="top"
      :model="form"
    >
      <el-row class="flex-wrap d-flex justify-center width-full">
        <el-col :xs="24" :sm="10" :md="8" class="mx-4">
          <el-input
            class="text-color bl-none mb-1 mt-4"
            v-model="form.search"
            :placeholder="$t('search')"
            @input="search()"

          >
            <template slot="append"
              ><i
                class="el-icon-search"
                style="font-size: large; font-weight: bold;"
              ></i
            ></template>
          </el-input>
        </el-col>

        <el-col :xs="24" :sm="8" :md="5" class="mx-2">
          <el-row :gutter="6" class="width-full">
            <el-col :span="14">
              <el-input
                class="text-color mb-1 mt-4 text-center"
                :placeholder="$t('records-number')"
                readonly
              ></el-input>
            </el-col>
            <el-col :span="10">
              <el-input
                v-model="recordNumber"
                class="text-color mb-1 mt-4 text-center"
                readonly
              ></el-input>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
export default {
  name: "invoice",
  props: {
    recordNumber: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      form: {
        search: ""
      }
    };
  },
  methods: {
    search() {
      this.$emit("search", this.form.search);
       
    }
  }
};
</script>
