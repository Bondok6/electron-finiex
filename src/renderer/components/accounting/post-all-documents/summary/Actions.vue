<template>
  <div
    class="
      justify-center
      mt-great
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1 btn-violet-faded" @click="display">{{
      $t("display-f7")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-orange" @click="postDocus">{{
      $t("deferred-f9")
    }}</el-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      rowsSelection: state => state.Accounting.postAllDocus.rowsSelection
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/postAllDocus/setRecordDetails",
      clearSelections: "Accounting/postAllDocus/clearSelections"
    }),
    display() {
      if (this.rowsSelection.length > 0) {
        this.$confirm(
          "you will lose the selected doucs , Do you want to post the selected documents ? ",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: true,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        )
          .then(() => {
            this.$store
              .dispatch("Accounting/postAllDocus/postDocus")
              .then(() => {
                this.$notify({
                  group: "actions",
                  type: "scuccess",
                  title: "posted"
                });
              })
              .catch(e => {
                 
                this.$notify({
                  group: "actions",
                  type: "error",
                  title: e.response.data.message
                });
              });

            this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
          })
          .catch(() => {
            this.clearSelections();
            this.setRecordDetails({
              pageSize: val,
              pageNumber: 1
            });
            this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
          });
      } else {
        this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
      }
    },
    postDocus() {
      this.$store
        .dispatch("Accounting/postAllDocus/postDocus")
        .then(() => {
          this.$notify({
            group: "actions",
            type: "scuccess",
            title: "posted"
          });
          this.setRecordDetails({ pageNumber: 1 });

          this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
        })
        .catch(e => {
          this.$notify({
            group: "actions",
            type: "error",
            title: e.response.data.message
          });
          this.setRecordDetails({ pageNumber: 1 });
          this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
        })
        .finally(() => {
          this.clearSelections();
        });
    }
  }
};
</script>