<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table min-height-250">
    <el-table
      :data="tableDate"
      style="width: 100%"
      stripe
      border
      max-height="750"
    >
      <el-table-column
        align="center"
        prop="itemID"
        type="index"
        :label="$t('id')"
        width="40"
      />
      <el-table-column
        align="center"
        prop="itemName"
        :label="$t('item-name')"
        width="300"
      >
        <template slot-scope="scope">
          <span style="float: right"> {{ scope.row.itemName }} </span>
          <span style="float: left; color: #8492a6; font-size: 13px">
            {{ scope.row.itemID }}
          </span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="groups" :label="$t('group')" />

      <el-table-column
        align="center"
        prop="wareHouse"
        :label="$t('warehouse')"
      />

      <el-table-column align="center" prop="units" :label="$t('unit')" />

      <el-table-column
        align="center"
        prop="quantityAv"
        :label="$t('actual-quantity')"
      />

      <el-table-column
        align="center"
        prop="location"
        :label="$t('item-place')"
      />

      <el-table-column
        align="center"
        prop="batch"
        :label="$t('batch-number')"
      />


      <el-table-column align="center" :label="$t('expire-date')" width="200">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.expireDate"
            type="date"
            placeholder="لا يوجد تاريخ"
            style="width: 100%"
            @change="changeExpireDate(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice-table",
  props: ["data"],
  data() {
    return {
      tableDate: [...this.data]
    };
  },
  methods: {
    async changeExpireDate(row) {
      let date = new Date(row.expireDate);
      date.setDate(date.getDate() + 1);

      const updateExpireDate = [
        {
          itemId: row.itemID,
          wareHouseId: row.wareHouseID,
          newDate: date,
          batch: row.batch
        }
      ];
      try {
        await this.$axios.put(`inventory/update-expire-dates`, {
          updateExpireDate
        });
      } catch (error) {
        this.$message.error(error);
      }
    }
  }
};
</script>
