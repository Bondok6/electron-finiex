<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" :lg="9" class="px-15-lg">
          <div class="text-center mb-2">
          <span style="color:#fff">_______________</span> <span style="color:#21798d">{{ $t("general-information") }}</span> <span style="color:#fff">_______________</span>
          </div>
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("establishment-name-arabic") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("establishment-name-english") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("establishment-address-arabic") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("establishment-address-english") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("mail") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("country") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full"
                      placeholder=""
                      v-model="form.input"
                    >
                      <el-option
                        class="addSelect"
                        :label="$t('all')"
                        :value="1"
                      >
                        <el-button
                          class="width-full"
                          @click="choosecountry = true"
                        >
                          {{ $t("add-country") }}
                          <i class="el-icon-plus mx-1"></i>
                        </el-button>
                      </el-option>
                      <el-option
                        class="selectButton"
                        :label="$t('all')"
                        :value="2"
                      >
                        <el-button class="width-full"
                          >{{ $t("all") }}
                        </el-button>
                      </el-option>
                      <el-option
                        class="selectButton"
                        :label="$t('all')"
                        :value="3"
                      >
                        <el-button class="width-full"
                          >{{ $t("all") }}
                        </el-button>
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("city") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full"
                      placeholder=""
                      v-model="form.input"
                    >
                      <el-option
                        class="addSelect"
                        :label="$t('all')"
                        :value="1"
                      >
                        <el-button
                          class="width-full"
                          @click="choosecity = true"
                        >
                          {{ $t("add-city") }}
                          <i class="el-icon-plus mx-1"></i>
                        </el-button>
                      </el-option>
                      <el-option
                        class="selectButton"
                        :label="$t('all')"
                        :value="2"
                      >
                        <el-button class="width-full"
                          >{{ $t("all") }}
                        </el-button>
                      </el-option>
                      <el-option
                        class="selectButton"
                        :label="$t('all')"
                        :value="3"
                      >
                        <el-button class="width-full"
                          >{{ $t("all") }}
                        </el-button>
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("post-box") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("telephone") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("fax") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("tax-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("commercial-registration-no") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("bank-account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" :lg="9" class="px-15-lg">
          <div class="text-center mr-30-lg mb-2">
          <span style="color:#fff">_______________</span> <span style="color:#21798d">{{ $t("fiscal-year-data") }}</span> <span style="color:#fff">_______________</span>
          </div>
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("fiscal-year-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search">
                      <template slot="prepend">
                        1
                      </template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("accounting-period") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-row>
                      <el-col :span="12">
                        <el-date-picker
                          class="width-full"
                          type="date"
                          placeholder="2020-10-15"
                          v-model="form.date"
                        ></el-date-picker>
                      </el-col>
                      <el-col :span="12">
                        <el-date-picker
                          class="width-full"
                          type="date"
                          placeholder="2020-10-15"
                          v-model="form.date"
                        ></el-date-picker>
                      </el-col>
                    </el-row>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("branch-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("branch-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("responsible-person") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("address") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("telephone") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("mobile") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("fax") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("user-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("user-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("password") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span class="font-small">{{ $t("confirm-password") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input v-model="form.search"> </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" :lg="6" class="px-15-lg">
          <!-- <div class="mt-2">
            <span style="color:#fff">__</span>
            <span style="color: #21798d;">{{ $t("establishment-logo") }}</span>
            <span style="color:#fff">__</span>
          </div>
          <div class="justify-center">
            <img
              src="@/assets/images/branch.png"
              alt="avatar"
              width="200"
              height="auto"
              class="border-radius-20 mt-4"
            />
          </div>
          <div class="mt-2">
            <span style="color: #21798d;" class="text-center"
              >*{{ $t("please-include-a-picture") }}</span
            >
          </div> -->
          <div class="w-200 mt-2">
            <span class="text-center d-block"> <span style="color:#fff">--</span> <span style="color: #21798d;">{{ $t("establishment-logo") }}</span> <span style="color:#fff">--</span></span>
             <el-upload
              style="display: inline-block"
              :limit="1"
              class="upload-demo"
              ref="upload"
              accept=".xls,.xlsx"
              action="/hqx/knowledge/importKnowledge"
              :auto-upload="false"
            >
            <img
              src="@/assets/images/branch.png"
              alt="avatar"
              width="200"
              height="auto"
              class="mt-4"
            />
             </el-upload>
            <span class="text-center d-block" style="color: #21798d;"
              >
              
              *{{ $t("please-include-a-picture") }}
              
              </span>
           
          </div>
        </el-col>
        <!-- start dialog -->
        <el-dialog :visible.sync="choosecity" width="70%">
          <div>
            <section
              class="mb-0 box-shadow px-2 py-3 invoice-table container"
              style="border-radius: 10px"
            >
              <el-row>
                <el-col :xs="24" :md="18" class="px-15-lg">
                  <el-form label-position="top">
                    <table style="width: 100%">
                      <tbody>
                        <tr>
                          <td class="popup-label">
                            <span>{{ $t("Country-name/Arabic") }}</span>
                          </td>
                          <td>
                            <el-input
                              class="d-flex placeHolderDialog"
                              v-model="form.chooseArabic"
                              placeholder="1"
                            >
                            </el-input>
                          </td>
                        </tr>
                        <tr>
                          <td class="popup-label">
                            <span>{{ $t("Country-name/English") }}</span>
                          </td>
                          <td>
                            <el-input
                              class="d-flex placeHolderDialog"
                              v-model="form.chooseEnglish"
                              placeholder="كود 90 ضغط 40 "
                            >
                            </el-input>
                          </td>
                        </tr>
                        <tr>
                          <td class="popup-label">
                            <span>{{ $t("State-Key") }}</span>
                          </td>
                          <td>
                            <el-input
                              class="d-flex placeHolderDialog"
                              v-model="form.parcode"
                            >
                            </el-input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </el-form>
                </el-col>
              </el-row>
            </section>
            <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
              <div
                class="
              justify-center
              mt-2
              action-buttons-nonGrown
              align-center align-baseline
            "
              >
                <el-button
                  size="mini"
                  class="mb-1 btn-blue"
                  @click="choosecity = false"
                  >{{ $t("save-f5") }}</el-button
                >
                <el-button
                  size="mini"
                  class="mb-1 btn-red"
                  @click="choosecity = false"
                  >{{ $t("delete-f8") }}</el-button
                >
                <el-button
                  size="mini"
                  class="mb-1 btn-violet"
                  @click="choosecity = false"
                  >{{ $t("back-f6") }}</el-button
                >
                <el-button
                  size="mini"
                  class="mb-1 btn-grey"
                  @click="choosecity = false"
                  >{{ $t("print-f4") }}</el-button
                >
              </div>
            </div>
          </div>
        </el-dialog>
        <!-- end dialog -->
        <!-- start dialog -->
        <el-dialog :visible.sync="choosecountry" width="70%">
          <div>
            <section
              class="mb-0 box-shadow px-2 py-3 invoice-table container"
              style="border-radius: 10px"
            >
              <el-row>
                <el-col :xs="24" :md="18" class="px-15-lg">
                  <el-form label-position="top">
                    <table style="width: 100%">
                      <tbody>
                        <tr>
                          <td class="popup-label">
                            <span>{{ $t("Country-name") }}</span>
                          </td>
                          <td>
                            <el-select
                              placeholder="1"
                              v-model="form.item_number"
                              class="width-full d-flex placeHolderDialog"
                            >
                              <el-option
                                :label="$t('main')"
                                :value="2"
                              ></el-option>
                              <el-option
                                :label="$t('sub')"
                                :value="1"
                              ></el-option>
                            </el-select>
                          </td>
                        </tr>
                        <tr>
                          <td class="popup-label">
                            <span>{{ $t("Country-name/Arabic") }}</span>
                          </td>
                          <td>
                            <el-input
                              class="d-flex placeHolderDialog"
                              v-model="form.chooseArabic"
                              placeholder="1"
                            >
                            </el-input>
                          </td>
                        </tr>
                        <tr>
                          <td class="popup-label">
                            <span>{{ $t("Country-name/English") }}</span>
                          </td>
                          <td>
                            <el-input
                              class="d-flex placeHolderDialog"
                              v-model="form.chooseEnglish"
                              placeholder="كود 90 ضغط 40 "
                            >
                            </el-input>
                          </td>
                        </tr>
                        <tr>
                          <td class="popup-label">
                            <span>{{ $t("State-Key") }}</span>
                          </td>
                          <td>
                            <el-input
                              class="d-flex placeHolderDialog"
                              v-model="form.parcode"
                            >
                            </el-input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </el-form>
                </el-col>
              </el-row>
            </section>
            <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
              <div
                class="
              justify-center
              mt-2
              action-buttons-nonGrown
              align-center align-baseline
            "
              >
                <el-button
                  size="mini"
                  class="mb-1 btn-blue"
                  @click="choosecountry = false"
                  >{{ $t("save-f5") }}</el-button
                >
                <el-button
                  size="mini"
                  class="mb-1 btn-red"
                  @click="choosecountry = false"
                  >{{ $t("delete-f8") }}</el-button
                >
                <el-button
                  size="mini"
                  class="mb-1 btn-violet"
                  @click="choosecountry = false"
                  >{{ $t("back-f6") }}</el-button
                >
                <el-button
                  size="mini"
                  class="mb-1 btn-grey"
                  @click="choosecountry = false"
                  >{{ $t("print-f4") }}</el-button
                >
              </div>
            </div>
          </div>
        </el-dialog>
        <!-- end-dialog -->
      </el-row>
    </section>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      form: {
        search: "1",
        input: "1",
        date: "",
        chooseArabic: "",
        chooseEnglish: "",
        item_number: "",
        parcode: ""
      },
      choosecity: false,
      choosecountry: false
    };
  }
};
</script>
<style lang="scss" scoped>
.mr-30-lg{
    @media only screen and (max-width: 987px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

// .mr-icon .el-input__prefix .el-input__icon{
//   margin-right: 20px;
// }
.el-input--prefix .el-input__prefix {
  margin-right: 10px;
}
.font-small { 
  font-size: 12px;
}
</style>
