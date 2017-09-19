<template>
    <div class="package-case-state-all">
        <div class="less-left" v-bind:style="homePageBorderTopNone">
            <div class="package-case-state">
                <!--<div class="state-item"  v-if="marketingVOSLength >=1 && packageCasePrecision.length != 0 && packageCasePrecision!= ''">-->
                <div class="state-item"  v-if="packageCasePrecision.marketingVOS && packageCasePrecision.marketingVOS.length!=0">
                  <div class="item-sun">
                    <div class="header bk-change-normal" v-bind:style="homePageBorderTb+homePageBkNormal">
                      <span class="title">营销{{packageCasePrecision.smallAccountName}}</span>
                      <div class="small-title">
                        <div><span>{{packageCasePrecision.marketingVOS.length}}</span></div>
                      </div>
                      <div class="turn-button" v-if="packageCasePrecision.marketingVOS.length>1">
                        <i class="iconfont icon-zuo" v-bind:class="" @click="changingOver(packageCasePrecision.marketingVOS.length,'left',$event)"></i>
                        <i class="iconfont icon-you on-light on-light" v-bind:class="" @click="changingOver(packageCasePrecision.marketingVOS.length,'right',$event)"></i>
                      </div>
                    </div>
                    <div class="text">
                      <div class="text-sun-all" num="1">
                        <div class="text-sun" v-for="item in packageCasePrecision.marketingVOS">
                          <p class="title">{{item.productName}}</p>
                          <p class="text-area" @click="aTabTurn($event,item,item.displayContent)" v-html="changeHtml(item.displayContent)"></p>
                          <div class="button" v-if="item.configType">
                            <span @click="btnJumpHandle(itemBtn,item)" v-for="(itemBtn,index) in item.configType.substring(1,item.configType.length-1).split('】【')" v-bind:style="homePageButton" class="button-small" :key="index">{{itemBtn}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="state-item" v-for="(item,index) in packageCase" :class="warn(index)" v-if="item[0]!==''">
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
                                <i class="iconfont icon-zuo" @click="changingOverTwo(item.length-1,'left',$event,index)"></i><i class="iconfont icon-you on-light" @click="changingOverTwo(item.length-1,'right',$event,index)"></i>
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
                                v-if="btnReturn(itemBtn,itemSun)"
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
        <div class="less-right" v-bind:style="homePageBorderTopNone">
            <div class="set-meal">
                <div class="set-meal-item" style="flex: 1 0 auto" :style="{ flex: activeFreeFlex}">
                    <div class="header bk-change-normal" @click="pullDown($event)" v-bind:style="homePageBorderTb+homePageBkNormal">
                        <span>本月套餐使用情况</span><i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="inside-box">
                      <p v-if="Object.keys(freeResource).length=='0'" style="text-align: center;font-size: 14px;line-height: 30px;color: #666666;">无数据</p>
                      <div class="inside-box-item" v-for="(item,indexBig,key) in freeResource">
                        <div class="inside-box-item-header bk-change-normal-gray"  @click="smallPullDown($event)">
                          <div class="item-list-big" style="padding-left: 5px;font-weight: bold;" :class="colorFont(indexBig.split('#')[0])">
                            <i class="iconfont" :class="iconReturn(item[1].freeResourceType,'icon')"></i>{{indexBig.split('#')[0]}}

                          </div>
                          <div class="item-list-middle flow-all">
                            总:{{item[0].totalResource | flowLL}}
                          </div>
                          <div class="item-list-middle flow-less">
                            使用:<a @click="turnFlowAlert(item[0],'',indexBig)" :class="{canClick : indexBig.indexOf('乐享家')>=0}">{{item[0].usedResource | flowLL}}</a>
                          </div>
                          <div class="item-list-middle flow-less" v-if="item[0].restResource>=0">
                            剩余:<a>{{item[0].restResource | flowLL}} </a>
                          </div>
                          <div class="item-list-middle flow-less font-red" v-if="item[0].restResource<0">
                            超出:<a>{{-item[0].restResource | flowLL}} </a>
                          </div>
                          <div class="item-list-mini light" style="padding-right: 5px">
                            {{iconReturn(item[1].freeResourceType,'company')}}
                            <i class="el-icon-arrow-right" style="float: right"></i>
                          </div>
                        </div>
                        <div class="inside-box-item-box">

                          <div class="inside-box-details" v-if="item.length==2 && !item[1]['canShare']">
                            <div class="inside-box-details-line">
                              <div class="product-big-box">
                                <span>名称</span>
                              </div>
                              <div class="product-small-box"><span>生效时间</span></div>
                              <div class="product-small-box"><span>失效时间</span></div>
                            </div>
                          </div>

                          <div class="inside-box-details" v-if="item[1]['canShare'] || item.length>2">
                            <div class="inside-box-details-line">
                              <div class="product-big-box">
                                <span>名称</span>
                              </div>
                              <div class="product-small-box"><span>总量</span></div>
                              <div class="product-small-box"><span>使用</span></div>
                              <div class="product-small-box"><span>生效时间</span></div>
                              <div class="product-small-box"><span>失效时间</span></div>
                            </div>
                          </div>
                          <div class="inside-box-details" v-for="(itemSun,index) in item" v-if="index>0">
                            <div class="inside-box-details-line" v-if="itemSun.canShare">
                              <el-tooltip class="item" effect="dark" :content="itemSun.freeResourceName" placement="left">
                                <div class="product-big-box">
                                  <span v-if="itemSun.isExtend =='Y'">(转结)</span>
                                  <span v-if="itemSun.canShare">(共享)</span>
                                  {{itemSun.freeResourceName | wordLimitSix}}
                                </div>
                              </el-tooltip>
                              <div class="product-small-box"><span style="color: red">{{itemSun.totalResource}}</span></div>
                              <div class="product-small-box"><span :class="{canClick : indexBig.indexOf('乐享家')>=0}" @click="turnFlowAlert(itemSun,'',indexBig)">{{itemSun.usedResource}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.validDate.substring(0,4)+'/'+itemSun.validDate.substring(4,6)+'/'+itemSun.validDate.substring(6,8)}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.expireDate.substring(0,4)+'/'+itemSun.expireDate.substring(4,6)+'/'+itemSun.expireDate.substring(6,8)}}</span></div>
                            </div>
                            <div class="inside-box-details-line" v-if="!itemSun.canShare && item.length<=2">
                              <el-tooltip class="item" effect="dark" :content="itemSun.freeResourceName" placement="left">
                                <div class="product-big-box">
                                  <span v-if="itemSun.isExtend =='Y'">(转结)</span>
                                  <span v-if="itemSun.canShare">(共享)</span>
                                  {{itemSun.freeResourceName | wordLimitSix}}
                                </div>
                              </el-tooltip>
                              <div class="product-small-box"><span>{{itemSun.validDate.substring(0,4)+'/'+itemSun.validDate.substring(4,6)+'/'+itemSun.validDate.substring(6,8)}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.expireDate.substring(0,4)+'/'+itemSun.expireDate.substring(4,6)+'/'+itemSun.expireDate.substring(6,8)}}</span></div>
                            </div>
                            <div class="inside-box-details-line" v-if="!itemSun.canShare && item.length>2">
                              <el-tooltip class="item" effect="dark" :content="itemSun.freeResourceName" placement="left">
                                <div class="product-big-box">
                                  <span v-if="itemSun.isExtend =='Y'">(转结)</span>
                                  <span v-if="itemSun.canShare">(共享)</span>
                                  {{itemSun.freeResourceName | wordLimitSix}}
                                </div>
                              </el-tooltip>
                              <div class="product-small-box"><span>{{itemSun.totalResource}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.usedResource}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.validDate.substring(0,4)+'/'+itemSun.validDate.substring(4,6)+'/'+itemSun.validDate.substring(6,8)}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.expireDate.substring(0,4)+'/'+itemSun.expireDate.substring(4,6)+'/'+itemSun.expireDate.substring(6,8)}}</span></div>
                            </div>
                            <div class="inside-box-details-line" v-for="(itemVOS,index) in itemSun.groupResVOS" :key="index">
                              <div class="product-big-box"><span>{{itemVOS.accountNo}}</span></div>

                              <div class="product-small-box"></div>
                              <div class="product-small-box"><span :class="{canClick : indexBig.indexOf('乐享家')>=0}" @click="turnFlowAlert(itemSun,itemVOS,indexBig)">{{itemVOS.freeResUsed}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.validDate.substring(0,4)+'/'+itemSun.validDate.substring(4,6)+'/'+itemSun.validDate.substring(6,8)}}</span></div>
                              <div class="product-small-box"><span>{{itemSun.expireDate.substring(0,4)+'/'+itemSun.expireDate.substring(4,6)+'/'+itemSun.expireDate.substring(6,8)}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="set-meal-item set-meal-item-last" style="flex: 0 0 35px" :style="{ flex: activeSaleFlex}">
                    <div class="header bk-change-normal" @click="pullDown($event)" v-bind:style="homePageBorderTb+homePageBkNormal">
                        <span>销售品</span><i class="el-icon-arrow-right"></i>
                        <div class="sale-choose">
                          <el-select v-model="allNumber" id="inputAA" @visible-change="!allNumberStatus" @change="changeSale" placeholder="" class="number">
                            <el-option
                              v-for="item in assetVOS"
                              :key="item.value"
                              :label="item.productName +'-'+ item.integrationNum"
                              :value="item.integrationId">
                            </el-option>
                          </el-select>
                          <el-select v-model="allState" placeholder="状态" class="state">
                            <el-option
                              v-for="item in optionsTwo"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                    </div>
                    <div class="inside-box">
                      <div class="inside-box-item inside-box-sale" v-for="itemSale in saleProduct" @click="saleDown($event)"  v-if="itemSale.promStatus == allState || allState=='全部'">
                        <p class="head"  v-bind:class="[{red:itemSale.promType == '销售品'},{gray:itemSale.promStatus == '无效'}]">
                          <el-tooltip v-if="itemSale.promType!=null" class="item" effect="dark" :content="'（'+itemSale.promType+'）'+itemSale.selectablePromName" placement="left">
                            <span style="width: 260px; display: inline-block" v-on:dblclick="turnKnowledge(itemSale.selectablePromName)">
                              <a>{{'（'+itemSale.promType+'）'}}</a>
                              {{itemSale.selectablePromName | wordLimit}}
                            </span>
                          </el-tooltip>
                          <el-tooltip v-else class="item" effect="dark" :content="'（'+itemSale.selectablePromType+'）'+itemSale.selectablePromName" placement="left">
                            <span style="width: 260px; display: inline-block" v-on:dblclick="turnKnowledge(itemSale.selectablePromName)">
                              <a>（{{itemSale.selectablePromType}}）</a>
                              {{itemSale.selectablePromName | wordLimit}}
                            </span>
                          </el-tooltip>
                          <span>{{itemSale.selectablePromStartDate | timeLimit}}</span>-
                          <span>{{itemSale.selectablePromEndDate | timeLimit}}</span>
                          <span v-if="itemSale.promType == '销售品'">{{saleReturn()}}</span>
                          <span class="right">{{itemSale.promStatus}}</span>
                        </p>
                        <div class="inside-box-sale-text">
                          <span>状态：{{itemSale.assetStatus}}</span>
                          <span>是否清零：{{itemSale.notClearFlag}}</span>
                          <span>生效时间：{{itemSale.selectablePromStartDate | timeLimit}}</span>
                          <span>关联关系：{{itemSale.assetStatus}}</span>
                          <span>有效时间：{{itemSale.selectablePromEndDate}}</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="set-meal-item set-meal-item-last" style="flex: 0 0 35px">
                  <div class="header bk-change-normal" @click="pullDown($event)" v-bind:style="homePageBorderTb+homePageBkNormal">
                    <span>子产品</span><i class="el-icon-arrow-right"></i>
                    <div class="sale-choose">
                      <el-select v-model="allStateSub" placeholder="状态" class="state">
                        <el-option
                          v-for="item in optionsThree"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                  <div class="inside-box">
                    <div class="inside-box-item inside-box-sale" v-if="personMessage.status == allStateSub || allStateSub=='全部'">
                      <p class="head red" @click="saleDown($event,'主产品',personMessage)">
                        <i v-show="personMessage.productName && subOutList.indexOf(personMessage.productName)<0" class="el-icon-arrow-right"></i>
                        <span v-bind:class="{marginActive: subOutList.indexOf(personMessage.productName)>0}">（{{personMessage.status}}）主@{{personMessage.productName}}</span>
                        <span class="right">{{personMessage.effectiveStartDate | timeLimit}}</span>
                      </p>
                      <div class="inside-box-sale-text">
                        <span v-for="subItem in subAssetPropertyPublic" v-html="desensitization(subItem)" @click="mixAccount(subItem)">
                        </span>
                      </div>
                    </div>
                    <div class="inside-box-item inside-box-sale" v-model="subAssetProperty" v-for="(item,index) in subAsset" :key="item.id" v-if="item.status == allStateSub || allStateSub=='全部'">
                      <p class="head" @click="saleDown($event,'子产品',item,index)">
                        <i v-show="subOutList.indexOf(item.productName)<0" class="el-icon-arrow-right"></i>
                        <span v-bind:class="{marginActive: subOutList.indexOf(item.productName)>=0}">（{{item.status}}）{{item.productName}}</span>
                        <span class="right">{{item.effectiveStartDate | timeLimit}}</span>
                      </p>
                      <div class="inside-box-sale-text">
                        <p style="color: blue" v-if="item.productName=='翼聊（协同通信ECP）'" @click="turnSetMM()">重置密码</p>
                        <span v-for="subItem in subAssetProperty['list'+index]" v-bind:key="subItem.id" v-bind:item="subItem">
                          {{desensitization(subItem)}}
                        </span>

                        <span v-if="item.productName=='天翼亲情网'">成员数：{{familyNetworkList.groupSize}}</span>
                        <span v-if="familyNetworkList && item.productName=='天翼亲情网'" v-for="familyItem in familyNetworkList['familyList']">
                            成员{{familyItem.shortNo}}：{{familyItem.no}}
                        </span>
                        <span v-if="item.productName=='天翼亲情网' && familyNetworkList.shortNo">亲情网群号：{{familyNetworkList['groupId']}}</span>
                        <span v-if="item.productName=='天翼亲情网' && familyNetworkList.groupId">亲情网短号：{{familyNetworkList['shortNo']}}</span>
                        <span v-if="item.effectiveEndDate">{{'失效时间: '+item.effectiveEndDate}}</span>
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
    import api from '../../store/fetch/api'
    export default{
        data () {
            return{
              optionsOne: [{
                value: '选项1',
                label: '13398789998 - 移动号码'
              }, {
                value: '选项2',
                label: '13398789998 - 移动号码'
              }, {
                value: '选项3',
                label: '13398789998 - 移动号码'
              }, {
                value: '选项4',
                label: '13398789998 - 移动号码'
              }, {
                value: '选项5',
                label: '13398789998 - 移动号码'
              }],
              activeFreeFlex:'',
              activeSaleFlex:'',
              allNumber:'',
              allNumberStatus: false,
              allState:'有效',
              allStateSub:'现行',
              subOutList:[
                'CDMA 1X',
                '彩信',
                '短消息',
                '月帐单提醒',
                '翼支付账户',
                '普通国际长途',
                '结转流量提醒',
                '来电显示',
                '国内漫游',
                '在线VPN',
                'ISPP平台业务',
                '七彩铃音',
                '普通国内长途',
                '小灵通短信',
                '一机双号[C+P][辅]',
                '禁止国际漫游流量提醒',
                '禁止异常高额费用提醒',
                '禁止不足提醒',
                '套餐消费-定期提醒',
                '呼叫保持',
                '通信助理(C网)'
              ],
              FTTH: false,
              optionsTwo: [{
                value: '全部',
                label: '全部'
              }, {
                value: '有效',
                label: '有效'
              }, {
                value: '无效',
                label: '无效'
              }],
              optionsThree: [{
                value: '全部',
                label: '全部'
              }, {
                value: '现行',
                label: '现行'
              }, {
                value: '已暂停',
                label: '已暂停'
              }, {
                value: '不活动',
                label: '不活动'
              }]
            }
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
            'setSubAssetPropertyNum',
            'subAssetPropertyPublic',
            'personMessage',
            'promotionName',
            'familyNetworkList'
          ])
        },
        mounted(){
          this.changeInput();
        },
        created(){
          this.allNumber='';
          let arr=[];
          for ( let i in this.freeResource ){
            let str = i + "=" + this.freeResource[ i ];// i 就代表 data 里面的 user pass 等等 而data[ i ] 就代表 userName    12121 就是 i 所对应的值；
            arr.push( str );
          }
          console.log('arr.length');
          console.log(arr.length);
          if(arr.length!=0){
            console.log('arr.length2');
            this.activeFreeFlex='1 0 auto';
            this.activeSaleFlex='0 0 35px';
          }else{
            console.log('arr.length3');
            this.activeFreeFlex='0 0 35px';
            this.activeSaleFlex='1 0 auto';
          }
//          this.$store.dispatch('saveForm',['/precision_marketing','GET_PRECISION_MARKETING_API','precisionMarketingMM']);
//          this.$store.dispatch('saveForm',['/sale_product','GET_SALE_PRODUCT_API','saleProductMM']);
        },
        methods: {
            ...mapActions([
              'iframeBlock','popoverAlert','saleChangeMM','getSubAssetPropertyApi','getSubAssetPropertyZhuApi','familyNetworkListActions'
            ]),
//      套餐主套餐标红色

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
            colorFont(data){
              let proName =this.promotionName.replace('（销售品）','').replaceAll('-','_');
              let item = data.replaceAll('-','_');
                if(proName.indexOf(item)>=0){
                    return 'red';
                }else{
                  return '';
                }
            },
            turnFlowAlert(itemSun,groupResVOS,name){
              if(name){
                if(name && name.indexOf('乐享家')>=0){
                  this.popoverAlert(['vFreeResourceAlert',itemSun,groupResVOS])
                }else{
                }
              }else{
                this.popoverAlert(['vFreeResourceAlert',itemSun,groupResVOS])
              }
            },
            turnSetMM(){
              this.iframeBlock('密码设置');
              document.getElementById("oldWindow").contentWindow.postPayECPSetNewPwd();
            },
            mixAccount(item){
            console.log(item)
            if(item.displayName && item.displayName.indexOf('必须桥接')>=0){
              if(!(this.personMessage.c3Name=='嘉兴市' || this.personMessage.c3Name=='绍兴市') && this.FTTH){
                this.iframeBlock('修改桥接');
                document.getElementById('oldWindow').contentWindow.changeAllowBridging(item.value)
              }
            }
            if(this.personMessage.productName && this.personMessage.productName=='ITV' && item.displayName.indexOf('分组名')>=0){
              if (item.value=='广电默认公众分组' || item.value == '农村信息化广电标清分组'||
                item.value=='默认公众分组' ||item.value=='默认政企分组' ||
                item.value=='百视通农村信息化分组' ||item.value=='酒店分组' ||
                item.value=='酒店高级分组' ||item.value=='百视通酒店高清分组') {

                this.iframeBlock('修改');
                document.getElementById('oldWindow').contentWindow.doChangeItvGroupName()
              }
            }
          },
            desensitization(item){
            if(item.displayName && item.displayName.indexOf('ICCID')>=0){
              return item.displayName+'：******';
            }else if(item.displayName && item.displayName.indexOf('IMSI码')>=0){
              return item.displayName+': ******';
            }else if(item.displayName && item.displayName.indexOf('线路类型')>=0){
              if(item.value.indexOf('FTTH')>=0){
                this.FTTH=true;
              }
              return item.displayName+'：'+item.value;
            }else if(item.displayName && item.displayName.indexOf('PUK1')>=0){
              return item.displayName+'：******';
            }else if(item.displayName && item.displayName.indexOf('PUK2')>=0){
              return item.displayName+'：******';
            }else if(item.displayName && item.displayName.indexOf('鉴权密钥')>=0){
              return item.displayName+'：******';
            }else if(item.displayName && item.displayName.indexOf('PIN2')>=0){
              return item.displayName+'：******';
            }else if(item.displayName && item.displayName.indexOf('密码')>=0){
              return item.displayName+'：******';
            }else if(item.displayName && item.displayName.indexOf('必须桥接')>=0){
              if(!(this.personMessage.c3Name=='嘉兴市' || this.personMessage.c3Name=='绍兴市') && this.FTTH){
                return '手动拨号'+'：'+item.value+'  <a>修改</a>';
              }
            }else if(this.personMessage.productName && this.personMessage.productName=='ITV' && item.displayName.indexOf('分组名')>=0){
              if (item.value=='广电默认公众分组' || item.value == '农村信息化广电标清分组'||
                item.value=='默认公众分组' ||item.value=='默认政企分组' ||
                item.value=='百视通农村信息化分组' ||item.value=='酒店分组' ||
                item.value=='酒店高级分组' ||item.value=='百视通酒店高清分组') {
                return item.displayName+'：'+item.value+'  <a>修改</a>';
              }
            }else{
              return item.displayName+'：'+item.value;
            }
          },
          iconReturn(iconType,name){
            if(name == 'company'){
              let type = iconType.split('_')[0];
              if(type=='DATA'){
                return 'MB';
              }else if(type=='VOICE'){
                return '分';
              }else if(type=='SMS'){
                return '条';
              }else{
                return '元';
              }
            }else{
              let type = iconType.split('_')[0];
              if(type=='DATA'){
                return 'icon-xinhao2';
              }else if(type=='VOICE'){
                return 'icon-yuyin-copy';
              }else if(type=='SMS'){
                return 'icon-youjian';
              }else{
                return 'icon-qianbi';
              }
            }
          },
          changeInput(){
              if(this.assetVOS[0]){
                $('#inputAA').find('input')[0].value=this.assetVOS[0]['productName']+'-'+this.assetVOS[0]['integrationNum'];
              }
          },
            turnKnowledge(name){
                this.$store.state.page.pageTitle.konwledgeInput=name;
            },
            changeSale(value){
                console.log(value)
              if(value){
                this.saleChangeMM(value);
                this.$store.dispatch('saveForm',['/sale_product/?__dew_token__='+this.token,'GET_SALE_PRODUCT_API','saleProductMM']);
              }else{
              }
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
          },
          pullDown: function (event) {
            if($(event.target).closest('.sale-choose').length <= 0){
              let dom = event.currentTarget;
              let iDom = dom.getElementsByClassName('el-icon-arrow-right')[0];
              if(iDom.getAttribute('class')=='el-icon-arrow-right'){
                iDom.setAttribute('class','el-icon-arrow-right active');
                var item = iDom.parentNode.parentNode.parentNode.getElementsByClassName('set-meal-item');
                for(var i=0;i<item.length;i++){
                  if(item[i].style.flex=="1 0 auto"){
                    item[i].style.flex="0 0 36px";
                    item[i].getElementsByTagName('i')[0].setAttribute('class','el-icon-arrow-right')
                  }
                }
                dom.parentNode.style.flex="1 0 auto"
              }else{
              }
            }
          },
          smallPullDown: function (event) {
              if(event.target.tagName!='A'){
                let dom = event.currentTarget;
                let idom = dom.getElementsByClassName('el-icon-arrow-right')[0];
                if(idom.getAttribute('class')=='el-icon-arrow-right'){
                  idom.setAttribute('class','el-icon-arrow-right active-right-icon');
                  dom.parentNode.style.height = '161px';
                }else{
                  idom.setAttribute('class','el-icon-arrow-right');
                  dom.parentNode.style.height = '36px';
                }
              }else{
                return;
              }
          },
          lookMember: function (event) {
            let dom = event.currentTarget;
            let iDom = dom.getElementsByClassName('el-icon-arrow-right')[0];
            if(window.getComputedStyle(dom.parentNode, null).height == '20px'){
              dom.parentNode.style.height='auto';
              iDom.setAttribute('class','el-icon-arrow-right active')
            }else {
              dom.parentNode.style.height='20px';
              iDom.setAttribute('class','el-icon-arrow-right')
            }
          },
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
//                  document.getElementById("oldWindow").contentWindow.hastenObstacleOrder(item.mainSN,item.firstReceptTime);
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
          saleDown: function (event,name,item,index) {
            $('.inside-box-item .inside-box-sale inside-box-sale-active').attr('class','inside-box-item inside-box-sale');
            if(item){
              if(this.subOutList.indexOf(item.productName)<0){
                if(event.currentTarget.parentNode.className == 'inside-box-item inside-box-sale'){
                  if(name=='子产品'){
                    this.$store.state.editor.setSubAssetPropertyNum=index;
                    this.$store.dispatch('setSubAssetPropertyApi',item);
                    if(item.productName=='天翼亲情网'){
                      this.familyNetworkListActions();
                    }
                    api.widgetApi('/sub_assetProperty/?__dew_token__='+this.token,this.$store.state.editor.getSubAssetPropertyMM).then(
                      res=>{
                        this.getSubAssetPropertyApi(res);
                        if(res.body.data.properties.length=='0'){

                        }else{
                          if(event.target.tagName=='I' || event.target.tagName=='SPAN'){
                            console.log(event.target.parentNode.parentNode)
                            event.target.parentNode.parentNode.style.height='auto';
                            event.target.parentNode.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                            console.log(event.target)
                          }else if(event.target.tagName=='P'){
                            console.log(event.target.parentNode)
                            event.target.parentNode.style.height='auto';
                            event.target.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                          }
//                      for(item in event.path){
//                        if (event.path[item].className=='inside-box-item inside-box-sale'){
//                          console.log(event.path[item])
//                          event.path[item].style.height='auto';
//                          event.path[item].className='inside-box-item inside-box-sale inside-box-sale-active';
//                        }
//                      }
                        }
                      }
                    )
                  }
                  if(name=='主产品'){
                    this.$store.dispatch('setSubAssetPropertyZhuApi');
                    api.widgetApi('/sub_assetProperty/?__dew_token__='+this.token,this.$store.state.editor.getSubAssetPropertyMM).then(
                      res=>{
                          console.log(res)
                        this.getSubAssetPropertyZhuApi(res);
                        if(res.body.data.properties.length=='0'){

                        }else{

                          if(event.target.tagName=='I' || event.target.tagName=='SPAN'){
                            console.log(event.target)
                            event.target.parentNode.parentNode.style.height='auto';
                            event.target.parentNode.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                            console.log(event.target)
                          }else if(event.target.tagName=='P'){
                            event.target.parentNode.style.height='auto';
                            event.target.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                          }
//                      for(item in event.path){
//                        if (event.path[item].className=='inside-box-item inside-box-sale'){
//
//                          event.path[item].style.height='auto';
//                          event.path[item].className='inside-box-item inside-box-sale inside-box-sale-active';
//                        }
//                      }
                        }
                      }
                    );
                  }
                }else{
                  event.currentTarget.parentNode.style.height='24px';
                  event.currentTarget.parentNode.className='inside-box-item inside-box-sale';
                }

              }
            }
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
          }

        },
        watch:{
        }
//        filters:{
//          numToString: function (val) {
//              if(val){
//                let ary = ['账务查询','故障专区','故障申告','咨询受理','投诉建议','账务专区和营销专区','营销专区','推送解锁','宽带新装','ITV故障专区','同步服务状态','密码验证和故障专区','派故障单和宽带故障专区','一键修复和宽带故障专区'];
//                if( val >= 0 && val <ary.length){
//                  return ary[val - 1]
//                }else{
//                  return val
//                }
//              }
//          }
//        }
    }
</script>
<style scoped>
  .set-meal-item .inside-box{
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(100% - 35px);
    overflow: auto;
    float: left;

  }
</style>
