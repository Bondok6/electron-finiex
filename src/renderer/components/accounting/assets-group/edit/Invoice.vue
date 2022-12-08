<template>
  <el-container class="container box-shadow ma-4 mb-0 py-3 invoice-table">
    <el-form
      label-position="left"
      label-width="100px"
      class="popup-fixed-asset"
      style=""
    >
      <table style="width: 100%">
        <tbody>
          <tr>
            <td class="popup-label">
              <span>{{ $t("group-number") }}</span>
            </td>
            <td>
              <el-input
                v-model.number="form.GroupCode"
                disabled
                class="number"
              />
            </td>
          </tr>
          <tr>
            <td class="popup-label">
              <span>{{ $t("group-name") }}</span>
            </td>
            <td>
              <el-input v-model="form.GroupName" class="" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <el-input
                class="notes-input"
                type="textarea"
                :rows="7"
                v-model="form.Notes"
                :placeholder="$t('notes')"
              >
              </el-input>
            </td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </el-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "invoice",
  data() {
    return {
      form: {
        Id: this.singleRecordDetails.id,
        Notes: this.singleRecordDetails.mnotes,
        GroupCode: this.singleRecordDetails.mdcode,
        GroupName: this.singleRecordDetails.mname
      }
    };
  },
  props: {
    singleRecordDetails: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/assetsGroup/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler(newValue) {
        this.setRecordDetails({
          ...newValue,
          Id: newValue.GroupCode,
          GroupCode: newValue.Id
        });
      },
      deep: true,
      // To watch when open the dialog
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.popup-fixed-asset {
  margin-right: 10px;
  width: 65%;
}
@media (max-width: 768px) {
  .popup-fixed-asset {
    width: 100%;
  }
}
</style>