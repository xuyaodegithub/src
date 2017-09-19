<template>
  <div class="head-call">
    <div class="head-call-all">
      <div class="item-icon light" id="btnSignIn" v-on:click="clickBtnSignIn()">
        <div class="icon-circle"><i class="iconfont icon-people"></i></div>
        <p>登录</p>
      </div>
      <div class="item-icon" id="btnHold" v-on:click="clickBtnHold();">
        <div class="icon-circle"><i id="btnHoldIcon" class="iconfont icon-tonghuabaochi-copy"></i></div>
        <p id="btnHoldText">保持</p>
      </div>
      <div class="item-icon" id="btnAppeal" v-on:click="clickBtnAppeal();">
        <div class="icon-circle"><i class="iconfont icon-shezhi-gerenzhongxin"></i></div>
        <p>求助</p>
      </div>
      <div class="item-icon" id="btnTransfer" v-on:click="clickBtnTransfer()">
        <div class="icon-circle"><i class="iconfont icon-oc-transfer"></i></div>
        <p>转接</p>
      </div>
      <div class="item-icon" id="btnSatisficing" v-on:click="clickBtnSatisficing()">
        <div class="icon-circle"><i class="iconfont icon-aixin"></i></div>
        <p>满意度</p>
      </div>
      <div class="item-icon" id="btnSummary" v-on:click="clickBtnSummary()">
        <div class="icon-circle"><i class="iconfont icon-icon_chuyuanxiaojie"></i></div>
        <p>小结</p>
      </div>
      <div class="item-icon" id="btnReady" v-on:click="clickBtnSetReady()">
        <div class="icon-circle"><i class="iconfont icon-geren"></i></div>
        <p>就绪</p>
      </div>
      <div class="item-icon" id="btnBusy" v-on:click="clickBtnSetBusy()">
        <div class="icon-circle"><i class="iconfont icon-kehuzhengmang"></i></div>
        <p>示忙</p>
      </div>
      <div class="item-icon" id="btnRest" v-on:click="clickBtnSetRest()">
        <div class="icon-circle"><i class="iconfont icon-yuding"></i></div>
        <p>小休</p>
      </div>
      <div class="item-icon" id="btnCall" v-on:click="clickBtnSetCall()">
        <div class="icon-circle"><i class="iconfont icon-bohao"></i></div>
        <p>拨号</p>
      </div>
      <div class="item-icon" id="btnHandup" v-on:click="clickBtnHandup()">
        <div class="icon-circle"><i class="iconfont icon-guadianhua"></i></div>
        <p>挂机</p>
      </div>
      <div class="item-icon light" id="btnAfterReady" v-on:click="clickBtnAfterReady()">
        <div class="icon-circle"><i id="btnAfterReadyIcon" class="iconfont icon-huawuyuan1"></i></div>
        <p id="btnAfterReadyText">话后就绪</p>
      </div>
      <div class="item-icon" id="btnSignOut" v-on:click="clickSignOut()">
        <div class="icon-circle"><i class="iconfont icon-dengchu"></i></div>
        <p>登出</p>
      </div>
      <div class="item-icon item-icon-header">
        <el-dropdown trigger="click" menu-align="start" @command="changeCheck" :hide-on-click="true">
        <span class="el-dropdown-link">
          <i style="color: #ffffff;" class="el-icon-caret-bottom el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item command="phoneSetOne"><i class="el-icon-check el-icon&#45;&#45;left" v-if="phoneSetOne"></i><span>三方通话</span></el-dropdown-item>-->
            <!--<el-dropdown-item command="phoneSetTwo"><i class="el-icon-check el-icon&#45;&#45;left" v-if="phoneSetTwo"></i><span>应答</span></el-dropdown-item>-->
            <el-dropdown-item command="phoneSetThree"><i class="el-icon-check el-icon--left" v-if="phoneSetThree"></i><span>静音</span></el-dropdown-item>
            <!--<el-dropdown-item command="phoneSetFour"><i class="el-icon-check el-icon&#45;&#45;left" v-if="phoneSetFour"></i><span>启动夜铃</span></el-dropdown-item>-->
            <!--<el-dropdown-item command="phoneSetFive"><i class="el-icon-check el-icon&#45;&#45;left" v-if="phoneSetFive"></i><span>高级选项</span></el-dropdown-item>-->
            <el-dropdown-item command="phoneSetSix"><span>黑名单</span></el-dropdown-item>
            <el-dropdown-item command="phoneSetSeven"><span>手工就绪</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div style="display:none" id="btnShowMsg" v-on:click="open()" msg=""></div>

  </div>

</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        dialogVisible: false,
        value10: [],
//        phoneSetOne: false,
//        phoneSetTwo: false,
        phoneSetThree: false,
