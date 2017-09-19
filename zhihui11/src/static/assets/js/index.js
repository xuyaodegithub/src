// import vm from '../../../src/main'

var eh;


var COMMOBJ =
{
	//零配置地址
	zeroCfgURL:'',
	//工号
	operatorId:'',
	//vcid
	vcid:'',
	//密码
	password:'',
	//分区编号
	branchId:'',
	//分区名称
	branchName:'',
	//外呼显示号码
	callShowPhone:'',
	//ivr转接号码
	ivrPhoneCode:'',
	//登陆标记
	LogonFlag:0,
	//呼入呼出标记，分为inbound，outbound
	boundFlag:'',
	//呼入呼出标志，呼入inbound，呼出obbound
	callFlag:'',
	//是否要做满意度调查标志
	userSatisfaInserted:false,
	//应答时间，中兴格式
	answerDatetime:null,
	//呼入时间
	callinDatetime:null,
	//话务员技能号
	Skill:0,
	//转接工号
	transAgentId:'',
	//已转接标记
	hastransferred:false,
	//转接原因
	transReason:'',
	//转接默认时长
	transCountSecond:30,
	//当前话务通话时长
	callCountSecond:0,
	//当前话务通话计时句柄
	callCountHandler:null,
	//转接的技能
	transSkills:'',
	//业务接入码
	OriginalDNIS:'',
	//原呼入号码
	OriginalANI:'',
	//中兴流水号
	ConnectionID:'',
	//ivr模块号
	ivrModuleId:'',
	//对于有装移修用户，在客服支撑平台右下角客户诉求中显示预警提示：”该用户有一张装/移/修的在途工单“。
	//1.IVR拼串，用呼入号码作为联系电话查询有们没有在途的装移单。
	//2.用联系电话查在途故障单。客服支撑界面修改成2个联系电话，工单管控后台将2个联系电话字段合并成1个字段传给客调，并提供接口供IVR使用。
	billStatus:'',
	//疑难专席
	diffStaff:'',
	//ivr随路数据
	ivrCallData:'',
	//是否反查用户
	counterCheckUser:false,
	//呼叫区域代码
	calledAreaCode:'',
	//IVR号码
	ivrBusi:'',
	//ivr轨迹节点编号
	sibNode:'',
	//经过终端专席标志,0，表示没有经过终端专席，为1表示经过终端专席
	passTerminalFlag:'0',
	//通过行业应用服务热线呼入”或“通过爱WiFi热线呼入标记 1：行业应用服务热线呼入 2：该用户通过爱WiFi热线呼入
	SRCEFlag:'1',
	//坐席签入状态
	currSignal:null,
	//用户挂机标志 0: 未知; 1: 话务员挂机; 2: 客户挂机; 4: 转接
	requestReleaseFlag:0,
	//录音文件路径
	wavPath:"D:\\tools\\1\\wav\\ch",
	//二步转外呼最大等待时长,单位秒
	outCallMaxWaitTime:20,
	//二步转外呼通话最大等待时长,单位秒
	outCallTalkMaxWaitTime:30,
	//分为外呼，和转接CALLING, TALKING
	outCallCurrentStatus : "",
	//当前的等待时长
	outCallCurrentWaitTime : 0,
	//外呼计时句柄
	outCallTimeoutHandler:null,
	//小结超时时长
	summaryOverTime:600,
	//小结超时监控句柄
	summaryTimeOutHandle:null,
	//话务员技能发生变动标志
	skillChanged:false,
	// BUSY话后置忙，READY:话后就绪， 默认话后就绪
	releaseState:"READY",
	//置忙标志
	busiFlag:true,
	//转接号码
	transPhone:'',
	//录音文件
	recordFileName:'',
	//不需要做满意度调查的技能
	baseCustomerSkills:'',
	//员工姓名
	staffName:'',
	//分机号
	dn:'',
	//外呼录音编号
	obRecordId:'',
	//呼入录音编号
	ibRecordId:'',
	//当前录音编号
	recordId:'',
	//1.小灵通 ,8.移动号码, 空时.非电信号码
	callPhoneType :'', 
	//呼入号码类型
	callProductType :'', 	
	//呼入客户编号
	callCustomerId :'', 
	//呼入号码星级
	callStarClass:'',
	//呼叫号码区号，4位
	callPhoneArea :'',
	//呼出号码
	callOutPhoneNum:'',
	//业务号码类型
	busiPhoneType:'',
	//业务号码serviceid
	serviceId:'',
	//业务号码宽带账号
	networkAccount:'',
	//业务号码专线编号
	circuitNumber:'',
	//业务号码DEVICEAREA 571
	deviceArea:'',
	//业务号码DEVICETYPE
	deviceType:'',
	//保存同客户同合同账号下服务密码认证标记
	pwdValidateFlag:false,
	//当前号码服务密码认证标记
	curPwdValidatedFlag:false,
	//CIT前一状态时间
	ctiPrevStatusTime:"",
	//CTI前一状态
	ctiPrevStatus:"-1"


};


function setCtiPrevStatusTime(value)
{
	COMMOBJ.ctiPrevStatusTime = value;
}
function setCtiPrevStatus(value)
{
	COMMOBJ.ctiPrevStatus = value;
}


function setObRecordId(id)
{
	COMMOBJ.obRecordId = id;
	COMMOBJ.recordId = id;
}
function setRecordId(id)
{
	COMMOBJ.recordId = id;
	COMMOBJ.ibRecordId = id;
}

function setCallPhoneInfo(info)
{
	if(info.callPhoneType=='PHY-MAN-0022')
	{
		COMMOBJ.callPhoneType = '8';
	}
	else if(info.callPhoneType=='PHY-MAN-0006'||info.callPhoneType=='PHY-MAN-0009'
		||info.callPhoneType=='PHY-MAN-0016'||info.callPhoneType=='PHY-MAN-0019')
	{

		COMMOBJ.callPhoneType = '1';
	

	}
	else if(info.callPhoneType!='')
	{
		COMMOBJ.callPhoneType = '0';
	
	}
	else
	{
		COMMOBJ.callPhoneType = '';
	}
	
	COMMOBJ.callPhoneArea = info.callPhoneArea;


	//呼入号码类型
	COMMOBJ.callProductType = info.callPhoneType;
	//呼入客户编号
	COMMOBJ.callCustomerId = info.callCustomerId;
	//呼入号码星级
	//COMMOBJ.callStarClass = info.callStarClass;
}

function setBusiPhoneInfo(info)
{
	//业务号码类型
	COMMOBJ.busiPhoneType = info.busiPhoneType;
	//业务号码serviceid
	COMMOBJ.serviceId = info.serviceId;
	//业务号码宽带账号
	COMMOBJ.networkAccount = info.networkAccount;
	//业务号码专线编号
	COMMOBJ.circuitNumber = info.circuitNumber;
	//业务号码DEVICEAREA 571
	COMMOBJ.deviceArea = info.deviceArea;
	//业务号码DEVICETYPE
	COMMOBJ.deviceType = info.deviceType;
}

function setLoginInfo(info)
{

    var userinfo = eval("("+info.ext+")");
	//零配置地址
	COMMOBJ.zeroCfgURL = userinfo.zeroCfgURL;
	//工号
	COMMOBJ.operatorId = userinfo.staffId;
	//vcid
	COMMOBJ.vcid  = userinfo.vcid;
	//密码
	COMMOBJ.password = userinfo.agentPwd;
	//分区编号
	COMMOBJ.branchId = userinfo.branchId;
	//分区名称
	COMMOBJ.branchName = userinfo.branchName;
	//外呼显示号码
	COMMOBJ.callShowPhone = userinfo.callShowPhone?"10000":userinfo.callShowPhone;
	//ivr转接号码
	COMMOBJ.ivrPhoneCode = userinfo.ivrPhoneCode;
	//不需要做满意度调查的技能
	COMMOBJ.baseCustomerSkills = userinfo.baseCustomerSkills;
	//员工姓名
	COMMOBJ.staffName = userinfo.staffName;
	//录音文件路径
	COMMOBJ.wavPath  = userinfo.wavPath;
}

//export default  setLoginInfo;

var GP = new Object() ;


// init Global Parameter
GP["state"]="0"; /*0:未签入1:签入2:示忙3:空闲4:休息5:呼入震铃6:呼出未接通7:通话中(外拨)8:通话中(内拨)9:保持状态10:静音状态11整理12主叫已挂机同转接方通话时状态13转接中
					101:hold + connect 102:Conference */

GP["agentstatus"]=0; /* 当前用户状态 [0:'未登陆',1:'示忙',2:'空闲',3:'休息',4:'通话中',5:'话后'] */

GP["ismute"]='0'; /*静音状态维护, 1请求静音 3 取消静音*/
GP["isautoasw"]='0'; /*自动应答 0 不自动应答 1 自动应答*/
GP["autoidle"]='0'; /*静音状态维护, 1自动示闲 0 不自动示闲*/
GP["ismute"]='0'; /*静音状态维护, 1请求静音 3 取消静音*/
GP["ishold"]='0'; /*保持状态维护, 0 保持 1 取消保持*/
GP["workid"]=''; /*工号workId*/
GP["callid"]='0';/*callId的值,当前呼叫*/
GP["holdid"]='0'; /*callId的值,当前Hold*/
GP["transftype"]='';/*0 单步转,1 咨询转 2 三方通话*/
GP["calling"]='';/*主叫*/
GP["called"]=''; /*被叫*/
GP["isouternum"]='';/*(内部工号0,外部号码1)*/
GP["nextchgstate"]='';/*(状态改变后，修改为另外一状态)*/
GP["priorstate"] = '' ;

/*
*号码拨出
 */
function doCallOut(phoneNum){
	//return;
	if(GP["agentstatus"]==2)
	{
		showMessage("就绪状态不允许拨打电话,请先示忙!");
		return;
	}
	if(GP["agentstatus"] == 0)/*1:未登陆*/
	{
	    showMessage('当前用户未登陆坐席,无法发起呼叫!');
		return -1;
	}else if(GP["agentstatus"] == 3)/*3:休息*/
	{
		showMessage('当前用户坐席坐席为休息,不允许呼叫!');
		return -1;
	}else if(GP["agentstatus"] == 4)/*4:通话中*/
	{
		showMessage('当前用户正在通话,请通话结束后再拨打电话!');
		return -1;
	}
	
	if(!phoneNum)
	{ 
		showMessage("外呼号码不允许为空!");
		return;
	}
	phoneNum = phoneNum.replaceAll(' ','');	
	phoneNum = phoneNum.replaceAll(':','');
	var telphoneLen = phoneNum.length;
	if(telphoneLen==0)
	{
		showMessage("外呼号码不允许为空!");
		return;
	}


	if(phoneNum == COMMOBJ.operatorId)
	{
		showMessage('禁止呼叫自己的工号');
		return;
	}
	else if(phoneNum == COMMOBJ.dn)
	{
		showMessage('禁止呼叫自己的分机号');
		return;
	}	
	else if(phoneNum.length<=4 && !checknumber(phoneNum))/*内部呼叫*/
	{
		showMessage('内部号码呼叫必须是数字');
		return;
	}
	else if(!checknumber(phoneNum))
	{
		showMessage('呼叫号码必须是数字');
		return;	
	}


	COMMOBJ.boundFlag = "outbound";//呼出标志
	
	COMMOBJ.callOutPhoneNum = phoneNum;
	
	doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '8', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);

	if(telphoneLen<=4)/*内部呼叫*/
	{


		WebAgent.invoker("CallInside", [phoneNum, 0], function(result) {
			if(result==0)
			{
				setToolbarState('2');

				var callData = {action : "closeWindow"};

				var msgstr = JSON.stringify(callData);

				$("#btnShowMsg").attr("msg",msgstr);


				$("#btnShowMsg").trigger("click");

				$("#btnCall").removeClass("light");

				$("#btnHandup").addClass("light");
			}
		});
	}else/*外部*/
	{ 
		var callShowPhone = COMMOBJ.callShowPhone;
		if(callShowPhone==null||callShowPhone=='')callShowPhone='10000'
		
		if(!(callShowPhone.length > 5 && callShowPhone.indexOf("400")>=0))
		{
		   //浙江省内C网手机号码 060010000
		   //callShowPhone = parent.getAreaOfOutsidePhone(phone, callShowPhone);
		   /*if(result['CORPNAME']=='电信'&&"570,571,572,573,574,575,576,577,578,579,580".indexOf(result['AREACODE'])>=0)
				{
					newOutPhone = "0600" + outPhone;
				}
				else
				{
					newOutPhone = outPhone;
				}*/
		}

		WebAgent.invoker("CallOutside", [0, callShowPhone, phoneNum, '', 0, 0], function(result) {
			if(result==0)
			{
				setToolbarState('2');

				var callData = {action : "closeWindow"};

				var msgstr = JSON.stringify(callData);

				$("#btnShowMsg").attr("msg",msgstr);


				$("#btnShowMsg").trigger("click");

				$("#btnCall").removeClass("light");

				$("#btnHandup").addClass("light");
			}
		});
	}

	
	
	//记录电话呼出轨迹 
	try{getOldWindow().staffDoCall(phoneNum);}catch(e){};

}

function isnumber(c)
{
	if ((c>='0') && (c<='9'))
		return true;
	else
		return false;
}
/*check the string if it is a number */
function checknumber(s)
{
	var nAtPos;
	nAtPos = 50000;
    for (i=0; i<s.length; i++)
    {
            n = s.substr(i, 1)
            if (!(isnumber(n)||n=='.'))
            {
            	return false;
            }
            if ( n == '.')
            {
            	nAtPos = i;
            }
    }

    if (nAtPos == 0)
    {
    	return false;
    }
    else
    {
    	return true;
    }
}
/*
执行电话转接
 */
