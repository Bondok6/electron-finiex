<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        prop="item_number"
        width="40"
        :label="$t('id')"
        type="index"
      />
      <el-table-column align="center" :label="$t('registeration-number')">
        <template slot-scope="scope">
          <nuxt-link :to="'/accounting/journal-entry/edit/' + scope.row.moveId">
            <span>
              {{ scope.row.moveCode }}
            </span>
          </nuxt-link>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="date"
        :label="$t('registeration-date')"
      />

      <el-table-column
        align="center"
        prop="moveType"
        :label="$t('registeration-type')"
      />
      <el-table-column
        align="center"
        prop="isDone"
        :label="$t('registeration-status')"
      >
        <template slot-scope="scope">
          {{ scope.row.isDone ? $t("posted") : $t("not-posted") }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="total" :label="$t('total')" />
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",
  props: {
    data: {
      default: [
        {
          accName: "",
          date: "",
          moveId: "",
          moveType: "",
          total: "",
          userID: "",
          isDone: false
        }
      ],
      required: true
    }
  },

  created() {
     
  }
};
</script>
