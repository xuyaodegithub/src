<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">星级权益使用详情表</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">

      <div class="option">
        <span class="wordtype black">用户于2016-05-01日成为</span>
        <span class="wordtype red">5星</span>
        <span class="wordtype black">，有效结束时间2017-04-30</span>
        </span>
      </div>


      <div class="table-head">
        <div class="table-head-item flex1"><span class="wordtype2">5星级</span></div>
        <div class="table-head-item flex2"><span class="wordtype2">积分倍增</span></div>
        <div class="table-head-item flex3"><span class="wordtype3">免费换卡（客户机）</span></div>
        <div class="table-head-item flex4"><span class="wordtype3">手机紧急开机（号码级）</span></div>
        <div class="table-head-item flex5"><span class="wordtype3">宽带紧急复机（号码级）</span></div>
        <div class="table-head-item flex6">
          <div class="table-head-item-multiter  flex7">
            <span class="wordtype3">宽带延伸服务（客户级）</span>
          </div>
          <div class="table-head-item-multiter2">
            <div class="table-head-item-multiter-bottom flex7"><span class="wordtype3">天翼智能组网优惠</span></div>
            <div class="table-head-item-multiter-bottom flex8"><span class="wordtype3">免费移机</span></div>
            <div class="table-head-item-multiter-bottom2 flex9"><span class="wordtype3">代装其他终端</span></div>
          </div>
        </div>
        <div class="table-head-item  flex10"><span class="wordtype3">国漫免保证金开通</span></div>
        <div class="table-head-item  flex11"><span class="wordtype3">星级客户经理</span></div>
        <div class="table-head-item  flex12"><span class="wordtype3">10000号优先接入</span></div>
        <div class="flex13"><span class="wordtype3">营业厅优先办理</span></div>


      </div>
      <div class="table-box">
        <div class="table-box-item-all">
          <div class="table-box-item  flex1"><span class="wordtype4">可享</span></div>
          <div class="table-box-item  flex2"><span class="wordtype4" v-html="getCrmPoint['available'].pointDouble"></span></div>
          <div class="table-box-item  flex3"><span class="wordtype4">{{getCrmPoint['available'].cardChange}}</span></div>
          <div class="table-box-item  flex4"><span class="wordtype4">{{getCrmPoint['available'].bootEmergency}}</span></div>
          <div class="table-box-item  flex5"><span class="wordtype4">{{getCrmPoint['available'].broadbandReplace}}</span></div>
          <div class="table-box-item  flex7"><span class="wordtype4">{{getCrmPoint['available'].networkOffer}}</span></div>
          <div class="table-box-item  flex8"><span class="wordtype4">{{getCrmPoint['available'].freeTransfer}}</span></div>
          <div class="table-box-item  flex9"><span class="wordtype4">{{getCrmPoint['available'].otherTerminal}}</span></div>
          <div class="table-box-item  flex10"><span class="wordtype4 blue" v-html="getCrmPoint['available'].insuranceFree"></span></div>
          <div class="table-box-item  flex11"><span class="wordtype4">{{getCrmPoint['available'].starManager}}</span></div>
          <div class="table-box-item  flex12"><span class="wordtype4">{{getCrmPoint['available'].accessPriority}}</span></div>
          <div class="flex13"><span class="wordtype4">{{getCrmPoint['available'].handlePriority}}</span></div>
        </div>
        <div class="table-box-item-all">
          <div class="table-box-item  flex1"><span class="wordtype4">已享</span></div>
          <div class="table-box-item  flex2"><span class="wordtype4" v-html="getCrmPoint['available'].pointDouble"></span></div>
          <div class="table-box-item  flex3"><span class="wordtype4">{{getCrmPoint['used'].cardChange}}</span></div>
          <div class="table-box-item  flex4"><span class="wordtype4">{{getCrmPoint['used'].bootEmergency}}</span></div>
          <div class="table-box-item  flex5"><span class="wordtype4">{{getCrmPoint['used'].broadbandReplace}}</span></div>
          <div class="table-box-item  flex7"><span class="wordtype4">{{getCrmPoint['used'].networkOffer}}</span></div>
          <div class="table-box-item  flex8"><span class="wordtype4">{{getCrmPoint['used'].freeTransfer}}</span></div>
          <div class="table-box-item  flex9"><span class="wordtype4">{{getCrmPoint['used'].otherTerminal}}</span></div>
          <div class="table-box-item  flex10"><span class="wordtype4 blue" v-html="getCrmPoint['available'].insuranceFree"></span></div>
          <div class="table-box-item  flex11"><span class="wordtype4">{{getCrmPoint['used'].starManager}}</span></div>
          <div class="table-box-item  flex12"><span class="wordtype4">{{getCrmPoint['used'].accessPriority}}</span></div>
          <div class="flex13"><span class="wordtype4">{{getCrmPoint['used'].handlePriority}}</span></div>
        </div>
        <div class="table-box-item-all">
          <div class="table-box-item  flex1"><span class="wordtype4 red">剩余</span></div>
          <div class="table-box-item  flex2"><span class="wordtype4" v-html="getCrmPoint['available'].pointDouble"></span></div>
          <div class="table-box-item  flex3"><span class="wordtype4">{{getCrmPoint['left'].cardChange}}</span></div>
          <div class="table-box-item  flex4"><span class="wordtype4">{{getCrmPoint['left'].bootEmergency}}</span></div>
          <div class="table-box-item  flex5"><span class="wordtype4">{{getCrmPoint['left'].broadbandReplace}}</span></div>
          <div class="table-box-item  flex7"><span class="wordtype4">{{getCrmPoint['left'].networkOffer}}</span></div>
          <div class="table-box-item  flex8"><span class="wordtype4">{{getCrmPoint['left'].freeTransfer}}</span></div>
          <div class="table-box-item  flex9"><span class="wordtype4">{{getCrmPoint['left'].otherTerminal}}</span></div>
          <div class="table-box-item  flex10"><span class="wordtype4 blue" v-html="getCrmPoint['available'].insuranceFree"></span></div>
          <div class="table-box-item  flex11"><span class="wordtype4">{{getCrmPoint['left'].starManager}}</span></div>
          <div class="table-box-item  flex12"><span class="wordtype4">{{getCrmPoint['left'].accessPriority}}</span></div>
          <div class="flex13"><span class="wordtype4">{{getCrmPoint['left'].handlePriority}}</span></div>
        </div>



      </div>


    </div>




  </div>
