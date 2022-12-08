<template>
  <table class="width-full search-item-footer">
    <tr>
      <th class="sum">{{$t('sum')}}</th>
      <th class="discount">{{$t('discount')}}</th>
      <th class="percentage">%</th>
      <th class="total-tax">{{$t('total-product-tax-100%')}}</th>
      <th class="tax">{{$t('tax')}}</th>
      <th class="net">{{$t('net')}}</th>
    </tr>

    <tbody>
      <tr>
        <td class="sum"> <el-input /> </td>
        <td class="discount inner-cell"> <el-input /> </td>
        <td class="percentage"> <el-input /> </td>
        <td class="total-tax inner-cell"> <el-input /> </td>
        <td class="tax"> <el-input /> </td>
        <td class="net side-cell-ar side-cell-en"> <el-input /> </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.search-item-footer {
  border-collapse: collapse;

  th {
    background-color: #6D98D1;
    color: white;
    height: 2rem;
  }

  td {
    padding-top: 0.5rem;
  }

  .inner-cell {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }

  .percentage {
    width: 10%;
  }
  .total-tax {
    width: 40%;
  }
}

[dir="rtl"] {
  .side-cell-ar {
    padding-right: 0.4rem;
    padding-left: 0;
  }
}
.side-cell-en {
  padding-right: 0;
  padding-left: 0.4rem;
}
</style>