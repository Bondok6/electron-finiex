<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        width="40"
        type="index"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="item_number"
        :label="$t('item-number')"
      >
        <template slot-scope="scope">
          <NuxtLink
            :to="
              localePath('/system-cards/items-cards/edit/' + scope.row.itemId)
            ">
            <span>{{ scope.row.itemId }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="itemName"
        :label="$t('item-name')"
      />
      <el-table-column align="center" prop="group" :label="$t('category')" />
      <el-table-column align="center" prop="unit" :label="$t('basic-unit')" />
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",
  props: {
    data: {
      type: Array,
      default: []
    }
  }
};
</script>