function doTrans(transInfo)
{
	//type:0=转座席工号,1=转外部号码,2=转技能组标识
	//mode:1=转接,2=咨询(两步转),3=三方通话,4=咨询(两步自动转)
	console.log(transInfo);

	WebAgent.invoker("GetAgentInfo", COMMOBJ.operatorId, function(agentRet){
		if(agentRet!=null)
		{
			var retary = agentRet.split("|");
			var curAgentStatus = "";
			if(retary.length >= 6)
			{
				curAgentStatus = retary[5];
			}

			if(curAgentStatus == '304' || curAgentStatus == '305' 
				|| curAgentStatus == '306' || curAgentStatus == '307' || curAgentStatus == '308')
			{
				alertShow("已经在咨询或转接，不允许重复操作");
				return;
			}

		}								
									
		//return;
		if(transInfo.mode=='1'){ //转接
			COMMOBJ.transSkills = '';
			if(transInfo.type=='2') //转技能
			{
				COMMOBJ.transSkills = transInfo.phone;
			}

			//设置随路数据
			var callDataTmp = "";
			if(COMMOBJ.boundFlag == "outbound")//只有呼出才需要重新设置随路数据
			{


				if(transInfo.type=='2')
				{
					callDataTmp = "TRANS"+COMMOBJ.OriginalDNIS+"^"+COMMOBJ.OriginalANI+"^"+transInfo.phone+"^"+COMMOBJ.ConnectionID;
				}
				else
				{
					callDataTmp = "TRANS"+COMMOBJ.OriginalDNIS+"^"+COMMOBJ.OriginalANI+"^"+COMMOBJ.Skill+"^"+COMMOBJ.ConnectionID;
				}
			}
			else if(transInfo.type=='2') //转技能，更新技能信息随路数据
			{
				callDataTmp = "TRANS"+updateCallDataSkill(transInfo.phone);
			}
			else
			{
				callDataTmp = "TRANS" + COMMOBJ.ivrCallData.replace("BillStatus","BillStat");
			}

			WebAgent.invoker("SetCallData", [0, callDataTmp], function(result) {
				if(transInfo.type=='2') //转技能
				{
					var infoEx = "";
					if(COMMOBJ.vcid != transInfo.vcid)
					{
						infoEx = "vcid="+transInfo.vcid+";";
					}


					WebAgent.invoker("SingleStepTransferEx",[0,transInfo.phone,parseInt(''+transInfo.type),COMMOBJ.OriginalANI, infoEx],function(ret)
					{

						if(ret!=0)
						{
							//转接失败
							alertShow("转接失败，请重试");
						}
					});
				}
				else
				{
					WebAgent.invoker("SingleStepTransfer",[0,transInfo.phone,parseInt(''+transInfo.type),COMMOBJ.OriginalANI],function(ret)
					{

						if(ret!=0)
						{
							//转接失败
							alertShow("转接失败，请重试");
						}
					});
				}



			});
		}//end of 转接
		/*2=咨询(两步转), 4=咨询(两步自动转)*/
		else if (transInfo.mode && transInfo.mode == '2' || transInfo.mode && transInfo.mode == '4') {
			doConsultationAction(transInfo);
		}/* end of 2=咨询(两步转), 4=咨询(两步自动转)*/
		else if(transInfo.mode && transInfo.mode=='3'){ // Conference
			GP["transftype"] = '2' ;
			COMMOBJ.transSkills = '';
			if(transInfo.type=='2') //转技能
			{
				COMMOBJ.transSkills = transInfo.phone;
			}
			var callDataTmp = "";
			/** Modified by samen for GAP_KF_956 */
			if(COMMOBJ.boundFlag == "outbound")//只有呼出才需要重新设置随路数据
			{


				if(transInfo.type=='2')
				{
					callDataTmp = "TRANS"+COMMOBJ.OriginalDNIS+"^"+COMMOBJ.OriginalANI+"^"+transInfo.phone+"^"+COMMOBJ.ConnectionID;
				}
				else
				{
					callDataTmp = "TRANS"+COMMOBJ.OriginalDNIS+"^"+COMMOBJ.OriginalANI+"^"+COMMOBJ.Skill+"^"+COMMOBJ.ConnectionID;
				}
			}
			else if(transInfo.type=='2') //转技能，更新技能信息随路数据
			{
				callDataTmp = "TRANS"+updateCallDataSkill(transInfo.phone);
			}
			else
			{
				callDataTmp = "TRANS"+COMMOBJ.ivrCallData.replace("BillStatus","BillStat");
			}

			WebAgent.invoker("SetCallData", [0, callDataTmp], function(result) {

				WebAgent.invoker("Consultation", [0,transInfo.phone,parseInt(''+transInfo.type),0,COMMOBJ.OriginalANI], function(ret) {
					if(ret != 0 ){
						//logerror("Result:"+ret+" doConference : CallOperation.Consultation") ;
						alertShow("转接失败，请重试");
					}
				});
			});

		}
	});
}
function doConsultationAction(transInfo)
{
	COMMOBJ.transSkills = '';
	GP["transftype"] = '1';

	COMMOBJ.transPhone = '';

	if (transInfo.type == '2') //转技能， 需要多送infoEx参数,咨询到其他虚中心技能,infoEx参数中需填写目标虚中心，infoEx = "vcid=xxx;" (xxx为目标虚中心)
	{
        /**  增加员工转接疑难席时的转接原因，咨询时回传选择的转接原因*/
        if (!transInfo.transreason || transInfo.transreason == '') {

            if (COMMOBJ.boundFlag == "outbound") //只有呼出才需要重新设置随路数据
            {

                if (transInfo.type == '2') {

                    WebAgent.invoker("SetCallData", [0, "TRANS" + COMMOBJ.OriginalDNIS + "^" + COMMOBJ.OriginalANI + "^" + transInfo.phone + "^" + COMMOBJ.ConnectionID],
                    function(result) {});
                } else {
                    WebAgent.invoker("SetCallData", [0, "TRANS" + COMMOBJ.OriginalDNIS + "^" + COMMOBJ.OriginalANI + "^" + COMMOBJ.Skill + "^" + COMMOBJ.ConnectionID],
                    function(result) {});
                }
            } else if (transInfo.type == '2') //转技能，更新技能信息随路数据
            {

                WebAgent.invoker("SetCallData", [0, "TRANS" + updateCallDataSkill(transInfo.phone)],
                function(result) {});
            }

        } else {
            //当有转接原因时，传DIFFTRANS标记，后面加6位的工号（不足前面补0），再加1位的转接原因代码
            var tmpagentId = COMMOBJ.operatorId.toString();
            for (var ii = 0; tmpagentId.length < 6 && ii < 6 - COMMOBJ.operatorId.toString().length; ii++) {
                tmpagentId = '0' + tmpagentId;
            }

            if (COMMOBJ.boundFlag == "outbound") //只有呼出才需要重新设置随路数据
            {
                if (transInfo.type == '2') {
                    WebAgent.invoker("SetCallData", [0, "DIFFTRANS" + tmpagentId + transInfo.transreason + COMMOBJ.OriginalDNIS + "^" + COMMOBJ.OriginalANI + "^" + transInfo.phone + "^" + COMMOBJ.ConnectionID],
                    function(result) {});
                } else {
                    WebAgent.invoker("SetCallData", [0, "DIFFTRANS" + tmpagentId + transInfo.transreason + COMMOBJ.OriginalDNIS + "^" + COMMOBJ.OriginalANI + "^" + COMMOBJ.Skill + "^" + COMMOBJ.ConnectionID],
                    function(result) {});
                }
            } else if (transInfo.type == '2') //转技能，更新技能信息随路数据
            {

                WebAgent.invoker("SetCallData", [0, "DIFFTRANS" + tmpagentId + transInfo.transreason + updateCallDataSkill(transInfo.phone)],
                function(result) {});
            }
        } //end of 咨询原因
        COMMOBJ.transSkills = transInfo.phone;

        WebAgent.invoker("GetVersionInfo", "",function(ver) {
            var verinfo = ""
            try {

                //return ver.substr(23,11);
                if (ver.indexOf("_U") >= 0) {
                    verinfo = ver.substr(23, 15);
                } else {
                    verinfo = ver.substr(23, 11);
                }

            } catch(e) {

			}

            if (verinfo == "V4.00.04.14_U04") {
                var infoEx = "";
                if (COMMOBJ.vcid == transInfo.vcid) {

                    WebAgent.invoker("Consultation", [0, transInfo.phone, parseInt('' + transInfo.type), 0, COMMOBJ.OriginalANI],function(ret) {
                        if (ret == 0) {
                            consultationSuccAfter(transInfo);
                        }
                    });
                } else {
                    var infoEx = "";
                    if (COMMOBJ.vcid != transInfo.vcid) {
                        infoEx = "vcid=" + transInfo.vcid + ";";
                    }

                    WebAgent.invoker("ConsultationEx", [0, transInfo.phone, parseInt('' + transInfo.type), 0, COMMOBJ.OriginalANI, infoEx],function(ret) {
                        if (ret == 0) {
                            consultationSuccAfter(transInfo);
                        }
                    });
                }
            } else {
                //设置随路数据，更改优先级,SetAllCallData要V4.00.04.16版本以后支持
                //2杭州3丽水5台州,杭州平台id=0,绍兴平台id=1,杭州和丽水共用杭州平台,台州用绍兴平台
                WebAgent.invoker("SetAllCallData", ["PRI=", "5", ""],function() {
                    var infoEx = "";

                    if (COMMOBJ.vcid != transInfo.vcid) {
                        infoEx = "vcid=" + transInfo.vcid + ";";
                        

                    }

                    WebAgent.invoker("ConsultationEx", [0, transInfo.phone, parseInt('' + transInfo.type), 0, COMMOBJ.OriginalANI, infoEx],function(ret) {
                        if (ret == 0) {
                        	showMessage("咨询成功...");
                            consultationSuccAfter(transInfo);
                        }
                        else
                        {
                        	alertShow("咨询失败，请重试，错误码："+ret);
                        }
                    });

                });

            }
        });

	}//if (transInfo.type == '2')
	else {
        var callDataTmp = "";
        if (COMMOBJ.boundFlag == "outbound") //只有呼出才需要重新设置随路数据
        {
            callDataTmp = "TRANS" + COMMOBJ.OriginalDNIS + "^" + COMMOBJ.OriginalANI + "^" + COMMOBJ.Skill + "^" + COMMOBJ.ConnectionID;
        } else {
            callDataTmp = "TRANS" + COMMOBJ.ivrCallData.replace("BillStatus", "BillStat");
        }

        WebAgent.invoker("SetCallData", [0, callDataTmp],function(result) {
            COMMOBJ.transPhone = transInfo.phone;

            WebAgent.invoker("Consultation", [0, transInfo.phone, parseInt('' + transInfo.type), 0, COMMOBJ.OriginalANI],function(ret) {
                if (ret == 0) {
                	showMessage("咨询成功...");
                    consultationSuccAfter(transInfo);
                }
                else
                {
                	alertShow("咨询失败，请重试，错误码："+ret);
                }
            });

        });
	}
}
function consultationSuccAfter(obj)
{

	/*added by samen 2014.07.03 for GAP_KF_1627 录音表 file_loc增加新字段记录转接原因，转接原因记录在第一通录音中*/
	if(obj.transreason!=null && obj.transreason != '')
	{
		//更新录音记录的转接原因
		getOldWindow().updateTransReasonOfSoundRecord(obj.transreason);
	}
	/*end of added by samen 2014.07.03 for GAP_KF_1627 录音表 file_loc增加新字段记录转接原因，转接原因记录在第一通录音中*/

	//转工号不需要开始倒计时
	if(obj.type!='0'&&obj.mode=='4')
	{
	  //added by samen GAP_KF_1688 2014.9.16 remark:转疑难专席优化
	  //如果是疑难转接，显示提示信息
	  if(obj.transreason && obj.transreason != '')
	  {
	  	countZeroChangeHtml("<font size=2.0 color='red'>请注意将“我的工号***，用户的业务号码：***，是否做过身份验证：是/否，这位女士/先生反映**问题，要求***，向专席进行描述。”</font><br><br>");
	  }
	  //end of added by samen GAP_KF_1688 2014.9.16 remark:转疑难专席优化

	  startOutCallInterval("CALLING");
	}

}
/**
 * 显示转接内容
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
function countZeroChangeHtml(msg)
{
	var info = {action:"countZeroChangeHtml",msg:msg};

	var msgstr = JSON.stringify(info);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}
/**
 * 显示倒计时
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
function countZeroChangeTime(msg)
{
	var info = {action:"countZeroChangeTime",msg:msg};

	var msgstr = JSON.stringify(info);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}
/**
 * 显示倒计时提示
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
function countZeroChangeHead(msg)
{
	var info = {action:"countZeroChangeHead",msg:msg};

	var msgstr = JSON.stringify(info);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}
/**
 * 显示倒计时窗体
 *
 * @return {[type]}     [description]
 */
function countZeroChangeShow()
{
	var info = {action:"countZeroChangeShow"};

	var msgstr = JSON.stringify(info);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}
/**
 * 隐藏倒计时窗体
 *
 * @return {[type]}     [description]
 */
function countZeroChangeHidden()
{
	var info = {action:"countZeroChangeHidden"};

	var msgstr = JSON.stringify(info);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}

/**
 * 替换技能id
 * @param  {[type]} newskill [description]
 * @return {[type]}          [description]
 */
function updateCallDataSkill(newskill)
{

	var calldata = COMMOBJ.ivrCallData;
	calldata = calldata.replace("BillStatus","BillStat");

	var calldataArray = calldata.split("^");
	calldata = "";
	for(var ni=0; ni < calldataArray.length; ni++)
	{
		if(ni == 2)
		{
			calldata += newskill;
		}
		else
		{
			calldata += calldataArray[ni];
		}
		if(ni < calldataArray.length - 1)
		{
			calldata += "^";
		}
	}
	return calldata;
}

/**
 * 控制呼叫头按钮显示
 * @return {[type]} [description]
 */
var changeAgentIcons = function()
{
	//GP["state"]="1"; /*1:未登陆2:示忙3:空闲4:休息5:呼入震铃6:呼出未接通7:通话中(外拨)8:通话中(内拨)9:保持状态10:静音状态11整理12主叫已挂机同转接方通话时状态*/

	switch (GP["state"])/*1:未登陆*/
	{
	case "1": // 1:未登陆
		enableButton(88) ;
		setSignal(88) ;
		GP["agentstatus"]=0;
		GP["ishold"] = '0' ;
		GP["transftype"] = '' ;
		break ;
	case "2":  // 2:示忙
		GP["transftype"] = '' ;
		enableButton(1) ;
		setSignal(3) ;
		GP["agentstatus"]='1';
		clearSummaryTimeOutHandle();
		break ;
	case "3":  // 3:空闲
		GP["transftype"] = '' ;
		enableButton(1) ;
		setSignal(1) ;
		GP["agentstatus"]='2';
		GP["ishold"] = '0' ;
		clearSummaryTimeOutHandle();
		break ;
	case "4":  // 休息
		GP["transftype"] = '' ;
		setSignal(5) ;
		GP["ishold"] = '0' ;
		clearSummaryTimeOutHandle();
		break ;
	case "5":  // 呼入震铃
		GP["transftype"] = '' ;
		enableButton(3) ;
		setSignal(3) ;
		GP["agentstatus"]=4;
		clearSummaryTimeOutHandle();
		break ;
	case "6":

		break ;
	case "7": // 7:通话中(外拨)
		enableButton(2) ;
		GP["agentstatus"]=4;
		setSignal(3) ;
		clearSummaryTimeOutHandle();

		break ;
	case "8":// 8:通话中(内拨)
		enableButton(2) ;
		GP["agentstatus"]=4;
		setSignal(3) ;

		break ;
	case "9": // 9 hold
		if(GP["ishold"]=='1'){
			enableButton(4) ;
		}else{
			enableButton(41) ;
		}
		setSignal(3) ;

		if(GP["transftype"]=='2'){ // 单步转

		}else{ //

		}
		GP["agentstatus"]=4;
		break ;
	case "10":
		setSignal(201) ;
		break ;
	case "11":
		enableButton(1) ;
		setSignal(4) ;
		GP["agentstatus"]=5;

		break ;
	case "12":
		enableButton(7) ;
		GP["agentstatus"]=1;
		break ;
	case "13":
		enableButton(5) ;
		GP["agentstatus"]=1;
		break ;
		break ;
	case "14":

		break ;
	case "15":

		break ;
	case "16":

		break ;
	case "17":

		break ;
	case "18":
		break ;
	case "100": // 咨询拨号中
		enableButton(8) ;
		break ;
	case "101": // 咨询
		enableButton(8) ;
		break ;
	case "102": // Conference
		enableButton(9) ;
		break ;
	}
}



