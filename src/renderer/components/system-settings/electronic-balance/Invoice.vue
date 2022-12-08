<template>
  <div
    class="container border-radius-20 box-shadow d-block ma-4 mb-0 px-2 py-3 invoice-table"
  >
    <el-form label-position="top">
      <el-row :gutter="6">
        <el-col :xs="24" :sm="24" :md="18">
          <table style="width: 100%">
            <tbody>
              <tr>
                <td class="text-center">
                  <span style="color : #707070;">
                    {{ $t("barcode-type") }}
                  </span>
                </td>
                <td class="input-padding">
                  <el-select v-model="form.input" class="width-full">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td>
                  <el-row class="width-full">
                    <el-col :xs="24" :md="24">
                      <el-row :gutter="6" class="width-full section-title">
                        <el-col :xs="3" :sm="3" :md="6" :lg="4">
                          <div class="side-line"></div>
                        </el-col>
                        <el-col :xs="16" :sm="18" :md="12" :lg="16">
                          <h3 class="section-title-text">
                            {{ $t("barcode-number-length") }}
                          </h3>
                        </el-col>
                        <el-col :xs="3" :sm="3" :md="6" :lg="4">
                          <div class="side-line"></div>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </td>
                <td></td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="border-td">
                    <span style="color : #707070;">
                      {{ $t("barcode-indicator") }}
                    </span>
                  </div>
                </td>
                <td class="input-padding">
                  <el-input v-model="form.name"></el-input>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="border-td">
                    <span style="color : #707070;">
                      {{ $t("barcode") }}
                    </span>
                  </div>
                </td>
                <td class="input-padding">
                  <el-input v-model="form.name"></el-input>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="border-td">
                    <span style="color : #707070;">
                      {{ $t("price") }}
                    </span>
                  </div>
                </td>
                <td class="input-padding">
                  <el-input v-model="form.name"></el-input>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="border-td">
                    <span style="color : #707070;">
                      {{ $t("weight") }}
                    </span>
                  </div>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="form.name"
                    :placeholder="$t('all')"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="border-td">
                    <span style="color : #707070;">
                      {{ $t("check-numbers") }}
                    </span>
                  </div>
                </td>
                <td class="input-padding">
                  <el-input
                    v-model="form.name"
                    :placeholder="$t('all')"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <el-button 
                  @click="form.item_weight_is_fixed = !form.item_weight_is_fixed"
                  :class="[form.item_weight_is_fixed ? 'btn-dark-grey' : 'btn-red']"
                  class="width-full mt-1"
                  > 
                  <span>
                      {{ $t("item-weight-is-fixed") }}
                  </span>
                  </el-button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "invoice",
  data: function() {
    return {
      form: {
        input: "",
        name: "",
        item_weight_is_fixed: 1
      }
    };
  }
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
.border-td {
  [dir="rtl"] & {
    border-right: 5px solid #21798d;
  }
  [dir="ltr"] & {
    border-left: 5px solid #21798d;
  }
  padding: 10px;
}
</style>
