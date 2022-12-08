<template>
  <el-dialog title=" " :visible.sync="showDialog" width="70%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <div class="horizontal-line-text mb-4 mt-2">
           <span>{{ $t("additional-item-information") }}</span>
        </div>

        <el-table
          :data="serialItemTableData"
          class="width-full addItemTable mb-4 test"
          stripe
          border
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="40"
          />
          <el-table-column
            align="center"
            prop="serial_number"
            :label="$t('serial-number')"
          />
        </el-table>

        <div class="horizontal-line-text">
          <span>{{ $t("item-specification") }}</span>
        </div>

        <div class="details-area">
        </div>
      </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light" @click="closeDialog()">
          {{$t("ok")}}
        </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddSerialItem',

  data() {
    return {
      serialItemTableData: [
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
      ],
    }
  },

  methods: {
    closeDialog() {
      this.$store.commit("addSerialItem/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("addSerialItem/updateDialogState", state);
      },

      get() {
        return this.$store.state.addSerialItem.showDialog;
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.details-area {
  height: 8rem;
}
</style>