<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('adjustment-number')">
            <el-input v-model="form.adjustment_number" placeholder="14">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('adjustment-date')">
            <el-date-picker
              type="datetime"
              placeholder="2020-10-15"
              format="yyyy-MM-dd HH:mm"
              Value-format="yyyy-MM-dd HH:mm"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('cost-center')">
            <el-select v-model="form.cost">
              <el-option
                :label="$t('add-cost-center')"
                :value="1"
                class="addSelect"
              >
                <el-button class="width-full" @click="openDialogOne(true)">{{
                  $t("add-cost-center")
                }} <i class="el-icon-plus mx-1"></i> </el-button></el-option
              >
              <el-option
                :label="$t('center-one')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full" @click="openDialogTwo(true)">{{
                  $t("center-one")
                }}</el-button>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- first dialog -->
    <addcostcenter />
    

    <!-- second dialog -->
    <costcenterone />

  </el-container>
</template>


<script>
import Addcostcenter from '~/components/dialogs/add-cost-center';
import Costcenterone from '~/components/dialogs/cost-center-one';


export default {
  name: "invoice",
  components: {
    Addcostcenter, 
    Costcenterone
  },

  data: function () {
    return {
      dialogOne: false,
      dialogTwo: false,
      form: {
        adjustment_number: 1,
        cost: 1,
        main_center: 1,
      },
    };
  },

  methods: {
      openDialogOne(state){
        this.$store.commit(
          "addcostcenter/updateDialogState",
          state
        );
      }, 
      
      openDialogTwo(state){
        this.$store.commit(
          "costcenterone/updateDialogState",
          state
        );
      }
  }
};
</script>