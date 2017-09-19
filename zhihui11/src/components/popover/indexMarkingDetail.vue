<template>
  <div class="demo wjgd">
      <div class="popover-head">
          <span class="title">详情</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main" v-html="packageCaseDetail">
      </div>
      <span class="popover-btn" v-on:click="popoverAlert()">确定</span>
  </div>
</template>

<style scoped>
  .demo{
    width: 400px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -200px;
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
    padding: 10px;
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
  .popover-main .el-input{
    width: 120px;
    font-size: 12px;
  }
  .popover-main .el-textarea{
    width: 205px;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height:30px;
    margin: 15px auto;
    font-size: 12px;
  }
</style>
<style>
  .wjgd .popover-main .el-textarea__inner{
    font-size: 12px;
    color: #333333;
    height: 97px!important;
  }
  .wjgd .el-input__inner{
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
            num: '121212121',
            name: 'xxxx',
            remarks: 'xxxxx'
          }
      };
    },
    computed:{
      ...mapGetters([
        'packageCaseDetail'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ]),
    }
  };
</script>
