<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column align="center" :label="$t('asset-number')">
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath(
                '/accounting/card-fixed-assets/edit/' + scope.row.assetID
              )
            "
          >
            <span>{{ scope.row.assetCode }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" :label="$t('user-name')" />

      <el-table-column
        align="center"
        prop="date"
        :label="$t('purchase-date')"
      />
      
      <el-table-column align="center" :label="$t('original-group')">
        <template slot-scope="scope">
          {{ scope.row.assetGroup == " " ? $t("without") : scope.row.assetGroup}}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="purchasePrice"
        :label="$t('book-value')"
      />

      <el-table-column align="center" :label="$t('registeration-status')">
        <template slot-scope="scope">
          {{ scope.row.isDone ? $t("posted") : $t("not-posted") }}
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>
