<template>
  <div>
    <el-input
      class="notes-summary"
      type="textarea"
      v-model="note"
      :rows="7"
      :placeholder="$t('notes')"
    >
    </el-input>
  </div>
</template> 

<script>
  import { mapMutations, mapState } from 'vuex';
  export default {
    data() {
      return {
        note: "",
      }
    },
    computed: {
    ...mapState({
      singleRecordDetails: state => state.inventory.storeSupplyOrder.singleRecordDetails,
    })
  },
    methods:{
      ...mapMutations({
        setRecordDetails: 
        "inventory/storeSupplyOrder/setRecordDetails"
      }),
    },
    watch: {
      singleRecordDetails: {
      handler(newVal) {
        this.note = newVal.note;
      },
      deep: true,
    },
      note(newVal) {
        this.setRecordDetails({
          note: newVal,
        })
      }
    }
  }
</script>