//        phoneSetFour: false,
        phoneSetFive: false,
        phoneSetSix: false
      };
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
          'getTransferParams','token'
      ]),
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      open() {

        var msg = $("#btnShowMsg").attr("msg");

        var msgjson = eval("(" + msg + ")");
        if(msgjson.action == 'showmsg')
        {
          this.$message(msgjson.msg);
        }
        else if(msgjson.action == 'alertShow')
        {
           this.alertShow(msgjson.msg);
        }
        else if(msgjson.action == 'callin')
        {
           this.freshPhoneByMichelle(msgjson);
        }
        else if(msgjson.action == 'insertUserSatisfaction')
        {
           this.insertUserSatisfaction(msgjson);
        }
        else if(msgjson.action == 'updateRecordGuid')
        {
           this.updateRecordGuid(msgjson);
        }
        else if(msgjson.action == 'addOBRecordGuid')
        {
           this.addOBRecordGuid(msgjson);
        }
        else if(msgjson.action == 'closeWindow')
        {
          this.popoverAlert();
        }
        else if(msgjson.action == 'doSummary')
        {
           this.summaryTurn(msgjson.skill);
        }
        else if(msgjson.action == 'staffRest')
        {
           this.restTurn();
        }
        else if(msgjson.action == 'personNumberOld')
        {
          this.personNumberOld(msgjson);
        }
        else if(msgjson.action == 'unshieldInfoAll')
        {

          this.changeAuthenticated();
        }
        else if(msgjson.action == 'countZeroChangeShow')
        {
          this.countZeroChangeShow();
        }
        else if(msgjson.action == 'countZeroChangeHidden')
        {
          this.countZeroChangeHidden();
        }
        else if(msgjson.action == 'countZeroChangeHead')
        {
          this.countZeroChangeHead(msgjson.msg);
        }
        else if(msgjson.action == 'countZeroChangeTime')
        {
          this.countZeroChangeTime(msgjson.msg);
        }
        else if(msgjson.action == 'countZeroChangeHtml')
        {
          this.countZeroChangeHtml(msgjson.msg);
        }
        else if(msgjson.action == 'refreshUnReadMsgCount')
        {
          this.refreshUnReadMsgCount();
        }
        else if(msgjson.action == 'updateCheckIdentityResult')
        {
          this.updateCheckIdentityResult(msgjson);
        }

      },
      clickBtnSignIn:function()
      {
        if($("#btnSignIn").hasClass("light"))
        {
          clickSignIn();
//          this.freshPhoneByMichelle({
//            'phoneNum':'57987309607',
//            'pCustomerId':'',
//            'ConnectionID':'1231231231',
//            'answerFlag':'inbound',
//            'ivrModuleId':'',
//            'billStatus':'',
//            'AssetIntID':'1231231231',
//            'ZQKey':'1',
//            'XZKDKey':'',
//            'ivrNodeList':'',
//            'ivrFlowList':'',
//            'strIdCard':''
//          });18969103885
        }

      },
      clickSignOut:function()
      {

        if($("#btnSignOut").hasClass("light"))
        {
          clickSignOut();
          this.soundShut();

        }
      },
      clickSignOut:function()
      {

        if($("#btnSignOut").hasClass("light"))
       {
          clickSignOut();
        }
      },
      soundShut(){
          this.phoneSetThree=false;
      },
      clickBtnSetReady:function()
      {
        if($("#btnReady").hasClass("light"))
        {
          clickSetIdle();
        }
      },
      clickBtnSetBusy:function()
      {

        if($("#btnBusy").hasClass("light"))
        {
          clickSetBusy();
        }
      },
      clickBtnHold:function()
      {
        if($("#btnHold").hasClass("light"))
        {
          clickHold();
        }
      },
      clickBtnAppeal:function()
      {
        if($("#btnAppeal").hasClass("light"))
        {
          this.helpTurn();
        }
      },
      clickBtnTransfer:function()
      {

       // this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_TRANSFER_PARAMS_API','getTransferParamsMM']);
        //return;
        if($("#btnTransfer").hasClass("light"))
        {


          if(GP["holdid"]!='0' && GP["transftype"] == '1'){

             WebAgent.invoker("Transfer", 0, function(result){});

          }
          else
          {
              //var tranobj = {mode:'2',phone:'13758227733',calldata:'',type:'1',transreason:''};
              //var tranobj =  {type:'2',mode:'2',vcid:'2',phone:'888',transreason:'1'}
              //doTrans(tranobj);
              this.popoverAlert('vTransfer');
              this.clearTranferData();
              this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_TRANSFER_PARAMS_API','getTransferParamsMM']);

          }
        }
      },
      clickBtnSatisficing:function()
      {
        if($("#btnSatisficing").hasClass("light"))
        {
          clickSatisficing();

        }
      },
      clickBtnSummary:function()
      {
        if($("#btnSummary").hasClass("light"))
        {
          //this.popoverAlert('vSummary');
          clickSummary();
        }
      },
      clickBtnSetRest:function()
      {
        if($("#btnRest").hasClass("light"))
        {
          //this.popoverAlert('vRest');
          setBreak();
        }
      },
      clickBtnSetCall:function()
      {
        if($("#btnCall").hasClass("light"))
        {
          this.popoverAlert('vDial');
        }
      },
      clickBtnHandup:function()
      {
        if($("#btnHandup").hasClass("light"))
        {
          clickHandup();
        }
      },
      clickBtnAfterReady:function()
      {
        if($("#btnAfterReady").hasClass("light"))
        {
          clickAfterReady();
        }
      }
      ,
      ...mapActions([
        'popoverAlert',
        'clearTranferData',
        'freshPhoneByMichelle',
        'regionQueueArea',
        'insertUserSatisfaction',
        'addOBRecordGuid',
        'updateRecordGuid',
        'summaryTurn',
        'restTurn',
        'helpTurn',
        'personNumberOld',
        'changeAuthenticated',
        'countZeroChangeShow',
        'countZeroChangeHidden',
        'countZeroChangeHead',
        'countZeroChangeTime',
        'countZeroChangeHtml',
        'getTransferRegion',
        'refreshUnReadMsgCount',
        'iframeBlock',
        'alertShow',
        'updateCheckIdentityResult'
      ]),
      changeCheck(name){
          if(name=='phoneSetThree'){
             if(COMMOBJ.LogonFlag==0)
             {
                this.$message('请先登录软电话');
                return;
             }
            if(this[name] == false){
              this[name] = true;
              SetPhoneMute();

            }else {
              this[name] = false;
              SetPhoneMute();

            }
          }
          if(name=='phoneSetSix'){

              this.iframeBlock('黑名单');
              try
              {
                getOldWindow().insertBlack();
              }catch(ex)
              {

              }
          }
          if(name=='phoneSetSeven'){
            doSummaryAfterByHandle();
          }
      },
  }
  };
