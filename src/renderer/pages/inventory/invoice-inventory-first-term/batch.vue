<template>
  <div class="mb-8">
    <table-one />
    <actions />
    <table-two />
    <actionstwo />

    <pagination />

  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import TableOne from '~/components/inventory/invoice-inventory-first-term/batch/TableOne';
import Actions from '~/components/inventory/invoice-inventory-first-term/batch/Actions';
import Actionstwo from '~/components/inventory/invoice-inventory-first-term/batch/ActionsTwo';
import TableTwo from '~/components/inventory/invoice-inventory-first-term/batch/TableTwo';

export default {
  name: 'Home',
  components: {
    TableOne, TableTwo, Actions, Actionstwo, Pagination
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
