<template>
  <div class="head-myself">
    <div class="head-myself-top">
      <div class="myself-item-all">
        <span>{{enterCase.name}}  </span>
        <span>{{enterCase.accountCode}} </span>
        <!--<div class="myself-item" @click="open()" data-title="登入"><i class="iconfont icon-people"></i></div>-->
        <el-badge :value="messageNums.sum" class="myself-item-icon">
          <div class="myself-item" data-title="消息阅读">
              <i class="iconfont icon-message" v-on:click="showMsgReadWinTurn"></i>
          </div>
        </el-badge>
        <div class="myself-item" data-title="记事本" v-on:click="popoverAlert('vNodePad')"><i class="iconfont icon-iconfontjilufuzhi"></i></div>
        <div class="myself-item" v-on:click="popoverAlert('vMSGCount')" data-title="统计"><i class="iconfont icon-tongji"></i></div>
        <div class="myself-item" v-on:click="popoverAlert('vFeedback')" data-title="我要反馈"><i class="iconfont icon-pingjiajilu"></i></div>
        <!--<div class="myself-item" data-title="换肤"><i class="iconfont icon-yifu"></i></div>-->
        <div class="myself-item" data-title="退出" @click="outLogin"><i class="iconfont icon-icon"></i></div>
      </div>
    </div>
    <div class="head-myself-bottom">
      <!--<div class="myself-bottom-item">
        <div class="item-circle"></div><span>就绪</span>
      </div>
      <div class="myself-bottom-item">
        <div class="item-circle"></div><span>忙</span>
      </div>-->
      <div class="myself-bottom-item out" id="msgBoxDiv" style="padding-right: 10px">
        <div id="msgBoxcircle" class="item-circle"></div><span id="msgBox">未登录  </span>
      </div>
      <div class="myself-bottom-time">
        <p>  通话时间 <span id="inpPhoneCount">0</span> 秒</p>
      </div>

    </div>
  </div>

</template>

<script>

  import vFeedback from '../popover/feedback.vue'
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {

      };
    },
    computed:{
      ...mapGetters([
          'messageNums','enterCase'
      ])
    },
    mounted: function () {

    },
    methods: {
      ...mapActions([
        'popoverAlert','showMsgReadWinTurn','clearAll','turnIndex'
      ]),
      outLogin(){
        if(COMMOBJ.LogonFlag==1){
          this.$message({
            message:'软电话已登录，不能退出!',
            type: 'warning'
          })
        }else{
          window.sessionStorage.setItem('token','');
          console.log(window.sessionStorage.getItem('token'))
          console.log(this.$store.state.editor.token)
          this.$router.push('/login');
          document.location.reload();
        }
      }
    }
  };
</script>
<style>

  .myself-item-icon {
  }
  .myself-item-icon .el-badge__content{
    font-size: 12px !important;

    -webkit-transform: scale(0.70) !important;   /* for Chrome || Safari */
    -moz-transform: scale(0.70) !important;    /* for Firefox */
    -ms-transform: scale(0.70) !important;       /* for IE */
    -o-transform: scale(0.70) !important;      /* for Opera */
    margin-top: -8px !important;
    margin-right: -20px !important;
  }
