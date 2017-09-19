/**
 * Created by Chris on 17/5/8.
 */
const editor = {
  //Side 呼入号码客户 基本信息
  personMM: {
      "widgetCode": "user_info",
      "widgetMethod":"getUserInfo",
      "args":{
        "callNo":"",
        "serviceId":"",
        "broadbandAccount":"",
        "accountNo":"",
        "contractNo":"",
        "idNo":"",
        "integratedNo":"",
        "assetNo":"",
        "snNo":"",
        "circuitNo":"",
        "groupNo":"",
        "name":"",
        "iccId":"",
        "specialServiceCode":"",
        "queryUnUse":"1",
        "deviceArea":"",
        "searchCity":""
      }
  },
  //Side 资产列表
  assetListMM:{
    "widgetCode":"asset_list",
    "widgetMethod":"getAssetList",
    "args":{
      "callNo":"",
      "serviceId": "",
      "broadbandAccount": "",
      "accountNo": "",
      "contractNo": "",
      "idNo": "",
      "integratedNo": "",
      "assetNo": "",
      "snNo": "",
      "circuitNo": "",
      "groupNo": "",
      "name": "",
      "iccId": "",
      "specialServiceCode": "",
      "queryUnUse": "",
      "deviceArea": "" //areaCode
    }
  },

  //Side 工具箱 获取
  getToolBoxMM:{
    "widgetCode":"tool_box",
    "widgetMethod":"getToolBox",
    "args":{
      "loginId":""
    }
  },

  //Side 工具箱 储存
  saveToolBoxMM:{
    "widgetCode":"tool_box",
    "widgetMethod":"saveToolBox",
    "args":{
      "loginId":"",
      "toolBoxs":[]
    }
  },

  //homePagePackage 客户画像
  personHeadMM: {
    "widgetCode":"customer_portrait",
    "widgetMethod":"getCustomerPortrait",
    "args":{
        "businessNo":"", //业务号码
        "businessType":"" // 0 type
    }
  },

  //homePagePackage客户 余额
  accountBundleMM: {
    "widgetCode":"account_bundle",
    "widgetMethod":"getAccountBundle",
    "args":{
      "accountNum":"",
      "contactFlag": "false", //待确定
      "areaCode":"", //待确定
      "productNum":"",
      "integratedNo":"", //1 或者 2 type,
      "codeType":"",
      "codeValue":""
    }
  },
  //homePagePackage客户资产
  customerAssetMM: {
    "widgetCode":"customer_asset",
    "widgetMethod":"getCustomerAsset",
    "args":{
      "areaCode":"", //1
      "codeType":"",//1
      "codeNumber":""//1
    }
  },
  //获取话务员统计信息
  staffStatInfoMM: {
    "widgetCode":"staff_stats",
    "widgetMethod":"getStaffStatInfo",
    "args":{
      "staffId":""
    }
  },


  //homePagePackageCase 预判 五个
  indexMarketingMM:{
    "widgetCode":"index_marketing",
    "widgetMethod":"getIndexMarketing",
    "args":
      {
        "businessNo":"",//1
        "areaCode":"",//1
        "crmAssetStatus":"",//1
        "callNum":"",//1
        "codeNumber":"",//待确定的
        "codeType":"",//1
        "billAccountNo":"",
        "idNo":"",
        "traceLog":"",
        "billCycle":"",
        "isExpectFlow":"",
        "suspendFlag":"",
        "limitAccess":"",
        "specialty":""
      }
  },
  //homePagePackageCase预判营销
  precisionMarketingMM: {
    "widgetCode":"precision_marketing",
    "widgetMethod":"getPrecisionMarketing",
    "args":{
      "businessNo":"",//1
      "businessType":"",//1 或者 2 type
      "traceLog":"",//ivr岁入数据
      "areaCode":"",//areaCode
      "c4":"",//c4Name
      "useSpeed":"",// 3
      "downSpeed":"",// 3
      "lineType":"",// 3
      "idNumber":""// 1 accountIdNumber
    }
  },
  //homePagePackageCase 销售品
  saleProductMM:{
    "widgetCode":"sale_product",
    "widgetMethod":"getSaleProducts",
    "args":{
      "integrationId":"", // 1 assetId
      "regionId":"",// 1 areaCode
      "inactiveFlag":true // 3
    }
  },
  //homePagePackageCase 本月套餐使用情况
  freeResourceMM: {
    "widgetCode":"free_resource",
    "widgetMethod":"getFreeResource",
    "args":{
      "areaCode":"", // 1 areaCode
      "codeType": "", // 查文档
      "codeNumber":"" // 查文档
    }
  },
  //homePagePackageCase 子产品
  subAssetMM: {
    "widgetCode":"sub_asset",
    "widgetMethod":"getSubAssets",
    "args":{
      "rootAssetId":"", //1 assetId
      "c3Name":"", //1
      "needInactiveFlag": true // 3
    }
  },
  getSubAssetPropertyMM: {
    "widgetCode":"sub_assetProperty",
    "widgetMethod":"getSubAssetProperty",
    "args":{
      "assetId":"", //1 assetId
      "c3Name":""
    }
  },

  //packageLine IVR关联信息  来电预判
  getUserOperateTraceQueryMM: {
    "widgetCode":"ivr",
    "widgetMethod":"getUserOperateTraceQuery",
    "args":{
      "callNo":"", //1
      "businessNo":"", //1
      "productCode":"",// 1
      "traceLog":"" //ivr 随入
    }
  },
  //packageLine 上一通电话
  lastCallMM:{
    "widgetCode":"last_call",
    "widgetMethod":"getLastCallInfo",
    "args":{
      "businessCode": "" // 1 呼入号码
    }
  },
  //packageLine 上一通电话
  callListDayMM:{
    "widgetCode":"call_list",
    "widgetMethod":"getCallList",
    "args":{
      "callNo": "",
      "lastDays": "",
      "recordId": ""
    }
  },
  callListMouthMM:{
    "widgetCode":"call_list",
    "widgetMethod":"getCallList",
    "args":{
      "callNo": "",
      "lastDays": "",
      "recordId": ""
    }
  },
  //呼入详细
  CallDetailMM:{
    "widgetCode":"call_list",
    "widgetMethod":"getCallDetail",
    "args":{
      "callNo": "",
      "eventTrialId": "",
      "startTime": ""
    }
  },
  //一正五号
  getCertPhoneRelMM:{
    "widgetCode":"phone_rel",
    "widgetMethod":"getCertPhoneRel",
    "args":{
      "certNum": "",
      "certType": "",
      "areaCode": "",
      "staffId": "",
      "gPartyId": "",
      "special": "",
      "pageIndex": "",
      "pageSize": ""
    }
  },
  //话务员未读消息
  staffStatsMM:{
    "widgetCode":"staff_stats",
    "widgetMethod":"getStaffUnreadSum",
    "args":{
      staffId:'',
    }
  },
  //packageLine 接触轨迹
  channelContactMM: {
    "widgetCode":"channel_contact",
    "widgetMethod":"getChannelContact",
    "args":{
      "businessNo":"", // 1
      "startTime":"", // 3
      "endTime" : "" // 3
    }
  },

  //ivr 五个 待确定接口
  getTransferParamsMM: {
    "widgetCode":"ivr",
    "widgetMethod":"getTransferParams",
    "args":{
    }
  },
  getLoginInfoMM: {
    "widgetCode":"ivr",
    "widgetMethod":"getLoginInfo",
    "args":{
    }
  },
  getRegionQueueMM: {
    "widgetCode":"ivr",
    "widgetMethod":"getRegionQueue",
    "args":{
      "branchId":"", // getLoginInfoMM branchId // 第一次空 区域中心
      "staffBranch":"", // getLoginInfoMM staffBranch
      "limitFlag": ""// getLoginInfoMM limitFlag
    }
  },
  getReadBusyAndQueueMM: {
    "widgetCode":"ivr",
    "widgetMethod":"getReadBusyAndQueue",
    "args":{
      "skillId":"",
      "vcId":""
    }
  },
  getTransferRegionMM: {
    "widgetCode":"ivr",
    "widgetMethod":"getTransferRegion",
    "args":{
      "areaCode":"", //1
      "transSkill":"" //ivr 随入
    }
  },
  updateRecordMM: {
    "widgetCode":"record",
    "widgetMethod":"updateRecord",
    "args":{
      "fileName":"",
      "stopReason":"",
      "monitorShip":"",
      "monitorCount":"",
      "connid":"",
      "callId":"",
      "recordGuid":"",
      "callFlag":"",
      "phone":""
    }
  },
  addRecordMM: {
    "widgetCode":"record",
    "widgetMethod":"addRecord",
    "args":{
      "ivrData":"", // ivr 随如
      "callerId":"", //呼入号码
      "staffId":"", //工号
      "dn":"", // COMMOBJ.dn

      "productId":"", //分点branchid
      "answerFlag":"",//电话类型
      "description":"",
      "connId":"",//中兴流水号
      "branchId":"",//分点branchid
      "passTerminalFlag":"",//ivr经过终端专席标志
      "fileName":"",//COMMOBJ.recordFileName
      "stopReason":"",//挂机原因
      "monitorShip":"",
      "monitorCount":"0",

      "callId":""
    }
  },

  insertUserSatisfactionMM: {
    "widgetCode":"record",
    "widgetMethod":"insertUserSatisfaction",
    "args":{
      "satisfyType":"",
      "deviceType":"",
      "onlineFlag":"",
      "callerId":"",
      "michelleId":"",
      "stopReason":"",
      "scoreBy":"",
      "staffId":"",
      "customerId":"",
      "staffName":"",
      "c3Code":"",
      "skill":"",
      "calledArea":"",
      "productType":"",
      "crmCustomerId":""
    }
  },
  //余额详情
  balanceDetailMM:{
    "widgetCode":"balance_detail",
    "widgetMethod":"getBalanceDeatil",
    "args":{
      "regionId":"",
      "codeType":"",
      "codeNumber":""
    }
  },
  //后增是否实名制
  getRealNameStatusMM:{
    "widgetCode":"real_name",
    "widgetMethod":"getRealNameStatus",
    "args":{
      "integratedNo":"",
      "c3Name":"",
      "type":"",
      "partNum":""
    }
  },
  //后增子产品列表
  getSameContractAssetMM:{
    "widgetCode":"same_contract",
    "widgetMethod":"getSameContractAsset",
    "args":{
      "billAccountNum":"",
      "callNo":"",
      "integrationNum":""
    }
  },
  //后增宽带速率
  getBroadbandRateMM:{
    "widgetCode":"broadband_rate",
    "widgetMethod":"getBroadbandRate",
    "args":{
      "billAccountNum":"",
      "c3Name":"",
      "assetId":"",
      "accountDeviceType":""
    }
  },
  checkWorkTimeMM:{
    "widgetCode":"utils",
    "widgetMethod":"checkWorkTime",
    "args":''
  },

  //记事本存储
  saveNoteMM:{
    "widgetCode":"notepad",
    "widgetMethod":"saveNote",
    "args":{
      staffId:'',
      note:''
    }
  },
  //记事本查询
  queryNoteListMM:{
    "widgetCode":"notepad",
    "widgetMethod":"queryNoteList",
    "args":{
      staffId:''
    }
  },
  //记事本删除
  deleteNotesMM:{
    "widgetCode":"notepad",
    "widgetMethod":"deleteNotes",
    "args":{
      staffId:'',
      idList:''
    }
  },
  //记事本完成标记
  completeNotesMM:{
    "widgetCode":"notepad",
    "widgetMethod":"completeNotes",
    "args":{
      staffId:'',
      idList:''
    }
  },
  //我要反馈
  saveFeedbackMM:{
    "widgetCode":"feedback",
    "widgetMethod":"saveFeedback",
    "args":{
      staffId:'',
      staffBranch:'',
      branch:'',
      callNo:'',
      businessNo:'',
      recordId:'',
      content:'',
      attachments:''
    }
  },

  //查询异网用户宽带账号 电话呼入时候查询
  getKdAccountByCallNumMM:{
    "widgetCode":"outside_phone",
    "widgetMethod":"getKdAccountByCallNum",
    "args":{
      callNum:''
    }
  },
  //子产品属性查询Widget接口
  getFamilyNetworkListMM:{
    "widgetCode":"sub_assetProperty",
    "widgetMethod":"getFamilyNetworkList",
    "args":{
      queryType:'',
      queryValue:'',
      areaCode:''
    }
  },
  //根据录音编号查询报表话务分类（业务号码，大中小类）
  getReportByRecordMM:{
    "widgetCode":"last_call",
    "widgetMethod":"getReportByRecord",
    "args":{
      recordingId:''
    }
  },
  /*首页widget-------------------------------------------------------------------完*/

  /*余额分析widget-------------------------------------------------------------------开始*/
  //余额信息查询
  getBalanceInfoMM:{
    "widgetCode":"balance_info",
    "widgetMethod":"getBalanceInfo",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:''
    }
  },
  //信用额度透支查询
  getBalanceCreditMM:{
    "widgetCode":"balance_credit",
    "widgetMethod":"getBalanceCredit",
    "args":{
      areaCode:'',
      serviceNo:''
    }
  },
  //查询余额明细
  getBalanceDeatilMM:{
    "widgetCode":"balance_detail",
    "widgetMethod":"getBalanceDeatil",
    "args":{
      regionId:'',
      codeType:'',
      codeNumber:''
    }
  },
  //套餐用户翼支付划拨记录查询
  epayChargeBillRecordMM:{
    "widgetCode":"balance_epay",
    "widgetMethod":"getEpayChargeBillRecord",
    "args":{
      areaCode:'',
      accountNo:'',
      startMonth:'',
      endMonth:'',
      epayId:''
    }
  },
  //套餐用户翼支付划拨进度查询
  getEpayChargeBillProgressMM:{
    "widgetCode":"balance_epay",
    "widgetMethod":"getEpayChargeBillProgress",
    "args":{
      areaCode:'',
      accountNo:'',
      startMonth: null,
      endMonth: null
    }
  },
  //欠费明细查询服务
  getOweChargeDetailMM:{
    "widgetCode":"overdue_detail",
    "widgetMethod":"getOweChargeDetail",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:''
    }
  },
  //待生效金额
  queryBookSchemeInfoMM:{
    "widgetCode":"balance_info",
    "widgetMethod":"queryBookSchemeInfo",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:''
    }
  },
  //短信警告信息查询
  queryAlarmInfoMM:{
    "widgetCode":"alarm_sms",
    "widgetMethod":"queryAlarmInfo",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:'',
      startDate:null,
      endDate:null
    }
  },
  //账务诊断
  getBalanceIagnosisMM:{
    "widgetCode":"alarm_sms",
    "widgetMethod":"getBalanceIagnosis",
    "args":{
      areaCode:'',
      businessNum:'',
      businessType:'',
      assetStatus:'',
      payType:'',
      accountType:'',
      billAccountNum:''
    }
  },
  //使用客户合同号查询充值缴费记录，对应需求文档 2.5.1
  queryRechargeListMM:{
    "widgetCode":"finance_table",
    "widgetMethod":"queryRechargeList",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:'',
      startDate:'',
      endDate:''
    }
  },
  //使用客户合同号查询停复机记录记录，对应需求文档 2.5.3
  queryCallLimitListMM:{
    "widgetCode":"finance_table",
    "widgetMethod":"queryCallLimitList",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:'',
      startDate:'',
      endDate:''
    }
  },
  //历史话费返还查询，对应需求文档 2.5.4
  queryBillReturnDetailMM:{
    "widgetCode":"finance_table",
    "widgetMethod":"queryBillReturnDetail",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:'',
      billingCycle:''
    }
  },
  //历史红包返还查询，对应需求文档 2.5.5
  getEpayChargeBillRecordMM:{
    "widgetCode":"finance_table",
    "widgetMethod":"getEpayChargeBillRecord",
    "args":{
      regionId:'',
      accountNo:'',
      startMonth:'',
      endMonth:''
    }
  },
  // 历史余额变动查询
  queryBalanceLogTotalMM:{
    "widgetCode":"finance_other",
    // "widgetCode":"finance_table",
    "widgetMethod":"queryBalanceLogTotal",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:'',
      startMonth:'',
      endMonth:''
    }
  },
  // 历史余额变动查询
  queryOweChargeInfoMM:{
    "widgetCode":"finance_other",
    "widgetMethod":"queryOweChargeInfo",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:''
    }
  },

  // 余额变动查询
  balanceChangeListMM:{
    "widgetCode":"finance_table",
    "widgetMethod":"balanceChangeList",
    "args":{
      areaCode:'',
      codeType:'',
      codeNumber:'',
      billingCycle:''
    }
  },
  /*余额分析widget-------------------------------------------------------------------完*/


  token: '',
  //登录信息
  enterCase: '',
  //业务号码
  businessCallNumber:'',
  //呼入号码
  callNumber:'',
  //呼入和业务号码信息
  callNumberMM:'',
  //呼入随入数据
  followData:'',
  //资产id确认
  assetIdAllChecked:'',
  //无需脱敏的 账号ID全部
  authenticatedAccountNumber:[],
  // 是否脱敏
  desensitization: true, // 是否脱敏

