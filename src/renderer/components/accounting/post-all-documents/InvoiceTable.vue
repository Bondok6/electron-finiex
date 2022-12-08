<template>
  <div>
    <el-container class="container ma-4 mt-0 mb-0 invoice-table checked-table">
      <el-table
        ref="multipleTable"
        :data="customData"
        style="width: 100%"
        max-height="750"
        stripe
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          align="center"
          property="doucmentNumber"
          :label="$t('document-number')"
        >
        </el-table-column>
        <el-table-column
          align="center"
          property="doucmentDate"
          :label="$t('document-date')"
        >
          <template slot-scope="scope">
            {{ new Date(scope.row.doucmentDate).toLocaleDateString() }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          property="documentType"
          :label="$t('document-status')"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            {{ scope.row.isDone ? $t("posted") : $t("not-posted") }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          property="documentType"
          :label="$t('document-type')"
        />
        <el-table-column align="center" property="total" :label="$t('total')" />
        <el-table-column type="selection" width="55" align="center">
          <template slot-scope="scope" v-if="!scope.row.isDone">
            <el-checkbox
              v-model="scope.row.checked"
              @change="handleChange(scope.row)"
            ></el-checkbox>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "invoice",
  props: {
    data: {
      default: [],
      required: true
    }
  },
  data() {
    return {
      multipleSelection: [],
      test: false,
      customData: []
    };
  },
  computed: {},
  methods: {
    ...mapMutations({
      deleteRowsSelection: "Accounting/postAllDocus/deleteRowsSelection",
      addRowsSelection: "Accounting/postAllDocus/addRowsSelection"
    }),

    handleSelectionChange() {
      this.customData.forEach(item => {
        if (!item.isDone) {
          if (item.checked) {
            item.checked = false;
            this.deleteRowsSelection(item);
          } else {
            item.checked = true;
            this.addRowsSelection(item);
          }
        } else {
          item.checked = false;
        }
      });
    },
    handleChange(row) {
      if (row.checked) {
        this.addRowsSelection(row);
      } else {
        this.deleteRowsSelection(row);
      }
    }
  },
  watch: {
    data: {
      handler(val) {
        let deepClone = JSON.parse(JSON.stringify(val));
        this.customData = deepClone.map(item => {
          return item.isDone
            ? { ...item }
            : {
                ...item,
                checked: false,
                uniqe: (Math.random() * 20).toString(36)
              };
        });
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
