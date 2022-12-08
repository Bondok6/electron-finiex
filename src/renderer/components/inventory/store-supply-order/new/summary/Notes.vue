<template>
  <div>
    <el-input
      class="notes-summary"
      v-model="note"
      type="textarea"
      :rows="7"
      :placeholder="$t('notes')"
    >
    </el-input>
  </div>
</template> 

<script>
  import { mapMutations } from 'vuex';
  export default {
    data() {
      return {
        note: "",
      }
    },
    methods:{
      ...mapMutations({
        setRecordDetails: 
        "inventory/storeSupplyOrder/setRecordDetails"
      }),
    },
    watch: {
      note(newVal) {
        this.setRecordDetails({
          note: newVal,
        })
      }
    }
  }
</script>