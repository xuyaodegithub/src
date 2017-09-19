<template>
  <div class="demo pwdServe">
      <div class="popover-head">
          <span class="title">密码服务</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <div class="num-box">
          <span class="first-span">业务号码</span>
          <el-select class="business_select" v-model="business_num" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span>呼入号码</span>
          <el-input class="incoming_num" v-model="incoming_num"></el-input>
        </div>
        <div class="broadband-box">
          <p class="title">宽带密码验证</p>
          <span>验证类型</span>
          <el-select class="validate_select" v-model="validate_type" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input class="validate_input" v-model="validate_info"></el-input>
          <span class="popover-btn">验证</span>
        </div>
        <div class="pwd-box">
          <p class="title">客户密码</p>
          <span>当前客户密码</span>
          <el-input class="validate_input" type="password" v-model="customer_pwd"></el-input>
          <span class="popover-btn">短信通知</span>
        </div>
        <div class="rest-box">
          <p class="title">企业闪讯密码重置</p>
          <span>闪讯号码</span>
          <el-input class="validate_input" type="password" v-model="shanxun_num"></el-input>
          <p class="warning">注意：在短信通知用户前，请认真核对用户身份</p>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    /*height: 300px;*/
    background: #ffffff;
    margin-left: -300px;
    margin-top: -150px;
    border-radius: 5px;
    border: 1px solid #D2D4D6;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    font-size: 14px;
    border-bottom: 1px solid #EEF1F5;
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
    width: 100%;
  }
  .popover-main .num-box{
    width: calc(100% - 30px);
    height: 28px;
    padding: 20px 0 15px 0;
    margin: 0 auto;
    border-bottom: 1px solid #EEF1F5;
  }
  .num-box .business_select{
    width: 130px;
    margin: 0 15px 0 10px;
  }
  .num-box .incoming_num{
    width: 130px;
    margin: 0 15px 0 10px;
  }
  .popover-main .broadband-box{
    padding-bottom: 15px;
  }
  .broadband-box .title,.pwd-box .title,.rest-box .title{
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  .broadband-box .validate_select{
    width: 80px;
    margin-left: 10px;
  }
  .broadband-box .validate_input{
    width: 238px;
    margin-left: 15px;
  }
  .broadband-box .popover-btn{
    display: inline-block;
    width: 64px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    margin-left: 13px;
  }
  .popover-main .pwd-box,.popover-main .rest-box,.popover-main .broadband-box{
    width: calc(100% - 30px);
    margin: 0 auto;
    border-bottom: 1px solid #EEF1F5;
  }
  .popover-main .pwd-box{
    padding-bottom: 17px;
  }
  .pwd-box .validate_input{
    width: 120px;
    margin-left: 15px;
  }
  .pwd-box .popover-btn{
    display: inline-block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    margin-left: 13px;
  }
  .rest-box .validate_input{
    width: 120px;
    margin-left: 15px;
  }
  .rest-box .warning{
    margin: 10px 0 20px 0;
    color: #F44848;
  }
</style>
<style>
  .pwdServe .business_select .el-input__inner{
    height: 28px;
    font-size: 12px;
  }
  .pwdServe .incoming_num .el-input__inner{
    height: 28px;
    font-size: 12px;
  }
  .pwdServe .validate_select .el-input__inner{
    height: 28px;
    padding-right: 25px;
    font-size: 12px;
  }
  .pwdServe .validate_select .el-input__icon{
    width: 25px;
  }
  .pwdServe .validate_input .el-input__inner{
    height: 28px;
    font-size: 12px;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        business_num:'',
        incoming_num: '10000',
        validate_type: '',
        validate_info: 'xxxxx',
        customer_pwd: '',
        shanxun_num: '214564487',
        options1:[{
            value: '13398789998',
            label: '13398789998'
        },{
          value: '13398789998',
          label: '13398789998'
        }],
        options2:[{
          value: 'pwd',
          label: '密码'
        },{
          value: 'yzm',
          label: '验证码'
        }]
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
