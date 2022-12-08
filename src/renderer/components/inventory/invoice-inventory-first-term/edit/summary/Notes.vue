<template>
  <div>
    <el-input
      class="notes-summary"
      type="textarea"
      :rows="4"
      :placeholder="$t('notes')"
      v-model="note"
    >
    </el-input>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      note: ""
    };
  },
  computed: {
    recordDetails() {
      return this.$store.state.inventory.invoiceInventoryFirstTerm
        .recordDetails;
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "inventory/invoiceInventoryFirstTerm/setRecordDetails"
    })
  },
  watch: {
    recordDetails: {
      handler(newVal) {
        this.note = newVal.note;
      },
      deep: true
    },
    note(newVal) {
      this.setRecordDetails({
        ...this.recordDetails,
        note: newVal
      });
    }
  }
};
</script>
