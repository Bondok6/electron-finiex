<template>
  <div>
    <el-input
      style="display:flex;padding:1pc;"
      class="notes-summary"
      type="textarea"
      :rows="7"
      :placeholder="$t('Please-write-here')"
      @blur="changed"
      v-model="notes"
    >
    </el-input>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      notes: ""
    };
  },
  computed:{
      ...mapState({
        singleRecordDetails : state => state.suppliersManagement.supplierData.singleRecordDetails,

      })
    },
  methods: {
    ...mapMutations({
      setRecordDetails : "suppliersManagement/supplierData/setRecordDetails"
    }),
    changed() {
      this.setRecordDetails({
        notes: this.notes
      });
    }
  },
  watch:{
    singleRecordDetails:{
      handler({notes}){
        this.notes = notes
      },
      deep :true
    },
  }
};
</script>