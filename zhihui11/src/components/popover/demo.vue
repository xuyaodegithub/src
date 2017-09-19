<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">asdas</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    height: 300px;
    background: #ffffff;
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
    background: #ffffff;
    font-size: 14px;
    border-bottom: 1px solid #EEF1F5;
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
  }
</style>
<script>
  import { mapActions } from 'vuex'
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
      ])
    }
  };
</script>
