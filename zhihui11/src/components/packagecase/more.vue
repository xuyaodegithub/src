<template>
  <div class="package-case-state-all">
    <div class="less-left" v-bind:style="homePageBorderTopNone">
      <div class="package-case-state">
        <!--<div class="state-item"  v-if="marketingVOSLength != 0 && packageCasePrecision.length != 0 && packageCasePrecision!= ''">-->
        <div class="state-item"  v-if="packageCasePrecision.marketingVOS && packageCasePrecision.marketingVOS.length!=0">
          <div class="item-sun">
            <div class="header bk-change-normal" v-bind:style="homePageBorderTb+homePageBkNormal">
              <span class="title">营销</span>
              <div class="small-title" v-if="marketingVOSLength>1">
                <div><span></span></div>
              </div>
              <div class="turn-button" v-if="marketingVOSLength>1">
                <i class="iconfont icon-zuo" @click="changingOver(marketingVOSLength,'left',$event)"></i><i class="iconfont icon-you" @click="changingOver(marketingVOSLength,'right',$event)"></i>
              </div>
            </div>
            <div class="text">
              <div class="text-sun-all" num="1">
                <div class="text-sun" v-for="item in packageCasePrecision.marketingVOS">
                  <p class="title">{{item.productName}}</p>
                  <p class="text-area" @click="aTabTurn($event,item,item.displayContent)" v-html="changeHtml(item.displayContent)"></p>
                  <div class="button" v-if="item.configType">
                    <span @click="btnJumpHandle(itemBtn,item)" v-for="(itemBtn,index) in item.configType.substring(1,item.configType.length-1).split('】【')" v-bind:style="homePageButton" class="button-small" :key="index">{{itemBtn | numToString}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="state-item" v-for="(item,index,key) in packageCase" :class="warn(index)" v-if="key<3">
          <div class="item-sun">
            <div class="header bk-change-normal" v-bind:style="homePageBorderTb+homePageBkNormal">
              <span class="title">{{kindName[index]}}</span>
              <div class="small-title" v-if="index !== 'workOrder'">
                <div v-if="item.length>0"><span>{{item.length}}</span></div>
              </div>
              <div class="small-title-right" v-else>近一个月的
                              <span v-if="index=='workOrder'">{{item.length-1}}</span>
                <span v-if="index!='workOrder'">{{item.length}}</span>单
                             </div>
              <div class="turn-button" v-if="index=='workOrder' && item.length>2">
                <i class="iconfont icon-zuo" @click="changingOverTwo(item.length-1,'left',$event,index)"></i><i class="iconfont icon-you" @click="changingOverTwo(item.length-1,'right',$event,index)"></i>
              </div>
              <div class="turn-button" v-if="index!='workOrder' && item.length>1">
                <i class="iconfont icon-zuo" @click="changingOverTwo(item.length,'left',$event,index)"></i><i class="iconfont icon-you on-light" @click="changingOverTwo(item.length,'right',$event,index)"></i>
              </div>
            </div>
            <div class="text" v-if="index == 'alert'">
              <div class="text-sun-all">
                <input type="hidden" id="alertNum" value="1"/>
                <div class="text-sun" v-for="itemSun in item">
                  <p class="title" style="color: red">服务预警打标</p>
                  <p class="text-area">{{itemSun.serviceScape}} ，请根据用户情况进行打标</p>
                  <div class="button">
                    <span @click="btnJumpHandle('服务事件处理',itemSun)" v-bind:style="homePageButton" class="button-small" >服务事件处理</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'malfunction'">
              <div class="text-sun-all">
                <input type="hidden" id="malfunctionNum" value="1"/>
                <div class="text-sun" v-for="(itemSun,index) in item">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" v-if="itemSun.displayContent" @click="aTabTurn($event,itemSun,itemSun.displayContent)" v-html="changeHtml(itemSun.displayContent)"></p>
                  <div class="button" v-if="itemSun.configType != null && itemSun.productName=='区域性故障'">
                    <span @click="btnJumpHandle('区域性故障详情',itemSun)" v-bind:style="homePageButton" class="button-small">区域性故障详情</span>
                  </div>
                  <div class="button" v-if="itemSun.configType != null && itemSun.productName!='区域性故障'">
                    <span @click="btnJumpHandle(itemBtn,itemSun)" v-for="(itemBtn,index) in itemSun.configType.substring(1,itemSun.configType.length-1).split('】【')" v-bind:style="homePageButton" class="button-small" :key="index">{{itemBtn}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'workOrder'">
              <div class="text-sun-all">
                <input type="hidden" id="workOrderNum" value="1"/>
                <div class="text-sun" v-for="(itemSun,index) in item" v-if="index>0">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" v-if="itemSun.displayContent" v-html="changeHtml(itemSun.displayContent)" @click="aTabTurn($event,itemSun,itemSun.displayContent)"></p>
                  <div class="button" v-if="itemSun.configType != null">
                    <span
                      v-for="(itemBtn,index) in itemSun.configType.substring(1,itemSun.configType.length-1).split('】【')"
                      @click="btnJumpHandle(itemBtn,itemSun,itemSun.displayContent)"
                      v-bind:style="homePageButton"
                      class="button-small"
                      :key="index">
                      {{btnReturn(itemBtn,itemSun)}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'finance'">
              <div class="text-sun-all">
                <input type="hidden" id="financeNum" value="1"/>
                <div class="text-sun" v-for="itemSun in item">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" @click="aTabTurn($event,itemSun,itemSun.prejudgeResult)" v-html="changeHtml(itemSun.prejudgeResult)"></p>
                  <div class="button" v-if="itemSun.pressKey != null">
                    <span
                      @click="btnJumpHandle('账务专区',itemSun)"
                      v-for="(itemBtn,index) in itemSun.pressKey.substring(1,itemSun.pressKey.length-1).split('】【')"
                      v-bind:style="homePageButton"
                      class="button-small"
                      :key="index"
                      v-if="itemBtn=='增值专区'">
                      账务专区
                    </span>
                    <span
                      @click="btnJumpHandle(itemBtn,itemSun)"
                      v-for="(itemBtn,index) in itemSun.pressKey.substring(1,itemSun.pressKey.length-1).split('】【')"
                      v-bind:style="homePageButton"
                      class="button-small"
                      :key="index"
                      v-if="itemBtn!='增值专区'">>
                      {{itemBtn}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'data'">
              <div class="text-sun-all">
                <input type="hidden" id="dataNum" value="1"/>
                <div class="text-sun" v-for="itemSun in item">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" @click="aTabTurn($event,itemSun,itemSun.prejudgeResult)" v-html="changeHtml(itemSun.prejudgeResult)"></p>
                  <div class="button" v-if="itemSun.pressKey != null">
                    <span @click="btnJumpHandle(itemBtn,itemSun)" v-for="(itemBtn,index) in itemSun.pressKey.substring(1,itemSun.pressKey.length-1).split('】【')" v-bind:style="homePageButton" class="button-small" :key="index">{{itemBtn}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="less-right" v-bind:style="homePageBorderTopNone">
      <div class="package-case-state">
        <!--<div class="state-item" v-for="(item,index,key) in packageCase" :class="warn(index)" v-if="key>2">-->
        <!--<div class="state-item" v-for="(item,index,key) in packageCase" :class="warn(index)" v-if="key>2">-->
        <div class="state-item" v-for="(item,index,key) in packageCase" :class="warn(index)" v-if="item[0]!=='' && key>2">
          <div class="item-sun">
            <div class="header bk-change-normal" v-bind:style="homePageBorderTb+homePageBkNormal">
              <span class="title">{{kindName[index]}}</span>
              <div class="small-title" v-if="index !== 'workOrder'">
                <div v-if="item.length>0"><span>{{item.length}}</span></div>
              </div>
              <div class="small-title-right" v-else>近一个月的
                              <span v-if="index=='workOrder'">{{item.length-1}}</span>
                <span v-if="index!='workOrder'">{{item.length}}</span>单
                             </div>
              <div class="turn-button" v-if="index=='workOrder' && item.length>2">
                <i class="iconfont icon-zuo" @click="changingOverTwo(item.length,'left',$event,index)"></i><i class="iconfont icon-you" @click="changingOverTwo(item.length,'right',$event,index)"></i>
              </div>
              <div class="turn-button" v-if="index!='workOrder' && item.length>1">
                <i class="iconfont icon-zuo" @click="changingOverTwo(item.length,'left',$event,index)"></i><i class="iconfont icon-you" @click="changingOverTwo(item.length,'right',$event,index)"></i>
              </div>
            </div>
            <div class="text" v-if="index == 'alert'">
              <div class="text-sun-all">
                <input type="hidden" id="alertNum" value="1"/>
                <div class="text-sun" v-for="itemSun in item">
                  <p class="title" style="color: red">服务预警打标</p>
                  <p class="text-area">{{itemSun.serviceScape}} ，请根据用户情况进行打标</p>
                  <div class="button">
                    <span @click="btnJumpHandle('服务事件处理',itemSun)" v-bind:style="homePageButton" class="button-small" >服务事件处理</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'malfunction'">
              <div class="text-sun-all">
                <input type="hidden" id="malfunctionNum" value="1"/>
                <div class="text-sun" v-for="(itemSun,index) in item">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" @click="aTabTurn($event,itemSun,itemSun.displayContent)" v-html="changeHtml(itemSun.displayContent)"></p>

                  <div class="button" v-if="itemSun.configType != null && itemSun.productName=='区域性故障'">
                    <span @click="btnJumpHandle(itemBtn,itemSun)" v-bind:style="homePageButton" class="button-small">区域性故障详情</span>
                  </div>

                  <div class="button" v-if="itemSun.configType != null && itemSun.productName!='区域性故障'">
                    <span @click="btnJumpHandle(itemBtn,itemSun)" v-for="(itemBtn,index) in itemSun.configType.substring(1,itemSun.configType.length-1).split('】【')" v-bind:style="homePageButton" class="button-small" :key="index">{{itemBtn}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'workOrder'">
              <div class="text-sun-all">
                <input type="hidden" id="workOrderNum" value="1"/>
                <div class="text-sun" v-for="(itemSun,index) in item" v-if="index>0">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" v-if="itemSun.displayContent" v-html="changeHtml(itemSun.displayContent)" @click="aTabTurn($event,itemSun,itemSun.displayContent)"></p>
                  <div class="button" v-if="itemSun.configType != null">
                     <span
                       v-for="(itemBtn,index) in itemSun.configType.substring(1,itemSun.configType.length-1).split('】【')"
                       @click="btnJumpHandle(itemBtn,itemSun,itemSun.displayContent)"
                       v-bind:style="homePageButton"
                       class="button-small"
                       :key="index">
                      {{btnReturn(itemBtn,itemSun.displayContent)}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'finance'">
              <div class="text-sun-all">
                <input type="hidden" id="financeNum" value="1"/>
                <div class="text-sun" v-for="itemSun in item">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" @click="aTabTurn($event,itemSun,itemSun.prejudgeResult)" v-html="changeHtml(itemSun.prejudgeResult)"></p>
                  <div class="button" v-if="itemSun.pressKey != null">
                    <span
                      @click="btnJumpHandle('账务专区',itemSun)"
                      v-for="(itemBtn,index) in itemSun.pressKey.substring(1,itemSun.pressKey.length-1).split('】【')"
                      v-bind:style="homePageButton"
                      class="button-small"
                      :key="index"
                      v-if="itemBtn=='增值专区'">
                      账务专区
                    </span>
                    <span
                      @click="btnJumpHandle(itemBtn,itemSun)"
                      v-for="(itemBtn,index) in itemSun.pressKey.substring(1,itemSun.pressKey.length-1).split('】【')"
                      v-bind:style="homePageButton"
                      class="button-small"
                      :key="index"
                      v-if="itemBtn!='增值专区'">
                      {{itemBtn}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text" v-if="index == 'data'">
              <div class="text-sun-all">
                <input type="hidden" id="dataNum" value="1"/>
                <div class="text-sun" v-for="itemSun in item">
                  <p class="title">{{itemSun.productName}}</p>
                  <p class="text-area" @click="aTabTurn($event,itemSun,itemSun.prejudgeResult)" v-html="changeHtml(itemSun.prejudgeResult)"></p>
                  <div class="button" v-if="itemSun.pressKey != null">
                    <span @click="btnJumpHandle(itemBtn,itemSun)" v-for="(itemBtn,index) in itemSun.pressKey.substring(1,itemSun.pressKey.length-1).split('】【')" v-bind:style="homePageButton" class="button-small" :key="index">{{itemBtn}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default{
        data () {
            return{

            }
        },
        created(){
          this.$store.dispatch('saveForm',['/precision_marketing','GET_PRECISION_MARKETING_API','precisionMarketingMM']);
        },
        computed: {
          ...mapGetters([
            'homePageBorder',
            'homePageBorderTopNone',
            'homePageBorderTb',
            'homePageBkNormal',
            'homePageButton',
            'packageCase',
            'kindName',
            'packageCasePrecision',
            'precisionButton',
            'saleProduct',
            'freeResource',
            'assetVOS',
            'subAsset',
            'token',
            'setSubAssetPropertyApi',
            'subAssetProperty',
            'subAssetPropertySelf',
            'setSubAssetPropertyNum'
            ])
        },
        methods: {
          ...mapActions([
            'iframeBlock','popoverAlert'
          ]),
          warn: function (ever) {
            if(ever == 'workOrder'){
              return 'warn';
            }
          },
          marketingVOSLength: function () {
            return this.packageCasePrecision.marketingVOS.length;
          },
          changeHtml: function (val) {
            if(val.indexOf('(已结/未结)')>0){
              let num = val.split('(已结/未结)')[1].split('，')[0];
              let numOne = '<a class="one">'+num[0]+'</a>';
              let numTwo = '<a class="two">'+num[2]+'</a>';
              let numAll = numOne + '/' + numTwo;
              let removeA = val.replace('，<a>详情<a>','');
              removeA = removeA.replace('<a>详情<a>','');
              return removeA.replace(num,numAll);
            }else{
                return val;
            }
          },

          changeNone: function (val) {
            if(val.indexOf('(已结/未结)')>0){
              let num = val.split('(已结/未结)')[1].split('，')[0];
              let numOne = '<a class="one">'+num[0]+'</a>';
              let numTwo = '<a class="two">'+num[2]+'</a>';
              if(num[2]=='0'){
                return false;
              }else{
                return true;
              }
            }else{
              return false;
            }
          },
          btnReturn(btn,item){
            let displayContent = item.displayContent;
            let productName = item.productName;
            if(productName=='故障单'){
              if(this.personMessage.productName=='移动电话'){
                return '';
              }else{
                if((btn=='故障查询' || btn=='联系外线') && this.changeNone(displayContent)){
                  return '外线号码';
                }else if(btn=='咨询投诉查询'){
                  return '投诉详情';
                }else{
                  return btn;
                }
              }
            }else{
              if((btn=='故障查询' || btn=='联系外线') && this.changeNone(displayContent)){
                return '外线号码';
              }else if(btn=='咨询投诉查询'){
                return '投诉详情';
              }else{
                return btn;
              }
            }
          },
          //预判里面点击A标签
          aTabTurn: function (event,item,text) {
            if(event.target.tagName=='A'){
              if(text.indexOf('商机工单')>=0){
                this.iframeBlock('商机工单');
                document.getElementById("oldWindow").contentWindow.pageJump('T6005');
              }else if(text.indexOf('故障单')>=0){
                this.iframeBlock('故障单');
                if(this.personMessage['productName']=='固定电话'){
                  document.getElementById("oldWindow").contentWindow.pageJump('T7002');
                }else{
                  document.getElementById("oldWindow").contentWindow.pageJump('T7048');
                }
              }else if(text.indexOf('小额退赔单')>=0){
                this.iframeBlock('小额退赔查询');
                document.getElementById("oldWindow").contentWindow.pageJump('T4013');
              }else if(text.indexOf('投诉单')>=0){
                this.iframeBlock('投诉单');
                document.getElementById("oldWindow").contentWindow.pageJump('T7085');
              }else if(text.indexOf('咨询单')>=0){
                this.iframeBlock('咨询单');
                document.getElementById("oldWindow").contentWindow.pageJump('T7085');
              }else if(text.indexOf('移机单')>=0){
                this.iframeBlock('移机单');
                document.getElementById("oldWindow").contentWindow.openAddRemoveTab();
//                document.getElementById("oldWindow").contentWindow.hastenObstacleOrder(item.mainSN,item.firstReceptTime);
              }else if(text.indexOf('装机单')>=0){
                this.iframeBlock('装机单');
                document.getElementById("oldWindow").contentWindow.openAddRemoveTab();
              }else if(text.indexOf('紧急复机')>=0){
                this.iframeBlock('紧急复机');
                let serverId = item.serviceId;
                let acctId = item.acctId;
                let status =  item.isForceCall;
                document.getElementById("oldWindow").contentWindow.forceCallResume(serverId, acctId, status);
              }else{
                this.$message({
                  message:'老系统还未对接',
                  type:'warning'
                })
              }
            }

//                if(event.target.className=='one'){
//                  this.iframeBlock('咨询投诉查询');
//                  document.getElementById("oldWindow").contentWindow.pageJump('T7085');
//                    console.log(event.target)
//                }
//                if(event.target.className=='two'){
//                  this.iframeBlock('咨询投诉查询');
//                  document.getElementById("oldWindow").contentWindow.pageJump('T7085');
//                    console.log(event.target.innerText)
//                }
          },
          btnJumpHandle: function (btn,item,text) {
            let accsNbr='';
            let productName='';
            let num = this.btnReturn(btn,item);
            if(item.accsNbr){
              accsNbr=item.accsNbr;
            }
            if(item.productName){
              accsNbr=item.productName;
            }
            switch (num){
              case '账务专区':
                this.iframeBlock('账务专区');
                if(item.productName.indexOf('流量')>=0){
                  document.getElementById("oldWindow").contentWindow.pageJump('T3001-流量');
                }else{
                  document.getElementById("oldWindow").contentWindow.pageJump('T3001-财务');
                }
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1043', '');
                break;
              case '增值专区':
                this.iframeBlock('增值专区');
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(1,item.accsNbr,item.productName);
                break;
              case '故障专区':
                this.iframeBlock('故障专区');
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(2,item.accsNbr,item.productName);
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1044', '');
                break;
              case '故障查询':
                this.iframeBlock('故障查询');
                document.getElementById("oldWindow").contentWindow.pageJump('T7002');
                break;
              case '故障申告':
                this.iframeBlock('故障申告');
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(2,item.accsNbr,item.productName);
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1045', '');
                break;
              case '咨询受理':
                this.iframeBlock('咨询受理');
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(4,item.accsNbr,item.productName);
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1046', '');
                break;
              case '投诉详情':
                this.$store.state.page.homepage.packageCaseDetail=item.detail;
                this.popoverAlert('vIndexMarkingDetail');
                break;
              case '外线号码':
                this.iframeBlock('外线号码');
                let smsNumber='';
                if(this.$store.state.editor.followData){
                  smsNumber = this.$store.state.editor.followData.phoneNum;
                }
                let smsContent = '尊敬的用户：您申告的障碍已受理，中国电信服务人员将尽快上门为您维修，服务人员'+item.repairOperName+'，联系电话'+item.repairOperPhone+'。欢迎您对我们的维修服务进行监督。';
                document.getElementById("oldWindow").contentWindow.sendDirectSms(smsNumber, smsContent);
                break;
              case '投诉建议':
                this.iframeBlock('投诉建议');
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(4,item.accsNbr,item.productName);
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1047', '');
                break;
              case '咨询投诉查询':
                this.iframeBlock('咨询投诉查询');
                document.getElementById("oldWindow").contentWindow.pageJump('T7085');
                break;
              case '营销专区':
                this.iframeBlock('营销专区');
                console.log('营销专区')
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(3,item.accsNbr,item.productName);
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1048', '');
                break;
              case '取消本次推送':
                this.iframeBlock('取消本次推送');
                document.getElementById("oldWindow").contentWindow.kdUnlock();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1050', '');
                break;
              case '宽带新装':
                this.iframeBlock('宽带新装');
                document.getElementById("oldWindow").contentWindow.kdNewInstall();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1051', '');
                break;
              case 'ITV故障专区':
                this.iframeBlock('ITV故障专区');
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(6,item.accsNbr,item.productName);
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1049', '');
                break;
              case '同步服务状态':
                this.$message({
                  message:'此功能还没上线',
                  type:'warning'
                });
                break;
              case '密码验证':
                this.iframeBlock('密码验证');
                document.getElementById("oldWindow").contentWindow.userRequirePreGuideSpecialJump(2,item.accsNbr,item.productName);
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1052', '');
                break;
              case '派故障单':
                this.iframeBlock('派故障单');
                document.getElementById("oldWindow").contentWindow.sendDirectKdObstacle();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1053', '');
                break;
              case '一键修复':
                this.iframeBlock('一键修复');
                document.getElementById("oldWindow").contentWindow.oneBtnRepairDirectKdObstacle();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1054', '');
                break;
              case '服务事件处理':
                this.popoverAlert(['vServiceEvent',item]);
                break;
              case '小额退赔查询':
                this.iframeBlock('小额退赔查询');
                document.getElementById("oldWindow").contentWindow.pageJump('T4013');
              case '小额退赔详情':
                this.iframeBlock('小额退赔详情');
                document.getElementById("oldWindow").contentWindow.pageJump('T4013');
                break;
              case '商机工单查询':
                this.iframeBlock('商机工单查询');
                document.getElementById("oldWindow").contentWindow.pageJump('T6005');
                break;
              case '区域性故障详情':
                this.iframeBlock('区域性故障详情');
                document.getElementById("oldWindow").contentWindow.showBigAreaObstacleInfo();
                break;
              case '催单':
                if(text.indexOf('商机工单')>=0){
                  this.iframeBlock('催单');
                  document.getElementById("oldWindow").contentWindow.pageJump('T6005-催单');
                }else if(text.indexOf('故障单')>=0){
                  this.iframeBlock('催单');
                  document.getElementById("oldWindow").contentWindow.hastenObstacleOrderNew();
                }else if(text.indexOf('小额退赔单')>=0){
                  this.iframeBlock('催单');
                  document.getElementById("oldWindow").contentWindow.pageJump('T4013-催单');
                }else if(text.indexOf('投诉单')>=0){
                  this.iframeBlock('催单');
                  document.getElementById("oldWindow").contentWindow.pageJump('T7085-催单');
                }else if(text.indexOf('咨询单')>=0){
                  this.iframeBlock('催单');
                  document.getElementById("oldWindow").contentWindow.pageJump('T7085-催单');
                }else if(text.indexOf('移机单')>=0){
                  this.iframeBlock('催单');
                  document.getElementById("oldWindow").contentWindow.hastenObstacleOrder(item.mainSN,item.firstReceptTime);
                }else if(text.indexOf('装机单')>=0){
                  this.iframeBlock('催单');
                  document.getElementById("oldWindow").contentWindow.openAddRemoveTab();
                }else if(text.indexOf('紧急复机')>=0){
                  this.iframeBlock('催单');
                  let serverId = item.serviceId;
                  let acctId = item.acctId;
                  let status =  item.isForceCall;
                  document.getElementById("oldWindow").contentWindow.forceCallResume(serverId, acctId, status);
                }else{
                  this.$message({
                    message:'老系统还未对接',
                    type:'warning'
                  })
                }
                break;
              case '催单详情':
                if(text.indexOf('商机工单')>=0){
                  this.iframeBlock('催单详情');
                  document.getElementById("oldWindow").contentWindow.pageJump('T6005-催单详情');
                }else if(text.indexOf('故障单')>=0){
                  this.iframeBlock('催单详情');
                  document.getElementById("oldWindow").contentWindow.pageJump('T7002-催单详情');
                }else if(text.indexOf('小额退赔单')>=0){
                  this.iframeBlock('催单详情');
                  document.getElementById("oldWindow").contentWindow.pageJump('T4013-催单详情');
                }else if(text.indexOf('投诉单')>=0){
                  this.iframeBlock('催单详情');
                  document.getElementById("oldWindow").contentWindow.pageJump('T7085-催单详情');
                }else if(text.indexOf('咨询单')>=0){
                  this.iframeBlock('催单详情');
                  document.getElementById("oldWindow").contentWindow.pageJump('T7085-催单详情');
                }else if(text.indexOf('移机单')>=0){
                  this.iframeBlock('催单详情');
                  document.getElementById("oldWindow").contentWindow.hastenObstacleOrder(item.mainSN,item.firstReceptTime);
                }else if(text.indexOf('装机单')>=0){
                  this.iframeBlock('催单详情');
                  document.getElementById("oldWindow").contentWindow.openAddRemoveTab();
                }else if(text.indexOf('紧急复机')>=0){
                  this.iframeBlock('催单详情');
                  let serverId = item.serviceId;
                  let acctId = item.acctId;
                  let status =  item.isForceCall;
                  document.getElementById("oldWindow").contentWindow.forceCallResume(serverId, acctId, status);
                }else{
                  this.$message({
                    message:'老系统还未对接',
                    type:'warning'
                  })
                }
                break;
              case '修改':
                this.iframeBlock('修改');
                document.getElementById("oldWindow").contentWindow.modifyObstacleOrder();
                break;
              case '修单':
                this.iframeBlock('修单');
                document.getElementById("oldWindow").contentWindow.openAddRemoveTab();
                break;
              case '改约':
                this.iframeBlock('改约');
                document.getElementById("oldWindow").contentWindow.jumpToAddRemoveOrder();
                break;
              case '转投诉单':
                this.iframeBlock('转投诉单');
                document.getElementById("oldWindow").contentWindow.pageJump('T7084');
                break;
            }
//            let ary = ['账务查询','故障专区','故障申告','咨询受理','投诉建议','账务专区和营销专区','营销专区','推送解锁','宽带新装','ITV故障专区','同步服务状态','密码验证和故障专区','派故障单和宽带故障专区','一键修复和宽带故障专区'];
//            if( !isNaN(num) && num >= 0 && num <ary.length){
//              argName = ary[num - 1];
//              switch (argName){
//                case '账务查询':
//                    console.log('');
//                    break;
//              }
//            }else{
////              return num
//            }
          },
          changingOver: function (num,dir,event,valNum) {
            var nowNum= event.target.parentNode.parentNode.parentNode.lastChild.firstChild.getAttribute('num');
            if(dir =='right'){
              if(nowNum<num){
                var oldMove = event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left;
                let newMove='';
                if(parseInt(nowNum) + 1==num){
                  event.target.className='iconfont icon-you';
                  event.target.previousElementSibling.className='iconfont icon-zuo on-light';
                }else if(parseInt(nowNum) + 1<num){
                  event.target.previousElementSibling.className='iconfont icon-zuo on-light';
                  event.target.className='iconfont icon-you on-light';
                }else{

                }
                if(oldMove.substring(0,oldMove.length-1)==''){
                  newMove = - 100;
                }else{
                  newMove = parseInt(oldMove.substring(0,oldMove.length-1)) - 100;
                }
                event.target.parentNode.parentNode.parentNode.lastChild.firstChild.setAttribute('num',parseInt(nowNum) + 1);
                event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left=newMove + "%";
                if(parseInt(nowNum)+1==num){

                }
              }
            }else{

              if(nowNum>1){

                if(parseInt(nowNum) - 1==1){
                  event.target.className='iconfont icon-zuo';
                  event.target.nextElementSibling.className='iconfont icon-you on-light';
                }else if(parseInt(nowNum) - 1>1){
                  event.target.nextElementSibling.className='iconfont icon-you on-light';
                  event.target.className='iconfont icon-zuo on-light';
                }else{

                }
                var oldMove = event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left;
                var newMove = parseInt(oldMove.substring(0,oldMove.length-1)) + 100;
                event.target.parentNode.parentNode.parentNode.lastChild.firstChild.setAttribute('num',parseInt(nowNum) - 1);
                event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left= newMove + "%";
              }
            }
          },
          changingOverTwo: function (num,dir,event,valNum) {
            let nowNum =  parseInt(document.getElementById(valNum+'Num').getAttribute('value'));
            let oDiv = document.getElementById(valNum+'Num');
            if(dir =='right'){
              if(nowNum<num){
                if(parseInt(nowNum) + 1==num){
                  event.target.className='iconfont icon-you';
                  event.target.previousElementSibling.className='iconfont icon-zuo on-light';
                }else if(parseInt(nowNum) + 1<num){
                  event.target.previousElementSibling.className='iconfont icon-zuo on-light';
                  event.target.className='iconfont icon-you on-light';
                }else{

                }
                var oldMove = oDiv.parentNode.style.left;
                let newMove='';
                if(oldMove.substring(0,oldMove.length-1)==''){
                  newMove = - 100;
                }else{
                  newMove = parseInt(oldMove.substring(0,oldMove.length-1)) - 100;
                }
                document.getElementById(valNum+'Num').setAttribute('value',parseInt(nowNum) + 1);
                oDiv.parentNode.style.left=newMove + "%";
              }
            }else{
              console.log(nowNum)
              if(nowNum>1){
                if(parseInt(nowNum) - 1==1){
                  event.target.className='iconfont icon-zuo';
                  event.target.nextElementSibling.className='iconfont icon-you on-light';
                }else if(parseInt(nowNum) - 1>1){
                  event.target.nextElementSibling.className='iconfont icon-you on-light';
                  event.target.className='iconfont icon-zuo on-light';
                }else{

                }
                var oldMove = oDiv.parentNode.style.left;
                var newMove = parseInt(oldMove.substring(0,oldMove.length-1)) + 100;


                document.getElementById(valNum+'Num').setAttribute('value',parseInt(nowNum) - 1);

                oDiv.parentNode.style.left= newMove + "%";
              }
            }
          }
        },
        filters:{
          numToString: function (val) {
              if(val){
                let ary = ['账务查询','故障专区','故障申告','咨询受理','投诉建议','账务专区和营销专区','营销专区','推送解锁','宽带新装','ITV故障专区','同步服务状态','密码验证和故障专区','派故障单和宽带故障专区','一键修复和宽带故障专区'];
                if( val >= 0 && val <ary.length){
                  return ary[val - 1]
                }else{
                  return val
                }
              }
          }
        }
    }
</script>
<style scoped>

</style>
