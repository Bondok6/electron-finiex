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