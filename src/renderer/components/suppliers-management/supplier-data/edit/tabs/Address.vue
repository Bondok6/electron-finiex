<template>
  <div>
    <table style="padding-top: 2pc; width: 100%;padding-right:1pc;">
      <tbody>
        <el-row :gutter="24">
          <el-col :lg="5" :md="7" :sm="7" :xs="9" class="popup-label2">
            <span>{{ $t("address") }}</span>
          </el-col>
          <el-col :lg="5" :md="7" :sm="8" :xs="12">
            <el-input class="" v-model="form.address"> </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="6" class="width-full">
          <el-col :xs="24" :sm="24" :md="7" :lg="5" class="popup-label2">
            <span>{{ $t("country-city") }}</span>
          </el-col>
          <el-row :gutter="24">
            <el-col :xs="24" :sm="24" :md="7" :lg="5">
                <el-select
                  class="width-full"
                  v-model.number="form.countryID"
                  @change="countrySelected"
                >
                  <el-option
                    v-for="country in countriesList"
                    :label="country.cconNameArb"
                    :value="country.countryId"
                    :key="country.countryId"
                  >
                  </el-option>

                </el-select>


            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="5">
              <el-select
                class="width-full"
                v-model.number="form.cityID"
              >
                <el-option
                  v-for="city in citiesList"
                  :label="city.cityNameArb"
                  :value="city.cityId"
                  :key="city.cityId"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-row>
        <!-- <el-row :gutter="24">
          <el-col :lg="5" :md="7" :sm="7" :xs="9" class="popup-label2">
            <span>{{ $t("country-city") }}</span>
          </el-col>
          <el-row :gutter="24">
            <el-col :lg="4" :md="7" :sm="7" :xs="12">
              <template>
                <button
                  @click="choosecity = true"
                  style="background: transparent; border: none"
                >
                  <el-input class="babyblue-color" v-model="form.search">
                    <template slot="append"
                      ><i class="el-icon-search"></i
                    ></template>
                  </el-input>
                </button>
              </template>
            </el-col>
            <el-col :lg="4" :md="7" :sm="7" :xs="12">
              <template>
                <button
                  @click="choosecountry = true"
                  style="background: transparent; border: none"
                >
                  <el-input class="babyblue-color" v-model="form.search">
                    <template slot="append"
                      ><i class="el-icon-search"></i
                    ></template>
                  </el-input>
                </button>
              </template>
            </el-col>
          </el-row>
        </el-row> -->
        <el-row :gutter="20">
          <el-col :lg="5" :md="7" :sm="7" :xs="9" class="popup-label2">
            <span>{{ $t("location-on-map") }}</span>
          </el-col>
          <el-col :lg="10" :md="10" :sm="10" :xs="10">
            <iframe
              class="iframe"
              src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"
            ></iframe>
          </el-col>
        </el-row>
      </tbody>
    </table>

   
  <!-- <el-dialog :visible.sync="choosecity" width="70%">
      <div >
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
                      v-model="chooseArabic"
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
                      v-model="chooseEnglish"
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
                      v-model="parcode"
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
    <el-dialog :visible.sync="choosecountry" width="70%">
      <div >
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
                      <el-option :label="$t('main')" :value="2"></el-option>
                      <el-option :label="$t('sub')" :value="1"></el-option>
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
                      v-model="chooseArabic"
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
                      v-model="chooseEnglish"
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
                      v-model="parcode"
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
    </el-dialog> -->
  </div>
</template>
<script>
import {mapMutations, mapState} from "vuex";
export default {
  data() {
    return {
      form: {
        lat: "",
        lon: "",
        address: "",
        cityID: null,
        countryID: null,
      },
    };
  },
  computed:{
    ...mapState({
      countriesList : state=> state.lists.countriesList,
      citiesList :  state=> [state.lists.citiesList],
      singleRecordDetails : state => state.suppliersManagement.supplierData.singleRecordDetails,

    })
  },
  
  methods: {
    ...mapMutations({
      setRecordDetails : "suppliersManagement/supplierData/setRecordDetails"
    }),
    countrySelected(val){
        this.$store.dispatch("lists/getCitiesList" ,val).catch(e=>{
        this.$message(e.message);
      })
    }
  },
  watch:{
    form: {
      singleRecordDetails : {
      handler({ lat, lon,address,cityID,countryID}){
          this.form = {
            lat, lon,address,cityID,countryID
          }
          this.countrySelected(countryID)
      },
      deep : true
    },
      handler(newValue) {
        // deep clone by spread operator
        this.setRecordDetails({
          ...newValue,
        });
      },
      deep: true
    }
  }
};
</script>