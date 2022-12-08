<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="450"
      >
        <template>
          <div class="d-flex width-full">
            <span>
              <el-input
                style="text-align: center"
                v-model="tableform.item_number"
                :placeholder="$t('item-number')"
                @keydown.ctrl.native="toSearchDialog(true)"
              >
              </el-input>
            </span>
            <span>
              <el-input
                style="text-align: center; padding-right: 30px"
                v-model="tableform.item_name"
                :placeholder="$t('item-name')"
                @keydown.ctrl.native="toSearchPage()"
              >
              </el-input>
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.unit"
              :placeholder="$t('unit')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="standard_quantity"
        :label="$t('standard-quantity')"
      >
        <template>
          <span>
            <el-input
              style="text-align: center"
              v-model="tableform.standerd_quality"
              :placeholder="$t('standard-quantity')"
            >
            </el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <search-items />
  </el-container>
</template>


<script>
import SearchItems from "~/components/dialogs/search-items";
export default {
  name: "invoice",
  components: {
    SearchItems,
  },
  data: function () {
    return {
      tableform: {
        item_name: "220",
        item_name: "R250*220",
        unit: "حبة",
        standerd_quality: "8",
      },
      tableData: [
        {
          id: 1,
          item_number: "2",
          item_name: "Rs25a",
          unit: "كوع زاوية 225*250 كلاس 5",
          standard_quantity: "حبة",
        },
        {
          id: 2,
          item_number: "2",
          item_name: "Rs25a",
          unit: "كوع زاوية 225*250 كلاس 5",
          standard_quantity: "حبة",
        },
        {
          id: 3,
          item_number: "2",
          item_name: "Rs25a",
          unit: "كوع زاوية 225*250 كلاس 5",
          standard_quantity: "حبة",
        },
        {
          id: 4,
          item_number: "2",
          item_name: "Rs25a",
          unit: "كوع زاوية 225*250 كلاس 5",
          standard_quantity: "حبة",
        },
      ],
    };
  },

  methods: {
    toSearchPage() {
      window.$nuxt.$router.push(
        this.localePath("/inventory/invoice-inventory-first-term/search-items")
      );
    },
    toSearchDialog(state) {
      this.$store.commit("searchItems/updateDialogState", state);
    },
  },
};
</script>