<template>
  <el-container class="container mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="750"
    >
      <el-table-column
        align="center"
        prop="item_number"
        width="40"
        type="index"
        :label="$t('id')"
      />
      <el-table-column align="center" :label="$t('to-date')">
        <template slot-scope="scope">
          {{ formatDate(new Date(scope.row.toDate)) }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="percentage" :label="$t('ratio')" />
      <el-table-column
        align="center"
        prop="depreciationValue"
        :label="$t('depreciation-value')"
      />

      <el-table-column
        align="center"
        prop="pastDepreciationValue"
        :label="$t('previous-depreciation')"
      />
      <el-table-column
        align="center"
        :label="$t('current-depreciation')"
        class="color-green"
      >
        <template slot-scope="scope">
          <span class="color-green">
            {{ scope.row.currentDepreciationValue }}
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('book-value')">
        <template slot-scope="scope">
          <span class="danger-color">
            {{ scope.row.bookingValue }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="exclusionValue"
        :label="$t('exclusion-value')"
      />
    </el-table>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "satge-addition",
  data: function() {
    return {
      tableData: [],
      depreciationTypeGaid: {
        monthly: 1,
        yearly: 2
      },
      depreciationType: {
        fixed: 1,
        decreased: 2
      }
    };
  },
  computed: {
    ...mapState({
      RecordDetails: state => state.Accounting.cardFixedAssets.RecordDetails,
      calculateNow: state => state.Accounting.cardFixedAssets.calculateNow
    })
  },

  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/cardFixedAssets/setRecordDetails"
    }),
    //pass date object to the function
    formatDate(dateObject) {
      return (
        dateObject.getFullYear() +
        "/" +
        Number(dateObject.getMonth() + 1) +
        "/" +
        dateObject.getDate()
      );
    },
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    getDayOfYear(dateToConvert) {
      var start = new Date(dateToConvert.getFullYear(), 0, 0);
      var diff = dateToConvert - start;
      var oneDay = 1000 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      return day;
    },

    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    getNewYear(date) {
      let result = new Date(date);
      result.setFullYear(date.getFullYear() + 1, 0, 1);
      return new Date(result);
    },
    addMonths(date, months) {
      let result = new Date(date);
      result.setMonth(result.getMonth() + months);
      return new Date(result);
    },
    addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days);
      return new Date(result);
    },
    removeDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() - days);
      return new Date(result);
    },
    monthDiff(d1, d2) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }
  },
  watch: {
    // watch activate tab to generate table
    calculateNow: {
      handler(activeTab) {
        if (activeTab) {
          this.tableData = [];
          // check if depreciation date include additions date Or not
          let fixedAddedList = this.RecordDetails.fixedAssetsAddedList;
          let purchaseOnly = this.RecordDetails.purchasePrice;
          var purchaseAndAdditions = purchaseOnly;
          let bookingValue = purchaseOnly;
          let toDate = new Date(this.RecordDetails.dateStrartDepreciation);
          let percentage = this.RecordDetails.depreciationPercentage;
          let deprecationValue = this.$convertToValidNumber(
            bookingValue * (this.RecordDetails.depreciationPercentage / 12)
          );
          let currentDeprecation = 0;
          let pastValue = 0;
          // monthly
          if (
            this.RecordDetails.depreciationTypeGaid ==
            this.depreciationTypeGaid.monthly
          ) {
            percentage = this.$convertToValidNumber(percentage / 12);
            // deprecation per month
            deprecationValue = this.$convertToValidNumber(
              deprecationValue / 100
            );
            while (bookingValue >= 10) {
              let fromDate = toDate;
              toDate = this.addMonths(toDate, 1);
              // calc past Depreciation Value
              pastValue = this.$convertToValidNumber(
                purchaseAndAdditions - bookingValue
              );
              let displayDate = this.removeDays(toDate, 1).toISOString();
              for (let x = 0; x < fixedAddedList.length; x++) {
                if (
                  new Date(fixedAddedList[x].dateCreated) <= new Date(toDate) &&
                  new Date(fixedAddedList[x].dateCreated) >= new Date(fromDate)
                ) {
                  purchaseAndAdditions =
                    Number(purchaseAndAdditions) +
                    Number(fixedAddedList[x].amount);
                  bookingValue =
                    Number(bookingValue) + Number(fixedAddedList[x].amount);

                  deprecationValue = this.$convertToValidNumber(
                    purchaseAndAdditions *
                      (this.RecordDetails.depreciationPercentage / 12)
                  );
                  // percentage = this.$convertToValidNumber(percentage / 12);
                  deprecationValue = this.$convertToValidNumber(
                    deprecationValue / 100
                  );
              
                }
              }

              // deprecationValue = this.$convertToValidNumber(
              //   deprecationValue / 12
              // );
              pastValue = this.$convertToValidNumber(
                purchaseAndAdditions - bookingValue
              );
              bookingValue = this.$convertToValidNumber(
                bookingValue - deprecationValue,
                true
              );
              currentDeprecation = this.$convertToValidNumber(
                currentDeprecation + deprecationValue
              );

              this.tableData.push({
                fromDate: fromDate,
                toDate: displayDate,
                percentage: percentage,
                depreciationValue: deprecationValue,
                pastDepreciationValue: pastValue,
                currentDepreciationValue: currentDeprecation,
                bookingValue: bookingValue,
                exclusionValue: 0
              });
            }
          }
          // Yealy // Fixed
          else {
            if (
              this.RecordDetails.depreciationType == this.depreciationType.fixed
            ) {
              while (bookingValue >= 1) {
                let fromDate = toDate;
                let holder = toDate;
                toDate = this.getNewYear(toDate);
                toDate = this.addDays(toDate, holder.getDate() - 1);
                let displayDate = this.removeDays(toDate, 1).toISOString();
                // calc past Depreciation Value
                pastValue = this.$convertToValidNumber(
                  purchaseAndAdditions - bookingValue
                );
                // let deprecationValue = this.$convertToValidNumber(
                //   this.RecordDetails.purchaseOnly / this.RecordDetails.depreciationPercentage
                // );
                let deprecationValue = this.$convertToValidNumber(
                  purchaseAndAdditions *
                    this.RecordDetails.depreciationPercentage
                );

                deprecationValue = this.$convertToValidNumber(
                  deprecationValue / 100
                );
                for (let x = 0; x < fixedAddedList.length; x++) {
                  if (
                    new Date(fixedAddedList[x].dateCreated) <=
                      new Date(toDate) &&
                    new Date(fixedAddedList[x].dateCreated) >=
                      new Date(fromDate)
                  ) {
                    purchaseAndAdditions =
                      Number(purchaseAndAdditions) +
                      Number(fixedAddedList[x].amount);
                    bookingValue =
                      Number(bookingValue) + Number(fixedAddedList[x].amount);
                    let monthsBeforeAddition = this.monthDiff(
                      new Date(fromDate),
                      new Date(fixedAddedList[x].dateCreated)
                    );
                    let deprecationWithAdditionMonlty =
                      purchaseAndAdditions * (percentage / 12);
                    deprecationWithAdditionMonlty =
                      deprecationWithAdditionMonlty / 100;
                    let deprecationWithoutAdditionMonlty =
                      this.RecordDetails.purchasePrice * (percentage / 12);
                    deprecationWithoutAdditionMonlty =
                      deprecationWithoutAdditionMonlty / 100;

                    deprecationValue = this.$convertToValidNumber(
                      +(
                        deprecationWithoutAdditionMonlty * monthsBeforeAddition
                      ) +
                        deprecationWithAdditionMonlty *
                          (12 - monthsBeforeAddition)
                    );
                  }
                }
                 
                pastValue = this.$convertToValidNumber(
                  purchaseAndAdditions - bookingValue
                );
                bookingValue = this.$convertToValidNumber(
                  bookingValue - deprecationValue,
                  true
                );
                currentDeprecation = this.$convertToValidNumber(
                  currentDeprecation + deprecationValue
                );
                this.tableData.push({
                  fromDate: fromDate,
                  toDate: displayDate,
                  percentage: percentage,
                  depreciationValue: deprecationValue,
                  pastDepreciationValue: pastValue,
                  currentDepreciationValue: currentDeprecation,
                  bookingValue: bookingValue,
                  exclusionValue: 0
                });
              }
            }

            // depreciationType.decreased
            // else {
            //   var isStartOfYear = this.getDayOfYear(toDate) == 1;
            //   if (!isStartOfYear) {
            //   let fromDate = toDate;
            //   let MiniDeprecation =
            //     (bookingValue / percentage / 12) * (12 - toDate.getMonth());
            //   let holder = toDate;
            //   toDate = this.getNewYear(toDate);
            //   toDate = this.addDays(toDate, holder.getDate() - 1);
            //   let displayDate = this.removeDays(toDate, 1).toISOString();
            //   pastValue = this.$convertToValidNumber(
            //     purchaseAndAdditions - bookingValue
            //   );

            //   bookingValue = this.$convertToValidNumber(
            //     bookingValue - MiniDeprecation
            //   );
            //   currentDeprecation = this.$convertToValidNumber(
            //     currentDeprecation + MiniDeprecation
            //   );
            //   this.tableData.push({
            //     fromDate: fromDate,
            //     toDate: displayDate,
            //     percentage: percentage,
            //     depreciationValue: this.$convertToValidNumber(
            //       MiniDeprecation
            //     ),
            //     pastDepreciationValue: pastValue,
            //     currentDepreciationValue: currentDeprecation,
            //     bookingValue: bookingValue,
            //     exclusionValue: 0
            //   });
            //   }

            //   while (bookingValue >= 10) {
            //     let fromDate = new Date(toDate);
            //     let holder = toDate;
            //     toDate = this.getNewYear(toDate);
            //     toDate = this.addDays(toDate, holder.getDate() - 1);
            //     let displayDate = new Date(
            //       this.removeDays(toDate, 1).toISOString()
            //     );
            //     deprecationValue = bookingValue / percentage;
            //     // let fromDate = toDate;
            //     // toDate = this.addMonths(toDate, 12);
            //     // let displayDate = this.removeDays(toDate, 1).toISOString();
            //     // calc past Depreciation Value

            //     bookingValue = this.$convertToValidNumber(
            //       bookingValue - deprecationValue
            //     );
            //     currentDeprecation = this.$convertToValidNumber(
            //       currentDeprecation + deprecationValue
            //     );
            //     this.tableData.push({
            //       fromDate: fromDate,
            //       toDate: displayDate,
            //       percentage: percentage,
            //       depreciationValue: this.$convertToValidNumber(
            //         deprecationValue
            //       ),
            //       pastDepreciationValue: pastValue,
            //       currentDepreciationValue: this.$convertToValidNumber(
            //         currentDeprecation
            //       ),
            //       bookingValue: bookingValue,
            //       exclusionValue: 0
            //     });
            //   }
            // }
            // yearly + decreased
            else {
              while (bookingValue >= 10) {
                let fromDate = toDate;
                let holder = toDate;
                let deprecationValue =
                  bookingValue *
                  (percentage / 12) *
                  (12 -
                    (toDate.getMonth() == 0 || deprecationValue
                      ? 0
                      : toDate.getMonth()));
                deprecationValue = this.$convertToValidNumber(
                  deprecationValue / 100
                );
                 
                toDate = this.getNewYear(toDate);
                toDate = this.addDays(toDate, holder.getDate() - 1);
        
                let displayDate = this.removeDays(toDate, 1).toISOString();
                // calc past Depreciation Value

                pastValue = this.$convertToValidNumber(
                  purchaseAndAdditions - bookingValue
                );
                if (
                  fixedAddedList.reduce((acc, curr) => acc + curr.amount, 0) > 0
                ) {
                  for (let x = 0; x < fixedAddedList.length; x++) {
                    if (
                      new Date(fixedAddedList[x].dateCreated) <=
                        new Date(toDate) &&
                      new Date(fixedAddedList[x].dateCreated) >=
                        new Date(fromDate)
                    ) {
                      purchaseAndAdditions =
                        Number(bookingValue) + Number(fixedAddedList[x].amount);
                      let monthsBeforeAddition = this.monthDiff(
                        new Date(fromDate),
                        new Date(fixedAddedList[x].dateCreated)
                      );
                      let deprecationWithAdditionMonlty =
                        purchaseAndAdditions * (percentage / 12);
                      deprecationWithAdditionMonlty =
                        deprecationWithAdditionMonlty / 100;

                      let deprecationWithoutAdditionMonlty =
                        bookingValue * (percentage / 12);
                      deprecationWithoutAdditionMonlty =
                        deprecationWithoutAdditionMonlty / 100;

                       
                      deprecationValue = this.$convertToValidNumber(
                        +(
                          deprecationWithoutAdditionMonlty *
                          monthsBeforeAddition
                        ) +
                          deprecationWithAdditionMonlty *
                            (12 -
                              (fromDate.getMonth() == 0 ||
                              bookingValue < this.RecordDetails.purchasePrice
                                ? 0
                                : fromDate.getMonth()) -
                              monthsBeforeAddition)
                      );

                      bookingValue =
                        Number(bookingValue) + Number(fixedAddedList[x].amount);
                    }
                  }
                }

                // pastValue = this.$convertToValidNumber(
                //   purchaseAndAdditions - bookingValue
                // );
                bookingValue = this.$convertToValidNumber(
                  bookingValue - deprecationValue
                );
                currentDeprecation = this.$convertToValidNumber(
                  currentDeprecation + deprecationValue
                );

                this.tableData.push({
                  fromDate: fromDate,
                  toDate: displayDate,
                  percentage: percentage,
                  depreciationValue: deprecationValue,
                  pastDepreciationValue: this.$convertToValidNumber(pastValue),
                  currentDepreciationValue: this.$convertToValidNumber(
                    currentDeprecation
                  ),
                  bookingValue: this.$convertToValidNumber(bookingValue),
                  exclusionValue: 0
                });
              }
            }
          }
        }
      }
    },
    tableData: {
      handler(newVal) {
        let deepClone = JSON.parse(JSON.stringify(newVal));
        this.setRecordDetails({
          addFixedAssetsDetailsList: deepClone
        });
      },
      deep: true
    }
  }
};
</script>
