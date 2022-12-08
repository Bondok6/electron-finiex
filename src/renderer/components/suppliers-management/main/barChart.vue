<template>
 <div class="box-shadow p-2">
	  <div class="container">
  <span>{{$t('sales-movement')}}</span>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</div>
		</div>
</template>
<script>
      
export default {
  name: "invoice",
  data: function () {
    return {
		
	};
  },
  mounted (){
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["30 / 06 / 2021", "30 / 04 / 2021", "30 / 03 / 2021"],
    datasets: [{
      label: 'ربــح',
      data: [17, 19, 17, 28, 24, 7],
      backgroundColor: "#7AAEF7"
    }, {
      label: 'خســــارة',
      data: [12, 25, 12, 20, 3, 10],
      backgroundColor: "#39D2D0"
    }]
  },
  options: {
    scales: {
      myScale: {
        position: 'right', // `axis` is determined by the position as `'y'`
      }
    }
  }
});

  },
};
</script>
