<template>
  <div class="demo transfer">
    <div class="popover-head">
      <span class="title">转接</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                       class="el-icon-close"></i>
    </div>

    <div class="popover-main">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="转接" name="first">
          <div class="row">
            <span class="txt">转接类型</span>
            <el-select v-model="transfer_type1">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="row last-row">
            <span class="txt">目标号码</span>
            <el-input v-model="target_num1" placeholder=""></el-input>
          </div>
        </el-tab-pane>
        <el-tab-pane label="咨询（两步转）" name="second">咨询（2）</el-tab-pane>
        <el-tab-pane label="咨询（两步自动转）" name="third">
          <div class="main-top">
            <div class="row">
              <span class="txt">转接类型</span>
              <el-select v-model="transfer_type2">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="transfer_type3" class="short_select">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="row">
              <span class="txt">目标号码</span>
              <el-input v-model="target_num2"></el-input>
            </div>
            <div class="row last-row">
              <span class="txt">技能组名称</span>
              <el-input v-model="skill_name"></el-input>
            </div>
          </div>
          <div class="main-bottom">
            <p class="jhqk"><span>目前专席接话情况</span><i class="iconfont icon-shuaxin"></i><span class="shuaxin">刷新</span></p>
            <div class="row"><span class="txt">登录数 :</span><span class="jhqk_data">{{jhqk.denglu}}</span></div>
            <div class="row"><span class="txt">空闲数 :</span><span class="jhqk_data">{{jhqk.kongxian}}</span></div>
            <div class="row"><span class="txt">外等数 :</span><span class="jhqk_data">{{jhqk.waideng}}</span></div>

          </div>
        </el-tab-pane>
        <el-tab-pane label="三方通话" name="fourth">三方通话</el-tab-pane>
      </el-tabs>
    </div>
    <span class="popover-btn">转接</span>
  </div>
</template>

<style scoped>
  .demo {
    width: 400px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -150px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    color: #333333;
  }

  .popover-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-head i {
    float: right;
    color: #CECECE;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 12px;
    font-weight: bold;
  }

  .popover-main {
    width: 100%;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-main .row {
    padding: 5px 0;
  }

  .popover-main .row.last-row {
    margin-bottom: 10px;
  }

  .popover-main .txt {
    display: inline-block;
    font-size: 12px;
    margin-right: 5px;
    width: 81px;
    text-align: right;
  }
  .popover-main .main-top{
    border-bottom: 1px solid #C5E2F0;
  }
  .main-bottom{
    margin: 15px 0 15px 0;
  }
  .main-bottom .jhqk{
    margin:0 0 5px 20px;
  }
  .main-bottom .icon-shuaxin{
    margin-left: 20px;
    color: #1D9BD9;
  }
  .main-bottom .shuaxin{
    margin-left: 3px;
    color: #1D9BD9;
    cursor: pointer;
  }
  .main-bottom .jhqk_data{
    color: #F71818;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 15px auto;
  }
</style>
<style>
  .transfer .el-tabs__header {
    border-bottom: 1px solid #90CCE8;
  }

  .transfer .el-tabs__nav {
    padding-left: 15px;
    margin-top: 10px;
  }

  .transfer .el-tabs__item {
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    font-size: 12px;
    color: #333333;
  }

  .transfer .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border: 1px solid #90CCE8;
    border-bottom: 1px solid #F0FAFF;
    border-radius: 5px 5px 0 0;
    color: #1476CC;
  }

  .transfer .el-input {
    font-size: 12px;
    width: auto;
  }

  .transfer .el-select .el-input__inner {
    width: 150px;
    height: 30px;
  }

  .transfer .short_select {
    margin-left: 6px;
  }

  .transfer .short_select .el-input__inner {
    width: 121px;
  }

  .transfer .el-input__inner {
    width: 150px;
    height: 30px;
  }

  .el-select-dropdown__item {
    font-size: 12px;
  }

</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        activeName2: 'first',
        transfer_type1: '',
        transfer_type2: '',
        transfer_type3: '',
        target_num1: '373',
        target_num2: '373',
        skill_name: '高技能组',
        options1: [{
          value: '选项1',
          label: '转坐席工号'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '转技能组标识'
        }, {
          value: '选项2',
          label: '转技能组标识'
        }, {
          value: '选项3',
          label: '转技能组标识'
        }],
        options3: [{
          value: '选项1',
          label: '杭州区域分点'
        }, {
          value: '选项2',
          label: '杭州区域分点'
        }, {
          value: '选项3',
          label: '杭州区域分点'
        }],
        jhqk:{
          denglu: '25',
          kongxian: '0',
          waideng: '1'
        }
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

