<template>
  <div class="demo dealDetail">
    <div class="popover-head">
      <span class="title">业务号码轨迹明细</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                             class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="业务号码轨迹明细" name="first">
          <div class=" yewu-content">

            <label>号码类型</label>
            <el-select v-model="query.type" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <label>日期(天数)</label>
            <el-select v-model="query.date" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="popover-btn">查询</span>

            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="huru"
                label="呼入电话"
                width="74">
              </el-table-column>
              <el-table-column
                prop="yewu"
                label="业务号码"
                width="74">
              </el-table-column>
              <el-table-column
                prop="time"
                label="操作时间"
                width="115">
              </el-table-column>
              <el-table-column
                prop="gonghao"
                label="工号"
                width="40">
              </el-table-column>
              <el-table-column
                prop="guiji"
                label="轨迹名称"
                width="119">
              </el-table-column>
              <el-table-column
                prop="keys"
                label="关键词"
                width="74">
              </el-table-column>
              <el-table-column
                prop="bianhao"
                label="编号"
                width="74">
              </el-table-column>
              <el-table-column
                prop="remarks"
                label="备注"
                width="74">
              </el-table-column>
            </el-table>

          </div>
        </el-tab-pane>
        <el-tab-pane label="IVR轨迹明细" name="second">
          IVR轨迹明细
        </el-tab-pane>
        <el-tab-pane label="PcBox轨迹明细" name="third">
          PcBox轨迹明细
        </el-tab-pane>
      </el-tabs>

      <div class="pageing-box">
        <span class="left">显示1- 4条，共4条</span>
        <span class="right">
          <i class="iconfont icon-dL"></i><i class="iconfont icon-toLeft"></i>
          <span>第<span class="square-box">1</span>页，共1页</span>
          <i class="iconfont icon-toRight"></i><i class="iconfont icon-dR"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    width: 900px;
    /*height: 672px;*/
    background: #F0FAFF;
    margin-left: -450px;
    margin-top: -300px;
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
    color: #A1C1E2;
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
    padding-top: 15px;
  }

  .yewu-content{
    padding: 0 15px;
  }
  .yewu-content .el-select{
    margin: 0 15px 0 10px;
    width: 109px;
    font-size: 12px;
  }
  .yewu-content .popover-btn{
    display: inline-block;
    width: 54px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
  }
  .pageing-box{
    margin: 15px 15px 19px 15px;
    height: 28px;
    line-height: 28px;
  }
  .pageing-box .left{
    float: left;
  }
  .pageing-box .right{
    float: right;
  }
  .pageing-box .icon-toLeft,.icon-toRight{
    margin: 0 9px;
  }
  .pageing-box .square-box{
    display: inline-block;
    width: 36px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #1D9BD9;
    border: 1px solid #E5E5E5;
    background: #ffffff;
    margin: 0 4px;
  }
</style>
<style>
  .dealDetail .el-tabs__header {
    border-bottom: 1px solid #90CCE8;
    padding-left: 15px;
  }

  .dealDetail .dealDetail .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border: 1px solid #90CCE8;
    border-bottom: 1px solid #F0FAFF;
    border-radius: 5px 5px 0 0;
    color: #1476CC;
  }
  .dealDetail .el-table{
    margin-top: 12px;
    height: 480px;
  }
  .dealDetail .el-tabs__item {
    height: 28px;
    line-height: 28px;
  }
  .dealDetail .yewu-content .el-input{
    font-size: 12px;
  }
  .dealDetail .yewu-content .el-input__inner{
    height: 28px;
  }
  .dealDetail .yewu-content .el-input__icon{
    width: 25px;
  }
  .dealDetail .yewu-content .el-input__icon+.el-input__inner{
    padding-right: 22px;
  }
  .dealDetail .el-table__header{
    width: 869px!important;
  }
  .dealDetail .el-table__body{
    width: 869px!important;
  }
  .dealDetail .el-table th>.cell{
    line-height: 14px!important;
  }
  .dealDetail .el-table .cell, .el-table th>div{
    padding: 0 0 0 9px;
  }
  .dealDetail .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border: 1px solid #90CCE8;
    border-bottom-color: #F0FAFF;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        activeName2: 'first',
        query: {
          type: '',
          date: ''
        },
        options1: [{
          value: '业务号码',
          label: '业务号码'
        },{
          value: '业务号码',
          label: '业务号码'
        }],
        options2: [{
          value: '5',
          label: '5'
        },{
          value: '6',
          label: '6'
        }],
        tableData: [{
          huru: '13398789998',
          yewu: '13398789998',
          time: '2017/05/04  19:32:42',
          gonghao:'zj2005',
          guiji:'后付费催缴提醒查询',
          keys:'',
          bianhao:'',
          remarks:'查询条件...'
        },{
          huru: '13398789998',
          yewu: '13398789998',
          time: '2017/05/04  19:32:42',
          gonghao:'zj2005',
          guiji:'后付费催缴提醒查询',
          keys:'',
          bianhao:'',
          remarks:'查询条件...'
        },{
          huru: '13398789998',
          yewu: '13398789998',
          time: '2017/05/04  19:32:42',
          gonghao:'zj2005',
          guiji:'后付费催缴提醒查询',
          keys:'',
          bianhao:'',
          remarks:'查询条件...'
        },{
          huru: '13398789998',
          yewu: '13398789998',
          time: '2017/05/04  19:32:42',
          gonghao:'zj2005',
          guiji:'后付费催缴提醒查询',
          keys:'',
          bianhao:'',
          remarks:'查询条件...'
        },{
          huru: '13398789998',
          yewu: '13398789998',
          time: '2017/05/04  19:32:42',
          gonghao:'zj2005',
          guiji:'后付费催缴提醒查询',
          keys:'',
          bianhao:'',
          remarks:'查询条件...'
        },{
          huru: '13398789998',
          yewu: '13398789998',
          time: '2017/05/04  19:32:42',
          gonghao:'zj2005',
          guiji:'后付费催缴提醒查询',
          keys:'',
          bianhao:'',
          remarks:'查询条件...'
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
