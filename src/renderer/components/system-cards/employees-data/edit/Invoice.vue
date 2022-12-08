<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("employee-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="pr-append" v-model="form.search">
                      <el-button slot="append" @click="openDialogOne(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("employee-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("address") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("e-mail") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("nationality") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      placeholder=""
                      v-model="form.item_number"
                    >
                      <el-option
                        :label="$t('add')"
                        :value="1"
                        class="addSelect"
                      >
                        <el-button class="width-full" @click="dialogTwo = true"
                          >{{ $t("add") }} <i class="el-icon-plus mx-1"></i
                        ></el-button>
                      </el-option>
                      <el-option
                        :label="$t('egyptaion')"
                        :value="2"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("egyptaion") }}
                        </el-button>
                      </el-option>
                      <el-option
                        :label="$t('saudi')"
                        :value="3"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("saudi") }}
                        </el-button>
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("gender") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      placeholder=""
                      v-model="form.item_number"
                    >
                      <el-option
                        :label="$t('male')"
                        :value="2"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("male") }}
                        </el-button>
                      </el-option>
                      <el-option
                        :label="$t('female')"
                        :value="3"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("female") }}
                        </el-button>
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("social-status") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      placeholder=""
                      v-model="form.item_number"
                    >
                      <el-option
                        :label="$t('all')"
                        :value="2"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("all") }}
                        </el-button>
                      </el-option>
                      <el-option
                        :label="$t('all')"
                        :value="3"
                        class="selectButton"
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
                    <span>{{ $t("job") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      placeholder=""
                      v-model="form.item_number"
                    >
                      <el-option
                        :label="$t('all')"
                        :value="2"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("all") }}
                        </el-button>
                      </el-option>
                      <el-option
                        :label="$t('all')"
                        :value="3"
                        class="selectButton"
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
                    <span>{{ $t("specialization") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("telephone-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobile-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("id-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("passport-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("date-of-hiring") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-date-picker
                      class="width-full"
                      type="datetime"
                      placeholder="2020-10-15"
                      format="yyyy-MM-dd HH:mm"
                      Value-format="yyyy-MM-dd HH:mm"
                      v-model="form.date"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("total-salary") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.search"> </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg mt-2">
          <div class="d-block mt-4">
            <div
              class="d-flex justify-center flex-direction-column align-center"
            >
              <!-- <el-form class="mb-8">
                <el-select
                  v-model="form.type"
                  class="color-blue text-center placeHolderColor selectButton"
                  :placeholder="$t('employee-name')"
                >
                  <el-option
                    :label="$t('employee-name')"
                    :value="1"
                    class="selectButton"
                  >
                    <el-button class="width-full">
                      {{ $t("employee-name") }}
                    </el-button>
                  </el-option>
                  <el-option
                    :label="$t('employee-number')"
                    :value="2"
                    class="selectButton"
                  >
                    <el-button class="width-full">
                      {{ $t("employee-number") }}
                    </el-button>
                  </el-option>
                </el-select>
              </el-form> -->
              <img
                src="@/assets/images/avatar.jpg"
                alt="avatar"
                width="200"
                height="auto"
                class="border-radius-20 mt-4-lg"
              />
              <div class="d-flex mt-2">
                <el-button size="mini" class="px-4-lg btn-navy mx-1">{{
                  $t("add")
                }}</el-button>
                <el-button size="mini" class="px-4-lg btn-navy mx-1">{{
                  $t("cancel")
                }}</el-button>
              </div>
              <el-button
                size="mini"
                @click="dialogThree = true"
                class="px-15-lg btn-navy mx-1 mt-2"
                >{{ $t("take-a-picture-with-the-camera") }}</el-button
              >
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <accountingtree />
      <!-- end accountingtree  -->
    </section>
    <el-dialog :visible.sync="dialogThree" width="50%">
      <el-container class="container d-block box-shadow mb-0 px-2 py-2">
        <div class="px-30-lg py-15-lg">
          <div class="d-flex flex-wrap space-between">
            <span>
              <el-button class="btn-dark-green px-4-lg">
                {{ $t("turn-on") }}
              </el-button>
            </span>
            <span>
              <el-button class="btn-red px-4-lg">
                {{ $t("turn-off") }}
              </el-button>
            </span>
            <span>
              <el-button class="btn-dark-grey px-4-lg">
                {{ $t("save") }}
              </el-button>
            </span>
          </div>

          <div class="devicesConnected">
            {{ $t("no-devices-connected") }}
          </div>
          <div class="px-30-lg py-15-lg" style="text-align: center">
            <img
              src="@/assets/images/man_face.jpg"
              alt="menu image"
              width="auto"
              height="150"
              style="
                margin-bottom: 20px;
                border-radius: 10px;
                border: 1px solid #bbb;
              "
            />
          </div>
        </div>
      </el-container>
      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>

    <el-dialog :visible.sync="dialogTwo" width="70%">
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
                        <span>{{ $t("country-name") }}</span>
                      </td>
                      <td>
                        <el-select
                          :placeholder="$t('without')"
                          v-model="form.item_number"
                          class="width-full"
                        >
                          <el-option
                            :label="$t('all')"
                            :value="2"
                            class="selectButton"
                          >
                            <el-button class="width-full">
                              {{ $t("all") }}
                            </el-button>
                          </el-option>
                          <el-option
                            :label="$t('all')"
                            :value="3"
                            class="selectButton"
                          >
                            <el-button class="width-full">
                              {{ $t("all") }}
                            </el-button>
                          </el-option>
                        </el-select>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("nationality-name-arabic") }}</span>
                      </td>
                      <td>
                        <el-input class="" v-model="form.search"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("nationality-name-english") }}</span>
                      </td>
                      <td>
                        <el-input v-model="form.name" class="" />
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
              @click="dialogTwo = false"
              >{{ $t("save-f5") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-red"
              @click="dialogTwo = false"
              >{{ $t("delete-f8") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="dialogTwo = false"
              >{{ $t("back-f6") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-grey"
              @click="dialogTwo = false"
              >{{ $t("print-f4") }}</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Accountingtree from "~/components/dialogs/accounting-tree";
export default {
  components: {
    Accountingtree,
  },
  data() {
    return {
      form: {
        name: "1",
        region: "1",
        date1: "1",
        search: "1",
        date2: "1",
        delivery: false,
        type: [],
        resource: "1",
        desc: "1",
        main_warehouse: 1,
      },
      dialogOne: false,
      dialogTwo: false,
      dialogThree: false,
    };
  },
  methods: {
    openDialogOne(state) {
      this.$store.commit("accountingtree/updateDialogState", state);
    },
  },
};
</script>

<style scoped>

.devicesConnected {
  padding: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid #ddd;
}
</style>
