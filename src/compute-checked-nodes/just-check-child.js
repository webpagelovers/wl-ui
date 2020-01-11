export default {
  methods: {
    justCheckChild(item) {
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.setChild(item, item.checked)
    },
    setChild(item, checked) {
      if (item.child && item.child.length > 0) {
        item.child.forEach(obj => {
          this.$set(obj, 'checked', checked)
        })
      }
    }
  }
}