//        身份证查询脱敏标记
  idCardFlag: true,
  // 录音编号
  recordId: '',

  //是否生日
  birthday: '',
  // axiosUrl:'http://134.96.161.143:9302/widget/data',
  // axiosUrl:'http://134.96.161.143:9301/widget/data', // F5 地址
  axiosUrl:'http://134.96.161.143:9301/test/data', // F5 地址
  tabChange:'false',

  recordAll:{
    addRecord:'',
    updateRecord:'',
    insertUserSatisfaction:''
  },
  iframeSrc:'http://10000.zjtelecom.cn:8301/weball/default11.jsp?',
  iframeSrcNum:'100000',

  sidebarEditor:{
    show: false,
    contract: false,
    custom: false,
    identityCard: false,
  },
  infoSaimen:{
    busiPhoneType:'',
    serviceId:'',
    networkAccount:'',
    circuitNumber:'',
    deviceArea:'',
    deviceType:'',
  },
  setSubAssetPropertyNum:'',

  /*类型归类-------------------------------------------------------------------开始*/
//  不做营销查询的类型
  CDMA:[
    'PHY-MAN-0022',
    'PHY-MAN-0029'
  ],
  GH:[
    'PHY-MAN-0018',
    'PHY-MAN-0021',
    'PHY-MAN-0013',
    'PHY-MAN-0015',
    'OTH-MAN-0007',
    'PHY-MAN-0004',
    'PHY-MAN-0020',
    'PHY-MAN-0007',
    'PHY-MAN-0001',
    'PHY-MAN-0027',
    'PHY-MAN-0008',
    'PHY-MAN-0011',
    'PHY-MAN-0010',
    'PHY-MAN-0012'
  ],
  KD:[
    'OTH-MAN-0034',
    'INT-MAN-0004',
    'INT-MAN-0010',
    'OTH-MAN-0065',
    'INT-MAN-0011',
    'INT-MAN-0009',
    'NOE-MAN-0007',
    'OTH-MAN-0020',
    'INT-MAN-0006',
    'INT-MAN-0002',
    'INT-MAN-0001',
    'DAT-MAN-0013',
    'INT-MAN-0003',
    'OTH-MAN-0019',
    'INT-MAN-0005',
    'OTH-MAN-0013'
  ],
  PAS:[
    'PHY-MAN-0009',
    'PHY-MAN-0006',
    'PHY-MAN-0019',
    'PHY-MAN-0016'
  ]
};

