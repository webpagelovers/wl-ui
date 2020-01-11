export default {
  methods: {
    justDisableChild(item) {
      if (item.disabled) {
        return false
      }
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.setChild(item)
    },
    setChild(item) {
      if (item.child && item.child.length > 0) {
        item.child.forEach(obj => {
          if (item.checked === 'all') {
            this.$set(obj, 'checked', 'all')
            this.$set(obj, 'disabled', true)
          } else {
            this.$set(obj, 'checked', '')
            this.$set(obj, 'disabled', false)
          }
        })
      }
    }
  }
}
