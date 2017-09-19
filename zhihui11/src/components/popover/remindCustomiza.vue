<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">提醒定制</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <div class="iframe">

        </div>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 900px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -450px;
    /*margin-top: -150px;*/
    transform: translateY(-50%);
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
      margin-left: 15px;
      font-weight: bold;
  }
  .popover-main{
    width: calc(100% - 30px);
    padding: 20px 15px;
  }
  .iframe{
    width: 864px;
    height: 515px;
    outline: 1px solid red;
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
