<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
      />
      <el-table-column align="center" prop="item_category" label="/" width="40">
        <template>
          <span @click="dialog = true"> // </span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="item_unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="warehouse"
        :label="$t('warehouse')"
      />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
      <el-table-column
        align="center"
        prop="price"
        :label="$t('selling-price')"
      />
      <el-table-column align="center" prop="total" :label="$t('total')" />

      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
          </el-popconfirm>
        </template>
      </el-table-column>

      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full addItemTable"
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

          <el-table-column align="center">
            <template>
              <el-button plain size="mini" type="danger">{{
                $t("add-item")
              }}</el-button>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            prop="item_category"
            label="/"
            width="40"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="warehouse"
            :label="$t('warehouse')"
          />
          <el-table-column
            align="center"
            prop="quantity"
            :label="$t('quantity')"
          />
          <el-table-column align="center" prop="cost" :label="$t('cost')" />
          <el-table-column align="center" prop="total" :label="$t('total')" />
          <el-table-column
            align="center"
            prop="delete_icon"
            :label="$t('total')"
            width="60"
          />
        </el-table>
      </template>
    </el-table>

    <el-dialog title=" " :visible.sync="dialog" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <div class="horizontal-line-text mb-4 mt-2">
            <span>{{ $t("additional-item-information") }}</span>
          </div>

          <el-table
            :data="itemDetailTable"
            class="width-full addItemTable mb-4"
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

          <div style="height: 100px;">

          </div>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light" @click="dialog = false">{{
          $t("ok")
        }}</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      dialog: false,

      tableData: [
        {
          id: 1,
          item_name: "Rs25a - ?????? ?????????? 225*250 ???????? ",
          item_category: "||||",
          item_unit: "??????",
          warehouse: "???????????? ????????????",
          quantity: 8,
          price: "1,324.00",
          total: "642.00",
        },
        {
          id: 2,
          item_name: "Rs25a - ?????? ?????????? 225*250 ???????? ",
          item_category: "||||",
          item_unit: "??????",
          warehouse: "???????????? ????????????",
          quantity: 9,
          price: "932.00",
          total: "828.00",
        },
        {
          id: 3,
          item_name: "Rs25a - ?????? ?????????? 225*250 ???????? ",
          item_category: "||||",
          item_unit: "??????",
          warehouse: "???????????? ????????????",
          quantity: 2,
          price: "453.00",
          total: "129.00",
        },
      ],

      summaryTable: [
        {
          id: "-",
          item_name: "-",
          item_category: "-",
          unit: "-",
          warehouse: "-",
          quantity: "-",
          cost: "-",
          total: "-",
          delete_icon: "-",
        },
        {
          id: "-",
          item_name: "-",
          item_category: "-",
          unit: "-",
          warehouse: "-",
          quantity: "-",
          cost: "-",
          total: "-",
          delete_icon: "-",
        },
      ],

      itemDetailTable: [
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
    };
  },

  methods: {},
};
</script>