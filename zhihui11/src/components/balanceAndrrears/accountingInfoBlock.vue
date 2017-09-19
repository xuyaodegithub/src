<template>
  <div class="accounting-info-block"> <!--左边的账务信息板块 -->

      <div class="accountingInformation-top">
        <div class="top-button1">
          <i class="iconfont icon-qian handling-img blue"></i>
          <span class="plate-title lh24 left4">账务信息</span>
        </div>

        <div class="top-button2">
          <i class="iconfont icon-xinxi handling-img blue"></i>
          <el-button type="text" @click="remindSmsInquiryTurn()" class="small-title left4" style="margin-top:-4px;">提醒短信查询</el-button>
        </div>

        <div class="top-button3">
          <i class="iconfont icon-xin- handling-img red"></i>
          <el-button type="text" @click="serviceSynergyTurn()" class="small-title left4" style="margin-top:-4px;">服务协同</el-button>
        </div>
      </div>
      <div class="accountingInformation-bottom" v-show="balanceInfo.oweCharge =='1'">    <!--账务信息小版块内的表格 欠费表-->
          <div class="ac-table-left">
            <div class="left-block"> <span class="typeface">欠费金额</span> </div>
            <div class="left-block"> <span class="typeface">可用赠金</span> </div>
            <div class="left-block"> <span class="typeface">剩余信用额度</span> </div>
            <div class="left-block"> <span class="typeface">待生效金额</span> </div>
            <div class="left-block"> <span class="typeface">待返红包</span> </div>
            <div class="left-block"> <span class="typeface">付费类型</span> </div>
            <div class="left-block"> <span class="typeface">C网是否有协议</span> </div>
            <div class="left-block1"> <span class="typeface">销售品</span> </div>

          </div>
          <div class="ac-table-middle">
            <div class="middle-block"><!-- 欠费金额-->
              <span class="typeface red ">{{balanceInfo.arrears}}</span>
              <el-button type="text" @click="arrearsDetailsTurn()" class="typeface blue">欠费明细</el-button>
            </div>
            <div class="middle-block"> <!-- 可用赠金-->
              <span class="typeface ">{{balanceInfo.availableAmount}}</span>
              <el-button type="text" @click="canUseMoneyTurn()" class="typeface blue">详情</el-button>
            </div>
            <div class="middle-block"><!-- 剩余信用额度-->
              <span class="typeface ">{{balanceCredit.remainAmount}}</span>
              <el-button type="text" @click="quotaDetailsTurn()" class="typeface blue">详情</el-button>
            </div>
            <div class="middle-block"><!-- 待生效金额-->
              <span class="typeface ">{{balanceInfo.uselessBalanceProm}}</span>
              <el-button type="text" @click="amountInEffectTurn()" class="typeface blue">详情</el-button>
            </div>
            <div class="middle-block"><!-- 待返红包-->
              <span class="typeface " v-if="epayChargeBillProgress[0]">{{epayChargeBillProgress[0].restAmount}}</span>
              <el-button v-if="epayChargeBillProgress[0]" type="text" @click="returnRedPacketsTurn()" class="typeface blue">详情</el-button>
            </div>
            <div class="middle-block">
              <span class="typeface " v-if="balanceInfo.payType=='1'">后付费</span>
              <span class="typeface " v-if="balanceInfo.payType=='2'">预付费</span>
            </div>
            <div class="middle-block"> <span class="typeface">无</span> </div>
            <div class="middle-block1">
              <el-button type="text" @click="" class="typeface blue">
                <span v-if="personHead.mixFlag=='0'">{{personHead.promName}}</span>
                <span v-if="personHead.mixFlag!='0'">{{promotionName}}</span>
                <span v-if="personHead.mixFlag=='0'">（单）</span>
                <span v-if="personHead.mixFlag=='1'">（融）</span>
              </el-button>
            </div>

          </div>
          <div class="ac-table-right">
            <div class="right-block-title"><span class="typeface">欠费情况</span></div>
            <div class="right-block-content">
              <span class="typeface red" v-for="item in oweChargeDetail['OverDueQK']">{{item}}</span>
            </div>

          </div>

      </div>




      <div class="accountingInformation-bottom" v-show="balanceInfo.oweCharge =='0'">    <!--账务信息小版块内的表格 有余额表-->
          <div class="ac-table-left">
            <div class="left-block"> <span class="typeface ">可用余额(总)</span> </div>
            <div class="left-block"> <span class="typeface ">剩余信用额度</span> </div>
            <div class="left-block"> <span class="typeface ">待生效金额</span> </div>
            <div class="left-block"> <span class="typeface ">待返红包</span> </div>
            <div class="left-block"> <span class="typeface ">付费类型</span> </div>
            <div class="left-block"> <span class="typeface ">C网是否有协议</span> </div>
            <div class="left-block1"><span class="typeface ">销售品</span> </div>

          </div>
          <div class="ac-table-middle1">
            <div class="middle-block"><!-- 可用余额(总)-->
              <span class="typeface ">{{balanceInfo.balance}}</span>
              <el-button type="text" @click="canUseMoneyTurn()" class="typeface blue " >余额明细</el-button>
            </div>
            <div class="middle-block"><!-- 剩余信用额度-->
              <span class="typeface ">{{balanceCredit.remainAmount}}</span>
              <el-button type="text" @click="quotaDetailsTurn()" class="typeface blue" >详情</el-button>
            </div>
            <div class="middle-block"><!-- 待生效金额-->
              <span class="typeface ">{{balanceInfo.uselessBalanceProm}}</span>
              <el-button type="text" @click="amountInEffectTurn()" class="typeface blue" >详情</el-button>
            </div>
            <div class="middle-block"><!-- 待返红包-->
              <span class="typeface " v-if="epayChargeBillProgress[0]">{{epayChargeBillProgress[0].restAmount}}</span>
              <el-button type="text" v-if="epayChargeBillProgress[0]"  @click="returnRedPacketsTurn()" class="typeface blue">详情</el-button>
            </div>
            <div class="middle-block">
              <span class="typeface " v-if="balanceInfo.payType=='1'">后付费</span>
              <span class="typeface " v-if="balanceInfo.payType=='2'">预付费</span>
            </div>
            <div class="middle-block">
              <span class="typeface ">无</span>
            </div>
            <div class="middle-block1">
              <el-button type="text" @click="" class="typeface blue ">
                <span v-if="personHead.mixFlag=='0'">{{personHead.promName}}</span>
                <span v-if="personHead.mixFlag!='0'">{{promotionName}}</span>
                <span v-if="personHead.mixFlag=='0'">（单）</span>
                <span v-if="personHead.mixFlag=='1'">（融）</span>
              </el-button>
            </div>
          </div>

      </div>
  </div>

