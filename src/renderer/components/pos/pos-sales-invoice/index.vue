<template>
  <div style="margin: 15px">
    <el-row>
      <el-col :xs="24" :md="14" class="mb-2">
        <el-row>
          <el-col :xs="24">
            <div class="internal-tables-pos-container">
              <el-input
                class="
                  text-color
                  bl-none
                  mb-1
                  mt-4
                  internal-orders-pos-search-top
                "
                v-model="form.search"
                :placeholder="$t('search-here')"
              >
                <template slot="append">
                  <div  class="search-icon-container"
                        @click="openTablesDialog()">
                    <i
                      class="el-icon-search"
                      style="font-size: large; font-weight: bold"
                    ></i>
                  </div>
                </template>
              </el-input>

              <div class="internal-orders-pos-green">
                <span>القسم 1</span>
                <span>القسم 2</span>
                <span>القسم 3</span>
                <span>القسم 4</span>
                <span>القسم 5</span>
                <span>القسم 6</span>
                <span>القسم 7</span>
                <span>القسم 8</span>
                <span>القسم 9</span>
                <span>القسم 10</span>
                <span>القسم 11</span>
                <span>القسم 12</span>
              </div>

              <el-button round plain class="mt-2 mb-2 plain-primary-button"
                                      @click="openCategoryListDialog()"
                >{{ $t("more") }} {{ $t("arrow") }}
              </el-button>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-2 mb-2">
            <div class="internal-tables-pos-container">
              <div class="internal-orders-bottom-part-search">
                <span
                  style="background-color: #e8fafe; padding: 10px; margin: 5px"
                >
                  رقم الطلب
                </span>
                <el-input
                  class="
                    text-color
                    bl-none
                    mb-1
                    internal-orders-pos-search-bottom
                    pa-0
                  "
                  v-model="form.search"
                  :placeholder="$t('search-here')"
                >
                  <template slot="append">
                    <div  class="search-icon-container"
                          @click="openSalesInvoicesDialog()">
                      <i
                        class="el-icon-search"
                        style="font-size: large; font-weight: bold"
                      ></i>
                    </div>
                  </template>
                </el-input>

                <span
                  style="background-color: #e8fafe; padding: 10px; margin: 5px"
                >
                  رقم الجلسة
                </span>
                <el-input
                  class="
                    text-color
                    bl-none
                    mb-1
                    internal-orders-pos-search-bottom
                    pa-0
                  "
                  v-model="form.search"
                  :placeholder="$t('search-here')"
                >
                  <template slot="append">
                    <div  class="search-icon-container"
                          @click="openTablesDialog()">
                      <i
                        class="el-icon-search"
                        style="font-size: large; font-weight: bold"
                      ></i>
                    </div>
                  </template>
                </el-input>
              </div>
              <div class="internal-orders-pos-pink">
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
                <span>بند 231</span>
              </div>

              <el-button round plain class="mt-2 mb-2 plain-primary-button"
                                      @click="openItemListDialog()"
                >{{ $t("more") }} {{ $t("arrow") }}
              </el-button>
            </div>

            <div class="d-flex flex-wrap space-around mt-2">
              <el-button class="px-10-lg btn-orange"
                          @click="openPaymentDialog(), openClientSelectDialog()">{{
                $t("add-client")
              }}</el-button>

              <el-button class="px-10-lg btn-light-violet"
                          @click="openAddInvoiceAttachment()">{{
                $t("add-attachment")
              }}</el-button>
              <NuxtLink :to="localePath('/pos/pos-sales-invoice/new')">
              <el-button class="px-10-lg btn-blue-darker">{{
                $t("new")
              }}</el-button>
              </NuxtLink>
              <el-button class="px-10-lg btn-blue-dark">{{
                $t("print")
              }}</el-button>
              <el-button class="px-10-lg btn-red-dark"
                         @click="openSalesInvoicesDialog()">{{
                $t("close-invoice")
              }}</el-button>
              <el-button class="px-10-lg btn-blue">{{
                $t("calculator")
              }}</el-button>
            </div>

            <div
              class="d-flex flex-wrap justify-center mt-2 border-radius-none"
            >
              <span>
                <el-button class="px-10-lg btn-cyan-light">{{
                  $t("approximate")
                }}</el-button>
              <NuxtLink :to="localePath('/pos/pos-sales-invoice/new')">
                <el-button class="px-10-lg btn-red-dark">{{
                  $t("suspended-invoice")
                }}</el-button>
              </NuxtLink>
                <el-button class="px-10-lg btn-green"
                          @click="openPaymentDialog()">{{
                  $t("pay-now")
                }}</el-button>
              </span>
              <span class="resturant-sales-invoice-inner-span">
                <span
                  style="
                    background-color: #fff;
                    border-radius: 10px;
                    padding: 3px 8px;
                    margin-left: 10px;
                    margin-right: 10px;
                    font-size: 12px;
                  "
                  >11/05/2021</span
                >
                <span style="visibility: hidden"> SAR </span>
                <span style="font-size: 20px; font-weight: bolder; color: #fff">
                  500.00
                </span>
                <span style="font-size: 15px; font-weight: bolder; color: #fff">
                  SAR
                </span>
              </span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :md="10">
        <div style="margin-left: 20px; margin-right: 20px">
          <el-input
            class="
              text-color
              bl-none
              mb-1
              mt-4
              internal-orders-pos-search-left
              box-shadow
            "
            v-model="form.search"
            :placeholder="$t('search-here')"
          >
                <template slot="append">
                  <div  class="search-icon-container"
                        @click="openItemListDialog()">
                    <i
                      class="el-icon-search"
                      style="font-size: large; font-weight: bold"
                    ></i>
                  </div>
                </template>
          </el-input>

          <el-select
            :placeholder="$t('grain')"
            v-model="form.input"
            class="internal-orders-select-left box-shadow pa-0"
          >
            <el-option :label="$t('grain')" :value="1"></el-option>
            <el-option :label="$t('grain')" :value="2"></el-option>
          </el-select>

          <span>
            <div class="mt-1 mb-1 box-shadow" style="min-height: 500px">
              <el-row>
                <el-col :span="24">
                  <el-table
                    :data="searchTable"
                    style="width: 100%"
                    border
                    max-height="200"
                    :cell-style="firstTable"
                  >
                    <el-table-column
                      align="center"
                      prop="item-name"
                      :label="$t('item-name')"
                    >
                      <template>
                        <div class="d-flex space-between flex-wrap">
                          <span>اسم وهمي</span>
                          <el-button
                            @click="secondTableVisible = true"
                            size="mini"
                            icon="el-icon-paperclip"
                            circle
                          ></el-button>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      prop="unit"
                      :label="$t('unit')"
                      width="100"
                    />
                    <el-table-column
                      align="center"
                      prop="quantity"
                      :label="$t('quantity')"
                    >
                      <template slot-scope="scope">
                        <el-button
                          @click="plusOne()"
                          size="mini"
                          class="plus-minus-icon"
                          icon="el-icon-plus"
                          circle
                        ></el-button>
                        <el-input
                          size="small"
                          style="
                            text-align: center;
                            width: 20%;
                            margin-right: 3px;
                            margin-left: 3px;
                          "
                          class="pa-0"
                          v-model="scope.row.quantity"
                          @focus="openKeypadAddItemDialog()"
                        ></el-input>
                        <el-button
                          @click="minusOne()"
                          size="mini"
                          class="plus-minus-icon"
                          icon="el-icon-minus"
                          circle
                        ></el-button>

                        <el-popconfirm
                          icon="el-icon-info"
                          icon-color="red"
                          :title="$t('confirm')"
                        >
                          <i
                            slot="reference"
                            class="
                              setting-button
                              danger-color
                              el-icon-delete-solid
                            "
                          ></i>
                        </el-popconfirm>
                      </template>
                    </el-table-column>

                    <el-table-column
                      align="center"
                      prop="total"
                      :label="$t('total')"
                    >
                      <template slot-scope="scope">
                        <el-button
                          @click="plusOne()"
                          size="mini"
                          class="plus-minus-icon"
                          icon="el-icon-plus"
                          circle
                        ></el-button>
                        <el-input
                          size="small"
                          style="
                            text-align: center;
                            width: 20%;
                            margin-right: 3px;
                            margin-left: 3px;
                          "
                          class="pa-0"
                          v-model="scope.row.total"
                          @focus="openKeypadAddItemDialog()"
                        ></el-input>
                        <el-button
                          @click="minusOne()"
                          size="mini"
                          class="plus-minus-icon"
                          icon="el-icon-minus"
                          circle
                        ></el-button>

                        <el-popconfirm
                          icon="el-icon-info"
                          icon-color="red"
                          :title="$t('confirm')"
                        >
                          <i
                            slot="reference"
                            class="
                              setting-button
                              danger-color
                              el-icon-delete-solid
                            "
                          ></i>
                        </el-popconfirm>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
                <br />
                <br />
                <br />
                <br />
                <el-col :span="24" style="margin-top: 200px">
                  <span v-if="secondTableVisible">
                    <el-table
                      :data="secondTable"
                      style="width: 100%"
                      border
                      max-height="250"
                      :cell-style="blueBg"
                    >
                      <el-table-column
                        align="center"
                        prop="id"
                        :label="$t('id')"
                        width="40"
                      />
                      <el-table-column
                        align="center"
                        prop="attachment_name_note"
                        :label="$t('attachment-name-note')"
                      />
                      <el-table-column
                        align="center"
                        prop="quantity"
                        :label="$t('quantity')"
                      >
                        <template slot-scope="scope">
                          <el-button
                            @click="plusOne()"
                            size="mini"
                            class="plus-minus-icon"
                            icon="el-icon-plus"
                            circle
                          ></el-button>
                          <el-input
                            size="small"
                            style="
                              text-align: center;
                              width: 20%;
                              margin-right: 3px;
                              margin-left: 3px;
                            "
                            class="pa-0"
                            v-model="scope.row.quantity"
                          ></el-input>
                          <el-button
                            @click="minusOne()"
                            size="mini"
                            class="plus-minus-icon"
                            icon="el-icon-minus"
                            circle
                          ></el-button>
                        </template>
                      </el-table-column>

                      <el-table-column align="center" width="60">
                        <template>
                          <el-popconfirm
                            icon="el-icon-info"
                            icon-color="red"
                            :title="$t('confirm')"
                          >
                            <i
                              slot="reference"
                              class="
                                setting-button
                                danger-color
                                el-icon-delete-solid
                              "
                            ></i>
                          </el-popconfirm>
                        </template>
                      </el-table-column>
                    </el-table>
                  </span>
                </el-col>
              </el-row>
            </div>
          </span>
        </div>
        <div>
          <el-table
            :data="lowerTable"
            style="width: 100%"
            border
            max-height="250"
            class="pos-resturant-table"
          >
            <el-table-column align="center" prop="sum" :label="$t('sum')">
              <template slot-scope="scope">
                <el-input
                  size="small"
                  style="text-align: center"
                  v-model="scope.row.sum"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="discount"
              :label="$t('discount')"
            >
              <template slot-scope="scope">
                <el-input
                  size="small"
                  style="text-align: center"
                  v-model="scope.row.discount"
                  @focus="openKeypadDialog()"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="percentage"
              label="%"
              width="40"
            >
              <template slot-scope="scope">
                <el-input
                class="pa-0"
                  size="small"
                  style="text-align: center"
                  v-model="scope.row.percentage"
                  @focus="openKeypadDialog()"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="total_product_tax_100"
              :label="$t('total-product-tax-100%')"
              width="190"
            >
              <template slot-scope="scope">
                <el-input
                  size="small"
                  style="text-align: center"
                  v-model="scope.row.total_product_tax_100"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="tax" :label="$t('tax')">
              <template slot-scope="scope">
                <el-input
                  size="small"
                  style="text-align: center"
                  v-model="scope.row.tax"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="net" :label="$t('net')">
              <template slot-scope="scope">
                <el-input
                  size="small"
                  style="text-align: center"
                  v-model="scope.row.net"
                ></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <Tables />
    <CategoryList />
    <SalesInvoices />
    <Payment />
    <AddInvoiceAttachment />
    <ItemList />
    <Keypad />
    <keypadAddItem />
  </div>
