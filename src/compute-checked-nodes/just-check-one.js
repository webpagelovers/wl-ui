export default {
  methods: {
    justCheckOne(item) {
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
    }
  }
}
