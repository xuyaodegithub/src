<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">服务协同</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="option">
      <span class="wordtype">话术:</span><br/>
      <span class="wordtype">
        近期发现您有使用过我们的电信营业厅客户端，后续也可以随时通过手机APP电信营业厅直
        接相关费用，非常方便。
      </span>
    </div>
    <div class="option2">
      <span class="wordtype lineheight40 fontsize12">发送号码</span>
      <el-input v-model="pre_card_prepaid_number" placeholder="输入查询" class="number_input"></el-input>
      <el-button type="primary" class="left15">业务号</el-button>
      <el-button type="primary" class="left15">短信发送</el-button>
    </div>
    <div class="option3">
      <span class="wordtype">短信内容:</span><br/>
      <span class="wordtype">
        尊敬的客户，下载登陆“电信营业厅”客户端 ，可以享受余额/账单查询、流量包订购、宽带排障、在线客服等便捷服务，
       下载方法： http://www.189.cn/client/。如有疑义，您可点击首页圆框中语音或流量，进入后点击右上角客服MM图标进行
       人工服务或直接通过短信编辑疑义问题发送至10001000进入免费的人工服务为您解答。
      </span>

    </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height: 305px;
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
    padding: 20px 12.5px;
    width: calc(100% - 25px);
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  /*---------↓*/

  .option{
    height:70px;
    /*background:#00ff00;*/
    margin-top:12px;
    margin-left:14px;
    width: calc(100% - 28px);          /*  设置宽度比100%的宽度少28px  */
    float:left;
  }
  .option2{
    height:30px;
    /*background:#42d885;*/
    margin-left:14px;
    margin-top:10px;
    width: calc(100% - 28px);
    float:left;
  }
  .option3{
    height:117px;
    /*background:#00ffff;*/
    margin-left:14px;
    margin-top:10px;
    width: calc(100% - 28px);
    float:left;
  }
  .wordtype{
    font-size:14px;
    line-height:24px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:left;
  }
  .number_input{
    width:140px;
    /*height:28px;*/
    margin-left:7px;
    float:left;

  }
  .fontsize12{
    font-size:12px;
  }
  .lineheight30{
    line-height:30px;
  }

  .lineheight40{
    line-height:40px;
  }

  .left10{
    margin-left:10px;
    float:left;
  }
  .left15{
    margin-left:15px;
    float:left;
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
    flex: 4;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 270px;
    overflow: auto;
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list{
    width: 100%;
    display: flex;
    height: 50px;
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
        pre_card_prepaid_number:' ',
      };
    },
    computed:{
      ...mapGetters([
        ''
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