function setSignal(AgentStatus, AgentMode) {

    if (AgentStatus == 1) {//AS_Ready
        //imgRDY.src = imgPath+"/softphone_03.gif";
        //imgBUSY.src = imgPath+"/softphone_02.gif";
        //imgACW.src = imgPath+"/softphone_02.gif";
		//imgmute.src = imgPath+"/unmute.gif";

		$("#btnRest").removeClass("light");
		$("#btnCall").removeClass("light");
		$("#btnSignOut").removeClass("light");

        $("#msgBox").html("就绪");


        $("#msgBoxDiv").attr("class","myself-bottom-item ready");

		COMMOBJ.currSignal="READY" ;

		clearCallCountHandle();

    } else if (AgentStatus == 2) {//AS_NotReady
       /* imgRDY.src = imgPath+"/softphone_02.gif";
        imgBUSY.src = imgPath+"/softphone_03.gif";
        imgACW.src = imgPath+"/softphone_02.gif";
		imgmute.src = imgPath+"/unmute.gif";
		imgmute.alt=JS_I18n("restSound");
		imgmute.title=JS_I18n("restSound");
        msgBox.value = JS_I18n("noReady");//"未就绪";//formTemp.busy.value;
		//imgBreak.src=imgPath+"/coffee_dis.gif";
		imgBreak.src=imgPath+"/coffee.gif";

		msgBox.className="busy"; */
		COMMOBJ.currSignal="NOT_READY" ;
		$("#msgBox").html("未就绪");

		$("#msgBoxDiv").attr("class","myself-bottom-item busy");
		$("#btnSignOut").addClass("light");
    }
    else if (AgentStatus == 3) {//AS_Busy

    	

		COMMOBJ.currSignal="NOT_READY" ;
		if(GP["agentstatus"]==4){ //通话中

			$("#msgBox").html("通话中");//"通话中";//formTemp.busy.value;

			$("#msgBoxDiv").attr("class","myself-bottom-item talking");			
			$("#btnSignOut").removeClass("light");
			$("#btnRest").removeClass("light");
			$("#btnReady").removeClass("light");
			$("#btnBusy").removeClass("light");

		}
		else
		{
			$("#msgBox").html("示忙");//"示忙";//formTemp.busy.value;

			$("#msgBoxDiv").attr("class","myself-bottom-item busy");	
			$("#btnRest").addClass("light");

			clearCallCountHandle();
		}

    } else if (AgentStatus == 4) {//AS_ACW
        /*imgRDY.src = imgPath+"/softphone_02.gif";
        imgBUSY.src = imgPath+"/softphone_02.gif";
        imgACW.src = imgPath+"/softphone_03.gif";
		imgmute.src = imgPath+"/unmute.gif";
		imgmute.alt=JS_I18n("restSound");
		imgmute.title=JS_I18n("restSound");
        msgBox.value = JS_I18n("callBack");//"话后";//formTemp.callBack.value;
		//imgBreak.src=imgPath+"/coffee.gif";
		imgBreak.src=imgPath+"/coffee_dis.gif";
		currSignal="ACW" ;
		msgBox.className="after";
		*/
		COMMOBJ.currSignal="ACW" ;
		$("#msgBox").html("话后");

		$("#msgBoxDiv").attr("class","myself-bottom-item after");	
		if(COMMOBJ.boundFlag == "inbound")
		{
			$("#btnSignOut").removeClass("light");
		}else
		{
			$("#btnSignOut").addClass("light");
		}
		clearCallCountHandle();
    } else if (AgentStatus == 5) {//AS_REST
        /*imgRDY.src = imgPath+"/softphone_02.gif";
        imgBUSY.src = imgPath+"/softphone_02.gif";
        imgACW.src = imgPath+"/softphone_02.gif";
		imgmute.src = imgPath+"/unmute.gif";
		imgmute.alt=JS_I18n("restSound");
		imgmute.title=JS_I18n("restSound");
        msgBox.value = JS_I18n("rest");//"小休";//formTemp.busy.value;
		currSignal="REST" ;
		imgBreak.src=imgPath+"/coffee_dis.gif";
		msgBox.className="rest"; */
		COMMOBJ.currSignal="REST" ;
		$("#msgBox").html("小休");

		$("#msgBoxDiv").attr("class","myself-bottom-item rest");
		$("#btnReady").removeClass("light");
		$("#btnBusy").removeClass("light");
		
		$("#btnSignOut").removeClass("light");
    }else if (AgentStatus == 88) {//AS_None
        /*imgRDY.src = imgPath+"/softphone_02.gif";
        imgBUSY.src = imgPath+"/softphone_02.gif";
        imgACW.src = imgPath+"/softphone_02.gif";
		imgmute.src = imgPath+"/unmute.gif";
		imgBreak.src=imgPath+"/coffee_dis.gif";
		imgmute.alt=JS_I18n("restSound");
		imgmute.title=JS_I18n("restSound");
		currSignal="None" ;
		msgBox.className="StatusText"; */
		$("#btnRest").removeClass("light");
		COMMOBJ.currSignal="None" ;

    }else if(AgentStatus == 201){ // set mute
		/*imgmute.src = imgPath+"/mute.gif";
		imgmute.alt=JS_I18n("restSoundStop");//"静音";//formTemp.stopNightBell.value;
		imgmute.title=JS_I18n("restSoundStop");//"静音";//formTemp.stopNightBell.value;
		setMSG(JS_I18n("setRestSound"));
		*/
		$("#msgBox").html("静音");
		$("#msgBoxDiv").attr("class","myself-bottom-item rest");
	}else if(AgentStatus == 202){ // stop mute
		/*imgmute.src = imgPath+"/unmute.gif";
		imgmute.alt=JS_I18n("restSound");//"静音";//formTemp.startNightBell.value;
		imgmute.title=JS_I18n("restSound");//"静音";//formTemp.stopNightBell.value;
		setMSG(JS_I18n("restSoundStop"));//"静音结束");
		*/
		$("#msgBox").html("静音结束");

		$("#msgBoxDiv").attr("class","myself-bottom-item rest");
	}
}
function clearSummaryTimeOutHandle()
{
	try
	{
		if(COMMOBJ.summaryTimeOutHandle!=null)
		{
			clearTimeout(COMMOBJ.summaryTimeOutHandle);
			COMMOBJ.summaryTimeOutHandle = null;
		}
	}
	catch(ex)
	{
	}
}
function enableButton(flag) {

	//clearSummaryTimeOutHandle();

    //flag=1 normal
	if (flag == 1) {
		$("#btnSignIn").removeClass("light");
		$("#btnSignOut").addClass("light");
		//$("#btnReady").addClass("light");
		//$("#btnBusy").addClass("light");


		$("#btnTransfer").removeClass("light");
		$("#btnHold").removeClass("light");
		$("#btnHandup").removeClass("light");
		$("#btnCall").addClass("light");



    }
    //101 .hold +connect
    else if (flag ==101) {
    	$("#btnCall").addClass("light");
    	$("#btnHold").addClass("light");
    	$("#btnTransfer").removeClass("light");
    	$("#btnHandup").removeClass("light");

        //lnkAnswer.href="#";

    }
    //flag=2 in call process
    else if (flag == 2) {
       $("#btnCall").removeClass("light");
       //hlod这里要切回保持class
       $("#btnHold").addClass("light");
       $("#btnTransfer").addClass("light");
       $("#btnHandup").addClass("light");

    }else if (flag == 3) {//flag=3 ib coming

        $("#btnCall").removeClass("light");
        $("#btnHold").removeClass("light");
        $("#btnTransfer").removeClass("light");
        $("#btnHandup").removeClass("light");

        //imgAnswer.src = imgPath+"/Answer.gif";

    }else if (flag == 0) {

        $("#btnCall").addClass("light");
        $("#btnHold").addClass("light");
        $("#btnTransfer").addClass("light");
        $("#btnHandup").addClass("light");

        //lnkAnswer.href = "javascript:doAnswer();";


    }else if (flag == 4) {//flag=4 hold
    	$("#btnCall").addClass("light");
		$("#btnTransfer").removeClass("light");
		$("#btnHandup").addClass("light");
		$("#btnHold").addClass("light");
		//lnkAnswer.href = "#";




    }else if(flag==41){
    	$("#btnCall").addClass("light");
    	$("#btnHold").addClass("light");
      	$("#btnTransfer").removeClass("light");
      	$("#btnHandup").addClass("light");
		//lnkAnswer.href = "#";
	}else if (flag == 5) {//flag=5 transfer


		$('#msgBox').html("转接成功");//formTemp.transferSuccess.value;
		$("#btnCall").removeClass("light");
		$("#btnHold").removeClass("light");
		$("#btnTransfer").removeClass("light");
		$("#btnHandup").addClass("light");

		//lnkAnswer.href = "#";


    }else if (flag == 6) {//flag=6 conference

    	$("#btnCall").removeClass("light");
		$("#btnHold").removeClass("light");
		$("#btnTransfer").removeClass("light");
		$("#btnHandup").removeClass("light");
		//lnkAnswer.href = "#";

		//lnkConference.href = "javascript:doConference();";


    }else if (flag == 7) {//flag=7 transfer dialing

		$("#btnCall").removeClass("light");
		$("#btnHold").removeClass("light");
		$("#btnTransfer").addClass("light");
		$("#btnHandup").addClass("light");
		//lnkAnswer.href = "#";
		//lnkConference.href = "#";

    }
    else if (flag == 8) {//multiple step
    	$("#btnCall").removeClass("light");
    	$("#btnHold").removeClass("light");
    	$("#btnTransfer").addClass("light");
    	$("#btnHandup").addClass("light");
		//lnkAnswer.href = "#";

    } else if (flag == 9) {//single step/multiple steps finished.

		$("#btnCall").removeClass("light");
		$("#btnHold").removeClass("light");
		$("#btnTransfer").removeClass("light");
		$("#btnHandup").addClass("light");

		//lnkAnswer.href = "#";
    }
    else if (flag == 11) {
		$("#msgBox").html("转接成功");//"转接成功";//formTemp.transferSuccess.value;
    }
    else if (flag == 12) {
		$("#msgBox").html("转接失败");//"转接失败";//formTemp.transferFail.value;
    }
    else if (flag == 13) {
		$("#msgBox").html("用户取消");//"用户取消";//formTemp.userCancel.value;
    }
    else if (flag == 14) {
		$("#msgBox").html("邀请成功");//"邀请成功";//formTemp.inviteSuccess.value;
    }
    else if (flag == 15) {
		$("#msgBox").html("邀请失败");//"邀请失败";//formTemp.inviteFail.value;
    }
    else if (flag == 16) {
		$("#msgBox").html("对方没有应答");//"对方没有应答";//formTemp.secondPeople.value;
    }else {//88， unintialized

        COMMOBJ.LogonFlag = 0;


        $("#msgBox").html("退出");//"退出";//document.getElementById("logout").value;

        $("#msgBoxDiv").attr("class","myself-bottom-item out");
		$("#btnSignIn").addClass("light");
		$("#btnSignOut").removeClass("light");

		$('#btnAppeal').removeClass('light');


		$("#btnTransfer").removeClass("light");
		$("#btnHold").removeClass("light");
		$("#btnTransfer").removeClass("light");
		$("#btnHandup").removeClass("light");
		$("#btnCall").removeClass("light");
		$("#btnReady").removeClass("light");
		$("#btnBusy").removeClass("light");

    }
}
function logonOrnot(flag){
	COMMOBJ.LogonFlag=flag ;
	if(flag==1){

            $("#msgBox").html("登录");

            $("#msgBoxDiv").attr("class","myself-bottom-item out");
            enableButton(1);
	}else{

		    $("#msgBox").html("呼出失败");
            enableButton(88) ;
	}
}


/**
 * 刷新呼出按钮状态
 *
 * @param state
 *            状态码
 */
function refreshBtnCallOut(state) {
	if ((state >= 200 && state < 300) || state == 105 || state == 106
			|| state == 304 || state == 310 || (state >= 400 && state < 500)) {
		$btnCallOut.removeAttr("disabled");
	} else {
		$btnCallOut.attr("disabled", "disabled");
	}
}


/**
 * 示闲失败事件
 */
function OnSetIdleFailure() {

}

/**
 * 示忙失败事件
 */
function OnSetBusyFailure() {

}

/**
 * 外呼失败事件
 */
function OnCallOutsideFailure() {
	forcesetnotready();
}

/**
 * 外呼成功事件
 */
function OnCallOutsideSuccess() {
	COMMOBJ.boundFlag = "outbound";//呼出标志
	/*先设置一下呼出标记，防止呼叫失败后，由于失败事件造成更新上一通话务时间*/
	WebAgent.invoker("GetFlowNo", "", function(result){
		COMMOBJ.ConnectionID = result;
	});

	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
	});
	WebAgent.invoker("getCallID", [1], function(result){
		GP["holdid"] = result;
	});

}

/**
 * 挂机成功事件
 */
function OnReleaseSuccess(mediatype, callid) {

	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
		WebAgent.invoker("getCallID", [1], function(result){
			GP["holdid"] = result;
			if(GP["callid"]=='0' && GP["holdid"]=='0')
			{

				GP["state"] = "11" ;

			}else
				GP["state"] = "7" ;

			changeAgentIcons() ;
	    });
	});

	//清除计时器
	clearCallCountHandle();
	stopOutCallInterval();

	 //清空疑难工号
	COMMOBJ.diffStaff = '';

	//插入话务监控数据 doInsertCTIStatus(prevstat/*前一状态*/, prevtime/*前一状态时间*/, stat/*当前状态*/, Skills/*技能*/)
	//呼入挂机（OnReleaseSuccess，OnTransSuccess）4：必须保证前一个状态是3，其他的忽略。
	if(COMMOBJ.ctiPrevStatus=='3'||COMMOBJ.ctiPrevStatus=='7'||COMMOBJ.ctiPrevStatus=='8'){
			
		doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '4', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);
	}
	else
	{
		COMMOBJ.ctiPrevStatus = '4';
		setCtiPrevStatusTime(getCurDateTime());
	}

	setToolbarState("1");

	//挂机动作
	phoneReleaseSuccess(COMMOBJ.requestReleaseFlag);

	//AFTERCALL话后置忙，READY:话后就绪， 默认话后就绪,当是p_busiFlag=true时,强制先跳到话后置忙

	if(COMMOBJ.releaseState=="READY"&&COMMOBJ.busiFlag==false)
	{
		WebAgent.invoker("SetIdle", " ");
	}

	//如果是呼入挂机的话，开启小结超时监控
	//if($("#btnSummary").hasClass('light'))
	
	if(COMMOBJ.boundFlag == "inbound")
	{
		
		$("#btnReady").removeClass("light");
		$("#btnBusy").removeClass("light");
		COMMOBJ.summaryTimeOutHandle = setTimeout("setSummaryTimeOut()", COMMOBJ.summaryOverTime*1000);
	}

	/*新满意度调查 */
	if(COMMOBJ.boundFlag == "inbound"){
	   
	   doinsertUserSatisfaction(COMMOBJ.requestReleaseFlag);
	}
	else
	{
	   $("#btnReady").addClass("light");
	   $("#btnBusy").addClass("light");
	}
	/*新满意度调查 */
	COMMOBJ.requestReleaseFlag = 0;


}
/**
 * [电话挂机处理]
 * @param  {[int]} requestReleaseFlag [用户挂机标志 0: 未知; 1: 话务员挂机; 2: 客户挂机; 4: 转接 5:转IVR挂机 8:异常]
 * @return {[void]}   
 */
function phoneReleaseSuccess(requestReleaseFlag)
{

    
    //当录音文件名为空，又是异常时，不做更新
    if(COMMOBJ.recordFileName==''&&requestReleaseFlag==8)return;
    //呼入呼出标志，呼入inbound，呼出obbound
    var tmprecordid = '';
    if(COMMOBJ.boundFlag=='obbound')
    {
    	tmprecordid = COMMOBJ.obRecordId;
    }
    else
    {
    	tmprecordid = COMMOBJ.recordId;
    }
    
    if(tmprecordid=='')return;
    

  	updateRecordGuid({"fileName":COMMOBJ.recordFileName,
      "stopReason":requestReleaseFlag,
      "monitorShip":"",
      "monitorCount":"0",
      "connId":COMMOBJ.ConnectionID,
      "callId":COMMOBJ.transPhone,
      "recordGuid":tmprecordid,
      "callFlag":COMMOBJ.callFlag,
      "phone":COMMOBJ.callOutPhoneNum
  	});

	if(requestReleaseFlag==1||requestReleaseFlag==2||requestReleaseFlag==4)
	{
      COMMOBJ.recordFileName = "";
      COMMOBJ.transPhone = ''; //清空
    }
}
/**
 * [更新录音]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function updateRecordGuid(data)
{
	data.action = "updateRecordGuid";

	var msgstr = JSON.stringify(data);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}
/**
 * 内部呼叫成功
 */
function OnCallInsideSuccess()
{
	WebAgent.invoker("GetFlowNo", " ",function(result)
	{
			COMMOBJ.ConnectionID = result;
	});

}
/**
 * 内部呼叫失败
 */
function OnCallInsideFailure()
{
	WebAgent.invoker("GetFlowNo", " ",function(result)
	{
			COMMOBJ.ConnectionID = result;
	});
	//呼叫失败重新把状态置成示忙状态，不然会在预呼状态
	WebAgent.invoker("SetBusy", " ");
}
/**
 * 外呼通话建立事件
 */
function OnCallOutsideSuccTalk() {
	GP["agentstatus"]=4;  //通话状态
	GP["state"] = "7" ;
	changeAgentIcons() ;

	COMMOBJ.callCountSecond = 0; //当前话务通话时长清零
  	/** 疑难席员需求，有延长沟通时长和倒计时提醒功能*/
	//转接原因和工号清空
	COMMOBJ.transAgentId = '';
	COMMOBJ.hastransferred = false; //已转接标记
	COMMOBJ.transReason = '';
	COMMOBJ.transCountSecond = 30;
	writeTransNormal(); //初始转接显示成普通样式

  	COMMOBJ.callCountHandler = setTimeout("doActionCallCount()", 1000);

	//alert('OnCallOutsideSuccTalk');
	COMMOBJ.ivrCallData = '';


	COMMOBJ.boundFlag = "outbound";//呼出标志


	COMMOBJ.diffStaff = ""; //疑难专席工号


	//呼出号码应答,不刷新号码
	//插入外呼录音记录
	
	insertObRecord(COMMOBJ.callOutPhoneNum,'',COMMOBJ.ConnectionID,'outbound');
}
/**
 * 开始录音事件
 */
function OnBeginRecordSuccess(fileName,pathlen) {
	COMMOBJ.recordFileName = fileName;
}
/**
 * 挂机失败事件
 */
function OnReleaseFailure(mediatype, callid) {
	showMessage("挂机失败");
}

/**
 * 提示最后一次发生的错误
 */
function promptLastError() {
	WebAgent.getLastError(function(errCode, errMsg) {
		addMessages(errMsg + "[" + errCode + "]");
	});
}

/**
 * 执行登录
 */
function doSignIn() {

	$('#msgBox').html('登录中...');
	$('#btnSignIn').removeClass('light');



	/*WebAgent.signin({
		oid : COMMOBJ.operatorId,
		pwd : COMMOBJ.password,
		//pwd : new MD5().hex_md5(password).toUpperCase(),
		vcid : COMMOBJ.vcid,
		type : "10",
		cfgUrl : COMMOBJ.zeroCfgURL,
		lang : "zh_CN", // lang: "en",
		onSucc : function() {
			$('#btnAppeal').addClass('light');
			onSucc_();

		},
		onInitialBeforeInvoke:function(){
			//用于A接口属性设置
			//开启全程录音
			WebAgent.invoker("FullRecord", [ "1" ]);
			//录音模式设置为媒体服务器录音
			WebAgent.invoker("RecordMode", [ "1" ]);
		},
		onInitialAfterInvoke:function(){
			//用于通过SetAinfProperty方法设置的属性设置
		},
		onError : function(errCode, errMsg) {
			$('#btnSignIn').addClass('light');
			$('#msgBox').html('登录失败');
			showMessage("登录失败,原因【" + errMsg + "】");
		}
	});*/
	WebAgent.signin({
		oid : COMMOBJ.operatorId,
		//pwd : COMMOBJ.password,//new MD5().hex_md5(password).toUpperCase(),
		pwd : new MD5().hex_md5(COMMOBJ.password).toUpperCase(),
		vcid : COMMOBJ.vcid,
		type : "10",
		cfgUrl : COMMOBJ.zeroCfgURL,
		lang : "zh_CN", // lang: "en",
		onSucc : function() {
			$('#btnAppeal').addClass('light');
			onSucc_();

		},
		onInitialBeforeInvoke:function(){
			//用于A接口属性设置
			//开启全程录音
			WebAgent.invoker("FullRecord", [ "1" ]);
			//录音模式设置为媒体服务器录音
			WebAgent.invoker("RecordMode", [ "1" ]);
		},
		onInitialAfterInvoke:function(){
			//用于通过SetAinfProperty方法设置的属性设置
		},
		onError : function(errCode, errMsg) {
			//$('#btnSignIn').addClass('light');
			//$('#msgBox').html('登录失败');
			//showMessage("登录失败,原因【" + errMsg + "】,再重试");

			WebAgent.signin({
				oid : COMMOBJ.operatorId,
				pwd : COMMOBJ.password,//new MD5().hex_md5(password).toUpperCase(),
				//pwd : new MD5().hex_md5(password).toUpperCase(),
				vcid : COMMOBJ.vcid,
				type : "10",
				cfgUrl : COMMOBJ.zeroCfgURL,
				lang : "zh_CN", // lang: "en",
				onSucc : function() {
					$('#btnAppeal').addClass('light');
					onSucc_();

				},
				onInitialBeforeInvoke:function(){
					//用于A接口属性设置
					//开启全程录音
					WebAgent.invoker("FullRecord", [ "1" ]);
					//录音模式设置为媒体服务器录音
					WebAgent.invoker("RecordMode", [ "1" ]);
				},
				onInitialAfterInvoke:function(){
					//用于通过SetAinfProperty方法设置的属性设置
				},
				onError : function(errCode, errMsg) {
					$('#btnSignIn').addClass('light');
					$('#msgBox').html('登录失败');
					showMessage("登录失败,原因【" + errMsg + "】");
				}
			});
		}
	});

}

