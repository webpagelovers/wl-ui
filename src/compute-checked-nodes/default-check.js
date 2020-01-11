export default {
  methods: {
    defaultCheck(treeData, item) {
      if (item.checked === 'all') {
        this.$set(item, 'checked', '')
      } else {
        this.$set(item, 'checked', 'all')
      }
      this.setNodesChecked(treeData, item)
    },
    setNodesChecked(treeData, item) {
      const nodes = item.nodes.split('-').reverse()
      nodes.forEach((id, index) => {
        if (index > 0) {
          this.setCurrentParentChecked(treeData, id)
        } else {
          this.setAllChildCheck(item, item.checked)
        }
      })
    },
    setCurrentParentChecked(treeData, id) {
      if (treeData.id == id) {
        const checkeds = treeData.child.map(item => {
          return item.checked
        })
        const all = checkeds.every(checked => {
          return checked === 'all'
        })
        const half = checkeds.some(checked => {
          return checked === 'all' || checked === 'half'
        })
        if (all) {
          this.$set(treeData, 'checked', 'all')
        } else {
          if (half) {
            this.$set(treeData, 'checked', 'half')
          } else {
            this.$set(treeData, 'checked', '')
          }
        }
      } else {
        treeData.child.forEach(item => {
          this.setCurrentParentChecked(item, id)
        })
      }
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
