<template>
  <div>
    <el-row class="p-2" :gutter="10">
      <el-col :xs="24" :md="10">
        <el-row :gutter="10" class="width-full">
          <el-col :md="12" :xs="24" class="mt-1">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
              @click="GotoPage()"
            >
              <span>
                {{ $t("selling-prices-for-customer-items") }}
              </span>
            </el-button>
          </el-col>
          <el-col :md="12" :xs="24" class="mt-1">
            <el-button
              style="background: transparent"
              class="border-green color-green width-full"
            >
              <span>
                {{ $t("client-sales-movements") }}
              </span>
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {


  methods: {
    GotoPage() {
      window.$nuxt.$router.push(this.localePath("/sales/prices-of-sale-items"));
    },
  },
};
</script>
