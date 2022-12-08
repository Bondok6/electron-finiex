<template>
	<el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column v-if="isIndexed" 
				align="center" 
				prop = "id"  
				:label="$t('id')" 
				width="40"
			/>
      <el-table-column v-for="(colHeader, index) in colsHeaders" :key="index"
				align="center" 
				:prop= getProp(colHeader)
				:label="$t(colHeader)" 
			/>
			
      <!-- Total -->
      <template #append v-if="hasTotal">
        <el-table
          :data="summaryTable"
          class="width-full total summaryTable"
          stripe
          border
          :span-method="mergeCells"
          max-height="250"
        >
         
      <el-table-column v-if="isIndexed" 
				align="center" 
				prop = "id"  
				:label="$t('id')" 
				width="40"
			/>
      <el-table-column v-for="(colHeader, index) in colsHeaders" :key="index"
				align="center" 
				:prop= getProp(colHeader)
				:label="$t(colHeader)" 
			/>
      </el-table>
    </template>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice-table",
  props: {
		colsHeaders: {
			type: Array,
			required: true,
		},
		isIndexed: {
			type: Boolean,
			default: true,
		},
		hasTotal: {
			type: Boolean,
			default: true,
		},
		totalWidth: {
			type: Number,
			default: 1,
		},
		tableData: {
			type: Array,
			required: true,
		},
		summaryTable: {
			type: Array,
			default: {},
		},
	},
	methods: {
		getProp(columnId) {
			return String(String(columnId).split('-').join('_'))
		},
		mergeCells({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, this.totalWidth];
        } else if (columnIndex > 0 && columnIndex < this.totalWidth) {
          return [0, 0];
        }
      }
    },
	},
}
</script>

<style scoped>

</style>