</template>

<script>
import Keypad from "~/components/pos/dialogs/keypad"
import ItemList from "~/components/pos/dialogs/item-list"
import CategoryList from "~/components/pos/dialogs/category-list"
import Tables from "~/components/pos/dialogs/tables"
import SalesInvoices from "~/components/pos/dialogs/sales-invoices"
import AddInvoiceAttachment from "~/components/pos/dialogs/add-invoice-attachment"
import Payment from "~/components/pos/dialogs/payment/payment"
import keypadAddItem from "~/components/pos/dialogs/keypad-add-item"

export default {
  components: {
    Tables, CategoryList, SalesInvoices, Payment,
    AddInvoiceAttachment, keypadAddItem, ItemList,
    Keypad
  },

  data: function () {
    return {
      active: "reservation",
      secondTableVisible: false,
      lowerTable: [
        {
          sum: "",
          discount: "",
          total_product_tax_100: "",
          tax: "",
          net: "",
        },
      ],

      searchTable: [
        {
          unit: "حبة",
          quantity: 12.0,
        },
        {
          unit: "حبة",
          quantity: 16.0,
        },
      ],

      secondTable: [
        {
          id: 1,
          attachment_name_note: "اسم وهمي",
          quantity: 12.0,
        },
        {
          id: 1,
          attachment_name_note: "اسم وهمي",
          quantity: 16.0,
        },
      ],
      form: {
        search: 1,
        input: 1,
      },
    };
  },

  methods: {
    // plusOne() {
    //    
    // },
    // minusOne() {
    //   this.searchTable -= 1;
    // },

    blueBg({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1) {
        return {
          color: "#fff",
          background: "#21798D",
        };
      }
    },

    firstTable({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0) {
        if (rowIndex == 0) {
          return {
            color: "#fff",
            background: "#21798D",
          };
        } else {
          return {
            color: "#fff",
            background: "#00A65A",
          };
        }
      }
    },

    openKeypadDialog() {
      this.$store.commit("pos/keypad/updateDialogState", true);
    },
    openKeypadAddItemDialog() {
      this.$store.commit("pos/keypadAddItem/updateDialogState", true);
    },
    openItemListDialog() {
      this.$store.commit("pos/itemList/updateDialogState", true);
    },
    openCategoryListDialog() {
      this.$store.commit("pos/categoryList/updateDialogState", true);
    },
    openTablesDialog() {
      this.$store.commit("pos/tables/updateDialogState", true);
    },
    openSalesInvoicesDialog() {
      this.$store.commit("pos/salesInvoices/updateDialogState", true);
    },
    openSaveConfirmationDialog() {
      this.$store.commit("pos/saveExitConfirmation/updateDialogState", true);
    },
    openAddInvoiceAttachment() {
      this.$store.commit("pos/addInvoiceAttachment/updateDialogState", true);
    },
    openPaymentDialog() {
      this.$store.commit("pos/payment/updateDialogState", true);
    },
    openClientSelectDialog() {
      this.$store.commit("pos/clientSelect/updateDialogState", true);
      this.setupClientSelectDialog();
    },

    setupClientSelectDialog() {
      this.$nextTick(() => {
        const container = document.getElementById('client-search-box');
         
        const input = container.getElementsByClassName("el-input__suffix")[0];
        input.innerHTML = `
          <i class="el-icon-search mx-1 icon-search-mod"></i>
        `;
      })
    },
  },
};
</script>
<style scoped lang="scss">
.internal-orders-pos-green {
  display: flex;
  flex-wrap: wrap;

  span {
    background-color: #e2f5d5;
    padding: 20px 24px;
    border-radius: 8px;
    margin: 5px 12px;
  }
}

