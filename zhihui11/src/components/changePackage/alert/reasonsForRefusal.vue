<template>
  <div class="demo incomingHistory">            <!-- 不接受原因 -->
    <div class="popover-head">
      <span class="title">不接受原因</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <div class="selection-one">
        <div class="top5"><el-radio class="selectclick" v-model="result_one" label="1"><span class="typeface">资费高</span></el-radio></div>
        <div class="top5"><el-radio class="selectclick" v-model="result_one" label="2"><span class="typeface">还需考虑</span></el-radio></div>
        <div class="top5"><el-radio class="selectclick" v-model="result_one" label="3"><span class="typeface">他网倾向</span></el-radio></div>
        <div class="top5"><el-radio class="selectclick" v-model="result_one" label="4"><span class="typeface">不需要某电信资产</span></el-radio></div>
      </div>
      <div class="selection-two" v-if="result_one=='4'">
        <div class="top5"><el-radio class="selectclick" v-model="result_two" label="1"><span class="typeface">已有或不需要手机</span></el-radio></div>
        <div class="top5"><el-radio class="selectclick" v-model="result_two" label="2"><span class="typeface">已有或不需要 ITV</span></el-radio></div>
        <div class="top5"><el-radio class="selectclick" v-model="result_two" label="3"><span class="typeface">已有或不需要宽带</span></el-radio></div>

      </div>

    </div>

    <div class="popover-bottom">
        <el-button class="primary-button" type="primary">提交</el-button>

    </div>





  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    height:310px;
    background: #F0FAFF;
    margin-left: -20px;
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
    /*font-weight: bold;*/
    user-select: none;
  }
  .popover-head .small-title{
    font-size: 12px;
    color: #999999;
    font-weight: normal;
  }
  .popover-main{
    padding: 10px 15px 15px 15px;
    width: calc(100% - 30px);
    height:178px;
    border-bottom: 1px solid #C5E2F0;

    display: flex;
    flex-direction:column;
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .selection-one{
    /*background:#eee;*/
    /*margin-left:10px;*/

    display: flex;
    flex-direction:column;
  }
  .selection-two{
    /*background:#888;*/
    margin-left:20px;

    display: flex;
    flex-direction:column;

  }

  .selectclick{
    margin-left:10px;
  }


  .popover-bottom{
    height:60px;

    display:flex;
    align-items:center;
    justify-content:center;
  }
  .primary-button{
    width:80px;
  }




  /*---------↓*/

  .titleface{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .blueface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }

  .top5{margin-top:5px;}

  /*---------↑*/
  .table-head{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #F1F4F7;
    border: 1px solid #E7ECF1;
  }
  .table-head .head-item{
    width: 100%;
    flex: 1.5;
  }
  .table-head .big1{
  width: 100%;
  flex: 3;
  }
  .table-head .big2{
    width: 100%;
    flex: 4;
  }
  .table-head .big3{
    width: 100%;
    flex: 4;
  }
  .table-head .big4{
    width: 100%;
    flex: 3;
  }
  .table-head .big5{
    width: 100%;
    flex: 3;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 300px;
    overflow: auto;
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #ffffff;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list .head-item{
    width: 100%;
    flex: 1;
  }
  .table-list .head-item .blue{
    color: #1476CC;
    cursor: pointer;
  }
  .table-list .big{
    width: 100%;
    flex: 2;
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

        result_one:'',
        result_two:'',

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
