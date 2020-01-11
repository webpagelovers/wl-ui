<template>
  <div class="tree">
    <div class="item"
         :style="{paddingLeft:(data.depth*indent)+'px'}">
      <div :class="['arrow',data.showChild ? 'down' : '']"
           v-if="showArrow && data.child && data.child.length>0"
           @click="rootToggleArrow(data)">
      </div>
      <div
        :class="['check',data.checked == 'all' ? 'checked' : '',data.checked === 'half' ? 'half' : '', data.disabled ? 'disabled' : '']"
        v-if="showCheck"
        @click="rootToggleCheck(data)">
      </div>
      <div class="title" @click="rootTitleClick(data)">{{data.title}}</div>
    </div>
    <div class="child"
         v-if="data.showChild && data.child && data.child.length > 0">
      <basic-tree :data="item"
                  v-for="(item,index) in data.child"
                  :key="index"
                  @title-click="titleClick"
                  @arrow-toggle="arrowToggle"
                  @check="check">
      </basic-tree>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BasicTree",
    props: {
      data: {
        type: Object,
        default() {
          return {
            id: '1',
            nodes: '1',
            title: '1',
            depth: 1,
            checked: '',
            showChild: false,
            child: [
              {
                id: '2',
                nodes: '1-2',
                title: '1-1',
                depth: 2,
                checked: '',
                showChild: false,
                child: [
                  {
                    id: '6',
                    nodes: '1-2-6',
                    title: '1-1-1',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: [
                      {
                        id: '12',
                        nodes: '1-2-6-12',
                        title: '1-1-1-1',
                        depth: 4,
                        checked: '',
                        showChild: false,
                        child: []
                      },
                      {
                        id: '13',
                        nodes: '1-2-6-13',
                        title: '1-1-1-2',
                        depth: 4,
                        checked: '',
                        showChild: false,
                        child: []
                      },
                      {
                        id: '14',
                        nodes: '1-2-6-14',
                        title: '1-1-1-3',
                        depth: 4,
                        checked: '',
                        showChild: false,
                        child: []
                      },
                    ]
                  }
                ]
              },
              {
                id: '3',
                nodes: '1-3',
                title: '1-2',
                depth: 2,
                checked: '',

                showChild: false,
                child: [
                  {
                    id: '7',
                    nodes: '1-3-7',
                    title: '1-2-1',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  }
                ]
              },
              {
                id: '4',
                nodes: '1-4',
                title: '1-3',
                depth: 2,
                checked: '',
                showChild: false,
                child: [
                  {
                    id: '8',
                    nodes: '1-4-8',
                    title: '1-3-1',
                    depth: 3,
                    checked: '',

                    showChild: false,
                    child: []
                  }
                ]
              },
              {
                id: '5',
                nodes: '1-5',
                title: '1-4',
                depth: 2,
                checked: '',
                showChild: false,
                child: [
                  {
                    id: '9',
                    nodes: '1-5-9',
                    title: '1-4-1',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  },
                  {
                    id: '10',
                    nodes: '1-5-10',
                    title: '1-4-2',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  },
                  {
                    id: '11',
                    nodes: '1-5-11',
                    title: '1-4-3',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  }
                ]
              },
            ]
          }
        }
      },
      indent: {
        type: Number,
        default: 15
      },
      showAll: {
        type: Boolean,
        default: true
      },
      showArrow: {
        type: Boolean,
        default: true
      },
      showCheck: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    methods: {
      setAllChildShow(treeData) {
        for (let key in treeData) {
          if (typeof treeData[key] !== 'object') {
            this.$set(treeData, 'showChild', true)
          } else {
            this.setAllChildShow(treeData[key])
          }
        }
      },
      rootToggleArrow(treeData) {
        this.$set(treeData, 'showChild', !treeData.showChild)
        this.$emit('arrow-toggle', treeData)
      },
      rootToggleCheck(treeData) {
        this.$emit('check', treeData)
      },
      rootTitleClick(treeData) {
        this.$emit('title-click', treeData)
      },
      check(item) {
        this.$emit('check', item)
        this.checkedItem = item
      },
      arrowToggle(item) {
        this.$emit('arrow-toggle', item)
      },
      titleClick(item) {
        this.$emit('title-click', item)
      },
    },
    watch: {
      showAll: {
        handler(newVal, oldVal) {
          if (newVal) {
            this.setAllChildShow(this.data)
          }
        },
        immediate: true
      }
    }
  }
</script>

<style scoped>
  .item {
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }

  .item:hover {
    background-color: #F5F7FA;
  }

  .arrow {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #aaa;
    border-right: none;
    cursor: pointer;
  }

  .arrow.down:before {
    transform: rotate(90deg);
  }

  .check {
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 2px;
    margin-left: 10px;
  }

  .check:hover {
    border-color: #4395ff;
  }

  .check.checked {
    border-color: #4395ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .check.checked:before {
    content: '';
    display: block;
    width: 4px;
    height: 8px;
    border-color: #4395ff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-10%, -10%);
  }

  .check.half {
    border-color: #4395ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .check.half:before {
    content: '';
    display: block;
    width: 8px;
    height: 2px;
    border: none;
    background-color: #4395ff;
    transform: rotate(0deg) translate(0, 0);
  }

  .check.checked.disabled {
    background-color: #ddd;
    border-color: #ccc;
  }

  .check.checked.disabled:before {
    border-color: #fff;
  }

  .title {
    margin-left: 10px;
    flex: 1;
  }

</style>