// 登录成功后处理函数
function onSucc_() {

	doInsertCTIStatus('-1', '', '0', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);

	// 注册注册A接口事件
	COMMOBJ.LogonFlag = 1;
	eh = new WebAgent.EventHelper();
	eh.regEvent("OnStateChanged", function(state) {
		//$("#state").val(state.stateCode);
		addMessages("状态切换至[" + state.name + ", 状态码：" + state.stateCode + "]");

		//refreshBtns(state.stateCode);
		// 进入话后整理态后示闲
		//if (state.stateCode == 400) {
			//clickSetIdle();
		//}
		if(state.stateCode == 100)
		{
			OnSignInSuccess(0);

		}
		else if(state.stateCode == 200)
		{
			OnSetIdleSuccess();
		}
		else if(state.stateCode == 105)
		{
			OnSetBusySuccess();
		}
		else if(state.stateCode == 400)
		{
			if(GP["agentstatus"]==0)
			{
				WebAgent.invoker("SetBusy", " ");
			}
		}
		else if(state.stateCode == 107)
		{
			$("#msgBox").html("预呼");

			$("#msgBoxDiv").attr("class","myself-bottom-item busy");
		}
		else if(state.stateCode == 313)
		{
			$("#msgBox").html("呼出振铃");

			$("#msgBoxDiv").attr("class","myself-bottom-item busy");
		}
		else if(state.stateCode == 304)
		{
			//showMessage("咨询中...");
		}
		else if(state.stateCode == 306)
		{
			showMessage("外部咨询已接通");

		}
		

	});

	eh.regEvent("OnSetIdleFailure", OnSetIdleFailure);
	eh.regEvent("OnSetBusyFailure", OnSetBusyFailure);
	eh.regEvent("OnCallOutsideFailure", OnCallOutsideFailure);
	eh.regEvent("OnCallOutsideSuccess", OnCallOutsideSuccess);

	eh.regEvent("OnReleaseFailure", OnReleaseFailure);
	eh.regEvent("OnBeginRecordSuccess",OnBeginRecordSuccess);
	eh.regEvent("OnReturnFromIVR",OnReturnFromIVR);
	eh.regEvent("OnError",OnError);
	eh.regEvent("OnAnswerRequest",OnAnswerRequest);
	eh.regEvent("OnAnswerSuccess",OnAnswerSuccess);
	eh.regEvent("OnRequestRelease",OnRequestRelease);
	eh.regEvent("OnReleaseSuccess", OnReleaseSuccess);
	eh.regEvent("OnCallInsideSuccess", OnCallInsideSuccess);
	eh.regEvent("OnCallInsideFailure", OnCallInsideFailure);
	eh.regEvent("OnCallOutsideSuccTalk", OnCallOutsideSuccTalk);
	eh.regEvent("OnHoldSuccess", OnHoldSuccess);
	eh.regEvent("OnRetrieveHoldSuccess", OnRetrieveHoldSuccess);
	eh.regEvent("OnHangupCallInConf", OnHangupCallInConf);
	eh.regEvent("OnTransSuccess", OnTransSuccess);
	eh.regEvent("OnTransFailure", OnTransFailure);
	eh.regEvent("OnConsultationSuccess", OnConsultationSuccess);
	eh.regEvent("OnConsultationFailure", OnConsultationFailure);
	eh.regEvent("OnConsultationBack", OnConsultationBack);
	eh.regEvent("OnForceIdle", OnSetIdleSuccess);
	eh.regEvent("OnForceBusy", OnSetBusySuccess);
	eh.regEvent("OnForceOut", OnSignOutSuccess);
	eh.regEvent("OnForceRelease", OnForceRelease);
	eh.regEvent("OnSingleStepTransSuccess", OnSingleStepTransSuccess);
	eh.regEvent("OnMessageReceiveEx", OnMessageReceiveEx);
	eh.regEvent("OnHoldCallRelease", OnHoldCallRelease);
	eh.regEvent("OnSetRestSuccess", OnSetRestSuccess);
	eh.regEvent("OnCtiReport", OnCtiReport);
	eh.regEvent("OnCallInsideSuccTalk", OnCallInsideSuccTalk);






	//同步一下坐席状态
	WebAgent.syncCurState();
	// 设置为自动应答
	WebAgent.invoker("AutoAnswer", "1");
	//获取当前的dn号
	getdn();

	//注册成功后默认示忙
	clickSetBusy();



}

function doFreshphonebymichelle(calldata)
{
	calldata.action = "callin";

	var msgstr = JSON.stringify(calldata);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}
function showMessage(msg)
{
	var msgobj = {action:"showmsg",
				   msg:msg};
	var msgstr = JSON.stringify(msgobj);
	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}
function alertShow(msg)
{
	var msgobj = {action:"alertShow",
				   msg:msg};
	var msgstr = JSON.stringify(msgobj);
	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}
/**
 * 内部呼叫建立
 */
function OnCallInsideSuccTalk()
{
	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
	});
	WebAgent.invoker("getCallID", [1], function(result){
		GP["holdid"] = result;
	});

	GP["state"] = "8" ;
	changeAgentIcons() ;

	COMMOBJ.callCountSecond = 0; //当前话务通话时长清零
  	/**  疑难席员需求，有延长沟通时长和倒计时提醒功能*/
	//转接原因和工号清空
	COMMOBJ.transAgentId = '';
	COMMOBJ.hastransferred = false; //已转接标记
	COMMOBJ.transReason = '';
	COMMOBJ.transCountSecond = 30;
	writeTransNormal(); //初始转接显示成普通样式

  	COMMOBJ.callCountHandler = setTimeout("doActionCallCount()", 1000);





	GP["agentstatus"]=4;  //通话状态

	COMMOBJ.ivrCallData = "";

	doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '7', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);


	COMMOBJ.boundFlag = "outbound";//呼出标志

	//呼出号码应答,不刷新号码
	insertObRecord(COMMOBJ.callOutPhoneNum,'',COMMOBJ.ConnectionID,'outbound');
}
function getOldWindow()
{
	return document.getElementById("oldWindow").contentWindow;
}
/**
 * [转IVR返回事件操作]
 */
function OnReturnFromIVR()
{

	
	WebAgent.invoker("QueryCallData", [0], function(result){
		var calldataArray = result.split("^")

		console.log("OnReturnFromIVR:"+result);

		alertShow(calldataArray[0]);


		if (calldataArray[0] == '密码验证成功') {
			//add by samen for GAP_KF_1643 2014-07-31 记验证日志
			//parent.BusiService.insertValidateResult({CALLPHONE:parent.deviceInfoCache["CALLPHONE"],
			//		BUSIPHONE:parent.deviceInfoCache["BUSIPHONE"],ACTION:'密码验证',RESULT:'1'},function(){});
			//parent.recordCommonTraceActionId('T1239');
			//end of add by samen for GAP_KF_1643 2014-07-31 记验证日志
			//parent.pwdValidateFlag = true;
			//parent.curPwdValidatedFlag =true;
			//parent.unShieldInfo();
			//parent.afterValidateSuccess();
			//认证通过
			var checkResultTmp = {
	            code :'1',
	            result :  true,
	            businessCallNumber : COMMOBJ.serviceId
	         };
			unshieldInfoAll();
			getOldWindow().refreshIdentityValidateInfo('1');
			getOldWindow().doSomethingWhenIvrPwdValidateSucceed();
			updateCheckIdentityResult(checkResultTmp);
		}
		//add by samen for GAP_KF_1643 2014-07-31 记验证日志，这里是验证失败
		else if (calldataArray[0].indexOf('密码验证')>=0) {
			//parent.BusiService.insertValidateResult({CALLPHONE:parent.deviceInfoCache["CALLPHONE"],
			//		BUSIPHONE:parent.deviceInfoCache["BUSIPHONE"],ACTION:'密码验证',RESULT:'2'},function(){});
			//parent.recordCommonTraceActionId('T1240');
			//
			getOldWindow().doSomethingWhenIvrPwdValidateFailed();
			var checkResultTmp = {
	            code :'1',
	            result :  false,
	            businessCallNumber : COMMOBJ.serviceId
	         };
			updateCheckIdentityResult(checkResultTmp);
		}

		else if(calldataArray[0].indexOf('用户挂机')>=0)
		{
			phoneReleaseSuccess(2);
		}
		else if(result=='验证通过^1')
		{
			unshieldInfoAll();
			getOldWindow().doSomethingWhenIvrIdValidateSucceed();
			getOldWindow().doSomethingWhenIvrPwdValidateFailed();
			var checkResultTmp = {
	            code :'3',
	            result :  true,
	            businessCallNumber : COMMOBJ.serviceId
	         };
			updateCheckIdentityResult(checkResultTmp);
		}
		else if(result=='验证失败^0')
		{
			getOldWindow().doSomethingWhenIvrIdValidateFailed();
			var checkResultTmp = {
	            code :'3',
	            result :  false,
	            businessCallNumber : COMMOBJ.serviceId
	        };
			updateCheckIdentityResult(checkResultTmp);
		}

	});


}


/**
 * [错误信息事件]
 *
 */
function OnError(errCode)
{
	showMessage("OnError(errCode:"+errCode+")");
}
/**
 * [主要提供振铃事件]
 * @param {[Integer]} MediaType [媒体类型，缺省值为0（语音）]
 * @param {[Integer]} callId    [呼叫标识]
 */
function OnAnswerRequest(MediaType,callId){

	GP["callid"] = callId ;
	GP["state"] = "5" ; // 呼入振铃
	WebAgent.invoker("GetCallingNo", " ", function(result){
		GP["calling"] = result;
	});
	
	changeAgentIcons() ;
}
/**
 * [呼入应答成功事件]
 * @param {[Integer]} MediaType [媒体类型，缺省值为0（语音）]
 */
function OnAnswerSuccess(MediaType)
{

	GP["state"] = "7" ;// 通话中
	COMMOBJ.userSatisfaInserted = false;

	changeAgentIcons() ;


	

	//注意事项:由于A接口是以 最后一个 US=（不区分大小写） 到字符串的最后，作为用户随路数据的，因此，这个设置的结果是随路数据变成了 US=0。
	COMMOBJ.answerDatetime = getCurDateTime();
	COMMOBJ.callinDatetime = new Date();
	var oldskill = COMMOBJ.Skill;

	//转接原因和工号清空
	COMMOBJ.transAgentId = '';
	COMMOBJ.hastransferred = false; //已转接标记
	COMMOBJ.transReason = '';
	COMMOBJ.transCountSecond = 30;

	writeTransNormal(); //初始转接显示成普通样式

	COMMOBJ.callCountSecond = 0; //当前话务通话时长清零
	COMMOBJ.callCountHandler = setTimeout("doActionCallCount()", 1000);

	COMMOBJ.transSkills = '';

	//取随路数据
	COMMOBJ.OriginalDNIS = "";
	COMMOBJ.OriginalANI = "";
	COMMOBJ.Skill = "";
	COMMOBJ.ConnectionID = "";
	COMMOBJ.ivrModuleId = "";
	COMMOBJ.billStatus = '';


	COMMOBJ.obRecordId = '';
	COMMOBJ.ibRecordId = '';  
	COMMOBJ.recordId = '';
   

	WebAgent.invoker("QueryCallData", [0], function(result){


		console.log("answersuccess:"+result);
		var calldata = result;

		var transflag = false; //转入标志


		COMMOBJ.diffStaff = ""; //疑难专席工号


		if(calldata.indexOf('TRANS')==0) //如果以TRANS字符串开头，说明是转入的话务
		{
			calldata = calldata.substring(5);
			COMMOBJ.Skill = oldskill;
			WebAgent.invoker("GetAccessNo", " ", function(result){
				COMMOBJ.OriginalDNIS = result;
			});
			transflag = true;
		}
		/**  疑难席员需求，有延长沟通时长和倒计时提醒功能*/
		else if(calldata.indexOf('DIFFTRANS')==0) //如果以DIFFTRANS字符串开头，说明是转入疑难专席的话务，后面加6位的工号（不足前面补0），再加1位的转接原因代码
		{

			COMMOBJ.transAgentId = '' + parseInt(calldata.substring(9, 15),10);//转接座席工号

			//转疑难专席优化
			//把疑难工号发送给普通座席
			try
			{
				SendMessageToAgent("DIFF@"+COMMOBJ.operatorId, COMMOBJ.transAgentId, 1);
			}catch(ex)
			{
			}
			//转疑难专席优化

			COMMOBJ.transReason = calldata.substring(15, 16);//疑难转接原因
			calldata = calldata.substring(16);
			COMMOBJ.Skill = oldskill;
			WebAgent.invoker("GetAccessNo", " ", function(result){
				COMMOBJ.OriginalDNIS = result;
			});
			transflag = true;
			countZeroChangeShow();
			writeTransDiff(COMMOBJ.transReason); //转接显示成疑难样式

		}
		/**  疑难席员需求，有延长沟通时长和倒计时提醒功能*/




		COMMOBJ.ivrCallData = calldata;
		//是否反查用户设置默认值false
		COMMOBJ.counterCheckUser = false;



		var calldataArray = calldata.split("^");
		if(calldataArray.length > 0&& !transflag)COMMOBJ.OriginalDNIS = calldataArray[0];
		//记录呼入10000号的地市
		if(COMMOBJ.OriginalDNIS.length>=4){
			COMMOBJ.calledAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
		}
		if(calldataArray.length > 1)COMMOBJ.OriginalANI = calldataArray[1];
		if((calldataArray.length > 2&&!transflag)||(calldataArray.length > 2&&transflag&&COMMOBJ.Skill==''))COMMOBJ.Skill = calldataArray[2];
		if(calldataArray.length > 3)COMMOBJ.ConnectionID = calldataArray[3];
		if(calldataArray.length > 4)COMMOBJ.ivrModuleId = calldataArray[4];

		COMMOBJ.ivrBusi = ""; //IVR号码
		COMMOBJ.sibNode = ""; //ivr轨迹节点编号
		COMMOBJ.passTerminalFlag = "0"; //经过终端专席标志,0，表示没有经过终端专席，为1表示经过终端专席
		if(calldataArray.length > 5)COMMOBJ.ivrBusi = calldataArray[5];
		if(calldataArray.length > 6)COMMOBJ.sibNode = calldataArray[6];
		if(calldataArray.length > 7)COMMOBJ.passTerminalFlag = calldataArray[7];//经过终端专席标志,0，表示没有经过终端专席，为1表示经过终端专席, 9：按9政企认证用户


		//从数组的每8位开始，参数都是带key=value的形式，由于不是每个都会每次都送，所以有可能某些key是不存在的. SRCE=1是行业应用，SRCE=2是爱WIFI

		var paraMap = {BillStat:'',AssetIntID:'',ZQKey:'',XZKDKey:'',HRISK:'',SRCE:'',NODELIST:'',FLOWLIST:'',STARLEVEL:'',STRIDCARD:''};
		for(var ni=8;ni < calldataArray.length; ni++)
		{
			for (var key in paraMap) {
			   //不区分大小写做比较
               if(calldataArray[ni].toLowerCase().indexOf(key.toLowerCase())>=0)
               {
               		paraMap[key] = calldataArray[ni].substr(calldataArray[ni].indexOf('=')+1);
               		break;
               }

            }
		}
		//客服支撑温馨提醒增加提示内容“该用户通过行业应用服务热线呼入”或“该用户通过爱WiFi热线呼入”
		COMMOBJ.SRCEFlag = paraMap['SRCE'];

		COMMOBJ.billStatus = paraMap['BillStat'];

		//欠费用户呼入多传个资产编号 ,ivr串：AssetIntID=2-11720N92
		var AssetIntID = "";

		AssetIntID = paraMap['AssetIntID'];

		/*增加认证用户信息显示, ZQKey=  0代表没有查询到，1代表政企关键人，2政企客户经理, 3政企经办人 */
		var ZQKey = "";

		ZQKey = paraMap['ZQKey'];


		/*新增10000-6按键, XZKDKey=1表示按6进人工，XZKDKey不存在或0表示不是按6进人工。
		  若用户是通过该按钮接入人工，客服支撑首页温馨提醒此处给出相应提醒，“用户有新装宽带意向，请跟进营销”
		*/
		var XZKDKey = "";

		XZKDKey =  paraMap['XZKDKey'];

		/*高风险用户提醒*/
		/*HRISK=
			4.高频拨打客户，5*故障号码:多次催修客户,
			咨询投诉单:7X*业务号码 ,3X*业务号码
		*/
		var HRISK = "";
		var HRISKNum = 0;
		var HRISKBusiPhone = "";
		var HRISKCallNum="";

		HRISK = paraMap['HRISK'];
		if(COMMOBJ.OriginalANI!=null&&COMMOBJ.OriginalANI!=""){
			if(COMMOBJ.OriginalANI.length > 30){
				HRISKCallNum = COMMOBJ.OriginalANI.substring(0,30);
			}else{
				HRISKCallNum = COMMOBJ.OriginalANI;
			}
		}else{
			HRISKCallNum = GP["calling"];
		}
		if(HRISK!="")
		{
			var HRISKFlag = HRISK.substr(0,1);

			if(HRISKFlag=='5')
			{
				var tmpary = HRISK.split("*");
				//取业务号码
				if(tmpary.length > 1)HRISKBusiPhone = tmpary[1];
			}
			else if(HRISKFlag=='7'||HRISKFlag=='3'||HRISKFlag=='1')
			{
				var tmpary = HRISK.split("*");
				//取工单数
				if(tmpary.length > 0)HRISKNum = parseInt(tmpary[0].substr(1));
				//取业务号码
				if(tmpary.length > 1)HRISKBusiPhone = tmpary[1];
			}
			//getOldWindow().HRiskAlert(HRISKFlag, HRISKNum, HRISKBusiPhone,HRISKCallNum);
			//document.getElementById("oldWindow").contentWindow.HRiskAlert(HRISKFlag, HRISKNum, HRISKBusiPhone,HRISKCallNum);
			
		}
		else
		{
			//getOldWindow().HRiskAlert('', 0, '',HRISKCallNum);
			//document.getElementById("oldWindow").contentWindow.HRiskAlert('', 0, '',HRISKCallNum);
		}
		/*end of added by samen GAP_KF_1674 2014-08-14 高风险用户提醒*/

		if(COMMOBJ.OriginalANI.length > 30)
		{
			COMMOBJ.OriginalANI= COMMOBJ.OriginalANI.substring(0,30);
		}

		COMMOBJ.callFlag = 'inbound';
		//播放录音
		playAgentID();

		setToolbarState("2");

		//showMessage(COMMOBJ.OriginalANI);
		//中兴录音编号不从ivr串里取，从 GetFlowNo()函数取
		WebAgent.invoker("GetFlowNo", " ", function(result){

			COMMOBJ.ConnectionID = result;

			COMMOBJ.boundFlag = "inbound"; //表示呼入
			//IVR节点
			var ivrNodeList = paraMap['NODELIST'];

			var ivrFlowList = paraMap['FLOWLIST'];

			var strIdCard = paraMap['STRIDCARD'];

			//呼入号码应答,刷新号码
			if(COMMOBJ.OriginalANI!=null&&COMMOBJ.OriginalANI!=""){

				if(COMMOBJ.OriginalANI.substr(0,1)=='0')
				{
					COMMOBJ.OriginalANI = COMMOBJ.OriginalANI.substr(1);
				}

				doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '3', COMMOBJ.Skill, COMMOBJ.OriginalANI, COMMOBJ.ConnectionID);
				//刷新号码资料
			    var calldata = {
					phoneNum:COMMOBJ.OriginalANI,/*呼入号码*/
					pCustomerId:'',/*客户id*/
					ConnectionID:COMMOBJ.ConnectionID,/*中兴流水号*/
					answerFlag:transflag?'trans':'inbound',/*呼入类型标记*/
					ivrModuleId:COMMOBJ.ivrModuleId,/*ivr模块号*/
					billStatus:COMMOBJ.billStatus, /*工单提示状态*/
					AssetIntID:AssetIntID,/*欠费用户呼入多传个资产编号*/
					ZQKey:ZQKey,/*认证用户信息显示*/
					//ZQKey:'1',/*认证用户信息显示*/
					XZKDKey:XZKDKey,/*10000-6按键*/
					ivrNodeList:ivrNodeList, /*IVR节点*/
					ivrFlowList:ivrFlowList, /*ivr身份校验结果*/
					strIdCard:strIdCard/*外网用户的证件号码*/
			    };
			    doFreshphonebymichelle(calldata);
			}
			else
			{
				COMMOBJ.OriginalANI = GP["calling"];

				if(COMMOBJ.OriginalANI!=null&&COMMOBJ.OriginalANI!=''&&COMMOBJ.OriginalANI.substr(0,1)=='0')
				{
					COMMOBJ.OriginalANI = COMMOBJ.OriginalANI.substr(1);
				}

				doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '3', COMMOBJ.Skill, COMMOBJ.OriginalANI, COMMOBJ.ConnectionID);

			  	//刷新号码资料
			    var calldata = {
					phoneNum:COMMOBJ.OriginalANI,/*呼入号码*/
					pCustomerId:'',/*客户id*/
					ConnectionID:COMMOBJ.ConnectionID,/*中兴流水号*/
					answerFlag:transflag?'trans':'inbound',/*呼入类型标记*/
					ivrModuleId:COMMOBJ.ivrModuleId,/*ivr模块号*/
					billStatus:COMMOBJ.billStatus, /*工单提示状态*/
					AssetIntID:AssetIntID,/*欠费用户呼入多传个资产编号*/
					ZQKey:ZQKey,/*认证用户信息显示*/
					//ZQKey:'1',/*认证用户信息显示*/
					XZKDKey:XZKDKey,/*10000-6按键*/
					ivrNodeList:ivrNodeList, /*IVR节点*/
					ivrFlowList:ivrFlowList, /*ivr身份校验结果*/
					strIdCard:strIdCard/*外网用户的证件号码*/
			    };

			    doFreshphonebymichelle(calldata);
			}
		});

	});
}


