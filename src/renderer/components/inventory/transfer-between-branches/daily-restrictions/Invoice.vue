<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item label="رقم التحويل">
                <el-input v-model="form.transfer_number" placeholder="14">
                  <template slot="append"
                    ><i class="el-icon-search"></i
                  ></template>
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item label="تاريخ التحويل">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item label="الفرع المحول منه">
                <el-select v-model="form.branch_from">
                  <el-option label="الفرع الرئيسي" :value="1"></el-option>
                  <el-option label="الفرع الرئيسي" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item label="الفرع المحول إليه">
                <el-select v-model="form.branch_to">
                  <el-option label="الفرع الرئيسي" :value="1"></el-option>
                  <el-option label="الفرع الرئيسي" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item label="المستودع المحول منه">
                <el-input v-model="form.warehouse_from" placeholder="14"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item label="المستودع المحول اليه">
                <el-input v-model="form.warehouse_to" placeholder="14"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4" >
              <el-form-item label="سعر التحويل">
                <el-select v-model="form.transfer_price">
                  <el-option label=" بدون" :value="1"></el-option>
                  <el-option label=" بدون" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {
        transfer_number: 1,
        transfer_price: 1,
        warehouse_to: 1,
        warehouse_from: 1,
        branch_to: 1,
        branch_from: 1,
      },
    };
  },
};
</script>