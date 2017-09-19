<template>
  <div class="demo incomingHistory">            <!-- 短信-创建拨号连接 -->
    <div class="popover-head">
      <span class="title">短信-创建拨号连接</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">


      <div class="option top5">
        <span class="wordtype2">发送号码</span>
        <el-input size="small" v-model="pre_number" class="number_input"></el-input>
        <!--<input type="text" class="number_input" />-->
        <el-button type="primary" class="bottom1 left15">业务号</el-button>
        <el-button type="primary" class="bottom2">短信发送</el-button>

      </div>

      <div class="option top5">
        <span class="wordtype">请确认用户操作系统 - Windows系统询问桌面图标：</span>
        <div class="wordtype_block">
          <span class="wordtype3">XP：我的电脑</span>
          <span class="wordtype3"> Win7：计算机</span>
          <span class="wordtype3">Win8：这台电脑 </span>
          <span class="wordtype3">Win10：此电脑</span>
        </div>
      </div>
      <div class="option top5">
        <div class="width20">
        <span class="wordtype2">内容：</span>
        </div>
        <!--<input type="text" class="number_input2" />-->
        <el-input
          type="textarea"
          rows="3"
          v-model="textarea"
          class="mul_text"
          resize="none">
        </el-input>
      </div>

      <div class="option top5">
        <div class="wordtype2 left40">选择操作系统</div>

        <div class="clickbutton bk-change-normal1"><span class="smallface ">Win10</span></div>
        <div class="clickbutton bk-change-normal1"><span class="smallface ">Win7/8</span></div>
        <div class="clickbutton bk-change-normal1"><span class="smallface ">XP</span></div>
        <div class="clickbutton bk-change-normal1"><span class="smallface ">苹果</span></div>
      </div>




    </div>




  </div>
</template>

<style scoped>

  .left11{margin-left:11px;}
  .left12{margin-left:12px;}
  .left13{margin-left:13px;}
  .left15{margin-left:15px;}
  .left17{margin-left:17px;}
  .left25{margin-left:25px;}
  .left40{margin-left:40px;}
  .floatleft{float:left;}
  .top12{margin-top:12px;}
  .top5{margin-top:5px;}
  .top15{margin-top:15px;}
  .height20{height:28px;}


  .demo{
    width: 600px;
    height:285px;
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
    padding: 10px 14px;
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
    height:auto;
    float:left;
  }
  .wordtype{
    font-size:12px;
    line-height:24px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#666;
    float:left;
    /*background: #333;*/
    position: relative;
  }

  .wordtype2{
    font-size:12px;
    line-height:40px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    position: relative;
    float:left;

  }
  .wordtype3{
    font-size:14px;
    line-height:24px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    position: relative;
    float:left;
    margin-left:30px;
  }
  .wordtype_block{
    width:100%;
    float:left;
  }

  .number_input{
    width:140px;
    float:left;
    margin-left:5px;
    margin-top:5px;
  }

  .bottom1{
    position:relative;
    float:left;
    width:64px;
    height:28px;
    line-height:0px;
    font-size:12px;
    padding:10px;
    margin-top:5px;

  }
  .bottom2{
    position:relative;
    float:left;
    width:68px;
    height:28px;
    line-height:0px;
    font-size:12px;
    padding:10px;
    margin-top:5px;
  }

  .mul_text{
    width:529px;
    float:left;
    margin-top:5px;
  }

  .bk-change-normal1{
    background: url("../../../assets/img/linear_gray.jpg") center top repeat;
  }


  .clickbutton{
    border:1px solid #D2D4D6;
    border-radius:4px;
    float:left;
    cursor: pointer;
    width:64px;
    height:28px;
    margin-left:10px;
    margin-top:3px;

    display:flex;
    justify-content:center;
    align-items: center;
  }

  .smallface{
    font-size:12px;
    line-height:28px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    /*float:left;*/
    /*position: relative;*/
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
        pre_number:'',
        textarea:'',

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
