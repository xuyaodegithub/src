/**
 * Created by Chris on 17/5/8.
 */
import * as types from '../fetch/type';
import Vue from 'vue'
const mutations = {

  //loginSet
  [types.SET_LOGIN_ALL_API](state, res) {
    console.log(res)
    state.editor.enterCase = res.body;
    state.editor.token = res.body.token;
    state.editor.staffStatsMM.args.staffId=res.body.accountCode;
    state.editor.staffStatInfoMM.args.staffId=res.body.accountCode;
  },
  //呼入电话 随入
  [types.GET_IVR_FOLLOW_API](state, ivrFollow) {
    state.editor.followData = ivrFollow;
    state.editor.businessCallNumber = ivrFollow.phoneNum;
  },
  //设置呼入号码 为user－info 的 callNo
  [types.SET_CALL_NO_API](state) {
    state.editor.personMM.args.callNo = state.editor.businessCallNumber;
  },
  //设置personMM 为空
  [types.SET_PERSON_EMPTY_API](state) {
    state.editor.personMM.args.callNo = '';
    state.editor.personMM.args.serviceId = '';
    state.editor.personMM.args.broadbandAccount = '';
    state.editor.personMM.args.accountNo = '';
    state.editor.personMM.args.contractNo = '';
    state.editor.personMM.args.idNo = '';
    state.editor.personMM.args.integratedNo = '';
    state.editor.personMM.args.assetNo = '';
    state.editor.personMM.args.snNo = '';
    state.editor.personMM.args.circuitNo = '';
    state.editor.personMM.args.groupNo = '';
    state.editor.personMM.args.name = '';
    state.editor.personMM.args.iccId = '';
    state.editor.personMM.args.specialServiceCode = '';
    state.editor.personMM.args.queryUnUse = '1';
    state.editor.personMM.args.deviceArea = '';
    state.editor.personMM.args.searchCity = '';
  },
  //设置输入号码 为业务号码
  [types.SET_INTEGRATION_NO_API](state,writeNo) {
    state.editor.personMM.args.assetNo = writeNo.integrationId;
    state.editor.businessCallNumber =  writeNo.commonServiceId;
  },
  //设置身份证
  [types.SET_ID_USER_NO](state,writeNo) {
    state.editor.personMM.args.idNo = writeNo;
  },
  [types.SET_INTEGRATION_OLD_NO_API](state,writeNo) {
    state.editor.personMM.args.assetNo = writeNo.integrationId;
    state.editor.businessCallNumber =  writeNo.phoneNum;

  },

//语音功能需要的入参数修改setBusiPhoneInfo
  [types.SET_BUSI_PHONE_INFO](state,res) {
    state.editor.infoSaimen.busiPhoneType=res.data.body.data.productCode;
    state.editor.infoSaimen.deviceArea=res.data.body.data.areaCode;
    state.editor.infoSaimen.deviceType=res.data.body.data.deviceType;
    state.editor.infoSaimen.networkAccount=res.data.body.data.networkAccount;
    state.editor.infoSaimen.serviceId=res.data.body.data.integrationNum;
    state.editor.infoSaimen.circuitNumber=res.data.body.data.circuitNumber;
  },
  //设置输入号码 为业务号码
  [types.SET_BUSINESS_NO_API](state,writeNo) {
    state.editor.personMM.args.callNo = writeNo;
    state.editor.businessCallNumber =  writeNo;
  },
  //设置输入号码 为宽带
  [types.SET_BROADBAND_ACCOUNT_NO](state,writeNo) {
    state.editor.personMM.args.broadbandAccount = writeNo;
    state.editor.businessCallNumber =  writeNo;
  },
//设置输入号码 为固定号码
  [types.SET_TELEPHONE_NO_API](state,writeNo) {
    state.editor.personMM.args.integratedNo = writeNo;
    state.editor.businessCallNumber =  writeNo;
  },
//设置输入号码 为有线宽带号码
  [types.SET_WIRED_BROAD_BAND_NO_API](state,writeNo) {
    state.editor.personMM.args.broadbandAccount =  writeNo;
    state.editor.businessCallNumber =  writeNo;
  },
//设置输入号码 为ITV号码
  [types.SET_ITV_NO_API](state,writeNo) {
    state.editor.personMM.args.searchCity = writeNo;
    state.editor.businessCallNumber =  writeNo;
  },
  //设置输入号码 为业务号码
  [types.SET_BROADBAND_ACCOUNT_API](state,writeNo) {
    state.editor.businessCallNumber = '';
    state.editor.personMM.args.broadbandAccount = writeNo;
    state.editor.businessCallNumber =  writeNo;
  },

  //呼入电话 基本信息
  [types.GET_PERSON_SAVE_API](state, res) {
      state.editor.callNumberMM = res.data.body.data;
  },
  //user-info

  [types.GET_PERSON_API](state, res) {
    state.page.sidebar.personMessage = res.data.body.data;
  },
  //呼入电话 资产列表
  [types.GET_ASSET_LIST_API](state, res) {
      state.page.sidebar.assetList = res.data.body.data;
      state.page.sidebar.assetListShow = res.data.body.data;
  },
  [types.SET_ASSET_LIST_ID](state, res) {
      state.page.sidebar.assetListId = res.body.data;
      state.page.sidebar.assetListShow = res.body.data;
  },
  [types.SET_ASSET_LIST_SEARCH_ID](state, res) {
      state.page.sidebar.assetListIdSearch = res.body.data;
      state.page.sidebar.assetListShow = res.body.data;
  },
  [types.SET_ON_ASSET_LIST_SEARCH_ID](state, res) {
      state.page.sidebar.assetListIdSearchData = res.body.data;
  },
  [types.SET_ASSET_LIST_ACCOUNT](state, res) {
      state.page.sidebar.assetListCustom = res.body.data;
      state.page.sidebar.assetListShow = res.body.data;
  },
  [types.SET_ASSET_LIST_CONTRACT](state, res) {
      state.page.sidebar.assetListContract = res.body.data;
      state.page.sidebar.assetListShow = res.body.data;
  },
  //资产列表查询
  [types.SET_ASSET_LIST_IN](state, assetType) {
    switch (assetType){
      case 'all':
        state.editor.assetListMM.accountNo = state.editor.personMM.args.accountNo;
        break;
      case 'accountNo':
        state.editor.assetListMM.accountNo = state.page.sidebar.personMessage;
        break;
      case 'contractNo':
        state.editor.assetListMM.accountNo = state.page.sidebar.personMessage;
        break;
      case 'idNo':
        state.editor.assetListMM.accountNo = state.page.sidebar.personMessage;
        break;
    }
  },
  //资产列表查询 同合同 同客户
  [types.SET_ASSET_LIST_TOGETHER_IN](state) {
    state.editor.assetListMM.args.callNo = state.editor.businessCallNumber;
    state.editor.assetListMM.args.idNo = '';
    state.editor.assetListMM.args.accountNo = state.editor.callNumberMM.accountNumber;
    state.editor.assetListMM.args.contractNo = state.editor.callNumberMM.billAccountNum;
  },
  //资产列表查询 同合同
  [types.SET_ASSET_LIST_CONTRACT_IN](state) {
    state.editor.assetListMM.args.callNo = '';
    state.editor.assetListMM.args.accountNo = '';
    state.editor.assetListMM.args.idNo = '';
    state.editor.assetListMM.args.contractNo = state.editor.callNumberMM.billAccountNum;
  },
  //资产列表查询 同客户
  [types.SET_ASSET_LIST_ACCOUNT_IN](state) {
    state.editor.assetListMM.args.callNo = '';
    state.editor.assetListMM.args.contractNo = '';
    state.editor.assetListMM.args.idNo = '';
    state.editor.assetListMM.args.accountNo = state.editor.callNumberMM.accountNumber;
  },
  //资产列表查询 身份证
  [types.SET_ASSET_LIST_ID_IN](state) {
    state.editor.assetListMM.args.callNo = '';
    state.editor.assetListMM.args.contractNo = '';
    state.editor.assetListMM.args.accountNo = '';
    state.editor.assetListMM.args.idNo = state.editor.callNumberMM.accountIdNumber;
  },
  //资产列表查询 身份证 搜索
  [types.SET_ASSET_LIST_ID_SEARCH_IN](state,input) {
    state.editor.assetListMM.args.callNo = state.editor.businessCallNumber;
    state.editor.assetListMM.args.contractNo = '';
    state.editor.assetListMM.args.accountNo = '';
    state.editor.assetListMM.args.idNo = input;
  },


  //工具箱查询
  [types.GET_GRT_TOOLBOX_API](state, res) {
    state.page.sidebar.toolPage.chooseNum = res.data.body.data;
    for(let i=0;i<state.page.sidebar.toolPage.toolDataAll.length;i++){
      state.page.sidebar.toolPage.toolDataAll[i].sort='0';
      for (let j=0;j<state.page.sidebar.toolPage.chooseNum.length;j++){
        if (state.page.sidebar.toolPage.toolDataAll[i].toolCode==state.page.sidebar.toolPage.chooseNum[j].toolCode){
          state.page.sidebar.toolPage.toolDataAll[i].sort=state.page.sidebar.toolPage.chooseNum[j].sort;
        }
      }
    }
    if(state.page.sidebar.toolPage.chooseNum.length>0){
      for(let i=0; i<state.page.sidebar.toolPage.chooseNum.length; i++){
        state.page.sidebar.toolNum.push(state.page.sidebar.toolPage.chooseNum[i].sort)
      }
    }
  },
  //工具箱储存
  [types.GET_SAVE_TOOLBOX_API](state) {
    state.editor.saveToolBoxMM.args.toolBoxs=state.page.sidebar.toolPage.chooseNum;
    state.editor.saveToolBoxMM.args.loginId=state.editor.enterCase.accountCode;
  },
  //工具箱设置
  [types.SET_TOOL_BAR](state, num) {
    // console.log(state.page.sidebar.toolPage.chooseNum)
    console.log(state.page.sidebar.toolPage.chooseNum)
    if(state.page.sidebar.toolPage.chooseNum.length>=9){
      if(state.page.sidebar.toolPage.toolDataAll[num].sort=='0'){
        console.log('太多了哥们')
      }else{
        for(let i=0; i<state.page.sidebar.toolPage.chooseNum.length; i++){
          if(state.page.sidebar.toolPage.toolDataAll[num].toolCode == state.page.sidebar.toolPage.chooseNum[i].toolCode){
            let nowNum = state.page.sidebar.toolPage.toolDataAll[num].sort;
            state.page.sidebar.toolNum.splice(state.page.sidebar.toolNum.indexOf(nowNum),1);
            console.log(state.page.sidebar.toolNum)
            state.page.sidebar.toolPage.chooseNum.splice(i,1);
            state.page.sidebar.toolPage.toolDataAll[num].sort = '0';
          }
        }

        console.log(state.page.sidebar.toolPage.chooseNum)
      }
    }else{
      if(state.page.sidebar.toolPage.toolDataAll[num].sort=='0'){
        console.log('sort 0' )
        console.log(state.page.sidebar.toolNum )
        console.log(state.page.sidebar.toolPage.toolDataAll[num].sort )
        console.log(state.page.sidebar.toolPage.chooseNum);
        for(let j=1;j<10;j++){
          if(state.page.sidebar.toolNum.indexOf(j)<0){
            state.page.sidebar.toolPage.toolDataAll[num].sort=j;
            console.log(j)
            state.page.sidebar.toolPage.chooseNum.push(state.page.sidebar.toolPage.toolDataAll[num]);
            state.page.sidebar.toolNum.push(j);
            break;
          }
        }
      }else{
        // state.page.sidebar.toolPage.toolDataAll[num].sort = '0';
        console.log('sort !=0' )
        console.log(state.page.sidebar.toolPage.toolDataAll[num].sort )
        for(let i=0; i<state.page.sidebar.toolPage.chooseNum.length; i++){
          if(state.page.sidebar.toolPage.toolDataAll[num].toolCode == state.page.sidebar.toolPage.chooseNum[i].toolCode){
            let nowNum = state.page.sidebar.toolPage.toolDataAll[num].sort;
            state.page.sidebar.toolNum.splice(state.page.sidebar.toolNum.indexOf(nowNum),1);
            state.page.sidebar.toolPage.chooseNum.splice(i,1);
            state.page.sidebar.toolPage.toolDataAll[num].sort = '0';
          }
        }
        console.log(state.page.sidebar.toolNum)
      }
    }
  },
  //呼入电话 客户画像
  [types.GET_PERSON_HEAD_API](state, res) {
      state.page.homepage.packageHeadMessage = res.data.body.data;
      state.editor.birthday = res.data.body.data.birthday.substring(4,8)
  },
  //呼入电话 客户基本信息
  [types.GET_ACCOUNT_BUNDLE_API](state, res) {
      state.page.homepage.accountBundle= res.body.data;
  },
  //呼入电话 客户余额
  [types.GET_CUSTOMER_ASSET_API](state, res) {
      state.page.homepage.customerAsset= res.data.body.data;
  },
  //packageCase 预判
  [types.GET_INDEX_MARKETING_API](state,res) {
    state.page.homepage.packageCase=res.data.body.data;
  },
  //packageCase 营销
  [types.GET_PRECISION_MARKETING_API](state,res) {
      state.page.homepage.packageCasePrecision=res.data.body.data;
  },
  //packageCase 本月套餐
  [types.GET_FREE_RESOURCE_API](state, res) {
    state.page.homepage.freeResource= res.data.body.data;
  },
  //packageCase 销售品
  [types.GET_SALE_PRODUCT_API](state, res) {
    state.page.homepage.saleProduct= res.data.body.data;
  },
  //packageCase 子产品
  [types.GET_SUB_ASSET_API](state, res) {
    state.page.homepage.subAsset= res.data.body.data;
  },
  //packageCase 子产品属性入参设置
  [types.SET_SUB_ASSET_PROPERTY_API](state,item) {
    state.editor.getSubAssetPropertyMM.args.assetId= item.id;
    state.editor.getSubAssetPropertyMM.args.c3Name= item.c3Name;
  },
  [types.GET_SUB_ASSET_PROPERTY_ZHU_API](state,res) {
    if(res.body){
      state.page.homepage.subAssetPropertyPublic = res.body.data.properties;
    }
  },
  [types.SET_SUB_ASSET_PROPERTY_ZHU_API](state) {
    state.editor.getSubAssetPropertyMM.args.assetId= state.editor.callNumberMM.assetId;
    state.editor.getSubAssetPropertyMM.args.c3Name= state.editor.callNumberMM.c3Name;
  },

  //子产品属性查询Widget接口
  [types.SET_FAMILY_NETWORK_LIST](state) {
    state.editor.getFamilyNetworkListMM.args.areaCode= state.editor.callNumberMM.areaCode;
    state.editor.getFamilyNetworkListMM.args.queryType= '2';
    state.editor.getFamilyNetworkListMM.args.queryValue= state.editor.businessCallNumber;
  },
  [types.GET_FAMILY_NETWORK_LIST](state,res) {
    state.page.homepage.familyNetworkList= res.body.data;
    console.log('state.page.homepage.familyNetworkList')
    console.log(state.page.homepage.familyNetworkList)
  },
    //packageCase 子产品属性获取
  [types.GET_SUB_ASSET_PROPERTY_API](state,res) {

    // let key = 'list'+state.editor.setSubAssetPropertyNum;
    // console.log(key);
    // console.log(state.page.homepage.subAsset.assets);
    // console.log();
    // console.log(state.page.homepage.subAsset.assets[state.editor.setSubAssetPropertyNum][key]);
    // state.page.homepage.subAsset.assets[state.editor.setSubAssetPropertyNum][key]=res.data.body.data.properties;
    // console.log(state.page.homepage.subAsset);
    // let num = parseInt(state.editor.setSubAssetPropertyNum);
    // console.log(typeof num);


    // state.page.homepage.subAssetProperty=res.data.body.data.properties;
    // console.log(state.page.homepage.subAssetProperty);


    if(state.page.homepage.subAssetProperty==''){

      state.page.homepage.subAssetProperty={};
      let key = 'list'+state.editor.setSubAssetPropertyNum;
      // let key = state.editor.getSubAssetPropertyMM.args.assetId;
      // state.page.homepage.subAssetProperty.push(res.data.body.data.properties)
      Vue.set(state.page.homepage.subAssetProperty,key,res.body.data.properties);
      // state.page.homepage.subAssetProperty[key]=res.data.body.data.properties;
    }else{
      let key = 'list'+state.editor.setSubAssetPropertyNum;
      // let key = state.editor.getSubAssetPropertyMM.args.assetId;
      // state.page.homepage.subAssetProperty.push(res.data.body.data.properties)
      Vue.set(state.page.homepage.subAssetProperty,key,res.body.data.properties);
      // state.page.homepage.subAssetProperty[key]=res.data.body.data.properties;
    }
    console.log(state.page.homepage.subAssetProperty)
  },

  //packageLine ivr关联信息
  [types.GET_USER_OPERATE_TRACE_QUERY_API](state, res) {
    state.page.ivrData.getUserOperateTraceQuery= res.data.body.data;
  },
  //packageLine 上一通电话
  [types.GET_LAST_CALL_API](state,res) {
    state.page.PackageLine.lastCall.dataFault=res.data.code;
    if(res.data.code=='404'){
      state.page.PackageLine.lastCall.dataBack= res.data.message;
    }else{
      state.page.PackageLine.lastCall.dataAll= res.data.body.data;
    }
  },
  //电话 当日的数据
  [types.GET_CALL_LIST_DAY_API](state,res) {
    state.page.homepage.callDayList = res.body.data;
  },
  //电话当月

  [types.GET_CALL_LIST_MOUTH_API](state,res) {
    state.page.homepage.callMouthList = res.body.data;
  },
  //电话详情

  [types.SET_CALL_DETAIL_API](state,item) {
    if(item){
      state.editor.CallDetailMM.args.callNo = item.contactValue;
      state.editor.CallDetailMM.args.eventTrialId = item.eventTrialId;
      state.editor.CallDetailMM.args.startTime = item.actualStartDate;
    }else{
      state.editor.CallDetailMM.args.callNo = '';
      state.editor.CallDetailMM.args.eventTrialId = '';
      state.editor.CallDetailMM.args.eventTrialId = '';
    }
  },
  //余额

  [types.GET_BALANCE_DETAIL__API](state,res) {
    state.page.pageAge.balanceDetail = res.body.data;
  },

  //一正五号

  [types.SET_PHONE_REL_API](state) {
    state.editor.getCertPhoneRelMM.args.certNum = state.editor.callNumberMM.accountIdNumber;
    state.editor.getCertPhoneRelMM.args.certType = state.editor.callNumberMM.accountIdType;
    state.editor.getCertPhoneRelMM.args.areaCode = state.editor.callNumberMM.areaCode;
  },

  [types.GET_PHONE_REL_API](state,res) {
    state.page.pageAge.phoneRel = res.body.data;
    if(res.body){
      document.getElementById("oldWindow").contentWindow.setPhoneRelNumbers5MoreFlag(res.body.data.relSize);
    }
  },

  //上一桶绘画足迹

  [types.GET_LAST_CALL_DETAIL_API](state,res) {
    if(res){
      state.page.PackageLine.lastCallDetail=res;
    }else{
      state.page.PackageLine.lastCallDetail='';
    }
  },

  [types.GET_CALL_DETAIL_API](state,res) {
    state.page.homepage.callDetail = res.body.data;
  },
  //提示信息条数
  [types.GET_STAFF_UNREAD_SUM_API](state,res) {
    state.page.homepage.messageNums = res.data.body.data;
  },
  //获取话务员统计信息
  [types.GET_STAFF_STAT_INFO](state,res) {
    state.page.homepage.StaffStatInfo = res.data.body.data;
  },
    //packageLine 接触轨迹
    [types.GET_CHANNEL_CONTACT_API](state, res) {
        state.page.PackageLine.channelContact= res.data.body.data;
        state.page.PackageLine.channelContactSearch= res.data.body.data;
    },
  // [types.GET_IVR_API](state,res) {
  //   state.page.PackageLine.ivrData=res.data.body.data;
  // },

  //宽带速录 新增

  [types.SET_BROAD_BAND_RATE_API](state,data) {
    state.editor.getBroadbandRateMM.args.billAccountNum = data.billAccountNum;
    state.editor.getBroadbandRateMM.args.c3Name = data.c3Name;
    state.editor.getBroadbandRateMM.args.assetId = data.id;
    state.editor.getBroadbandRateMM.args.accountDeviceType = data.deviceType;
  },
  [types.SET_BROAD_BAND_RATE_PAGE_API](state,data) {
    state.editor.getBroadbandRateMM.args.billAccountNum = data.billAccountNum;
    state.editor.getBroadbandRateMM.args.c3Name = data.c3Name;
    state.editor.getBroadbandRateMM.args.assetId = data.id;
    state.editor.getBroadbandRateMM.args.accountDeviceType = data.accountDeviceType;
  },
  //销售品下拉展现

  [types.GET_SAME_CONTRACT_ASSET](state, res) {
    state.page.getSameContractAsset= res.data.body.data;
  },

  //页面展示是否实名认证

  [types.GET_NEW_REAL_NAME_API](state, res) {
    state.page.sidebar.personRealName= res.data.body.data;
  },

  //根据录音编号查询报表话务分类（业务号码，大中小类）
  [types.SET_REPORT_BY_RECORD](state, data) {
    if(data){
      state.editor.getReportByRecordMM.args.recordingId=data.eventTrialId;
    }else{
      state.editor.getReportByRecordMM.args.recordingId='';
    }
  },

  [types.GET_REPORT_BY_RECORD](state, res) {
    state.page.PackageLine.recordingId= res.body.data.recordList;
  },

  //实名认证
  [types.GET_REAL_NAME_API](state, res) {
    state.page.ivrData.getTransferParams= res.data.body.data;
  },

  [types.SET_REAL_NAME_API](state, res) {
    console.log(res);
    state.page.ivrData.getTransferParams= res.data.body.data;
  },


  //ivr data
  [types.GET_TRANSFER_PARAMS_API](state, res) {
    console.log(res)
    state.page.ivrData.getTransferParams= res.data.body.data;
  },
  [types.GET_LOGIN_INFO_API](state, res) {
    state.page.ivrData.getLoginInfo= res.data.body.data;
    console.log(state.page.ivrData.getLoginInfo)
  },
  [types.GET_REGION_QUEUE_API](state, res) {
    state.page.ivrData.getRegionQueue= res.data.body.data;
  },
  [types.GET_REGION_QUEUE_AREA_API](state, res) {
    state.page.ivrData.getRegionQueueArea= res.data.body.data.branches;
    state.editor.tabChange = 'false';
  },
  [types.GET_REGION_QUEUE_SKILL_API](state, res) {
    state.page.ivrData.getRegionQueueSkill= res.data.body.data;
  },
  [types.GET_TRANSFER_REGION_API](state, res) {
    state.page.ivrData.getTransferRegion= res.data.body.data;
  },
  [types.GET_READ_BUSY_AND_QUEUE_API](state, res) {
    state.page.ivrData.getReadBusyAndQueue= res.data.body.data;
  },
  [types.GET_READ_BUSY_QUEUE_API](state, res) {
    state.page.ivrData.getReadBusyAndQueue= res.body.data;
  },
  //ivr 设置
  [types.SET_TRANSFE_RREGION_API](state) {
    console.log(state.editor.callNumberMM.areaCode);
    // state.editor.getTransferRegionMM.args.areaCode= state.editor.callNumberMM.areaCode;
    state.editor.getTransferRegionMM.args.areaCode= state.editor.callNumberMM.areaCode;
    // state.editor.getTransferRegionMM.args.transSkill= '7';
    state.editor.getTransferRegionMM.args.transSkill= COMMOBJ.Skill;
  },
  [types.SET_REGION_QUEUE_AREA_API](state) {
    state.editor.getRegionQueueMM.args.branchId= '';
    state.editor.getRegionQueueMM.args.staffBranch= '';
    state.editor.getRegionQueueMM.args.limitFlag= '';
  },
  [types.SET_READ_BUSY_AND_QUEUE_API](state,val) {
    state.editor.getReadBusyAndQueueMM.args.skillId= val[0];
    state.editor.getReadBusyAndQueueMM.args.vcId= val[1];
  },
  [types.SET_REGION_QUEUE_SKILL_API](state, valId) {
    let extObj =  eval('(' + state.editor.enterCase.ext + ')');
    console.log(extObj.branchId);
    console.log(valId);
    state.editor.getRegionQueueMM.args.branchId= valId.split(' ')[0];
    state.editor.getRegionQueueMM.args.staffBranch= extObj.branchId;
    state.editor.getRegionQueueMM.args.limitFlag= '1';
  },


  //录音转接
  [types.SET_INSERT_USER_SATISFACTION_API](state) {
    state.editor.insertUserSatisfactionMM.args.satisfyType = '';
    state.editor.insertUserSatisfactionMM.args.deviceType = '';
    state.editor.insertUserSatisfactionMM.args.onlineFlag = '';
    state.editor.insertUserSatisfactionMM.args.callerId = '';
    state.editor.insertUserSatisfactionMM.args.michelleId = '';
    state.editor.insertUserSatisfactionMM.args.stopReason = '';
    state.editor.insertUserSatisfactionMM.args.scoreBy = '';
    state.editor.insertUserSatisfactionMM.args.staffId = '';
    state.editor.insertUserSatisfactionMM.args.customerId = '';
    state.editor.insertUserSatisfactionMM.args.staffName = '';
    state.editor.insertUserSatisfactionMM.args.c3Code = '';
    state.editor.insertUserSatisfactionMM.args.skill = '';
    state.editor.insertUserSatisfactionMM.args.calledArea = '';
    state.editor.insertUserSatisfactionMM.args.productType = '';
    state.editor.insertUserSatisfactionMM.args.crmCustomerId = '';
  },
  [types.SET_INSERT_USER_SATISFACTION_API_SM](state,flow) {
    state.editor.insertUserSatisfactionMM.args.customerId = flow.CUSTOMID;
    state.editor.insertUserSatisfactionMM.args.skill = flow.SKILL;
    state.editor.insertUserSatisfactionMM.args.callerId = flow.CALLERID;
    state.editor.insertUserSatisfactionMM.args.c3Code = flow.AREA;
    state.editor.insertUserSatisfactionMM.args.scoreBy = flow.SCOREBY;
    state.editor.insertUserSatisfactionMM.args.deviceType = flow.DEVICETYPE;
    state.editor.insertUserSatisfactionMM.args.calledArea = flow.CALLEDAREA;
    state.editor.insertUserSatisfactionMM.args.stopReason = flow.STOPREASON;
    state.editor.insertUserSatisfactionMM.args.onlineFlag = flow.ONLINEFLAG;
    state.editor.insertUserSatisfactionMM.args.staffId = flow.staffId;
    state.editor.insertUserSatisfactionMM.args.michelleId = flow.michelleId;
    state.editor.insertUserSatisfactionMM.args.staffName = flow.staffName;
    state.editor.insertUserSatisfactionMM.args.productType = flow.productType;
  },
  [types.GET_INSERT_USER_SATISFACTION_API](state,res) {
    state.editor.recordAll.insertUserSatisfaction = res.data.body.data;
  },
  [types.SET_ADD_RECORD_API](state) {
    let extObj =  eval('(' + state.editor.enterCase.ext + ')');
    console.log(extObj.branchId);
    state.editor.addRecordMM.args.ivrData = COMMOBJ.ivrCallData;
    state.editor.addRecordMM.args.callerId = state.editor.callNumber;
    state.editor.addRecordMM.args.staffId = extObj.staffId;
    state.editor.addRecordMM.args.dn = COMMOBJ.dn;
    state.editor.addRecordMM.args.productId = extObj.branchId;
    state.editor.addRecordMM.args.answerFlag = state.editor.followData.answerFlag=="outbound"?'2':(state.editor.followData.answerFlag=="inbound"?'1':'4');
    state.editor.addRecordMM.args.description = '';
    state.editor.addRecordMM.args.connId = state.editor.followData.ConnectionID;
    state.editor.addRecordMM.args.branchId = extObj.branchId;
    state.editor.addRecordMM.args.passTerminalFlag = COMMOBJ.passTerminalFlag;
    state.editor.addRecordMM.args.fileName = COMMOBJ.recordFileName;
    state.editor.addRecordMM.args.stopReason = '0';
    state.editor.addRecordMM.args.monitorShip = '';
    state.editor.addRecordMM.args.monitorCount = '0';
    state.editor.addRecordMM.args.callId = '';
  },
  [types.SET_ADD_RECORD_API_SM](state,flow) {
    state.editor.addRecordMM.args = flow;
  },
  [types.GET_ADD_RECORD_API](state,res) {
    state.editor.recordAll.addRecord = res.body.data;
  },

  [types.SET_UPDATE_RECORD_API](state) {
    state.editor.updateRecordMM.args.fileName = '';
    state.editor.updateRecordMM.args.stopReason = '';
    state.editor.updateRecordMM.args.monitorShip = '';
    state.editor.updateRecordMM.args.monitorCount = '';
    state.editor.updateRecordMM.args.connid = '';
    state.editor.updateRecordMM.args.callId = '';
    state.editor.updateRecordMM.args.recordGuid = '';
    state.editor.updateRecordMM.args.callFlag = '';
    state.editor.updateRecordMM.args.phone = '';
  },
  [types.SET_UPDATE_RECORD_API_SM](state,flow) {
    state.editor.updateRecordMM.args = flow;
  },
  [types.GET_UPDATE_RECORD_API](state,res) {
    state.editor.recordAll.updateRecord = res.data.body.data;
  },

  // 呼入电话 当日
  [types.SET_DAY_WIDGET_EMPTY](state) {
    state.editor.callListDayMM.args.callNo = state.editor.businessCallNumber;
    state.editor.callListDayMM.args.lastDays = 0;
    state.editor.callListDayMM.args.recordId = state.editor.recordId;
  },
  // 呼入电话 当月
  [types.SET_MOUTH_WIDGET_EMPTY](state) {
    state.editor.callListMouthMM.args.callNo = state.editor.businessCallNumber;
    state.editor.callListMouthMM.args.lastDays = 29;
    state.editor.callListMouthMM.args.recordId = state.editor.recordId;
  },

  //设置widget为空
  //呼入号码清空
  [types.SET_TRANFE_WIDGET_EMPTY](state) {
    state.page.ivrData.getReadBusyAndQueue = '';
  },
  [types.SET_CALLIN_WIDGET_EMPTY](state) {
    state.page.homepage.callDayList = '';
    state.page.homepage.callMouthList = '';
    state.page.PackageLine.lastCallDetail = '';
  },
  [types.SET_WIDGET_EMPTY](state) {
    state.editor.callNumberMM = '';
    state.editor.businessCallNumber = '';
    state.page.sidebar.personMessage = '';
    state.page.sidebar.personRealName = '';
    state.page.sidebar.assetList = '';
    state.page.sidebar.assetListShow='';
    state.page.sidebar.assetListCustom = '';
    state.page.sidebar.assetListContract = '';
    state.page.sidebar.assetListId = '';
    state.page.pageAge.balanceDetail = '';
    state.page.pageAge.phoneRel = '';
    state.page.homepage.packageHeadMessage = '';
    state.page.homepage.packageCase = '';
    state.page.homepage.packageCasePrecision = '';
    state.page.homepage.saleProduct = '';
    state.page.homepage.freeResource = '';
    state.page.homepage.subAsset = '';
    state.page.homepage.subAssetProperty = '';
    state.page.homepage.subAssetPropertySelf = '';
    state.page.homepage.customerAsset = '';
    state.page.homepage.accountBundle = '';
    state.page.PackageLine.channelContact = '';
    state.page.PackageLine.channelContactSearch = '';
    state.page.PackageLine.lastCall.dataFault = '';
    state.page.PackageLine.lastCall.dataBack = '';
    state.page.PackageLine.lastCall.dataAll = '';
  },


  [types.SET_LOCAL_ASSET_EMPTY](state) {
    state.editor.sidebarEditor.contract = false;
    state.editor.sidebarEditor.custom = false;
    state.editor.sidebarEditor.identityCard = false;
  },

  //记事本
  [types.SET_SAVE_NOTE_API](state,item) {
    state.editor.saveNoteMM.args.staffId = state.editor.enterCase.accountCode;
    state.editor.saveNoteMM.args.note = item;
  },
  //记事本
  [types.SET_QUERY_NOTE_LIST_API](state) {
    state.editor.queryNoteListMM.args.staffId = state.editor.enterCase.accountCode;
  },
  [types.GET_QUERY_NOTE_LIST_API](state,res) {
    state.page.queryNoteList=res.body.data;
  },
  //记事本
  [types.SET_DELETE_NOTES_API](state,item) {
    state.editor.deleteNotesMM.args.staffId = state.editor.enterCase.accountCode;
    state.editor.deleteNotesMM.args.idList = item;
  },
  //记事本
  [types.SET_COMPLETENOTES_API](state,item) {
    state.editor.completeNotesMM.args.staffId = state.editor.enterCase.accountCode;
    state.editor.completeNotesMM.args.idList = item;
  },


  //我要反馈
  [types.SET_FEEDBACK_API](state,item) {
    if(item!=''){
      state.editor.saveFeedbackMM.args.content = item[0];
      state.editor.saveFeedbackMM.args.attachments = item[1];
    }else{
      state.editor.saveFeedbackMM.args.content = ''
      state.editor.saveFeedbackMM.args.attachments = '';
    }
    state.editor.saveFeedbackMM.args.staffId = state.editor.enterCase.staffId;
    state.editor.saveFeedbackMM.args.staffBranch = state.editor.enterCase.branchId;
    state.editor.saveFeedbackMM.args.branch = state.editor.enterCase.branchId;
    state.editor.saveFeedbackMM.args.callNo = state.editor.callNumber;
    state.editor.saveFeedbackMM.args.businessNo = state.editor.businessCallNumber;
    state.editor.saveFeedbackMM.args.recordId = state.editor.recordId;
  },
  [types.GET_FEEDBACK_API](state,res) {
    state.page.getFeedbackData = res.body.data;
  },

  //查询异网用户宽带账号 电话呼入时候查询
  [types.SET_KD_ACCOUNT_BY_CALL_NUM](state) {
    state.editor.getKdAccountByCallNumMM.args.callNum = state.editor.callNumber;
  },
  [types.GET_KD_ACCOUNT_BY_CALL_NUM](state,res) {
    if(res){
      state.page.getKdAccountByCallNum = res.body.data;
    }else{
      state.page.getKdAccountByCallNum = '';
    }
  },
  [types.SET_KD_ACCOUNT_BY_CALL_DATA_NUM](state) {
      state.page.getKdAccountByCallNum = '';
  },


  changeAlert(state,where){
      state.page.popoverAlive.openOrClose = !state.page.popoverAlive.openOrClose;
      if(typeof where == "object"){
        state.page.popoverAlive.title = where[0];
        if(state.page.popoverAlive.title=='vServiceEvent'){
          state.page.severEvent=where[1];
        }
        if(state.page.popoverAlive.title=='vIncomingHistory'){
          state.page.homepage.incomingHistory=where[1];
        }
        if(state.page.popoverAlive.title=='vFreeResourceAlert'){
          state.page.homepage.freeResourceAlertData=where;
        }
      }else if(typeof where == "string"){
        state.page.popoverAlive.title = where;
      }
  },
  changeSmallAlert(state,where){
      state.page.smallAlive.openOrClose = !state.page.smallAlive.openOrClose;
      state.page.smallAlive.title = where;
  },

//    <=====================   余额分析模块接口   ========================>

//  是否欠费查询
  [types.SET_BALANCE_INFO_API](state){
    state.editor.getBalanceInfoMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.getBalanceInfoMM.args.codeNumber=state.editor.businessCallNumber;
    state.editor.getBalanceInfoMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
  },
  [types.GET_BALANCE_INFO_API](state,res){
    state.page.balanceInfo=res.data.body.data;
  },
//  信用额度透支查询
  [types.SET_BALANCE_CREDIT_API](state){
    state.editor.getBalanceCreditMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.getBalanceCreditMM.args.serviceNo=state.editor.businessCallNumber;
  },
  [types.GET_BALANCE_CREDIT_API](state,res){
    state.page.balanceCredit=res.data.body.data;
  },
//  信用额度透支查询
  [types.SET_BALANCE_DEATIL_API](state){
    state.editor.getBalanceDeatilMM.args.regionId=state.page.sidebar.personMessage.areaCode;
    state.editor.getBalanceDeatilMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
    state.editor.getBalanceDeatilMM.args.codeNumber=state.editor.businessCallNumber;
  },
  [types.GET_BALANCE_DEATIL_API](state,res){
    state.page.balanceDeatil=res.data.body.data;
  },
//  套餐用户翼支付划拨记录查询
  [types.SET_EPAY_CHARGE_BILL_RECORD_API](state){
    state.editor.epayChargeBillRecordMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.epayChargeBillRecordMM.args.accountNo=state.editor.businessCallNumber;
    state.editor.epayChargeBillRecordMM.args.startMonth=data;
    state.editor.epayChargeBillRecordMM.args.endMonth=data;
    state.editor.epayChargeBillRecordMM.args.epayId=data;
  },
  [types.GET_EPAY_CHARGE_BILL_RECORD_API](state,res){
    state.page.epayChargeBillRecord=res.data.body.data;
  },
//  套餐用户翼支付划拨进度查询
  [types.SET_EPAY_CHARGE_BILL_PROGRESS_API](state){
    state.editor.getEpayChargeBillProgressMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.getEpayChargeBillProgressMM.args.accountNo=state.editor.businessCallNumber;
  },
  [types.GET_EPAY_CHARGE_BILL_PROGRESS_API](state,res){
    state.page.epayChargeBillProgress=res.data.body.data;
  },
//  欠费明细查询服务
  [types.SET_OWE_CHARGE_DETAIL_API](state){
    state.editor.getOweChargeDetailMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.getOweChargeDetailMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
    state.editor.getOweChargeDetailMM.args.codeNumber=state.editor.businessCallNumber;
  },
  [types.GET_OWE_CHARGE_DETAIL_API](state,res){
    state.page.oweChargeDetail=res.data.body.data;
  },
//  待生效金额
  [types.SET_QUERY_BOOK_SCHEME_INFO_API](state){
    state.editor.queryBookSchemeInfoMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.queryBookSchemeInfoMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
    state.editor.queryBookSchemeInfoMM.args.codeNumber=state.editor.businessCallNumber;
  },
  [types.GET_QUERY_BOOK_SCHEME_INFO_API](state,res){
    state.page.queryBookSchemeInfo=res.data.body.data;
  },
//  短信警告信息查询
  [types.SET_QUERY_ALARM_INFO_API](state,data){
    state.editor.queryAlarmInfoMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.queryAlarmInfoMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
    if(data){
      state.editor.queryAlarmInfoMM.args.codeNumber=data.number;
      state.editor.queryAlarmInfoMM.args.startDate=data.startDate;
      state.editor.queryAlarmInfoMM.args.endDate=data.endDate;
    }else{
      state.editor.queryAlarmInfoMM.args.codeNumber=state.editor.businessCallNumber;
      state.editor.queryAlarmInfoMM.args.startDate=null;
      state.editor.queryAlarmInfoMM.args.endDate=null;
    }
  },
  [types.GET_QUERY_ALARM_INFO_API](state,res){
    state.page.queryAlarmInfo=res.data.body.data;
  },
//  账务诊断
  [types.SET_BALANCE_IAGNOSIS_API](state){
    state.editor.getBalanceIagnosisMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.getBalanceIagnosisMM.args.businessType=state.page.sidebar.personMessage.accountDeviceType;
    state.editor.getBalanceIagnosisMM.args.businessNum=state.editor.businessCallNumber;
    if(state.page.sidebar.personMessage.status=='已暂停'){
      console.log('到这里啦')
      console.log(state.page.sidebar.personMessage.status)
      if(state.page.sidebar.personMessage.suspendFlag!='无'){
        console.log(state.page.sidebar.personMessage.suspendFlag)
        state.editor.getBalanceIagnosisMM.args.assetStatus='欠费停机';
        console.log(state.editor.getBalanceIagnosisMM.args.assetStatus)
      }else if(state.page.sidebar.personMessage.lossSuspendFlag=='Y'){
        state.editor.getBalanceIagnosisMM.args.assetStatus='挂失停机';
      }else if(state.page.sidebar.personMessage.initiativeSuspend=='Y'){
        state.editor.getBalanceIagnosisMM.args.assetStatus='主动停机';
      }else if(state.page.sidebar.personMessage.peccancySuspend=='Y'){
        state.editor.getBalanceIagnosisMM.args.assetStatus='违章停机';
      }
    }else{
      return '';
    }
    // }
    state.editor.getBalanceIagnosisMM.args.payType=state.page.homepage.customerAsset.payType;
    state.editor.getBalanceIagnosisMM.args.accountType=state.page.homepage.accountBundle.accountType;
    state.editor.getBalanceIagnosisMM.args.billAccountNum=state.page.sidebar.personMessage.billAccountNum;
  },
  [types.GET_BALANCE_IAGNOSIS_API](state,res){
    state.page.balanceIagnosis=res.data.body.data;
  },
//  使用客户合同号查询充值缴费记录
  [types.SET_QUERY_RECHARGE_LIST_API](state,data){
    state.editor.queryRechargeListMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.queryRechargeListMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
    if(data){
      state.editor.queryRechargeListMM.args.codeNumber=data.number;
      state.editor.queryRechargeListMM.args.startDate=data.startDate;
      state.editor.queryRechargeListMM.args.endDate=data.endDate;
    }else{
      state.editor.queryRechargeListMM.args.codeNumber=state.editor.businessCallNumber;
      state.editor.queryRechargeListMM.args.startDate=null;
      state.editor.queryRechargeListMM.args.endDate=null;
    }
  },
  [types.GET_QUERY_RECHARGE_LIST_API](state,res){
    state.page.queryRechargeList=res.data.body.data;
  },
//  使用客户合同号查询停复机记录记录
  [types.SET_QUERY_CALL_LIMIT_LIST_API](state,data){
    state.editor.queryCallLimitListMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.queryCallLimitListMM.args.codeType='1';
    if(data){
      state.editor.queryCallLimitListMM.args.codeNumber=data.number;
      state.editor.queryCallLimitListMM.args.startDate=data.startDate;
      state.editor.queryCallLimitListMM.args.endDate=data.endDate;
    }else{
      state.editor.queryCallLimitListMM.args.codeNumber=state.editor.businessCallNumber;
      state.editor.queryCallLimitListMM.args.startDate=null;
      state.editor.queryCallLimitListMM.args.endDate=null;
    }
  },
  [types.GET_QUERY_CALL_LIMIT_LIST_API](state,res){
    state.page.queryCallLimitList=res.data.body.data;
  },
//  历史话费返还查询
  [types.SET_QUERY_BILL_RETURN_DETAIL_API](state,data){
    state.editor.queryBillReturnDetailMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.queryBillReturnDetailMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
    state.editor.queryBillReturnDetailMM.args.codeNumber=state.editor.businessCallNumber;
    if(data){
      state.editor.queryBillReturnDetailMM.args.billingCycle=data.startDate;
    }
  },
  [types.GET_QUERY_BILL_RETURN_DETAIL_API](state,res){
    if(res.data.body.data){
      state.page.queryBillReturnDetail=res.data.body.data;
    }else{
      state.page.queryBillReturnDetail=[];
    }
  },
//  历史红包返还查询
  [types.SET_RED_EPAY_CHARGE_BILL_RECORD_API](state,data){
    state.editor.getEpayChargeBillRecordMM.args.regionId=state.page.sidebar.personMessage.areaCode;
    if(data){
      state.editor.getEpayChargeBillRecordMM.args.accountNo=data.number;
      state.editor.getEpayChargeBillRecordMM.args.startMonth=data.startDate;
      state.editor.getEpayChargeBillRecordMM.args.endMonth=data.endDate;
    }else{
      state.editor.getEpayChargeBillRecordMM.args.accountNo=null;
      state.editor.getEpayChargeBillRecordMM.args.startMonth=null;
      state.editor.getEpayChargeBillRecordMM.args.endMonth=null;
    }
  },
  [types.GET_RED_EPAY_CHARGE_BILL_RECORD_API](state,res){
    state.page.queryBillReturnDetail=res.data.body.data;
  },
//  余额变动查询
  [types.SET_BALANCE_CHANGE_LIST_API](state,data){
    state.editor.balanceChangeListMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.balanceChangeListMM.args.codeType='1';

    if(data){
      state.editor.balanceChangeListMM.args.codeNumber=data.number;
      state.editor.balanceChangeListMM.args.billingCycle=data.startDate;
    }else{
      state.editor.balanceChangeListMM.args.codeNumber=null;
      state.editor.balanceChangeListMM.args.billingCycle=null;
    }
  },
  [types.GET_BALANCE_CHANGE_LIST_API](state,res){
    state.page.balanceChangeList=res.data.body.data;
  },
//  历史余额变动查询
  [types.SET_QUERY_BALANCE_LOG_TOTAL_API](state,data){
    state.editor.queryBalanceLogTotalMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.queryBalanceLogTotalMM.args.codeType=state.page.sidebar.personMessage.accountDeviceType;
    if(data){
      state.editor.queryBalanceLogTotalMM.args.codeNumber=data.number;
      state.editor.queryBalanceLogTotalMM.args.endMonth=data.startDate;
      state.editor.queryBalanceLogTotalMM.args.startMonth=data.endDate;
    }else{
      state.editor.queryBalanceLogTotalMM.args.codeNumber=state.editor.businessCallNumber;
      state.editor.queryBalanceLogTotalMM.args.endMonth=null;
      state.editor.queryBalanceLogTotalMM.args.startMonth=null;
    }
  },
  [types.GET_QUERY_BALANCE_LOG_TOTAL_API](state,res){
    state.page.queryBalanceLogTotal=res.data.body.data;
  },

//历史合同欠费查询
  [types.SET_QUERY_OWE_CHARGE_INFO_API](state,data){
    state.editor.queryOweChargeInfoMM.args.areaCode=state.page.sidebar.personMessage.areaCode;
    state.editor.queryOweChargeInfoMM.args.codeType='1';
    if(data){
      state.editor.queryOweChargeInfoMM.args.codeNumber=data.number;
    }else{
      state.editor.queryOweChargeInfoMM.args.codeNumber=null;
    }
  },
  [types.GET_QUERY_OWE_CHARGE_INFO_API](state,res){
    state.page.queryOweChargeInfo=res.data.body.data;
  },

//获取同合同列表
  [types.GET_SMS_CONTENT_LIST](state,res){
    state.page.smsContentList=res.data.body.data;
    console.log(state.page.smsContentList)
  },
}

export default mutations
