<template>
  <div class="demo identityHand">
    <div class="popover-head">
      <span class="title">手工认证</span><span class="small-title"></span>
      <i v-on:click="smallPopoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <el-input class="input" v-model="input"></el-input>
      <p class="error" v-if="isShow">对不起，证件号码错误！</p>
    </div>
    <div class="popover-bottom">
      <span class="popover-btn" @click="checkIDNumber()">验证</span>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    width: 300px;
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -93px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    color: #333333;
  }

  .popover-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-head i {
    float: right;
    color: #a1c1e2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 12px;
    font-weight: bold;
  }

  .popover-main {
    width: 100%;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-main .input {
    display: block;
    width: 270px;
    margin: 20px auto;
  }

  .popover-main .error {
    color: #F44848;
    margin: -13px 0 6px 16px;
  }

  .popover-bottom{
    height: 59px;
    padding-top: 1px;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 14px auto 0;
  }
</style>
<style>
  .identityHand .el-input__inner {
    height: 30px;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        input: '',
        isShow : false
      };
    },
    methods: {
      checkIDNumber(){
        if(!this.input.trim()){
          this.$message({
            message: '请输入证件号码，再进行手工认证！',
            type:'warning'
          })
          return;
        }
        getOldWindow().recordCommonTraceActionId('T1241')
        if(this.validateIdentityNew(this.input)){
          //记验证日志
          getOldWindow().BusiService.insertValidateResult({CALLPHONE:this.callNumber,BUSIPHONE:this.businessCallNumber,ACTION:'证件号码验证', RESULT:'1'},function(){});
          this.$message({
            message: '证件号码验证通过！',
            type:'success'
          })
          getOldWindow().recordCommonTraceActionId('T1242');
          unshieldInfoAll();
          getOldWindow().doSomethingWhenIvrIdValidateSucceed();
          /* remark:异网号码与宽带账号绑定关系插入接口中*/
          if(COMMOBJ.deviceType =='2'){
            getOldWindow().insertOptBindRelation('4');
          }
          //关闭窗口
          this.smallPopoverAlert();
        }else{
          //记验证日志
          getOldWindow().BusiService.insertValidateResult({CALLPHONE:this.callNumber,USIPHONE:this.businessCallNumber,ACTION:'证件号码验证', RESULT:'2'},function(){});
          this.$message.error('对不起,证件号码错误！');
          getOldWindow().recordCommonTraceActionId('T1243');
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
        this.updateCheckIdentityResult(checkResult)
        //idValidateFlag = returnFlag;//把验证结果赋给全局变量
        return returnFlag;
      },
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert','smallPopoverAlert','updateCheckIdentityResult'
      ]),
      ...mapGetters([
        'popoverAlive'
      ])
    },
    computed: {
      ...mapGetters(['callNumber','businessCallNumber','accountIdNumber'])
    }
  };
</script>