.internal-orders-pos-pink {
  display: flex;
  flex-wrap: wrap;

  span {
    background-color: #f5dfd4;
    padding: 20px 24px;
    border-radius: 8px;
    margin: 5px 12px;
  }
}

.internal-orders-pos-search-top {
  width: 40%;

  @media only screen and (max-width: 532px) {
    width: 100%;
  }
}

.internal-orders-pos-search-left {
  width: 60%;

  @media only screen and (max-width: 532px) {
    width: 100%;
  }
}

.internal-orders-pos-search-bottom {
  width: 20%;

  @media only screen and (max-width: 532px) {
    width: 100%;
  }
}

.internal-orders-bottom-part-search {
  width: 100%;

  @media only screen and (max-width: 532px) {
    width: 100%;
  }
}

.internal-tables-pos-container {
  background-color: #fff;
  box-shadow: 0px 3px 22px -7px rgba(0, 0, 0, 0.4);
  padding: 10px;
}

.plain-primary-button {
  display: block;
  margin-left: 0;
  margin-right: auto;
  background-color: #fff;
  color: #21798d;
  border-color: #21798d;
  &:hover,
  &:focus {
    background-color: rgba(0, 102, 255, 0.212);
    color: #21798d;
    border-color: #21798d;
  }
  &:active {
    background-color: #fff;
    color: #21798d;
    border-color: #21798d;
  }
}

.internal-orders-select-left {
  width: 20%;

  @media only screen and (max-width: 532px) {
    width: 100%;
  }
}

.box-shadow {
  box-shadow: 0px 3px 18px -6px rgba(0, 0, 0, 0.2) !important;
}

.plus-minus-icon {
  background-color: #f5dfd4;
  color: #000;
}

.resturant-sales-invoice-inner-span {
  background-color: #f39c12;
  padding: 5px 50px;
  span {
    margin-left: 2px;
    margin-right: 2px;
  }
}

.border-radius-none {
  .el-button {
    border-radius: 0 !important;
  }
}
</style>
