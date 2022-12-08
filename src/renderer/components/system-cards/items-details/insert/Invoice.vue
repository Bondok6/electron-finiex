<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3 invoice-table">
    <el-form
      class="invoice-form width-full d-flex justify-center"
      label-position="top"
      :model="form"
    >
      <el-row class="width-full">
        <el-col :span="1">
          <el-checkbox v-model="form.checked" />
        </el-col>
        <el-col :span="21">
          <span align="center">{{ $t("color") }}</span>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <el-col :span="1">
          <el-checkbox v-model="form.checked2" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("red") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked5" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("yellow") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked4" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("green") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked5" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("black") }}</span>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <el-col :span="1">
          <el-checkbox v-model="form.checked6" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("white") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked7" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("blue") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked8" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("orange") }}</span>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <el-col :span="1">
          <el-checkbox v-model="form.checked9" />
        </el-col>
        <el-col :span="21">
          <span align="center">{{ $t("sizes-by-numbers") }}</span>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <el-col :span="1">
          <el-checkbox v-model="form.checked10" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("1") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked11" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("2") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked12" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("3") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked13" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("4") }}</span>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <el-col :span="1">
          <el-checkbox v-model="form.checked14" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("5") }}</span>
        </el-col>
        <el-col :span="1">
          <el-checkbox v-model="form.checked15" />
        </el-col>
        <el-col :span="5">
          <span>{{ $t("6") }}</span>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      form: {
        checked: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false,
        checked13: false,
        checked14: false,
        checked15: false,
      },
    };
  },
};
</script>
<style scoped>
.el-row {
  padding: 20px;
}
</style>