<template>
  <div class="demo incomingHistory">            <!-- 密码验证 -->
    <div class="popover-head">
      <span class="title">密码验证</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <span class="wordtype">密码</span>

      <el-input size="small" v-model="pre_password" class="password_input"></el-input>
      <el-button type="primary" class="bottom left10" @click="makeTurn()">验证</el-button>


    </div>




  </div>
</template>

<style scoped>

  .left10{margin-left:10px;}

  .demo{
    width: 300px;
    height:166px;
    background: #F0FAFF;
    margin-left: -50px;
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
    padding: 40px 25px;
    width: calc(100% - 50px);
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  /*---------↓*/

  .option{
    background:#00ff00;
    width:100%;
    float:left;
  }
  .wordtype{
    font-size:12px;
    line-height:40px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:left;
    /*background: #333;*/
  }



  .password_input{
    width:140px;
    float:left;
    margin-left:12px;
    margin-top:5px;
  }

  .bottom{
    position:relative;
    float:left;
    width:64px;
    height:28px;
    line-height:0px;
    font-size:12px;
    padding:10px;
    margin-top:5px;

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
        pre_password:'',
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
      makeTurn(){
          let data = this.pre_password;
        this.passwordVerifyActions(data);
        this.popoverAlert();
      },
      ...mapActions([
        'popoverAlert',
        'passwordVerifyActions'
      ])
    }
  };
</script>
