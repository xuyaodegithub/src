/**
 * Created by Chris on 17/5/8.
 */
import { Message } from 'element-ui';
import { Loading } from 'element-ui';
import api from '../fetch/api'
const broadbandailure = {
  state: {
    editor:{
      /*宽带故障处理-------------------------------------------------------------------开始*/
      // 线路类型、付费速率
      queryBroadbandInfoMM:{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"queryBroadbandInfo",
        "args":{
          networkAccount:'',
          areaCode:'',
          assetStatus:'',
          assetId:'',
          integrationId:'',
          circuitNumber:'',
          isFault:'0',
          isAreaCause:'0'
        }
      },
      //24小时操作轨迹
      query24HOperationMM:{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"query24HOperation",
        "args":{
          broadbandNo:''
        }
      },

      //错误认证查询
      queryErrorCodeMM:{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"query24HOperation",
        "args":{
          login:'',
          authTime:'',
          authResult:'',
          remark:'',
          nasIp:'',
          nasPortType:''
        }
      },
      // 智能诊断错误代码查询处理
      queryQuestionByTypeMM:{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"queryQuestionByType",
        "args":{
          type:''
        }
      },

      // 根据问题编号查问题选项
      queryQuestionByIdMM:{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"queryQuestionById",
        "args":{
          id:''
        }
      },

      // 操作按钮 一键修复 按钮
      oneKeyRepairMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"oneKeyRepair",
        "args":{
          areaCode:'',
          broadbandNo:'',
          staffId:'',
          staffName:'',
          integrationId:'',
          assetId:''
        }
      },

      // 操作按钮 密码验证 按钮
      passwordVerifyMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"passwordVerify",
        "args":{
          accountType:'',
          accountID:'',
          password:'',
          pwdType:''
        }
      },

      // 操作按钮 密码重置 按钮
      passwordResetMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"passwordReset",
        "args":{
          accountType:'',
          accountID:'',
          newPassword:'',
          areaCode:''
        }
      },

      // 操作按钮 路由器设置 按钮
      sendRouterConfigMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"sendRouterConfig",
        "args":{
          routerId:'',
          routerType:''
        }
      },

      // 操作按钮 速率同步 按钮
      synchronousRateMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"synchronousRate",
        "args":{
          assetId:'',
          assetRate:'',
          broadbandNo:'',
          areaCode:''
        }
      },

      // 操作按钮 远程开关查询 按钮
      queryRemoteSwitchMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"queryRemoteSwitch",
        "args":{
          accountNo:''
        }
      },

      // 操作按钮 短信-创建拨号连接 按钮
      queryCreateConnectionSMSMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"queryCreateConnectionSMS",
        "args":{
          type:''
        }
      },

      // 操作按钮 短信-查看本地连接 按钮
      queryLocalConnectionSMSMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"queryLocalConnectionSMS",
        "args":{
          type:''
        }
      },

      // 是否为，智能组网，查询
      getIntelligentNetworkingMM:{
        "widgetCode":"sale_product",
        "widgetMethod":"getIntelligentNetworking",
        "args":{
          integrationId:'',
          regionId:'',
          inactiveFlag:true
        }
      },

      // 操作按钮 短信-测速 按钮
      queryTestConnectionSMSMM:{
        "widgetCode":"broadband_button",
        "widgetMethod":"queryTestConnectionSMS",
        "args":{
          content:''
        }
      },

      // 故障大小类查询
      queryFaultPhenomenonMM:{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"queryFaultPhenomenon",
        "args":{

        }
      },

      // 智能组网查询
      queryInternetActivityByCityMM:{
        "widgetCode":"broadband_ticket",
        "widgetMethod":"queryInternetActivityByCity",
        "args":{
          areaCode:''
        }
      },

      // 根据区域编码查询增值服务类别查询
      queryIBroadbandValueAddByCityMM:{
        "widgetCode":"broadband_ticket",
        "widgetMethod":"queryIBroadbandValueAddByCity",
        "args":{
          areaCode:''
        }
      },

      // 根据资产号码查询承诺区域
      promiseAreaQueryMM:{
        "widgetCode":"broadband_ticket",
        "widgetMethod":"promiseAreaQuery",
        "args":{
          areaCode:'',
          accessCode:''
        }
      },

      // 派单
      sendTicketMM:{
        "widgetCode":"broadband_ticket",
        "widgetMethod":"sendTicket",
        "args":{
          areaCode:'',
          accessCode:'',
          networkAccount:'',
          accountNumber:'',
          broadbandRate:'',
          integrationId:'',
          customerType:'',
          businessNo:'',
          callNo:'',
          codeType:'',
          receptFlag:'',
          receptMode:'',
          userIdentify:'',
          receptOper:'',
          urgent:'',
          accountName:'',
          circuitNumber:'',
          customerLevel:'',
          custLevel:'',
          contactor:'',
          address:'',
          tapeId:'',
          accBrand:'',
          accessLineType:'',
          lineType:'',
          remark:'',
          complaintCauseDesc:'',
          preDetailInfo:'',
          areaName:'',
          bigName:'',
          bigValue:'',
          smallName:'',
          smallValue:'',
          serviceItems:'',
        }
      },
      // 同客户下的宽带
      getSameAccountNobroadBandAssetMM:{
        "widgetCode":"same_accountNo",
        "widgetMethod":"getSameAccountNobroadBandAsset",
        "args":{
          accountNumber:'',
          callNo:''
        }
      },
      //  星级: 星级权益
      getCrmPointMM:{
        "widgetCode":"crm_point",
        "widgetMethod":"getCrmPoint",
        "args":{
          areaCode:'',
          codeType:'',
          codeValue:'',
          passwordFlag:'0',
          accountNumber:'',
          condItemID:'',
          condItemValue:''
        }
      },

      /*宽带故障处理-------------------------------------------------------------------完*/
    },
    page:{
      sameAccountNobroadBandAsset:'',
      queryBroadbandInfo:'',
      query24HOperation:'',
      queryQuestionByTypeCode:'',
      queryQuestionByTypePhenomenon:'',
      queryErrorCode:'',
      //按钮
      //  密码验证 按钮
      boradbandFaulTitle:'vFaultHandling',
      //  密码验证 按钮
      passwordVerify:'',
      //  密码重置 按钮
      passwordReset:'',

      //  路由器设置 按钮
      sendRouterConfig: '',

      //  速率同步 按钮
      synchronousRate:'',

      //  短信-创建拨号连接 按钮type
      queryCreateConnectionSMS: '',

      //  短信-查看本地连接 按钮
      queryLocalConnectionSMS:'',

      //  短信-测速 按钮
      queryTestConnectionSMS: '',

      queryQuestionById:'',
      getIntelligentNetworking:'',
      getCrmPoint:'',
      queryRemoteSwitch:'',
      rightStatus: false,
      showStatusText:{
        icon:'',
        text:''
      },
      diagnosisRadio: '',
      questionOneRadio: '',
      questionTwoRadio: '',
      questionListOne: '',
      questionListTwo: '',
      dealWay: '',
      oneKeyRepair: '',
      queryFaultPhenomenon: '',
      smallFaultKind: '',
      queryInternetActivityByCity: '',
      //根据区域编码查询增值服务类别查询
      queryIBroadbandValueAddByCity: '',
      //根据资产号码查询承诺区域
      promiseAreaQuery: '',
      routerChooseStatus: '',
      // 日志
      recordingLog: '',
      // 日志
      sendTicket: ''
    }
  },
  mutations: {
    //查询宽带列表
    SET_SAME_ACCOUNTNO_BROADBAND_ASSETACTION(state, data){
      state.page.sameAccountNobroadBandAsset='';
      if(data.editor.callNumberMM.accountNumber){
        state.editor.getSameAccountNobroadBandAssetMM.args.accountNumber=data.editor.callNumberMM.accountNumber;
      }else{
        state.editor.getSameAccountNobroadBandAssetMM.args.accountNumber='';
      }
      state.editor.getSameAccountNobroadBandAssetMM.args.callNo=data.editor.businessCallNumber;
    },
    GET_SAME_ACCOUNTNO_BROADBAND_ASSETACTION(state,res){
      state.page.sameAccountNobroadBandAsset=res.body.data;
    },
    //线路类型、付费速率
    SET_QUERY_BROADBAND_INFO(state, data){
      state.page.queryBroadbandInfo='';
      if(data.editor.callNumberMM.commonServiceId){
        state.editor.queryBroadbandInfoMM.args.networkAccount=data.editor.callNumberMM.commonServiceId;
      }else{
        state.editor.queryBroadbandInfoMM.args.networkAccount='';
      }
      if(data.editor.callNumberMM.areaCode){
        state.editor.queryBroadbandInfoMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.queryBroadbandInfoMM.args.areaCode='';
      }
      if(data.editor.callNumberMM.status){
        state.editor.queryBroadbandInfoMM.args.assetStatus=data.editor.callNumberMM.status;
      }else{
        state.editor.queryBroadbandInfoMM.args.assetStatus='';
      }
      if(data.editor.callNumberMM.assetId){
        state.editor.queryBroadbandInfoMM.args.assetId=data.editor.callNumberMM.assetId;
      }else{
        state.editor.queryBroadbandInfoMM.args.assetId='';
      }
      if(data.editor.callNumberMM.integrationId){
        state.editor.queryBroadbandInfoMM.args.integrationId=data.editor.callNumberMM.integrationId;
      }else{
        state.editor.queryBroadbandInfoMM.args.integrationId='';
      }
      if(data.editor.callNumberMM.circuitNumber){
        state.editor.queryBroadbandInfoMM.args.circuitNumber=data.editor.callNumberMM.circuitNumber;
      }else{
        state.editor.queryBroadbandInfoMM.args.circuitNumber='';
      }
      //在途故障
      if(data.page.homepage.packageCase){
        state.editor.queryBroadbandInfoMM.args.isFault='0';
        if(data.page.homepage.packageCase['workOrder']){
          for(let item in data.page.homepage.packageCase['workOrder']){
            if(data.page.homepage.packageCase['workOrder'][item]['productName']=='故障单' && data.page.homepage.packageCase['workOrder'][item]['billNum']>0){
              state.editor.queryBroadbandInfoMM.args.isFault='1';
              return;
            }else{
              state.editor.queryBroadbandInfoMM.args.isFault=='0'?state.editor.queryBroadbandInfoMM.args.isFault='0':state.editor.queryBroadbandInfoMM.args.isFault;
            }
          }
        }else{
          state.editor.queryBroadbandInfoMM.args.isFault=='0';
        }
      }else{
        state.editor.queryBroadbandInfoMM.args.isFault='0';
      }
      //区域性故障
      if(data.page.homepage.packageCase){
        state.editor.queryBroadbandInfoMM.args.isAreaCause='0';
        if(data.page.homepage.packageCase['workOrder']){
          for(let item in data.page.homepage.packageCase['workOrder']){
            if(data.page.homepage.packageCase['workOrder'][item]['productCode']=='ONE_LAYER_BROADBAND_FAULT_COMM_CAUSE_BUSI'){
              state.editor.queryBroadbandInfoMM.args.isAreaCause='1';
              return;
            }else{
              state.editor.queryBroadbandInfoMM.args.isAreaCause=='0'?state.editor.queryBroadbandInfoMM.args.isAreaCause='0':state.editor.queryBroadbandInfoMM.args.isAreaCause;
            }
          }
        }else{
          state.editor.queryBroadbandInfoMM.args.isAreaCause=='0';
        }
      }else{
        state.editor.queryBroadbandInfoMM.args.isAreaCause='0';
      }
    },
    GET_QUERY_BROADBAND_INFO(state,res){
      state.page.queryBroadbandInfo=res.body.data;
    },

    //24小时操作轨迹
    SET_QUERY_24H_OPERATION(state,data){
      state.page.query24HOperation='';
      if(data.editor.callNumberMM.commonServiceId){
        state.editor.query24HOperationMM.args.broadbandNo=data.editor.callNumberMM.commonServiceId;
      }else{
        state.editor.query24HOperationMM.args.broadbandNo='';
      }
    },
    GET_QUERY_24H_OPERATION(state,res){
      state.page.query24HOperation=res.body.data;
    },
    //错误认证查询
    SET_QUERY_ERROR_CODE(state,data){
      if(data.editor.callNumberMM.areaCode){
        state.editor.queryErrorCodeMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.queryErrorCodeMM.args.areaCode='';
      }
    },
    GET_QUERY_ERROR_CODE(state,res){
      state.page.queryErrorCode=res.body.data;
    },
    //智能诊断错误代码查询处理
    SET_QUERY_QUESTION_BY_TYPE(state,data){

      state.editor.queryQuestionByTypeMM.args.type='';
      if(data){
        state.editor.queryQuestionByTypeMM.args.type=data;
      }else{
        state.editor.queryQuestionByTypeMM.args.type='';
      }
    },
    GET_QUERY_QUESTION_BY_CODE_TYPE(state,res){
      state.page.queryQuestionByTypeCode=res.body.data;
    },
    GET_QUERY_QUESTION_BY_PHENOMENON_TYPE(state,res){
      state.page.queryQuestionByTypePhenomenon=res.body.data;
    },
    //根据问题编号查问题选项
    SET_QUERY_QUESTION_BY_ID(state,data){
      if(data){
        state.editor.queryQuestionByIdMM.args.id=data;
      }else{
        state.editor.queryQuestionByIdMM.args.id='';
      }
    },
    GET_QUERY_QUESTION_BY_ID(state,res){
      state.page.queryQuestionById=res.body.data;
    },
    // 是否为，智能组网，查询
    SET_INTELLIGENT_NETWORKING(state,data){
      if(data.editor.callNumberMM.integrationId){
        state.editor.getIntelligentNetworkingMM.args.integrationId=data.editor.callNumberMM.integrationId;
      }else{
        state.editor.getIntelligentNetworkingMM.args.integrationId='';
      }
      if(data.editor.callNumberMM.areaCode){
        state.editor.getIntelligentNetworkingMM.args.regionId=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.getIntelligentNetworkingMM.args.regionId='';
      }
    },
    GET_INTELLIGENT_NETWORKING(state,res){
      state.page.getIntelligentNetworking=res.body.data;
    },
    // 积分权益明细查询
    SET_CRM_POINT(state,data){
      if(data.editor.callNumberMM.commonServiceId){
        state.editor.getCrmPointMM.args.codeValue=data.editor.callNumberMM.commonServiceId;
      }else{
        state.editor.getCrmPointMM.args.codeValue='';
      }
      if(data.editor.callNumberMM.accountNumber){
        state.editor.getCrmPointMM.args.accountNumber=data.editor.callNumberMM.accountNumber;
      }else{
        state.editor.getCrmPointMM.args.accountNumber='';
      }
      if(data.editor.callNumberMM.areaCode){
        state.editor.getCrmPointMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.getCrmPointMM.args.areaCode='';
      }
      if(data.editor.callNumberMM.accountDeviceType){
        state.editor.getCrmPointMM.args.codeType=data.editor.callNumberMM.accountDeviceType;
      }else{
        state.editor.getCrmPointMM.args.codeType='';
      }
      state.editor.getCrmPointMM.args.passwordFlag='0';
      state.editor.getCrmPointMM.args.condItemID='6001040501';
      state.editor.getCrmPointMM.args.condItemValue='6001040501';
    },
    GET_CRM_POINT(state,res){
      state.page.getCrmPoint=res.body.data;
    },

    //远程开关查询
    SET_QUERY_REMOTE_SWITCH(state,data){
      if(data.editor.callNumberMM.commonServiceId){
        state.editor.queryRemoteSwitchMM.args.accountNo=data.editor.callNumberMM.commonServiceId;
      }else{
        state.editor.queryRemoteSwitchMM.args.accountNo='';
      }
    },
    GET_QUERY_REMOTE_SWITCH(state,res){
      state.page.queryRemoteSwitch=res.body.data;
    },

  //  智能诊断
    SET_INTELLIGENT_DIAGNOSIS(state,data){
      state.page.showStatusText.icon=data.icon;
      state.page.showStatusText.text=data.text;
    },

    // 操作按钮 一键修复 按钮
    SET_ONEKEY_REPAIR(state,data){
      if(data.editor.callNumberMM.commonServiceId){
        state.editor.oneKeyRepairMM.args.broadbandNo=data.editor.callNumberMM.commonServiceId;
      }else{
        state.editor.oneKeyRepairMM.args.broadbandNo='';
      }
      if(data.editor.callNumberMM.areaCode){
        state.editor.oneKeyRepairMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.oneKeyRepairMM.args.areaCode='';
      }
      if(data.editor.enterCase.accountCode){
        state.editor.oneKeyRepairMM.args.staffId=data.editor.enterCase.accountCode;
      }else{
        state.editor.oneKeyRepairMM.args.staffId='';
      }
      if(data.editor.enterCase.name){
        state.editor.oneKeyRepairMM.args.staffName=data.editor.enterCase.name;
      }else{
        state.editor.oneKeyRepairMM.args.staffName='';
      }
      if(data.editor.callNumberMM.integrationId){
        state.editor.oneKeyRepairMM.args.integrationId=data.editor.callNumberMM.integrationId;
      }else{
        state.editor.oneKeyRepairMM.args.integrationId='';
      }
      if(data.editor.callNumberMM.assetId){
        state.editor.oneKeyRepairMM.args.assetId=data.editor.callNumberMM.assetId;
      }else{
        state.editor.oneKeyRepairMM.args.assetId='';
      }
      state.editor.oneKeyRepairMM.args.terminalType=state.page.queryBroadbandInfo.terminalType;
    },
    GET_ONEKEY_REPAIR(state,res){
      state.page.oneKeyRepair=res.body.data;
    },

    //  密码验证 按钮
    SET_PASSWORD_VERIFY(state,data){
      if(data[0].editor.callNumberMM.commonServiceId) state.editor.oneKeyRepairMM.args.accountType=data[0].editor.callNumberMM.commonServiceId;
      else state.editor.oneKeyRepairMM.args.accountType= '';
      state.editor.oneKeyRepairMM.args.accountID='2000002';
      state.editor.oneKeyRepairMM.args.password=data[1];
      state.editor.oneKeyRepairMM.args.pwdType='pwdType';
    },
    GET_PASSWORD_VERIFY(state,res){
      state.page.passwordVerify=res.body.data;
    },

    //  密码重置 按钮
    SET_PASSWORD_RESET(state,data){
      if(data.editor.callNumberMM.commonServiceId) state.editor.passwordVerifyMM.args.accountType=data.editor.callNumberMM.commonServiceId;
      else state.editor.passwordVerifyMM.args.accountType= '';
      state.editor.passwordVerifyMM.args.accountID='2000002';
      state.editor.passwordVerifyMM.args.newPassword='2000002';
      if(data.editor.callNumberMM.areaCode){
        state.editor.passwordVerifyMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.passwordVerifyMM.args.areaCode='';
      }
    },
    GET_PASSWORD_RESET(state,res){
      state.page.passwordReset=res.body.data;
    },

    //  路由器设置 按钮
    SET_SEND_ROUTER_CONFIG(state,data){
      state.editor.sendRouterConfigMM.args.routerId='';
      state.editor.sendRouterConfigMM.args.routerType='';
    },
    GET_SEND_ROUTER_CONFIG(state,res){
      state.page.sendRouterConfig=res.body.data;
    },

    //  速率同步 按钮
    SET_SYNCHRONOUS_RATE(state,data){
      if(data.editor.callNumberMM.commonServiceId) state.editor.synchronousRateMM.args.broadbandNo=data.editor.callNumberMM.commonServiceId;
      else state.editor.synchronousRateMM.args.broadbandNo= '';
      if(data.editor.callNumberMM.areaCode) state.editor.synchronousRateMM.args.areaCode=data.editor.callNumberMM.areaCode;
      else state.editor.synchronousRateMM.args.areaCode= '';
      if(data.editor.callNumberMM.integrationId) state.editor.synchronousRateMM.args.assetId=data.editor.callNumberMM.integrationId;
      else state.editor.synchronousRateMM.args.assetId= '';
      state.editor.synchronousRateMM.args.assetRate='';
    },
    GET_SYNCHRONOUS_RATE(state,res){
      state.page.synchronousRate=res.body.data;
    },

    //  短信-创建拨号连接 按钮type
    SET_QUERY_CREATE_CONNECTION_SMS(state,data){
      state.editor.queryCreateConnectionSMSMM.args.type='';
    },
    GET_QUERY_CREATE_CONNECTION_SMS(state,res){
      state.page.queryCreateConnectionSMS=res.body.data;
    },

    //  短信-查看本地连接 按钮
    SET_QUERY_LOCAL_CONNECTION_SMS(state,data){
      state.editor.queryLocalConnectionSMSMM.args.type='';
    },
    GET_QUERY_LOCAL_CONNECTION_SMS(state,res){
      state.page.queryLocalConnectionSMS=res.body.data;
    },

    //  短信-测速 按钮
    SET_QUERY_TEST_CONNECTION_SMS(state,data){
      state.editor.queryTestConnectionSMSMM.args.type='';
    },
    GET_QUERY_TEST_CONNECTION_SMS(state,res){
      state.page.queryTestConnectionSMS=res.body.data;
    },

    //  故障大小类查询
    SET_QUERY_FAULT_PHENOMENON(state,data){
    },
    GET_QUERY_FAULT_PHENOMENON(state,res){
      state.page.queryFaultPhenomenon=res.body.data;
    },
    SET_SMALL_FAULT_KIND(state,data){
      let smallKind='';
      if(data){
        for (let a in state.page.queryFaultPhenomenon){
          if(state.page.queryFaultPhenomenon[a].value==data){
            smallKind = state.page.queryFaultPhenomenon[a].list;
          }
        }
      }
      state.page.smallFaultKind=smallKind;
    },

    SET_QUERY_INTERNET_ACTIVITY_BY_CITY(state,data){
      if(data.editor.callNumberMM.areaCode){
        state.editor.queryInternetActivityByCityMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.queryInternetActivityByCityMM.args.areaCode='';
      }
    },

    GET_QUERY_INTERNET_ACTIVITY_BY_CITY(state,res){
      state.page.queryInternetActivityByCity=res.body.data;
    },

    //根据区域编码查询增值服务类别查询
    SET_QUERY_I_BROADBAND_VALUE_ADD_BY_CITY(state,data){
      if(data.editor.callNumberMM.areaCode){
        state.editor.queryIBroadbandValueAddByCityMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.queryIBroadbandValueAddByCityMM.args.areaCode='';
      }
    },
    GET_QUERY_I_BROADBAND_VALUE_ADD_BY_CITY(state,res){
      state.page.queryIBroadbandValueAddByCity=res.body.data;
    },

    //根据资产号码查询承诺区域
    SET_PROMISE_AREA_QUERY(state,data){
      if(data.editor.callNumberMM.areaCode){
        state.editor.promiseAreaQueryMM.args.areaCode=data.editor.callNumberMM.areaCode;
      }else{
        state.editor.promiseAreaQueryMM.args.areaCode='';
      }
      if(data.editor.callNumberMM){
        if(data.editor.callNumberMM.accountDeviceType=='26'){
          state.editor.promiseAreaQueryMM.args.accessCode=data.editor.callNumberMM.circuitNumber;
        }else{
          state.editor.promiseAreaQueryMM.args.accessCode=data.editor.callNumberMM.commonServiceId;
        }
      }else{
        state.editor.promiseAreaQueryMM.args.accessCode='';
      }
    },
    GET_PROMISE_AREA_QUERY(state,res){
      state.page.promiseAreaQuery=res.body.data;
    },


    SET_SEND_TICKET(state,data){
      if(data[0].editor.callNumberMM.areaCode){
        state.editor.sendTicketMM.args.areaCode=data[0].editor.callNumberMM.areaCode;
      }else{
        state.editor.sendTicketMM.args.areaCode='';
      }
      if(data[0].editor.callNumberMM){
        if(data[0].editor.callNumberMM.accountDeviceType=='26'){
          state.editor.sendTicketMM.args.accessCode=data[0].editor.callNumberMM.circuitNumber;
        }else{
          state.editor.sendTicketMM.args.accessCode=data[0].editor.callNumberMM.commonServiceId;
        }
      }else{
        state.editor.sendTicketMM.args.accessCode='';
      }
      if(data[0].editor.callNumberMM.networkAccount){
        state.editor.sendTicketMM.args.networkAccount=data[0].editor.callNumberMM.networkAccount;
      }else{
        state.editor.sendTicketMM.args.networkAccount='';
      }
      if(data[0].editor.callNumberMM.accountNumber){
        state.editor.sendTicketMM.args.accountNumber=data[0].editor.callNumberMM.accountNumber;
      }else{
        state.editor.sendTicketMM.args.accountNumber='';
      }
      if(data[0].editor.callNumberMM.broadbandRate){
        state.editor.sendTicketMM.args.broadbandRate=data[0].editor.callNumberMM.broadbandRate;
      }else{
        state.editor.sendTicketMM.args.broadbandRate='';
      }
      if(data[0].editor.callNumberMM.integrationId){
        state.editor.sendTicketMM.args.integrationId=data[0].editor.callNumberMM.integrationId;
      }else{
        state.editor.sendTicketMM.args.integrationId='';
      }
      if(data[0].page.homepage.packageHeadMessage.customerType){
        state.editor.sendTicketMM.args.customerType=data[0].page.homepage.packageHeadMessage.customerType;
      }else{
        state.editor.sendTicketMM.args.customerType='';
      }
      if(data[0].editor.businessCallNumber){
        state.editor.sendTicketMM.args.businessNo=data[0].editor.businessCallNumber;
      }else{
        state.editor.sendTicketMM.args.businessNo='';
      }
      if(data[0].editor.callNumberMM.areaCode){
        state.editor.sendTicketMM.args.callNo=data[0].editor.callNumberMM.areaCode;
      }else{
        state.editor.sendTicketMM.args.callNo='';
      }
      if(data[0].editor.callNumberMM.codeType){
        state.editor.sendTicketMM.args.codeType=data[0].editor.callNumberMM.codeType;
      }else{
        state.editor.sendTicketMM.args.codeType='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.receptFlag=data[1].receptFlag;
      }else{
        state.editor.sendTicketMM.args.receptFlag='';
      }
      state.editor.sendTicketMM.args.receptMode='1';
      if(data[0].editor.callNumberMM.userIdentify){
        state.editor.sendTicketMM.args.userIdentify=data[0].editor.callNumberMM.userIdentify;
      }else{
        state.editor.sendTicketMM.args.userIdentify='';
      }
      if(data[0].editor.enterCase.accountCode){
        state.editor.sendTicketMM.args.receptOper=data[0].editor.enterCase.accountCode;
      }else{
        state.editor.sendTicketMM.args.receptOper='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.urgent=data[1].urgent;
      }else{
        state.editor.sendTicketMM.args.urgent='';
      }
      if(data[0].editor.callNumberMM.accountName){
        state.editor.sendTicketMM.args.accountName=data[0].editor.callNumberMM.accountName;
      }else{
        state.editor.sendTicketMM.args.accountName='';
      }
      if(data[0].editor.callNumberMM.circuitNumber){
        state.editor.sendTicketMM.args.circuitNumber=data[0].editor.callNumberMM.circuitNumber;
      }else{
        state.editor.sendTicketMM.args.circuitNumber='';
      }
      if(data[0].page.homepage.accountBundle.ticker){
        state.editor.sendTicketMM.args.customerLevel=data[0].page.homepage.accountBundle.ticker;
      }else{
        state.editor.sendTicketMM.args.customerLevel='';
      }
      if(data[0].page.homepage.accountBundle.star){
        state.editor.sendTicketMM.args.custLevel=data[0].page.homepage.accountBundle.star;
      }else{
        state.editor.sendTicketMM.args.custLevel='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.contactor=data[1].name;
      }else{
        state.editor.sendTicketMM.args.contactor='';
      }
      if(data[0].editor.callNumberMM.serviceAddress){
        state.editor.sendTicketMM.args.address=data[0].editor.callNumberMM.serviceAddress;
      }else{
        state.editor.sendTicketMM.args.address='';
      }
      if(data[0].editor.recordId){
        state.editor.sendTicketMM.args.tapeId=data[0].editor.recordId;
      }else{
        state.editor.sendTicketMM.args.tapeId='';
      }
      if(data[0].page.homepage.accountBundle.accBrand){
        state.editor.sendTicketMM.args.accBrand=data[0].page.homepage.accountBundle.accBrand;
      }else{
        state.editor.sendTicketMM.args.accBrand='';
      }
      if(data[0].page.homepage.subAssetPropertyPublic){
        let accessLineType = '';
        for(let a in data[0].page.homepage.subAssetPropertyPublic){
          if(data[0].page.homepage.subAssetPropertyPublic[a].displayName=='接入线类型'){
            accessLineType = data[0].page.homepage.subAssetPropertyPublic[a].value;
          }
        }
        state.editor.sendTicketMM.args.accessLineType = accessLineType;
      }else{
        state.editor.sendTicketMM.args.accessLineType = '';
      }
      if(data[0].page.homepage.subAssetPropertyPublic){
        let accessLineType = '';
        for(let a in data[0].page.homepage.subAssetPropertyPublic){
          if(data[0].page.homepage.subAssetPropertyPublic[a].displayName=='线路类型'){
            accessLineType = data[0].page.homepage.subAssetPropertyPublic[a].value;
          }
        }
        state.editor.sendTicketMM.args.lineType = accessLineType;
      }else{
        state.editor.sendTicketMM.args.lineType='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.remark=data[1].remark;
      }else{
        state.editor.sendTicketMM.args.remark='';
      }
      if(data[0].page.homepage.subAssetPropertyPublic){
        state.editor.sendTicketMM.args.complaintCauseDesc=data[0].page.homepage.accountBundle.accBrand;
      }else{
        state.editor.sendTicketMM.args.complaintCauseDesc='';
      }
      if(data[0].page.homepage.subAssetPropertyPublic){
        state.editor.sendTicketMM.args.preDetailInfo=data[0].page.homepage.accountBundle.accBrand;
      }else{
        state.editor.sendTicketMM.args.preDetailInfo='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.areaName=data[1].btnKey;
      }else{
        state.editor.sendTicketMM.args.areaName='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.bigName=data[1].bigName;
      }else{
        state.editor.sendTicketMM.args.bigName='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.bigValue=data[1].bigValue;
      }else{
        state.editor.sendTicketMM.args.bigValue='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.smallName=data[1].smallName;
      }else{
        state.editor.sendTicketMM.args.smallName='';
      }
      if(data[1]){
        state.editor.sendTicketMM.args.smallValue=data[1].smallValue;
      }else{
        state.editor.sendTicketMM.args.smallValue='';
      }
      if(state.page.queryIBroadbandValueAddByCity.fieldValue){
        state.editor.sendTicketMM.args.serviceItems=state.page.queryIBroadbandValueAddByCity.fieldValue;
      }else{
        state.editor.sendTicketMM.args.serviceItems='';
      }
    },
    GET_SEND_TICKET(state,res){
      state.page.sendTicket=res.body.data;
    },
  },
  getters: {
    //宽带标题
    boradbandFaulTitle (state) {
      return state.page.boradbandFaulTitle;
    },
    sameAccountNobroadBandAsset (state) {
      return state.page.sameAccountNobroadBandAsset;
    },
    queryBroadbandInfo (state) {
      return state.page.queryBroadbandInfo;
    },
    query24HOperation (state) {
      return state.page.query24HOperation;
    },
    queryQuestionByTypePhenomenon (state) {
      return state.page.queryQuestionByTypePhenomenon;
    },
    queryQuestionByTypeCode (state) {
      return state.page.queryQuestionByTypeCode;
    },
    queryErrorCode (state) {
      return state.page.queryErrorCode;
    },
    queryQuestionById (state) {
      return state.page.queryQuestionById;
    },
    getCrmPoint (state) {
      return state.page.getCrmPoint;
    },
    queryRemoteSwitch (state) {
      return state.page.queryRemoteSwitch;
    },
    rightStatus (state) {
      return state.page.rightStatus;
    },
    showStatusText (state) {
      return state.page.showStatusText;
    },
    questionListOne (state) {
      return state.page.questionListOne;
    },
    //处理结果
    dealWay (state) {
      return state.page.dealWay;
    },
    //一键修复
    oneKeyRepair (state) {
      return state.page.oneKeyRepair;
    },

    //  密码验证 按钮
    passwordVerify (state) {
      return state.page.passwordVerify;
    },

    //  密码重置 按钮
    passwordReset (state) {
      return state.page.passwordReset;
    },

    //  路由器设置 按钮
    sendRouterConfig (state) {
      return state.page.sendRouterConfig;
    },

    //  速率同步 按钮
    synchronousRate (state) {
      return state.page.synchronousRate;
    },

    //  短信-创建拨号连接 按钮type
    queryCreateConnectionSMS (state) {
      return state.page.queryCreateConnectionSMS;
    },

    //  短信-查看本地连接 按钮
    queryLocalConnectionSMS (state) {
      return state.page.queryLocalConnectionSMS;
    },

    //  短信-测速 按钮
    queryTestConnectionSMS (state) {
      return state.page.queryTestConnectionSMS;
    },
    //故障大小类查询
    queryFaultPhenomenon (state) {
      return state.page.queryFaultPhenomenon;
    },
    smallFaultKind (state) {
      return state.page.smallFaultKind;
    },
    queryInternetActivityByCity (state) {
      return state.page.queryInternetActivityByCity;
    },

    queryIBroadbandValueAddByCity (state) {
      return state.page.queryIBroadbandValueAddByCity;
    },

    //根据资产号码查询承诺区域
    promiseAreaQuery (state) {
      return state.page.promiseAreaQuery;
    },
    diagnosisRadio (state) {
      return state.page.diagnosisRadio;
    },
    questionOneRadio (state) {
      return state.page.questionOneRadio;
    },
    questionTwoRadio (state) {
      return state.page.questionTwoRadio;
    },
    routerChooseStatus (state) {
      return state.page.routerChooseStatus;
    },
    getIntelligentNetworking (state) {
      if(state.page.getIntelligentNetworking=='0'){
        return '是';
      }else{
        return '否';
      }
    },
    recordingLog(state){
      return state.page.recordingLog;
    }
  },
  actions: {
    //诊断报告问题选择
    clearBeoadBandailure({ state, commit, rootState}){

    },
    questionListFind({ state, commit, rootState},num){
      //清除第二个问题
      state.page.queryQuestionById='';
      state.page.questionListOne=state.page.queryBroadbandInfo.resultList[num];
      let list = state.page.queryBroadbandInfo.resultList;
      let item = state.page.queryBroadbandInfo.resultList[num];
      //判断是否为单个
      if(item){
        if(item.optionList.length==1){
          //判断是否路由
          if(item.optionList[0]['isRoute']=='1'){
            //判断是否需要请求新街口
            if(item.optionList[0]['isNext']=='0'){
              state.page.dealWay=list[list.length-1]['optionList'][0];
              console.log(state.page.dealWay)
            }else{

            }
          }else{
            state.page.dealWay='';
          }
        }else{
          state.page.dealWay='';
        }
      }

    },
    //
    questionListChooseNext({ state, commit, rootState},item){
      state.page.queryQuestionById='';
      if(item[1]){
        if(item[0]=='code'){
          state.page.questionListOne=state.page.queryQuestionByTypeCode[item[1]];
          console.log()
          if(state.page.questionListOne.hasNext=='0'){
            state.page.dealWay=state.page.questionListOne.optionList[0];
          }else{
            state.page.dealWay='';
          }
        }else{
          state.page.questionListOne=state.page.queryQuestionByTypePhenomenon[item[1]];
          if(state.page.questionListOne.hasNext=='0'){
            state.page.dealWay=state.page.questionListOne.optionList[0];
          }else{
            state.page.dealWay='';
          }
        }
      }else{

      }
    },
    questionListNext({dispatch, state, commit, rootState},data){
      //清除第二个问题
      state.page.queryQuestionById='';

      let item = state.page.questionListOne.optionList[data];
      let list = state.page.queryBroadbandInfo.resultList;

      if(item){
        //判断是否用路由的东西
        if(item.isRoute=='1'){
          state.page.dealWay=list[list.length-1]['optionList'][0];
        }else{
          //判断是否调用接口 区新的数据
          if(item.isNext=='1') {
            //调用
            if (item.OPTIONID) dispatch('queryQuestionByIdActions', item.OPTIONID)
            else dispatch('queryQuestionByIdActions', item.id)
          } else{
          //  不调用
            state.page.dealWay=item;
          }
        }
      }else{

      }
    },
    questionListTwoNext({dispatch, state, commit, rootState},data){
      let item = state.page.queryQuestionById.optionList[data];
      let list = state.page.queryBroadbandInfo.resultList;

      if(item){
        //判断是否用路由的东西
        if(item.isRoute=='1' && list[list.length-1]['optionList']){
          state.page.dealWay=list[list.length-1]['optionList'][0];
        }else{
          //判断是否调用接口 区新的数据
          if(item.isNext=='1'){
            //调用
            dispatch('queryQuestionByIdActions',item.OPTIONID);
          }else{
            //不调用
            state.page.dealWay=item;
          }
        }
      }else{

      }
    },
    getSameAccountNobroadBandAssetAction({dispatch,state, commit, rootState}){
      commit('SET_SAME_ACCOUNTNO_BROADBAND_ASSETACTION',rootState);
      api.widgetApi('/same_accountNo/?__dew_token__='+rootState.editor.token,state.editor.getSameAccountNobroadBandAssetMM).then(
        res=>{
          commit('GET_SAME_ACCOUNTNO_BROADBAND_ASSETACTION',res);
          dispatch('queryBroadbandInfoActions');
        }
      );
    },
    //线路类型、付费速率
    queryBroadbandInfoActions({ state, commit, rootState}){
      commit('SET_QUERY_BROADBAND_INFO',rootState);
      api.widgetApi('/broadband_malfunction/?__dew_token__='+rootState.editor.token,state.editor.queryBroadbandInfoMM).then(
        res=>{
          commit('GET_QUERY_BROADBAND_INFO',res);
        }
      );
    },
    //24小时操作轨迹
    query24HOperationActions({state, commit, rootState}){
      commit('SET_QUERY_24H_OPERATION',rootState);
      api.widgetApi('/broadband_malfunction/?__dew_token__='+rootState.editor.token,state.editor.query24HOperationMM).then(
        res=>{
          commit('GET_QUERY_24H_OPERATION',res);
        }
      );
    },
    //错误认证查询
    queryErrorCodeActions({state, commit, rootState}){
      commit('SET_QUERY_ERROR_CODE',rootState);
      api.widgetApi('/broadband_malfunction/?__dew_token__='+rootState.editor.token,state.editor.queryErrorCodeMM).then(
        res=>{
          commit('GET_QUERY_ERROR_CODE',res);
        }
      );
    },
    //智能诊断错误代码查询处理
    queryQuestionByTypeActions({state, commit, rootState},data){
      let tag = {
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"queryQuestionByType",
        "args":{
          type:''
        }
      }
      tag.args.type = 'phenomenon';
      api.widgetApi('/broadband_malfunction/?__dew_token__='+rootState.editor.token,{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"queryQuestionByType",
        "args":{
          type:'phenomenon'
        }
      }).then(
        res=>{
          commit('GET_QUERY_QUESTION_BY_PHENOMENON_TYPE',res);
        }
      );

      tag.args.type = 'code';
      api.widgetApi('/broadband_malfunction/?__dew_token__='+rootState.editor.token,{
        "widgetCode":"broadband_malfunction",
        "widgetMethod":"queryQuestionByType",
        "args":{
          type:'code'
        }
      }).then(
        res=>{
          commit('GET_QUERY_QUESTION_BY_CODE_TYPE',res);
        }
      );
    },
    //根据问题编号查问题选项
    queryQuestionByIdActions({state, commit, rootState},data){
      console.log(data)
      commit('SET_QUERY_QUESTION_BY_ID',data);
      api.widgetApi('/broadband_malfunction/?__dew_token__='+rootState.editor.token,state.editor.queryQuestionByIdMM).then(
        res=>{
          commit('GET_QUERY_QUESTION_BY_ID',res);
        }
      );
    },
    // 是否为，智能组网，查询
    getIntelligentNetworkingActions({state, commit, rootState}){
      commit('SET_INTELLIGENT_NETWORKING',rootState);
      api.widgetApi('/sale_product/?__dew_token__='+rootState.editor.token,state.editor.getIntelligentNetworkingMM).then(
        res=>{
          commit('GET_INTELLIGENT_NETWORKING',res);
        }
      );
    },
    // 积分权益明细查询
    getCrmPointActions({state, commit, rootState}){
      commit('SET_CRM_POINT',rootState);
      api.widgetApi('/crm_point/?__dew_token__='+rootState.editor.token,state.editor.getCrmPointMM).then(
        res=>{
          commit('GET_CRM_POINT',res);
        }
      );
    },
    // 远程开关查询
    queryRemoteSwitchActions({state, commit, rootState}){
      console.log('queryRemoteSwitchActions')
      commit('SET_QUERY_REMOTE_SWITCH',rootState);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.queryRemoteSwitchMM).then(
        res=>{
          if(res){
            state.rightStatus= false;
          }else{
            state.rightStatus= true;
          }
          commit('GET_QUERY_REMOTE_SWITCH',res);
        }
      );
    },
    // 智能诊断
    intelligentDiagnosisActions({state, commit, rootState},data){
      commit('SET_INTELLIGENT_DIAGNOSIS',data);
    },

    // 操作按钮 一键修复 按钮
    oneKeyRepairActions({dispatch,state, commit, rootState},item){
      commit('SET_ONEKEY_REPAIR',rootState);
      state.editor.oneKeyRepairMM.args.optType='4';
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.oneKeyRepairMM).then(
        res=>{
          commit('GET_ONEKEY_REPAIR',res);
        }
      )
    },

    // 操作按钮 一键修复 按钮 清理section
    oneKeyRepairSectionActions({dispatch,state, commit, rootState},item){
      commit('SET_ONEKEY_REPAIR',rootState);
      state.editor.oneKeyRepairMM.args.optType='1';
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.oneKeyRepairMM).then(
        res=>{
          commit('GET_ONEKEY_REPAIR',res);
        }
      )
    },

    //  密码验证 按钮
    passwordVerifyActions({state, commit, rootState},data){
      commit('SET_PASSWORD_VERIFY',[rootState,data]);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.passwordVerifyMM).then(
        res=>{
          if(res){
            Message({
              type:'warning',
              message:'验证失败'
            })

          }else{
            Message({
              type:'success',
              message:'验证成功'
            })
          }
          commit('GET_PASSWORD_VERIFY',res);
        }
      )
    },

    //  密码重置 按钮
    passwordResetActions({state, commit, rootState},data){
      commit('SET_PASSWORD_RESET',rootState);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.passwordResetMM).then(
        res=>{
          if(res){
            Message({
              type:'warning',
              message:'重置失败'
            })

          }else{
            Message({
              type:'success',
              message:'重置成功'
            })
          }
          commit('GET_PASSWORD_RESET',res);
        }
      )
    },

    //  路由器设置 按钮
    sendRouterConfigActions({state, commit, rootState}){
      commit('SET_SEND_ROUTER_CONFIG',rootState);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.sendRouterConfigMM).then(
        res=>{
          commit('GET_SEND_ROUTER_CONFIG',res);
        }
      )
    },

    //  速率同步 按钮
    synchronousRateActions({state, commit, rootState}){
      commit('SET_SYNCHRONOUS_RATE',rootState);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.synchronousRateMM).then(
        res=>{
          commit('GET_SYNCHRONOUS_RATE',res);
        }
      )
    },

    //  短信-创建拨号连接 按钮
    queryCreateConnectionSMSActions({state, commit, rootState}){
      commit('SET_QUERY_CREATE_CONNECTION_SMS',rootState);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.queryCreateConnectionSMSMM).then(
        res=>{
          commit('GET_QUERY_CREATE_CONNECTION_SMS',res);
        }
      )
    },

    //  短信-查看本地连接 按钮
    queryLocalConnectionSMSActions({state, commit, rootState}){
      commit('SET_QUERY_LOCAL_CONNECTION_SMS',rootState);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.queryLocalConnectionSMSMM).then(
        res=>{
          commit('GET_QUERY_LOCAL_CONNECTION_SMS',res);
        }
      )
    },

    //  短信-测速 按钮
    queryTestConnectionSMSActions({state, commit, rootState}){
      commit('SET_QUERY_TEST_CONNECTION_SMS',rootState);
      api.widgetApi('/broadband_button/?__dew_token__='+rootState.editor.token,state.editor.queryTestConnectionSMSMM).then(
        res=>{
          commit('GET_QUERY_TEST_CONNECTION_SMS',res);
        }
      )
    },



  //  故障大小类查询
    queryFaultPhenomenonActions({state, commit, rootState}){
      console.log('asdsa')
      api.widgetApi('/broadband_malfunction/?__dew_token__='+rootState.editor.token,state.editor.queryFaultPhenomenonMM).then(
        res=>{
          commit('GET_QUERY_FAULT_PHENOMENON',res);
        }
      )
    },

    changeSmallKind({state, commit, rootState},data){
      commit('SET_SMALL_FAULT_KIND',data);
    },
    //智能组网查询
    queryInternetActivityByCityActions({state, commit, rootState}){
      commit('SET_QUERY_INTERNET_ACTIVITY_BY_CITY',rootState);
      api.widgetApi('/broadband_ticket/?__dew_token__='+rootState.editor.token,state.editor.queryInternetActivityByCityMM).then(
        res=>{
          commit('GET_QUERY_INTERNET_ACTIVITY_BY_CITY',res);
        }
      )
    },
    //根据区域编码查询增值服务类别查询
    queryIBroadbandValueAddByCityActions({state, commit, rootState}){
      commit('SET_QUERY_I_BROADBAND_VALUE_ADD_BY_CITY',rootState);
      api.widgetApi('/broadband_ticket/?__dew_token__='+rootState.editor.token,state.editor.queryIBroadbandValueAddByCityMM).then(
        res=>{
          commit('GET_QUERY_I_BROADBAND_VALUE_ADD_BY_CITY',res);
        }
      )
    },
    //根据资产号码查询承诺区域
    promiseAreaQueryActions({state, commit, rootState}){
      commit('SET_PROMISE_AREA_QUERY',rootState);
      api.widgetApi('/broadband_ticket/?__dew_token__='+rootState.editor.token,state.editor.promiseAreaQueryMM).then(
        res=>{
          commit('GET_PROMISE_AREA_QUERY',res);
        }
      )
    },
  //  工单派发
    sendTicketActions({state, commit, rootState},data){

      commit('SET_SEND_TICKET',[rootState,data]);
      api.widgetApi('/broadband_ticket/?__dew_token__='+rootState.editor.token,state.editor.queryInternetActivityByCityMM).then(
        res=>{
          commit('GET_SEND_TICKET',res);
        }
      )
    },
    routerChoose({state, commit, rootState},[num,data]){
      state.page.questionListOne='';
      state.page.queryQuestionById='';
      state.page.routerChooseStatus=num;
      if(data) state.page.dealWay=data.optionList[0];
    },

    //打点日志
    recordingLogActions({dispatch,state, commit, rootState},data){
      if(data=='错误认证查询'){

        dispatch('queryErrorCodeActions')
        dispatch('popoverAlert','vBroadbandErrorAuthentication')

      }else if(data=='杀session'){
        dispatch('oneKeyRepairSectionActions');
        dispatch('popoverAlert','vOneButtonFix');
      }
      if(state.page.recordingLog.indexOf(data)<0){
        state.page.recordingLog+=data+';'
      }
    }
  }
};

export default broadbandailure
