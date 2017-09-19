<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">外线号码</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <p>工单联系人：<span>{{person.name}}</span></p>
        <p>责任人电话：<span>{{person.number}}</span></p>
        <span class="popover-btn">引导短信</span>
      </div>
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
    text-align: center;
    padding-top: 20px;
    padding-bottom: 5px;
  }
  .popover-main p{
    font-size: 14px;
    line-height: 24px;
  }
  .popover-btn{
    width: 220px;
    height: 36px;
    line-height: 36px;
    border-radius: 60px;
    margin: 15px auto;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          person:{
              number: '13396888898',
              name: '韩月英'
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
