<template>
  <div class="mb-8 container px-2 py-3 box-shadow">
    <Header />
    <PieChart/>
    <Table />

  </div>
</template>

<script>
import Header from '~/components/suppliers-management/main/Header';
import PieChart from '~/components/suppliers-management/main/pieChart';
import Table from '~/components/suppliers-management/main/table';

export default {
  name: "home",
  components: {
    Header, PieChart, Table
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
