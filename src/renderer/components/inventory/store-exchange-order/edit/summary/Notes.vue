<template>
  <div class=" d-flex justify-end ">
    <el-input
      class="notes-summary"
      type="textarea"
      :rows="7"
      v-model="note"
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
      singleRecordDetails: state => state.inventory.storeExchangeOrder.singleRecordDetails,
    })
  },
    methods:{
      ...mapMutations({
        setRecordDetails: 
        "inventory/storeExchangeOrder/setRecordDetails"
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