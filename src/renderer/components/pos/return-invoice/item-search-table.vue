<template>
  <div class="width-full data-table">
    <table class="width-full">
      <tr>
        <th class="side-cell item-col" >{{$t('item-name')}}</th>
        <th class="unit-col">{{$t('unit')}}</th>
        <th class="side-cell">{{$t('quantity')}}</th>
      </tr>
      <tbody>
        <tr v-for="(data_row, index) in dataTable" :key="index">
          <td class="side-cell item-col">
            <div class="item-name-card">
              <span>{{data_row.item_name}}</span>
            </div>
          </td>
          <td class="unit-col">{{data_row.unit}}</td>
          <td class="side-cell">
            <div class="d-flex align-items-center justify-center">
            <el-button
              @click="plusOne()"
              size="mini"
              class="plus-minus-icon"
              icon="el-icon-plus"
            ></el-button>
            <el-input
              size="mini"
              class="quantity-input pa-0 text-center"
              v-model="data_row.quantity"
            ></el-input>
            <el-button
              @click="minusOne()"
              size="mini"
              class="plus-minus-icon"
              icon="el-icon-minus"
            ></el-button>

            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              :title="$t('confirm')"
            >
              <i
                slot="reference"
                class="
                  setting-button
                  danger-color
                  el-icon-delete-solid
                "
              ></i>
            </el-popconfirm>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTable: [
        {
          item_name: "اسم وهمي",
          unit: 'حبة',
          quantity: 12.0,
        },
        {
          item_name: "اسم وهمي",
          unit: 'حبة',
          quantity: 12.0,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.data-table {
  border-bottom: none;

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
    width: 50%;
  }
  .unit-col {
    width: 15%;
  }



  .item-name-card {
    height: 1.5rem;
    width: 70%;
    background-color: #0095A6;
    color: white;
    padding: 0 1rem;
    margin: 0 0.5rem;
    border-radius: 4px;
    box-shadow:0 0 7px rgba(112, 112, 112, 0.45);

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.plus-minus-icon {
  background-color: #f5dfd4;
  color: #000;
  margin: 0 0.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>