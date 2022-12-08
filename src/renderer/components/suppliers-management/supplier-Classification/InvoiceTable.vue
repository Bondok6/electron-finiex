<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" border stripe max-height="750">
      <el-table-column align="center"  type="index" :label="$t('id')" width="39" />
      <el-table-column
        align="center"
        :label="$t('category-number')"
      >
        <template slot-scope="scope">
          <button
            @click="openEditDialog(scope.row)"

            style="background: transparent; border: none"
          >
          <span>            {{ scope.row.code }}
</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        :label="$t('classification-name')"
      >
      </el-table-column>
    </el-table>



  <supplierType :singleRecord="singleRecord"/>
  </el-container>
</template>


<script>
import supplierType from "~/components/dialogs/supplier-type";
import { mapMutations } from "vuex";
export default {
    components:{
      supplierType
    },
    props: {
      data: {
        type: Array,
      default: () => [],
      },
    },
data(){
      return{
        form: {
          name: "mark",
          number: "10",
          date1: "1",
        },
        singleRecord: {},
        dialogTableVisible: false,
      }
},
  methods: {
    ...mapMutations({
      updateDialogState: "suppliersManagement/supplierClassification/updateDialogState",
      setEditMode: "suppliersManagement/supplierClassification/setEditMode",
    }),

    openEditDialog(row) {
      this.setEditMode(true);
      this.$store
        .dispatch("suppliersManagement/supplierClassification/fetchSingleRecord", {
          id: row.id,
        })
        .then((response) => {
          this.singleRecord = response.data.data;
          this.updateDialogState(true);
        })
        .catch((error) => {
          this.$message.error(error.response.data.message);
        });
    },
  },
};
</script>

