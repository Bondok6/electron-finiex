<template>
  <div class="col-1 pt-4 pb-4 px-4">
    <div>
      <el-row class="info-input bordered-ar  bordered-en">
        <el-col :span="8">
          <div class="info-label">{{$t('amount')}}</div>
        </el-col>

        <el-col :span="14">
          <el-input v-model="form.amount" 
                    @focus="$emit('showKeypad')"
                    class="input-radius-15" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  name: "Col1Discount",

  data: function () {
    return {
      form: {
        amount: '',
      }
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.info-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.info-label {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>