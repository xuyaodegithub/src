<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">套餐使用详情</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="popover-main-title">
        <span>套餐名称：{{freeResourceAlertData[1]['productName']}}</span>
        <span>总量：{{parseFloat(freeResourceAlertData[1]['totalResource']).toFixed(2)}}</span>
        <span>使用量：{{parseFloat(freeResourceAlertData[1]['usedResource']).toFixed(2)}}</span>
        <span v-if="freeResourceAlertData[1]['restResource']>=0">剩余：{{parseFloat(freeResourceAlertData[1]['restResource']).toFixed(2)}}</span>
        <span v-if="freeResourceAlertData[1]['restResource']<0">剩余：0</span>
        <span v-if="freeResourceAlertData[1]['restResource']<0">超出量：{{parseFloat(-freeResourceAlertData[1]['restResource']).toFixed(2)}}</span>
        <span v-if="freeResourceAlertData[1]['restResource']>=0">超出量：0</span>
      </div>
      <div class="box-top">
        <div class="table-head">
          <div class="head-item big"><span>资源名称</span></div>
          <div class="head-item big"><span>使用量</span></div>
          <div class="head-item big"><span>超出量</span></div>
          <div class="head-item"><span>单位</span></div>
        </div>
        <div class="table-box">
          <div class="table-list">
            <div class="head-item big"><span>流量</span></div>
            <div class="head-item big"><span>{{flow()}}</span></div>
            <div class="head-item big"><span>{{flowOut()}}</span></div>
            <div class="head-item"><span>MB</span></div>
          </div>
          <div class="table-list">
            <div class="head-item big"><span>语音</span></div>
            <div class="head-item big"><span>{{sound()}}</span></div>
            <div class="head-item big"><span>{{soundOut()}}</span></div>
            <div class="head-item"><span>分钟</span></div>
          </div>
          <div class="table-list">
            <div class="head-item big"><span>短信</span></div>
            <div class="head-item big"><span>{{message()}}</span></div>
            <div class="head-item big"><span>{{messageOut()}}</span></div>
            <div class="head-item"><span>条</span></div>
          </div>
        </div>
      </div>
    </div>
    <span class="popover-btn" @click="popoverAlert()">确定</span>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height: auto;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -220px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-main-title{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .popover-main-title span{
    margin-right: 10px;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 15px auto;
    font-size: 12px;
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
    padding-right: 20px;
    padding-left: 20px;
  }
  .popover-main .box-top{
    width: 100%;
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
    height: auto;
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
        'balanceDetail','freeResourceAlertData'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      flow(){
          if(this.freeResourceAlertData[2]==''){
              let number =parseFloat(this.freeResourceAlertData[1]['usedResource']) - parseFloat(this.freeResourceAlertData[1]['usedSms']) - parseFloat(this.freeResourceAlertData[1]['usedVoice']);
              return number.toFixed(2)
          }else{
              let number =parseFloat(this.freeResourceAlertData[2]['freeResUsed'])-parseFloat(this.freeResourceAlertData[2]['smsValue'])-parseFloat(this.freeResourceAlertData[2]['csValue']);
            return number.toFixed(2)
          }
      },
      flowOut(){
        if(this.freeResourceAlertData[2]==''){
          if(this.freeResourceAlertData[1]['isExtend']=='Y'){
            return '0.00';
          }else{
              if(parseFloat(this.freeResourceAlertData[1]['restResource'])<0){
                  let number =parseFloat(this.freeResourceAlertData[1]['restResource']) - parseFloat(this.freeResourceAlertData[1]['overdueVoice']) - parseFloat(this.freeResourceAlertData[1]['overdueSms']);
                  return number.toFixed(2)
              }else{
                  return '0.00';
              }

          }
        }else{
          return '--';
        }
      },
      sound(){
        if(this.freeResourceAlertData[2]==''){
          return parseFloat(this.freeResourceAlertData[1]['usedVoice']).toFixed(2);
        }else{
          return parseFloat(this.freeResourceAlertData[2]['csValue']).toFixed(2);
        }
      },
      soundOut(){
        if(this.freeResourceAlertData[2]==''){
          if(this.freeResourceAlertData[1]['isExtend']=='Y'){
            return '0.00';
          }else{
            return parseFloat(this.freeResourceAlertData[1]['overdueVoice']).toFixed(2);
          }
        }else{
          return '--';
        }
      },
      message(){
        if(this.freeResourceAlertData[2]==''){
          return parseInt(this.freeResourceAlertData[1]['usedSms'])
        }else{
          return parseInt(this.freeResourceAlertData[2]['smsValue'])
        }
      },
      messageOut(){
        if(this.freeResourceAlertData[2]==''){
          if(this.freeResourceAlertData[1]['isExtend']=='Y'){
            return '0';
          }else{
            return parseInt(this.freeResourceAlertData[1]['overdueSms']);
          }
        }else{
          return '--';
        }
      },
      ...mapActions([
        'popoverAlert'
      ])
    }
  };
</script>
