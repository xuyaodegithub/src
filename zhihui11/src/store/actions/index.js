/**
 * Created by Chris on 17/5/8.
 */
import router from '../../router/index'
import axios from 'axios'
import * as types from '../fetch/type';
import { Message } from 'element-ui';
import { Loading } from 'element-ui';
import api from '../fetch/api'
let Base64 = require('js-base64').Base64;
const actions = {
  popoverAlert(context,where,event){
    context.commit('changeAlert',where)
  },
  smallPopoverAlert(context,where,event){
    context.commit('changeSmallAlert',where)
  },
  alertShow(context,writeNo){
    context.state.page.centerFunctionText=writeNo;
    context.dispatch('smallPopoverAlert','vCenterFunctionAlert')
  },
  //integrationId
  integrationIdSearch(context,writeNo){
    context.dispatch('clearAll');
    context.commit('SET_PERSON_EMPTY_API');

    context.commit('SET_INTEGRATION_NO_API',writeNo)
  },
  integrationIdSearchOld(context,writeNo){
    context.dispatch('clearAll');
    context.commit('SET_PERSON_EMPTY_API');
    context.commit('SET_INTEGRATION_OLD_NO_API',writeNo)
  },
  //业务号码
  setBusinessNo(context,writeNo){
    context.commit('SET_PERSON_EMPTY_API');
    context.dispatch('turnNewPage',['vIndexPage','首页'])
    context.commit('SET_BUSINESS_NO_API',writeNo)
  },
  //宽带账号
  broadbandAccountNo(context,writeNo){
    context.commit('SET_PERSON_EMPTY_API');
    context.dispatch('turnNewPage',['vIndexPage','首页'])
    context.commit('SET_BROADBAND_ACCOUNT_NO',writeNo)
  },
  //固定电话
  setTelephoneNo(context,writeNo){
    context.commit('SET_PERSON_EMPTY_API');
    context.commit('SET_TELEPHONE_NO_API',writeNo)
  },
  //有线宽带
  setWiredBroadband(context,writeNo){
    context.commit('SET_PERSON_EMPTY_API');
    context.commit('SET_WIRED_BROAD_BAND_NO_API',writeNo)
  },
  //Itv
  setItvNo(context,writeNo){
    context.commit('SET_PERSON_EMPTY_API');
    context.commit('SET_ITV_NO_API',writeNo)
  },

  //脱敏 转换 保存
  changeAuthenticated(context){
    context.state.editor.desensitization = false;
    if(context.state.editor.authenticatedAccountNumber.indexOf(context.state.editor.callNumberMM.accountNumber)>0){

    }else{
      context.state.editor.authenticatedAccountNumber.push(context.state.editor.callNumberMM.accountNumber);
    }
  },

  //脱敏
  changeAuthenticatedIdCard(context,data){
    context.state.editor.desensitization = false;
    if(context.state.editor.authenticatedAccountNumber.indexOf(context.state.editor.callNumberMM.accountNumber)>0){

    }else{
      context.state.editor.authenticatedAccountNumber.push(data);
    }
  },

  broadBandAccount(context,writeNo){
    context.commit('SET_PERSON_EMPTY_API');
    context.commit('SET_BROADBAND_ACCOUNT_API',writeNo)
  },

  //axios封装
  turnForm (context,funUrl) {
    axios.defaults.baseURL = context.state.editor.axiosUrl;
      axios({
          method: 'post',
          url: funUrl[0]+'',
          dataType: 'JSON',
          data: context.state.editor[funUrl[2]]
      })
      .then(function(res){
          if(res.data.code!='200'){

            Message({
              message: '查询失败',
              type: 'warning'
            });
          }else{
              if (funUrl[1]!=''){
                console.log(funUrl[2]);
                console.log(res);
                context.commit(types[funUrl[1]], res)

              }else{

              }
          }
      })
      .catch(function(err){
          console.log(err)
      })
  },
  //axios封装
  saveForm (context,funUrl) {
    axios.defaults.baseURL = context.state.editor.axiosUrl;
      axios({
          method: 'post',
          url: funUrl[0]+'',
          dataType: 'JSON',
          data: context.state.editor[funUrl[2]]
      })
      .then(function(res){
          if(res.data.code!='200'){
              Message({
                showClose: true,
                message: funUrl[1],
                type: 'warning'
              });
          }else{
              if (funUrl[1]!='' && res.data.body.data!=null){
                context.commit(types[funUrl[1]], res)
              }else{
                Message({
                  showClose: true,
                  message: '返回为Null',
                  type: 'warning'
                });
              }
          }
      })
      .catch(function(err){
          console.log(err)
      })
  },
  //axios封装 callNum
  callSaveForm (context) {
    context.commit(types.SET_CALL_NO_API);
    axios.defaults.baseURL = context.state.editor.axiosUrl;
      axios({
          method: 'post',
          url: '/user_info/?__dew_token__='+context.getters.token,
          dataType: 'JSON',
          data: context.state.editor.personMM
      })
      .then(function(res){
          if(res.data.code!='200'){
            Message({
              message: '查询失败',
              type: 'warning'
            });
          }else{
              context.commit(types.GET_PERSON_API, res);
              context.commit(types.GET_PERSON_SAVE_API, res);
              context.dispatch('callNumThenData');
              context.dispatch('freshWidget');
              context.dispatch('callNumberShow');

              //清空 数据
              context.commit(types.SET_KD_ACCOUNT_BY_CALL_DATA_NUM,'');
              if(res.data.body.data['outSideArea']){
                context.dispatch('kdAccountByCallNumActions');
              }else{
                context.commit(types.GET_KD_ACCOUNT_BY_CALL_NUM,'');
              }
              setCallPhoneInfo({callPhoneType:context.state.editor.callNumberMM.productCode,callPhoneArea: '0' + context.state.editor.callNumberMM.areaCode,callCustomerId: context.state.editor.callNumberMM.accountNumber})
              //缓存呼入号码的 账号
              if(context.state.editor.authenticatedAccountNumber.indexOf(res.data.body.data.accountNumber)>0){

              }else{
                context.state.editor.authenticatedAccountNumber.push(res.data.body.data.accountNumber);
              }
            //setBusiPhoneInfo
            context.commit(types.SET_BUSI_PHONE_INFO, res);
            setBusiPhoneInfo(context.state.editor.infoSaimen);
          }
      })
      .catch(function(err){
          console.log(err)
      })
  },
  //axios封装
  setSaveForm (context) {
    axios.defaults.baseURL = context.state.editor.axiosUrl;
    axios({
      method: 'post',
      url: '/user_info/?__dew_token__='+context.getters.token,
      dataType: 'JSON',
      data: context.state.editor.personMM
    })
      .then(function(res){
        console.log(res)
        if(res.data.code!='200'){

          Message({
            message: '查询失败',
            type: 'warning'
          });
        }else{
          context.commit(types.GET_PERSON_API, res);
          context.commit(types.GET_PERSON_SAVE_API, res);
          context.dispatch('callNumThenData');
          //widget 接口 请求
          context.dispatch('freshWidget');
          context.dispatch('businessNumberShow');
          // /到时有个地方加个内容，当查getuserinfo后，调一下//业务号码类型
          //老系统
          if(res.data.body.data.productName=='普通电话'){
            if(context.getters.businessCallNumber[0]=='0'){
              document.getElementById("oldWindow").contentWindow.freshBusiPhoneInfo(
                context.getters.businessCallNumber.substring(1),
                context.getters.networkAccount,
                context.getters.productCode,
                context.getters.status,
                context.getters.integrationId,
                context.getters.areaPlace
              );
              if(context.state.editor.idCardFlag==false){
                document.getElementById("oldWindow").contentWindow.unShieldInfo();
              }
            }else{
              document.getElementById("oldWindow").contentWindow.freshBusiPhoneInfo(
                context.getters.businessCallNumber,
                context.getters.networkAccount,
                context.getters.productCode,
                context.getters.status,
                context.getters.integrationId,
                context.getters.areaPlace
              );
              if(context.state.editor.idCardFlag==false){
                document.getElementById("oldWindow").contentWindow.unShieldInfo();
              }
            }
          }else if(res.data.body.data.productName=='通信光纤出租') {
            document.getElementById("oldWindow").contentWindow.freshBusiPhoneInfo(
              '',
              context.getters.businessCallNumber,
              context.getters.productCode,
              context.getters.status,
              context.getters.integrationId,
              context.getters.areaPlace
            );
            if(context.state.editor.idCardFlag==false){
              document.getElementById("oldWindow").contentWindow.unShieldInfo();
            }
          }else{
            document.getElementById("oldWindow").contentWindow.freshBusiPhoneInfo(
              context.getters.businessCallNumber,
              context.getters.networkAccount,
              context.getters.productCode,
              context.getters.status,
              context.getters.integrationId,
              context.getters.areaPlace
            );
            if(context.state.editor.idCardFlag==false){
              try {
                document.getElementById("oldWindow").contentWindow.unShieldInfo();
                // 此处是可能产生例外的语句
              } catch(error) {
                console.log('老系统报错')
                // 此处是负责例外处理的语句
              } finally {
                // 此处是出口语句
              }
            }
          }
          //身份证查询脱敏
          if(context.state.editor.authenticatedAccountNumber.indexOf(res.data.body.data.accountNumber)>=0 || context.state.editor.idCardFlag==false){
            context.dispatch('changeAuthenticatedIdCard',res.data.body.data.accountNumber);
            context.state.editor.desensitization=false;
            context.state.editor.idCardFlag=true;
          }else{
            context.state.editor.desensitization=true;
          }
          if(context.getters.extObj.secondLevel || context.getters.extObj.thirdLevel){
            context.state.editor.desensitization=false;
          }
          //setBusiPhoneInfo

          context.commit(types.SET_BUSI_PHONE_INFO, res);
          setBusiPhoneInfo(context.state.editor.infoSaimen);
        }
      })
      .catch(function(err){
        console.log(err)
      });

    let resolved = 'aa';
    return resolved;
  },
//134.96.181.140:8020
//   businessSaveForm (context) {
//     context.commit(types.SET_CALL_NO_API);
//     axios.defaults.baseURL = 'http://134.96.181.140:8020/widget/data';
//     axios({
//       method: 'post',
//       url: '/user_info/?__dew_token__='+context.getters.token,
//       dataType: 'JSON',
//       data: context.state.editor.personMM
//     })
//       .then(function(res){
//         if(res.data.code=='500'){
//           console.log('访问成功,但是无数据返回')
//         }else{
//           console.log(res);
//           context.commit(types.GET_PERSON_API, res);
//           context.commit(types.GET_PERSON_SAVE_API, res);
//             // context.commit(types.GET_PERSON_SAVE_API, res);
//           context.dispatch('changeNumThenData');
//           context.dispatch('freshWidget');
//         }
//       })
//       .catch(function(err){
//         console.log(err)
//       })
//   },

  //清楚缓存
  clearAll(context){
    context.commit(types.SET_WIDGET_EMPTY);
    context.commit(types.SET_LOCAL_ASSET_EMPTY);
  },
  clearCall(context){
    context.commit(types.SET_CALLIN_WIDGET_EMPTY);
  },
  clear(context){
    context.commit(types.SET_WIDGET_EMPTY);
    context.commit(types.SET_LOCAL_ASSET_EMPTY);
  },
  clearTranferData(context){
    context.commit(types.SET_TRANFE_WIDGET_EMPTY);
  },
  //清除按钮
  clearBtn(context){
    context.commit(types.SET_LOCAL_ASSET_EMPTY);
  },
  tagActive (context,event) {
    if(event.target.getAttribute('class')=='title-item-tag titleActive'){
      // if(event.currentTarget.innerText=='首页'){
      //   context.dispatch('turnIndexPage')
      //   context.dispatch('turnNewPage',['vIndexPage','首页'])
      //   context.state.page.pageTitle.isActive=false;
      //   context.state.page.pageTitle.isActive = !context.state.page.pageTitle.isActive;
      //   $('.title-item-tag').css('background','none');
      //   event.target.style.background=context.state.page.homepage.style.bg;
      // }
    }else{
      if(event.currentTarget.innerText=='首页'){
        context.dispatch('turnIndexPage')
        context.dispatch('turnNewPage',['vIndexPage'])
        context.state.page.pageTitle.isActive=false;
        context.state.page.changeOldPage.status=false;
        context.state.page.pageTitle.isActive = !context.state.page.pageTitle.isActive;
        $('.title-item-tag').css('background','none');
        event.target.style.background=context.state.page.homepage.style.bg;
      }else if(event.currentTarget.innerText=='余额及欠费'){
        context.dispatch('turnNewPage',['vAccounting','余额及欠费'])
      }else if(event.currentTarget.innerText=='故障分析'){
        context.dispatch('turnNewPage',['vFault','故障分析'])
      }else{
        context.dispatch('turnIndexPage');
        context.state.page.changeOldPage.status=true;
        context.state.page.pageTitle.isActive = !context.state.page.pageTitle.isActive;
        $('.title-item-tag').css('background','none');
        event.target.style.background=context.state.page.homepage.style.bg;
      }
    }
  },



  //iframe 调用 转到老页面

  iframeBlock(context,name){
    context.state.page.pageTitle.isActive=false;
    context.state.page.changeOldPage.status=true;
    context.state.page.pageTitle.changeTitle=true;
    context.state.page.pageTitle.titleName= name;
    $('#teo').css('display','block');
    $('.title-item-tag').css('background','none');
    $('.title-item-tag:last').css('background',context.state.page.homepage.style.bg);
  },
  toolBarTagActive (context,name) {
    context.state.page.pageTitle.isActive=false;
    context.state.page.changeOldPage.status=true;
    context.state.page.pageTitle.changeTitle=true;
    if(name){
      context.state.page.pageTitle.titleName= name;
    }
    $('#teo').css('display','block');
    $('.title-item-tag').css('background','none');
    $('.title-item-tag:last').css('background',context.state.page.homepage.style.bg);
  },

  //转新页面 跳转方法

  turnNewPage (context,name) {
    // context.state.page.pageTitle.isActive=false;
    // context.state.page.pageTitle.changeTitle=true;
    // context.state.page.pageTitle.titleName= name[1];
    // $('#teo').css('display','block');
    // $('.title-item-tag').css('background','none');
    // $('.title-item-tag:last').css({'background':context.state.page.homepage.style.bg,'display':'block'});
    if(name[1]=='首页'){
      context.state.page.pageTitle.isActive=true;

      context.state.page.changeOldPage.status=false;
      if(name[1]){
        context.state.page.pageTitle.titleName= name[1];
      }
      context.state.page.changePage.title=name[0];

    }else{
      context.state.page.pageTitle.isActive=false;

      context.state.page.changeOldPage.status=false;
      if(name[1]){
        context.state.page.pageTitle.titleName= name[1];
      }
      context.state.page.changePage.title=name[0];
      $('.title-item-tag').css('background','none');
      $('.title-item-tag:last').css({'background':context.state.page.homepage.style.bg,'display':'block'});
    }
  },

  //转老系统页面 跳转方法

  turnOldPage (context,name) {
    // context.state.page.pageTitle.isActive=false;
    // context.state.page.pageTitle.changeTitle=true;
    // context.state.page.pageTitle.titleName= name[1];
    // $('#teo').css('display','block');
    // $('.title-item-tag').css('background','none');
    // $('.title-item-tag:last').css({'background':context.state.page.homepage.style.bg,'display':'block'});

    context.state.page.changePage.title=name[0];
  },

  turnIndexPage (context,name) {
    router.push({path: '/'})
  },

  //iframe 调用 转到新系统
  turnIndex (context) {
      context.state.page.pageTitle.isActive=true;
      context.state.page.pageTitle.changeTitle=false;
      context.state.page.changeOldPage.status=false;
      context.dispatch('turnNewPage',['vIndexPage','首页'])
      $('#teo').css('display','none');
      $('.title-item-tag').css('background',context.state.page.homepage.style.bg);
  },
  //关闭弹框
  closeAllAlert (context) {
    context.state.page.popoverAlive.openOrClose = false;
    context.state.page.smallAlive.openOrClose = false;
  },
  //小结

  summaryTurn(context,skill){
    context.dispatch('iframeBlock','小结')
    document.getElementById("oldWindow").contentWindow.doSummary(skill);
  },
  restTurn(context){
    context.dispatch('iframeBlock','小休')
    document.getElementById("oldWindow").contentWindow.staffRest();
  },
  helpTurn(context){
    context.dispatch('iframeBlock','求助')
    document.getElementById("oldWindow").contentWindow.showHelpWin();
  },
  //知识库搜索
  knowledgeTurn(context,searchKeyValue){
    if(searchKeyValue=='集团知识库'){
      // context.dispatch('iframeBlock','集团知识库')
      // console.log(searchKeyValue)
      document.getElementById("oldWindow").contentWindow.openGroupKnowledgeWindow();
    }else{
      context.dispatch('iframeBlock','知识库')
      console.log(searchKeyValue)
      document.getElementById("oldWindow").contentWindow.doKmSearch(searchKeyValue);
    }
  },
  //处理明细
  showBusinessCodeCallInInfoWinTurn(context){
    context.dispatch('iframeBlock','处理明细')
    document.getElementById("oldWindow").contentWindow.showBusinessCodeCallInInfoWin();
    document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1031', '');
  },
  //消息阅读
  showMsgReadWinTurn(context){
    context.dispatch('iframeBlock','消息阅读');
    document.getElementById("oldWindow").contentWindow.showMsgReadWin();
  },
  //消息阅读
  openDeviceSearchTurn(context){
    context.dispatch('iframeBlock','更多查询')
    document.getElementById("oldWindow").contentWindow.openDeviceSearch();
    document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1013', '');
  },


  setToolFun({commit}){
    commit(types.GET_SAVE_TOOLBOX_API);
  },
  changeToolFun({commit},num){
    commit(types.SET_TOOL_BAR, num);
  },

  //查询异网用户宽带账号 电话呼入时候查询
  kdAccountByCallNumActions(context){
    context.commit(types.SET_KD_ACCOUNT_BY_CALL_NUM);
    api.widgetApi('/outside_phone/?__dew_token__='+context.getters.token,context.state.editor.getKdAccountByCallNumMM).then(
      res=>{
        context.commit(types.GET_KD_ACCOUNT_BY_CALL_NUM,res);
      }
    );
  },

  // 同合同 接口入参设置 并调用接口
  assetLineContract(context){
    context.state.editor.sidebarEditor.show=true;
    context.commit(types.SET_ASSET_LIST_CONTRACT_IN);
    api.widgetApi('/asset_list/?__dew_token__='+context.getters.token,context.state.editor.assetListMM).then(
      res=>{
        context.commit(types.SET_ASSET_LIST_CONTRACT,res);
        context.state.editor.sidebarEditor.show=false;
      }
    ).catch(
      (error) => {
        // console.log(error)
        context.state.editor.sidebarEditor.show=false
      }
    );
  },
  // 同客户 接口入参设置 并调用接口
  assetLineAccount(context){
    context.state.editor.sidebarEditor.show=true;
    context.commit(types.SET_ASSET_LIST_ACCOUNT_IN);
    api.widgetApi('/asset_list/?__dew_token__='+context.getters.token,context.state.editor.assetListMM).then(
      res=>{
        context.commit(types.SET_ASSET_LIST_ACCOUNT,res);
        context.state.editor.sidebarEditor.show=false;
      }
    ).catch(
      (error) => {
      // console.log(error)
        context.state.editor.sidebarEditor.show=false
      }
    );
  },
  //身份证 接口入参设置 并调用接口
  assetLineId(context){
    context.state.editor.sidebarEditor.show=true;
    context.commit(types.SET_ASSET_LIST_ID_IN);
    api.widgetApi('/asset_list/?__dew_token__='+context.getters.token,context.state.editor.assetListMM).then(
      res=>{
        context.commit(types.SET_ASSET_LIST_ID,res);
        context.state.editor.sidebarEditor.show=false;
      }
    ).catch(
      (error) => {
        // console.log(error)
        context.state.editor.sidebarEditor.show=false
      }
    );
  },
  //身份证 搜索接口入参设置
  assetLineIdSearch(context,input){

    context.commit(types.SET_PERSON_EMPTY_API);
    context.commit(types.SET_ID_USER_NO,input);
    api.widgetApi('/user_info/?__dew_token__='+context.getters.token,context.state.editor.personMM).then(
      res=>{
        if (res.body.data.accountName){
          context.dispatch('popoverAlert','vIdentityMakeSure');
          context.commit(types.SET_ON_ASSET_LIST_SEARCH_ID,res);
        }else {
          context.dispatch('popoverAlert','vIdentityMakeSure')
        }
      }
    );

  },
  assetLineIdSearchThen(context,input){

    context.state.editor.sidebarEditor.show=true;
    context.commit(types.SET_ASSET_LIST_ID_SEARCH_IN,input);
    api.widgetApi('/asset_list/?__dew_token__='+context.getters.token,context.state.editor.assetListMM).then(
      res=>{
        context.commit(types.SET_ASSET_LIST_SEARCH_ID,res);
        context.state.editor.sidebarEditor.show=false;
      }
    ).catch(
      (error) => {
        // console.log(error)
        context.state.editor.sidebarEditor.show=false
      }
    );
  },

  //设置宽带速率
  setBroadbandRate({commit},data){
    commit(types.SET_BROAD_BAND_RATE_API,data);
  },
  //设置宽带速率 page
  setBroadbandRatePage({commit},data){
    commit(types.SET_BROAD_BAND_RATE_PAGE_API,data);
  },
  //子产品属性入参设置
  setSubAssetPropertyApi({commit},item){
    commit(types.SET_SUB_ASSET_PROPERTY_API,item);
  },
  //子产品接口返回设置
  setSubAssetPropertyApi({commit},item){
    commit(types.SET_SUB_ASSET_PROPERTY_API,item);
  },
  getSubAssetPropertyApi({commit},res){
    commit(types.GET_SUB_ASSET_PROPERTY_API,res);
  },
  //子产品属性 主产品入参设置
  setSubAssetPropertyZhuApi({commit},item){
    commit(types.SET_SUB_ASSET_PROPERTY_ZHU_API,item);
  },
  getSubAssetPropertyZhuApi({commit},res){
    commit(types.GET_SUB_ASSET_PROPERTY_ZHU_API,res);
  },
  // ivr
  getTransferParams({commit}){
    commit(types.SET_TRANSFER_PARAMS_API);
  },
  setTransferRegion({commit}){
    commit(types.SET_TRANSFE_RREGION_API);
  },
  regionQueueArea({commit}){
    commit(types.SET_REGION_QUEUE_AREA_API);
  },
  regionQueueSkill({commit},val){
    commit(types.SET_REGION_QUEUE_SKILL_API,val);
  },

  //转接 需要的接口入参设置
  setReadBusyAndQueue({commit},val){
    commit(types.SET_READ_BUSY_AND_QUEUE_API,val);
  },
  //转接 需要的接口
  getReadBusyAndQueueMM({commit},res){
    commit(types.GET_READ_BUSY_QUEUE_API,res);
  },
  //转接 技能
  getRegionQueueMM({commit},res){
    commit(types.GET_REGION_QUEUE_SKILL_API,res);
  },
  //客服登录调用的接口
  ivrEnterDate(context){
    // context.dispatch('saveForm',['/ivr/?__dew_token__='+context.getters.token,'GET_TRANSFER_REGION_API','getTransferRegionMM']);
    // context.dispatch('saveForm',['/ivr/?__dew_token__='+context.getters.token,'GET_LOGIN_INFO_API','getLoginInfoMM']);
    // context.dispatch('saveForm',['/ivr/?__dew_token__='+context.getters.token,'GET_READ_BUSY_AND_QUEUE_API','getReadBusyAndQueueMM']);
  },
  //业务号码切换 调用的 接口
  freshWidget(context){
    context.dispatch('saveForm',['/customer_portrait/?__dew_token__='+context.getters.token,'GET_PERSON_HEAD_API','personHeadMM']);
    api.widgetApi('/account_bundle/?__dew_token__='+context.getters.token,context.state.editor.accountBundleMM).then(
      res=>{
        context.commit('GET_ACCOUNT_BUNDLE_API',res);
        console.log(res)
        if(res.body.data.facilityFlag=='Y'){

        }else{
          context.dispatch('saveForm',['/asset_list/?__dew_token__='+context.getters.token,'GET_ASSET_LIST_API','assetListMM']);
        }
        if(res.body.data.accountType=='政企客户'){
          context.dispatch('changeAuthenticated');
          console.log('政企客户')
        }else{
        }
      }
    );
    // context.dispatch('saveForm',['/account_bundle/?__dew_token__='+context.getters.token,'GET_ACCOUNT_BUNDLE_API','accountBundleMM']);
    //主产品
    context.dispatch('setSubAssetPropertyZhuApi');
    api.widgetApi('/sub_assetProperty/?__dew_token__='+context.getters.token,context.state.editor.getSubAssetPropertyMM).then(
      res=>{
        context.dispatch('getSubAssetPropertyZhuApi',res)
      }
    )
    //实名认证
    context.dispatch('saveForm',['/real_name/?__dew_token__='+context.getters.token,'GET_NEW_REAL_NAME_API','getRealNameStatusMM']);
    //销售品下拉菜单
    context.dispatch('saveForm',['/same_contract/?__dew_token__='+context.getters.token,'GET_SAME_CONTRACT_ASSET','getSameContractAssetMM']);

    context.dispatch('saveForm',['/channel_contact?__dew_token__='+context.getters.token,'GET_CHANNEL_CONTACT_API','channelContactMM']);
    context.dispatch('saveForm',['/customer_asset/?__dew_token__='+context.getters.token,'GET_CUSTOMER_ASSET_API','customerAssetMM']);
    if(context.state.editor.CDMA.indexOf(context.state.editor.callNumberMM.productCode)>=0 || context.state.editor.KD.indexOf(context.state.editor.callNumberMM.productCode)>=0){
      console.log(context.state.editor.callNumberMM.productCode)
      context.dispatch('saveForm',['/precision_marketing','GET_PRECISION_MARKETING_API','precisionMarketingMM']);
    }
    context.dispatch('saveForm',['/index_marketing/?__dew_token__='+context.getters.token,'GET_INDEX_MARKETING_API','indexMarketingMM']);
    context.dispatch('saveForm',['/sale_product/?__dew_token__='+context.getters.token,'GET_SALE_PRODUCT_API','saleProductMM']);
    context.dispatch('saveForm',['/free_resource/?__dew_token__='+context.getters.token,'GET_FREE_RESOURCE_API','freeResourceMM']);
    context.dispatch('saveForm',['/sub_asset/?__dew_token__='+context.getters.token,'GET_SUB_ASSET_API','subAssetMM']);
    // context.dispatch('saveForm',['/last_call/?__dew_token__='+context.getters.token,'GET_LAST_CALL_API','lastCallMM']);
  //  一正五卡
    context.dispatch('phoneRel')

  },


  //呼入号码进来才需要调用的接口
  onlyCallComeing(context){
    context.dispatch('saveForm',['/ivr/?__dew_token__='+context.getters.token,'GET_USER_OPERATE_TRACE_QUERY_API','getUserOperateTraceQueryMM']);

    context.commit(types.SET_DAY_WIDGET_EMPTY);
    api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.callListDayMM).then(
      res=>{
        if(res.code!='200'){
          Message({
            showClose: true,
            message: '呼入详细天',
            type: 'warning'
          });
        }
        context.commit('GET_CALL_LIST_DAY_API',res);
      }
    );
    context.commit(types.SET_MOUTH_WIDGET_EMPTY);
    api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.callListMouthMM).then(
      res=>{
        if(res.code!='200'){
          Message({
            showClose: true,
            message: '呼入详细月份',
            type: 'warning'
          });
        }
        context.commit('GET_CALL_LIST_MOUTH_API',res);
        for(let x in res.body.data){
          if(res.body.data[x]){
            let time = new Date().getDate();
            if(res.body.data[x].actualStartDate.split(' ')[0].split('-')[2]!=time){
              context.commit('GET_LAST_CALL_DETAIL_API',res.body.data[x]);
              console.log(res.body.data[x].actualStartDate.split(' ')[0].split('-')[2])
              return ;
            }
          }
        }
        context.commit('SET_CALL_DETAIL_API',res.body.data[0]);
        api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.CallDetailMM).then(
          res=>{
            context.state.page.PackageLine.telephoneSummary = res.body.data;
            if(res.code!='200'){
              Message({
                showClose: true,
                message: '呼入详情请求失败',
                type: 'warning'
              });
            }
          }
        )
        //根据录音编号查询报表话务分类（业务号码，大中小类）
        // if(res.body.data[res.body.data.length-1]['eventTrialId']==COMMOBJ.ibRecordId || res.body.data[res.body.data.length-2]){
        //   context.commit('GET_LAST_CALL_DETAIL_API',res.body.data[res.body.data.length-2]);
        //   context.commit('SET_CALL_DETAIL_API',res.body.data[res.body.data.length-2])
        //   api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.CallDetailMM).then(
        //     res=>{
        //       context.state.page.PackageLine.telephoneSummary = res.body.data;
        //     }
        //   )
        // }else if(res.body.data[res.body.data.length-1]){
        //   context.commit('GET_LAST_CALL_DETAIL_API',res.body.data[res.body.data.length-1]);
        //   context.commit('SET_CALL_DETAIL_API',res.body.data[res.body.data.length-1]);
        //   api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.CallDetailMM).then(
        //     res=>{
        //       context.state.page.PackageLine.telephoneSummary = res.body.data;
        //     }
        //   )
        // }else{
        //   context.commit('GET_LAST_CALL_DETAIL_API','');
        // }

      }
    );
  },

  //
  //业务号码 呼入记录查询 不带 上一通会话足迹
  businessNumberShow(context){
    context.commit(types.SET_DAY_WIDGET_EMPTY);
    api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.callListDayMM).then(
      res=>{
        if(res.code!='200'){
          Message({
            showClose: true,
            message: '呼入详细天',
            type: 'warning'
          });
        }
        context.commit('GET_CALL_LIST_DAY_API',res);
      }
    );
    context.commit(types.SET_MOUTH_WIDGET_EMPTY);
    api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.callListMouthMM).then(
      res=>{
        if(res.code!='200'){
          Message({
            showClose: true,
            message: '呼入详细月份',
            type: 'warning'
          });
        }

        context.commit('GET_CALL_LIST_MOUTH_API',res);
        // if(res.body.data[res.body.data.length-1]['eventTrialId']==COMMOBJ.ibRecordId || res.body.data[res.body.data.length-2]){
        //   context.commit('GET_LAST_CALL_DETAIL_API',res.body.data[res.body.data.length-2]);
        //   context.commit('SET_CALL_DETAIL_API',res.body.data[res.body.data.length-2])
        //   api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.CallDetailMM).then(
        //     res=>{
        //       context.state.page.PackageLine.telephoneSummary = res.body.data;
        //     }
        //   )
        // }else if(res.body.data[res.body.data.length-1]){
        //   context.commit('GET_LAST_CALL_DETAIL_API',res.body.data[res.body.data.length-1]);
        //   context.commit('SET_CALL_DETAIL_API',res.body.data[res.body.data.length-1]);
        //   api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.CallDetailMM).then(
        //     res=>{
        //       context.state.page.PackageLine.telephoneSummary = res.body.data;
        //     }
        //   )
        // }else{
        //   context.commit('GET_LAST_CALL_DETAIL_API','');
        // }

      }
    );
  },
  //业务号码 呼入记录查询 带 上一通会话足迹
  callNumberShow(context){
    context.commit(types.SET_DAY_WIDGET_EMPTY);
    api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.callListDayMM).then(
      res=>{
        if(res.code!='200'){
          Message({
            showClose: true,
            message: '呼入详细天',
            type: 'warning'
          });
        }
        context.commit('GET_CALL_LIST_DAY_API',res);
      }
    );
    context.commit(types.SET_MOUTH_WIDGET_EMPTY);
    api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.callListMouthMM).then(
      res=>{
        if(res.code!='200'){
          Message({
            showClose: true,
            message: '呼入详细月份',
            type: 'warning'
          });
        }
        context.commit('GET_CALL_LIST_MOUTH_API',res);
        console.log(res.body.data[0]);
        console.log('GET_LAST_CALL_DETAIL_API');
        context.commit('SET_CALL_DETAIL_API',res.body.data[0]);
        api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.CallDetailMM).then(
          res=>{
            context.state.page.PackageLine.telephoneSummary = res.body.data;
            if(res.code!='200'){
              Message({
                showClose: true,
                message: '呼入详情请求失败',
                type: 'warning'
              });
            }
          }
        )
        context.commit('SET_REPORT_BY_RECORD',res.body.data[0]);

        api.widgetApi('/last_call/?__dew_token__='+context.getters.token,context.state.editor.getReportByRecordMM).then(
          res=>{
            context.commit('GET_REPORT_BY_RECORD',res);
          }
        )
      }
    );
  },
  //子产品属性查询Widget接口
  familyNetworkListActions(context){
    context.commit(types.SET_FAMILY_NETWORK_LIST);
    api.widgetApi('/sub_assetProperty/?__dew_token__='+context.getters.token,context.state.editor.getFamilyNetworkListMM).then(
      res=>{
        context.commit('GET_FAMILY_NETWORK_LIST',res);
      }
    );
  },

  //业务号码切换 调用的 接口入参数 context.state.editor.businessCallNumber
  callNumThenData(context){
    console.log(context.state.editor.callNumberMM);

    //资产
    // context.state.editor.assetListMM.args.serviceId = context.state.editor.businessCallNumber;
    context.state.editor.assetListMM.args.callNo = context.state.editor.businessCallNumber;
    if(context.state.editor.callNumberMM['accountNumber']!=null){
      context.state.editor.assetListMM.args.accountNo = context.state.editor.callNumberMM['accountNumber'];
    }else{
      context.state.editor.assetListMM.args.accountNo ='';
    }
    if(context.state.editor.callNumberMM['billAccountNum']!=null){
      context.state.editor.assetListMM.args.contractNo = context.state.editor.callNumberMM['billAccountNum'];
    }else{
      context.state.editor.assetListMM.args.contractNo ='';
    }
    context.state.editor.assetListMM.args.idNo ='';

    //工具箱获得
    // context.state.editor.getToolBoxMM.args.loginId = context.state.editor.businessCallNumber;

    //客户画像
    context.state.editor.personHeadMM.args.businessNo = context.state.editor.businessCallNumber;
    if(context.state.editor.callNumberMM['businessType']!=null){
      context.state.editor.personHeadMM.args.businessType = context.state.editor.callNumberMM.businessType;
    }else{
      context.state.editor.personHeadMM.args.businessType ='';
    }

    //accountBundle
    if(context.state.editor.callNumberMM['accountNumber']!=null){
      context.state.editor.accountBundleMM.args.accountNum = context.state.editor.callNumberMM.accountNumber;
    }else{
      context.state.editor.accountBundleMM.args.accountNum ='';
    }
    if(context.state.editor.callNumberMM['areaCode']!=null){
      context.state.editor.accountBundleMM.args.areaCode = context.state.editor.callNumberMM.areaCode;
    }else{
      context.state.editor.accountBundleMM.args.areaCode ='';
    }
    if(context.state.editor.callNumberMM['productCode']!=null){
      context.state.editor.accountBundleMM.args.productNum = context.state.editor.callNumberMM.productCode;
    }else{
      context.state.editor.accountBundleMM.args.productNum ='';
    }
    if(context.state.editor.callNumberMM['integrationNum']!=null){
      context.state.editor.accountBundleMM.args.integratedNo = context.state.editor.callNumberMM.integrationNum;
    }else{
      context.state.editor.accountBundleMM.args.integratedNo ='';
    }
    if(context.state.editor.callNumberMM['accountDeviceType']!=null){
      context.state.editor.accountBundleMM.args.codeType = context.state.editor.callNumberMM.accountDeviceType;
    }else{
      context.state.editor.accountBundleMM.args.codeType ='';
    }
    if(context.state.editor.callNumberMM['commonServiceId']!=null){
      context.state.editor.accountBundleMM.args.codeValue = context.state.editor.callNumberMM.commonServiceId;
    }else{
      context.state.editor.accountBundleMM.args.codeValue ='';
    }

    //余额 customer_asset

    if(context.state.editor.callNumberMM['areaCode']!=null){
      context.state.editor.customerAssetMM.args.areaCode = context.state.editor.callNumberMM.areaCode;
    }else{
      context.state.editor.customerAssetMM.args.areaCode ='';
    }
    if(context.state.editor.callNumberMM['accountDeviceType']!=null){
      context.state.editor.customerAssetMM.args.codeType = context.state.editor.callNumberMM.accountDeviceType;
    }else{
      context.state.editor.customerAssetMM.args.codeType ='';
    }
    context.state.editor.customerAssetMM.args.codeNumber = context.state.editor.businessCallNumber;

    //indexMarking
    context.state.editor.indexMarketingMM.args.businessNo = context.state.editor.businessCallNumber;
    if(context.state.editor.callNumberMM['areaCode']!=null){
      context.state.editor.indexMarketingMM.args.areaCode = context.state.editor.callNumberMM.areaCode;
    }else{
      context.state.editor.indexMarketingMM.args.areaCode ='';
    }
    if(context.state.editor.callNumberMM['accountIdNumber']){
      context.state.editor.indexMarketingMM.args.idNo = context.state.editor.callNumberMM.accountIdNumber;
    }else{
      context.state.editor.indexMarketingMM.args.idNo ='';
    }
    if(context.state.editor.callNumberMM['billAccountNum']!=null){
      context.state.editor.indexMarketingMM.args.billAccountNo = context.state.editor.callNumberMM.billAccountNum;
    }else{
      context.state.editor.indexMarketingMM.args.billAccountNo ='';
    }
    // 以后接口会改暂时使用
    context.state.editor.indexMarketingMM.args.crmAssetStatus='';
    if(context.state.editor.callNumberMM['status']){
      if(context.state.editor.callNumberMM.status=='已暂停'){
        if(context.state.editor.callNumberMM.suspendFlag=='单向' || context.state.editor.callNumberMM.suspendFlag=='双向'){
          context.state.editor.indexMarketingMM.args.crmAssetStatus ='欠费停机';
        }else{

          context.state.editor.indexMarketingMM.args.crmAssetStatus = context.state.editor.callNumberMM.status;
        }
      }else{
        context.state.editor.indexMarketingMM.args.crmAssetStatus ='';
      }
    }else{
      context.state.editor.indexMarketingMM.args.crmAssetStatus ='';
    }
    // context.state.editor.indexMarketingMM.args.crmAssetStatus ='欠费停机';
    context.state.editor.indexMarketingMM.args.callNum = context.state.editor.businessCallNumber;
    context.state.editor.indexMarketingMM.args.codeNumber = context.state.editor.businessCallNumber;
    if(context.state.editor.callNumberMM['accountDeviceType']!=null){
      context.state.editor.indexMarketingMM.args.codeType = context.state.editor.callNumberMM.accountDeviceType;
    }else{
      context.state.editor.indexMarketingMM.args.codeType ='';
    }
    //实名认证 新增
    if(context.state.editor.callNumberMM['integrationId']!=null){
      context.state.editor.getRealNameStatusMM.args.integratedNo = context.state.editor.callNumberMM.integrationId;
    }else{
      context.state.editor.getRealNameStatusMM.args.integratedNo ='';
    }
    if(context.state.editor.callNumberMM['c3Name']!=null){
      context.state.editor.getRealNameStatusMM.args.c3Name = context.state.editor.callNumberMM.c3Name;
    }else{
      context.state.editor.getRealNameStatusMM.args.c3Name ='';
    }
    //销售品下拉 新增
    if(context.state.editor.callNumberMM['integrationId']!=null){
      context.state.editor.getSameContractAssetMM.args.integrationNum = context.state.editor.callNumberMM.integrationId;
    }else{
      context.state.editor.getSameContractAssetMM.args.integrationNum ='';
    }
    if(context.state.editor.callNumberMM['billAccountNum']!=null){
      context.state.editor.getSameContractAssetMM.args.billAccountNum = context.state.editor.callNumberMM.billAccountNum;
    }else{
      context.state.editor.getSameContractAssetMM.args.billAccountNum ='';
    }
    context.state.editor.getSameContractAssetMM.args.callNo = context.state.editor.businessCallNumber;

    //营销
    context.state.editor.precisionMarketingMM.args.businessNo = context.state.editor.businessCallNumber;
    if(context.state.editor.callNumberMM['businessType']!=null){
      context.state.editor.precisionMarketingMM.args.businessType = context.state.editor.callNumberMM.businessType;
    }else{
      context.state.editor.precisionMarketingMM.args.businessType = '';
    }
    // context.state.editor.precisionMarketingMM.args.traceLog = ; //ivr 随入数据
    if(context.state.editor.callNumberMM['areaCode']!=null){
      context.state.editor.precisionMarketingMM.args.regionId = context.state.editor.callNumberMM.areaCode;
    }else{
      context.state.editor.precisionMarketingMM.args.regionId = '';
    }
    if(context.state.editor.callNumberMM['c4Name']!=null){
      context.state.editor.precisionMarketingMM.args.c4 = context.state.editor.callNumberMM.c4Name;
    }else{
      context.state.editor.precisionMarketingMM.args.c4 = '';
    }
    if(context.state.editor.callNumberMM['accountIdNumber']!=null){
      context.state.editor.precisionMarketingMM.args.idNumber = context.state.editor.callNumberMM.accountIdNumber;
    }else{
      context.state.editor.precisionMarketingMM.args.idNumber = '';
    }

    //销售品
    context.state.editor.saleProductMM.args.integrationId = '';
    context.state.editor.saleProductMM.args.regionId = '';
    if(context.state.editor.callNumberMM['integrationId']){
      context.state.editor.saleProductMM.args.integrationId = context.state.editor.callNumberMM.integrationId;
    }else{
      context.state.editor.saleProductMM.args.integrationId = '';
    }
    if(context.state.editor.callNumberMM['areaCode']){
      context.state.editor.saleProductMM.args.regionId = context.state.editor.callNumberMM.areaCode;
    }else{
      context.state.editor.saleProductMM.args.regionId = '';
    }

    //homePagePackageCase 本月套餐使用情况
    if(context.state.editor.callNumberMM['areaCode']!=null){
      context.state.editor.freeResourceMM.args.areaCode = context.state.editor.callNumberMM.areaCode;
    }else{
      context.state.editor.freeResourceMM.args.areaCode = '';
    }
    if(context.state.editor.callNumberMM['accountDeviceType']!=null){
      context.state.editor.freeResourceMM.args.codeType = context.state.editor.callNumberMM.accountDeviceType;
    }else{
      context.state.editor.freeResourceMM.args.codeType = '';
    }
    context.state.editor.freeResourceMM.args.codeNumber = context.state.editor.businessCallNumber;

    //homePagePackageCase 子产品
    if(context.state.editor.callNumberMM['assetId']!=null){
      context.state.editor.subAssetMM.args.rootAssetId = context.state.editor.callNumberMM.assetId;
    }else{
      context.state.editor.subAssetMM.args.rootAssetId= '';
    }
    if(context.state.editor.callNumberMM['c3Name']!=null){
      context.state.editor.subAssetMM.args.c3Name = context.state.editor.callNumberMM.c3Name;
    }else{
      context.state.editor.subAssetMM.args.c3Name = '';
    }

    //packageLine IVR关联信息  来电预判
    context.state.editor.getUserOperateTraceQueryMM.args.callNo = context.state.editor.callNumber;
    context.state.editor.getUserOperateTraceQueryMM.args.businessNo = context.state.editor.businessCallNumber;
    if(context.state.editor.callNumberMM['productCode']!=null){
      context.state.editor.getUserOperateTraceQueryMM.args.productCode = context.state.editor.callNumberMM.productCode;
    }else{
      context.state.editor.getUserOperateTraceQueryMM.args.productCode = '';
    }
    context.state.editor.getUserOperateTraceQueryMM.args.traceLog = context.state.editor.followData.ivrNodeList;

    //packageLine 接触轨迹 channel_contact
    context.state.editor.channelContactMM.args.businessNo = context.state.editor.businessCallNumber;
    // context.state.editor.channelContactMM.args.startTime = context.state.editor.businessCallNumber; //按需插入
    // context.state.editor.channelContactMM.args.endTime = context.state.editor.businessCallNumber; //按需插入

    //packageLine 上一通电话足迹
    context.state.editor.lastCallMM.args.businessCode = context.state.editor.businessCallNumber;

    //当月当日呼入次数
    context.commit(types.SET_DAY_WIDGET_EMPTY);
    context.commit(types.SET_MOUTH_WIDGET_EMPTY);

  },

  // 老系统调用方法 all start

  // 销售品重查
  saleChangeMM(context,integrationId){
    if(integrationId){
      context.state.editor.saleProductMM.args.integrationId = integrationId;
    }else{
      context.state.editor.saleProductMM.args.integrationId = '';
    }
    if(context.state.editor.callNumberMM.areaCode){
      context.state.editor.saleProductMM.args.regionId = context.state.editor.callNumberMM.areaCode;
    }else{
      context.state.editor.saleProductMM.args.regionId = '';
    }
  },
  // 记事本保存
  notepadSaveNote(context,item){
    context.commit(types.SET_SAVE_NOTE_API, item);
    api.widgetApi('/notepad/?__dew_token__='+context.getters.token,context.state.editor.saveNoteMM).then(
      res=>{
        context.dispatch('notepadQueryNoteList')
      }
    );
  },
  // 记事本查询
  notepadQueryNoteList(context){
    context.commit(types.SET_QUERY_NOTE_LIST_API);
    api.widgetApi('/notepad/?__dew_token__='+context.getters.token,context.state.editor.queryNoteListMM).then(
      res=>{
        context.commit(types.GET_QUERY_NOTE_LIST_API,res);
      }
    )
  },
  // 记事本查询
  notepadQueryDeleteNotes(context,item){
    context.commit(types.SET_DELETE_NOTES_API,item);
    api.widgetApi('/notepad/?__dew_token__='+context.getters.token,context.state.editor.deleteNotesMM).then(
      res=>{
        context.dispatch('notepadQueryNoteList')
      }
    )
  },
  // 记事本查询
  notepadCompleteNotes(context,item){
    context.commit(types.SET_COMPLETENOTES_API,item);
    api.widgetApi('/notepad/?__dew_token__='+context.getters.token,context.state.editor.completeNotesMM).then(
      res=>{
        context.dispatch('notepadQueryNoteList')
      }
    )
  },
  // 记事 编辑 先删除 后新增
  notepadingertEditor(context,item){
    context.commit(types.SET_DELETE_NOTES_API,item[1]);
    api.widgetApi('/notepad/?__dew_token__='+context.getters.token,context.state.editor.deleteNotesMM).then(
      res=>{
        context.dispatch('notepadSaveNote',item[0])
      }
    )
  },
  //倒计时
  countZeroChangeShow(context){
    context.state.page.header.countZero.status=true;
  },
  countZeroChangeHidden(context){
    context.state.page.header.countZero.status=false;
  },
  countZeroChangeHead(context,name){
    context.state.page.header.countZero.countZeroHead=name;
  },
  countZeroChangeTime(context,time){
    context.state.page.header.countZero.countZeroTime=time;
  },
  countZeroChangeHtml(context,htmlText){
    context.state.page.header.countZero.countZeroHtmlText=htmlText;
  },

  //recode saimen
  insertUserSatisfaction(context,flow){
    context.commit(types.SET_INSERT_USER_SATISFACTION_API_SM, flow);
    context.dispatch('saveForm',['/record/?__dew_token__='+context.getters.token,'GET_INSERT_USER_SATISFACTION_API','insertUserSatisfactionMM'])
  },
  addOBRecordGuid(context,flow){
    context.commit(types.SET_ADD_RECORD_API_SM, flow);
    api.widgetApi('/record/?__dew_token__='+context.getters.token,context.state.editor.addRecordMM).then(
      res=>{
        context.commit(types.GET_ADD_RECORD_API, res);
        setObRecordId(context.state.editor.recordAll.addRecord.recordId)
      }
    );
  },
  updateRecordGuid(context,flow){
    context.commit(types.SET_UPDATE_RECORD_API_SM, flow);
    context.dispatch('saveForm',['/record/?__dew_token__='+context.getters.token,'GET_UPDATE_RECORD_API','updateRecordMM'])
  },
  //ivr随入数据
  freshPhoneByMichelle(context,ivrFollow){
    context.dispatch('clearAll');
    context.dispatch('clearCall');
    context.dispatch('turnIndex');
    context.dispatch('closeAllAlert');
    context.commit('SET_PERSON_EMPTY_API');
    //知识库清除
    context.state.page.pageTitle.konwledgeInput='';
    context.commit(types.GET_IVR_FOLLOW_API, ivrFollow);
    //清空缓存的 认证号码
    context.state.editor.authenticatedAccountNumber = [];
    context.state.editor.desensitization = false;
    //加入新的 号码
    if(ivrFollow.phoneNum!=null){
      context.state.editor.callNumber =ivrFollow.phoneNum;
    }else{

    }
    console.log(context.state.editor.authenticatedAccountNumber);
    context.dispatch('callSaveForm');
    context.dispatch('freshOldSystem');

    //清空身份认证信息
    context.state.page.allCheckResults.businessCallNumbers = [];
    context.state.page.allCheckResults.checkResults = [];
  },
  //资产双击
  personNumber(context,event){
    context.dispatch('turnIndex');
    context.dispatch('closeAllAlert');
    context.dispatch('integrationIdSearch',event);
    context.dispatch('setSaveForm');
  },
  //关联账号单击
  contentSinger(context,event){
    context.dispatch('turnIndex');
    context.dispatch('closeAllAlert');
    context.dispatch('broadbandAccountNo',event);
    context.dispatch('setSaveForm');
  },

  //老系统双击资产跳转
  personNumberOld(context,event){
    if(event['noShieldInfoFlag']=='1'){
      context.state.editor.idCardFlag=false;
    }
    context.dispatch('turnIndex');
    context.dispatch('closeAllAlert');
    context.dispatch('integrationIdSearchOld',event);
    context.dispatch('setSaveForm');
  },
  //ivr随入数据 之后 刷老系统
  freshOldSystem(context){
    try{
      document.domain = "zjtelecom.cn";
    }
    catch(err)
    {
      console.log('domain设置失败')
    }
      //语音插入
    context.commit(types.SET_ADD_RECORD_API);
    api.widgetApi('/record/?__dew_token__='+context.getters.token,context.state.editor.addRecordMM).then(
      res=>{
        setRecordId(res.body.data.recordId);
        context.state.editor.recordId=res.body.data.recordId;
        context.dispatch('onlyCallComeing',res.body.data.recordId);
        let data = context.state.editor.followData;
        if(data.ZQKey=='1' || data.ZQKey=='2'){
          context.dispatch('iframeBlock','政企客户');
        }
        document.getElementById("oldWindow").contentWindow.setRecordGuid(res.body.data.recordId);
        document.getElementById("oldWindow").contentWindow.freshphonebymichelle(
          data.phoneNum,
          data.pCustomerId,
          data.ConnectionID,
          data.answerFlag,
          data.ivrModuleId,
          data.billStatus,
          data.AssetIntID,
          data.ZQKey,
          data.XZKDKey,
          data.ivrNodeList,
          data.ivrFlowList,
          data.strIdCard);
        // document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1055', '');
      }
    );
  },

  //api
  searchCallDetail(context,item){
    let loadingInstance = Loading.service({ fullscreen: true });
    context.commit('SET_CALL_DETAIL_API',item);
    api.widgetApi('/call_list/?__dew_token__='+context.getters.token,context.state.editor.CallDetailMM).then(
      res=>{
        console.log(res)
        context.commit('GET_CALL_DETAIL_API',res);
        loadingInstance.close();
      }
    ).catch((error) => {
      loadingInstance.close();
      console.log(error);
    })
  },
  //api 一正五号
  phoneRel(context){
    context.commit('SET_PHONE_REL_API');
    api.widgetApi('/phone_rel/?__dew_token__='+context.getters.token,context.state.editor.getCertPhoneRelMM).then(
      res=>{
        if(context.getters.personMessage.productCode && context.getters.personMessage.productCode!='INT-MAN-0010' && res.body.data.relSize>5){
          context.dispatch('smallPopoverAlert','vMoreCard');
        }
        context.commit('GET_PHONE_REL_API',res);
      }
    )
  },
  //ivr随入数据 之后 刷老系统
  turnOldSystem(context){
    document.domain = "zjtelecom.cn";
    document.getElementById("oldWindow").contentWindow.setRecordGuid("11");
    document.getElementById("oldWindow").contentWindow.freshphonebymichelle("11");
  },

  // 老系统调用方法 all end



  //登录验证 134.96.181.140:8010
  loginAction(context){
    // axios.post('http://134.98.105.167/public/adaptation/auth/login', {
    // axios.post('http://134.98.105.170/public/adaptation/auth/login', {
    axios.post('http://134.96.161.143:9301/public/adaptation/auth/login', { // // F5 地址
    // axios.post('http://134.96.181.140:8010/public/adaptation/auth/login', {
      "loginId":context.state.page.loginData.loginId,
      "password":context.state.page.loginData.password
    })
    .then(function (response) {
      console.log('login 进入');
      console.log(response.data.body)
      if(response.data.body==null){
        alert(response.data.message)
      }
      context.state.editor.enterCase = response.data.body;
      // context.state.editor.token = response.data.body.token;
      // context.dispatch('ivrEnterDate');
      setLoginInfo(context.state.editor.enterCase);
      // console.log(context.state.editor.token);
      // router.push({ path: '/' })
      // // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  getBalanceDetail(context){
    context.state.editor.balanceDetailMM.args.codeNumber = context.state.editor.callNumberMM.integrationNum;
    context.state.editor.balanceDetailMM.args.codeType = context.state.editor.callNumberMM.accountDeviceType;
    context.state.editor.balanceDetailMM.args.regionId = context.state.editor.callNumberMM.areaCode;
    api.widgetApi('/balance_detail/?__dew_token__='+context.getters.token,context.state.editor.balanceDetailMM).then(
      res=>{
        context.commit('GET_BALANCE_DETAIL__API',res)
      }
    );
  },

  loginDataSet(context,res){
    console.log(res)
    // context.dispatch('ivrEnterDate');
    // window.sessionStorage.setItem('token',response.body.token);
    // window.sessionStorage.setItem('id',context.state.page.loginData.loginId);
    // console.log(context);
    // router.push({ path: '/' })
    // commit('SET_LOGIN_ALL_API',res);
    // this.saveForm(['/staff_stats/?__dew_token__='+res.body.token,'GET_STAFF_UNREAD_SUM_API','staffStatsMM']);
    // this.saveForm(['/staff_stats/?__dew_token__='+res.body.token,'GET_STAFF_STAT_INFO','staffStatInfoMM']);
    console.log(context)
    context.state.editor.enterCase = res.body;
    context.state.editor.token = res.body.token;
    context.state.page.loginData.loginId=res.body.accountCode;

    context.state.editor.staffStatsMM.args.staffId=res.body.accountCode;
    context.state.editor.staffStatInfoMM.args.staffId=res.body.accountCode;
    router.push({ path: '/' });
    context.dispatch('saveForm',['/staff_stats/?__dew_token__='+context.getters.token,'GET_STAFF_UNREAD_SUM_API','staffStatsMM']);
    context.dispatch('saveForm',['/staff_stats/?__dew_token__='+context.getters.token,'GET_STAFF_STAT_INFO','staffStatInfoMM']);
    //工具箱获得
    context.state.editor.getToolBoxMM.args.loginId = context.state.editor.enterCase.accountCode;
    context.dispatch('saveForm',['/tool_box/?__dew_token__='+context.getters.token,'GET_GRT_TOOLBOX_API','getToolBoxMM']);

    setLoginInfo(res.body);
  },

  //
  refreshStatistics(context){
    context.state.editor.staffStatInfoMM.args.staffId=context.state.editor.enterCase.accountCode;
    context.dispatch('saveForm',['/staff_stats/?__dew_token__='+context.getters.token,'GET_STAFF_STAT_INFO','staffStatInfoMM']);
  },
  //冲刷客服未阅读消息条数
  refreshUnReadMsgCount(context){
    context.state.editor.staffStatInfoMM.args.staffId=context.state.page.loginData.loginId;
    context.dispatch('saveForm',['/staff_stats/?__dew_token__='+context.getters.token,'GET_STAFF_UNREAD_SUM_API','staffStatsMM']);
  },
  //我要反馈提交
  submitFeedback(context,data){
    let loadingInstance = Loading.service({ fullscreen: true });
    if(data[1]!=''){
      axios.defaults.timeout = 10000;
      axios({
        // url:'http://134.96.161.143:9301/widget/api/ftp/upload/files/?__dew_token__='+context.getters.token,
        url:'http://134.96.161.143:9301/test/api/ftp/upload/files/?__dew_token__='+context.getters.token,
        method:'post',
        data: data[1],
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(
        (res)=>{
          console.log(res)
          if(res.status==200){
            if(res.data.code=='200'){
              context.commit('SET_FEEDBACK_API',[data[0],JSON.stringify(res.data.body.data)]);
              api.widgetApi('/feedback/?__dew_token__='+context.getters.token,context.state.editor.saveFeedbackMM).then(
                res=>{
                  loadingInstance.close();
                  context.commit('GET_FEEDBACK_API',res);
                }
              );
              Message({
                message:'已反馈',
                type:'success'
              });
            }else {
              loadingInstance.close();
              Message({
                message:'上传失败',
                type:'warning'
              });
            }
          }else{
            loadingInstance.close();
          }
        }
      ).catch(
        (error) => {
          Message({
            message:'上传失败,文件过大',
            type:'warning'
          });
          loadingInstance.close();
        }
      );
    }else{
      context.commit('SET_FEEDBACK_API','');
      api.widgetApi('/feedback/?__dew_token__='+context.getters.token,context.state.editor.saveFeedbackMM).then(
        res=>{
          Message({
            message:'已反馈',
            type:'success'
          });
          loadingInstance.close();
          context.commit('GET_FEEDBACK_API',res);
        }
      ).catch(
        (error) => {
          Message({
            message:'上传失败',
            type:'warning'
          });
          loadingInstance.close();
        }
      );
    }

  },

  //  身份认证 数据更新
  updateCheckIdentityResult(context,checkResult){
    const NUMBER = checkResult.businessCallNumber
    let businessCallNumbers = context.state.page.allCheckResults.businessCallNumbers
    let checkResults = context.state.page.allCheckResults.checkResults
    let index = businessCallNumbers.indexOf(NUMBER)
    if(index !== -1){
      let cr = checkResults[index]
      if(checkResult.code ==='1'){
        cr.pwdTransfer = checkResult.result
      }else if(checkResult.code ==='2' || checkResult.code ==='3'){
        cr.idCheck = checkResult.result
      }else if(checkResult.code ==='4'){
        cr.validateCode = checkResult.result
      }else if(checkResult.code ==='5'){
        cr.auxiliaryCheck = checkResult.result
      }else if(checkResult.code ==='6'){
        cr.forcedCheck = checkResult.result
      }
      checkResults[index] = cr
    }else{
      let cr = {
        pwdTransfer: false,//密码转接结果
        idCheck : false,//身份证验证 或者人工验证
        validateCode: false,//验证码
        auxiliaryCheck : false,//辅助信息验证
        forcedCheck : false //强制认证
      }
      if(checkResult.code ==='1'){
        cr.pwdTransfer = checkResult.result
      }else if(checkResult.code ==='2' || checkResult.code ==='3'){
        cr.idCheck = checkResult.result
      }else if(checkResult.code ==='4'){
        cr.validateCode = checkResult.result
      }else if(checkResult.code ==='5'){
        cr.auxiliaryCheck = checkResult.result
      }else if(checkResult.code ==='6'){
        cr.forcedCheck = checkResult.result
      }
      businessCallNumbers.push(NUMBER)
      checkResults.push(cr)
    }
    context.state.page.allCheckResults.businessCallNumbers = businessCallNumbers
    context.state.page.allCheckResults.checkResults = checkResults
  },


//  晴空所有的widget 数据

//    <=====================   余额分析接口   ========================>

//  是否欠费查询
  balanceInfoActions(context){
    context.commit(types.SET_BALANCE_INFO_API);
    context.dispatch('saveForm',['/balance_info/?__dew_token__='+context.getters.token,'GET_BALANCE_INFO_API','getBalanceInfoMM']);
  },
//  信用额度透支查询
  balanceCreditActions(context){
    context.commit(types.SET_BALANCE_CREDIT_API);
    context.dispatch('saveForm',['/balance_credit/?__dew_token__='+context.getters.token,'GET_BALANCE_CREDIT_API','getBalanceCreditMM']);
  },
//  查询余额明细
  balanceDeatilActions(context){
    context.commit(types.SET_BALANCE_DEATIL_API);
    context.dispatch('saveForm',['/balance_detail/?__dew_token__='+context.getters.token,'GET_BALANCE_DEATIL_API','getBalanceDeatilMM']);
  },
//套餐用户翼支付划拨记录查询
  epayChargeBillRecordActions(context){
    context.commit(types.SET_EPAY_CHARGE_BILL_RECORD_API);
    context.dispatch('saveForm',['/balance_epay/?__dew_token__='+context.getters.token,'GET_EPAY_CHARGE_BILL_RECORD_API','epayChargeBillRecordMM']);
  },
//套餐用户翼支付划拨进度查询
  epayChargeBillProgressActions(context){
    context.commit(types.SET_EPAY_CHARGE_BILL_PROGRESS_API);
    context.dispatch('saveForm',['/balance_epay/?__dew_token__='+context.getters.token,'GET_EPAY_CHARGE_BILL_PROGRESS_API','getEpayChargeBillProgressMM']);
  },

//欠费明细查询服务
  oweChargeDetailActions(context){
    context.commit(types.SET_OWE_CHARGE_DETAIL_API);
    context.dispatch('saveForm',['/overdue_detail/?__dew_token__='+context.getters.token,'GET_OWE_CHARGE_DETAIL_API','getOweChargeDetailMM']);
  },

//  待生效金额
  queryBookSchemeInfoActions(context){
    context.commit(types.SET_QUERY_BOOK_SCHEME_INFO_API);
    context.dispatch('saveForm',['/balance_info/?__dew_token__='+context.getters.token,'GET_QUERY_BOOK_SCHEME_INFO_API','queryBookSchemeInfoMM']);
  },

//  短信警告信息查询
  queryAlarmInfoActions(context,data){
    context.commit(types.SET_QUERY_ALARM_INFO_API,data);
    context.dispatch('saveForm',['/alarm_sms/?__dew_token__='+context.getters.token,'GET_QUERY_ALARM_INFO_API','queryAlarmInfoMM']);
  },

//  账务诊断
  balanceIagnosisActions(context){
    context.commit(types.SET_BALANCE_IAGNOSIS_API);
    context.dispatch('saveForm',['/balance_iagnosis/?__dew_token__='+context.getters.token,'GET_BALANCE_IAGNOSIS_API','getBalanceIagnosisMM']);
  },

//  使用客户合同号查询充值缴费记录
  queryRechargeListActions(context,data){
    context.commit(types.SET_QUERY_RECHARGE_LIST_API,data);
    context.dispatch('saveForm',['/finance_table/?__dew_token__='+context.getters.token,'GET_QUERY_RECHARGE_LIST_API','queryRechargeListMM']);
  },

//使用客户合同号查询停复机记录记录
  queryCallLimitListActions(context,data){
    context.commit(types.SET_QUERY_CALL_LIMIT_LIST_API,data);
    context.dispatch('saveForm',['/finance_table/?__dew_token__='+context.getters.token,'GET_QUERY_CALL_LIMIT_LIST_API','queryCallLimitListMM']);
  },

//历史话费返还查询
  queryBillReturnDetailActions(context,data){
    context.commit(types.SET_QUERY_BILL_RETURN_DETAIL_API,data);
    context.dispatch('saveForm',['/finance_table/?__dew_token__='+context.getters.token,'GET_QUERY_BILL_RETURN_DETAIL_API','queryBillReturnDetailMM']);
  },

//历史红包返还查询
  getEpayChargeBillRecordActions(context,data){
    context.commit(types.SET_RED_EPAY_CHARGE_BILL_RECORD_API,data);
    context.dispatch('saveForm',['/finance_table/?__dew_token__='+context.getters.token,'GET_RED_EPAY_CHARGE_BILL_RECORD_API','getEpayChargeBillRecordMM']);
  },

// 余额变动
  balanceChangeListActions(context,data){
    context.commit(types.SET_BALANCE_CHANGE_LIST_API,data);
    context.dispatch('saveForm',['/finance_table/?__dew_token__='+context.getters.token,'GET_BALANCE_CHANGE_LIST_API','balanceChangeListMM']);
  },

// 历史余额变动查询
  queryBalanceLogTotalActions(context,data){
    context.commit(types.SET_QUERY_BALANCE_LOG_TOTAL_API,data);
    context.dispatch('saveForm',['/finance_other/?__dew_token__='+context.getters.token,'GET_QUERY_BALANCE_LOG_TOTAL_API','queryBalanceLogTotalMM']);
  },

//  历史合同欠费查询
  queryOweChargeInfoActions(context,data){
    context.commit(types.SET_QUERY_OWE_CHARGE_INFO_API,data);
    context.dispatch('saveForm',['/finance_other/?__dew_token__='+context.getters.token,'GET_QUERY_OWE_CHARGE_INFO_API','queryOweChargeInfoMM']);
  },


//  短信窗口获取同合同号码列表
  smsContentListActions(context){
    context.commit(types.SET_ASSET_LIST_CONTRACT_IN);
    api.widgetApi('/asset_list/?__dew_token__='+context.getters.token,context.state.editor.assetListMM).then(
      res=>{
        context.commit(types.GET_SMS_CONTENT_LIST,res);
      }
    ).catch(
      (error) => {
      }
    );
  },


// 实际格式化
  changeDate(allNum){
    let data={
      'number':'',
      'startDate':'',
      'endDate':''
    };
    data.number=allNum[2];
    console.log(allNum)
    if(typeof allNum[0] == 'string'){
      let mouth = '';
      let day = '';
      if(allNum[0].split('-')[1]<10){
        mouth = '0'+allNum[0].split('-')[1];
      }else{
        mouth = allNum[0].split('-')[1];
      }
      if(allNum[0].split('-')[2]<10){
        day = '0'+allNum[0].split('-')[2];
      }else{
        day = allNum[0].split('-')[2];
      }
      data.startDate=allNum[0].split('-')[0]+mouth+day;
    }else{
      let mouth = '';
      let day = '';
      if(allNum[0].getMonth()<10){
        mouth = '0'+allNum[0].getMonth();
      }else{
        mouth = allNum[0].getMonth();
      }
      if(allNum[0].getDay()<10){
        day = '0'+allNum[0].getDay();
      }else{
        day = allNum[0].getDay();
      }
      data.startDate=allNum[0].getFullYear()+mouth+day;
    }
    if(typeof allNum[1] == 'string'){
      let mouth = '';
      let day = '';
      if(allNum[1].split('-')[1]<10){
        mouth = '0'+allNum[1].split('-')[1];
      }else{
        mouth = allNum[1].split('-')[1];
      }
      if(allNum[1].split('-')[2]<10){
        day = '0'+allNum[1].split('-')[2];
      }else{
        day = allNum[1].split('-')[2];
      }
      data.endDate=allNum[1].split('-')[0]+mouth+day;
    }else{
      let mouth = '';
      let day = '';
      if(allNum[1].getMonth()<10){
        mouth = '0'+allNum[1].getMonth();
      }else{
        mouth = allNum[1].getMonth();
      }
      if(allNum[1].getDay()<10){
        day = '0'+allNum[1].getDay();
      }else{
        day = allNum[1].getDay();
      }
      data.endDate=allNum[1].getFullYear()+mouth+day;
    }
    return data;
  },


//    <=====================   余额分析接口   ========================>


//    <=====================   故障处理   ========================>


};

export default actions
