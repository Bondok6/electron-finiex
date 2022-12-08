<template>
  <div class="container ma-4 mt-0">
    <el-row :gutter="25" class="px-2">
      <el-col :lg="14" :md="19" :sm="24" :xs="25">
      <BarChart />
      </el-col>
      <el-col :lg="10" :md="15" :sm="17" :xs="25">
	  <div class="box-shadow p-12">
	  <main class="main-chart">
 <span>{{$t('sales-movement')}}</span>
 <el-row :gutter="25" style="direction:rtl">
  <section>
  <el-col :lg="11" :md="12" :sm="12" :xs="19">
    <div class="pieID pie">
    </div>
    </el-col>
    <el-col :lg="6" :md="7" :sm="7" :xs="8">
    <div class="d-flex pieID-1 legend" style="flex-direction: column;">
    <span class="mt-2"> {{$t('first-item')}} <span class="li-1" ></span> </span>
    <span class="mt-2"> {{$t('second-item')}} <span class="li-2"></span> </span>
    <span class="mt-2"> {{$t('third-item')}} <span class="li-3"></span> </span>
    <span class="mt-2"> {{$t('fourth-item')}} <span class="li-4"></span> </span>
  </div>
  </el-col>
    <ul class="pieID legend">
   
      <li>
     <span class="d-none">1345</span>
      </li>
      
      <li >
        <span class="d-none">731</span>
      </li>
      
      <li >
      <span class="d-none">768</span>
      </li>
       
      <li >
        <span class="d-none" >444</span>
      </li>
     
    </ul>
  </section>
  </el-row>
  <section>
   
  </section>
</main>

	  </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped="scss">
.p-12{
padding:1.2pc
}
</style>

<script>
  import BarChart from '~/components/suppliers-management/main/barChart';

export default {
   components: {
    BarChart
  },
  name: "invoice",
  data: function () {
    return {
		
	};
  },
  mounted (){
function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("."+sliceID).css({
    "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
  });
  $("."+sliceID+" span").css({
    "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s"+dataCount+"-"+sliceCount;
  var maxSize = 179;
  if(sliceSize<=maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for(var i=0; i<listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "#6CA7B5", 
    "#81B7E5", 
    "#F9EE58", 
    "#E598A8", 
  ];
  for(var i=0; i<listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");

  },
};
</script>
