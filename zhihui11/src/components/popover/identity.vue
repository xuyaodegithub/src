<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">请选择身份认证方式</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">

        <div class="plan-box">
          <p class="tit">验证方案</p>
          <p class="plans" v-for="plan in plans">
            方案{{plan.index}}：<span class="orange">{{plan.term}}</span></span>
          </p>
        </div>

        <div class="validate-box">
          <p class="tit">验证详情</p>
          <div class="validate-step">
            <span class="text">1、密码转接认证</span>
            <el-button class="validate-btn s-btn" @click="checkIdentityEvent('1')" :disabled = "this.pwdTransfer" >转接认证</el-button>
            <span class="text-tip green" v-if="this.pwdTransfer">通过</span>
            <span class="text-tip red" v-else>未通过</span>
          </div>
          <div class="validate-step">
            <span class="text">2、证件号码认证</span>
            <span style="margin:0 -5px 0 10px"></span>
            <el-input class="validate-input" v-model="idNumber" style="width: 180px;"></el-input>
            <el-button class="validate-btn s-btn" @click="checkIdentityEvent('2')" :disabled = "this.idCheckResult">认证</el-button>
            <el-button class="validate-btn s-btn" @click="checkIdentityEvent('3')" :disabled = "this.idCheckResult">转接认证</el-button>
            <span class="text-tip green" v-if="this.idCheckResult">通过</span>
            <span class="text-tip red" v-else>未通过</span>
          </div>
          <div class="validate-step">
            <span class="text">3、验证码认证</span>
            <el-button class="validate-btn m-btn" @click="sendValidateCode()" :disabled = "this.validateCodeBtn || this.validateCodeResult" >验证码发送</el-button>
            <el-input class="validate-input" v-model="validateCode"></el-input>
            <el-button type="primary" class="validate-btn submit-btn" @click="checkCode()" :disabled = "this.validateCodeResult">验证</el-button>
            <span class="text-tip green" v-if="this.validateCodeResult">通过</span>
            <span class="text-tip red" v-else>未通过</span>
          </div>
          <div class="validate-step">
            <span class="text">4、辅助信息认证</span>
            <el-button class="validate-btn s-btn" @click="checkIdentityEvent('5')" :disabled = "this.auxiliaryCheckResult">验证</el-button>
            <span class="text-tip green" v-if="this.auxiliaryCheckResult">通过</span>
            <span class="text-tip red" v-else>未通过</span>
          </div>

          <!--
          <div class="feedback-box">
            <span class="feedback success" ><i class="iconfont icon-zhengque"></i>验证通过</span>
            <span class="feedback success"><i class="iconfont icon-zhengque"></i>验证成功</span>
            <span class="feedback large"><i></i>验证成功</span>
            <span class="feedback fail"><i class="iconfont icon-jinggao"></i>验证失败</span>
          </div>
          -->
        </div>
      </div>
      <div class="popover-bottom">
        <el-button  @click="checkIdentityEvent('6')" :class="[ this.forcedCheckResult ? '' : 'force-btn']" :disabled = "this.forcedCheckResult" >强制通过</el-button>
        <span class="warn">此按钮仅在系统故障时使用</span>
        <el-button class="end-btn" type="primary" v-on:click="popoverAlert()">结束验证</el-button>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height: 423px;
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -200px;
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
  .popover-head i{
      float: right;
      color: #a1c1e2;
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
    width: calc(100% - 30px);
    padding: 15px 15px 10px  15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .tit{
    font-weight: 500;
  }
  .plan-box{
    padding-bottom: 8px;
  }
  .plans{
    display: inline-block;
    width: 260px;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    margin-top: 10px;
    border-left:5px solid #8BB4E7;
    border-radius: 3px;
    background: #ffffff;
  }
  .plan-box .plans:nth-child(even){
    margin-right: 20px;
  }
  .plans .orange{
    color: #FF8000;
  }
  .validate-box{
    position: relative;
  }
  .validate-box .tit{
    margin-top: 12px;
  }
  .validate-step{
    height: 28px;
    line-height: 28px;
    margin: 10px 0;
  }
  .validate-step .text{
    display: inline-block;
    width: 91px;
  }
  .validate-btn{
    width: 72px;
    height: 28px;
    font-size: 12px;
    color: #333333;
    margin-left: 15px;
    padding: 0;
  }
  .m-btn{
    width: 90px;
  }
  .l-btn{
    width: 100px;
  }
  .submit-btn{
    width: 54px;
    background: #33A0FF;
    color: #ffffff;
    font-size: 12px;
    font-weight: 100;
    margin-left: 5px;
  }
  .validate-input{
    width: 100px;
    margin-left: 10px;
  }
  .validate-step .text-tip{
    margin-left: 15px;
  }
  .red{
    color: #F44848;
  }
  .green{
    color:#34B981;
  }
  .feedback-box{
    position: absolute;
    right: 0;
    top: 0;
  }
  .feedback-box .feedback{
    position: absolute;
    right: 0;
    width: 100px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    box-shadow: 0 0 6px rgba(0,0,0,.16);
    margin-bottom: 8px;
    background: #ffffff;
  }
  .feedback-box .feedback:nth-child(2){
    top:44px;
  }
  .feedback-box .feedback:nth-child(3){
    top:88px;
  }
  .feedback-box .feedback:nth-child(4){
    top:132px;
  }
  .feedback-box .large{
    width: 120px;
  }
  .feedback-box .iconfont{
    margin-right: 5px;
    font-weight: 600;
  }
  .feedback-box .success{
    color: #34B981;
  }
  .feedback-box .fail{
    color: #EE7629;
  }
  .popover-bottom{
    width: calc(100% - 30px);
    padding: 0 15px;
    height: 60px;
    line-height: 60px;
  }
  .popover-bottom .el-button{
    width: 80px;
    height: 30px;
    padding: 0;
  }
  .popover-bottom .force-btn{
    color: #F44848;
    border: 1px solid #F44848;
    margin-right: 8px;
  }
  .popover-bottom .end-btn{
    float: right;
    margin-top: 15px;
  }
</style>
<style>
  .validate-input .el-input__inner{
    height: 28px;
    color: #333333;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          input: '',
          validateCodeBtn : false,
          plans:[{
            index : '一',
            term : '服务密码'
          },{
            index : '二',
            term : '短信验证码'
          },{
            index : '三',
            term : '姓名+证件号码'
          }],
          tip:[{
              tipTxt : ''
          }],
          validateCode: '',
          idNumber : '',
          checkResult:{
            code :'',
            result : '',
            businessCallNumber : ''
          }
      };
    },
    methods: {
      checkIdentityEvent(checkType){
        this.checkResult.businessCallNumber = this.businessCallNumber
        this.checkResult.code = checkType;
        this.checkResult.result = false;
        if(checkType === '1'){
          //密码转接认证
          let res = dotransivrcheckpwd()
          //回写结果
          /*this.checkResult.result = res;
          //插入轨迹
          if(res){
            unshieldInfoAll();
            getOldWindow().refreshIdentityValidateInfo('1')
          }*/
          getOldWindow().recordCommonTraceActionId('T1234')
        }else if(checkType === '2'){//手工认证弹出新框
          if(!this.idNumber.trim()){
            this.alertMessage("请输入证件号码，再进行手工认证！")
            return;
          }
          getOldWindow().recordCommonTraceActionId('T1241')
          if(this.validateIdentityNew(this.idNumber)){
            //记验证日志
            getOldWindow().BusiService.insertValidateResult({CALLPHONE:this.callNumber,BUSIPHONE:this.businessCallNumber,ACTION:'证件号码验证', RESULT:'1'},function(){});
            this.alertMessage("证件号码验证通过！")
            getOldWindow().recordCommonTraceActionId('T1242');
            unshieldInfoAll();
            getOldWindow().refreshIdentityValidateInfo('2')
            /* remark:异网号码与宽带账号绑定关系插入接口中*/
            if(COMMOBJ.deviceType =='2'){
              getOldWindow().insertOptBindRelation('4');
            }
            this.checkResult.result = true
          }else{
            //记验证日志
            getOldWindow().BusiService.insertValidateResult({CALLPHONE:this.callNumber,USIPHONE:this.businessCallNumber,ACTION:'证件号码验证', RESULT:'2'},function(){});
            this.alertMessage("对不起,证件号码错误！")
            getOldWindow().recordCommonTraceActionId('T1243');
          }
        }else if(checkType === '3'){//身份证转接认证
          getOldWindow().recordCommonTraceActionId('T1244');
          dotransivrcheckCtzjId(function(transReturnValue){
            /*if(transReturnValue) {
              unshieldInfoAll();
              getOldWindow().refreshIdentityValidateInfo('2')
              this.checkResult.result = true;
              this.$message({
                message: '转接认证成功，请稍候！',
                type: 'success'
              });

            }
            else{
              this.checkResult.result = false;
              this.$message.error('转接认证失败，请重试！');
            }*/
             if(transReturnValue)
             {
               this.alertMessage("转接认证中，请稍候...")
             }
             else
             {
                this.checkResult.result = false;
                this.alertMessage("转接认证失败，请重试！")
             }

          });
        }else if(checkType === '5'){//辅助认证
          this.smallPopoverAlert('vIdentitySub1')
        }else if(checkType === '6'){//强制认证
          //少个确认框
          this.$confirm('请注意：本按钮仅在系统异常时方可使用，使用前请先向支撑人员申请确认后方可操作，谢谢！是否继续？')
            .then(_ => {
              this.checkResult.result = true;
              this.updateCheckIdentityResult(this.checkResult)
              getOldWindow().refreshIdentityValidateInfo('5')
            })
            .catch(_ => {});

        }
        if(checkType !== '1' || checkType !== '3' || checkType !== '5' || checkType !== '6'){
          this.updateCheckIdentityResult(this.checkResult)
        }
        //this.checkIdentity(checkType);
      },
      sendValidateCode(){
        getOldWindow().sendYZMForVue(function(result){
          if(result){
            this.alertMessage("验证码已发送")
          }
        });
        this.validateCodeBtn = true
        setTimeout(() => {
          this.validateCodeBtn = false;
        },2000)
      },
      //验证码
      checkCode(){
        if(!this.validateCode.trim()){
          this.alertMessage("请输入验证码!")
          return;
        }
        this.checkResult.code = '4'
        this.checkResult.businessCallNumber = this.businessCallNumber
        if(getOldWindow().validateYZM(this.validateCode)){
          this.checkResult.result = true;
          this.updateCheckIdentityResult(this.checkResult)
          this.alertMessage("验证成功！")
           getOldWindow().recordCommonTraceActionId('T1249');
           getOldWindow().refreshIdentityValidateInfo('3')
           unshieldInfoAll();
           getOldWindow().doSomethingWhenIvrIdValidateSucceed();
        }else{
          this.checkResult.result = false;
          this.updateCheckIdentityResult(this.checkResult)
          this.alertMessage("验证失败！")
          getOldWindow().recordCommonTraceActionId('T1250');
        }
      },
      validateIdentityNew(validatePwd){
        var returnFlag = false;
        if(!this.accountIdNumber)return returnFlag;

        var deviceIdNumber = this.accountIdNumber;
        if (validatePwd.length == 18 && deviceIdNumber.length == 15) {
          validatePwd = validatePwd.substr(0, 6) + validatePwd.substr(8, 9);
        }
        else if (validatePwd.length == 15 && deviceIdNumber.length == 18) {
          deviceIdNumber = deviceIdNumber.substr(0, 6) + deviceIdNumber.substr(8, 9);
        }
        if(validatePwd == deviceIdNumber){
          returnFlag = true;
        }
        let checkResult = {
          code : '2',
          result : returnFlag
        }
        //idValidateFlag = returnFlag;//把验证结果赋给全局变量
        return returnFlag;
      },
      alertMessage(content,title = '提示信息'){
        this.$alert(content, title, {
          confirmButtonText: '确定',
          callback: action => {
//            this.$message({
//              type: 'info',
//              message: `action: ${ action }`
//            });
          }
        });
      },
      ...mapActions([
        'popoverAlert','updateCheckIdentityResult','smallPopoverAlert'
      ])
    },
    computed: {
      ...mapGetters(['pwdTransfer','idCheckResult','validateCodeResult','auxiliaryCheckResult','businessCallNumber','accountIdNumber','forcedCheckResult'])
    }
  }
</script>
