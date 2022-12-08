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
        prop="type_number"
        :label="$t('type-number')"
      >
        <el-input
          v-model="tableform.type_number"
          :placeholder="$t('type-number')"
        >
        </el-input>
      </el-table-column>
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-number')"
      >
        <el-select
          v-model="tableform.account_number"
          :placeholder="$t('account-number')"
        >
          <el-option :value="0">
            <button
              class="danger-color"
              style="border: none; background: none"
              @click="toSearchPage()"
            >
              {{ $t("add") }} <i class="el-icon-plus"></i>
            </button>
          </el-option>

          <el-option :label="$t('all')" :value="1"></el-option>
          <el-option :label="$t('all')" :value="2"></el-option>
        </el-select>
      </el-table-column>
      <el-table-column align="center" prop="type_name" :label="$t('type-name')">
        <el-input v-model="tableform.type_name" :placeholder="$t('type-name')">
        </el-input>
      </el-table-column>
      <el-table-column
        align="center"
        prop="Percentage_of_costs"
        :label="$t('Percentage-of-costs')"
      >
        <el-input
          v-model="tableform.Percentage_of_costs"
          :placeholder="$t('Percentage-of-costs')"
        >
        </el-input>
      </el-table-column>
      <el-table-column
        align="center"
        prop="The_value_of_the_costs"
        :label="$t('The-value-of-the-costs')"
      >
        <el-input
          v-model="tableform.The_value_of_the_costs"
          :placeholder="$t('The-value-of-the-costs')"
        >
        </el-input>
      </el-table-column>
      <el-table-column
        align="center"
        prop="type_status"
        :label="$t('type-status')"
      >
        <el-select v-model="tableform.type_status">
          <el-option :label="$t('direct-costs')" :value="1"></el-option>
          <el-option :label="$t('indirect-costs')" :value="2"></el-option>
        </el-select>
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
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableform: {
        type_name: "Rs25a",
        type_number: "5",
        account_number: "حبة",
        Percentage_of_costs: "50",
        The_value_of_the_costs: "40",
        type_status: 2,
      },
      tableData: [
        {
          id: 1,
          type_name: "Rs25a",
          type_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
          type_status: 2,
        },
        {
          id: 2,
          item_name: "Rs25a",
          item_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
          type_status: 1,
        },
        {
          id: 3,
          item_name: "Rs25a",
          item_number: "كوع زاوية 225*250 كلاس 5",
          account_number: "حبة",
          type_status: 1,
        },
      ],
    };
  },

  methods: {
    toSearchPage() {
      window.$nuxt.$router.push(
        this.localePath("/accounting/accounts-card/new")
      );
    },
  },
};
</script>


