<template>
  <div class="accounting ">

    <!--<div class="utop">-->
    <!--<v-operating-guide></v-operating-guide>-->
    <!--</div>-->

    <!--<div class="under">-->
      <div class="umiddle">
        <!--<div class="umiddle-sun">-->
        <div class="umiddle-sun-left">      <!--左边的 账务信息小版块 -->
          <v-accounting-info-block></v-accounting-info-block>
        </div>
        <div class="umiddle-sun-right">
          <div class="umiddle-sun-right-top">
            <div class="umiddle-sun-right-top_title">  <!--右边的 动态信息标题块 -->
              <i class="iconfont icon-jishiben handling-img blue"></i>
              <span class="plate-title left4">动态信息</span>
              <span class="listNum" v-if="balanceIagnosis['dynamicList']">{{balanceIagnosis['dynamicList'].length}}</span>
            </div>
            <span class="umiddle-sun-right-top_content" v-if="balanceIagnosis['dynamicList']" v-for="(item,key) in balanceIagnosis['dynamicList']">
                {{key+1+', '}}{{item.labelDisplay}}
              </span><!--右边的 动态信息内容块 -->
          </div>
          <div class="umiddle-sun-right-bottom">
            <div class="umiddle-sun-right-bottom_title">  <!--诊断报告标题块 -->
              <i class="iconfont icon-jishiben handling-img blue"></i>
              <span class="plate-title left4">诊断报告</span>
            </div>
            <div class="umiddle-sun-right-bottom_content">  <!--诊断报告内容块 -->
              <div v-for="item in balanceIagnosis['iagnosisList']" class="diagnostic-title-btn" @click="changeHtml(item)" v-on:mouseleave="nowId=''" :class="{'color-ash': item.labelType=='1','color-blue':  item.labelType=='2','color-red':  item.labelType=='3'}">
                <el-tooltip :disabled="!(item.id == nowId)" :content="item.labelContent" placement="bottom" effect="light">
                    <span class="diagnostic-title">
                      {{item.labelDisplay}}
                    </span>
                </el-tooltip>
              </div>
              <!--<div v-for="item in testBalanceIagnosis['dynamicList']" class="diagnostic-title-btn" @click="changeHtml(item)" v-on:mouseleave="nowId=''" :class="{'color-ash': item.labelType=='1','color-blue':  item.labelType=='2','color-red':  item.labelType=='3'}">-->
              <!--<el-tooltip :disabled="!(item.id == nowId)" :content="item.labelContent" placement="bottom" effect="light">-->
              <!--<span class="diagnostic-title">-->
              <!--{{item.labelDisplay}}-->
              <!--</span>-->
              <!--</el-tooltip>-->
              <!--</div>-->

            </div>
            <div class="diagnostic-action">
              <div v-for="item in balanceIagnosis['dynamicList']" v-if="item.labelType=='1'" class="diagnostic-action-list">
                <span class="diagnostic-msg">{{item.labelContent}}</span>
                <div class="diagnostic-title-btn color-blue"><span>{{item.labelTable}}</span></div>
              </div>
              <!--<div v-for="item in testBalanceIagnosis" v-if="item.labelType=='1'" class="diagnostic-action-list">-->
              <!--<span class="diagnostic-msg">{{item.labelContent}}</span>-->
              <!--<div class="diagnostic-title-btn color-blue"><span>{{item.labelTable}}</span></div>-->
              <!--</div>-->

            </div>
          </div>
        </div>
        <!--</div>-->
      </div>
      <div class="ubottom">
        <div class="ubottom-header">
          <div class="ubottom-header-item" :class="{ colorActive: num=='1' }" @click="turnPage('1','vPrepaidPayment')">充值缴费查询</div>
          <div class="ubottom-header-item" :class="{ colorActive: num=='2' }" @click="turnPage('2','vBalanceChange')">余额变动查询</div>
          <div class="ubottom-header-item" :class="{ colorActive: num=='3' }" @click="turnPage('3','vStopMachineRecord')">停复机记录查询</div>
          <div class="ubottom-header-item" :class="{ colorActive: num=='4' }" @click="turnPage('4','vHistoryCallBack')">历史话费返还</div>
          <div class="ubottom-header-item" :class="{ colorActive: num=='5' }" @click="turnPage('5','vHistoryRedPacketBack')">历史红包返还</div>
          <div class="ubottom-header-item ubottom-header-item-none" :class="{ colorActive: num=='6' }" @click="turnPage('6',selectWidget)">
            <div class="accounting-select">
              <el-dropdown trigger="click"  @command="handleCommand">
                <span class="el-dropdown-link">
                  <span>{{selectName}}</span><i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="历史余额变动">历史余额变动</el-dropdown-item>
                  <el-dropdown-item command="历史合同欠费查询">历史合同欠费查询</el-dropdown-item>
                  <el-dropdown-item command="卡查询">卡查询</el-dropdown-item>
                  <el-dropdown-item command="坏账查询">坏账查询</el-dropdown-item>
                  <el-dropdown-item command="银行托收代扣信息查询">银行托收代扣信息查询</el-dropdown-item>
                  <el-dropdown-item command="发票记录查询">发票记录查询</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="ubottom-bottom" :style="{left: numLeft}"></div>

        </div>
        <div class="ubottom-middle" :class="{activeYellow: goil}">
          <keep-alive>
            <component :is="title"></component>
          </keep-alive>
        </div>

      </div>

    <!--</div>-->

  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  import vOperatingGuide from '../common/operatingGuide.vue';
  import vAccountingInfoBlock from './accountingInfoBlock.vue';

  import vPrepaidPayment from './tabs/prepaidPayment.vue';
  import vBalanceChange from './tabs/balanceChange.vue';
  import vStopMachineRecord from './tabs/stopMachineRecord.vue';
  import vHistoryCallBack from './tabs/historyCallsBack.vue';
  import vHistoryRedPacketBack from './tabs/historyRedPacketBack.vue';
  import vHistoryBalanceChange from './tabs/historyBalanceChange.vue';
  import vHistoryContractArrears from './tabs/historyContractArrears.vue';
  import vCardQuery from './tabs/cardQuery.vue';
  import vBadDebtInquiry from './tabs/badDebtInquiry.vue';
  import vBankCollectionWithHolding from './tabs/bankCollectionWithholding.vue';
  import vInvoiceRecord from './tabs/invoiceRecord.vue';

  export default {

    data() {
      return{
        activeName: 'czjf',      //下面的标签页  打开页面默认跳转块
        numLeft:'0px',
        num: '1',
        title:'vPrepaidPayment',
        nowId:'',
        nowStatus: true,
        selectName:'其他',
        selectWidget:'vHistoryBalanceChange',
        testBalanceIagnosis: [
        ]
      }
    },
    created(){
    },
    activated(){
      this.balanceInfoActions();
      this.balanceCreditActions();
//      this.queryBookSchemeInfoActions();
      this.epayChargeBillProgressActions();
      this.oweChargeDetailActions();
      this.balanceCreditActions();
      this.balanceIagnosisActions();
    },
    mounted: function () {
    },
    methods: {
      ...mapActions([                                   //0000000000000
        'popoverAlert',
        'balanceInfoActions',
        'balanceCreditActions',
        'queryBookSchemeInfoActions',
        'epayChargeBillProgressActions',
        'oweChargeDetailActions',
        'queryRechargeListActions',
        'balanceChangeListActions',
        'queryCallLimitListActions',
        'queryBillReturnDetailActions',
        'getEpayChargeBillRecordActions',
        'queryBalanceLogTotalActions',
        'queryOweChargeInfoActions',
        'balanceIagnosisActions'
      ]),
      handleCommand(command){
        if(command=='历史余额变动'){
          console.log(command)
          this.selectName='历史余额变动';
          this.selectWidget='vHistoryBalanceChange';
          this.turnPage('6','vHistoryBalanceChange')
        }else if(command=='历史合同欠费查询'){
          console.log(command)
          this.selectName='历史合同欠费查询';
          this.selectWidget='vHistoryContractArrears';
          this.turnPage('6','vHistoryContractArrears')
        }
      },
      changeHtml(item){
        this.nowStatus =!this.nowStatus;
        console.log(this.nowId)
        if(item.labelType=='1'){

        }else if(item.labelType=='2'){
          if(this.nowId!=item.id){
            this.nowId=item.id;
          }else{
            this.nowId=''
          }
        }else if(item.labelType=='3'){
          this.$store.state.page.goil=true;
          let data={
            'number':'',
            'startDate':'',
            'endDate':''
          };
          data.number=this.personMessage.billAccountNum;
          data.startDate=item.startTime;
          data.endDate=item.endTime;
          if(item.labelTable=='充值缴费查询'){
            this.turnPage('1','vPrepaidPayment');
            this.queryRechargeListActions(data);
          }else if(item.labelTable=='余额变动查询'){
            this.turnPage('2','vBalanceChange')
            this.balanceChangeListActions(data)
          }else if(item.labelTable=='停复机记录查询'){
            this.turnPage('3','vStopMachineRecord')
            this.queryCallLimitListActions(data)
          }else if(item.labelTable=='历史话费返还'){
            this.turnPage('4','vHistoryCallBack')
            this.queryBillReturnDetailActions(data)
          }else if(item.labelTable=='历史红包返还'){
            this.turnPage('5','vHistoryRedPacketBack')
            this.getEpayChargeBillRecordActions(data)
          }else if(item.labelTable=='历史余额变动'){
            this.turnPage('6','vHistoryBalanceChange')
            this.queryBalanceLogTotalActions(data)
          }else if(item.labelTable=='历史合同欠费查询'){
            this.turnPage('6','vHistoryContractArrears')
            this.queryOweChargeInfoActions(data)
          }else if(item.labelTable=='卡查询'){
            this.turnPage('6','vCardQuery')
//            this.queryOweChargeInfoActions(data)
          }
        }else{

        }
      },
      turnPage(num,name){

        if(num=='6' && this.selectName=='其他'){
          this.selectName='历史余额变动';

        }
        console.log(name)
        this.numLeft=(num-1)*120+'px';
        this.num=num;
        if(name){
          this.title=name
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    components:{

      vOperatingGuide,vAccountingInfoBlock,

      vPrepaidPayment,vBalanceChange,vStopMachineRecord,vHistoryCallBack,vHistoryRedPacketBack,vHistoryBalanceChange,
      vHistoryContractArrears,vCardQuery,vBadDebtInquiry,vBankCollectionWithHolding,vInvoiceRecord,
    },
    computed:{
      ...mapGetters([
        'homePageStyle','ivrFollowData','personMessage','iframeSrc','balanceInfo','balanceCredit','oweChargeDetail','balanceIagnosis','goil'
      ])
    }
  }


</script>
<style>

  .el-tooltip__popper{
    color: #333333;
  }
</style>
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
  .distance15{
    margin-left:15px;
  }
  .lh40{
    line-height:40px;
  }
  .lh39{
    line-height:39px;
  }
  .lh30{
    line-height:30px;
  }
  .lh24{
    line-height:24px;
  }

  /*字体相关---完*/

  /* 颜色相关----*/

  .color-ash{
    background:#F0F0F0;
  }
  .color-blue{
    background:#F4FAFF;
    border:1px solid #67B7FF;
  }
  .color-red{
    background:#FFF9F3;
    border:1px solid #FA9126;
  }

  .red{
    color:#F44848;
  }
  .blue{
    color:#1476cc;
  }

  /* 颜色相关----完*/
  .handling-img{
    float:left;
    font-size:18px;
    margin-top:0px;
  }
  .left4{margin-left:4px;}

  /* 公共----*/
  .left10{
    margin-left:10px;
    float:left;
  }
  .left15{
    margin-left:15px;
    float:left;
  }
  .floatleft{
    float:left;
  }
  .width100{
    width:100px;
  }
  .width120{
    width:120px;
  }
  .width150{
    width:150px;
  }
  .width200{
    width:200px;
  }
  .width250{
    width:250px;
  }
  /* 公共----完*/


  .accounting{
    width:100%;
    height:100%;
    /*padding:15px 0px;*/
    /*height:700px;*/
    /*margin-top:15px;*/
    /*position:relative;*/
    /*float:left;*/
    /*background:#888;*/
    /*display:flex;*/
    /*flex-direction: column;*/

    display:flex;
    flex-direction:column;
  }
  /*.accounting-block-one{  width:auto;  }*/

  .accounting-select{  }


  .utop{
    margin-top:20px;
    /*flex:40;*/
  }

  /*.under{*/
    /*!*flex:1;*!*/
    /*width:100%;*/
    /*height:100%;*/
    /*!*margin-bottom:15px;*!*/
    /*!*background:#1c8de0;*!*/

    /*display:flex;*/
    /*flex-direction:column;*/

  /*}*/

  /*中间整个板块-------------------------------------------------------------------*/
  .umiddle{
    flex:370;
    padding-top:10px;
    /*background:#888;*/

    display:flex;
    flex-direction:row;
  }

  /*中间的左边板块（账务板块）---------------------------*/
  .umiddle-sun-left{
    flex:490;

    display:flex;
    flex-direction: row;;
  }

  /*中间的左边板块（账务板块）---------------------------完*/




  /*中间的右边板块（包含2个)-------------------------------*/

  .umiddle-sun-right{
    flex:490;
    margin-left:10px;
    /*background:#785447;*/
    /*float:left;*/
    /*position: relative;*/
    display:flex;
    flex-direction:column;
  }
  /*中间的右上板块（动态信息板块)-------*/
  .umiddle-sun-right-top{
    flex:150;
    border:1px solid #B2DAFF;
    border-radius:5px;
    padding:0px 15px;
    background:#fff;

  }

  .umiddle-sun-right-top_title{
    width: auto;
    height: 40px;
    line-height: 40px;
  }


  .listNum{
    background: #33A0FF;
    padding-left: 10px;
    padding-right: 10px;
    width: auto;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    color: #ffffff;
    font-size: 12px;
    border-radius: 10px;
    margin-left:5px;
    margin-top:-5px;
  }

  .umiddle-sun-right-top_content{
    width: auto;
    height: auto;
    /*background:#333;*/
    line-height:24px;
    font-size:12px;
    color:#333;
  }

  /*中间的右上板块（动态信息板块)-------完*/

  /*中间的右下板块（诊断报告板块)-------*/

  .umiddle-sun-right-bottom{
    flex:210;
    margin-top:10px;
    border:1px solid #B2DAFF;
    border-radius:5px;
    background:#fff;
  }

  .umiddle-sun-right-bottom_title{
    width: auto;
    padding:0px 15px;
    height: 40px;
    line-height: 40px;
  }
  .umiddle-sun-right-bottom_content{
    width: 100%;
    float: left;
    height: auto;
    font-size:12px;
    padding:0px 15px;
    color:#333;
    border-bottom: 1px solid #E5E5E5;
  }


  .diagnostic-title-btn{
    width: auto;
    float: left;
    text-align: center;
    height: 28px;
    border-radius: 3px;
    cursor: pointer;
    line-height: 28px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
  }
  .diagnostic-title{
    width: 100%;
    height: 100%;
    display: inline-block;
    color:#333;
    border-radius: 5px;
    font-size:12px;
  }


  hr{
    margin-top:10px;
    width:100%;
    color:#E5E5E5;
    border:1px solid #E5E5E5;
    /*height:1px;*/
  }

  .diagnostic-action{
    width: 100%;
    height: auto;
    float: left;
  }

  .diagnostic-action-list{
    width: auto;
    height: 30px;
    margin-top: 5px;
  }

  .diagnostic-action-list span{
    float: left;
    margin-right: 5px;
    color:#333;
  }
  .diagnostic-msg{
    font-size:12px;
    line-height:30px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
  }

  /*中间的右下板块（诊断报告板块)-------完*/

  /*中间的右边板块（包含2个)-------------------------------完*/

  /*中间整个板块-------------------------------------------------------------------完*/




  /*下面整个板块--------------------------------------------------------------------*/
  .ubottom{
    margin-top:10px;
    flex:280;
    background:#fff;
    border:1px solid #B2DAFF;
    border-radius:5px;

    display:flex;
    flex-direction:column;
  }
  .ubottom-header{
    /*width: 100%;*/
    /*height: 40px;*/
    flex:40;
    line-height: 38px;
    cursor: pointer;
    border-bottom: 1px solid #D9D9D9;
    position: relative;

    /*display:flex;*/
    /*align-items:center;*/


  }
  .ubottom-bottom{
    position: absolute;
    left: 0;
    /*top: 38px;*/
    bottom:0;
    height: 3px;
    width: 120px;
    transition: left 0.3s ease;
    background: #33A0FF;
  }
  .ubottom-middle{
    padding: 10px 15px 9px 15px;
    flex:238;
    /*background:#888;*/

    display:flex;
    flex-direction:column;
  }

  .ubottom-header-item{
    width: 120px;
    height: 40px;
    text-align: center;
    color: #4F4F4F;
    float: left;
  }
  .ubottom-header .colorActive{
    color: #33A0FF;
  }
  .ubottom-header .colorActive .el-dropdown-link{
    color: #33A0FF;
  }
  .ubottom-header-item-none{
  }
  .el-dropdown-link{
    font-size: 12px;
  }


  /*下面整个板块-------------------------------------------------------------------完*/


</style>
