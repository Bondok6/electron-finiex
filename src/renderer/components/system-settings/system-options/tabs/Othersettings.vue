
<template>
  <el-container class="container ma-4 mb-0 px-2 py-4">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="16" :lg="12">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-form-item>
                <label style="float: right">{{ $t("calendar-type") }}</label>
                <el-select v-model="main_form.item_name" :label="$t('all')">
                  <el-option :label="$t('1')" :value="2"></el-option>
                  <el-option :label="$t('2')" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-form-item>
                <label style="float: right">{{ $t("program-lang") }}</label>
                <el-select v-model="main_form.item_name" :label="$t('all')">
                  <el-option :label="$t('1')" :value="2"></el-option>
                  <el-option :label="$t('2')" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full mt-4">
            <el-col :span="24" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox"
                v-model="main_form.showdisplay"
              />
              <span class="title mr-3">{{
                $t("show-the-shortcut-screen-when-entering-the-program")
              }}</span>
            </el-col>
            <el-col :span="24" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox"
                v-model="main_form.printing"
              />
              <span class="title mr-3">{{
                $t("printing-the-facility-data-in-report")
              }}</span>
            </el-col>
            <el-col :span="24" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox pl-4"
                v-model="main_form.create_backup"
              />
              <span class="title mr-3">{{
                $t("create-backup-copy-data-when-exit")
              }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full mt-3">
            <el-col :span="24" class="mt-2">
              <div class="popup-label">
                <span>{{ $t("backup-path") }}</span>
              </div>
            </el-col>
            <el-col :span="24" class="mt-2">
              <el-input v-model="main_form.account_number">
                <template slot="append">
                  <el-button class="mb-1 btn-navy px-4-lg"
                    ><i class="el-icon-search"></i>
                  </el-button>
                </template>
              </el-input>
            </el-col>
            <el-col :span="24" class="mt-2">
              <div class="popup-label">
                <span>{{ $t("system-style-path") }}</span>
              </div>
            </el-col>
            <el-col :span="24" class="mt-2">
              <el-input v-model="main_form.account_number">
                <template slot="append">
                  <el-button class="mb-1 btn-gray px-4-lg"
                    ><i class="el-icon-search"></i>
                  </el-button>
                </template>
              </el-input>
            </el-col>
            <el-col :span="24" class="mt-2">
              <div class="popup-label">
                <span>{{ $t("pdf-file-save-path") }}</span>
              </div>
            </el-col>
            <el-col :span="24" class="mt-2">
              <el-input v-model="main_form.account_number">
                <template slot="append">
                  <el-button class="mb-1 btn-gray px-4-lg"
                    ><i class="el-icon-search"></i>
                  </el-button>
                </template>
              </el-input>
            </el-col>
      
                   <el-col :span="24" class="mt-2">
              <div class="popup-label">
                <span>{{ $t("xml-file-save-path") }}</span>
              </div>
            </el-col>
            <el-col :span="24" class="mt-2">
              <el-input v-model="main_form.account_number">
                <template slot="append">
                  <el-button class="mb-1 btn-gray px-4-lg"
                    ><i class="el-icon-search"></i>
                  </el-button>
                </template>
              </el-input>
            </el-col>
                         <el-col :span="24" class="mt-2">
              <div class="popup-label">
                <span>{{ $t("item-invoices-path") }}</span>
              </div>
            </el-col>
            <el-col :span="24" class="mt-2">
              <el-input v-model="main_form.account_number">
                <template slot="append">
                  <el-button class="mb-1 btn-gray px-4-lg"
                    ><i class="el-icon-search"></i>
                  </el-button>
                </template>
              </el-input>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function () {
    return {
      additionalChoice: false,
      main_form: {
        showdisplay: false,
        printing: false,
        create_backup: false,
      },
      sub_form: {
        client_name: "",
        fromNumber: "",
        toNumber: "",
        production_status: "",
      },
    };
  },
};
</script>