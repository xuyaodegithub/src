<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">靓号判断</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <div class="notice">
          <span class="notice-text">注意：2014年1月7日（含1月7日）办理的号码不显示靓号等级和套餐月限</span><span class="notice-rule">（查看靓号规则详情）</span>
        </div>
        <div class="num-info">
          <p class="row"><span>业务号码:</span><el-input class="input" size='small' v-model="num.number" placeholder=""></el-input></p>
          <p class="row"><span>靓号等级:</span><el-input class="input" size='small' v-model="num.grade" placeholder=""></el-input></p>
          <p class="row"><span>套餐月限:</span><el-input class="input" size='small' v-model="num.limit" placeholder=""></el-input></p>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    /*height: 234px;*/
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -150px;
    border: 1px solid #90CCE8;
    border-radius: 5px;
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
      color: #A2C2E2;
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
    margin-bottom: 19px;
  }
  .popover-main .notice{
    width: 270px;
    height: 35px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 12px;
    line-height: 1.5;
  }
  .popover-main .notice-text{
    color: #F44848;
  }
  .popover-main .notice-rule{
    color: #1D9BD9;
    cursor: pointer;
  }
  .popover-main .num-info{
    margin-top: 15px;
    font-size: 12px;
    color: #333333;
  }
  .popover-main .input{
    width: 120px;
  }
  .popover-main .num-info .row{
    margin: 0 0 10px 15px;
  }
  .popover-main .num-info span{
    margin-right: 5px;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          num:{
            number: '13345678912',
            grade: '2',
            limit: '189'
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
