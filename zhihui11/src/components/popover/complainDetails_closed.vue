<template>
  <div class="demo complainDetail_closed">
    <div class="popover-head">
      <span class="title">投诉详情-已结案</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <p class="row"><span class="tit">结案时间：</span><span>2017-05-19 09:15:26</span></p>
      <span class="abs">结案描述：</span>
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
  .popover-main .row{
    margin-bottom: 10px;
  }
  .popover-main .tit{
    margin-right: 5px;
  }
  .popover-main .abs{
    position: absolute;
  }
</style>
<style>
  .complainDetail_closed .el-textarea{
    width: 505px;
    height: 145px;
    margin-left: 64px;
  }
  .complainDetail_closed .el-textarea__inner{
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
