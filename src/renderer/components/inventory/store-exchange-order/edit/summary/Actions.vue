<template>
  <el-row class="mt-2 mx-3">
    <el-col :sm="24" :md="12" :lg="8">
      <div
        class="
          text-unbold
          d-flex
          flex-wrap
          align-baseline
          action-buttons-right
          mb-2
        "
      >
        <span>
          {{ $t("total") }}
        </span>
        <span class="input-style  mr-4">  {{  total ? $numberWithCommas(total) : $numberWithCommas(0) }} </span>
      </div>
    </el-col>

    <el-col :sm="24" :md="12" :lg="16">
      <div class="action-buttons-left">
        <el-button size="mini" class="mb-1 btn-green">{{$t('attach-a-file')}}</el-button>
        
        <el-button size="mini" class="mb-1 btn-blue" @click="update">{{$t('save-f5')}}</el-button>
        <el-button size="mini" class="mb-1 btn-violet-faded">{{$t('search-f7')}}</el-button>
        <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord">{{$t('delete-f8')}}</el-button>
        <NuxtLink :to="localePath('/inventory/store-exchange-order')">
        <el-button size="mini" class="mb-1 btn-violet">{{$t('back-f6')}}</el-button>
        </NuxtLink>
        <el-button size="mini"  class="mb-1 btn-grey">{{$t('print-f4')}}</el-button>
        <el-button size="mini"  class="mb-1 btn-grey">{{$t('print-pdf')}}</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState({
        total: state => state.inventory.storeExchangeOrder.recordDetails.total,
      }),
    },
    methods: {
      update() {
        this.$store.dispatch("inventory/storeExchangeOrder/update"
        ).then(()=>{
          this.$notify({
            title: "success",
            type: "success",
            message: "Invoice Updated"
          });
          this.$router.push("/inventory/store-exchange-order");
        }).catch(()=>{
          this.$notify({
            title: "Error",
            type: "error",
            message: "Invoice Didn't Update"
          });
        })
      },
      deleteRecord() {
      this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        .then(() => {
          return this.$store.dispatch(
            "inventory/storeExchangeOrder/delete",
            this.$route.params.id
          );
        })
        .then(() => {
          this.$router.push("/inventory/store-exchange-order");
          this.$message({
            type: "success",
            message: "Delete completed"
          });
        })
        .catch(er => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    },
    }
  }
</script>