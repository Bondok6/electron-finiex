export default {
  methods: {
    setupInputDropDown() {
      this.$nextTick(() => {
        let el_selects = this.getAllSelectElements();
        el_selects.forEach(el_select => {
          this.removeReadonlyAttribute(el_select);
          this.removeToggleArrow(el_select);
        });
      })
    },

    getAllSelectElements() {
      return document.getElementsByClassName("input-menu");
    },

    removeReadonlyAttribute(el_select) {
      const inner_input = el_select.getElementsByClassName("el-input__inner")[0];
      inner_input.removeAttribute("readonly");
    },

    removeToggleArrow(el_select) {
      const arrow = el_select.getElementsByClassName("el-input__suffix-inner")[0]
      if(arrow != undefined && arrow != null) {
        arrow.parentNode.removeChild(arrow);
      }
    }
  }
}