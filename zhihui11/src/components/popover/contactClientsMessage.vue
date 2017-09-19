<template>
  <div class="demo">
    <div class="popover-head">
      <span class="title">发送短信</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="workDay">
        <p>星级客户经理：<span>{{manageName}}</span></p>
        <p>号码：{{phoneNumber}}</p>
      </div>
    </div>
    <span class="popover-btn" @click="turnOld()">发送短信</span>
  </div>
</template>

<style scoped>
  .demo {
    width: 300px;
    height: 175px;
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -87px;
    border: 1px solid #90CCE8;
    /*transform: translateY(-50%);*/
    border-radius: 5px;
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
    color: #A1C1E2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 12px;
    font-weight: bold;
  }

  .popover-main .restDay {
    margin: 20px 0 18px 15px;
    line-height: 24px;
  }

  .popover-main .workDay{
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
  }
  .popover-main .workDay span{
    color: #33A0FF;
  }
  .popover-main .date_range {
    color: #33A0FF;
  }
  .popover-btn {
    font-size: 14px;
    width: 220px;
    height: 36px;
    line-height: 36px;
    border-radius: 60px;
    margin: 0 auto;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        isRestday: true,
        date_range: '8:30-17:30',
        manageName: '',
        phoneNumber: '',
        manager:{
            name: '韩月英',
            number: '13396888898'
        }
      };
    },
    computed:{
      ...mapGetters([
        'personMessage','accountBundle','callNo'
      ])
    },
    created: function(){
      if(this.personMessage.accountIdType=='营业执照' || this.personMessage.accountIdType=='机构代码'){
        console.log(this.personMessage)
        if(this.accountBundle.zqManageName=='' || this.accountBundle.zqManageName=='无客户经理')
        {
          this.manageName = this.accountBundle.manageName;
          this.phoneNumber = this.accountBundle.manageMobile;
        }
        else
        {
          this.manageName = this.accountBundle.zqManageName;
          this.phoneNumber = this.accountBundle.zqManageMobile;
        }
      } else{
        this.manageName = this.accountBundle.manageName;
        this.phoneNumber = this.accountBundle.manageMobile;
      }
    },
    methods: {
      close: function () {
        alert(0)
      },
      turnOld(){
        this.popoverAlert();
        let smsNumber= this.callNo;
        let smsContent= '尊敬的用户：如需咨询电信业务，可在工作时间(节假日除外)8：30-17：30，联系您的星级客户经理:'+this.manageName+'，号码:'+this.phoneNumber;
        document.getElementById("oldWindow").contentWindow.sendDirectSms(smsNumber, smsContent);
      },
      ...mapActions([
        'popoverAlert'
      ])
    }
  };
</script>
