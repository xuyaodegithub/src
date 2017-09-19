<template>
  <div class="demo">
    <div class="popover-head">
      <span class="title">联系客户经理</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <p class="restDay">客户经理工作时间为工作日<span class="date_range">{{date_range}}</span> （节假日除
        外），其他时间请派商机单联系</p>
    </div>
    <span class="popover-btn" @click="turnOld()">派商机单</span>
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
        'personMessage'
      ]),
    },
//    mounted: function(){
//      if(this.personMessage.accountIdType=='营业执照' || this.personMessage.accountIdType=='机构代码'){
//        console.log(this.personMessage)
//        if(this.accountBundle.zqManageName=='' || this.accountBundle.zqManageName=='无客户经理')
//        {
//          this.manageName = this.accountBundle.manageName;
//          this.phoneNumber = this.accountBundle.manageMobile;
//        }
//        else
//        {
//          this.manageName = this.accountBundle.zqManageName;
//          this.phoneNumber = this.accountBundle.zqManageMobile;
//        }
//      } else{
//        console.log(this.personMessage)
//        this.manageName = this.accountBundle.manageName;
//        this.phoneNumber = this.accountBundle.manageMobile;
//      }
//    },
    methods: {
      close: function () {
        alert(0)
      },
      turnOld(){
        this.popoverAlert();
        this.iframeBlock('商机派单')
        document.getElementById("oldWindow").contentWindow.dispatchManagerBusinessOrder();
      },
      ...mapActions([
        'popoverAlert',
        'iframeBlock'
      ])
    }
  };
</script>
