<template>
  <div class="demo cuidan">
      <div class="popover-head">
          <span class="title">催单</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <div class="textarea-wrap" v-if="isCuidan">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入催单原因"
            v-model="textarea">
          </el-input>
        </div>
        <div class="warning-tip" v-else="">
          <p>催单间隔不能少于60分钟</p>
        </div>
      </div>
      <span class="popover-btn">确定</span>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -150px;
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
  }
  .popover-main .el-textarea{
    display: block;
    width: 270px;
    height: 97px;
    margin: 15px auto;
  }
  .popover-main .warning-tip{
    padding: 36px;
    text-align: center;
    font-size: 14px;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 15px auto;
    font-size: 12px;
  }
</style>
<style>
  .cuidan .popover-main .el-textarea__inner{
    font-size: 12px;
    color: #333333;
    height: 97px!important;
  }

</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          isCuidan: true
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
