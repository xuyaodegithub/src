<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">拨号</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <el-input class="input" v-model="input" placeholder="请输入号码"></el-input>
        <span class="popover-btn" @click="dialing()">拨号</span>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    height: 186px;
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -93px;
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
      color: #a1c1e2;
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
  .popover-main .input{
    display: block;
    width: 220px;
    height: 40px;
    margin: 20px auto;
  }
  .popover-btn{
    width: 220px;
    height: 36px;
    line-height: 36px;
    border-radius: 60px;
    margin: 0 auto;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          input: ''
      };
    },
    methods: {
      close: function () {
      },
      dialing: function () {
        doCallOut(this.input)
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
