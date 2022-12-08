<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table ma-4">
      <el-row class="width-full">
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <div class="table-header text-center">
              {{ $t("exported-quantities") }}
            </div>
            <table style="width: 100%" class="px-15-lg">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("movement-type") }}</span>
                  </td>
                  <td class="popup-label">
                    <span>{{ $t("total-quantities") }}</span>
                  </td>                  
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("sales-invoices") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("return-of-purchase-invoices") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("branch-transfers") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("adjustment-and-inventory-decreasing") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("stock-exchange-order") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("production-order-/-manufacture") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("group/sort-command") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>

                
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("total-issued-quantities") }}</span>
                  </td>
                  <td class="popup-label">
                    <span>10</span>
                  </td>                  
                </tr>

              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <div class="table-header text-center">
              {{ $t("imported-quantities") }}
            </div>
            <table style="width: 100%; margin-bottom: 30px" class="px-15-lg">
              <tbody>
               
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("movement-type") }}</span>
                  </td>
                  <td class="popup-label">
                    <span>{{ $t("total-quantities") }}</span>
                  </td>                  
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("purchase-invoices") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("return-of-sales-invoices") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("branch-receipts") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("adjustment-and-inventory-inventory-increment") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("warehouse-supply-order") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("production-/-manufacturing-receipt-order") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    <span>{{ $t("ungroup/sort-command") }}</span>
                  </td>
                  
                  <td>
                    <span>10</span>
                  </td>
                </tr>

                
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("total-incoming-quantities") }}</span>
                  </td>
                  <td class="popup-label">
                    <span>10</span>
                  </td>                  
                </tr>

              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
    </el-container>

    <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
      <div class="text-center pt-1 mt-0 invoice-summary">
        <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">

          <NuxtLink :to="localePath('/system-cards/items-cards')">
          <el-button size="mini" class="mb-1 btn-blue">{{
            $t("save-f5")
          }}</el-button>
          </NuxtLink>

          <NuxtLink :to="localePath('/system-cards/items-cards/search-items')">
            <el-button size="mini" class="mb-1 btn-violet-faded">{{
              $t("search-f7")
            }}</el-button>
          </NuxtLink>

          <el-button size="mini" class="mb-1 btn-red">{{
            $t("delete-f8")
          }}</el-button>
          <NuxtLink :to="localePath('/system-cards/items-cards')">
          <el-button size="mini" class="mb-1 btn-violet">{{
            $t("back-f6")
          }}</el-button>
          </NuxtLink>
          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-pdf")
          }}</el-button>

          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-f4")
          }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {

      form: {
        name: "1",
        search: "",
      },
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.popup-label {
  padding: 10px;
  margin-top: 5px;
  cursor: pointer;
}

.table-header {
  background-color: #f0fbfd;
  padding: 10px;
  border: 1px solid #707070;
  margin-top: 10px;
  margin-bottom: 10px;
}

td{
  border: 1px solid #ddd;
  padding: 3px;
}

table{
      border-spacing: 0px;
}
</style>