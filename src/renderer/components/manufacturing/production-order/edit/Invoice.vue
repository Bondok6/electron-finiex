<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form" label-position="top" :model="form">
      <el-row :gutter="6">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('order-number')">
                <el-input v-model="form.order_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('production-type')">
                <el-select v-model="form.production_type">
                  <el-option label=" " :value="2"></el-option>
                  <el-option label=" " :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('production-status')">
                <el-select v-model="form.production_status">
                  <el-option label=" " :value="2"></el-option>
                  <el-option label=" " :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('batch-number')">
                <el-input v-model="form.batch_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('order-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.order_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('client-name')">
                <el-select v-model="form.customer_name">
                  <el-option label="الكل " :value="1"></el-option>
                  <el-option label="الكل " :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('cost-center')">
                <el-select v-model="form.cost">
                  <el-option label=" " :value="2"></el-option>
                  <el-option label=" " :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('production-start-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.start_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('production-end-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.end_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('production-hours')">
                <el-input v-model="form.production_hours" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="19" :lg="9" class="mt-2">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-button
                  class="text-center w-250 btn-cyan-light"
                  @click="Dialog = true"
                >
                  {{ $t("production-plan-number") }}
                </el-button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="19" :lg="9" class="mt-2">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-select
                  v-model="form.type"
                  class="
                    color-blue
                    text-center
                    placeHolderColor
                    w-250
                    selectButton
                  "
                  :placeholder="$t('production-choices')"
                >
                  <el-option
                    :label="$t('duplicate-the-current-production-order')"
                    :value="1"
                  ></el-option>
                  <NuxtLink
                    :to="
                      localePath(
                        '/manufacturing/production-order/detect-production-order'
                      )
                    "
                  >
                    <el-option
                      :label="$t('receipt-of-production-order')"
                      :value="2"
                    ></el-option>
                  </NuxtLink>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog title=" " :visible.sync="Dialog" width="70%">
      <span>
        <el-container class="container mt-0 mb-0 invoice-table">
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
              prop="number"
              :label="$t('production-plan-number')"
            />
            <el-table-column
              align="center"
              prop="date"
              :label="$t('production-plan-date')"
            />
            <el-table-column
              align="center"
              prop="quantities"
              :label="$t('production-quantities')"
            />
          </el-table>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light px-4-lg" @click="Dialog = false">{{
          $t("enter")
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
      Dialog: false,
      form: {
        production_hours: 1,
        cost: 1,
        customer_name: 1,
        batch_number: 1,
        production_status: 1,
        production_type: 1,
        order_number: 1,
        start_date: 1,
        end_date: 2,
        order_date: 3,
      },
      tableData: [
        {
          id: "1",
          number: "",
          date: "",
          quantities: "",
        },
        {
          id: "2",
          number: "",
          date: "",
          quantities: "",
        },
      ],
    };
  },
};
</script>