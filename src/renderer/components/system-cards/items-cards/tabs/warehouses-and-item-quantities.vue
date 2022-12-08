<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table editable-table">
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
          >
          <template slot-scope="scope">
            <el-input
              ref="id"
              size="small"
              style="text-align: center"
              v-model="scope.row.id"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="warehouses" :label="$t('warehouses')" >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.warehouses"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="opening_quantity"
          :label="$t('opening-quantity')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.opening_quantity"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="actual_quantity"
          :label="$t('actual-quantity')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.actual_quantity"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="notes"
          :label="$t('notes')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.notes"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="expire_date"
          :label="$t('expire-date')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='date'
              style="text-align: center"
              v-model="scope.row.expire_date"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" width="60">
          <template>
            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              :title="$t('confirm')"
            >
              <i
                slot="reference"
                class="setting-button danger-color el-icon-delete-solid"
              ></i>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
    <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
      <div class="text-center pt-1 mt-0 invoice-summary">
        <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">
          <NuxtLink :to="localePath('/system-cards/items-cards')">
          <el-button size="mini" class="mb-1 btn-blue">{{
            $t("save-f5")
          }}</el-button>
          </NuxtLink>

          <NuxtLink :to="localePath('/system-cards/items-cards/search-items')">
            <el-button size="mini" class="mb-1 btn-violet-faded">{{
              $t("search-f7")
            }}</el-button>
          </NuxtLink>

          <el-button size="mini" class="mb-1 btn-red">{{
            $t("delete-f8")
          }}</el-button>

          <NuxtLink :to="localePath('/system-cards/items-cards')">
          <el-button size="mini" class="mb-1 btn-violet">{{
            $t("back-f6")
          }}</el-button>
          </NuxtLink>

          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-pdf")
          }}</el-button>

          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-f4")
          }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      does_not_include_tax: 1,
      tableData: [
        {
          id: 1,
          warehouses: "حبة",
          opening_quantity: "4545",
          actual_quantity: "3553",
          notes: "بدون",
          expire_date: "01 / 04 / 2021",
        },
        {
          id: 2,
          warehouses: "حبة",
          opening_quantity: "4545",
          actual_quantity: "3553",
          notes: "بدون",
          expire_date: "01 / 04 / 2021",
        },
        {
          id: 3,
          warehouses: "حبة",
          opening_quantity: "4545",
          actual_quantity: "3553",
          notes: "بدون",
          expire_date: "01 / 04 / 2021",
        },
        {
          id: 4,
          warehouses: "حبة",
          opening_quantity: "4545",
          actual_quantity: "3553",
          notes: "بدون",
          expire_date: "01 / 04 / 2021",
        },
        {
          id: 5,
          warehouses: "حبة",
          opening_quantity: "4545",
          actual_quantity: "3553",
          notes: "بدون",
          expire_date: "01 / 04 / 2021",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.width-75-lg {
  @media only screen and (min-width: 1280px) {
    width: 75%;
  }

  .mb-1 {
    @media only screen and (min-width: 768px) {
      margin-bottom: 0 !important;
    }
  }

  .input-style {
    @media only screen and (min-width: 768px) {
      margin: 0 1px !important;
    }
  }
}
</style>