<template>
    <el-dialog title=" " :visible.sync="dialog" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="totals-form dialog-form add-item-form"
            label-position="top"
            :model="form"
          >
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td>
                    <span>{{ $t("item-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("item-name") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("manufacture-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("category") }}</span>
                  </td>
                  <td>
                    <el-select v-model="form.inventory_name" class="width-full">
                      <el-option label="مارك" :value="2"></el-option>
                      <el-option label="مارك" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("does-it-includes-tax") }}</span>
                  </td>
                  <td>
                      <el-checkbox v-model="checked" class="checkbox-checked">{{ $t("includes-tax") }}</el-checkbox>
                  </td>
                </tr>

   
                  <tr :class="[
                    checked
                      ? ''
                      : 'visibility-collapse',
                  ]">
                    <td>
                      <span>{{ $t("includes-tax") }}</span>
                    </td>
                    <td>
                      <el-row :gutter="10">
                        <el-col :sm="8">
                          <el-input
                            v-model="form.id"
                            :placeholder="$t('tax-percentage')"
                            readonly
                          >
                            {{ $t("tax-percentage") }}
                          </el-input>
                        </el-col>
                        <el-col :sm="16">
                          <el-input
                            v-model="form.id"
                            placeholder="0"
                          ></el-input>
                        </el-col>
                      </el-row>
                    </td>
                  </tr>
                
                <tr>
                  <td>
                    <span>{{ $t("basic-items-unit") }}</span>
                  </td>
                  <td>
                    <el-select v-model="form.inventory_name" class="width-full">
                      <el-option :label="$t('grain')" :value="2"></el-option>
                      <el-option :label="$t('grain')" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("warehouse") }}</span>
                  </td>
                  <td>
                    <el-select v-model="form.inventory_name" class="width-full">
                      <el-option label="سوق النمو" :value="2"></el-option>
                      <el-option label="سوق النمو" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("manufacture-company") }}</span>
                  </td>
                  <td>
                    <el-select v-model="form.inventory_name" class="width-full">
                      <el-option :label="$t('without')" :value="2"></el-option>
                      <el-option :label="$t('without')" :value="1"></el-option>
                    </el-select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("item-type") }}</span>
                  </td>
                  <td>
                    <el-select v-model="form.inventory_name" class="width-full">
                      <el-option
                        :label="$t('commodity-class')"
                        :value="2"
                      ></el-option>
                      <el-option
                        :label="$t('commodity-class')"
                        :value="1"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("last-purchase-price") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("cost-price") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("selling-price") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("lowest-selling-price") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>{{ $t("wholesale-price") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.inventory_name" placeholder="">
                    </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light" @click="closeDialog(false)">{{
          $t("save")
        }}</el-button>
      </span>
    </el-dialog>
</template>


<script>
export default {
  name: "AddItem",

  data: function () {
    return {
      checked: false,
      form: {
        inventory_name: 1,
      },
    };
  },

  methods: {
    closeDialog(state) {
      this.$store.commit("additem/updateDialogState", state);
    },
  },

  computed: {
    dialog: {
      set(state) {
             return this.$store.commit("additem/updateDialogState", state);
      },

      get() {
        return this.$store.state.additem.dialog;
      },
    },
  },
};
</script>
<style scoped lang="scss">
.add-item-form{
  .el-input__inner {
    margin: 8px;
    border: 1px solid rgb(151, 151, 151) !important;
    border-radius: 20px;
    padding: 0 5px;
  }
}
</style>