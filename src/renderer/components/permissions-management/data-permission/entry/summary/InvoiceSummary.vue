<template>
  <div class="container ma-4 py-2 mt-0 invoice-summary display-center">
    <el-row :gutter="20" class="px-2">
        <actions />
    </el-row>
  </div>

</template>
<script>
import Actions from "./Actions";
export default {
    components: {Actions}
}
</script>