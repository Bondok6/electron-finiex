<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table all-rounded">
    <el-form class="width-full" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="12" :md="8">
          <el-form-item>
            <el-checkbox-group v-model="form.years" size="medium" >
              <el-checkbox v-for="(year, index) in years" :key="index" :label="year" name="year" class="select-box">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
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
      years: ['Year 2020', 'Year 2019', 'Year 2018', 'Year 2017'],
      form: {
        years: [],
      }
    };
  },

  methods: {
    
  }
};
</script>

<style scoped>
.all-rounded {
  border-radius: 1rem;
  padding: 2rem 0rem;
}


.select-box{
  display: block;
}
</style>