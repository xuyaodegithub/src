<template>
  <div class="demo incomingHistory">            <!-- 一键修复 -->
    <div class="popover-head">
      <span class="title">一键修复</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <div class="option">
        <div class="option_1"><span class="wordtype1" v-html="repairReturn('清session结果:'+oneKeyRepair.clearSessionResult)"></span></div>
        <div class="option_1"><span class="wordtype1" v-html="repairReturn('清绑定结果:'+oneKeyRepair.clearBindingResult)"></span></div>
        <div class="option_1"><span class="wordtype1" v-html="repairReturn('端口复位结果:'+oneKeyRepair.resetPortResult)"></span></div>
        <div class="option_1" v-if="oneKeyRepair.reConfigGatewayResult"><span class="wordtype1" v-html="repairReturn('家庭网关重新下发结果:'+oneKeyRepair.reConfigGatewayResult)"></span></div>
      </div>

      <div class="option2">
        <el-button type="primary" class="buttonclick" @click="popoverAlert()">确定</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height:205px;
    background: #F0FAFF;
    margin-left: -200px;
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
  .popover-head i{          /*头关闭按钮*/
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
    padding: 12px 14px;
    width: calc(100% - 28px);
    /*background: #888;*/
    float:left;
    position: relative;
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  /*---------↓*/

  .option{
    /*background:#00ff00;*/
    width:100%;
    height:auto;
    float:left;
    position: relative;
  }
  .option_1{
    float:left;
    width:100%;
    height: auto;

  }
  .option2{
    width:100%;
    height:auto;
    float:left;
    position: relative;
    margin-top:10px;
  }
  .wordtype{
    font-size:12px;
    line-height:40px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#F44848;
    float:left;
    background: #333;
  }
  .wordtype1{
    font-size:14px;
    line-height:24px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:left;
  }

  .buttonclick{
    display: block;
    margin:0 auto;


  }


  /*---------↑*/
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
    height: 29px;
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
        'oneKeyRepair'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      repairReturn(item){
        this.recordingLogActions(item);
        if(item){
          return item;
        }
      },
      ...mapActions([
        'popoverAlert',
        'recordingLogActions'
      ])
    }
  };
</script>
