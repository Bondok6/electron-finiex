<template>
  <el-row class="mt-2 mx-3">
    <el-col :sm="24" :md="12" :lg="8">
      <div
        class="text-unbold d-flex flex-wrap align-baseline action-buttons-right mb-2"
      >
        <span>
          {{ $t("total") }}
        </span>
        <span class="input-style  mr-4"> {{total ? $numberWithCommas(total) : $numberWithCommas(0) }} </span>
      </div>
    </el-col>

    <el-col :sm="24" :md="12" :lg="16">
      <div class="mt-auto action-buttons-left">
    <el-button size="mini" class="mb-1 btn-blue" @click="create">{{$t('save-f5')}}</el-button>
    <el-button size="mini" class="mb-1 btn-violet-faded">{{$t('search-f7')}}</el-button>
    <el-button size="mini" class="mb-1 btn-red">{{$t('delete-f8')}}</el-button>

    <NuxtLink :to="localePath('/inventory/receipts-between-branches')">
    <el-button size="mini" class="mb-1 btn-violet">{{$t('back-f6')}}</el-button>
    </NuxtLink>
    
    <el-button size="mini" class="mb-1 btn-cyan">{{$t('add-file-f9')}}</el-button>
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
        total: state => state.inventory.receiptsBetweenBranches.recordDetails.total,
      }),
    },
    methods: {
      create() {
        this.$store.dispatch("inventory/receiptsBetweenBranches/create"
        ).then(()=>{
          this.$notify({
            title: "success",
            type: "success",
            message: "Invoice created"
          });
          this.$router.push("/inventory/receipts-between-branches");
        }).catch(()=>{
          this.$notify({
            title: "Error",
            type: "error",
            message: "Invoice Didn't create"
          });
        })
      }
    }
  }
</script>