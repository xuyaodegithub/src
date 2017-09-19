<template>
    <div class="package" v-bind:style="homePageBorder">
        <el-row>
            <el-col :span="11">
              <div class="grid-content package-left" @mouseleave="mouseLeaver">
                <el-col :span="11">
                  <div class="grid-content">
                    <div class="head-sculpture" v-bind:class="{ active: isActive }">
                        <img src="../../assets/img/tx_default.png" v-if="personHead == null || personHead == '' || personHead.age == 999 || personHead.age == 0">
                        <img src="../../assets/img/tx_midlife_men.png" v-if="personHead.age <= 60 && personHead.age >= 30 && personHead.gender == '男'">
                        <img src="../../assets/img/tx_midlife_women.png" v-if="personHead.age <= 60 && personHead.age >= 30 && personHead.gender == '女'">
                        <img src="../../assets/img/tx_young_men.png" v-if="personHead.age<30 && personHead.gender == '男'">
                        <img src="../../assets/img/tx_young_women.png" v-if="personHead.age<30 && personHead.gender == '女'">
                        <img src="../../assets/img/tx_old_men.png" v-if="personHead.age>60 && personHead.gender == '男'">
                        <img src="../../assets/img/tx_old_women.png" v-if="personHead.age>60 && personHead.gender == '女'">
                        <div class="turn-button" @mouseover="mouseOver">
                            <div class="turn-button-circle">
                                <span class="sun one"></span>
                                <span class="sun two"></span>
                                <span class="sun three"></span>
                                <span class="sun four"></span>
                            </div>
                        </div>
                        <p class="p-big" v-if="desensitization == true && personHead.customerType=='政企客户'">{{personHead.smallAccountName | nameLimit}}</p>
                        <p class="p-big" v-if="!desensitization == true && personHead.customerType=='政企客户'">{{personHead.smallAccountName}}</p>
                        <div class="person-message-text p-big" v-if="desensitization == true && personHead.customerType!='政企客户'">{{personMessage.accountName | nameLimit}}</div>
                        <div class="person-message-text p-big" v-if="!desensitization == true && personHead.customerType!='政企客户'">{{personMessage.accountName}}</div>
                        <p v-if="personHead!='null'">{{personHead.gender}} <span v-if="personHead.age != 999 && personHead.age != 0 && personHead.age">{{personHead.age}}岁</span></p>
                    </div>
                  </div>
                </el-col>
                <el-col :span="13">
                    <div class="grid-content person-guide">
                        <div class="person-hidden" v-if="personHidden">
                            <!--<p>操作指引</p>-->
                            <!--<el-button size="mini" type="info">账单分析</el-button>-->
                            <!--<div class="text-p">-->
                                <!--<p>操作指引</p>-->
                                <!--<div class="text">-->
                                    <!--订购的流量包无法抵扣已超出的流量-->
                                <!--</div>-->
                            <!--</div>-->
                        </div>
                        <div v-if="bigWindmill" class="Windmill">
                            <div class="big-Windmill">
                                <div class="block-one">
                                    <p>{{personHead.valueType}}</p>
                                    <p>{{personHead.customerTrend}}</p>
                                </div>
                                <div class="small-Windmill one"><span>价值</span></div>
                            </div>
                            <div class="big-Windmill">
                                <div class="block-two" v-if="personHead!=null">
                                    <!--<p>投诉{{personHead.qqwCount}}次</p>-->
                                    <!--<p>超越{{personHead.qqwLeader}}次</p>-->
                                </div>
                                <div class="small-Windmill two"><span>预警</span></div>
                            </div>
                            <div class="big-Windmill">
                                <div class="block-three">
                                  <p>
                                    <span v-if="personHead.serviceMonth">在网{{personHead.serviceMonth}}</span>
                                  </p>

                                  <p v-if="personHead.productStructure">{{personHead.productStructure}}</p>
                                  <p v-if="personHead.qqwLeader == '1'">亲情网群主</p>
                                  <!--<p v-if="personHead.qqwLeader == '1'">亲情网群主+{{personHead.qqwCount}}人群</p>-->
                                  <!--<p v-if="personHead.qqwLeader == '0'">亲情网{{personHead.qqwCount}}位成员</p>-->
                                  <p>
                                    <span v-if="personHead.activeDays">活跃{{personHead.activeDays}}天</span>
                                    <span v-if="!personHead.activeDays && personHead.netFlowRand">{{personHead.netFlowRand.split('，')[1]}}</span>
                                  </p>
                                </div>
                                <div class="small-Windmill three"><span>粘性</span></div>
                            </div>
                            <div class="big-Windmill">
                                <div class="block-four">
                                    <p v-if="birthday == today">生日快乐</p>
                                    <p v-if="personHead.career">{{personHead.career}}</p>
                                </div>
                                <div class="small-Windmill four"><span>个性化</span></div>
                            </div>
                        </div>
                    </div>
                </el-col>
              </div>
            </el-col>
            <el-col :span="13" class="package-right-all">
                <div class="grid-content package-right">
                    <div class="package-right-item small bk-w">
                        <div class="package-right-item-head">客户类型</div><span>{{accountBundle.accountType}}</span><span v-if="accountBundle.ticker">{{'('+accountBundle.ticker+')'}}</span>
                    </div>
                    <div class="package-right-item small">
                        <div class="package-right-item-head">呼入次数</div>
                        <p v-if="callDayList || callMouthList">
                          <span class="blue" @click="popoverAlert(['vIncomingHistory',callDayList])">{{callDayList | callFilter}}</span>日<span class="blue" @click="popoverAlert(['vIncomingHistory',callMouthList])">{{callMouthList | callFilter}}</span>月
                          <span class="blue" @click="showBusinessCodeCallInInfoWinTurn">处理明细</span>
                        </p>
                    </div>
                    <div class="package-right-item small bk-g">
                        <div class="package-right-item-head">付费类型</div>
                        <span v-if="customerAsset.payType == '1'">后付费</span>
                        <span v-if="customerAsset.payType == '2'">预付费</span>
                    </div>
                    <div class="package-right-item small bk-g">
                        <div class="package-right-item-head">余&nbsp; &nbsp; &nbsp;额</div>
                        <div class="arrears-area" v-if="customerAsset.oweCharge == '1'">
                          <p>欠费：<span class="red">{{customerAsset.arrears}}</span>元</p>
                          <p>可用余额：<span class="blue" @click="balanceDetail()" style="font-weight: normal;">{{customerAsset.availableAmount}}</span>元</p>
                        </div>
                        <div class="arrears-area" v-if="customerAsset.oweCharge == '0'">
                          <span class="blue" style="font-weight: normal;color: #1c8de0" @click="balanceDetail()">{{customerAsset.balance}}</span> 元
                        </div>
                    </div>
                    <div class="package-right-item big bk-w">
                        <div class="package-right-item-head">销&nbsp;售&nbsp;品</div>
                        <span style="font-size: 14px" class="" v-if="personHead.mixFlag=='0'">{{personHead.promName}}</span>
                        <span style="font-size: 14px" class="" v-if="personHead.mixFlag!='0'">{{promotionName}}</span>
                        <span style="font-size: 14px" class="" v-if="personHead.mixFlag=='0'">（单）</span>
                        <span style="font-size: 14px" class="" v-if="personHead.mixFlag=='1'">（融）</span>
                        <!--<span style="font-size: 14px">{{saleReturn()}}</span>-->
                        <!--<el-popover-->
                            <!--ref="popover5"-->
                            <!--placement="bottom"-->
                            <!--width="400"-->
                            <!--effect="light"-->
                            <!--trigger="hover">-->
                        <!--<div class="meal－text">-->
                          <!--&lt;!&ndash;<p>乐享4G_199元套餐</p>&ndash;&gt;-->
                          <!--&lt;!&ndash;<p>套餐费199元，国内流量3GB，国内通话700分钟。</p>&ndash;&gt;-->
                          <!--&lt;!&ndash;<p>资费说明：</p>&ndash;&gt;-->
                          <!--&lt;!&ndash;<p>1.国内接听免费，赠送来电显示和189邮箱。</p>&ndash;&gt;-->
                          <!--&lt;!&ndash;<p>2.套餐超出收费：</p>&ndash;&gt;-->
                          <!--&lt;!&ndash;<p>（1）国内流量：不足100MB部分，按0.3元/MB收费，100MB-500MB免费；用户套餐外流量超过500MB时，仍按上述原则（即每超出500MB收费30元）收费，以此类推；</p>&ndash;&gt;-->
                          <!--&lt;!&ndash;<p>（2）国内通话：0.15元/分钟；</p>&ndash;&gt;-->
                          <!--&lt;!&ndash;<p>（3）国内短/彩信：0.1元/条。</p>&ndash;&gt;-->
                        <!--</div>-->
                        <!--</el-popover>-->

                        <!--<i class="el-icon-information font-big icon-color" v-popover:popover5></i>-->
                    </div>
                    <div class="package-right-item small bk-g">
                        <div class="package-right-item-head">星&nbsp; &nbsp; &nbsp;级</div>
                        <span @click="equityCapital('知识库')" v-if="accountBundle.star" class="orange font-normal font-float margin-auto">{{accountBundle.star}}星</span>
                        <i v-if="accountBundle.star" @click="equityCapital('星级权益使用详情')" class="iconfont icon-huiyuanquanyi orange font-normal margin-auto font-float"></i>
                        <span v-if="accountBundle.point" class="custom-point">客户积分<span>{{accountBundle.point}}</span></span>
                    </div>
                    <div class="package-right-item small bk-g">
                        <div class="package-right-item-head">客户经理</div>
                        <span class="font-normal font-float">{{accountBundleManageName()}} </span>
                        <i @click="equityCapital('转客户经理')" v-if="accountBundleManageName() && accountBundleManageName().indexOf('政企')<0" class="iconfont icon-tubiao210 font-float font-normal light margin-auto icon-color"></i>
                        <i @click="equityCapital('短信')" v-if="accountBundleManageName()" class="iconfont icon-youjian font-float font-normal light margin-auto icon-color"></i>
                        <i @click="equityCapital('商机派单')" v-if="accountBundleManageName()" class="iconfont icon-gongdan font-float font-normal light margin-auto icon-color"></i>
                        <el-popover
                        ref="popover4"
                        placement="bottom-end"
                        width="160"
                        effect="light"
                        v-model="visible2"
                        trigger="click">
                        <div class="meal-text-list">
                          <span class="font-normal font-float">{{accountBundle.zqManageName+'（政企）'}} </span>
                          <i @click="equityCapital('短信','政企')" v-if="accountBundleManageName()" class="iconfont icon-youjian font-float font-normal light margin-auto icon-color"></i>
                          <i @click="equityCapital('商机派单','政企')" v-if="accountBundleManageName()" class="iconfont icon-gongdan font-float font-normal light margin-auto icon-color"></i>
                        </div>
                        </el-popover>
                        <i class="el-icon-caret-bottom font-big icon-color" style="margin-left: 5px" v-popover:popover4 v-if="accountBundleChoose()"></i>
                    </div>
                    <div class="package-right-item small" v-if="personMessage.productCode=='INT-MAN-0010'">
                      <div class="package-right-item-head">到期时间</div><span>{{overTime(personHead.cdscExpireDateTime)}}</span><span v-if="personHead.expire=='true'">已到期</span>
                    </div>
                    <div class="package-right-item small" v-if="personMessage.productCode!='INT-MAN-0010'">
                      <div class="package-right-item-head">一证五号</div><span>{{phoneRelNumReturn()}}</span>
                    </div>
                    <div class="package-right-item small" v-if="productCodeChoose()=='宽带'" style="margin-left: -35px;">
                      <div class="package-right-item-head-five">付费/使用速率</div><span>{{flowDataLocal.paySpeed+'/'+flowDataLocal.data+flowDataLocal.type}}</span>
                    </div>
                    <div class="package-right-item small" v-if="productCodeChoose()=='ITV'">
                      <div class="package-right-item-head">速&nbsp; &nbsp; &nbsp;率</div><span>{{flowDataLocal.paySpeed+flowDataLocal.type}}</span>
                    </div>
                    <div class="package-right-item small" v-if="productCodeChoose()=='无'">
                      <div class="package-right-item-head">终端型号</div><span v-if="personHead.terminalTypeName && personHead.terminalModel">{{personHead.modelName}}{{'（'+personHead.terminalTypeName+'）'}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import vStar from '../smallui/star.vue'
    import api from '../../store/fetch/api'
    export default {
        data () {
            return {
                isActive: false,
                personHidden: false,
                bigWindmill: true,
                flowDataLocal: {
                  paySpeed:'',
                  data:'',
                  type:''
                },
                grade: 4,
                today : '',
                visible2: false
            }
        },
        created(){
            let date = new Date();
            let month = date.getMonth()+1;
            let day = date.getDate();
            if( month<10) {
              month = 0 + '' + month;
            }
            if( day<10){
                day = 0 + '' + day;
            }
            this.today = month+day;
        },
        methods: {
            ...mapActions([
              'showBusinessCodeCallInInfoWinTurn','popoverAlert','iframeBlock','getBalanceDetail','phoneRel','setBroadbandRate','setBroadbandRatePage','smallPopoverAlert'
            ]),
            productCodeChoose(){
              if(this.personMessage.productCode=='INT-MAN-0010'){
                return '宽带';
              }else if(this.personMessage.productCode=='OTH-MAN-0019' || this.personMessage.productCode=='OTH-MAN-0034' || this.personMessage.productCode=='OTH-MAN-0020'){
                return 'ITV';
              }else{
                return '无';
              }
            },
            overTime(time){
                if(time=='3000.12.31'){
                  return '';
                }else{
                  return time;
                }
            },
            accountBundleManageName(){
              if((this.personMessage.accountIdType=='营业执照' || this.personMessage.accountIdType=='机构代码') && !this.accountBundle.manageName){
                let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
                if(reg.test(this.accountBundle.zqManageName) && this.accountBundle.accountType=='政企客户' && (this.accountBundle.zqManageName!='' || this.accountBundle.zqManageName!='无客户经理')){
                  return this.accountBundle.zqManageName+'（政企）';
                }else{
                  return '';
                }
              }else if(this.accountBundle.manageName){
                let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
                if(reg.test(this.accountBundle.manageName)){
                  return this.accountBundle.manageName+'（星级）';
                }else{
                  if(this.accountBundle.accountType=='政企客户' && (this.accountBundle.zqManageName!='' || this.accountBundle.zqManageName!='无客户经理')){
                    return this.accountBundle.zqManageName+'（政企）';
                  }else{
                    return '';
                  }
                }
              }else{

              }
            },
            accountBundleChoose(){
              let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
              if(this.accountBundle.zqManageName!='' && this.accountBundle.zqManageName!='无客户经理' && reg.test(this.accountBundle.manageName)){
                  return true;
              }else{
                return false;
              }
            },
            saleReturn(){
                if(this.personMessage.effectiveStartDate){
                    let data = new Date();
                    if(this.personMessage.effectiveStartDate.split(' ')[0].split('-')[1]>=(data.getMonth()+1)){
                        return ' (下月生效)';
                    }else{
                      return '';
                    }
                }
            },
            mouseOver: function () {
                this.personHidden=true;
                this.bigWindmill=false;
                this.isActive=true;
            },
            mouseLeaver: function () {
                this.personHidden=false;
                this.bigWindmill=true;
                this.isActive=false;
            },
            balanceDetail: function(){
                this.getBalanceDetail();
                this.popoverAlert('vBalance')
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1036', '');
            },
            phoneRelNumReturn(){
                if(this.personMessage){
                    if(this.personMessage.productName == '移动电话'){
                      return this.phoneRelNum.relSize;
                    }else{
                      return '';
                    }
                }
            },
            equityCapital: function (name,status) {
              this.visible2=false;
                if(name=='星级权益使用详情'){
                  this.iframeBlock(name)
                  document.getElementById("oldWindow").contentWindow.openPointInfo();
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1032', '');
                }else if(name=='转客户经理'){
                  api.widgetApi('/utils/?__dew_token__='+this.token,this.$store.state.editor.checkWorkTimeMM).then(
                      res=>{
                          if(res.body.data['workTime']){
                            this.popoverAlert('vContactClientsTransfer')
                          }else{
//                            this.popoverAlert('vContactClientsTransfer')
                            this.popoverAlert('vContactClientsManage')
                          }
                      }
                  );
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1033', '');
                }else if(name=='短信'){
                  this.iframeBlock('短信发送');
                  if(status=='政企'){
                    let smsNumber= this.callNo;
                    let smsContent= '尊敬的用户：如需咨询电信业务，可在工作时间(节假日除外)8：30-17：30，联系您的政企客户经理:'+this.accountBundle.zqManageName+'，号码:'+this.accountBundle.zqManageMobile;
                    document.getElementById("oldWindow").contentWindow.sendDirectSms(smsNumber, smsContent);
                  }else{
                    if(this.accountBundleManageName().indexOf('政企')<0){
                      let smsNumber= this.callNo;
                      let smsContent= '尊敬的用户：如需咨询电信业务，可在工作时间(节假日除外)8：30-17：30，联系您的星级客户经理:'+this.accountBundle.manageName+'，号码:'+this.accountBundle.manageMobile;
                      document.getElementById("oldWindow").contentWindow.sendDirectSms(smsNumber, smsContent);
                    }else{
                      let smsNumber= this.callNo;
                      let smsContent= '尊敬的用户：如需咨询电信业务，可在工作时间(节假日除外)8：30-17：30，联系您的政企客户经理:'+this.accountBundle.zqManageName+'，号码:'+this.accountBundle.zqManageMobile;
                      document.getElementById("oldWindow").contentWindow.sendDirectSms(smsNumber, smsContent);
                    }
                  }

                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1035', '');
//                  this.popoverAlert('vContactClientsMessage')
                }else if(name=='商机派单'){
                  this.iframeBlock(name)
                  if(status=='政企'){
                    document.getElementById("oldWindow").contentWindow.dispatchManagerBusinessOrder2('2');
                  }else{
                    if(this.accountBundleManageName().indexOf('政企')<0){
                      document.getElementById("oldWindow").contentWindow.dispatchManagerBusinessOrder2('1');
                    }else{
                      document.getElementById("oldWindow").contentWindow.dispatchManagerBusinessOrder2('2');
                    }
                  }
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1034', '');
//                  document.getElementById("oldWindow").contentWindow.dispatchManagerBusinessOrder();
                }else if(name=='知识库'){
                  this.iframeBlock(name)
                  document.getElementById("oldWindow").contentWindow.openStarServiceUrl();
                }
            }
        },
        components:{
            vStar
        },
        computed:{
          ...mapGetters([
            'homePageStyle',
            'homePageBorder',
            'homePageBorderTb',
            'personHead',
            'accountBundle',
            'customerAsset',
            'promotionName',
            'createDate',
            'completedDate',
            'birthday',
            'desensitization',
            'callDayList',
            'callMouthList',
            'personMessage',
            'phoneRelNum',
            'token',
            'callNo'
          ])
        },
      filters:{
        callFilter: function (callData) {
          if(callData != '' && callData != undefined){
              return callData.length;
          }else{
              return 0;
          }
        }
      },
      watch:{
        personMessage(){
            if(this.personMessage.productCode=='INT-MAN-0010'){
              if(this.personMessage){
                this.setBroadbandRatePage(this.personMessage);
                api.widgetApi('/broadband_rate/?__dew_token__='+this.token,this.$store.state.editor.getBroadbandRateMM).then(
                  res=>{
                    this.flowDataLocal.paySpeed=res.body.data.paySpeed;
                    this.flowDataLocal.data=res.body.data.broadbandRate;
                    if(res.body.data.lineType){
                      this.flowDataLocal.type='('+res.body.data.lineType.replace('线路','')+')';
                    }else{
                      this.flowDataLocal.type='';
                    }
                  }
                );
              }
            }else if(this.personMessage.productCode=='OTH-MAN-0019' || this.personMessage.productCode=='OTH-MAN-0034' || this.personMessage.productCode=='OTH-MAN-0020'){
              if(this.personMessage){
                this.setBroadbandRatePage(this.personMessage);
                api.widgetApi('/broadband_rate/?__dew_token__='+this.token,this.$store.state.editor.getBroadbandRateMM).then(
                  res=>{
                    this.flowDataLocal.paySpeed=res.body.data.itvDSpeed;
                    if(res.body.data.itvDSpeed){
                      this.flowDataLocal.type='('+res.body.data.itvLineType.replace('线路','')+')';
                    }else{
                      this.flowDataLocal.type='';
                    }
                  }
                );
              }
            }else{

            }
        }
      }
    }
</script>
<style scoped>
    .blue{
        color: #1D9BD9;
        cursor: pointer;
    }
    .red{
        color: #F71818;
    }
    .font-float{
        float: left;
    }
    .margin-auto{
        margin-left: 5px;
    }
    .orange{
        color: #FF8000;
        cursor: pointer;
    }
    .icon-color{
        color: #CDCDCD;
    }
    .font-big{
        font-size: 16px;
        cursor: pointer;
    }
    .font-normal{
        font-weight: normal !important;
    }
    .package{
        width: 100%;
        height: 180px;
        background: #ffffff;
        float: left;
        color: #666666;
        border: 1px solid #D9E5EF;
    }
    .grid-content{
        width: auto;
        height: 160px;
        text-align: center;
    }
    .package-left{
      margin-top: 10px;
      border-right: 2px solid #EFEFEF;
    }
    .package-right{
        width: 100%;
        height: 180px;
    }
    .head-sculpture{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        position: relative;
    }
    .head-sculpture img{
        width: 100%;
        border-radius: 50%;
    }
    .head-sculpture p{
        margin-top: 5px;
        font-size: 14px;
    }
    .head-sculpture .p-big{
        font-size: 18px;
        color: #2C90D5;
    }
    .turn-button{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #ffffff;
        position: absolute;
        left: 80px;
        top: 70px;
        margin-left: -10px;
        transition: all 0.2s ease 0.1s;
    }
    .turn-button-circle{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 2px solid #EFEFEF;
        margin:  3px auto;
        position: relative;
    }
    .turn-button-circle .sun{
        position: absolute;
        width: 2px;
        height: 8px;
        overflow: hidden;
        transition: all 0.1s ease;
    }
    .active .turn-button{
        transform:rotate(360deg);
        -ms-transform:rotate(360deg); /* Internet Explorer */
        -moz-transform:rotate(360deg); /* Firefox */
        -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
        -o-transform:rotate(360deg); /* Opera */
        cursor: pointer;
    }
    .turn-button .one{
        left: 50%;
        top: 3px;
        margin-left: -1px;
        /*transform:rotate(90deg);*/
        /*-ms-transform:rotate(90deg); !* Internet Explorer *!*/
        /*-moz-transform:rotate(90deg); !* Firefox *!*/
        /*-webkit-transform:rotate(90deg); !* Safari 和 Chrome *!*/
        /*-o-transform:rotate(90deg); !* Opera *!*/
    }
    .turn-button .two{
        left: 50%;
        top: 11px;
        margin-left: -1px;
        transform:rotate(180deg);
        -ms-transform:rotate(180deg); /* Internet Explorer */
        -moz-transform:rotate(180deg); /* Firefox */
        -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
        -o-transform:rotate(180deg); /* Opera */
    }
    .turn-button .three{
        left: 50%;
        top: 7px;
        margin-left: -5px;
        transform:rotate(90deg);
        -ms-transform:rotate(90deg); /* Internet Explorer */
        -moz-transform:rotate(90deg); /* Firefox */
        -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
        -o-transform:rotate(90deg); /* Opera */
    }
    .turn-button .four{
        left: 50%;
        top: 7px;
        margin-left: 3px;
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg); /* Internet Explorer */
        -moz-transform:rotate(-90deg); /* Firefox */
        -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
        -o-transform:rotate(-90deg); /* Opera */
    }
    .active .turn-button .one{
        left: 50%;
        width: 3px;
        height: 10px;
        top: 2px;
        margin-left: -3px;
    }
    .active .turn-button .two{
        left: 50%;
        width: 3px;
        height: 10px;
        bottom: 0;
        margin-left: 0;
    }
    .active .turn-button .three{
        left: 50%;
        top: 8px;
        margin-left: -6px;
        width: 3px;
        height: 10px;
    }
    .active .turn-button .four{
        left: 50%;
        top: 5px;
        margin-left: 3px;
        width: 3px;
        height: 10px;
    }
    .turn-button .sun:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        left: 0;
        top: 0;
        background: #EFEFEF;
    }
    .active .turn-button .one:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: 0;
        top: 0;
        background: #4BAEED;
    }
    .active .turn-button .two:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        right: 0;
        top: 0;
        background: #9EB9EA;
    }
    .active .turn-button .three:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: -7px;
        top: 0;
        background: #75D86E;
    }
    .active .turn-button .four:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: -7px;
        top: 0;
        background: #EC7C84;
    }
    .person-guide{
        position: relative;
    }
    .person-hidden{
        width: 150px;
        position: absolute;
        left: 50%;
        margin-left: -80px;
        border-radius: 5px;
        background: #FAFDFF;
        opacity: 0.8;
        height: 100%;
        border: 1px solid #C8E1F6;
        text-align: left;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 13px;
        transition: all 0.2s ease;
    }

    .person-hidden p{
        line-height: 25px;
    }
    .text-p{
        width: auto;
        padding-left: 5px;
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
    .person-hidden .text{
        padding: 5px;
        background: #DAF4FD;
        border-radius: 4px;
    }
    .Windmill{
        transition: all 0.2s ease;
    }

    .big-Windmill{
        width: 50%;
        height: 80px;
        overflow: hidden;
        float: left;
        position: relative;
        display: table;
        border-radius: 5px;
    }
    .big-Windmill .small-Windmill{
        position: absolute;
        overflow: hidden;
        color: #ffffff;
        z-index: 10;
    }
    .big-Windmill .small-Windmill span{
        z-index: 10;
        font-size: 14px;
    }
    .big-Windmill .one{
        width: 30px;
        height: 100%;
        right: 0;
    }
    .big-Windmill .block-one{
        display: table-cell;
        vertical-align: middle;
        font-size: 13px;
        text-align: right;
        width: 100%;
        padding-right: 36px;
        line-height: 18px;
    }
    .big-Windmill .one span{
        margin-top: 20px;
        margin-left: 10px;
        width: 10px;
        float: left;
    }
    .big-Windmill .one:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        left: 0;
        top: 0px;
        background: #4BAEED;
        z-index: -1;
    }
    .big-Windmill .two{
        height: 30px;
        width: 100%;
        line-height: 30px;
        bottom: 0;
    }
    .big-Windmill .block-two{
        text-align: center;
        font-size: 13px;
        line-height: 18px;
        height: 80px;
    }
    .big-Windmill .two span{
        margin-left: 25px;
        float: left;
    }
    .big-Windmill .two:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        left: 0;
        top: 0px;
        background: #EC7C84;
        z-index: -1;
    }
    .big-Windmill .three{
        height: 30px;
        width: 100%;
        line-height: 30px;
        top: 0;
    }
    .big-Windmill .block-three{
        padding-top: 30px;
        padding-right: 10px;
        text-align: right;
        font-size: 13px;
        line-height: 18px;

    }
    .big-Windmill .three span{
        margin-right: 28px;
        float: right;
    }
    .big-Windmill .three:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        right: 0;
        bottom: 0;
        background: #75D86E;
        z-index: -1;
    }
    .big-Windmill .four{
        width: 30px;
        height: 100%;
        left: 0;
    }
    .big-Windmill .block-four{
        display: table-cell;
        vertical-align: middle;
        text-align: left;
        font-size: 13px;
        padding-left: 35px;
        line-height: 18px;
    }
    .big-Windmill .four span{
        margin-top: 15px;
        margin-left: 5px;
        width: 10px;
        float: left;
    }
    .big-Windmill .four:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        right: 0;
        top: 0;
        background: #9EB9EA;
        z-index: -1;
    }
    .package-right .small{
        min-width: 50%;
    }
    .package-right .big{
        width: 100%;
    }
    .package-right-item{
        height: 36px;
        line-height: 36px;
        float: left;
        text-align: left;
        color: #333333;
        font-size: 13px;
        font-weight: bolder;
    }
    .package-right-item .custom-point{
        color: #999999;
        margin-left: 15px;
    }
    .package-right-item .custom-point span{
        color: #FF8000;
    }
    .package-right-item .iconfont{
      position: relative;
    }
    .package-right-item .icon-tubiao210:hover::after{
      content: '转接';
      position: absolute;
      min-width: 40px;
      line-height: 26px;
      height: 26px;
      padding-left: 5px;
      padding-right: 5px;
      background: #1d9bd9;
      color: #ffffff;
      text-align: center;
      font-size: 12px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 5px;
      -webkit-transform: translate(-50%,30px);
      -moz-transform: translate(-50%,30px);
      transform:translate(-50%,30px);
    }
    .package-right-item .icon-gongdan:hover::after{
      content: '派单';
      position: absolute;
      min-width: 40px;
      line-height: 26px;
      height: 26px;
      padding-left: 5px;
      padding-right: 5px;
      background: #1d9bd9;
      color: #ffffff;
      text-align: center;
      font-size: 12px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 5px;
      -webkit-transform: translate(-50%,30px);
      -moz-transform: translate(-50%,30px);
      transform:translate(-50%,30px);
    }
    .package-right-item .icon-youjian:hover::after{
      content: '短信';
      position: absolute;
      min-width: 40px;
      line-height: 26px;
      height: 26px;
      padding-left: 5px;
      padding-right: 5px;
      background: #1d9bd9;
      color: #ffffff;
      text-align: center;
      font-size: 12px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 5px;
      -webkit-transform: translate(-50%,30px);
      -moz-transform: translate(-50%,30px);
      transform:translate(-50%,30px);
    }
    .package-right-item .light{
      cursor: pointer;
      color: #8BB4E7;
    }
    .package-right-item .arrears-area{
        width: auto;
        height: 36px;
        line-height: 36px;
        float: left;
    }
    .package-right-item .arrears-area .blue{
        color: #1476CC;
    }
    .package-right-item .arrears-area p{
      line-height: 18px;
    }
    .el-popover .meal－text{
      color: #333333 !important;
    }
    .el-popover .meal-text-list{
      color: #333333 !important;
    }
    .el-popover .meal-text-list i{
      color: #8BB4E7;
    }
    .bk-g{
      background: #F3F3F3;
    }
    .package-right-item-head{
        letter-spacing: 2px !important;
        width: 66px;
        padding-left: 5px;
        height: 30px;
        text-align: right;
        display: flex;
        flex-direction: row;
        float: left;
        margin-right: 10px;
        color: #999999;
        font-size: 13px;
        font-weight: normal;
    }
    .package-right-item-head-five{
        letter-spacing: 2px !important;
        width: 100px;
        padding-left: 5px;
        height: 30px;
        text-align: right;
        display: flex;
        flex-direction: row;
        float: left;
        margin-right: 10px;
        color: #999999;
        font-size: 13px;
        font-weight: normal;
    }
    .package-right-item-head div{
      flex: 1;
      display: block;
    }
</style>