</script>
<style scoped>
  .head-call{
    width: 100%;
    height: 60px;
  }
  .icon-mangluzhong{
    color: red;
  }
  .head-call-all{
    color: #ffffff;
    display: table;
    margin: 0 auto 0 auto;
  }
  /* 下拉框修改 */
  .head-call-all .item-icon{
    display:table-cell;
    text-align: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    color: #ffffff;
    opacity: 0.3;
    transition: color 0.5s;
    -moz-transition: color 0.5s; /* Firefox 4 */
    -webkit-transition: color 0.5s; /* Safari 和 Chrome */
    -o-transition: color 0.5s; /* Opera */
  }

  .head-call-all .item-icon .icon-circle{
    width: 32px;
    height: 32px;
    line-height: 30px;
    margin: 5px auto;
    border: 1px solid #ffffff;
    border-radius: 50%;
    transition: opacity 0.5s;
    -moz-transition: opacity 0.5s; /* Firefox 4 */
    -webkit-transition: opacity 0.5s; /* Safari 和 Chrome */
    -o-transition: opacity 0.5s; /* Opera */
  }
  .head-call-all .item-icon-header{
    text-align: left;
  }
  .head-call-all .light{
    opacity: 1;
    transition: color 0.5s;
    -moz-transition: color 0.5s; /* Firefox 4 */
    -webkit-transition: color 0.5s; /* Safari 和 Chrome */
    -o-transition: color 0.5s; /* Opera */
  }
  .head-call .head-call-all .light .icon-circle{
    opacity: 1;
    transition: border 0.5s;
    -moz-transition: border 0.5s; /* Firefox 4 */
    -webkit-transition: border 0.5s; /* Safari 和 Chrome */
    -o-transition: border 0.5s; /* Opera */
  }
  .head-call-all .item-icon i{
    font-size: 18px;
  }

  .head-call-all .item-icon-header .el-dropdown{
    margin-left: -20px;
    display: block;
  }
  .head-call-all .item-icon-header .el-dropdown i{
    margin-left: 40px !important;
  }
  .el-dropdown-menu{
    color: #333333 !important;
  }

  .el-dropdown-menu .el-dropdown-menu__item .el-icon-check{
    color: #1592E6 !important;
  }
  .head-call-all .item-icon .icon-circle i{
    font-size: 20px;
  }
  .head-call-all .item-icon p{
    font-size: 12px;
    margin-top: 1px;
  }
  .myself-bottom-time span{
    color: #FF4949;
    font-size: 16px;
    line-height: 20px;
  }
</style>