</template>

<style scoped>
  .flex1{flex:50}
  .flex2{flex:69}
  .flex3{flex:68}
  .flex4{flex:92}
  .flex5{flex:84}
  .flex6{flex:239}
  .flex7{flex:103}
  .flex8{flex:54}
  .flex9{flex:80}
  .flex10{flex:62}
  .flex11{flex:58}
  .flex12{flex:70}
  .flex13{flex:67}




  .demo{
    width: 900px;
    height: 250px;
    background: #F0FAFF;
    margin-left: -350px;
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
  .popover-main{
    padding: 20px 14px;
    width: calc(100% - 28px);
  }
  /*---------↓*/

  .option{
    /*background:#00ff00;*/
    width:100%;
    float:left;
    margin-bottom:5px;
  }
  .wordtype{
    font-size:12px;
    line-height:24px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    float:left;
    /*background: #333;*/
  }
  .wordtype2{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    /*float:left;*/
    line-height: 50px;
    color: #333;
    text-align:center;
    display:block;
    font-weight:bold;
  }
  .wordtype3{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    /*float:left;*/
    line-height: 25px;
    color: #333;
    text-align:center;
    display:block;
    font-weight:bold;
  }
  .wordtype4{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    /*float:left;*/
    line-height: 25px;
    color: #333;
    text-align:center;
    display:block;
  }
  .red{
    color:#F44848;
  }
  .black{
    color:#333;
  }
  .blue{
    color:#1476CC;
  }

  .small{
    flex:0.5;
  }
  .middle{
    flex:2;
  }
  .big{
    flex:3;
  }
  /*---------↑*/
  .table-head{
    display: flex;
    flex-direction: row;
    height: 50px;
    background: #F1F4F7;
    border: 1px solid #E7ECF1;
  }
  .table-head-item{
    /*flex:1;*/
border-right:1px solid #D9E5EF;
  }
  .table-head-item-multiter{
    border-bottom:1px solid #D9E5EF;
    height:25px;
    width:100%;
    /*background:#00ff00;*/
  }
  .table-head-item-multiter2{
    height:25px;
    width:100%;
    /*background:#00ff00;*/
    display:flex;
    flex-direction:row;
  }
  .table-head-item-multiter-bottom{
    /*flex:1;*/
    height:25px;
    width:100%;
    /*background:#888;*/
    border-right:1px solid #D9E5EF;

  }
  .table-head-item-multiter-bottom2{
    height:25px;
    width:100%;
    /*background:#888;*/

  }

  .table-box{
    height: 86px;
    overflow: hidden;
    background: #ffffff;
    /*display: flex;*/
    /*flex-direction: row;*/
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-box-item-all{
    /*flex:1;*/
    width:100%;
    display:flex;
    flex-direction:row;
    height:30px;
    line-height:30px;
    border-bottom:1px solid #E7ECF1;
  }

  .table-box-item{
    border-right:1px solid #D9E5EF;
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
        'getCrmPoint'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },

      ...mapActions([
        'popoverAlert'
      ])
    }
  };
</script>
