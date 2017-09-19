<template>
  <div class="wrapper">
    <div class="login">
      <div class="head">
        <img src="../../assets/img/ChinaNetlogo.png"><span>欢迎登录客服系统</span>
      </div>
      <div class="job-number" @keyup.enter="submit">
        <span class="job-number-title">工号</span>
        <el-input placeholder="请输入工号" v-model="loginData.loginId"></el-input>
      </div>
      <div class="job-mm" @keyup.enter="submit">
        <span class="job-number-title">密码</span>
        <el-input placeholder="请输入密码" v-model="loginData.password" type="password"></el-input>
      </div>
      <div class="job-sure">
        <el-button type="info" v-on:click="submit">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import api from '../../store/fetch/api'
  export default {
    components: {

    },
    methods: {
      ...mapActions([
        'loginAction','loginDataSet'
      ]),
      submit: function(){
        let promise = {
          "loginId":this.$store.state.page.loginData.loginId,
          "password":this.$store.state.page.loginData.password
        };

        api.loginApi('http://134.96.161.143:9301/public/adaptation/auth/login',promise).then(res=>{
            if(res.code=='400'){
                this.$message({
                  message: res.message,
                  type:'warning'
                })
            }else if(res.code=='404'){
              this.$message({
                message: res.message,
                type:'warning'
              })
            }else if(res.code=='500'){
              this.$message({
                message: '服务器异常',
                type:'warning'
              })
            }else if(res.code == '200'){
                console.log(res)
              this.loginDataSet(res,this.$store)

//              window.sessionStorage.setItem('enterCase',res.body);
//              setLoginInfo(window.sessionStorage.getItem('enterCase'));
            }
        });
//        this.loginAction();
      }
    },
    computed: {
      ...mapGetters([
          'loginData'
      ])
    },
  }
</script>
<style scoped>
  .wrapper{
    background: #177cb0;
    position: relative;
  }
  .login{
    width: 300px;
    height: 246px;
    background: #ffffff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -140px;
    box-shadow: 0px 0px 10px #333333;
    animation: move 0.5s ease;
    -webkit-animation:move 0.5s ease; /* Safari 和 Chrome */
  }
  @keyframes move {
    0%{

    }
  }
  .login .head{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #cccccc;
    color: #333333;
    line-height: 30px;
    font-size: 20px;
  }
  .login .head img{
    width: 80px;
    height: 24px;
    float: left;
    margin-top: 13px;
    margin-left: 20px;
  }
  .login .head span{
    float: left;
    margin-left: 10px;
    margin-top: 12px;
  }
  .login .job-number{
    width: 80%;
    margin-left: 10%;
    margin-top: 30px;
    height: 35px;
    font-size: 14px;
    color: #1476CC;
    line-height:35px;
    position:relative;
  }
  .job-number-title{
    float:left;
  }

  .login .job-mm{
    width: 80%;
    margin-left: 10%;
    margin-top: 14px;
    font-size: 14px;
    height: 35px;
    line-height: 35px;
    color: #1476CC;
  }
  .login .job-sure{
    width: 80%;
    margin-left: 10%;
    margin-top: 25px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
  .login .job-sure button{
    width: 100%;
    background: #F49A4B;
    border: none;
  }
  .login .el-input{
    width: 196px;
    margin-left: 10px;
  }
</style>