//呼出时,只做插入录音动作 , answerFlag 电话类型标志
function insertObRecord(phoneNum,pCustomerId,pMichlleId, answerFlag){
	COMMOBJ.callFlag = 'obbound'; 
	COMMOBJ.obRecordId = '';
	
	COMMOBJ.recordId = "";
	COMMOBJ.ConnectionID = pMichlleId;

	var calldata = {
		   ivrData:"", // ivr 随如
	      callerId:phoneNum, //呼入号码
	      staffId:COMMOBJ.operatorId, //工号
	      dn:COMMOBJ.dn, // COMMOBJ.dn

	      productId:COMMOBJ.branchId, //分点branchid
	      answerFlag:(answerFlag=="outbound"?'2':'1'),//电话类型
	      description:"",
	      connId:pMichlleId,//中兴流水号
	      branchId:COMMOBJ.branchId,//分点branchid
	      passTerminalFlag:"",//ivr经过终端专席标志
	      fileName:COMMOBJ.recordFileName,//COMMOBJ.recordFileName
	      stopReason:"0",//挂机原因
	      monitorShip:"",
	      monitorCount:"0",
	      callId:""

	};

	//插入录音
	calldata.action = "addOBRecordGuid";

	var msgstr = JSON.stringify(calldata);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");

		

}

/**
 * [请求释放事件]
 */
function OnRequestRelease()
{
	COMMOBJ.requestReleaseFlag = 2; //用户挂机标志

}
/**
 * [签入成功]
 *
 */
function OnSignInSuccess(MediaType)
{

	logonOrnot(1);
	//直接切换到示忙状态
	//setnotready();
}
/**
 * [示忙成功]
 */
function OnSetBusySuccess()
{
	doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '2', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);
	GP["state"] = "2" ;
	changeAgentIcons() ;

}
/**
 * 就绪成功
 */

function OnSetIdleSuccess()
{
	doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '1', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);
	GP["state"] = "3" ;
	changeAgentIcons() ;
}
/**
 * [保持成功]
 */
function OnHoldSuccess()
{

	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
	});
	WebAgent.invoker("getCallID", [1], function(result){
		GP["holdid"] = result;
	});

	GP["state"] = "9" ;
	GP["ishold"] = "1" ;
	changeAgentIcons() ;
}
/**
 * [取保持成功]
 */
function OnRetrieveHoldSuccess()
{
	if(COMMOBJ.outCallCurrentStatus!="")
	{
		stopOutCallInterval();
	}

	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
	});
	WebAgent.invoker("getCallID", [1], function(result){
		GP["holdid"] = result;
	});

	GP["state"] = '7'  ;
	GP["ishold"] = "0" ;
	GP["transftype"] == '' ;
	changeAgentIcons() ;
}
/**
 * [三方中一方挂机]
 */
function OnHangupCallInConf(callingNum,calledNum)
{
	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
	});
	WebAgent.invoker("getCallID", [1], function(result){
		GP["holdid"] = result;
	});

	GP["state"] = '7' ;
	GP["ishold"] = "0" ;
	changeAgentIcons() ;
}
/**
 * [呼叫转出成功]
 */
function OnTransSuccess()
{
	clearCallCountHandle();//清除计时器

	//呼入挂机（OnReleaseSuccess，OnTransSuccess）4：必须保证前一个状态是3，其他的忽略。
	
	if(COMMOBJ.ctiPrevStatus=='3'||COMMOBJ.ctiPrevStatus=='7'){
		doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '4', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);
	}
	else
	{

		COMMOBJ.ctiPrevStatus = '4';
		setCtiPrevStatusTime(getCurDateTime());
	}

    //转疑难专席优化
    //给疑难专席发送转接过去的消息
    if(COMMOBJ.diffStaff!='')
    {
	  	try
		{
		  SendMessageToAgent("TRANSSUCCESS", COMMOBJ.diffStaff, 1);
		}
		catch(ex)
		{
		}


		//插入转接疑难专席轨迹
		getOldWindow().LoginService.doConsultationDiffSkill({TRANSDATA:'座席工号:'+COMMOBJ.diffStaff},function(){});
		COMMOBJ.diffStaff = '';
	}
  	//转疑难专席优化

	//呼入挂机（OnReleaseSuccess，OnTransSuccess）4：必须保证前一个状态是3，其他的忽略。
	setToolbarState("1");


	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
	});
	WebAgent.invoker("getCallID", [1], function(result){
		GP["holdid"] = result;
	});

	WebAgent.invoker("QueryAgentStatus", [COMMOBJ.operatorId,1], function(states){
		var state = getState(states);
		if(state!="300") //300表示通话状态
		{
			GP["state"] = '11' ;
		}
		else
		{
			GP["state"] = '2' ;
		}

		changeAgentIcons() ;
	});

	//挂机操作
	phoneReleaseSuccess(4);


	//AFTERCALL话后置忙，READY:话后就绪， 默认话后就绪,当是p_busiFlag=true时,强制先跳到话后置忙
	if(COMMOBJ.releaseState=="READY"&&COMMOBJ.busiFlag==false)
	{
		WebAgent.invoker("SetIdle", " ");
	}

	//如果是呼入挂机的话，开启小结超时监控
	//if($("#btnSummary").hasClass('light'))
	if(COMMOBJ.boundFlag == "inbound")
	{
		$("#btnReady").removeClass("light");
		$("#btnBusy").removeClass("light");
		COMMOBJ.summaryTimeOutHandle = setTimeout("setSummaryTimeOut()",  COMMOBJ.summaryOverTime*1000);
	}

	/*新满意度调查，当内部转接时不做满意度调查 */
	if(COMMOBJ.transSkills!='')
	{

		$('#btnSatisficing').removeClass('light');
		COMMOBJ.transSkills = '';
	}
	else if(COMMOBJ.boundFlag == "inbound"){
	   doinsertUserSatisfaction(COMMOBJ.requestReleaseFlag);
	}


	COMMOBJ.requestReleaseFlag = 0;

	if(COMMOBJ.outCallCurrentStatus!="")
	{
		stopOutCallInterval();
	}
}
/**
 * [转接失败]
 *
 */
function OnTransFailure()
{
	if(COMMOBJ.outCallCurrentStatus!="")
	{
		stopOutCallInterval();
	}
}
/**
 * [咨询成功]
 */
function OnConsultationSuccess()
{

	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;

		WebAgent.invoker("getCallID", [1], function(result){
			GP["holdid"] = result;

			GP["state"] = '12' ;
			changeAgentIcons() ;


			if(GP["transftype"]=='2'){

				WebAgent.invoker("QueryCallIDOnAgent", [COMMOBJ.operatorId], function(result){
					var curCallId = result;
					if(curCallId == null){
						return;
					}
					var holdId = GP["holdid"];
					if(holdId == null){
						return;
					}
					WebAgent.invoker("Conference", [holdId], function(result){});
					GP["transftype"] = '' ;

				});


			}

			if(COMMOBJ.outCallCurrentStatus=="CALLING")
			{
				stopOutCallInterval();
				startOutCallInterval("TALKING");
			}
		});
	});
}
/**
 * [咨询失败]
 */
function OnConsultationFailure()
{
	if(COMMOBJ.outCallCurrentStatus!="")
	{
		stopOutCallInterval();
	}
}
/**
 * [咨询返回]
 */
function OnConsultationBack()
{
	GP["agentstatus"]=4;  //通话状态
	GP["transftype"] = ""; //不为空,不能打开转接窗口

	GP["state"] = "7" ;// 通话中
	changeAgentIcons() ;

}
/**
 * [签出成功]
 *
 */
function OnSignOutSuccess(MediaType)
{
	//释放注册事件
	eh.dispose();
	//addMessages("签出成功");
	//refreshBtns(0);
	//$("#state").val(0);
	//
	GP["state"] = "1" ;
	changeAgentIcons() ;
	logonOrnot(0) ;
}
/**
 * 强制释放
 */
function OnForceRelease()
{
	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
		WebAgent.invoker("getCallID", [1], function(result){
			GP["holdid"] = result;
			if(GP["callid"]=='0' && GP["holdid"]=='0')
			{

				GP["state"] = "11" ;

			}else
				GP["state"] = "7" ;

			changeAgentIcons() ;
	    });
	});
}

/**
 * 单步转移成功
 */
function OnSingleStepTransSuccess()
{
	//呼入挂机（OnReleaseSuccess，OnTransSuccess）4：必须保证前一个状态是3，其他的忽略。
		
	if(COMMOBJ.ctiPrevStatus=='3'||COMMOBJ.ctiPrevStatus=='7'){
		doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '4', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);
	}	
	else
	{	
		
		COMMOBJ.ctiPrevStatus = '4';
		setCtiPrevStatusTime(getCurDateTime());
	}		

	//清除计时器
	clearCallCountHandle();

	//清空疑难工号
	COMMOBJ.diffStaff = '';

	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
	});
	WebAgent.invoker("getCallID", [1], function(result){
		GP["holdid"] = result;
	});

	WebAgent.invoker("QueryAgentStatus", [COMMOBJ.operatorId,1], function(states){
		var state = getState(states);
		if(state!="300") //300表示通话状态
		{
			GP["state"] = '11' ;
		}
		else
		{
			GP["state"] = '2' ;
		}

		changeAgentIcons() ;
	});




	//挂机处理
	phoneReleaseSuccess(4);
	//如果是呼入挂机的话，开启小结超时监控
	//if($("#btnSummary").hasClass('light'))
	if(COMMOBJ.boundFlag == "inbound")
	{
		$("#btnReady").removeClass("light");
		$("#btnBusy").removeClass("light");
		COMMOBJ.summaryTimeOutHandle = setTimeout("setSummaryTimeOut()", COMMOBJ.summaryOverTime*1000);
	}

	/*新满意度调查，当内部转接时不做满意度调查 */
	if(COMMOBJ.transSkills!='')
	{

		$('#btnSatisficing').removeClass('light');
		COMMOBJ.transSkills = '';
	}
	else if(COMMOBJ.boundFlag == "inbound"){
	   doinsertUserSatisfaction(COMMOBJ.requestReleaseFlag);
	}

	COMMOBJ.requestReleaseFlag = 0;

	setToolbarState("1");

	//AFTERCALL话后置忙，READY:话后就绪， 默认话后就绪,当是p_busiFlag=true时,强制先跳到话后置忙
	if(COMMOBJ.releaseState=="READY"&&COMMOBJ.busiFlag==false)
	{
		WebAgent.invoker("SetIdle", " ");
	}
}
/**
 * 有消息到达事件
 * @param {[String]} msg [消息内容]
 */
function OnMessageReceiveEx(msg)
{

	//消息格式：srcAgtId=3102;MSG=你好
	var msgArray = msg.split(";MSG");
	var sendAgent='';
	var sendMsg='';
	if(msgArray.length>0)sendAgent=msgArray[0];
	if (sendAgent.indexOf('=') > 0) sendAgent = sendAgent.substr(sendAgent.indexOf('=')+1);
	if(msgArray.length>1)sendMsg=msgArray[1];
	if (sendMsg.indexOf('=') >= 0) sendMsg = sendMsg.substr(sendMsg.indexOf('=')+1);
	/**  疑难席员需求，有延长沟通时长和倒计时提醒功能,DELAYTIMES表示需要延长沟通时长30秒*/
	if(sendMsg=='DELAYTIMES')
	{
		COMMOBJ.outCallCurrentWaitTime += 30;
		return;
	}
	/** 疑难席员需求，有延长沟通时长和倒计时提醒功能,DELAYTIMES表示需要延长沟通时长30秒*/

	//接收到疑难专席的工号
	else if(sendMsg.indexOf('DIFF@')==0)
	{
		COMMOBJ.diffStaff = sendMsg.replace('DIFF@','');
		return;
	}
	//用户先挂机
	else if(sendMsg=='HANGUP')
	{

		stopOutCallInterval();
		COMMOBJ.transReason = '';
		startOutCallInterval("ABTALKING");

		countZeroChangeHtml("<font size=2.0 color='red'>请注意，用户已挂机</font><br><br>");
		showMessage("用户已挂机");
		return;
	}
	//咨询转接成功，在疑难专席播放“嘟”一声
	else if(sendMsg=='TRANSSUCCESS')
	{
		COMMOBJ.hastransferred = true; //已转接入标记

		playDuSound();
		clearCallCountHandle();//清除计时器

		COMMOBJ.transReason = '';
		doActionCallCount();

		countZeroChangeHtml("<font size=2.0 color='red'>请注意，电话已转入</font><br><br>");
		showMessage("请注意，电话已转入");
	    setTimeOut("countZeroChangeHidden()",3000);
		return;
	}
	//疑难座席主动要求接入
	else if(sendMsg=='DOTRANS')
	{
		if($('#btnTransfer').hasClass('light'))
			{
				doTransfer();
			}
		return;
	}
	//转疑难专席优化
	if(sendAgent!='')
	{
		//显示座席之间的对话框
		//parent.showChatWindow(sendAgent, sendMsg);
	}
}
/**
 * [保持呼叫释放通知]
 * @param {[type]} sender [description]
 */
