<template>
  <el-select 
    class="input-menu"
    v-model="value"
    :placeholder="placeholder">
    <slot></slot>
  </el-select>
</template>

<script>
import input_drop_down from "./input_drop_down.js"

export default {
  name: "InputDropDown",

  mixins: [input_drop_down],

  props: ['value', 'placeholder', 'reference'],

  mounted() {
    this.setupInputDropDown();
  }
}
</script>