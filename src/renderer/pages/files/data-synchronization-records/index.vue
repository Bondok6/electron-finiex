<template>
  <div class="mb-8 mt-40">
      <el-tabs
      class="border-none invoice-tab ma-0-sm"
      type="border-card"
      stretch
      style="margin-bottom: 40px;"

    >
    <el-tab-pane :label="$t('records-to-be-received')">
        <records-to-be-received-table />
    </el-tab-pane>
    <el-tab-pane :label="$t('records-to-be-sent')">
        <records-to-be-sent-table />
    </el-tab-pane>
    <el-tab-pane :label="$t('conflicting-records')">
        <conflicting-records-table />
    </el-tab-pane>
    <el-tab-pane :label="$t('synchronization-monitoring-data')">
        <synchronization-monitoring-data />
    </el-tab-pane>
    <el-tab-pane :label="$t('duplicate-documents')">
        <duplicate-documents-table />
    </el-tab-pane>
      <invoice-summary />
      </el-tabs>
  </div>
</template>
<script>
import DuplicateDocumentsTable from "~/components/files/data-synchronization-records/duplicateDocumentsTable.vue";
import RecordsToBeReceivedTable from "~/components/files/data-synchronization-records/recordsToBeReceivedTable.vue";
import RecordsToBeSentTable from "~/components/files/data-synchronization-records/recordsToBeSentTable.vue";
import ConflictingRecordsTable from "~/components/files/data-synchronization-records/conflictingRecordsTable.vue";
import SynchronizationMonitoringData from "~/components/files/data-synchronization-records/synchronizationMonitoringData.vue";
import InvoiceSummary from "~/components/files/data-synchronization-records/summary/Summary.vue";
export default {
    components : {
      DuplicateDocumentsTable,
      RecordsToBeReceivedTable,
      RecordsToBeSentTable,
      ConflictingRecordsTable,
      SynchronizationMonitoringData,
      InvoiceSummary
    }
}
</script>

<style lang="scss" scoped>
.invoice-tab{
  margin: 0;
}
</style>