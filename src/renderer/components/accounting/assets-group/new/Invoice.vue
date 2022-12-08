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
              <el-input v-model.number="suggestCode" class="number" disabled />
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
import { mapMutations, mapState } from "vuex";
export default {
  name: "invoice",
  data() {
    return {
      form: {
        Notes: "",
        GroupName: ""
      }
    };
  },
  props: {
    suggestCode: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    ...mapState({
      recordDetails: state => state.Accounting.assetsGroup.recordDetails
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/assetsGroup/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler(newValue) {
        this.setRecordDetails({ ...newValue, GroupCode: this.suggestCode });
      },
      deep: true
    },
    recordDetails: {
      handler(newValue) {
        if (Object.keys(newValue).length == 0) {
          // clear from if close Dialog to aviod duplicate data when create new record
          this.form = {
            Notes: "",
            GroupName: ""
          };
        }
      },
      deep: true
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
