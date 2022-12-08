<template>
  <div class="d-flex space-between mt-2 mx-3">
    <div class="text-unbold sum">
       <td class="popup-label">
              <span>{{ $t("remaining-message-balance") }}</span>
            </td>
            <td class="input-padding">
              <el-button>
            <span> 0 </span>
          </el-button>
            </td>
    </div>
    <div class="mt-0">
      <el-input
        class="notes-summary mt-0"
        type="textarea"
        :rows="7"
        :placeholder="$t('message-text')"
      >
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "expenses",
  data: function() {
    return {
      form: {
        input: ""
      }
    };
  }
};
</script>
