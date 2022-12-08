<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        prop="item_number"
        width="40"
        :label="$t('id')"
      />
      <el-table-column align="center" prop="mname" :label="$t('group-number')">
        <template slot-scope="scope">
          <button
            @click="showEditDialog(scope.row)"
            style="background: transparent; border: none; "
          >
            <span>{{ scope.row.mdcode }}</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="mname" :label="$t('group-name')" />
    </el-table>
    <el-dialog :visible.sync="dialogTableUpdate">
      <div class="mb-8">
        <edit :singleRecordDetails="singleRecordDetails" />
        <invoice-summary @closeDialog="closeDialog" />
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import Edit from "~/components/accounting/assets-group/edit/Invoice";
import InvoiceSummary from "~/components/accounting/assets-group/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: {
    Edit,
    InvoiceSummary
  },
  name: "invoice",
  data() {
    return {
      dialogTableUpdate: false,
      singleRecordDetails: []
    };
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/assetsGroup/setRecordDetails"
    }),
    showEditDialog({ mnotes, id, mname, mdcode }) {
      this.dialogTableUpdate = true;
      this.singleRecordDetails = {
        mnotes,
        id,
        mname,
        mdcode
      };
       
    },
    closeDialog() {
      this.dialogTableUpdate = false;
      this.setRecordDetails({});
    }
  }
};
</script>
