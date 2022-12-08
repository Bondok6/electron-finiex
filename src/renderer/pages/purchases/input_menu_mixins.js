export default {
    mounted() {    
      this.$nextTick(function () {
         
        let itemSelects = document.getElementsByClassName("input-menu");
        itemSelects.forEach(element => {
          const inner_input = element.getElementsByClassName("el-input__inner")[0];
          inner_input.removeAttribute("readonly");
          const arrow = element.getElementsByClassName("el-input__suffix-inner")[0]
          arrow.parentNode.removeChild(arrow);
        });
      })
    }
  }