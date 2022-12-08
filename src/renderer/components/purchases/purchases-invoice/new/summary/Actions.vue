<template>
  <el-container>
    <div class="mt-2 action-buttons-nonGrown horizontal-center">
      <el-button @click="create" size="mini" class="btn-blue">
        {{ $t("save-f5") }}
      </el-button>
      <NuxtLink :to="localePath('/purchases/purchases-invoice')">
        <el-button size="mini" class="btn-violet">
          {{ $t("back-f6") }}
        </el-button>
      </NuxtLink>
      <el-button size="mini" class="btn-grey">{{ $t("print-f4") }}</el-button>
    </div>
    <el-dialog title=" " :visible.sync="modifyPrice" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form class="invoice-form width-full" label-position="top">
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 style="text-align: center">
                  {{
                    $t("are-you-sure-you-want-to-update-cost-prices-for-items")
                  }}
                </h1>
              </el-col>
            </el-row>
            <div class="d-flex justify-center width-full">
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="(modifyPrice = false), (sure = true)"
                  >{{ $t("yes") }}</el-button
                >
              </span>
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="modifyPrice = false"
                  >{{ $t("no") }}</el-button
                >
              </span>
            </div>
          </el-form>
        </el-container>
      </span>
    </el-dialog>
    <el-dialog title=" " :visible.sync="sure" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form class="invoice-form width-full" label-position="top">
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 style="text-align: center">
                  {{
                    $t(
                      "are-you-sure-you-want-to-update-cost-prices-for-items-in-sales-invoices"
                    )
                  }}
                </h1>
              </el-col>
            </el-row>
            <div class="d-flex justify-center width-full">
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="sure = false"
                  >{{ $t("yes") }}</el-button
                >
              </span>
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="sure = false"
                  >{{ $t("no") }}</el-button
                >
              </span>
            </div>
          </el-form>
        </el-container>
      </span>
    </el-dialog>
  </el-container>
</template>
<script>
export default {
  name: "summary-action",
  data: function() {
    return {
      modifyPrice: false,
      sure: false
    };
  },
  methods: {
      create() {

        this.$store.dispatch("purchases/purchasesInvoice/create").then(() => {
          this.$notify({
            title: "Success",
            message: "purchases Invoice Created",
            type: "success"
          });
         this.$router.push("/purchases/purchases-invoice");
        }).catch((_)=>{
          // error message
          this.$message("خطا في المدخلات")
        })
    }
  }
};
</script>

