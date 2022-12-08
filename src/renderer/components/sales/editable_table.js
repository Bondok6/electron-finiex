import InputDropDownSetup from '~/components/input-with-drop-down/input_drop_down.js';

export default {
  mixins: [InputDropDownSetup],

  mounted() {
    this.$nextTick(() => this.focusNewInput());
  },

  methods: {
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      this.$nextTick(() => this.focusNewInput());

      this.setupInputDropDown();
    },

    focusNewInput() {
      const inputContainers = document.getElementsByClassName('row-start');
      const newInputContainer = inputContainers[inputContainers.length -1];
      const newInput = newInputContainer.getElementsByClassName('el-input__inner')[0];
      newInput.focus();
    }
  }
}