</style>
<style scoped>
  .head-call-all .item-icon i{
    font-size: 18px;
  }
  .head-call-all .item-icon p{
    font-size: 13px;
    margin-top: 4px;
  }

  .head-myself-top{
    width: 100%;
    height: 30px;
  }
  .head-myself-bottom{
    width: 100%;
    height: 30px;
  }
  .myself-item-all{
    color: #ffffff;
    display: table;
    margin-top: 5px;
    float: right;
    margin-right: 5px;
  }
  .myself-item-all span{
    font-size: 12px;
  }
  .myself-item{
    display:table-cell;
    text-align: center;
    width: 34px;
    line-height: 26px;
    height: 26px;
    cursor: pointer;
    color: #ffffff;
    position: relative;
  }
  .myself-item:hover::after{
    content: attr(data-title);
    font-size: 12px;
    border-radius: 5px;
    position: absolute;
    top: 25px;
    left:50%;
    transform: translateX(-50%);
    color: #fff;
    width: auto;
    padding: 3px;
    min-width: 60px;
    border: 1px solid #fff;
    background: #177cb0;
    /*line-height: 16px;*/
  }
  .head-myself-bottom{
    width: 245px;
    height: 24px;
    line-height: 24px;
    border-radius: 24px;
    background: #ffffff;
    float: right;
    margin-right: 10px;
    overflow: hidden;
  }
  .myself-bottom-item{
    height: 24px;
    float: left;
    padding-left: 10px;
    font-size: 12px;
    line-height: 26px;
    transition: all 0.5s;
    -moz-transition: all 0.5s; /* Firefox 4 */
    -webkit-transition: all 0.5s; /* Safari 和 Chrome */
    -o-transition: all 0.5s; /* Opera */
  }
  .head-myself-bottom .out{
    background: #a1c1e3;
    color: #ffffff;
  }
  .head-myself-bottom .busy{
    background: #fb9126;
    color: #ffffff;
  }
  .head-myself-bottom .ready{
    background: #1ec57e;
    color: #ffffff;
  }
  .head-myself-bottom .talking{
    background: #fd7e7e;
    color: #ffffff;
  }
  .head-myself-bottom .after{
    background: #2c9dff;
    color: #ffffff;
  }
  .head-myself-bottom .rest .item-circle{
    background: red;
  }
  .item-circle{
    width: 8px;
    height: 8px;
    float: left;
    margin-top: 8px;
    border-radius: 50%;
    background: #ffffff;
    margin-right: 5px;
  }
  .myself-bottom-time{
    width: auto;
    height: 24px;
    color: #99A9BF;
    line-height: 26px;
    padding-left: 10px;
    font-size: 13px;
    float: left;
  }
  .myself-bottom-time span{
    color: #FF4949;
    font-size: 16px;
    line-height: 20px;
  }
  /*.icon-people::after{*/
    /*content: attr(data-title);*/
    /*font-size: 12px;*/
    /*display: inline-block;*/
    /*!*padding: 10px 14px;*!*/
    /*border: 1px solid #ddd;*/
    /*border-radius: 5px;*/
    /*position: absolute;*/
    /*top: 10px;*/
    /*!*left: 0px;*!*/
    /*!*left: -30px;*!*/
  /*}*/

   /*span.none{background-color:#FFFFFF;color:#F0F0F0;}*/
   /*span.ready{background-color:#FFFFFF;color:#008000;}*/
   /*span.talking{background-color:#FFFFFF;color:#5CADAD;}*/
   /*span.busy{background-color:#FFFFFF;color:#C4C400;}*/
   /*span.rest{background-color:FFFFFF;color:#0072E3;}*/
   /*span.after{background-color:#FFFFFF;color:#000080;}*/
   /*span.StatusTextTimeOut{background-color:#FFFFFF;color:red;}*/

   /*.item-circle-none{*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*float: left;*/
    /*margin-right: 3px;*/
    /*margin-top: 8px;*/
    /*border-radius: 50%;*/
    /*background: #13CE66;*/
  /*}*/
  /*.item-circle-ready{*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*float: left;*/
    /*margin-right: 3px;*/
    /*margin-top: 8px;*/
    /*border-radius: 50%;*/
    /*background: #008000;*/
  /*}*/
  /*.item-circle-talking{*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*float: left;*/
    /*margin-right: 3px;*/
    /*margin-top: 8px;*/
    /*border-radius: 50%;*/
    /*background: #5CADAD;*/
  /*}*/
  /*.item-circle-busy{*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*float: left;*/
    /*margin-right: 3px;*/
    /*margin-top: 8px;*/
    /*border-radius: 50%;*/
    /*background: #C4C400;*/
  /*}*/
  /*.item-circle-rest{*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*float: left;*/
    /*margin-right: 3px;*/
    /*margin-top: 8px;*/
    /*border-radius: 50%;*/
    /*background: #0072E3;*/
  /*}*/
  /*.item-circle-after{*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*float: left;*/
    /*margin-right: 3px;*/
    /*margin-top: 8px;*/
    /*border-radius: 50%;*/
    /*background: #000080;*/
  /*}*/
  /*.item-circle-StatusTextTimeOut{*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*float: left;*/
    /*margin-right: 3px;*/
    /*margin-top: 8px;*/
    /*border-radius: 50%;*/
    /*background: red;*/
  /*}*/

</style>
