<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table">
      <el-row class="width-full">
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <div class="table-header">
              {{ $t("barcode-type") }}
            </div>
            <table style="width: 100%" class="px-15-lg">
              <tbody>
                <tr>
                  <td class="">
                    <img
                      src="@/assets/images/barcode.jpg"
                      alt="menu image"
                      height="auto"
                      style="margin-bottom: 10px; width: 100%"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span @click="dialogTwo = true">{{
                      $t("item-barcode-printing")
                    }}</span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span @click="dialogThree = true">{{
                      $t("items-barcode-printing")
                    }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <div class="table-header">
              {{ $t("item-image") }}
            </div>
            <table style="width: 100%; margin-bottom: 30px" class="px-15-lg">
              <tbody>
                <tr>
                  <td class="plus-icon">
                    <i class="el-icon-plus"></i>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("download-image") }}</span>
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delete-image") }}</span>
                  </td>

                  <td class="popup-label">
                    <span @click="dialogOne = true">{{
                      $t("take-a-picture-with-the-camera")
                    }}</span>
                  </td>
                  <td class="popup-label">
                    <span>{{ $t("barcode-stand-printing") }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
    </el-container>

    <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
      <div class="text-center pt-1 mt-0 invoice-summary">
        <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">
          <NuxtLink :to="localePath('/system-cards/items-cards')">
          <el-button size="mini" class="mb-1 btn-blue">{{
            $t("save-f5")
          }}</el-button>
          </NuxtLink>

          <NuxtLink :to="localePath('/system-cards/items-cards/search-items')">
            <el-button size="mini" class="mb-1 btn-violet-faded">{{
              $t("search-f7")
            }}</el-button>
          </NuxtLink>

          <el-button size="mini" class="mb-1 btn-red">{{
            $t("delete-f8")
          }}</el-button>

          <NuxtLink :to="localePath('/system-cards/items-cards')">
          <el-button size="mini" class="mb-1 btn-violet">{{
            $t("back-f6")
          }}</el-button>
          </NuxtLink>

          <el-button size="mini" class="mb-1 btn-cyan">{{
            $t("invoice-posting-f9")
          }}</el-button>
          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-pdf")
          }}</el-button>

          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-f4")
          }}</el-button>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogOne" width="50%">
      <el-container class="container d-block box-shadow mb-0 px-2 py-2">
        <div class="px-30-lg py-15-lg">
          <div class="d-flex flex-wrap space-between">
            <span>
              <el-button class="btn-dark-green px-4-lg">
                {{ $t("turn-on") }}
              </el-button>
            </span>
            <span>
              <el-button class="btn-red px-4-lg">
                {{ $t("turn-off") }}
              </el-button>
            </span>
            <span>
              <el-button class="btn-dark-grey px-4-lg">
                {{ $t("save") }}
              </el-button>
            </span>
          </div>

          <div class="devicesConnected">
            {{ $t("no-devices-connected") }}
          </div>

          <img
            src="@/assets/images/man_face.jpg"
            alt="menu image"
            width="auto"
            height="150"
            style="
              margin-bottom: 20px;
              border-radius: 10px;
              border: 1px solid #bbb;
            "
          />
        </div>
      </el-container>
      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>

    <el-dialog :visible.sync="dialogTwo" width="40%">
      <el-container class="container d-block box-shadow mb-0 px-2 py-2">
        <div style="font-size: 30px; font-weight: bold; margin: 30px">
          {{ $t("enter-the-number-of-barcode-label-printing") }}
        </div>
        <el-input
          class=""
          v-model="form.search"
          :label="$t('enter-the-number-of-barcode-label-printing')"
        >
        </el-input>

        <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">
          <el-button class="mb-1 px-4-lg btn-cyan-light">{{
            $t("agree")
          }}</el-button>

          <el-button class="mb-1 px-4-lg btn-cyan-light">{{
            $t("cancel")
          }}</el-button>
        </div>
      </el-container>
    </el-dialog>

    <el-dialog :visible.sync="dialogThree" width="60%">
      <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
        <el-form
          class="invoice-form width-full"
          label-position="top"
          :model="form"
        >
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="12" :md="8" :lg="8">
              <el-form-item :label="$t('unit')">
                <el-select v-model="form.branch">
                  <el-option :label="$t('grain')" :value="1"> </el-option>
                  <el-option :label="$t('grain')" :value="2"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-container>

      <el-container class="container ma-4 mt-0 mb-0 invoice-table inner-table">
        <el-table
          :data="tableData"
          style="width: 100%"
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
            prop="item_name"
            :label="$t('item-name')"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column align="center" prop="group" :label="$t('group')" />
          <el-table-column
            align="center"
            prop="selling_price"
            :label="$t('selling-price')"
          />
          <el-table-column
            align="center"
            prop="quantity"
            :label="$t('quantity')"
          />
        </el-table>
      </el-container>

      <div class="container ma-4 py-2 mt-0 invoice-summary">
        <el-row :gutter="20" class="px-2">
          <el-col :sm="24" :md="12" :lg="12">
            <div class="text-unbold d-flex flex-wrap">
              <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
                <span class="mx-1" style="font-weight: 900;">
                  {{ $t("the-number") }}
                </span>
                <span class="inner-input-style mt-2"> 1457 </span>
              </span>
            </div>
          </el-col>

          <el-col :sm="24" :md="12" :lg="12">
            <div class="mt-2 action-buttons-nonGrown ml-4 align-baseline">
              <el-button size="mini" class="mb-1 btn-primary">{{
                $t("print-label")
              }}</el-button>
              <el-button size="mini" class="mb-1 btn-orange">{{
                $t("print-barcode")
              }}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      dialogOne: false,
      dialogTwo: false,
      dialogThree: false,
      tableData: [
        {
          id: "1",
          item_name: "-",
          unit: "-",
          group: "-",
          quantity: "-",
          selling_price: "-",
          quantity: "-",
        },
        {
          id: "2",
          item_name: "-",
          unit: "-",
          group: "-",
          quantity: "-",
          selling_price: "-",
          quantity: "-",
        },
        {
          id: "3",
          item_name: "-",
          unit: "-",
          group: "-",
          quantity: "-",
          selling_price: "-",
          quantity: "-",
        },
      ],
      form: {
        name: "1",
        search: "",
      },
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.popup-label {
  width: 33% !important;
  padding: 10px;
  border-radius: 12px;
  margin-top: 5px;
  cursor: pointer;
}

.table-header {
  background-color: #f0fbfd;
  padding: 10px;
  border: 1px solid #707070;
  margin-top: 10px;
  margin-bottom: 10px;
}

.plus-icon {
  border: 1px solid #eee;
  padding-top: 25px;
  padding-bottom: 25px;

  i {
    width: 100%;
    height: auto;
    font-size: 50px;
    font-weight: 900;
    color: #9b9b9b;
  }
}

.devicesConnected {
  padding: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid #ddd;
}


.inner-table .el-table__header-wrapper th{
  display: none;
}

.inner-input-style{
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 20px;
  padding-right: 40px;
  padding-left: 40px;
  border: 1px solid #ddd;
  font-weight: 900;

}


</style>