<template>
  <div class="col-2">
    <el-row class="d-flex pt-2 pb-2 data-table width-full">
      <div class="width-full">
        <table class="width-full">
          <tr>
            <th class="side-cell item-col" >{{$t('item-name')}}</th>
            <th class="unit-col">{{$t('unit')}}</th>
            <th>{{$t('quantity')}}</th>
            <th class="side-cell">{{$t('total')}}</th>
          </tr>
          <tbody>
            <tr v-for="(data_row, index) in tableData" :key="index">
              <td class="side-cell item-col">{{data_row.item_name}}</td>
              <td class="unit-col">{{data_row.unit}}</td>
              <td>
                <span class="info-label">{{data_row.quantity}}</span>
              </td>
              <td class="side-cell">
                <span class="info-label">{{data_row.total}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-row>
      
    <el-row class="info-table">
      <div class="width-full">
        <table class="width-full">
          <tr>
            <td class="black-text side-label">{{$t('sum')}}</td>
            <td class="black-text">:</td>
            <td>
              <div class="info">1152,1212</div>
            </td>
          </tr>

          <tr>
            <td class="black-text side-label">{{$t('discount')}}</td>
            <td class="black-text">:</td>
            <td>
              <div class="info">1152,1212</div>
            </td>
          </tr>

          <tr>
            <td class="black-text side-label">{{$t('total-tax-100%')}}</td>
            <td class="black-text">:</td>
            <td>
              <div class="info">1152,1212</div>
            </td>
          </tr>

          <tr>
            <td class="black-text side-label">{{$t('total-tax')}}</td>
            <td class="black-text">:</td>
            <td>
              <div class="info">1152,1212</div>
            </td>
          </tr>

          <tr>
            <td class="black-text side-label">{{$t('total')}}</td>
            <td class="black-text">:</td>
            <td>
              <div class="info">1152,1212</div>
            </td>
          </tr>

          <tr>
            <td class="black-text">{{$t('recieved-amount')}}</td>
            <td class="black-text">:</td>
            <td>
              <div class="info">1152,1212</div>
            </td>
          </tr>

          <tr>
            <td class="navy-text">{{$t('remaining-amount')}}</td>
            <td class="navy-text">:</td>
            <td>
              <div class="info navy-text">1152,1212</div>
            </td>
          </tr>
        </table>
      </div>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "Col-2",

  data: function () {
    return {
      tableData: [
        {
          item_name: 'اسم وهمي',
          unit: 'حبة',
          quantity: '12.000',
          total: '15,1234'
        },
        {
          item_name: 'اسم وهمي',
          unit: 'حبة',
          quantity: '12.000',
          total: '15,1234'
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  padding-top: 2rem;
  height: 40%;
  border-bottom: 1px solid rgba(112, 112, 112, 0.45);
  border-bottom-style: dotted;

  table {
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid rgba(112, 112, 112, 0.45);
    height: 2.5rem;
    line-height: 2rem;
  }

  th {
    color: rgba(112, 112, 112, 0.7);
    border-top: none;
  }
  
  td {
    border-bottom-style: dotted;
    border-top-style: dotted;
    text-align: center;
    color: black;
  }

  .side-cell {
    border-left: none;
    border-right: none;
  }

  .item-col {
    width: 40%;
  }
  .unit-col {
    width: 15%;
  }

  .info-label {
    padding-top: 0.4rem;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 4px;
    box-shadow:0 0 7px rgba(112, 112, 112, 0.45);
  }
}

.info-table {
  padding-top: 0.5rem;
  background-color: #FFFFD1;
  height: 60%;

  td {
    height: 2.1rem;
    line-height: 2.1rem;
    font-size: large;
    text-align: center;
  }

  .black-text {
    color: black;
  }
  .navy-text {
    color: #21798d;
  }

  .info-container {
    display: flex;
    justify-content: center;
  }

  .info {
    margin: 0.2rem 0.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow:0 0 7px rgba(112, 112, 112, 0.45);
  }

  .side-label {
    width: 45%;
  }
}

.col-2 {
  min-height: 33.5rem;
}
</style>