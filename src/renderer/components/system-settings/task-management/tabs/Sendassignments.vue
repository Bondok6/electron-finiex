<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-row class="width-full mt-4">
      <el-row :gutter="10" class="width-full">
        <el-col :xs="24" :md="8" class="popup-label2 mt-2">
          <span>{{ $t("task-title") }}</span>
        </el-col>
        <el-col :xs="24" :md="6">
          <el-row class="width-full">
            <el-col :span="24" class="mt-3">
              <el-input v-model="form.item_number" class="width-full">
              </el-input>
            </el-col>
            <el-col :span="24" class="mt-3">
              <el-input
                type="textarea"
                :rows="7"
                :placeholder="$t('task-text')"
              >
              </el-input>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <el-col :xs="24" :md="12">
          <el-row :gutter="6" class="width-full section-title">
            <el-col :xs="3" :sm="3" :md="6" :lg="4">
              <div class="side-line"></div>
            </el-col>
            <el-col :xs="16" :sm="18" :md="12" :lg="16">
              <h1 class="section-title-text">
                {{ $t("send-tasks-to-users") }}
              </h1>
            </el-col>
            <el-col :xs="3" :sm="3" :md="6" :lg="4">
              <div class="side-line"></div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="12" class="d-flex justify-end">
          <el-button
            @click="form.select_all = !form.select_all"
            :class="[form.select_all ? 'btn-dark-grey' : 'btn-red']"
            class="width-full mt-1 w-250"
          >
            <span v-if="form.select_all">
              {{ $t("select all") }}
            </span>
            <span v-else>
              {{ $t("remove all") }}
            </span>
          </el-button>
        </el-col>
      </el-row>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "search",

  data: function () {
    return {
      form: {
        select_all: 1,
      },
    };
  },
};
</script>



<style lang="scss" scoped>
.side-line {
  width: 100%;
  border-bottom: 1px solid #21798d;
}

.section-title {
  display: flex;
  align-items: center;
}

.section-title-text {
  text-align: center;
  color: #21798d;
}

.dialog-title {
  color: #606266;
  text-align: center;
  font-size: x-large;
  font-weight: 300;
  overflow: hidden;
}

.active {
  color: #409eff !important;
}

.dialog-title {
  text-align: center;
  font-size: 2rem;
  color: black;
}
</style>
