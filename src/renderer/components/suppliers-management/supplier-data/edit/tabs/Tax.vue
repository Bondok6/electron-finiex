<template>
  <div>
    <el-checkbox class="checked text-black" v-model="form.taxSubmitted">{{
      $t("taxable")
    }}</el-checkbox>
    <el-row :gutter="10" style="margin-right: 3pc">
      <el-col :lg="3" :md="5" :sm="9" :xs="10">
        <td class="popup-label-mobiel">
          <span>{{ $t("tax-number") }}</span>
        </td>
      </el-col>
      <el-col :lg="4" :md="5" :xs="10">
        <td>
          <el-input v-model="form.taxNo" :placeholder="$t('tax-number')"
          >
          </el-input>
        </td>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapMutations} from "vuex";

export default {
  data() {
    return {
      form : {
        taxSubmitted: false,
        taxNo : ""
      }
    };
  },
  computed:{
    ...mapState({
      singleRecordDetails : state => state.suppliersManagement.supplierData.singleRecordDetails,

    })
  },
  methods:{
    ...mapMutations({
      setRecordDetails : "suppliersManagement/supplierData/setRecordDetails"
    }),
  },
  watch:{
    singleRecordDetails :{
      handler({taxNo , taxSubmitted}){
        this.form = {
          taxNo , taxSubmitted
        }
        },
      deep : true
    },
    form: {
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