export default ({ store }, inject) => {
  // Inject $funtion(param) in Vue, context and store.
  const convertToValidNumber = (num, applyMinus = false) => {
    //  return return number with e- rounded with float number
    let round = (num, dec) => {
      num = Math.round(num + "e" + dec);
      return Number(num + "e-" + dec);
    };
    let numberAfterDot = num => {
      return num.toString().split(".")[1]?.length > 1
        ? num.toString().split(".")[1].length > 2
          ? 2
          : num.toString().split(".")[1].length
        : 1;
    };
    if (/(^(\.|(\d)+\.?)(\d)*$)/g.test(Number(num).toString())) {
      return Math.floor(Number(num)) == Number(num)
        ? Number(num)
        : Number(round(num, numberAfterDot(num)));
    } else {
      if (applyMinus) {
        return Math.floor(Number(num)) == Number(num)
          ? Number(num)
          : Number(round(num, numberAfterDot(num)));
      } else {
        return 0;
      }
    }
  };
  // Make calc tax global to its Use Global at All modules of app(Accounting , sales .. etc)
  const calculateTax = scope => {
    // convert voucherAmount To Number to check if valid or not (not string and not negative)
    scope.row.voucherAmount = convertToValidNumber(scope.row.voucherAmount);
    let tax = store.getters.getTaxInformation.voucher;
    // check if tax is enabled And that voucherAmount is not negative or String
    if (scope.row.taxState && scope.row.voucherAmount > 0) {
      if (tax.taxType == "vat") {
        // Total WithOut Tax = (Voucher Amount * taxByPercentage) / 100
        let totalWithTax =
          scope.row.voucherAmount -
          (scope.row.voucherAmount * tax.taxByPercentage) / 100;
        // if not integer then round it to two decimal after the dot
        scope.row.voucherAmount = convertToValidNumber(scope.row.voucherAmount);
        let taxValue = scope.row.voucherAmount - totalWithTax;
        scope.row.taxValue = convertToValidNumber(taxValue);
        scope.row.total = convertToValidNumber(
          scope.row.voucherAmount + taxValue
        );
        // tax Value = voucherAmount - Total WithOut Tax
        // if not integer then round it to two decimal after the dot
      } else if (tax.taxType == "ttc") {
        // TaxValue = (voucherAmount * tax by percentage) / (100 + tax by percentage)
        let taxValue =
          (scope.row.voucherAmount * tax.taxByPercentage) /
          (100 + tax.taxByPercentage);
        scope.row.taxValue = convertToValidNumber(taxValue);
        // Total WithOut Tax = voucherAmount - TaxValue

        scope.row.voucherAmount = convertToValidNumber(
          scope.row.voucherAmount - scope.row.taxValue
        );
        scope.row.total = convertToValidNumber(
          +scope.row.voucherAmount + +scope.row.taxValue
        );
      }
    } else {
      //  when user unchecked the tax => reset the value to 0

      scope.row.total = scope.row.voucherAmount;
      scope.row.taxValue = 0;
    }
  };
  // display number with comma
  const numberWithCommas = num => {
    if (+num % 1 == 0) {
      // if num is integer
      return Number(num).toLocaleString() + ".00";
    } else {
      return (+Number(num).toFixed(2)).toLocaleString();
    }
  };
  //add header to report of active report

  inject("calculateTax", calculateTax);
  inject("convertToValidNumber", convertToValidNumber);
  inject("numberWithCommas", numberWithCommas);
};
