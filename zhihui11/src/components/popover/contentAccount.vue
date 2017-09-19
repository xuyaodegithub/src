<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">关联账号</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
          <div class="item-list-head">
            <div class="item-list-block">账号({{getKdAccountByCallNum['itemVOS'].length}})</div>
            <div class="item-list-block">历史服务时间</div>
          </div>
          <div class="item-list" v-for="item in getKdAccountByCallNum['itemVOS']">
            <div class="item-list-block">{{item['netWorkNum']}}</div>
            <div class="item-list-block">{{item['recordTime']}}</div>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    height: 250px;
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -150px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333333;
  }
  .popover-head i{
      float: right;
      color: #CECECE;
      font-size: 12px;
      margin-top: 13px;
      margin-right: 12px;
      cursor: pointer;
  }
  .popover-head .title{
      margin-left: 12px;
      font-weight: bolder;
  }
  .popover-main{
    width: auto;
    height: 200px;
    padding-left: 15px;
    padding-right: 15px;
    overflow: auto;
  }
  .item-list-head{
    margin-top: 15px;
    width: 100%;
    height: 30px;
    background: #F1F4F7;
    border-top: 1px solid #E7ECF1;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    display: flex;
    flex-direction: row;
  }
  .item-list{
    width: 100%;
    height: 30px;
    background: #ffffff;
    border-bottom: 1px solid #E7ECF1;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    display: flex;
    flex-direction: row;
  }
  .item-list-block{
    flex: 1;
    padding-left: 5px;
    line-height: 30px;
    color: #333333;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
      };
    },
    computed:{
        ...mapGetters([
          'getKdAccountByCallNum'
        ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ])
    }
  };
</script>
