export default {
  methods: {
    justCheckAllChild(treeData, item) {
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.setAllChildCheck(treeData, item.checked)
    },
    setAllChildCheck(item, checked) {
      if (item.child && item.child.length > 0) {
        item.child.forEach(obj => {
          this.$set(obj, 'checked', checked)
          this.setAllChildCheck(obj, checked)
        })
      }
    },
  }
}
