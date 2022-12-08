<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="250">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="code"
        :label="$t('category-number')"
      >
        <template slot-scope="scope">
          <button
            style="background: none; border: none"
            class="width-full"
            @click="openEditDialog(scope.row)"
          >
            {{ scope.row.code }}
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        :label="$t('category-name')"
      />
    </el-table>
    <client-type :singleRecord="singleRecord"/>
  </el-container>
</template>

<script>
import { mapMutations } from "vuex";
import ClientType from "~/components/dialogs/client-type";
export default {
  name: "invoice",
  components: {
    ClientType,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      form: {
        name: "",
        number: "",
        date1: "",
      },
      singleRecord: {},
      dialogTableVisible: false,
    };
  },
  
  
  methods: {
    ...mapMutations({
      updateDialogState: "customerManagement/customerClassification/updateDialogState",
      setEditMode: "customerManagement/customerClassification/setEditMode",
    }),
 
    openEditDialog(row) {
      this.setEditMode(true);
      this.$store
        .dispatch("customerManagement/customerClassification/fetchSingleRecord", {
          id: row.id,
        })
        .then((response) => {
          this.singleRecord = response.data.data;
          this.updateDialogState(true);
          console.log("singlee",this.singleRecord);
        })
        .catch((error) => {
          this.$message.error(error.response.data.message);
        });
    },
  },
};
</script>