function OnHoldCallRelease(sender)
{
	if(COMMOBJ.diffStaff!='')
	{
		try
		{
			SendMessageToAgent("HANGUP", COMMOBJ.diffStaff, 1);
		}
		catch(ex)
		{
		}
		stopOutCallInterval();
		showMessage("用户已挂机");
	}
}
/**
 * [设置休息成功]
 */
function OnSetRestSuccess()
{
	setSignal(5);
}
/**
 * [设置小休]
 * @param {[type]} restcallfun [description]
 */
function setRest(restcallfun)
{
	
	WebAgent.invoker("ApplyRest", [100, '小休'], function(ret){	
		if(ret!=0)
		{
			restcallfun(ret)
		}
		else
		{
			WebAgent.invoker("SetRest", COMMOBJ.operatorId, function(ret){	
				restcallfun(ret)
			});
		}
	});

}
function setBtnResetDisabled(flag)
{
	if(flag)
	{
		$("#btnRest").removeClass("light");
	}else
	{
		$("#btnRest").addClass("light");
	}
}
/**
 * CTI通知
 * @param {[Integer]} EventType [事件类型]
 * @param {[String]} Param     [扩展参数]
 */
function OnCtiReport(EventType, Param)
{
	if(EventType==103)
	{

		if(GP["agentstatus"]==1&&COMMOBJ.currSignal!='REST') //示忙状态时，直接提示重新注册工号
		{

			alertShow("当前工号的技能中兴平台做了调整，系统将自动重新注册工号！");

			WebAgent.logout(function(isSucc) {
				//释放注册事件
				eh.dispose();
				//addMessages("签出成功");
				//refreshBtns(0);
				//$("#state").val(0);
				//
				GP["state"] = "1" ;
				changeAgentIcons() ;
				logonOrnot(0) ;

				doSignIn();
			});

		}
		else
		{
			COMMOBJ.skillChanged = true;
		}
	}
}
/**
 * [获取分机号]
 *
 */
function getdn()
{
	WebAgent.invoker("GetAgentInfo", COMMOBJ.operatorId, function(result){
		if(result!=null)
		{
			var retary = result.split("|");
			if(retary.length >= 5)
			{
				COMMOBJ.dn = retary[4];
			}


		}
	});
}

function playAgentID()
	{
	   var agentId = COMMOBJ.operatorId.toString();
	   var len = agentId.length;
	   var wavPath = COMMOBJ.wavPath;
	   var soundstr = "";
	   for(var ni=0; ni < len; ni++)
	   {
	   	  if(ni==0)
	   	  {
	   	  	soundstr = wavPath + "\\" + agentId.substring(ni, ni+1) + ".wav";
	   	  }
	   	  else
	   	  {
	   	  	soundstr += "|" + wavPath + "\\" + agentId.substring(ni, ni+1) + ".wav";
	   	  }
	   }
	   soundstr += "|" + wavPath + "\\service.wav";


	   try
	   {

	     WebAgent.invoker("PlayLocalMedia", [len+1, soundstr, 1], function(result){});
	   }
	   catch(ex)
	   {
	   }
	}
/**
 * 点击登录按钮事件
 */
function clickSignIn() {

	showMessage("登陆中");
    //COMMOBJ.zeroCfgURL = 'http://134.96.112.226:8080/was';
    //COMMOBJ.vcid = 2;
    //COMMOBJ.operatorId = 3103;
    //COMMOBJ.password = 'Abc123';

	doSignIn();
}

/**
 * 点击签出按钮
 */
function clickSignOut() {

	WebAgent.logout(function(isSucc) {

		doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '6', COMMOBJ.Skill, null, COMMOBJ.ConnectionID);
		//释放注册事件
		eh.dispose();
		addMessages("签出成功");
		//refreshBtns(0);
		//$("#state").val(0);
		//
		GP["state"] = "1" ;
		COMMOBJ.LogonFlag = 0;
		changeAgentIcons() ;
		logonOrnot(0) ;


	});
}
function clickAfterReady()
{
	if(COMMOBJ.releaseState=="READY")//BUSY话后置忙，READY:话后就绪， 默认话后就绪
	{
		$('#btnAfterReadyText').html("话后置忙");
		$('#btnAfterReadyIcon').removeClass("icon-huawuyuan1");
		$('#btnAfterReadyIcon').addClass("icon-mangluzhong");		
		
		COMMOBJ.releaseState = "BUSY";
	}
	else
	{

		$('#btnAfterReadyText').html("话后就绪");
		$('#btnAfterReadyIcon').addClass("icon-huawuyuan1");
		$('#btnAfterReadyIcon').removeClass("icon-mangluzhong");				
		COMMOBJ.releaseState = "READY";
	}
}
/**
 * 小结后的操作
 */
function doSummaryAfter() {

	clearSummaryTimeOutHandle();
	
	
	//COMMOBJ.skillChanged==true,表示平台在NGCCMAN上作了组调整，需要座席进行重签操作
	if(COMMOBJ.skillChanged==true)
	{
		COMMOBJ.skillChanged = false;
		alertShow("当前工号的技能中兴平台做了调整，系统将自动重新注册工号！");	
		//注销电话，重新注册
		clickSignOut();	
		
	}
	else
	{
		COMMOBJ.busiFlag = true; //置忙标志置成true,不会自动转到就绪
		if(GP["agentstatus"]==1||GP["agentstatus"]==5) /* 当前用户状态 [0:'未登陆',1:'示忙',2:'空闲',3:'休息',4:'通话中',5:'话后'] */
		{
			setCtiState();
		}
		else
		{
			setTimeout("setCtiState()", 500);
		}	
	}
	countZeroChangeHidden();
}
/**
 * 手动执行小结后的操作
 */
function doSummaryAfterByHandle() {

	
	
	$("#btnReady").addClass("light");
	$("#btnBusy").addClass("light");

	try
	{
		WebAgent.invoker("SetIdle", " ");
	}catch(ex)
	{

	}

	clearSummaryTimeOutHandle();
	countZeroChangeHidden();
}
	
//设置cti状态
function setCtiState()
{
	COMMOBJ.busiFlag = false;
	$("#btnReady").addClass("light");
	$("#btnBusy").addClass("light");
	if(COMMOBJ.releaseState=="READY")//AFTERCALL话后置忙，READY:话后就绪， 默认话后就绪
	{
		if(GP["agentstatus"]!=2) 
		{
			
			WebAgent.invoker("SetIdle", " ");
			countZeroChangeHidden();
		}
	}
	else
	{
		if(GP["agentstatus"]!=1) 
		{
			WebAgent.invoker("SetBusy", " ");
		}
	}
	COMMOBJ.busiFlag = true;
}
/**
 * 点击示闲按钮
 */
function clickSetIdle() {

	$("#btnReady").addClass("light");
	$("#btnBusy").addClass("light");
	WebAgent.invoker("SetIdle", " ");
	countZeroChangeHidden();
}

/**
 * 点击示忙按钮
 */
function clickSetBusy() {
	$("#btnReady").addClass("light");
	$("#btnBusy").addClass("light");
	WebAgent.invoker("SetBusy", " ");
}
/**
 * 点击保持
 */
function clickHold()
{

		if(GP["ishold"] == '1'){
			WebAgent.invoker("GetCallID", [1], function(callid){

				WebAgent.invoker("RetrieveHold", [callid], function(ret){
					if(ret==0)
					{
						

						$('#btnHoldText').html('保持');
						$('#btnHoldIcon').addClass('icon-tonghuabaochi-copy');
						$('#btnHoldIcon').removeClass('icon-huifutonghuazhuanhuan-copy');
					}
				});
			});
			//ret = CallCtrlObject.RetrieveHold(CallCtrlObject.GetCallID(1)) ; // 0 current callid ,1 hold callid
			//记轨迹
			getOldWindow().doHold({TRANSDATA:'取消保持'});
			//return ;
		}else{

			WebAgent.invoker("Hold", " ",function(ret){
				if(ret==0)
				{
					$('#btnHoldText').html('恢复');
					$('#btnHoldIcon').removeClass('icon-tonghuabaochi-copy');
					$('#btnHoldIcon').addClass('icon-huifutonghuazhuanhuan-copy');
				}
			});
			//记轨迹
			getOldWindow().doHold({TRANSDATA:'保持操作'});

		}

}
/**
 * 请求帮助
 */
function clickAppeal()
{

}
/**
 * 满意度调查
 */
function clickSatisficing()
{

		if(COMMOBJ.LogonFlag==0) return true;

		
		$("#btnSatisficing").removeClass("light");
		

		//GP["agentstatus"]=0; /* 当前用户状态 [0:'未登陆',1:'示忙',2:'空闲',3:'休息',4:'通话中',5:'话后'] 
		if(!(GP["agentstatus"]==5||GP["agentstatus"]==4))
		{
			alertShow("当前状态不允许做满意度调查");	
			return;		
		}
		
		if(COMMOBJ.userSatisfaInserted==true)
		{
			return;
		}
		COMMOBJ.userSatisfaInserted = true;
		
		/*remark:对于咨询的疑难话务，如果电话没有转接过来，不做满意度调查*/
		if(COMMOBJ.transAgentId!=''&&!COMMOBJ.hastransferred)
		{
			return;
		}
		/*remark:对于咨询的疑难话务，如果电话没有转接过来，不做满意度调查*/
	
		
		var SCOREBY = ""; //SMS IVR
		var DviceType = "0";
		var DviceAreaCode = "";
		var PhoneNumber = COMMOBJ.OriginalANI;
		
		if(COMMOBJ.callPhoneType=="1"||COMMOBJ.callPhoneType=="8")//1.小灵通 ,8.移动号码, 空时.非电信号码
		{
			DviceType = "1";
		}

		if(COMMOBJ.callPhoneType==""){// 空时.非电信号码,区号取ivr转入时的被叫号码的前4位
			if(COMMOBJ.OriginalDNIS.length>=4){
				DviceAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
			}
		}
		else
		{
			DviceAreaCode = COMMOBJ.callPhoneArea;
			if(DviceAreaCode.length!=4)
			{
				if(COMMOBJ.OriginalDNIS.length>=4){
					DviceAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
				}			
			}
		}
		//传被叫的区号
		var CalledAreaCode = "";
		if(COMMOBJ.OriginalDNIS.length>=4){
			CalledAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
		}
		var stopreason = "";  //1.话务员挂机 2.用户挂机标志
		var onlineflag = "0";  //是否在线调查，1是，0不是，默认为0或空
		/*end of added by samen for GAP_KF_1649 date:2014-08-11 remark:话后满意度调查优化*/
		if(GP["agentstatus"]==4)//通话中,做挂机动作
		{
			SCOREBY = "IVR";
			

			var calldata = "3^"+COMMOBJ.operatorId+"^"+COMMOBJ.staffName+"^"+COMMOBJ.dn+"^"+COMMOBJ.Skill+"^"+DviceAreaCode+"^"+PhoneNumber+"^"+DviceType+"^"+COMMOBJ.ConnectionID+"^"+CalledAreaCode;

			stopreason = "1";
			onlineflag = "1";

			WebAgent.invoker("SetCallData", [0, calldata], function(result) {
				/*请稍后通过语音或短信对本次服务进行评价，再见。”客服支撑在客服代表主动挂机后，把话务转到IVR */

				//记录一下挂机轨迹
				getOldWindow().doActiveHandup();

				if(COMMOBJ.baseCustomerSkills.indexOf(","+COMMOBJ.Skill+",")<0)
				{ 
					//插入满意度调查记录
					insertUserSatisfaction({CUSTOMID:COMMOBJ.ConnectionID,SKILL:COMMOBJ.Skill,CALLERID:PhoneNumber,AREA:DviceAreaCode,SCOREBY:SCOREBY,DEVICETYPE:DviceType,CALLEDAREA:CalledAreaCode,STOPREASON:stopreason,ONLINEFLAG:onlineflag});
				}

				doHandup();
			});

			


		}
		else
		{
			SCOREBY = "IVR"; //公共服务平台要求统一成IVR
			stopreason ="2";
			if(COMMOBJ.baseCustomerSkills.indexOf(","+COMMOBJ.Skill+",")<0)
			{ 
				//插入满意度调查记录
				insertUserSatisfaction({CUSTOMID:COMMOBJ.ConnectionID,SKILL:COMMOBJ.Skill,CALLERID:PhoneNumber,AREA:DviceAreaCode,SCOREBY:SCOREBY,DEVICETYPE:DviceType,CALLEDAREA:CalledAreaCode,STOPREASON:stopreason,ONLINEFLAG:onlineflag});
			}

		}
		
				

}
/**
 * 点击挂机事件
 */
function clickHandup()
{
	$('#btnSatisficing').removeClass('light');

	//如果已做满意度调查或不是呼入的电话，只做挂机动作
	if(COMMOBJ.userSatisfaInserted==true || COMMOBJ.boundFlag != "inbound")
	{
		//记录一下挂机轨迹
		getOldWindow().doActiveHandup();
		doHandup();
		return;
	}
	else
	{
		COMMOBJ.userSatisfaInserted = true;

		var SCOREBY = ""; //SMS IVR
		var DviceType = "0";
		var DviceAreaCode = "";
		var PhoneNumber = COMMOBJ.OriginalDNIS;

		if(COMMOBJ.callPhoneType=="1"||COMMOBJ.callPhoneType=="8")//1.小灵通 ,8.移动号码, 空时.非电信号码
		{
			DviceType = "1";
		}

		if(COMMOBJ.callPhoneType==""){// 空时.非电信号码,区号取ivr转入时的被叫号码的前4位
			if(COMMOBJ.OriginalDNIS.length>=4){
				DviceAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
			}
		}
		else
		{
			DviceAreaCode = COMMOBJ.callPhoneArea;
			if(DviceAreaCode.length!=4)
			{
				if(COMMOBJ.OriginalDNIS.length>=4){
					DviceAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
				}			
			}
		}

		//传被叫的区号
		var CalledAreaCode = "";
		if(COMMOBJ.OriginalDNIS.length>=4){
			CalledAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
		}
		var stopreason = "1";  //1.话务员挂机 2.用户挂机标志
		var onlineflag = "1";  //是否在线调查，1是，0不是，默认为0或空

		SCOREBY = "IVR";

		/*请稍后通过语音或短信对本次服务进行评价，再见。”客服支撑在客服代表主动挂机后，把话务转到IVR */

		var calldata = "3^"+COMMOBJ.operatorId+"^"+COMMOBJ.staffName+"^"+COMMOBJ.dn+"^"+COMMOBJ.Skill+"^"+DviceAreaCode+"^"+PhoneNumber+"^"+DviceType+"^"+COMMOBJ.ConnectionID+"^"+CalledAreaCode;


		WebAgent.invoker("SetCallData", [0, calldata], function(result) {
			/*请稍后通过语音或短信对本次服务进行评价，再见。”客服支撑在客服代表主动挂机后，把话务转到IVR */

			//记录一下挂机轨迹
			//parent.doActiveHandup();

			doHandup();



			if(COMMOBJ.baseCustomerSkills.indexOf(","+Skill+",")<0)
			{
				//插入满意度调查记录
				insertUserSatisfaction({CUSTOMID:COMMOBJ.ConnectionID,SKILL:COMMOBJ.Skill,CALLERID:PhoneNumber,AREA:DviceAreaCode,SCOREBY:SCOREBY,DEVICETYPE:DviceType,CALLEDAREA:CalledAreaCode,STOPREASON:stopreason,ONLINEFLAG:onlineflag});
			}
		});
	}
}
function SetPhoneMute(){
		
	if(COMMOBJ.LogonFlag==0) return ;


	WebAgent.invoker("SetPhoneMute", [GP["ismute"]=='1'?'0':'1'], function(ret) {


	
		if(ret!=0) {
			showMessage((GP["ismute"]=='1'?'取消静音':'设置静音')+'失败!') ;
		}else{
		
			getOldWindow().setMute({TRANSDATA:GP["ismute"]=='1'?'取消静音':'设置静音'});
			
			if(GP["ismute"]=='1')
			{
				setSignal(202);
			}
			else
			{
				setSignal(201);
			}
			GP["ismute"] = (GP["ismute"]=="1"?'0':'1') ;
		}
	});
	
}

function setBreak()
{
	if(COMMOBJ.LogonFlag==0 || COMMOBJ.currSignal=="READY" || COMMOBJ.currSignal=="REST" || COMMOBJ.currSignal=="ACW")
	{ 
		showMessage('当前状态不允许小休');
		return;
	}
	$("#btnRest").removeClass("light");

	WebAgent.invoker("QueryAgentStatus", [COMMOBJ.operatorId, 1], function(states) {

	
		var state = getState(states);
		
		//300表示通话状态
		//300表示通话状态,AgentBusy=3xx,107预拨状态,102（离席、休息、请假）状态
		var stateAry = ",102,107,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,";
		if(stateAry.indexOf(','+state+',')>=0){
			alertShow('当前状态不允许小休');
			$("#btnRest").addClass("light");
			return true; 	 
		}

		staffRest();
	});

}
function unshieldInfoAll()
{
	var unshieldData = {action:"unshieldInfoAll"}


	var msgstr = JSON.stringify(unshieldData);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}
function staffRest()
{
    var restData = {action:"staffRest"}


	var msgstr = JSON.stringify(restData);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}

