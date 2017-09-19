<template>
  <div class="demo">
    <div class="popover-head">
      <span class="title">小休</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                       class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="info-box">
        <p class="title">小休开始时间</p>
        <p class="time-box clearfix"><span class="date">{{rest.date}}</span><span class="time">{{rest.time}}</span></p>
        <p class="title total">本次累计时长</p>
        <p><span class="seconds">{{rest.secondes}}</span>秒</p>
      </div>
      <img class="chicken_img" src="../../assets/img/duck.png">
      <span class="popover-btn">开始工作</span>
    </div>
  </div>
</template>

<style scoped>
  .clearfix {
    overflow: auto;
    _height: 1%
  }

  .demo {
    width: 300px;
    height: 450px;
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -225px;
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
    height: 410px;
  }

  .popover-main .info-box {
    width: 100px;
    height: 108px;
    margin: 0 auto;
    padding-top: 21px;
    text-align: center;
  }

  .popover-main .info-box .title {
    font-size: 12px;
    color: #999999;
  }

  .info-box .time-box {
    width: 100%;
    font-size: 14px;
    color: #333333;
    margin: 14px 0;
  }

  .info-box .time-box .date {
    float: left;
  }

  .info-box .time-box .time {
    float: right;
  }

  .info-box .total {
    margin: 12px 0;
  }

  .info-box .seconds {
    font-size: 22px;
    color: #F71818;
  }
  .popover-main .chicken_img{
    display: block;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 20px;
  }
  .popover-btn{
    width: 120px;
    height: 36px;
    line-height: 36px;
    margin: 0 auto;
    border-radius: 20px;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        rest: {
          date: '05-19',
          time: '09:30:32',
          secondes: '325'
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
