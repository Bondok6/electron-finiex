<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="data"
      style="width: 100%"
      stripe
      border
      max-height="750"
    >
      <el-table-column align="center" type="index" width="40" :label="$t('id')" />
      <el-table-column
        align="center"
        prop="serial_number"
        :label="$t('serial-number')"
      >
        <template slot-scope="scope">
          <NuxtLink
            :to="localePath('/customer-management/qitaf-customers-data/edit/' + scope.row.id)"
          >
            <button style="background: transparent; border: none">
              <span>{{ scope.row.serial }}</span>
            </button>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        :label="$t('client-name')"
      />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",
  props:{
    data : {
      type: Array,
      default: () => []
    }
},

};
</script>
