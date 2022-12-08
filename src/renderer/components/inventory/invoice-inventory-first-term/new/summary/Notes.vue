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
  computed: {
    state() {
      return this.$store.state.inventory.invoiceInventoryFirstTerm;
    },
    recordDetails() {
      return this.state.recordDetails;
    }
  },
  data() {
    return {
      note: ""
    };
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "inventory/invoiceInventoryFirstTerm/setRecordDetails"
    })
  },
  watch: {
    note(note) {
      this.setRecordDetails({
        ...this.recordDetails,
        note
      });
    }
  }
};
</script>
