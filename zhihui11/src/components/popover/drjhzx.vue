<template>
  <div class="demo">
    <div class="popover-head">
      <span class="title">登入接话坐席</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                           class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="wrap">
        <span class="txt">坐席分机号</span>
        <el-input class="input" v-model="zxfjh_input">{{zxfjh_input}}</el-input>
      </div>
      <div class="wrap">
        <span class="txt">软电话工号</span>
        <el-input class="input" v-model="rdhfh_input">{{rdhfh_input}}</el-input>
      </div>
    </div>
    <span class="popover-btn">登入</span>
  </div>
</template>

<style scoped>
  .demo {
    width: 300px;
    background: #ffffff;
    margin-left: -150px;
    margin-top: -150px;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    color: #333333;
  }

  .popover-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    font-size: 14px;
    border-bottom: 1px solid #EEF1F5;
  }

  .popover-head i {
    float: right;
    color: #CECECE;
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
    padding-top: 10px;
    padding-bottom: 10px;
    background: #ffffff;
    font-size: 14px;
    border-bottom: 1px solid #EEF1F5;
  }

  .popover-main .wrap {
    width: 86%;
    height: 40px;
    line-height: 40px;
    margin: 10px auto;
  }

  .popover-main .wrap span {
    width: 30%;
    height: 40px;
    float: left;
    text-align: center;
  }

  .popover-main .wrap .input {
    width: 68%;
    height: 40px;
    float: right;
    padding-top: 2px;
  }

  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 14px auto;
    background: #44b3ed;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        zxfjh_input: "1021",
        rdhfh_input: "373"
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
