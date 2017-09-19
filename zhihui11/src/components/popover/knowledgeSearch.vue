<template>
  <div class="demo knowledgeSearch">
      <div class="popover-head">
          <span class="title">知识库搜索结果</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="现行知识" name="first">
            <div class="ifame">

            </div>
          </el-tab-pane>
          <el-tab-pane label="过期知识" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="经验知识" name="third">角色管理</el-tab-pane>
        </el-tabs>
        <div class="search-box">
          <span>搜索区域：</span>
          <el-select v-model="value1" filterable placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span>县级市：</span>
          <el-select v-model="value2" filterable placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 900px;
    height: 590px;
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
      margin-top: 13px;
      margin-right: 12px;
      cursor: pointer;
  }
  .popover-head .title{
      margin-left: 15px;
      font-weight: bold;
  }
  .popover-main{
    position: relative;
    padding-top: 10px;
  }
  .popover-main .search-box{
    position: absolute;
    right: 15px;
    top: 10px;
    height: 24px;
    line-height: 24px;
  }
  .ifame{
    width: 870px;
    height: 473px;
    margin:  0 auto;
    border: 1px solid #90CCE8;
  }
  .search-box span{
    margin-left: 10px;
  }
</style>
<style>
  .knowledgeSearch .el-tabs__header{
    padding-left: 15px;
    margin: 0 0 18px;
    border-bottom: 1px solid #90CCE8;
  }
  .knowledgeSearch .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border: 1px solid #90CCE8;
    border-bottom-color: #F0FAFF;
    border-radius: 5px 5px 0 0;
    /*color: #1476CC;*/
  }
  .knowledgeSearch .el-tabs__item {
    padding: 0 26px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
  }
  .knowledgeSearch .el-select{
    width: 72px;
  }
  .knowledgeSearch .el-input{
    font-size: 12px;
  }
  .knowledgeSearch .el-input__icon{
    width: 12px;
    right: 7px;
  }
  .knowledgeSearch .el-input__icon+.el-input__inner{
    padding-right: 20px;
  }
  .knowledgeSearch .el-input__inner{
    height: 24px;
    padding: 3px 7px;
  }
  .knowledgeSearch .el-select-dropdown__item{
    font-size: 12px;
    height: 28px;
    line-height: 1;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        activeName: 'first',
        value1: '',
        value2: '',
        options1: [{
          value: '杭州市',
          label: '杭州市'
        },{
          value: '杭州市',
          label: '杭州市'
        },{
          value: '杭州市',
          label: '杭州市'
        },{
          value: '杭州市',
          label: '杭州市'
        }],
        options2: [{
          value: '杭州市',
          label: '杭州市'
        },{
          value: '杭州市',
          label: '杭州市'
        },{
          value: '杭州市',
          label: '杭州市'
        },{
          value: '杭州市',
          label: '杭州市'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
