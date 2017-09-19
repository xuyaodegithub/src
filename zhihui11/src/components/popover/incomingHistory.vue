<template>
  <div class="demo incomingHistory">
      <div class="popover-head">
          <span class="title">呼入历史明细</span><span class="small-title">（仅显示前50条）</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <div class="box-top">
          <div class="table-head">
              <div class="head-item big"><span>呼入电话</span></div>
              <div class="head-item big"><span>开始时间</span></div>
              <div class="head-item big"><span>结束时间</span></div>
              <div class="head-item big"><span>满意度调查</span></div>
              <div class="head-item"><span>状态</span></div>
          </div>
          <div class="table-box">
            <div class="table-list" v-for="item in incomingHistory">
              <div class="head-item big"><span>{{item.contactValue}}</span></div>
              <div class="head-item big"><span>{{item.actualStartDate}}</span></div>
              <div class="head-item big"><span>{{item.actualEndDate}}</span></div>
              <div class="head-item big" v-if="item.score=='1'"><span>非常满意</span></div>
              <div class="head-item big" v-else-if="item.score=='2'"><span>满意</span></div>
              <div class="head-item big" v-else-if="item.score=='3'"><span>对客服代表不满意</span></div>
              <div class="head-item big" v-else-if="item.score=='4'"><span>对其他不满意</span></div>
              <div class="head-item big" v-else="!item.score"><span>未调查</span></div>
              <div class="head-item"><span class="blue" @click="searchDetail(item)">详细</span></div>
            </div>
          </div>
        </div>

        <p class="title">呼入电话操作轨迹明细</p>
        <div class="box-top">
          <div class="table-head">
            <div class="head-item"><span>轨迹名称</span></div>
            <div class="head-item big"><span>业务号码</span></div>
            <div class="head-item big"><span>操作时间</span></div>
            <div class="head-item big"><span>工单编号</span></div>
            <div class="head-item"><span>员工编号</span></div>
          </div>
          <div class="table-box">
            <div class="table-list" v-for="item in callDetail">
              <el-tooltip class="item" effect="dark" :content="item.actionNum" placement="right">
                <div class="head-item"><span>{{item.actionNum | wordLimitFour}}</span></div>
              </el-tooltip>
              <div class="head-item big"><span>{{item.businessNum}}</span></div>
              <div class="head-item big"><span>{{item.operateTime}}</span></div>

              <el-tooltip class="item" effect="dark" :content="item.workNum" placement="right">
                <div class="head-item big"><span v-if="item.workNum!=null">{{item.workNum | wordLimitSix}}</span></div>
              </el-tooltip>
              <div class="head-item"><span>{{item.staffIdA}}</span></div>
              <!--<div class="head-item" v-if="item.score=='2'"><span>满意</span></div>-->
              <!--<div class="head-item" v-if="item.score=='3'"><span>对客服代表不满意</span></div>-->
              <!--<div class="head-item" v-if="item.score=='4'"><span>对其他不满意</span></div>-->
              <!--<div class="head-item" v-if="!item.score"><span>未调查</span></div>-->
              <!--<div class="head-item"><span class="blue" @click="searchDetail()">详细</span></div>-->
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height: 440px;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -220px;
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
  .popover-head .small-title{
    font-size: 12px;
    color: #999999;
    font-weight: normal;
  }
  .popover-main{
    padding: 20px 12.5px;
    width: calc(100% - 25px);
  }
  .popover-main .box-top{
    width: 575px;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .table-head{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #F1F4F7;
    border: 1px solid #E7ECF1;
  }
  .table-head .head-item{
    width: 100%;
    flex: 1;
  }
  .table-head .big{
    width: 100%;
    flex: 2;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 120px;
    overflow: auto;
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #ffffff;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list .head-item{
    width: 100%;
    flex: 1;
  }
  .table-list .head-item .blue{
    color: #1476CC;
    cursor: pointer;
  }
  .table-list .big{
    width: 100%;
    flex: 2;
  }
  .table-list .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }
  .popover-main .title{
    margin: 15px 0 12px 0;
    font-weight: 500;
  }
</style>
<script>

  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {

      };
    },
    computed:{
      ...mapGetters([
          'incomingHistory','callDetail'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      searchDetail(item){
        this.searchCallDetail(item);
      },
      ...mapActions([
        'popoverAlert','searchCallDetail'
      ])
    }
  };
</script>
