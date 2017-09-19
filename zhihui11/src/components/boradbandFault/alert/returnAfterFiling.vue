<template>
  <div class="demo incomingHistory">            <!-- 归档后回访 -->
    <div class="popover-head">
      <span class="title">归档后回访</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <div class="option">
        <span class="wordtype">确定归档后自动回访用户？</span>
        <span class="wordtype">
          请注意提醒用户：
          <span class="red">
          尊敬的客户，10分钟后我们会再次与您联系确认故障恢复情况，请您保持电话畅通，
          期间建议您设置并重启电脑/猫/路由、重新接好线路。您可使用手机QQ点击“联系人”，“公众号”，
          查找“中国电信”公众号-找到并点击“宽带排障”进行故障快速报修，或拨打10000按4号键进行宽带自助排障和快速报修。
          </span>
        </span>
      </div>

      <div class="option2 ">
        <!--<div class="buttoncenter">-->
        <el-button type="primary" class="leftwid">是</el-button>
        <el-button type="primary" class="leftwid">否</el-button>
        <!--</div>-->
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
    height:234px;
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
    padding: 15px 14px;
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
    float:left;
  }
  .option2{
    /*background:#00ff00;*/
    width:100%;
    float:left;
    margin-top:12px;
  }
  .wordtype{
    font-size:14px;
    line-height:24px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:left;
    /*background: #888;*/
  }

  .red{
    color:#F44848;
  }

  .buttoncenter{
    display:block;
    margin:0 auto;
    /*float:left;*/
    background: #888;
  }

  .leftwid{
    margin-left:calc(40%);
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
