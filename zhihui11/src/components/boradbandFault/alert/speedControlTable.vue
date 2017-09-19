<template>
  <div class="demo incomingHistory">            <!-- 网速对照表 -->
    <div class="popover-head">
      <span class="title">网速对照表</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
    <iframe class="frame" frameborder="0" scrolling="yes" src="../../../assets/img/duck.png">
    </iframe>



    </div>




  </div>
</template>

<style scoped>
  .demo{
    width: 900px;
    height:523px;
    background: #F0FAFF;
    margin-left: -350px;
    margin-top: -220px;
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
  .popover-head i{          /*头关闭按钮*/
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
  .popover-head .small-title{
    font-size: 12px;
    color: #999999;
    font-weight: normal;
  }
  .popover-main{
    margin: 10px 14px 10px 14px;
    width: calc(100% - 28px);
    background:#fff;
    height:calc(100% - 65px);
  }
  .frame{
    width:100%;
    height:100%;
  }

  /*---------↓*/

  .option{
    background:#00ff00;
    width:100%;
    float:left;
  }
  .wordtype{
    font-size:12px;
    line-height:40px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#F44848;
    float:left;
    background: #333;
  }
  .func_block{
    width:100%;
    height:100%;
    background: #fff;
    float:left;
  }



  /*---------↑*/


  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }



  .table-list .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }
  .popover-main .title{
    margin: 15px 0 12px 0;
    font-weight: 500;
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
        ''
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
