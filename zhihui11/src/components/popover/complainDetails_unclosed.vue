<template>
  <div class="demo complainDetail_unclosed">
    <div class="popover-head">
      <span class="title">投诉详情-未结案</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="left">
        <p class="row"><span class="tit">处理部门：</span><span>省10000台州投诉处理中心</span></p>
        <p class="row"><span class="tit">处理人员：</span><span>张三三</span></p>
        <p class="row"><span class="tit">子单状态：</span><span>已完结</span></p>
      </div>
      <div class="right">
        <p class="row"><span class="tit">处理岗位：</span><span>省10000台州分中心投诉处理岗</span></p>
        <p class="row"><span class="tit">完成时间：</span><span>2017-5-17 13:22</span></p>
        <p class="row"><span class="tit">是否超时：</span><span>否</span></p>
      </div>
      <div class="clear"></div>
      <span class="abs">处理意见：</span>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    width: 600px;
    /*height: 250px;*/
    background: #F0FAFF;
    margin-left: -300px;
    transform: translateY(-50%);
    border-radius: 5px;
    border: 1px solid #90CCE8;
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
    color: #A1C1E2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 15px;
    font-weight: bold;
  }
  .popover-main{
    width: calc(100% - 30px);
    padding: 20px 15px;
  }
  .popover-main .tit{
    display: inline-block;
    margin-right: 5px;
  }
  .popover-main .left,.popover-main .right{
    float: left;
    width: 50%;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .popover-main .abs{
    position: absolute;
  }
</style>
<style>
  .complainDetail_unclosed .el-textarea{
    width: 505px;
    height: 145px;
    margin-left: 64px;
  }
  .complainDetail_unclosed .el-textarea__inner{
    line-height: 18px;
    height: 145px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #333333;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
          textarea: ''
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