/**
 * 点击呼出按钮
 */
function clickCallOut() {
	var callee = $.trim($("#callee").val());
	if (callee.length == 0) {
		alertShow("未输入呼出号码");
		return;
	}

	callee = parseInt(callee, 10);
	if (isNaN(callee)) {
		alertShow("呼出号码应为数字");
		return;
	}
	WebAgent.invoker("GetCallMediaType", "", function(mediaType) {
		WebAgent.invoker("CallOutsideEx",
				[ mediaType, "", callee, "10000", 0, 0, "" ], function(ret) {
					if (ret != 0) {
						promptLastError();
					}
				});
	});

}

/**
 *点击挂机按钮
 */
function clickHangup() {
	// 获取媒体类型 0：语音，6：视频
	 WebAgent.invoker("GetCallMediaType", "", function(mediatype){
         WebAgent.invoker("ReleaseCall", mediatype, function(ret){
                	 if(ret != 0){
                		 promptLastError();
                	 }
                 });
         });

}

/**
 * 添加消息内容
 *
 * @param msg
 *            消息内容
 */
function addMessages(msg) {
	//$("#messages").prepend(
	//		$("<p></p").text(new Date().toLocaleString() + " " + msg));
	console.log(new Date().toLocaleString() + " " + msg);
}



function setnotready(){
	if(COMMOBJ.LogonFlag==0) return true;

	// if(g_skillChanged==true)
	// {
	// 	g_skillChanged = false;

	// 	alert("当前工号的技能中兴平台做了调整，系统将自动重新注册工号！");

	// 	//注销电话
	// 	doRegister();
	// 	signIn(agentId,agentPwd,dn) ;
	// }
	// else if(statechange("NOT_READY")){
	// 	//setSignal(2) ;
	// }
}
function forcesetnotready(){
	if(COMMOBJ.LogonFlag==0) return true;
	WebAgent.invoker("SetBusy", " ");
}

function getCurDateTime()
{
	var myDate = new Date();

	var year = myDate.getYear();
	var month = myDate.getMonth() + 1;
	var date = myDate.getDate();
	var day = myDate.getDay();
	var curDateTime = year;
    if(month > 9){
		curDateTime = curDateTime + '-' + month;
	}else{
		curDateTime = curDateTime + "-0" + month;
	}
	if(date > 9){
		curDateTime = curDateTime + '-' + date;
	}else{
		curDateTime = curDateTime + "-0" + date;
   	}
	curDateTime = curDateTime + ' ' + myDate.toLocaleTimeString();

	return curDateTime;
}

function writeTransNormal()
{

	countZeroChangeHtml('<br>');
	
}

function doActionCallCount()
{
	COMMOBJ.callCountSecond++; //通话时长增加一秒
	COMMOBJ.transCountSecond--;//算出剩余时长

	COMMOBJ.callCountHandler = setTimeout("doActionCallCount()", 1000);
	//在此处刷新显示内容

	writeDuration();

	if(COMMOBJ.transReason!=''){writeTransDuration();}

}
//延长30秒
function transDelayTimes()
{
	var btnDelayTimes = document.getElementById('btnDelayTimes');
	btnDelayTimes.disabled = true;
	btnDelayTimes.href="javascript:;";
	//发送延长沟通时间给普通座席
	SendMessageToAgent("DELAYTIMES", COMMOBJ.transAgentId, 1,function(ret){
		if(ret==0)
		{
			COMMOBJ.transCountSecond += 30;
		}
		else
		{
			alertShow("延长沟通时间失败，请重试！");
			btnDelayTimes.disabled = false;
			btnDelayTimes.href="javascript:transDelayTimes();";
		}
	});
	
}

//疑难专席主动接入
function actionTrans()
{
	var btnActionTrans = document.getElementById('btnActionTrans');
	btnActionTrans.disabled = true;
	btnActionTrans.href="javascript:;";
	SendMessageToAgent("DOTRANS", g_transAgentId, 1,function(ret){
		if(ret!=0)
		{
			alertShow("接入失败，请重试！");
			btnActionTrans.disabled = false;
			btnActionTrans.href="javascript:actionTrans();";
		}
	});
	
		
	
}

function writeDuration()
{

	//countZeroChangeHead("<font size=2 color='red'><strong>本次通话时长："+COMMOBJ.callCountSecond+"秒</strong></font>")
	 $('#inpPhoneCount').html(COMMOBJ.callCountSecond);
}
function writeTransDuration()
{
	 var duration = document.getElementById('lbtransDuration');

	 if(duration)
	 {

     	var durationHtml = "沟通倒计时："+(COMMOBJ.transCountSecond<0?0:COMMOBJ.transCountSecond)+"秒";

     	duration.innerHTML = durationHtml;
     }
}

/**
 * 发送消息给座席
 */
function SendMessageToAgent(msg, obj, kind,docallback)
{
	 WebAgent.invoker("SendMessageToAgent", [msg, obj, kind], function(result){
	 	if(docallback)
	 	{
	 		docallback(result);
	 	}
     });

}

//疑难转接显示
function writeTransDiff(transReasonType)
{
	
	var transReasonMsg = "";
	if(transReasonType=='1')
	{
		transReasonMsg = '宽带预存送解释';
	}else if(transReasonType=='2')
	{
		transReasonMsg = '越级投诉(包括要求领导接听电话等)';
	}else if(transReasonType=='3')
	{
		transReasonMsg = '超过600秒的疑难话务';
	}else if(transReasonType=='4')
	{
		transReasonMsg = '政企类帐单疑义解释';
	}else if(transReasonType=='5')
	{
		transReasonMsg = '普通账单疑义解释';
	}else if(transReasonType=='6')
	{
		transReasonMsg = '内部员工差错';
	}else if(transReasonType=='7')
	{
		transReasonMsg = '其他';
	}
	// 疑难专席增加转接选择项“C网改套餐或拆机”
	else if(transReasonType=='8')
	{
		transReasonMsg = 'C网改套餐或拆机';
	}
	//end of 疑难专席增加转接选择项“C网改套餐或拆机”
	//added by samen GAP_KF_1684 2014-8-13 固话故障强切,疑难专席增加转接选择项“固话报障引导自助失败（台州暂不用）”
	else if(transReasonType=='9')
	{
		transReasonMsg = '固话报障引导自助失败';
	}


	countZeroChangeHtml("<font size=2.0 color='red'>转接原因是："+transReasonMsg+"，<label id='lbtransDuration' >沟通倒计时：30秒</label></font><a id='btnDelayTimes' href='javascript:transDelayTimes();' >延长时间</a>&nbsp;&nbsp;<a id='btnActionTrans' href='javascript:actionTrans();' >接入</a>");
}

function setToolbarState(ctiState)
{
	//1:结束通话 2:通话
	if(ctiState=="1")
	{

		if(COMMOBJ.boundFlag=="inbound")
		{
			 $("#btnSummary").addClass("light");
		}
		$("#btnSatisficing").removeClass("light");

	}
	else
	{

		$("#btnSatisficing").addClass("light");
		$("#btnSummary").removeClass("light");

	}
}
/**
 * [清除计时器]
 *
 */
function clearCallCountHandle()
{
	if(COMMOBJ.callCountHandler)
	{
		clearTimeout(COMMOBJ.callCountHandler);
		COMMOBJ.callCountHandler = null;
		
		countZeroChangeHtml('<br>');
	}
}
/**
 * [清除呼入计时器]
 * @return {[type]} [description]
 */
function stopOutCallInterval()
{
	if(COMMOBJ.outCallTimeoutHandler)
	{
		clearTimeout(COMMOBJ.outCallTimeoutHandler);
		COMMOBJ.outCallTimeoutHandler = null;
		COMMOBJ.outCallCurrentStatus = "";

		countZeroChangeTime('0');
	}
}
function setSummaryTimeOut()
{

	
	$("#msgBox").html("小结超时");

	$("#msgBoxDiv").attr("class","myself-bottom-item rest");

	COMMOBJ.summaryTimeOutHandle = null;
}
//解析软电话的状态
function getState(states)
{
	if(states.indexOf(":")>=0)
	{
		var stateary = states.split(":");
		return stateary[stateary.length - 1];
	}
	else
	{
		return states;
	}
}

function startOutCallInterval(status)
 {
 	if(status=="CALLING")
 		COMMOBJ.outCallCurrentWaitTime = COMMOBJ.outCallMaxWaitTime;
 	//转疑难专席优化
 	else if(status=="ABTALKING")
 		COMMOBJ.outCallCurrentWaitTime = 60; //用户挂机后，AB座席沟通时间最长时间60秒
 	else
 		COMMOBJ.outCallCurrentWaitTime = COMMOBJ.outCallTalkMaxWaitTime;

	if(COMMOBJ.transPhone!=''&&status=="TALKING")COMMOBJ.outCallCurrentWaitTime=0;


 	countZeroChangeShow();
 	countZeroChangeHead('');
 	countZeroChangeTime(COMMOBJ.outCallCurrentWaitTime);


 	COMMOBJ.outCallCurrentStatus = status;



 	COMMOBJ.outCallTimeoutHandler = setTimeout("OutCallAction()", 1000);

 }
 /**
  * 呼出计时
  */
 function OutCallAction()
 {
 	if(COMMOBJ.transPhone!=''&&COMMOBJ.outCallCurrentStatus=="TALKING")
	{
	 	COMMOBJ.outCallCurrentWaitTime = COMMOBJ.outCallCurrentWaitTime + 1;
	 
	 	countZeroChangeTime(COMMOBJ.outCallCurrentWaitTime);
	 	COMMOBJ.outCallTimeoutHandler = setTimeout("OutCallAction()", 1000);
	}
	//added by samen GAP_KF_1688 2014.9.15 remark:转疑难专席优化
	else if(COMMOBJ.outCallCurrentStatus=="ABTALKING")
	{
	 	COMMOBJ.outCallCurrentWaitTime = COMMOBJ.outCallCurrentWaitTime - 1;
	 
	 	countZeroChangeTime(COMMOBJ.outCallCurrentWaitTime);

	 	if(COMMOBJ.outCallCurrentWaitTime==0)
	 	{

	 		//时间到，自动挂机
	 		countZeroChangeTime('0');
	 		doHandup();
	 		COMMOBJ.outCallCurrentStatus = "";

	 	}
	 	else
	 	{
	 		COMMOBJ.outCallTimeoutHandler = setTimeout("OutCallAction()", 1000);
	 	};
	}
	//end of added by samen GAP_KF_1688 2014.9.15 remark:转疑难专席优化
	else
	{
	 	COMMOBJ.outCallCurrentWaitTime = COMMOBJ.outCallCurrentWaitTime - 1;

	 	countZeroChangeTime(COMMOBJ.outCallCurrentWaitTime);

	 	if(COMMOBJ.outCallCurrentWaitTime==0)
	 	{

	 		//时间到，自动停止呼叫
	 		countZeroChangeTime('0');

	 		if(COMMOBJ.outCallCurrentStatus=="CALLING")
	 		{
		 		

		 		WebAgent.invoker("getCallID", [0], function(result){
					GP["callid"] = result;
					WebAgent.invoker("getCallID", [1], function(result){
						GP["holdid"] = result;

						if((!GP["callid"]=='0' || GP["holdid"]=='0')){
						  doHandup();
						}
					});
				});
	 		}
	 		//时间到，自动转出
	 		else if(COMMOBJ.outCallCurrentStatus=="TALKING")
	 		{
	 			//if(lnkTransfer.href == "javascript:doTransfer();")
	 			//{
	 				doTransfer();
	 			//}
	 		}
	 		COMMOBJ.outCallCurrentStatus = "";
	 	}
	 	else
	 	{
	 		COMMOBJ.outCallTimeoutHandler = setTimeout("OutCallAction()", 1000);
	 	};
	 }

 }

 function doHandup(ivrflag){
	if(ivrflag==undefined||ivrflag==null)
	{
		COMMOBJ.requestReleaseFlag = 1;//话务员挂机
	}
	else
	{
		COMMOBJ.requestReleaseFlag = 5;//转IVR挂机
	}

	WebAgent.invoker("getCallID", [0], function(result){
		GP["callid"] = result;
		WebAgent.invoker("getCallID", [1], function(result){
			GP["holdid"] = result;
			if(GP["callid"]=='0' || GP["holdid"]=='0'){

				WebAgent.invoker("ReleaseCall", 0, function(result){});
			}else{

				WebAgent.invoker("ReConnect", GP["holdid"], function(ret){
					if(ret==0)
					{
						if(COMMOBJ.outCallCurrentStatus!="")
						{
							stopOutCallInterval();
						}
					}
				});


			}
		});
	});

}

function doTransfer() {


	if(GP["holdid"]!='0' && GP["transftype"] == '1'){

		WebAgent.invoker("Transfer", 0, function(result){});

	}
	//转接窗体
	//else
	//	doConsultation() ;
}

function playDuSound()
{

   var soundstr = COMMOBJ.wavPath + "\\du.wav";

   try
   {

     WebAgent.invoker("PlayLocalMedia", [1, soundstr, 1], function(result){});
   }
   catch(ex)
   {
   }
}

$(document).ready(function () {

	$(window).unload(function(){
	  if(GP["agentstatus"]==4)
	  {
	  	clickHandup();
	  }
	  if(GP["agentstatus"]!=0)
	  {
	  	clickSignOut();
	  }
	});
});


//插入满意度调查
function doinsertUserSatisfaction(stopreason)
{
	
	$("#btnSatisficing").removeClass("light");
	
	//小于5秒的超短话务，不做满意度调查
	var curDt = new Date();
	if(parseInt((curDt.getTime() - COMMOBJ.callinDatetime.getTime()) / 1000) <= 5)
	{
		return;
	}
	
	/*remark:对于咨询的疑难话务，如果电话没有转接过来，不做满意度调查*/
	if(COMMOBJ.transAgentId!=''&&!COMMOBJ.hastransferred)
	{
		return;
	}
	/*remark:对于咨询的疑难话务，如果电话没有转接过来，不做满意度调查*/
	
	/*remark:话后满意度调查优化，改成要做满意度调查*/	

	if(COMMOBJ.userSatisfaInserted==true)return;
	COMMOBJ.userSatisfaInserted = true;
	/*remark:话后满意度调查优化，改成要做满意度调查*/	
	
	//如果是基地客服技能，不插入满意度调查记录
	if(COMMOBJ.baseCustomerSkills.indexOf(","+COMMOBJ.Skill+",")<0)
	{		
		var DviceType = "0";
		var DviceAreaCode = "";
		var PhoneNumber = COMMOBJ.OriginalANI;
		
		if(COMMOBJ.callPhoneType=="1"||COMMOBJ.callPhoneType=="8")//1.小灵通 ,8.移动号码, 空时.非电信号码
		{
			DviceType = "1";
		}
		if(COMMOBJ.callPhoneType==""){// 空时.非电信号码,区号取ivr转入时的被叫号码的前4位
			if(COMMOBJ.OriginalDNIS.length>=4){
				DviceAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
			}
		}
		else
		{
			DviceAreaCode = COMMOBJ.callPhoneArea;
			if(DviceAreaCode.length!=4)
			{
				if(COMMOBJ.OriginalDNIS.length>=4){
					DviceAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
				}			
			}
		}
		//传被叫的区号
		var CalledAreaCode = "";
		if(COMMOBJ.OriginalDNIS.length>=4){
			CalledAreaCode = COMMOBJ.OriginalDNIS.substring(0,4);
		}
		
		var SCOREBY = "IVR"; //公共服务平台要求统一成IVR
		
		

		if(PhoneNumber!=''&&PhoneNumber!=null)
		{
		   //插入满意度调查记录
		   insertUserSatisfaction({CUSTOMID:COMMOBJ.ConnectionID,SKILL:COMMOBJ.Skill,CALLERID:PhoneNumber,AREA:DviceAreaCode,SCOREBY:SCOREBY,DEVICETYPE:DviceType,CALLEDAREA:CalledAreaCode,STOPREASON:stopreason});
		   
		}
	}
	
	
}	

function clickSummary()
{
	var btnSummaryDis = false;
	if($("#btnSummary").hasClass("light"))
	{
		btnSummaryDis = true;
	}
	
	$("#btnSummary").removeClass("light");
	$("#btnSatisficing").removeClass("light");
		
		
	if(COMMOBJ.LogonFlag!=0){
	
		
		if(GP["agentstatus"]==4) //4表示通话状态
		{
			alertShow("通话状态不允许小结操作");	

			$("#btnSummary").addClass("light");
			if(btnSummaryDis)
			{
				$("#btnSatisficing").addClass("light");
			}

			return;
		
		}else if(GP["agentstatus"]==2) //2表示就绪状态,空闲
		{
			alertShow("就绪状态不允许小结操作");	

			$("#btnSummary").addClass("light");
			if(btnSummaryDis)
			{
				$("#btnSatisficing").addClass("light");
			}			
			return;			
		}
	}

			

	doInsertCTIStatus(COMMOBJ.ctiPrevStatus, COMMOBJ.ctiPrevStatusTime, '5', COMMOBJ.Skill, null,COMMOBJ. ConnectionID);
	//更新大面积故障拦截信息
	//parent.updateCommCauseRecord();		
	//传入技能号
	doSummary(COMMOBJ.Skill);	
}
function doSummary(skill)
{
	var summaryData = {action : "doSummary"};
	summaryData.skill = skill;

	var msgstr = JSON.stringify(summaryData);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}