// 页面相关状态

let page = {
    loginData:{
      loginId:'',
      password:''
    },
    //centerfunction
    centerFunctionText:'',
    calculatorActive:false,
    //首页跳转的页面
    changePage:{
      title:'vIndexPage'
    },
    changeOldPage:{
      title:'',
      status:false
    },

    header:{
      headerBg: '#177CB0',
      countZero: {
        status: false,
        countZeroHead:'转接倒计时',
        countZeroTime:'30',
        countZeroHtmlText:''
      },
      headerMyselfData:{
        statistics:{

        }
      }
    },

    //两个弹出框
    popoverAlive: {
      openOrClose: false,
      title: ''
    },
    smallAlive: {
      openOrClose: false,
      title: ''
    },

    //记事本
    queryNoteList:'',
    //我要反馈
    getFeedbackData:'',

    //查询异网用户宽带账号 电话呼入时候查询
    getKdAccountByCallNum:'',
    //预判事件处理item
    severEvent: '',
    pageTitle: {
      style:{
        bg:'#065279'
      },
      konwledgeInput:'',
      changeTitle: false,
      www: '',
      titleName:'',
      isActive: true
    },
    //销售品下拉 新增
    getSameContractAsset:'',
    //宽带速录 新增
    getBroadbandRate:'',
    sidebar: {
      titleColor: '#CCE6FF',
      buttonColor: '#9ACFFF',
      borderTopColor:'#065279',
      activeBg:'#2E4B64',
      sunBg:'#435D72',
      personMessage:{},
      //实名新增
      personRealName:'',
      assetList:'',
      assetListShow:'',
      assetListCustom:'',
      assetListContract:'',
      assetListId:'',
      assetListIdSearch:'',
      assetListIdSearchData:'',
      personPage:{
        fontColor:'#9ACFFF'
      },
      toolNum:[],
      toolPage:{
        smallTitle: '#B2DAFF',
        chooseNum: [{
          toolCode:'production',
          sort: '1'
        },{
          toolCode:'childProductionAttr',
          sort: '2'
        },{
          toolCode:'crm',
          sort: '3'
        },{
          toolCode:'customerMessage',
          sort: '4'
        },{
          toolCode:'messageGuide',
          sort: '5'
        },{
          toolCode:'calculator',
          sort: '6'
        },{
          toolCode:'businessSearch',
          sort: '7'
        },{
          toolCode:'numberSearch',
          sort: '8'
        },{
          toolCode:'oneStopFaultHandling',
          sort: '9'
        }],
        toolDataAll: [{
          toolCode:'breakdown',
          sort: '0'
        },{
          toolCode:'selectionSearch',
          sort: '0'
        },{
          toolCode:'businessSearch',
          sort: '0'
        },
        //   {
        //   toolCode:'wifiSearch',
        //   sort: '0'
        // },
          {
          toolCode:'production',
          sort: '1'
        },{
          toolCode:'childProductionAttr',
          sort: '2'
        },{
          toolCode:'crm',
          sort: '3'
        },{
          toolCode:'customerMessage',
          sort: '4'
        },{
          toolCode:'numberSearch',
          sort: '0'
        },{
          toolCode:'vipSearch',
          sort: '0'
        },{
          toolCode:'messageGuide',
          sort: '5'
        },{
          toolCode:'remindMake',
          sort: '0'
        },{
          toolCode:'passwordSever',
          sort: '0'
        },{
          toolCode:'fax',
          sort: '0'
        },{
          toolCode:'calculator',
          sort: '6'
        },{
          toolCode:'secretary',
          sort: '0'
        },{
          toolCode:'groupKnowledgeBase',
          sort: '0'
        },{
          toolCode:'outsideSystem',
          sort: '0'
        },
        {
        toolCode:'oneStopFaultHandling',
        sort: '0'
        },
        {
          toolCode:'openBoardNotice',
          sort: '0'
        }],
        toolDataAllSearch:{
          breakdown:{
          title: '区域性故障',
          icon: 'icon-guzhangguanli',
          www:''
          },
        selectionSearch:{
          title: '选址查询',
          icon: 'icon-qiyexuanzhi',
          www:''
        },
        businessSearch:{
          title: '营业厅查询',
          icon: 'icon-yingyetingjiaofei--',
          www:''
        },
        wifiSearch:{
          title: 'wifi热点查询',
          icon: 'icon-wifi',
          www:''
        },
        production:{
          title: '销售品',
          icon: 'icon-zhizhang0201',
          www:''
        },
        childProductionAttr:{
          title: '子产品&属性',
          icon: 'icon-caidan',
          www:''
        },
        crm:{
          title: 'CRM工单',
          icon: 'icon-iconfontdaojiaofangxing',
          www:''
        },
        customerMessage:{
          title: '客户信息',
          icon: 'icon-kehuxinxi_intouch',
          www:''
        },
        numberSearch:{
          title: '靓号查询',
          icon: 'icon-iconfontdaojiaofangxing',
          www:''
        },
        vipSearch:{
          title: 'vpn同群查询',
          icon: 'icon-iconfontdaojiaofangxing',
          www:''
        },
        messageGuide:{
          title: '短信引导',
          icon: 'icon-duanxin',
          www:''
        },
        remindMake:{
          title: '提醒定制',
          icon: 'icon-dingzhi',
          www:''
        },
        passwordSever:{
          title: '密码服务',
          icon: 'icon-yaochi',
          www:''
        },
        fax:{
          title: '传真',
          icon: 'icon-dayinji',
          www:''
        },
        calculator:{
          title: '计算器',
          icon: 'icon-kehuxinxi_intouch',
          www:''
        },
        secretary:{
          title: '坐席秘书',
          icon: 'icon-xiaomishu',
          www:''
        },
        groupKnowledgeBase:{
          title: '集团知识库',
          icon: 'icon-waibuzhandianshezhi',
          www:''
        },
        outsideSystem:{
          title: '外部系统',
          icon: 'icon-waibuzhandianshezhi',
          www:''
        },
        oneStopFaultHandling:{
          title: '一站式及公共故障',
          icon: 'icon-iconfontdaojiaofangxing',
          www:''
        },
        openBoardNotice:{
          title: '公告信息',
          icon: 'icon-iconfontdaojiaofangxing',
          www:''
        }
        }
      },
      sidebarBg:'#456F90'
    },
    pageAge:{
      balanceDetail:'',
      phoneRel:'',
    },
    homepage:{
      packageHeadMessage:'',
      packageCase:'',
      packageCaseDetail:'',
      callDayList:'',
      //呼入明显谈框
      incomingHistory:'',
      //免费资源套餐 弹框需要的数据
      freeResourceAlertData:'',
      messageNums:'',
      StaffStatInfo:'',
      callMouthList:'',
      callDetail:'',
      packageCasePrecision:'', //营销
      saleProduct:'', //销售品
      saleProduct:'', //销售品
      freeResource:'', //本月套餐
      subAsset:'', //子产品
      subAssetProperty: '', //子产品属性
      subAssetPropertySelf: '', //子产品属性
      subAssetPropertyPublic: '', //子产品属性
      familyNetworkList: '', //天翼亲情网
      precisionButton:[
        '账务查询',
        '故障专区',
        '故障申告',
        '咨询受理',
        '投诉建议',
        '账务专区和营销专区',
        '营销专区'
      ],
      customerAsset:'',
      accountBundle:'',
      kindName:{
        workOrder:'工单',
        malfunction:'故障',
        finance:'账务',
        data:'流量',
        alert:'预警',
      },
      //homePage 公用样式
      style:{
        bg:'#EAF0F5',
        borderColor: '#B2DAFF', //#B2DAFF
        gradualBkNormal:{
          from:'#ffffff',
          to:'#E6F3FF' //#E6F3FF
        },
        //homePage 按钮的 样式
        gradualBkNormalBtn:{
          border: '#67B7FF',
          color: '#1476CC',
          from:'#FAFDFF',
          to:'#EBF6FF' //#E6F3FF
        }
      }
    },
    PackageLine:{
      channelContact:'',
      channelContactSearch:'',
      recordingId:'',
      lastCall:{
        dataFault:'',
        dataBack:'',
        dataAll:''
      },
      lastCallDetail:'',
      telephoneSummary:''
    },
    ivrData:{
      getLoginInfo:'',
      getTransferParams:'',
      getTransferParamsAll:'',
      getRegionQueueArea:'',
      getRegionQueueSkill:'',
      getTransferRegion:'',
      getReadBusyAndQueue:'',
      getReadBusyQueue:'',
      getUserOperateTraceQuery:''
    },

//    <=====================   余额分析接口   ========================>
//是否标记
   goil:'',

//  是否欠费查询
    balanceInfo:'',
//  是否欠费查询
    balanceCredit:'',
//  查询余额明细
    balanceDeatil:'',
//套餐用户翼支付划拨记录查询
    epayChargeBillRecord:'',
//套餐用户翼支付划拨进度查询
    epayChargeBillProgress:'',
//欠费明细查询服务
    oweChargeDetail:'',
//待生效金额
    queryBookSchemeInfo:'',
//短信警告信息查询
    queryAlarmInfo:'',
//账务诊断
    balanceIagnosis:'',
//使用客户合同号查询充值缴费记录
    queryRechargeList:'',
//使用客户合同号查询停复机记录记录
    queryCallLimitList:'',
//历史话费返还查询
    queryBillReturnDetail:'',
//余额变动查询
    balanceChangeList:'',
    balanceChangeListDetail:'',
//历史余额变动查询
    queryBalanceLogTotal:'',
//历史合同欠费查询
    queryOweChargeInfo:'',
//历史话费返还查询
    smsContentList:'',

    //身份校验结果
    allCheckResults : {
      businessCallNumbers : [],//业务号码
      checkResults :[]//验证结果
    }

}

const state = {
  editor,
  page
}

export default state
