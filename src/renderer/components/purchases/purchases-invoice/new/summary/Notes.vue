<template>
  <div>
    <el-input
      class="notes-input height-full"
      type="textarea"
      :rows="9"
      :placeholder="$t('notes')"
      v-model="text"
    >
    </el-input>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    ...mapMutations({
      setNotes: "purchases/purchasesInvoice/setNotes"
    }),
  },
  watch: {
    text(newVal) {
      this.setNotes(newVal);
    }
  }
}
</script>
