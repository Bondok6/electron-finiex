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
      <el-col :lg="1" :md="5" :sm="1" :xs="10">
        <td>
          <el-input v-model="form.taxNo" :placeholder="$t('tax-number')">
          </el-input>
        </td>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapState, mapMutations} from "vuex";

export default {
  data() {
    return {
      form : {
        taxSubmitted: false,
        taxNo : ""
      },
    };
  },
  methods:{
    ...mapMutations({
      setRecordDetails : "customerManagement/customer/setRecordDetails"
    }),
  },
  computed:{
    ...mapState({
      singleRecordDetails : state => state.customerManagement.customer.singleRecordDetails,

    })
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