function insertUserSatisfaction(satisData)
{
	satisData.STOPREASON = '' + satisData.STOPREASON;

	satisData.staffId = COMMOBJ.operatorId;
	satisData.staffName = COMMOBJ.staffName;

	if(COMMOBJ.recordId==null||COMMOBJ.recordId=='')return;

	satisData.michelleId = COMMOBJ.recordId;
	satisData.productType = COMMOBJ.callProductType;

	satisData.action = "insertUserSatisfaction";

	var msgstr = JSON.stringify(satisData);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");
}
String.prototype.replaceAll = function(AFindText,ARepText){
	raRegExp = new RegExp(AFindText,"g");
	return this.replace(raRegExp,ARepText);
};


//客户经理查询与转接
function dotransivrCustomerManager(tranCallBack)
{
	if(COMMOBJ.LogonFlag==0)
	{
		alertShow("软电话未注册，无法转接");
		tranCallBack(false);
		return;
	}
	
	
	if(GP["agentstatus"]!=4) //4:'通话中'
	{
		alertShow("当前状态不允许转客户经理查询与转接");	
		tranCallBack(false);
		return;
	}
	//end of 通话状态

	
	var phoneNum = "";
	if (COMMOBJ.deviceType == "1") {   //小灵通 
 		phoneNum = COMMOBJ.serviceId.substr(3);
     }
     else if (COMMOBJ.deviceType == "2") {   //宽带
      	phoneNum = COMMOBJ.networkAccount;
      }
     else if (COMMOBJ.deviceType == "3") {   //固话
     	phoneNum = COMMOBJ.serviceId.substr(3);
     }
     else if (COMMOBJ.deviceType == "8") {   //CDMA
     	phoneNum = COMMOBJ.serviceId;
     }
     else
     {
     	phoneNum = COMMOBJ.serviceId;
     }

	if(!COMMOBJ.deviceArea||COMMOBJ.deviceArea=='0')
	{
		alertShow("当前业务号码不存在，不允许转");	
		tranCallBack(false);
		return;				
	}				
	var dataString = "" ; 

	//OperateType^PhoneNumber(带区号)^AreaCode^OriginalANI
	dataString = "18^" + '0'+ COMMOBJ.deviceArea + phoneNum + "^"+ COMMOBJ.callPhoneArea + "^" + COMMOBJ.OriginalANI;
	//alert("客户经理查询与转接:"+dataString);

	WebAgent.invoker("SetCallData", [0, dataString], function(result) {
		/* 针对客服代表为用户做IVR转接后，延迟自动外呼满意度调查避免打断用户IVR语音接听。*/
		//传入标志位1，表示转ivr挂机
		doHandup(/*ivrflag*/1);
		tranCallBack(true);
	});

	
}
//转ivr故障单催单
function dotransivrFaultBillHasten(mainSn, clogCode, specialtyName, clogAreacode, tranCallBack)
{
	if(COMMOBJ.LogonFlag==0)
	{
		alertShow("软电话未注册，无法转接");
		tranCallBack(false);
		return;
	}
	
	
	if(GP["agentstatus"]!=4) //4:'通话中'
	{
		alertShow("当前状态不允许转客户经理查询与转接");	
		tranCallBack(false);
		return;
	}
	//end of 通话状态
	
	var phoneNum = "";
	if (COMMOBJ.deviceType == "1") {   //小灵通 
 		phoneNum = COMMOBJ.serviceId.substr(3);
     }
     else if (COMMOBJ.deviceType == "2") {   //宽带
      	phoneNum = COMMOBJ.networkAccount;
      }
     else if (COMMOBJ.deviceType == "3") {   //固话
     	phoneNum = COMMOBJ.serviceId.substr(3);
     }
     else if (COMMOBJ.deviceType == "8") {   //CDMA
     	phoneNum = COMMOBJ.serviceId;
     }
     else
     {
     	phoneNum = COMMOBJ.serviceId;
     }

	if(!COMMOBJ.deviceArea||COMMOBJ.deviceArea=='0')
	{
		alertShow("当前业务号码不存在，不允许转");	
		tranCallBack(false);
		return;				
	}				
	var dataString = "" ; 	
		
	
	
	//催单新格式:OperateType(33)^PhoneNumber(呼入号码)^MainSN^ClogCode^specialty^AreaCode
	dataString = "33^" + COMMOBJ.OriginalANI + "^"+ mainSn + "^" + clogCode + "^" +specialtyName + "^" + clogAreacode;

	WebAgent.invoker("SetCallData", [0, dataString], function(result) {
		/* 针对客服代表为用户做IVR转接后，延迟自动外呼满意度调查避免打断用户IVR语音接听。*/
		//传入标志位1，表示转ivr挂机
		doHandup(/*ivrflag*/1);
		tranCallBack(true);
	});

		
}

//转呼叫转移设定
function dotransivrCallTransfer(TransferType /*string*/, tranCallBack)
{
	if(COMMOBJ.LogonFlag==0)
	{
		alertShow("软电话未注册，无法转接");
		tranCallBack(false);
		return;
	}
	
	
	if(GP["agentstatus"]!=4) //4:'通话中'
	{
		alertShow("当前状态不允许转客户经理查询与转接");	
		tranCallBack(false);
		return;
	}
	//end of 通话状态
	//
	if(COMMOBJ.deviceType != "8")   //CDMA
	{
		alertShow("当前业务号码不是C网号码，不允许转");	
		tranCallBack(false);
		return false;		
	}
	
	var dataString = "" ; 
		
	//OperateType^PhoneNumber(带区号)^Type(1 无应答呼叫转移2 遇忙呼叫转移3 无条件呼叫转移)^ConnectID(流水号)^AgentName(座席代表姓名)^AgentID(工号)^ManualTime(人工接通时间)^AreaCode^OriginalANI
	dataString = "31^" + COMMOBJ.deviceArea + COMMOBJ.serviceId + "^" + TransferType + "^" 
				+ COMMOBJ.ConnectionID + "^" + COMMOBJ.staffName + "^" + COMMOBJ.operatorId + "^"
				+ COMMOBJ.answerDatetime  + "^"
				+ COMMOBJ.callPhoneArea + "^" + COMMOBJ.OriginalANI;
			
	WebAgent.invoker("SetCallData", [0, dataString], function(result) {
		/* 针对客服代表为用户做IVR转接后，延迟自动外呼满意度调查避免打断用户IVR语音接听。*/
		//传入标志位1，表示转ivr挂机
		doHandup(/*ivrflag*/1);
		tranCallBack(true);
	});

			
}	
//转ivr修改宽带密码
function doTransIvrModiKdPwd() {

	if(COMMOBJ.LogonFlag==0)
	{
		alertShow("软电话未注册，无法转接");
		
		return;
	}
	
	
	if(GP["agentstatus"]!=4) //4:'通话中'
	{
		alertShow("当前状态不允许转客户经理查询与转接");	
		
		return;
	}
	//end of 通话状态
	var phoneNum = "";
	if (COMMOBJ.deviceType == "1") {   //小灵通 
 		phoneNum = COMMOBJ.serviceId.substr(3);
     }
     else if (COMMOBJ.deviceType == "2") {   //宽带
      	phoneNum = COMMOBJ.networkAccount;
      }
     else if (COMMOBJ.deviceType == "3") {   //固话
     	phoneNum = COMMOBJ.serviceId.substr(3);
     }
     else if (COMMOBJ.deviceType == "8") {   //CDMA
     	phoneNum = COMMOBJ.serviceId;
     }
     else
     {
     	phoneNum = COMMOBJ.serviceId;
     }

	if(!COMMOBJ.deviceArea||COMMOBJ.deviceArea=='0')
	{
		alertShow("当前业务号码不存在，不允许转");	
		
		return;				
	}				
	
			
	//密码修改
	getOldWindow().doTransIvrModiKdPwd();
	
	GP["transftype"] = '1';
	var dataString = "" ; 
	dataString = "34^" + phoneNum + "^"+COMMOBJ.deviceArea + "^" + COMMOBJ.OriginalANI;

	WebAgent.invoker("SetCallData", [0, dataString], function(result) {
		/* 针对客服代表为用户做IVR转接后，延迟自动外呼满意度调查避免打断用户IVR语音接听。*/
		//传入标志位1，表示转ivr挂机
		doHandup(/*ivrflag*/1);
		
	});
}

//转ivr修改ITV订购密码
	
function doTransIvrModifyItvBuyPwd() {
	if(COMMOBJ.LogonFlag==0)
	{
		alertShow("软电话未注册，无法转接");
		
		return;
	}
	
	
	if(GP["agentstatus"]!=4) //4:'通话中'
	{
		alertShow("当前状态不允许转客户经理查询与转接");	
		
		return;
	}
	
	showMessage("正在修改ITV订购密码,请稍候...");
	
	if(!COMMOBJ.deviceArea||COMMOBJ.deviceArea=='0')
	{
		alertShow("当前业务号码不存在，不允许转");	
		
		return;				
	}				
	
	try
	{
		getOldWindow().doTransIvrModifyItvBuyPwd();
	}
	catch(ex)
	{

	}
	
	GP["transftype"] = '1';
	var dataString = "" ; 
	dataString = "35^" + COMMOBJ.circuitNumber + "^"+COMMOBJ.deviceArea + "^" + COMMOBJ.OriginalANI;

	WebAgent.invoker("SetCallData", [0, dataString], function(result) {
		/* 针对客服代表为用户做IVR转接后，延迟自动外呼满意度调查避免打断用户IVR语音接听。*/
		//传入标志位1，表示转ivr挂机
		doHandup(/*ivrflag*/1);
		
	});

	
}

//转IVR销障
function dotransivrFaultBillDestory(clogCode, specialtyName, clogAreacode, tranCallBack)
{
	if(COMMOBJ.LogonFlag==0)
	{
		alertShow("软电话未注册，无法转接");
		tranCallBack(false);
		return;
	}
	
	
	if(GP["agentstatus"]!=4) //4:'通话中'
	{
		alertShow("当前状态不允许转客户经理查询与转接");	
		tranCallBack(false);
		return;
	}
	//end of 通话状态

	//格式:OperateType(32)^PhoneNumber(固话不带区号)^specialty^AreaCode
	var dataString = "32^" + clogCode + "^"+ specialtyName + "^" + clogAreacode;
	//alert("故障单销单:"+dataString);

	WebAgent.invoker("SetCallData", [0, dataString], function(result) {
		/* 针对客服代表为用户做IVR转接后，延迟自动外呼满意度调查避免打断用户IVR语音接听。*/
		//传入标志位1，表示转ivr挂机
		doHandup(/*ivrflag*/1);
		tranCallBack(true);
	});
	

}
//转ivr固话申告
function dotransivrGhFault(transGhPhone, trnasComplainCause, tranCallBack)
{
	if(COMMOBJ.LogonFlag==0)
	{
		alertShow("软电话未注册，无法转接");
		tranCallBack(false);
		return;
	}
	
	
	if(GP["agentstatus"]!=4) //4:'通话中'
	{
		alertShow("当前状态不允许转客户经理查询与转接");	
		tranCallBack(false);
		return;
	}
	//end of 通话状态


	
	var dataString = "";

	if(!COMMOBJ.deviceArea||COMMOBJ.deviceArea=='0')
	{
		dataString = "17^" + transGhPhone + "^"+ transGhPhone.substring(0,4) + "^" + COMMOBJ.OriginalANI + "^" + trnasComplainCause;
	}
	else
	{
		dataString = "17^" + transGhPhone + "^"+ COMMOBJ.deviceArea + "^" + COMMOBJ.OriginalANI + "^" + trnasComplainCause;
		
	}	
	

	WebAgent.invoker("SetCallData", [0, dataString], function(result) {
		/* 针对客服代表为用户做IVR转接后，延迟自动外呼满意度调查避免打断用户IVR语音接听。*/
		//传入标志位1，表示转ivr挂机
		doHandup(/*ivrflag*/1);
		tranCallBack(true);
	});
	

}
//密码验证
function dotransivrcheckpwd()
{
		if(COMMOBJ.LogonFlag==0)
		{
			alertShow("软电话未注册，无法转接");
			return false;
		}			

		//只有当在通话状态才能转密码验证
		//var states = CallCtrlObject.QueryAgentStatus(CallCtrlObject.AgentID,1);
		//var state = getState(states);
		//if(state!="300") //300表示通话状态
		if(GP["agentstatus"]!=4) //4:'通话中'
		{
			alertShow("当前状态不允许转密码验证");	
			return false;
		}
		//end of 通话状态
		showMessage("正在验证密码,请稍候..."); 
		
		
		if(!COMMOBJ.deviceArea||COMMOBJ.deviceArea=='0')
		{
			alertShow("当前业务号码不存在，不允许转");	
			
			return false;				
		}
		var phoneNum = "";
		if (COMMOBJ.deviceType == "1") {   //小灵通 
     		phoneNum = COMMOBJ.serviceId.substr(3);
	     }
	     else if (COMMOBJ.deviceType == "2") {   //宽带
	      	phoneNum = COMMOBJ.networkAccount;
	      }
	     else if (COMMOBJ.deviceType == "3") {   //固话
	     	phoneNum = COMMOBJ.serviceId.substr(3);
	     }
	     else if (COMMOBJ.deviceType == "8") {   //CDMA
	     	phoneNum = COMMOBJ.serviceId;
	     }
	     else
	     {
	     	phoneNum = COMMOBJ.serviceId;
	     }
		//记流水
		getOldWindow().dotransivrcheckpwd();
		
		GP["transftype"] = '1' ;
		var dataString = "" ; 
		dataString = "0^" + phoneNum + "^0"+COMMOBJ.deviceArea;

		console.log("dotransivrcheckpwd:"+dataString);

		WebAgent.invoker("SetCallData", [0, dataString], function(result) {
			WebAgent.invoker("Consultation", [0,COMMOBJ.ivrPhoneCode,3,1,COMMOBJ.DN], function(ret) {
				if(ret != 0 ){
					
					getOldWindow().pwdValidateFlag = false;
					alertShow("转密码验证失败,请重试");
					getOldWindow().recordCommonTraceActionId('T1240');
					return false;
				}
				else{
					return true;
				}	
			});
		});
		
}


//身份证验证
function dotransivrcheckCtzjId(callback)
{
	if(COMMOBJ.LogonFlag==0)
		{
			alertShow("软电话未注册，无法转接");
			callback(false);
			return;
		}			

		//只有当在通话状态才能转密码验证
		//var states = CallCtrlObject.QueryAgentStatus(CallCtrlObject.AgentID,1);
		//var state = getState(states);
		//if(state!="300") //300表示通话状态
		if(GP["agentstatus"]!=4) //4:'通话中'
		{
			alertShow("当前状态不允许身份证验证");	
			callback(false);
			return;
		}
		//end of 通话状态
		showMessage("正在验证身份证,请稍候..."); 
		
		
		if(!COMMOBJ.deviceArea||COMMOBJ.deviceArea=='0')
		{
			alertShow("当前业务号码不存在，不允许转");	
			
			callback(false);
			return;			
		}
		var phoneNum = "";
		if (COMMOBJ.deviceType == "1") {   //小灵通 
     		phoneNum = COMMOBJ.serviceId.substr(3);
	     }
	     else if (COMMOBJ.deviceType == "2") {   //宽带
	      	phoneNum = COMMOBJ.networkAccount;
	      }
	     else if (COMMOBJ.deviceType == "3") {   //固话
	     	phoneNum = COMMOBJ.serviceId.substr(3);
	     }
	     else if (COMMOBJ.deviceType == "8") {   //CDMA
	     	phoneNum = COMMOBJ.serviceId;
	     }
	     else
	     {
	     	phoneNum = COMMOBJ.serviceId;
	     }
		//记流水
		GP["transftype"] = '1' ;
		var dataString = "" ; 
		var transDeviceType = '';
		getOldWindow().recordCommonTraceActionId('T1238');

		if (COMMOBJ.deviceType == "2") {  //宽带
			transDeviceType = 'XDSL';
		}
		else {
			transDeviceType = 'ELSE';
		}
		

		dataString = "37^" + phoneNum + "^0"+COMMOBJ.deviceArea + "^" + transDeviceType;

		WebAgent.invoker("SetCallData", [0, dataString], function(result) {
			WebAgent.invoker("Consultation", [0,COMMOBJ.ivrPhoneCode,3,1,COMMOBJ.DN], function(ret) {
				if(ret != 0 ){
					
					getOldWindow().idValidateFlag = false;
					alertShow("转身份证验证失败,请重试");
					
					callback(false);
					return;	
				}
				else{
					parent.idValidateFlag = true;
					callback(true);
					return;	
				}	
			});
		});
}

/*{integrationId:资产id，phoneNum:号码}*/
function refreshCallBack(info)
{
	info.action = "personNumberOld";

	var msgstr = JSON.stringify(info);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}
/**
 * 刷新消息未读数量
 */
function refreshUnReadMsgCount()
{
	var info = {action:"refreshUnReadMsgCount"};

	var msgstr = JSON.stringify(info);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}
/**
 * ivr验证成功状态回写
 */
function updateCheckIdentityResult(checkResult)
{
	checkResult.action = "updateCheckIdentityResult";

	var msgstr = JSON.stringify(checkResult);

	$("#btnShowMsg").attr("msg",msgstr);


	$("#btnShowMsg").trigger("click");	
}

/**
 * 插入cti状态
 */
function doInsertCTIStatus(prevstat, prevtime, stat, Skills, callphone, flowno)
{
	try
	{
		getOldWindow().doInsertCTIStatus(prevstat, prevtime, stat, Skills, callphone, flowno);
	}catch(ex)
	{

	}
}

