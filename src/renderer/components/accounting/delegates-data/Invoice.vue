<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="18" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-number") }}</span>
                  </td>
                  <td>
                    <el-input class="" v-model="form.search"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td>
                    <el-input class="" v-model="form.search">
                      <template slot="append"
                        ><i class="el-icon-search"></i
                      ></template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-name") }}</span>
                  </td>
                  <td>
                    <el-input class="" v-model="form.search"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("telephone") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("fax") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-box") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobile") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("address") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-type") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model="form.item_number"
                      class="width-full"
                      placeholder=""
                    >
                      <el-option :label="$t('all')" :value="2"></el-option>
                      <el-option :label="$t('all')" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :md="18" class="px-15-lg mt-40">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="text-center">
          <span class="color-green">- {{ $t("delegate-commission") }} -</span>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("commission-type") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model="form.item_number"
                      class="width-full"
                      placeholder=""
                    >
                      <el-option :label="$t('all')" :value="2"></el-option>
                      <el-option :label="$t('all')" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="9" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("monthly-sales") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("monthly-sales") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="9" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("sales-percentage") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="">
                      <!-- <template slot="append">%</template> -->
                    </el-input>
                  </td>
                  <td>
                    <el-button class="btn-dark-blue" style="float: left"
                      >%</el-button
                    >
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("revenues-percentage") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class=""> </el-input>
                  </td>
                  <td>
                    <el-button class="btn-dark-blue" style="float: left"
                      >%</el-button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        search: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
};
</script>
