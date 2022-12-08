<template>
  <div>
    <el-row class="d-flex mb-1">
      <el-col :xs="24" :md="16">
        <el-input
          class="text-color bl-none grey-shadow"
          style="border-radius: 4px;"
          :placeholder="$t('search-here')"
        >
          <template slot="append"
            ><i
              class="el-icon-search"
              style="font-size: large; font-weight: bold"
            ></i
          ></template>
        </el-input>
      </el-col>

      <el-col :md="1"></el-col>

      <el-col :xs="24" :md="8">
        <el-select
          :placeholder="$t('grain')"
          v-model="unit"
          class="grey-shadow"
          style="border-radius: 4px;"
        >
          <el-option :label="$t('grain')" :value="1"></el-option>
          <el-option :label="$t('grain')" :value="2"></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unit: '',
    }
  }
}
</script>