</template>


<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
//        balanceInfo: {
//          "oweCharge": 1,
//          "balance": null,
//          "arrears": "247.28",
//          "availableAmount": "0.00",
//          "payType": "1",
//          "uselessBalanceProm": "20.00"
//        }
      }
    },
    computed:{
      ...mapGetters([
        'balanceInfo','balanceCredit','queryBookSchemeInfo','personHead','promotionName','epayChargeBillProgress','oweChargeDetail'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert','oweChargeDetailActions','balanceDeatilActions','balanceCreditActions','queryBookSchemeInfoActions','epayChargeBillProgressActions','queryAlarmInfoActions','smsContentListActions'
      ]),
      remindSmsInquiryTurn(){                           //提醒短信查询
        this.popoverAlert('vRemindSmsInquiry')
        this.smsContentListActions();
      },
      serviceSynergyTurn(){                           //服务协同
        this.popoverAlert('vServiceSynergy');
      },
      arrearsDetailsTurn(){                           //欠费明细
        this.popoverAlert('vArrearsDetails');
      },
      canUseMoneyTurn(){                           //余额明细
        this.popoverAlert('vCanUseMoney');
        this.balanceDeatilActions();
      },
      quotaDetailsTurn(){                           //剩余信用额度-额度详情
        this.popoverAlert('vQuotaDetails');
        this.balanceCreditActions();
      },
      amountInEffectTurn(){                           //待生效金额
        this.popoverAlert('vAmountInEffect')
        this.queryBookSchemeInfoActions();
      },
      returnRedPacketsTurn(){                           //待返红包
        this.popoverAlert('vReturnRedPackets')
      },
      balanceDetailsTurn(){                           //余额明细
        this.popoverAlert('vBalanceDetails')
      },
      changeDetailsTurn(){                           //变动明细
        this.popoverAlert('vChangeDetails')
      },
    }
  };
