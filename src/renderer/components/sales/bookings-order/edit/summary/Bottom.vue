<template>
  <el-container class="bottom">
    <el-col :md="12" :lg="6">
      <table class="width-full">
        <tbody>
          <tr>
            <td style="width: 35%">
              <span class="total-label">{{$t('total-net')}}</span>
            </td>
            <td>
              <div class="input-style total-display text-center">{{form.total}}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-col>

    <el-col :md="12" :lg="6">
      <table class="width-full">
        <tbody>
          <tr>
            <td style="width: 25%"></td>
            <td>
              <el-button class="d-block width-full btn-cyan-light" >{{$t('approximate')}}</el-button>
            </td>
            <td style="width: 25%"></td>
          </tr>
        </tbody>
      </table>
    </el-col>

    <el-col :md="12" :lg="12">
      <actions />
    </el-col>
  </el-container>
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
        total: "1,742",
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

.bottom {
  display: flex;
  align-items: center;
}
</style>