<template>
  <div class="p-2">
    <el-row :gutter="20">
      <el-col :lg="10" :md="20" :sm="20" :xs="20">
        <el-row>
          <el-col :lg="2" :md="2" :sm="2" :xs="4">
            <i class="fab fa-facebook-square fb-color fa-2x"></i>
          </el-col>
          <el-col :lg="4" :md="3" :sm="4" :xs="8">
            <span>{{$t('facebook')}}</span>
          </el-col>
          <el-col :lg="15" :md="7" :sm="8" :xs="10">
            <el-input v-model="form.facebook"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="10" :md="20" :sm="20" :xs="20">
        <el-row>
          <el-col :lg="2" :md="2" :sm="2" :xs="4">
            <i class="fab fa-instagram fa-2x"></i>
          </el-col>
          <el-col :lg="5" :md="3" :sm="4" :xs="8">
            <span>{{$t('instgram')}}</span>
          </el-col>

          <el-col :lg="15" :md="7" :sm="8" :xs="10">
            <el-input v-model="form.instgram"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="10" :md="20" :sm="20" :xs="20">
        <el-row>
          <el-col :lg="2" :md="2" :sm="2" :xs="4">
            <i class="fab fa-twitter-square tw-color fa-2x"></i>
          </el-col>
          <el-col :lg="4" :md="3" :sm="4" :xs="8">
            <span>{{$t('twitter')}}</span>
          </el-col>

          <el-col :lg="15" :md="7" :sm="8" :xs="10">
            <el-input v-model="form.twitter"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="10" :md="20" :sm="20" :xs="20">
        <el-row>
          <el-col :lg="2" :md="2" :sm="2" :xs="4">
            <i class="fab fa-snapchat-square fa-2x"></i>
          </el-col>
          <el-col :lg="5" :md="3" :sm="4" :xs="8">
            <span> {{$t('snap-chat')}}</span>
          </el-col>

          <el-col :lg="15" :md="7" :sm="8" :xs="10">
            <el-input v-model="form.snapchat"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="10" :md="20" :sm="20" :xs="20">
        <el-col style="padding-right:0;" :lg="2" :md="2" :sm="2" :xs="4">
          <i class="fab fa-linkedin fa-2x"></i>
        </el-col>
        <el-col style="padding-right:0" :lg="4" :md="3" :sm="4" :xs="8">
          <span>{{$t('LinkedIn')}}</span>
        </el-col>

        <el-col style="padding-left:0;padding-right:0" :lg="15" :md="7" :sm="8" :xs="10">
          <el-input v-model="form.linkedin"></el-input>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template> 
<script>
import {mapMutations} from "vuex";
export default {
  data() {
    return {
      form :{
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: "",
        snapchat: "",
      }
    };
  },
  methods: {
    ...mapMutations({
      setRecordDetails : "suppliersManagement/supplierData/setRecordDetails"
    }),
  },
  watch:{
    form: {
      handler(newValue) {
        // deep clone by spread operator
        this.setRecordDetails({
          ...newValue,
        });
      },
      deep: true
    }
  }
};
</script>