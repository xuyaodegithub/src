/**
 * Created by Chris on 17/5/8.
 */

import Vue from 'vue'
let Base64 = require('js-base64').Base64;
const getters = {
  //首页页面切换
  changePage: state => {
    return state.page.changePage;
  },
  popoverAlive: state => {
    return state.page.popoverAlive;
  },
  smallAlive: state => {
    return state.page.smallAlive;
  },
  centerFunctionText: state => {
    return state.page.centerFunctionText;
  },
  callNo: state => {
    if(state.editor.followData.phoneNum==null){
      return '10000';
    }else{
      return state.editor.followData.phoneNum;
    }
  },
  headerPageStyle: state => {
    return state.page.header;
  },
  setSubAssetPropertyNum: state => {
    return state.editor.setSubAssetPropertyNum;
  },
  countZero: state => {
    return state.page.header.countZero;
  },
  sidebarPageStyle: state => {
    return state.page.sidebar;
  },
  pageTitlePageStyle: state => {
    return state.page.pageTitle.style;
  },
  konwledgeInput: state => {
    return state.page.pageTitle.konwledgeInput;
  },

  //呼入随入的数据
  followData: state => {
    return state.editor.followData;
  },
  //呼入随入的数据
  extObj: state => {
    let extObj =  eval('(' + state.editor.enterCase.ext + ')');
    return extObj;
  },

  //上一通会话足迹
  ivrFlowListStr: state => {
    return state.editor.followData.ivrFlowList;
  },
  //书签的控制
  pageTitle: state => {
    return state.page.pageTitle;
  },

  //老系统iframe显示设置
  changeOldPage: state => {
    return state.page.changeOldPage;
  },
  homePageStyle: state => {
    return state.page.homepage.style;
  },
  homePageButton: state => {
    let style = 'color:'+state.page.homepage.style.gradualBkNormalBtn.color+';border: 1px solid '+ state.page.homepage.style.gradualBkNormalBtn.border+';background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, '+state.page.homepage.style.gradualBkNormalBtn.from+'), color-stop(1, '+state.page.homepage.style.gradualBkNormalBtn.to+')) !important;';
    return style;
  },
  homePageBorder: state => {
    let style = 'border: 1px solid '+ state.page.homepage.style.borderColor;
    return style;
  },
  homePageBorderTopNone: state => {
    let style = 'border: 1px solid '+ state.page.homepage.style.borderColor+';borderTop: none;';
    return style;
  },
  homePageBorderTb: state => {
    let style = 'borderTop: 1px solid '+ state.page.homepage.style.borderColor+';borderBottom: 1px solid '+state.page.homepage.style.borderColor+';';
    return style;
  },
  homePageBkNormal: state => {
    // let style = 'background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, '+state.page.homepage.style.gradualBkNormal.from+'), color-stop(1, '+state.page.homepage.style.gradualBkNormal.to+')) !important;';
    // let style = 'background: url(../../assets/img/duck.jpg)';
    // return style;
  },
  personMessage: state => {
    return state.page.sidebar.personMessage;
  },
  calculatorActive: state => {
    return state.page.calculatorActive;
  },
  personMessageAccount: state => {
    console.log(state.page.sidebar.personMessage.accountIdNumber)
    if(state.page.sidebar.personMessage!=='' || state.page.sidebar.personMessage!==null || state.page.sidebar.personMessage!== undefined){
      let accountIdNumber=state.page.sidebar.personMessage.accountIdNumber
      return accountIdNumber.substring(0,6)+'**********'+accountIdNumber.substring(12,18)
    }else{
      return '';
    }
  },

  //个人介绍的实名认证
  personRealName: state => {
    return state.page.sidebar.personRealName;
  },
  //资产列表 loading show

  sidebarEditorShow: state => {
    return state.editor.sidebarEditor.show;
  },
  //资产列表 同合同同客户show
  assetListShow: state => {
    return state.page.sidebar.assetListShow;
  },
  //资产列表 同合同同客户show root
  assetListShowRoot: state => {
    return state.page.sidebar.assetListShow.root;
  },
  //资产列表 同合同同客户
  assetList: state => {
    return state.page.sidebar.assetList;
  },
  //资产列表 同合同
  assetListContract: state => {
    return state.page.sidebar.assetListContract;
  },
  //资产列表 同客户
  assetListCustom: state => {
    return state.page.sidebar.assetListCustom;
  },
  //资产列表 身份证
  assetListId: state => {
    return state.page.sidebar.assetListId;
  },
  //资产列表 身份证 search
  assetListIdSearch: state => {
    return state.page.sidebar.assetListIdSearch;
  },
  assetListIdSearchData: state => {
    return state.page.sidebar.assetListIdSearchData;
  },
  toolData: state => {
    return state.page.sidebar.toolPage.toolData;
  },
  toolDataAll: state => {
    return state.page.sidebar.toolPage.toolDataAll;
  },
  toolPage: state => {
    return state.page.sidebar.toolPage;
  },
  toolDataAllSearch: state => {
    return state.page.sidebar.toolPage.toolDataAllSearch;
  },

  //客户画像
  personHead: state => {
    return state.page.homepage.packageHeadMessage
  },
  birthday: state => {
    return state.editor.birthday
  },
  //客户基本信息
  accountBundle: state => {
    return state.page.homepage.accountBundle
  },
  promotionName: state => {
    return state.editor.callNumberMM.promotionName
  },
  createDate: state => {
    return state.editor.callNumberMM.createDate
  },
  completedDate: state => {
    return state.editor.callNumberMM.completedDate
  },
  callDayList: state => {
    return state.page.homepage.callDayList;
  },
  callMouthList: state => {
    return state.page.homepage.callMouthList;
  },
  //呼入详情
  callDetail: state => {
    return state.page.homepage.callDetail;
  },
  //余额详情
  balanceDetail: state => {
    return state.page.pageAge.balanceDetail;
  },
  //一正五号
  phoneRelNum: state => {
    return state.page.pageAge.phoneRel;
  },
  //轨迹的话务小结
  telephoneSummary: state => {
    return state.page.PackageLine.telephoneSummary;
  },
  //轨迹的话务小结
  lastCallDetail: state => {
    if(state.page.PackageLine.lastCallDetail){
      return state.page.PackageLine.lastCallDetail;
    }else{
      return '';
    }
  },
  //incomminghistory
  incomingHistory: state =>{
    return state.page.homepage.incomingHistory
  },
  packageCase: state => {
    return state.page.homepage.packageCase;
  },

  //免费资源套餐 弹框需要的数据
  freeResourceAlertData: state => {
    return state.page.homepage.freeResourceAlertData;
  },
  packageCasePrecision: state => {
    return state.page.homepage.packageCasePrecision;
  },
  kindName: state => {
    return state.page.homepage.kindName;
  },
  precisionButton: state => {
    return state.page.homepage.precisionButton;
  },
  chooseNum: state => {
    return state.page.sidebar.toolPage.chooseNum;
  },
  customerAsset: state => {
    return state.page.homepage.customerAsset;
  },
  saleProduct: state => {
    return state.page.homepage.saleProduct;
  },
  freeResource: state => {
    return state.page.homepage.freeResource;
  },
  severEvent: state => {
    return state.page.severEvent;
  },

  subAsset: state => {
    return state.page.homepage.subAsset.assets;
  },
  subAssetProperty: state => {
    return state.page.homepage.subAssetProperty;
  },
  subAssetPropertySelf: state => {
    return state.page.homepage.subAssetPropertySelf;
  },
  subAssetPropertyPublic: state => {
    return state.page.homepage.subAssetPropertyPublic;
  },
  familyNetworkList: state => {
    return state.page.homepage.familyNetworkList;
  },
  //详情 谈框
  packageCaseDetail: state => {
    return state.page.homepage.packageCaseDetail;
  },
  messageNums: state => {
    return state.page.homepage.messageNums;
  },
  //提示信息条数
  StaffStatInfo: state => {
    return state.page.homepage.StaffStatInfo;
  },


  //IVR关联信息 来点预判
  getUserOperateTraceQuery: state => {
    return state.page.ivrData.getUserOperateTraceQuery
  },
  //转接 大小类
  bigJobKind: state => {
    let kinds=[];
    if(state.page.ivrData.getTransferParams !==''){
      for(let i=0;i<state.page.ivrData.getTransferParams[0].paramValue.split(';').length; i++){
        kinds.push(state.page.ivrData.getTransferParams[0].paramValue.split(';')[i].split(':')[0]);
      }
    }
    return kinds;
  },
  smallJobKind: state => {
    let kinds=[];
    let fatherData=state.page.ivrData.getTransferParams[0].paramValue.split(';');
    if(state.page.ivrData.getTransferParams !==''){
      for(let i=0;i<fatherData.length; i++){
        for(let j=0;j<fatherData[i].split(':')[1].split('#').length; j++){
          let sunData = fatherData[i].split(':')[1];
          kinds['"'+state.page.ivrData.getTransferParams[0].paramValue.split(';')[i].split(':')[0]+'"']=(sunData.split('#'));
          console.log(kinds)
          // console.log(sunData.split('#'));
          // console.log(j);
          // console.log(sunData.split('#')[j]);
          // kinds.push(sunData.split('#')[j]);
        }
      }
    }
    return kinds;
  },
  allJobKind: state => {
    // console.log(this)
    let kinds=[];
    let fatherData=state.page.ivrData.getTransferParams[0].paramValue.split(';');
    if(state.page.ivrData.getTransferParams !==''){
      for(let i=0;i<fatherData.length; i++){
        for(let j=0;j<fatherData[i].split(':')[1].split('#').length; j++){
          let sunData = fatherData[i].split(':')[1];
          // Vue.set(state.page.ivrData.getTransferParamsAll,'"'+state.page.ivrData.getTransferParams[0].paramValue.split(';')[i].split(':')[0]+'"',sunData.split('#'))
          kinds['"'+state.page.ivrData.getTransferParams[0].paramValue.split(';')[i].split(':')[0]+'"']=(sunData.split('#'));
          // console.log()
          // console.log(sunData.split('#'));
          // console.log(j);
          // console.log(sunData.split('#')[j]);
          // kinds.push(sunData.split('#')[j]);
        }
      }
    }
    // let obj= Object.create(null);
    // for (let[k,v] of kinds) {
    //   obj[k] = v;
    // }
    // console.log(state.page.ivrData.getTransferParamsAll)
    // return state.page.ivrData.getTransferParamsAll;
    console.log(kinds);
    return kinds;
  },
  getTransferParams: state => {
    return state.page.ivrData.getTransferParams;
  },
  //转接 目标号码
  goalNumber: state => {
    return state.page.ivrData.getTransferRegion;
  },
  getRegionQueueArea: state => {
    return state.page.ivrData.getRegionQueueArea;
  },
  areaItem: state => {
    return state.page.ivrData.areaItem;
  },
  getRegionQueueSkill: state => {
    return state.page.ivrData.getRegionQueueSkill.regionSkills;
  },
  getReadBusyAndQueue: state => {
    return state.page.ivrData.getReadBusyAndQueue;
  },
  tabChange: state => {
    return state.editor.tabChange;
  },

  // 登录所需信息
  getLoginInfo: state => {
    return state.page.ivrData.getLoginInfo;
  },
  getLoginInfoExt: state => {
    return state.page.ivrData.getLoginInfo.ext;
  },

  //登录获取的客服信息
  enterCase: state => {
    return state.editor.enterCase;
  },

  //录音编号
  recordId: state => {
    return state.editor.recordId;
  },

  //上一通电话
  lastCall: state => {
    return state.page.PackageLine.lastCall;
  },
  //接触轨迹
  channelContact: state => {
    return state.page.PackageLine.channelContact
  },
  recordingId: state => {
    return state.page.PackageLine.recordingId
  },
  channelContactSearch: state => {
    return state.page.PackageLine.channelContactSearch
  },

  //登录数据
  loginData: state => {
    return state.page.loginData;
  },

  //getRegionQueue
  transferRegion: state => {
    return state.page.ivrData.getRegionQueue;
  },

//token
  token: state => {
    return state.editor.token;
  },
//  接口入参
  personMM: state => {
    return state.editor.personMM;
  },
  channelContactMM: state => {
    return state.editor.channelContactMM;
  },
  precisionMarkeingMM: state => {
    return state.editor.precisionMarkeingMM;
  },
  assetListMM: state => {
    return state.editor.assetListMM;
  },
  getToolBoxMM: state => {
    return state.editor.getToolBoxMM;
  },
  lastCallMM: state => {
    return state.editor.lastCallMM;
  },
  ivrMM: state => {
    return state.editor.ivrMM;
  },

  //宽带率入参 新街口
  getBroadbandRateMM: state => {
    return state.editor.getBroadbandRateMM;
  },
  //呼入号码
  callNumber: state => {
    return state.editor.callNumber;
  },
  //business号码
  businessCallNumber: state => {
    return state.editor.businessCallNumber;
  },
  assetVOS: state => {
    if (state.page.getSameContractAsset == null){
      return '';
    }else {
      return state.page.getSameContractAsset;
    }
  },
  netWorkNum: state => {
    if (state.editor.callNumberMM.networkAccount == null){
      return '';
    }else {
      return state.editor.callNumberMM.networkAccount;
    }
  },
  productCode: state => {
    if (state.editor.callNumberMM.productCode == null){
      return '';
    }else {
      return state.editor.callNumberMM.productCode;
    }
  },
  status: state => {
    if (state.editor.callNumberMM.status == null){
      return '';
    }else {
      return state.editor.callNumberMM.status;
    }
  },
  assetId: state => {
    if (state.editor.callNumberMM.assetId == null){
      return '';
    }else {
      return state.editor.callNumberMM.assetId;
    }
  },
  integrationId: state => {
    if (state.editor.callNumberMM.integrationId == null){
      return '';
    }else {
      return state.editor.callNumberMM.integrationId;
    }
  },
  networkAccount: state => {
    if (state.editor.callNumberMM.networkAccount == null){
      return '';
    }else {
      return state.editor.callNumberMM.networkAccount;
    }
  },

  contract: state=>{
    return state.editor.sidebarEditor.contract;
  },

  custom: state=>{
    return state.editor.sidebarEditor.custom;
  },

  identityCard: state=>{
    return state.editor.sidebarEditor.identityCard;
  },

  areaPlace: state => {
    let cityName= state.editor.callNumberMM.areaCode;
    if(cityName == "571"){
      return "HANGZHOU";
    }else if(cityName == "574"){
      return "NINGBO";
    }else if(cityName == "577"){
      return "WENZHOU";
    }else if(cityName == "573"){
      return "JIAXING";
    }else if(cityName == "572"){
      return "HUZHOU";
    }else if(cityName == "575"){
      return "SHAOXING";
    }else if(cityName == "579"){
      return "JINHUA";
    }else if(cityName == "570"){
      return "QUZHOU";
    }else if(cityName == "580"){
      return "ZHOUSHAN";
    }else if(cityName == "576"){
      return "TAIZHOU";
    }else if(cityName == "578"){
      return "LISHUI";
    }else {
      return '';
    }
  },

  iframeSrc: state=>{

    let loginId = Base64.encode(state.page.loginData.loginId);
    let id = 'ENSTAFFID='+ loginId +'&ani=10000';
    return state.editor.iframeSrc + id;
  },
  //脱敏
  desensitization: state=>{
    return state.editor.desensitization;
  },
  idCardFlag: state=>{
    return state.editor.idCardFlag;
  },
//  老系统嵌入 入参值

//查询异网用户宽带账号 电话呼入时候查询
  getKdAccountByCallNum: state=>{
    return state.page.getKdAccountByCallNum;
  },
//  记事本
  queryNoteList: state=>{
    return state.page.queryNoteList;
  },


//    <=====================   余额分析接口   ========================>

//  是否欠费查询
  balanceInfo: state=>{
    return state.page.balanceInfo;
  },
//  是否欠费查询
  balanceCredit: state=>{
    return state.page.balanceCredit;
  },
//  查询余额明细
  balanceDeatil: state=>{
    return state.page.balanceDeatil;
  },
//套餐用户翼支付划拨记录查询
  epayChargeBillRecord: state=>{
    return state.page.epayChargeBillRecord;
  },
//套餐用户翼支付划拨进度查询
  epayChargeBillProgress: state=>{
    return state.page.epayChargeBillProgress;
  },
//欠费明细查询服务
  oweChargeDetail: state=>{
    return state.page.oweChargeDetail;
  },
//待生效金额
  queryBookSchemeInfo: state=>{
    return state.page.queryBookSchemeInfo;
  },
//短信警告信息查询
  queryAlarmInfo: state=>{
    return state.page.queryAlarmInfo;
  },
//账务诊断
  balanceIagnosis: state=>{
    return state.page.balanceIagnosis;
  },
//使用客户合同号查询充值缴费记录
  queryRechargeList: state=>{
    return state.page.queryRechargeList;
  },
//使用客户合同号查询停复机记录记录
  queryCallLimitList: state=>{
    return state.page.queryCallLimitList;
  },
//历史话费返还查询
  queryBillReturnDetail: state=>{
    return state.page.queryBillReturnDetail;
  },

//余额变动查询
  balanceChangeList: state=>{
    return state.page.balanceChangeList;
  },
  balanceChangeListDetail: state=>{
    return state.page.balanceChangeListDetail;
  },
//历史余额变动查询
  queryBalanceLogTotal: state=>{
    return state.page.queryBalanceLogTotal;
  },
//历史合同欠费查询
  queryOweChargeInfo: state=>{
    return state.page.queryOweChargeInfo;
  },
//历史话费返还查询
  smsContentList: state=>{
    return state.page.smsContentList;
  },

  //身份认证结果
  //密码转接认证结果
  pwdTransfer: state=>{
    let index = state.page.allCheckResults.businessCallNumbers.indexOf(state.editor.businessCallNumber)
    if(index !== -1){
      let cr = state.page.allCheckResults.checkResults[index];
      return cr.pwdTransfer
    }else return false
  },
  // 身份证验证 或者人工验证 结果
  idCheckResult: state=>{
    let index = state.page.allCheckResults.businessCallNumbers.indexOf(state.editor.businessCallNumber)
    if(index !== -1){
      let cr = state.page.allCheckResults.checkResults[index];
      return cr.idCheck
    }else return false
  },
  //验证码 结果
  validateCodeResult: state=>{
    let index = state.page.allCheckResults.businessCallNumbers.indexOf(state.editor.businessCallNumber)
    if(index !== -1){
      let cr = state.page.allCheckResults.checkResults[index];
      return cr.validateCode
    }else return false
  },

  //辅助认证结果
  auxiliaryCheckResult: state=>{
    let index = state.page.allCheckResults.businessCallNumbers.indexOf(state.editor.businessCallNumber)
    if(index !== -1){
      let cr = state.page.allCheckResults.checkResults[index];
      return cr.auxiliaryCheck
    }else return false
  },

  //强制认证
  forcedCheckResult: state=>{
    let index = state.page.allCheckResults.businessCallNumbers.indexOf(state.editor.businessCallNumber)
    if(index !== -1){
      let cr = state.page.allCheckResults.checkResults[index];
      return cr.forcedCheck
    }else return false
  },

  accountIdNumber : state=>{
    if(state.page.sidebar.personMessage){
      return state.page.sidebar.personMessage.accountIdNumber
    }else{
      return '';
    }
  }
};

export default getters
