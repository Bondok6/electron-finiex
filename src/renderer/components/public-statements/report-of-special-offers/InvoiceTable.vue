<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table 
      :data="tableData" 
      style="width: 100%" 
      stripe 
      border  
      max-height="250"
    >
      <el-table-column 
        align="center" 
        prop="id"  
        :label="$t('id')" 
        width="40"
      />
      <el-table-column 
        align="center" 
        prop="offer-number" 
        :label="$t('offer-number')" 
      />
      <el-table-column 
        align="center" 
        prop="offer_date"  
        :label="$t('offer-date')" 
      />
      <el-table-column 
        align="center" 
        prop="offer_end"  
        :label="$t('offer-end')" 
      />
      <el-table-column 
        align="center" 
        prop="offer_type"  
        :label="$t('offer-type')" 
      />
      <el-table-column 
        align="center" 
        prop="notes"  
        :label="$t('notes')" 
        :min-width="300"
      />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",
  data: function () {
    return {
      tableData: [
        {
          id: '1',
          offer_number: ' ',
          offer_date: ' ',
          offer_end: ' ',
          offer_type: ' ',
          notes: ' ',
        },
        {
          id: '2',
          offer_number: ' ',
          offer_date: ' ',
          offer_end: ' ',
          offer_type: ' ',
          notes: ' ',
        },
        {
          id: '3',
          offer_number: ' ',
          offer_date: ' ',
          offer_end: ' ',
          offer_type: ' ',
          notes: ' ',
        },
        {
          id: '4',
          offer_number: ' ',
          offer_date: ' ',
          offer_end: ' ',
          offer_type: ' ',
          notes: ' ',
        },
      ],
    };
  },
};
</script>