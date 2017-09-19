<template>
  <div class="demo incomingHistory">            <!-- 短信-测速 -->
    <div class="popover-head">
      <span class="title">短信-测速</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">

      <div class="option">
      <span class="wordtype">尊敬的用户，测速方式详见：http://189.io/CQLzdV，测速时建议只开一台电脑，关闭所有下载、游戏、视频，包括用家里无线的手机。
        </span>
      </div>

      <div class="option top12">
        <span class="wordtype2">发送号码</span>
        <el-input v-model="pre_card_prepaid_number" class="number_input"></el-input>
        <el-button type="primary" class="left15 floatleft">业务号</el-button>
        <el-button type="primary" class="left15 floatleft">短信发送</el-button>

      </div>



    </div>




  </div>
</template>

<style scoped>
  .left15{margin-left:15px;}
  .floatleft{float:left;}
  .top12{margin-top:12px;}

  .demo{
    width: 600px;
    height:160px;
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
    padding: 12px 15px;
    width: calc(100% - 28px);
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
    position: relative;
    float:left;
  }
  .wordtype{
    font-size:14px;
    line-height:24px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    position: relative;
    float:left;
    /*background: #333;*/
  }
  .wordtype2{
    font-size:12px;
    line-height:40px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    position: relative;
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
    flex: 2;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
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


  .number_input{
    width:140px;
    /*height:28px;*/
    margin-left:7px;
    float:left;

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
