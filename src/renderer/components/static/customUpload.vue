<template>
  <div>
    <label
      for="file"
      @dragover.prevent
      @dragleave.prevent
      @drop.prevent="selectFile"
      :class="classes ? classes : 'el-button btn-cyan-light el-button--default'"
      style="padding: 12px"
    >
      <input
        type="file"
        id="file"
        hidden
        :accept="accept"
        @change="selectFile"
        ref="fileUpload"
      />
      <slot>Drop Here</slot>
    </label>
    <span class="d-block">
      <slot name="progress" v-if="file"></slot>
      <slot name="preview" :file="file" :fileLink="fileLink" v-if="showPreview">
        {{ file ? "file Selected " + file.name : "" }}
        <el-row class="width-full mb-3" v-if="fileLink">
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            class="mt-2 d-flex justify-center width-full"
            style="max-height: 250px; overflow: hidden"
          >
            <div class="wrapper-preview">
              <div class="preview">
                <el-button
                  type="primary"
                  icon="el-icon-delete"
                  @click="removePreviewFile"
                ></el-button>
                <el-button
                  class="el-icon-full-screen"
                  type="primary"
                  @click="openFullScreen"
                ></el-button>
              </div>
              <!-- If User select image -->
              <img
                :src="fileLink"
                alt=""
                class="width-full"
                v-if="file.type.includes('image')"
              />
              <!-- If user select pdf  -->
              <iframe
                scrolling="no"
                :src="fileLink"
                frameborder="0"
                class="width-full"
                v-if="file.type.includes('pdf')"
              ></iframe>
            </div>
          </el-col>
        </el-row>
      </slot>
    </span>

    <!-- <slot> -->
    <!-- <div>
        <img :src="src" />
        <object :data="src" type="application/pdf">
          <div>No PDF viewer available</div>
        </object>
        <button @click="send">set Req</button>
      </div> -->
    <!-- </slot> -->
  </div>
</template>

<script>
export default {
  props: {
    accept: {
      type: String,
      default: "image/* , .pdf"
    },
    showPreview: {
      type: Boolean,
      default: true
    },
    classes: {
      type: String
    },
    row:{
      type : Object,
      default : {},
      require : false,
    }
  },
  data() {
    return {
      file: "",
      fileLink: ""
    };
  },
  computed: {},
  methods: {
    selectFile(event) {
      if (event.dataTransfer) {
        this.file = event.dataTransfer.files[0];
      } else {
        this.file = event.target.files[0];
      }
      console.log(this.file);
      this.fileLink = URL.createObjectURL(this.file);
      // clear input file after (get file and assign to file prop) ==> because if user select same file again, it will be not clear -> subsequently this function will be not called again because file input value same as before (not change)
      this.$refs.fileUpload.value = "";
      this.$emit("file-selected", this.file, this.fileLink ,this.row);
    },
    removePreviewFile() {
      this.file = "";
      this.fileLink = "";
      this.$emit("file-selected", this.file, this.fileLink);
    },
    openFullScreen() {
      window.open(this.fileLink, "_blank");
    }
  }
};
</script>
