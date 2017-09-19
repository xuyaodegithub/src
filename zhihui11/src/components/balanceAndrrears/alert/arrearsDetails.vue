<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">欠费明细</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-main">
      <div class="table-head">
        <div class="head-item"><span>欠费账期</span></div>
        <div class="head-item"><span>在拖状态</span></div>
        <div class="head-item"><span>费用类型</span></div>
        <div class="head-item"><span>欠费金额</span></div>
      </div>
      <div class="table-box">
        <div v-for="item in oweChargeDetail['OverDueDetail']">
          <div class="table-list" v-for="itemSun in item['lstItem']">
            <div class="head-item"><span>{{item.billingCycleId}}</span></div>
            <div class="head-item"><span>正常欠费</span></div>
            <div class="head-item"><span>{{itemSun.itemCode}}</span></div>
            <div class="head-item"><span>{{itemSun.chargeAmount}}</span></div>
          </div>
        </div>
      </div>
      <div class="option">
        <span class="wordtype">合计：</span>
        <span class="wordtype">{{balanceInfo.arrears}}</span>

      </div>
    </div>


  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    height:200px;
    background: #F0FAFF;
    margin-left: -200px;
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
    padding: 10px 12.5px;
    width: calc(100% - 25px);
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  /*---------↓*/

  .option{
    height:20px;
    width:100%;
    float:left;
    margin-top:5px;
    /*background:#00ff00;*/
  }

  .wordtype{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#F44848;
    float:left;
  }




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
    flex: 1;
  }
  .table-head .big{
    width: 100%;
    flex: 4;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 82px;
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

      };
    },
    computed:{
      ...mapGetters([
        'oweChargeDetail','balanceInfo'
      ])
    },
    created(){
    },
    mounted: function () {
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert',
        'oweChargeDetailActions'
      ])
    }
  };
</script>
