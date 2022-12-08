<template>
  <span class="text-unbold px-2">
    <el-row class="wrap-mod">
      <el-col :md="12" :lg="8" class="d-flex align-items-center px-1">
        <table style="width: 100%">
          <tbody>
            <tr>
              <td style="width: 40%" class="text-center">
                {{ $t("sum") }}
              </td>
              <td>
                <el-input placeholder="0" class="text-center pa-0"></el-input>
              </td>
            </tr>    
          </tbody>
        </table>         
      </el-col>

      <el-col :md="12" :lg="8" class="d-flex align-items-center px-1">
        <table style="width: 100%">
          <tbody>
            <tr>
              <td style="width: 40%" class="text-center">
                {{ $t("discount-amount") }}
              </td>
              <td style="width: 30%">
                <el-input placeholder="0" class="text-center pa-0"></el-input>
              </td>
              <td>
                <el-input placeholder="0" class="text-center pa-0">
                  <template slot="append">%</template>
                </el-input>
              </td>
            </tr>    
          </tbody>
        </table>         
      </el-col>

      <el-col :md="12" :lg="8" class="d-flex align-items-center px-1">
        <table style="width: 100%">
          <tbody>
            <tr>
              <td style="width: 40%" class="text-center">
                {{ $t("total-product-tax-%") }}
              </td>
              <td style="width: 30%">
                <el-input placeholder="0" class="text-center pa-0"></el-input>
              </td>
              <td>
                <el-input placeholder="0" class="text-center pa-0">
                  <template slot="append">%</template>
                </el-input>
              </td>
            </tr>    
          </tbody>
        </table>         
      </el-col>
    </el-row>

    <el-row class="wrap-mod">
      <el-col :md="12" :lg="8" class="d-flex align-items-center px-1">
        <table style="width: 100%">
          <tbody>
            <tr>
              <td style="width: 40%" class="text-center">
                {{ $t("total-tax") }}
              </td>
              <td style="width: 30%">
                 <el-input placeholder="0" class="text-center pa-0"></el-input>
              </td>
              <td>
                <el-input placeholder="0" class="text-center pa-0">
                  <template slot="append">%</template>
                </el-input>
              </td>
            </tr>    
          </tbody>
        </table>         
      </el-col>

      <el-col :md="12" :lg="8" class="d-flex align-items-center px-1">
        <table style="width: 100%">
          <tbody>
            <tr>
              <td style="width: 40%" class="text-center">
                {{ $t("net") }}
              </td>
              <td>
                <el-input placeholder="0" class="text-center pa-0"></el-input>
              </td>
            </tr>    
          </tbody>
        </table>
      </el-col>         
    </el-row>

    <el-row class="wrap-mod">
      <el-col :md="12" :lg="8" class="d-flex align-items-center px-1">
        <table style="width: 100%">
          <tbody>
            <tr>
              <td style="width: 40%" class="text-center">
                {{ $t("quantity-number") }}
              </td>
              <td>
                <el-input placeholder="0" class="text-center pa-0"></el-input>
              </td>
            </tr>    
          </tbody>
        </table>         
      </el-col>
    </el-row>
  </span>
</template>

<script>
export default {
  name: "expenses",

  data: function () {
    return {
      form: {
      },
    };
  },
};
</script>

<style scoped>
.expenses-display {
  border: 1px solid #DCDFE6;
  border-radius: 0.4rem;
  background-color: white !important;
  height: 40px;
}

.align-items-center {
  align-items: center;
}
.px-1{
  padding-left: 1rem;
  padding-right: 1rem;
}
.half {
  width: 50%;
}

.wrap-mod {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
