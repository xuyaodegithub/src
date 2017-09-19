<template>
  <div class="demo yddx">
      <div class="popover-head">
          <span class="title">引导短信</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <div class="row"><span class="txt">联系号码：</span><el-input v-model="info.number"></el-input></div>
        <div class="row"><span class="txt">短信内容：</span><el-input v-model="info.item" type="textarea"></el-input></div>
      </div>
      <span class="popover-btn">确定</span>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -150px;
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
      color: #A1C1E2;
      font-size: 12px;
      margin-top: 13px;
      margin-right: 12px;
      cursor: pointer;
  }
  .popover-head .title{
      margin-left: 12px;
      font-weight: bold;
  }
  .popover-main{
    border-bottom: 1px solid #C5E2F0;
    padding: 10px 0;
  }
  .popover-main .row{
    margin: 10px 0 10px 15px;
  }
  .popover-main .row .txt{
    display: block;
    width: 60px;
    float: left;
    line-height: 28px;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 15px auto;
    font-size: 12px;
  }
  .popover-main .el-input{
    width: 120px;
    font-size: 12px;
  }
  .popover-main .el-textarea{
    width: 205px;
  }
</style>
<style>
  .yddx .popover-main .el-textarea__inner{
    font-size: 12px;
    color: #333333;
    height: 133px!important;
  }
  .yddx .el-input__inner{
    height: 28px;
    font-weight: 100;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          isCuidan: true,
          info:{
            number: '121212121',
            item: '尊敬的用户：您申告的障碍已受理，中国电信服务人员将尽快上门为您维修，服务人员联系电话[当前外线岗位负责人电话]。欢迎您对我们的维修服务进行监督。（取工单责任人，责任人联系电话）'
          }
      };
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ]),
      ...mapGetters([
        'popoverAlive'
      ])
    }
  };
</script>
