<template>
  <div>
    <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
      <el-form class="invoice-form width-full" label-position="top" :model="form">
        <el-row :gutter="6" class="width-full">
          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item>
              <label>{{ $t("item-number") }}</label>
              <el-select v-model="form.accType" class="width-full">
                <el-option
                  v-for="item in accountNatures"
                  :key="item.mddCode"
                  :label="item.mddname"
                  :value="item.mddvalueNo"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item>
              <label>{{ $t("item-name") }}</label>
              <el-select v-model="form.accType" class="width-full">
                <el-option
                  v-for="item in accountNatures"
                  :key="item.mddCode"
                  :label="item.mddname"
                  :value="item.mddvalueNo"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="6" class="width-full">
          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item>
              <label>{{$t("branch-name")}}</label>
              <el-select v-model="form.accLvl">
                <el-option :label="$t('all')" :value="maxLevel"></el-option>
                <el-option
                  v-for="level in maxLevel ? maxLevel - 1 : maxLevel"
                  :key="level"
                  :label="level"
                  :value="level"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="6" :md="5" :lg="4">
            <el-form-item>
              <label>{{$t("unit")}}</label>
              <el-select v-model="form.rpType">
                <el-option :label="$t('all')" :value="null"></el-option>
                <el-option :label="$t('main')" :value="0"></el-option>
                <el-option :label="$t('sub')" :value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="mt-2">
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
        <!-- controls btns -->
        <el-row class="width-full">
          <div class="text-center container ma-4 mx-8 py-2 mt-0">
            <div class="text-center mt-2 action-buttons-nonGrown justify-center">
              <el-button
                size="medium"
                class="mb-1 btn-cyan"
                @click="toggleEdit"
                >{{ enableEdit ? $t("back-f6") : $t("edit-f3") }}</el-button
              >
              <el-button
                size="medium"
                @click="displayRecord"
                class="mb-1 px-3 btn-cyan"
                >{{ $t("display") }}</el-button
              >
              <el-button size="medium" class="mb-1 btn-cyan">{{
                $t("print-pdf")
              }}</el-button>
              <el-button size="medium" class="mb-1 btn-cyan">{{
                $t("print-f4")
              }}</el-button>
              <el-button size="medium" class="mb-1 btn-cyan" @click="update">{{
                $t("save-f5")
              }}</el-button>
            </div>
          </div>
        </el-row>
      </el-form>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Invoice",
  data() {
    return {
      loading: false,
      form: {
        rpType: "",
        accLvl: "",
        brID: "",
        accName: "",
        accType: "",
        showZeros: false,
        orderBy: ""
      }
    };
  },
  methods: {
    toggleEdit(){

    },
    displayRecord(){

    },
    update(){

    }
  }
}
</script>
