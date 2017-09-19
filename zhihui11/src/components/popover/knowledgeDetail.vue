<template>
  <div class="demo knowledgeDetail">
      <div class="popover-head">
        <span class="title">知识库详细</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i><i class="icon-zuidahua"></i>
      </div>
      <div class="popover-main">
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 900px;
    height: 570px;
    background: #F0FAFF;
    margin-left: -450px;
    /*margin-top: -150px;*/
    transform: translateY(-50%);
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-head i{
      float: right;
      color: #A1C1E2;
      font-size: 12px;
      cursor: pointer;
  }
  .popover-head i.el-icon-close{
    margin-top: 13px;
    margin-right: 12px;
  }
  .popover-head i.icon-zuidahua{
    font-size: 18px;
    margin-right: 12px;
    margin-top: -1px;
  }
  .popover-head .title{
      margin-left: 15px;
      font-weight: bold;
  }
</style>
<style>
   .knowledgeDetail .el-tabs__header{
    border-bottom: 1px solid #90CCE8;
    padding-left: 5px;
    margin-top: 10px;
  }
   .knowledgeDetail .el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{
    padding-left: 8px;
    padding-right: 8px;
  }
  .knowledgeDetail .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border: 1px solid #90CCE8;
    border-bottom-color: #F0FAFF;
    border-radius: 5px 5px 0 0;
  }
  .knowledgeDetail .el-tabs__item{
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    margin-left: 10px;
    border-radius: 5px 5px 0 0;
  }
  .knowledgeDetail .el-tabs--card>.el-tabs__header .el-tabs__item{
    border:1px solid #90CCE8;
  }
  .knowledgeDetail .el-tabs__new-tab{
    display: none;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        editableTabsValue: '1',
        editableTabs: [{
          title: '新装.htm-现行-杭州',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: '固话新装',
          name: '2',
          content: 'Tab 2 content'
        },{
          title: 'iTV新装开户费',
          name: '3',
          content: 'Tab 3 content'
        }],
        tabIndex: 3
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ]),
      ...mapGetters([
        'popoverAlive'
      ])
    }
  };
</script>
