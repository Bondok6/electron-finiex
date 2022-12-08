<template>
  <div>
    <el-row class="width-full mod">
      <el-col :md="12" :lg="8">
        <table class="width-full">
          <tbody>
            <tr>
              <td style="width: 35%">
                <span class="total-label h-40">{{$t('total-net')}}</span>
              </td>
              <td>
                <div class="input-style total-display text-center">{{form.total}}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </el-col>

      <el-col :md="12" :lg="16">
        <actions />
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Actions from './Actions';

export default {
  name: "Bottom",

  components: {
    Actions,
  },

  data: function () {
    return {
      form: {
        total: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.total-display {
  border-radius: 0.4rem;
  background-color: #21798d; 
  color: white;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: 0 !important;
}

.total-label{
  color: #606266;
}

.mod {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}


</style>