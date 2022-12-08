<template>
  <el-dialog class="delivery-type-dialog" :visible.sync="showDialog" width="25%">
    <el-row class="mb-1">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>
    </el-row>
    
    <div style="padding: 2rem 1.5rem;">
      <div class="mb-8">
        <el-row class="d-flex-center mb-2">
          <el-col :span="12">
            <div class="text-center">{{$t('item-1')}}</div>
          </el-col>
        
          <el-col :span="12">
            <el-input />
          </el-col>
        </el-row>

        <el-row v-for="(customer, index) in customers" :key="index" 
                class="d-flex-center mb-2">
          <el-col :span="12">
            <div class="text-center">
              <span>{{$t('customer')}}</span>
              <span style="">{{index + 1}}</span>
            </div>
          </el-col>
        
          <el-col :span="12">
            <el-input />
          </el-col>
        </el-row>
      </div>

      <el-row class="d-flex-center">
        <div class="ok-btn" @click="closeDialog()">
          {{$t('ok')}}
        </div>
      </el-row>
    </div>
  </el-dialog>
</template>


<script>
export default {
  name: "TablePartitionForm",

  data: function () {
    return {
      customers: [
        'customer-1',
        'customer-2',
        'customer-3',
      ]
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/tablePartitionForm/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/tablePartitionForm/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.tablePartitionForm.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.cancel-btn {
  color: black;
  font-size: x-large;
  cursor: pointer;
}

.d-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ok-btn {
  width: 10rem;
  height: 1.8rem;
  color: white;
  background-color: #6DD1CF;
  text-align: center;
  line-height: 1.8rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>