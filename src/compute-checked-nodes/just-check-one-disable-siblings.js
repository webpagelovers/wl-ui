export default {
  methods: {
    justCheckOneDisableSiblings(treeData, item) {
      if (item.disabled) {
        return false
      }
      const nodeId = item.nodes.split('-').reverse()[1]
      this.setSiblinsDisabled(treeData, item, nodeId)

    },
    setSiblinsDisabled(treeData, item, id) {
      if (treeData.id == id) {
        if (treeData.child && treeData.child.length > 0) {
          treeData.child.forEach(obj => {
            if (obj.id !== item.id) {
              if (item.checked === 'all') {
                this.$set(obj, 'checked', '')
                this.$set(obj, 'disabled', false)
              } else {
                this.$set(obj, 'checked', 'all')
                this.$set(obj, 'disabled', true)
              }
            } else {
              this.$set(item, 'checked', item.checked === '' ? 'all' : '')
            }
          })
        }
      } else {
        treeData.child.forEach(obj => {
          this.setSiblinsDisabled(obj, item, id)
        })
      }
    },
  }
}
