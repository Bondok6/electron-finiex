<template>
  <div class="container border-radius-20 background-popup mb-0 px-2 py-3 invoice-table">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div class="text-center mb-2" style="padding:20px; color : #707070">
          <span class="d-block">{{
            $t(
              "the-fiscal-year-for-the-following-branches-will-be-closed"
            )
          }}</span>
          <span class="d-block">{{
            $t(
              "with-the-opening-of-a-new-financial-year"
            )
          }}</span>
           <span class="d-block">{{
            $t(
              "to-continue-press-ok-and-to-exit-press-cancel"
            )
          }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div class="horizontal-line-white">
          <span>{{ $t("new-fiscal-year") }}</span>
        </div>
        <el-form label-position="top">
          <table style="width: 100%">
            <tbody>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("year-name") }}</span>
                </td>
                <td class="input-padding">
                  <el-input v-model="form.search"> </el-input>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("fiscal-year-start-date") }}</span>
                </td>
                <td class="input-padding">
                  <el-date-picker
                    class="width-full"
                    type="date"
                    placeholder="2020-10-15"
                    v-model="form.date"
                  ></el-date-picker>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("fiscal-year-end-date") }}</span>
                </td>
                <td class="input-padding">
                  <el-date-picker
                    class="width-full"
                    type="date"
                    placeholder="2020-10-15"
                    v-model="form.date"
                  ></el-date-picker>
                </td>
              </tr>
              <tr>
                <td class="popup-label">
                  <span>{{ $t("branch-name") }}</span>
                </td>
                <td class="input-padding">
                  <el-select
                    class="width-full"
                    :placeholder="$t('all')"
                    v-model="form.input"
                  >
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </td>
              </tr>
            </tbody>
          </table>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div class="mt-3 width-full">
          <div class="px-2">
            <el-checkbox class="padding-label" style="white-space: normal;">{{
              $t(
                "rollover-the-closing-balances-of-the-accounts-to-the-new-year"
              )
            }}</el-checkbox>
          </div>
          <div class="px-2">
            <el-checkbox class="padding-label" style="white-space: normal;">{{
              $t(
                "recycle-the-closing-balances-of-the-quantities-to-the-new-year"
              )
            }}</el-checkbox>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div class="text-oppesite py-2 mt-0">
          <div class="">
            <el-input
              class="notes-summary mx-2"
              type="textarea"
              :rows="7"
              :placeholder="$t('notes-for-the-fiscal-year')"
            >
            </el-input>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        search: "",
        date: "",
        input: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.background-popup {
  background-color: #e6f8fc;
}
.horizontal-line-white {
  width: 200px;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  text-align: center;
  margin: 10px 0 20px;
}
.horizontal-line-white span {
  background: #e6f8fc;
  padding: 0 10px;
  color: #21798d;
}
.text-oppesite {
  [dir="rtl"] & {
    text-align: left;
  }
  [dir="ltr"] & {
    text-align: right;
  }
}
</style>