</script>


<style scoped>
  /*字体相关---*/
  .plate-title{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .small-title{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
    margin-left:10px; /*通用字距离左边默认为10px 修改额外添加 */
    float:left;
  }

  /*.lh39{ line-height: 350%}*/
  /*.lh39{line-height:39px;}*/
  .lh30{  line-height: 30px;  }
  .lh24{ line-height: 24px  }

  /*字体相关---完*/

  /* 颜色相关----*/

  .red{  color:#F44848;  }
  .blue{  color:#1476cc;  }

  /* 颜色相关----完*/


  /* 公共----*/
  .left4{margin-left:4px;}
  .top4{margin-top:4px;}
  .top5{margin-top:5px;}
  .top6{margin-top:6px;}
  .top8{margin-top:8px;}
  .top10{margin-top:10px;}
  /* 公共----完*/


  /*账务板块---------------------------*/
  /*.accounting-block-one .umiddle .umiddle-sun .umiddle-sun-left{*/
  /*flex:1;*/
  /*!*width:490px;*!*/
  /*!*background:#02A8F3;*!*/
  /*}*/

  .accounting-info-block{
    flex:1;
    width:calc(100% - 30px);
    padding:10px 15px;
    border:1px solid #B2DAFF;
    border-radius:5px;
    background:#fff;

    display:flex;
    flex-direction:column;
  }


  /*.accountingInformation{*/
    /*!*height:330px;*!*/
    /*!*flex:1;*!*/
    /*!*width:calc(100% - 30px);*!*/
    /*!*padding:10px 15px;*!*/
    /*!*border:1px solid #B2DAFF;*!*/
    /*!*border-radius:5px;*!*/
    /*!*background:#fff;*!*/

    /*!*display:flex;*!*/
    /*!*flex-direction:column;*!*/
  /*}*/

  .accountingInformation-top{
    flex:30;
    float:left;
    /*background:#999;*/
  }
  .handling-img{
    float:left;
    font-size:18px;
    margin-top:2px;
  }

  .top-button1{
    width:auto;
    float:left;
    /*background:#888;*/
  }


  .top-button2{
    /*width:78px;*/
    width:auto;
    float:right;
    /*background:#888;*/
  }

  .top-button3{
    margin-right:14px;
    width:auto;
    float:right;
    /*background:#888;*/
  }

  .accountingInformation-bottom{
    flex:315;
    position: relative;
    /*float:left;*/
    border:1px solid #D1EAFD;

    display:flex;
    flex-direction:row;

  }


  /*.ac-table{*/
    /*float:left;*/
    /*width:100%;*/
    /*height:100%;*/

    /*display:flex;*/
    /*flex-direction:row;*/
  /*}*/
  .ac-table-left{       /*表格左边块*/
    flex:110;
    background:#F0F8FE;
    border-right:1px solid #D1EAFD;

    display:flex;
    flex-direction:column;
  }
  .left-block{
    flex:1;
    border-bottom:1px solid #D1EAFD;

    display:flex;
    /*justify-content: center;      !*水平居中*!*/
    align-items: center;          /*垂直居中*/
  }
  .left-block1{
    flex:1;

    display:flex;
    align-items: center;
  }


  .ac-table-middle{     /*表格中间块 欠费用*/
    flex:184;
    background:#fff;
    border-right:1px solid #D1EAFD;

    display:flex;
    flex-direction:column;

  }
  .ac-table-middle1{     /*表格中间块 余额用*/
    flex:350;
    background:#fff;

    display:flex;
    flex-direction:column;
  }
  .middle-block{
    flex:1;
    border-bottom:1px solid #D1EAFD;

    display:flex;
    align-items:center;
  }
  .middle-block1{
    flex:1;

    display:flex;
    align-items:center;
  }

  .ac-table-right{        /*表格右边块*/
    flex:164;
    background:#F0F8FE;

    display:flex;
    flex-direction:column;
  }

  .right-block-title{
    flex:30;
    float:left;

    display:flex;
    align-items:center;

  }
  .right-block-content{
    flex:250;
    float:left;

    padding:10px 5px;

  }



  /*账务信息板块---------------------------完*/

</style>
