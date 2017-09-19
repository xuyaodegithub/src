<template>
  <div class="demo restoreMachine">
      <div class="popover-head">
          <span class="title">一键复机</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <p class="row">您申请复机号码为：<span class="phoneNum">{{phoneNum}}</span></p>
        <p class="row">提醒本次临时复机时限为48小时，如到达限时，系统会自动再次发起停机。确定提交？</p>
      </div>
      <span class="popover-btn">是</span>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
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
    padding: 20px 0 15px 0;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-main .row{
    width: 268px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 26px;
  }
  .popover-main .row .phoneNum{
    color: #1D9BD9;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 15px auto;
  }
</style>
<style>
  .restoreMachine .el-button{

  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          phoneNum: '13398789998'
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
