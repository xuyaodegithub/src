<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">变动明细</span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
    </div>
    <div class="popover-headtwo">

        <span class="tabs wordtype " v-on:click.self="open1()" :class="{'underline':isUnderLineShow1}">调账记录查询</span>
        <span class="tabs wordtype " v-on:click.self="open2()" :class="{'underline':isUnderLineShow2}">预存转移</span>

    </div>
    <div class="popover-main">

      <div  v-show="isShow">
        <div class="table-head">
          <div class="head-item "><span>调账账目</span></div>
          <div class="head-item "><span>调账金额</span></div>
          <div class="head-item "><span>余额类型</span></div>
          <div class="head-item "><span>调账账期</span></div>
          <div class="head-item "><span>费用归属账期</span></div>
          <div class="head-item "><span>转外部费用</span></div>
          <div class="head-item "><span>转余额</span></div>
          <div class="head-item "><span>调账员工</span></div>
          <div class="head-item "><span>调账原因</span></div>
          <div class="head-item "><span>调账子原因</span></div>
        </div>
        <div class="table-box">
          <div class="table-list" v-for="item in balanceDetail" v-if="item.balance/100 != '0'">
            <div class="head-item "><span>{{item.balanceType}}</span></div>
            <div class="head-item "><span>{{item.effDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
          </div>
        </div>
      </div>

      <div v-show="isShow2">
        <div class="table-head">
          <div class="head-item "><span>原账本合同号</span></div>
          <div class="head-item "><span>原账本号码</span></div>
          <div class="head-item "><span>原账本余额</span></div>
          <div class="head-item "><span>目标账本合同号</span></div>
          <div class="head-item "><span>目标账本号码</span></div>
          <div class="head-item "><span>目标账本余额类型</span></div>
          <div class="head-item "><span>转移金额</span></div>
          <div class="head-item "><span>转移时间</span></div>
          <div class="head-item "><span>转移时间</span></div>
          <div class="head-item "><span>转移原因</span></div>
        </div>
        <div class="table-box">
          <div class="table-list" v-for="item in balanceDetail" v-if="item.balance/100 != '0'">
            <div class="head-item "><span>{{item.balanceType}}</span></div>
            <div class="head-item "><span>{{item.effDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
            <div class="head-item "><span>{{item.expDate | timeLimit}}</span></div>
          </div>
        </div>
      </div>

    </div>






  </div>
</template>

<style scoped>
  .demo{
    width: 1100px;
    height: 448px;
    background: #F0FAFF;
    margin-left: -450px;
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
  .popover-headtwo{
    width: 100%;
    height: 34px;
    line-height: 34px;
    background: #F0FAFF;
    font-size: 12px;
    border-bottom: 1px solid #D9E5EF;
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
    padding: 7px 12.5px;
    width: calc(100% - 25px);
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  /*---------↓*/

  .option{
    height:34px;
    /*background:#00ff00;*/
    margin-top:10px;
    width:100%;
    float:left;
  }
  .tabs{
    width:80px;
    /*background:#42d885;*/
    margin-left:17px;
    text-align:center;
    cursor:pointer;
  }

  .wordtype{
    font-size:12px;
    line-height:32px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    float:left;
  }

  .underline{
    border-bottom:3px solid #33A0FF;
    color:#3D8DD5;
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
    flex: 2;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 286px;
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

        //初始默认四个值
        isShow:true,
        isShow2:false,
        isUnderLineShow1:true,
        isUnderLineShow2:false,

      }
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
      ]),
      open1:function(){
        this.isUnderLineShow1=true;
        this.isUnderLineShow2=false;
        this.isShow=true;
        this.isShow2=false;
      },
      open2:function(){
        this.isUnderLineShow1=false;
        this.isUnderLineShow2=true;
        this.isShow=false;
        this.isShow2=true;
      }
    }
  };



</script>
