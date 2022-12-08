<template>
  <div class=" d-flex justify-end ">
    <el-input
      class="notes-summary"
      type="textarea"
      :rows="7"
      v-model="note"
      :placeholder="$t('notes')"
      :disabled="singleRecordDetails.receiptNumber === 0 && 'disabled'"
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
      singleRecordDetails: state => state.inventory.transferBetweenBranches.singleRecordDetails,
    })
  },
    methods:{
      ...mapMutations({
        setRecordDetails: 
        "inventory/transferBetweenBranches/setRecordDetails"
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