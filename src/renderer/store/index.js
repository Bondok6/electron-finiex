export const state = () => ({
  isLoading: true,
  taxInformation: {},
  formValues: {
    GaidType: 16,
    PaymentVoucher: 14,
    ReceiptVoucher: 15,
    DiscountVoucher: 17,
    CreditNote: 34,
    DebitNote: 35,
    SupplierNote: 36,
    CustomerNote: 37
  }
});
export const mutations = {
  loaded(state, isLoading) {
    state.isLoading = !isLoading;
  },
  setTaxInformation(state, data) {
    state.taxInformation = data;
  }
};
export const actions = {
  async getTaxInfo({ commit, state }) {
    if (Object.keys(state.taxInformation).length > 0) {
      return;
    } else {
      try {
        let response = await this.$axios.get(
          "general/settings-system/tax-info"
        );
        let data = response.data.data;
        commit("setTaxInformation", data);
      } catch (e) {
        return e.response;
      }
    }
  }
};
export const getters = {
  getTaxInformation(state, type) {
    let taxInfo = state.taxInformation;
    let voucherDetails = {};
    let purchaseDetails = {};
    let salesDetails = {};
    if (taxInfo.ttcVoucherEnabled && taxInfo.vatVoucherEnabled) {
      voucherDetails = { taxType: "vat", taxByPercentage: taxInfo.vat };
    } else if (taxInfo.ttcVoucherEnabled && !taxInfo.vatVoucherEnabled) {
      voucherDetails = { taxType: "ttc", taxByPercentage: taxInfo.ttc };
    } else if (!taxInfo.ttcVoucherEnabled && taxInfo.vatVoucherEnabled) {
      voucherDetails = { taxType: "vat", taxByPercentage: taxInfo.vat };
    } else {
      voucherDetails = { taxType: false, taxByPercentage: 0 };
    }

    if (taxInfo.ttcPurchaseEnabled && taxInfo.vatPurchaseEnabled) {
      purchaseDetails = { taxType: "vat", taxByPercentage: taxInfo.vat };
    } else if (taxInfo.ttcPurchaseEnabled && !taxInfo.vatPurchaseEnabled) {
      purchaseDetails = { taxType: "ttc", taxByPercentage: taxInfo.ttc };
    } else if (!taxInfo.ttcPurchaseEnabled && taxInfo.vatPurchaseEnabled) {
      purchaseDetails = { taxType: "vat", taxByPercentage: taxInfo.vat };
    } else {
      purchaseDetails = { taxType: false, taxByPercentage: 0 };
    }

    if (taxInfo.ttcSalesEnabled && taxInfo.vatSalesEnabled) {
      salesDetails = { taxType: "vat", taxByPercentage: taxInfo.vat };
    } else if (taxInfo.ttcSalesEnabled && !taxInfo.vatSalesEnabled) {
      salesDetails = { taxType: "ttc", taxByPercentage: taxInfo.ttc };
    } else if (!taxInfo.ttcSalesEnabled && taxInfo.vatSalesEnabled) {
      salesDetails = {
        taxType: "vat",
        taxByPercentage: taxInfo.vat
      };
    } else {
      salesDetails = { taxType: false, taxByPercentage: 0 };
    }
    return {
      voucher: {
        ...voucherDetails
      },
      purchase: {
        ...purchaseDetails
      },
      sales: {
        ...salesDetails
      }
    };
  }
};
