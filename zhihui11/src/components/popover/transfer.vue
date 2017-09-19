<template>
  <div class="demo transfer">
    <div class="popover-head">
      <span class="title">转接</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                       class="el-icon-close"></i>
    </div>
    <div class="tab">
      <div class="tab-item" v-bind:class="{tabActive:showOne}" @click="handleClick('转接座席工号')">转接座席工号</div>
      <div class="tab-item" v-bind:class="{tabActive:showTwo}" @click="handleClick('转接外部号码')">转接外部号码</div>
      <div class="tab-item" v-bind:class="{tabActive:showThree}" @click="handleClick('转接技能组')">转接技能组</div>
    </div>
    <div class="one-box box-item" v-if="showOne">
      <div class="row">
        <span class="txt">座席工号</span>
        <el-input v-model="target_num1" placeholder=""></el-input>
      </div>
    </div>
    <div class="two-box box-item" v-if="showTwo">
      <div class="row">
        <span class="txt">目标号码</span>
        <el-select v-model="externalSelect" placeholder="请选择" @visible-change="!goalNumberStatus" @change="changeGoalNumber">
          <el-option
            v-for="item in goalNumber"
            :key="item.id"
            :label="item.dialNumber"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <div class="huigongzuoBox" v-if="huigongzuo">
        <div class="row">
          <label class="txt">汇工作大类</label>
          <el-select v-model="huigongzuoBigSelect" placeholder="请选择" @visible-change="!bigKindStatus" @change="changeBigKind">
            <el-option
              v-for="(item,index) in bigJobKind"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="huigongzuoBox" v-if="huigongzuo">
        <div class="row">
          <label class="txt">汇工作小类</label>
          <el-select v-model="huigongzuoSmallSelect" placeholder="请选择" @visible-change="!smallKindStatus" @change="changeSmallKind">
            <el-option
              v-for="item in changeSmallKindNum"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="three-box box-item" v-if="showThree">
      <div class="main-top">
        <div class="row">
          <span class="txt">区域中心</span>
          <el-select v-model="areaSelect" @visible-change="!areaStatus" @change="changeArea">
            <el-option
            v-for="item in getRegionQueueArea"
            :key="item.vcid"
            :label="item.branchName"
            :value="item.branchId+' '+item.vcid">
            </el-option>
          </el-select>
        </div>
        <div class="row">
          <span class="txt">目标技能组</span>
          <el-select v-model="skillSelect" @visible-change="!skillStatus" @change="changeSkill">
            <el-option
            v-for="(item,key) in getRegionQueueSkillLocal"
            v-if="getRegionQueueSkillLocal && item.isTransFlag=='1'"
            :key="key"
            :label="item.skillName"
            :value="item.skillId +' '+ item.waitLimitNum">
            </el-option>
          </el-select>
        </div>
        <div class="row last-row" v-if="reasonSelectShow">
          <span class="txt">转接原因</span>
          <el-select v-model="reasonSelect" @visible-change="!reasonStatus" @change="changeReason" class="reason-input">
            <el-option
            v-for="item in reasonItem"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="main-bottom">
      <div class="row"><span class="txt">目前专席接话情况</span><i @click="flreshSetReadBusyAndQueue()" class="iconfont icon-shuaxin"></i><span @click="flreshSetReadBusyAndQueue()" class="shuaxin">刷新</span></div>
      <div class="row"><span class="txt">登录数 :</span><span class="jhqk_data" v-if="">{{getReadBusyAndQueue.readySeatCount}}</span></div>
      <div class="row"><span class="txt">空闲数 :</span><span class="jhqk_data" v-if="getReadBusyAndQueue.readySeatCount && getReadBusyAndQueue.busySeatCount">{{parseInt(getReadBusyAndQueue.readySeatCount)-parseInt(getReadBusyAndQueue.busySeatCount)}}</span></div>
      <div class="row"><span class="txt">外等数 :</span><span class="jhqk_data">{{getReadBusyAndQueue.skillQueueCount}}</span></div>
      </div>
    </div>
    <div class="btn-box">

      <el-button type="primary" size="small" @click="changeOver()">转接</el-button>
      <el-button type="primary" size="small" :disabled="btnStatus" @click="twoTurn()">咨询(两步转)</el-button>
      <el-button type="primary" size="small" :disabled="btnStatus2" @click="threeTurn()">咨询(两步自动转)</el-button>
      <el-button type="primary" size="small" @click="threeParty()">三方通话</el-button>
      <!--<span class="popover-btn"></span>-->
      <!--<span class="popover-btn" @click="()"></span>-->
      <!--<span class="popover-btn" @click="()"></span>-->
      <!--<span class="popover-btn" @click="()"></span>-->
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import api from '../../store/fetch/api'
  export default {
    data() {
      return {
        showOne: true,
        showTwo: false,
        showThree: false,
        areaStatus:false,
        goalNumberStatus:false,
        bigKindStatus:false,
        smallKindStatus:false,
        skillStatus:false,
        reasonStatus:false,
        btnStatus:false,
        btnStatus2:false,
//        目标技能组
        getRegionQueueSkillLocal:'',
        nowVcId:'',
        nowSkillId:'',
        branchId:"",
        activeName2: 'first',
        transfer_type1: '',
        transfer_type2: '',
        transfer_type3: '',
        target_num1: '',
        target_num2: '',
        skill_name: '高技能组',
        skillVcid: '',
        nowTab: '转接座席工号',
        externalSelect: '',
        huigongzuoBigSelect: '',
        huigongzuoSmallSelect: '',
        huigongzuo: false,
        areaSelect: '',
        skillSelect: '',
        reasonSelect: '1',
        reasonSelectShow: false,
        jhqkShow: false,
        jhqk: {
          denglu: '25',
          kongxian: '0',
          waideng: '1'
        },
        externalNum: [{
          label: '057188287777',
          value: '1',
        }, {
          label: '465487854521',
          value: '2'
        }],
        changeSmallKindNum:'',
        huigongzuoBig: [{}],
        huigongzuoSmall: [{}],
        skillItem: [],
        reasonItem: [{
          value: '1',
          label: '宽带预存送解释（丽水暂不用）'
        }, {
          value: '2',
          label: '越级投诉（包括要求领导接听电话等）'
        }, {
          value: '3',
          label: '超过600秒的疑难话务'
        }, {
          value: '4',
          label: '政企类帐单疑义解释（丽水暂不用）'
        }, {
          value: '5',
          label: '普通账单疑义解释（丽水暂不用）'
        }, {
          value: '6',
          label: '内部员工差错'
        }, {
          value: '8',
          label: 'C网改套餐或拆机（仅限台州使用）'
        }, {
          value: '9',
          label: '固话报障引导自助失败（台州暂不用）'
        }, {
          value: '7',
          label: '其他（丽水暂不用）'
        }]
      };
    },
    created(){

    },

    methods: {
      showOneTurn(){
      },
      showTwoTurn(){
      },
      showThreeTurn(){
      },
      changeSmallKind(){},
      changeBigKind(){
        if(this.huigongzuoBigSelect){
          let kinds=[];
          let fatherData=this.$store.state.page.ivrData.getTransferParams[0].paramValue.split(';');
          if(this.$store.state.page.ivrData.getTransferParams !==''){
            for(let i=0;i<fatherData.length; i++){
              for(let j=0;j<fatherData[i].split(':')[1].split('#').length; j++){
                let sunData = fatherData[i].split(':')[1];
                if(this.$store.state.page.ivrData.getTransferParams[0].paramValue.split(';')[i].split(':')[0]==this.huigongzuoBigSelect){
                  kinds = sunData.split('#')
                }
              }
            }
          }
          this.huigongzuoSmallSelect = '';
          this.changeSmallKindNum = kinds;
        }
      },
//      点击目标号码
      changeGoalNumber(value){
//          console.log(value)
        if(value['dialNumber']=='057188910873'){
          this.huigongzuo = true;
        }else{
          this.huigongzuo = false;
        }
      },
//      点击区域中心
      changeArea(value){
        if(value){
          this.branchId=value.split(' ')[0];
          this.regionQueueSkill(value);
          console.log(value);
          this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_REGION_QUEUE_SKILL_API','getRegionQueueMM'])
          api.widgetApi('/ivr/?__dew_token__='+this.token,this.$store.state.editor.getRegionQueueMM).then(
            res=>{
                if(res.code=='200'){
                  this.getRegionQueueSkillLocal=res.body.data.regionSkills;
                  this.skillSelect='';
                  this.nowSkillId='';
                }else{
                    this.$message({
                      'message':'接口调用失败',
                      'type':'warning'
                    })
                }
                console.log(res)
            }
          );
        }
        this.reasonSelectShow = false;
        this.btnStatus=false;
        this.btnStatus2=false;
      },
//      点击转接原因
      changeReason(value){
        if(value=='3' && COMMOBJ.callCountSecond < 600){
            this.btnStatus=true;
            this.btnStatus2=true;
            alertShow("本次话务时长未超过600秒，无法进行转接操作");
        }
        else if(value=='7'){
            this.btnStatus=false;
            this.btnStatus2=true;
        }
        else{
            this.btnStatus=false;
            this.btnStatus2=false;
        }
      },
//      点击转接技能
      changeSkill(value){
        if(value){
            let name=false;
          for (let i=0; i<this.getTransferParams.length;i++){
            if (this.getTransferParams[i].paramName=="TRANSREASONFORSKILLS"){
              if(this.getTransferParams[i].paramValue.indexOf(','+value.split(' ')[0]+',')>=0) {
                name = true;
              }else{
              }
              break;
            }else{
            }
          }
          if(name){
            this.reasonSelectShow = true;
          }else{
            this.btnStatus=false;
            this.btnStatus2=false;
            this.reasonSelectShow = false;
          }
          let vcId = '';
          for (let i=0; i<this.getRegionQueueArea.length;i++){
              if (this.getRegionQueueArea[i].branchId==this.branchId){

                vcId = this.getRegionQueueArea[i].vcid;
                //将setReadBusyAndQueue接口的 入参保存起来 点击刷新请求
                this.nowVcId = this.getRegionQueueArea[i].vcid;
                break;

              }
          }
          this.reasonSelect = '1';
          //将setReadBusyAndQueue接口的 入参保存起来 点击刷新请求
          this.nowSkillId = {
            skillId: value.split(' ')[0],
            waitLimitNum: value.split(' ')[1]
          };
          this.setReadBusyAndQueue([value.split(' ')[0],vcId]);
          this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_READ_BUSY_AND_QUEUE_API','getReadBusyAndQueueMM'])
        }
      },
      flreshSetReadBusyAndQueue(){
          if(this.nowSkillId!='' && this.nowVcId!=''){

            this.setReadBusyAndQueue([this.nowSkillId.skillId,this.nowVcId]);
            this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_READ_BUSY_AND_QUEUE_API','getReadBusyAndQueueMM'])
          }
      },
      changeOver(){
          if(this.nowTab=='转接座席工号'){
            if(this.target_num1){
              let transInfo = {type:'0',mode:'1',phone:this.target_num1};
              doTrans(transInfo);
            }else{
              this.$message({
                showClose: true,
                message: '请输入工号',
                type: 'warning'
              });
            }
          }else if(this.nowTab=='转接外部号码'){
              if(this.externalSelect['dialNumber']){
                if(this.externalSelect['dialNumber']=='057188910873'){
                  if(this.huigongzuoBigSelect!='' && this.huigongzuoSmallSelect!=''){
//                   this.huigongzuoBigSelect 大类的值
//                   this.huigongzuoSmallSelect 小类的值
                    let transInfo = {type:'1',mode:'1',phone:'057188910873'};
                    doTrans(transInfo)
                  }else{
                    this.$message({
                      showClose: true,
                      message: '请选择大小类',
                      type: 'warning'
                    });
                  }
                }else{
                  let transInfo = {type:'1',mode:'1',phone:this.externalSelect['dialNumber']};
                  doTrans(transInfo)
                }
              }else{
                this.$message({
                  showClose: true,
                  message: '请选择号码',
                  type: 'warning'
                });
              }

          }else{
//            transInfo = {type:'2',mode:'1',vcid:选择的分点对应的vcid,phone:选择的技能组,transreason:选择的转接原因（如果有的话）}，调用doTrans(transInfo)
            if(this.areaSelect.split(' ')[1] && this.nowSkillId){
                console.log(this.nowSkillId)
              let transInfo='';
              if(this.reasonSelectShow){
                transInfo = {type:'2',mode:'1',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: this.reasonSelect};
              }else{
                transInfo = {type:'2',mode:'1',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: ''};
              }
              this.areaSelect.split(' ')[1] && this.nowSkillId && doTrans(transInfo)
            }else{
              this.$message({
                showClose: true,
                message: '区域中心和技能',
                type: 'warning'
              });
            }
            console.log(this.areaSelect.split(' ')[1]);
          }
        console.log(this.nowTab)
      },
      twoTurn(){
        if(this.nowTab=='转接座席工号'){
          if(this.target_num1){
            let transInfo = {type:'0',mode:'2',phone:this.target_num1};
            doTrans(transInfo);
          }else{
            this.$message({
              showClose: true,
              message: '请输入工号',
              type: 'warning'
            });
          }
        }else if(this.nowTab=='转接外部号码'){
          if(this.externalSelect['dialNumber']){
            if(this.externalSelect['dialNumber']=='057188910873'){
              if(this.huigongzuoBigSelect!='' && this.huigongzuoSmallSelect!=''){
//                   this.huigongzuoBigSelect 大类的值
//                   this.huigongzuoSmallSelect 小类的值
                let transInfo = {type:'1',mode:'2',phone:this.externalSelect['dialNumber']};
                doTrans(transInfo)
              }else{
                this.$message({
                  showClose: true,
                  message: '请选择大小类',
                  type: 'warning'
                });
              }
            }else{
              let transInfo = {type:'1',mode:'2',phone:this.externalSelect['dialNumber']};
              doTrans(transInfo)
            }
          }else{
            this.$message({
              showClose: true,
              message: '请选择号码',
              type: 'warning'
            });
          }

        }else{
//            transInfo = {type:'2',mode:'1',vcid:选择的分点对应的vcid,phone:选择的技能组,transreason:选择的转接原因（如果有的话）}，调用doTrans(transInfo)
          if(this.areaSelect.split(' ')[1] && this.nowSkillId){
            let transInfo='';
            if(this.reasonSelectShow){
              transInfo = {type:'2',mode:'2',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: this.reasonSelect};
            }else{
              transInfo = {type:'2',mode:'2',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: ''};
            }
            this.areaSelect.split(' ')[1] && this.nowSkillId && doTrans(transInfo)
          }else{
            this.$message({
              showClose: true,
              message: '请选择区域中心和技能',
              type: 'warning'
            });
          }
          console.log(this.areaSelect.split(' ')[1]);
        }
      },
      threeTurn(){
        if(this.nowTab=='转接座席工号'){
          if(this.target_num1){
            let transInfo = {type:'0',mode:'4',phone:this.target_num1};
            doTrans(transInfo);
          }else{
            this.$message({
              showClose: true,
              message: '请输入工号',
              type: 'warning'
            });
          }
        }else if(this.nowTab=='转接外部号码'){

          if(this.externalSelect['dialNumber']){
            if(this.externalSelect['dialNumber']=='057188910873'){
              if(this.huigongzuoBigSelect!='' && this.huigongzuoSmallSelect!=''){
                let transInfo = {type:'1',mode:'4',phone:'057188910873'};
                doTrans(transInfo)
              }else{
                this.$message({
                  showClose: true,
                  message: '请选择大小类',
                  type: 'warning'
                });
              }
            }else{
              if(this.huigongzuoBigSelect!='' && this.huigongzuoSmallSelect!=''){
//                   this.huigongzuoBigSelect 大类的值
//                   this.huigongzuoSmallSelect 小类的值

                if(this.externalSelect)
                {
                  if(this.externalSelect['transTime']&&this.externalSelect['transTime']!='')
                  {
                    var oDate = new Date();
                    var oDay = oDate.getDay();
                    oDay = oDay==0?7:oDay;//0是表示周日
                    var transtimeAry = this.externalSelect['transTime'].split(';');
                    var curTime = transtimeAry[oDay-1];
                    var timsAry = curTime.split(':')[1].split(',');
                    var curHours = oDate.getHours();
                    curHours = curHours < 10? '0' + curHours:curHours;
                    var curMinutes = oDate.getMinutes();
                    curMinutes = curMinutes < 10? '0' + curMinutes:curMinutes;
                    var curTime = curHours + '' + curMinutes;
                    if(curTime<timsAry[0]||curTime>timsAry[1])
                    {
                      alert(this.externalSelect['transMsg']);
                      return;
                    }
                  }
                }
//                   this.huigongzuoBigSelect 大类的值
//                   this.huigongzuoSmallSelect 小类的值

                let transInfo = {type:'1',mode:'4',phone: this.externalSelect['dialNumber']};
                doTrans(transInfo)
              }else{
                let transInfo = {type:'1',mode:'4',phone: this.externalSelect['dialNumber']};
                doTrans(transInfo)
              }
            }
          }else {

            this.$message({
              showClose: true,
              message: '请选择号码',
              type: 'warning'
            });
          }
        }else{
//            transInfo = {type:'2',mode:'1',vcid:选择的分点对应的vcid,phone:选择的技能组,transreason:选择的转接原因（如果有的话）}，调用doTrans(transInfo)

//          api.widgetApi('/ivr/?__dew_token__='+this.token,promise).then(res=>{
//            this.loginDataSet(res)
//          });

          this.setReadBusyAndQueue([this.nowSkillId['skillId'],this.areaSelect.split(' ')[1]]);
          let ReadySeatCount = 0; //就绪数
          let BusySeatCount = 0;  //示忙数
          let SkillQueueCount = 0;	//排队数
          api.widgetApi('/ivr/?__dew_token__='+this.token,this.$store.state.editor.getReadBusyAndQueueMM).then(
              res=>{
                this.getReadBusyAndQueueMM(res)
                console.log(res)
                let result = res.body.data;
                if(result!=null)
                {
                  if(result.readySeatCount != null)
                  {
                    ReadySeatCount = parseFloat(result.readySeatCount);
                  }
                  if(result.busySeatCount != null)
                  {
                    BusySeatCount = parseFloat(result.busySeatCount);
                  }
                  if(result.skillQueueCount != null)
                  {
                    SkillQueueCount = parseFloat(result.skillQueueCount);
                  }

                }

                if(ReadySeatCount - BusySeatCount <= 0)
                {
                  if(ReadySeatCount<=0)
                  {
                    this.$message({
                      showClose: true,
                      message: '当前目标座席没有人员登录，不能进行转接',
                      type: 'warning'
                    });
                    return;
                  }
                  else if(ReadySeatCount - BusySeatCount <= 0)
                  {
                    this.$message({
                      showClose: true,
                      message: '该专席因为过于忙碌，不能转接',
                      type: 'warning'
                    });
                    return;
                  }
                  else if(SkillQueueCount > transWaitLimitNum)
                  {
                    this.$message({
                      showClose: true,
                      message: '该专席因为过于忙碌，不能转接',
                      type: 'warning'
                    });
                    return;
                  }
                  else if(Math.round(SkillQueueCount/ReadySeatCount*100) <= transWaitLimitRate)
                  {
                    this.$message({
                      showClose: true,
                      message: '该专席因为过于忙碌，不能转接',
                      type: 'warning'
                    });
                    return;
                  }

                }
                if(ReadySeatCount - BusySeatCount <= 0)
                {
                  if(ReadySeatCount<=0){
                    this.$message({
                      showClose: true,
                      message: '当前目标座席没有人员登录，不能进行转接',
                      type: 'warning'
                    });
                    return;
                  }else if(ReadySeatCount - BusySeatCount <= 0){
                    var skillWaitLimitNum = this.nowSkillId['waitLimitNum'];;
                    if(skillWaitLimitNum==0){//如果技能等待上限数等于0，则采用通用参数
                      if(SkillQueueCount > transWaitLimitNum){
                        this.$message({
                          showClose: true,
                          message: '该专席因为过于忙碌，不能转接',
                          type: 'warning'
                        });
                        return;
                      }
                      else if(SkillQueueCount!=0&&Math.round(ReadySeatCount/SkillQueueCount*100) <= transWaitLimitRate){
                        this.$message({
                          showClose: true,
                          message: '该专席因为过于忙碌，不能转接',
                          type: 'warning'
                        });
                        return;
                      }
                    }else{
                      if(SkillQueueCount > skillWaitLimitNum){
                        this.$message({
                          showClose: true,
                          message: '该专席因为过于忙碌，不能转接',
                          type: 'warning'
                        });
                        return;
                      }else if(SkillQueueCount!=0&&Math.round(ReadySeatCount/SkillQueueCount*100) <= transWaitLimitRate) {
                        this.$message({
                          showClose: true,
                          message: '该专席因为过于忙碌，不能转接',
                          type: 'warning'
                        });
                        return;
                      }
                    }
                  }
                }
                if(this.areaSelect.split(' ')[1] && this.nowSkillId){
                  let transInfo='';
                  if(this.reasonSelectShow){
                    transInfo = {type:'2',mode:'4',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: this.reasonSelect};
                  }else{
                    transInfo = {type:'2',mode:'4',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: ''};
                  }
                  this.areaSelect.split(' ')[1] && this.nowSkillId && doTrans(transInfo)
                }else{
                  this.$message({
                    showClose: true,
                    message: '请选择区域中心和技能',
                    type: 'warning'
                  });
                }
              }
          );



//          this.$store.dispatch('turnForm',['/ivr/?__dew_token__='+this.token,'GET_READ_BUSY_QUEUE_API','getReadBusyAndQueueMM']);


          console.log(this.areaSelect.split(' ')[1]);
        }
      },
      threeParty(){
        if(this.nowTab=='转接座席工号'){
          if(this.target_num1){
            let transInfo = {type:'0',mode:'3',phone:this.target_num1};
            doTrans(transInfo);
          }else{
            this.$message({
              showClose: true,
              message: '请输入工号',
              type: 'warning'
            });
          }
        }else if(this.nowTab=='转接外部号码'){
          if(this.externalSelect['dialNumber']){

            if(this.externalSelect['dialNumber']=='057188910873'){
              if(this.huigongzuoBigSelect!='' && this.huigongzuoSmallSelect!=''){
//                   this.huigongzuoBigSelect 大类的值
//                   this.huigongzuoSmallSelect 小类的值
                let transInfo = {type:'1',mode:'3',phone:this.externalSelect['dialNumber']};
                doTrans(transInfo)
              }else{
                this.$message({
                  showClose: true,
                  message: '请选择大小类',
                  type: 'warning'
                });
              }
            }else{
              let transInfo = {type:'1',mode:'3',phone:this.externalSelect['dialNumber']};
              doTrans(transInfo)
            }
          }else{
            this.$message({
              showClose: true,
              message: '请选择号码',
              type: 'warning'
            });
          }

        }else{
//            transInfo = {type:'2',mode:'1',vcid:选择的分点对应的vcid,phone:选择的技能组,transreason:选择的转接原因（如果有的话）}，调用doTrans(transInfo)
          if(this.areaSelect.split(' ')[1] && this.nowSkillId){
            let transInfo='';
            if(this.reasonSelectShow){
              transInfo = {type:'2',mode:'3',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: this.reasonSelect};
            }else{
              transInfo = {type:'2',mode:'3',vcid:this.areaSelect.split(' ')[1],phone: this.nowSkillId['skillId'].toString(),transreason: ''};
            }
            this.areaSelect.split(' ')[1] && this.nowSkillId && doTrans(transInfo)
          }else{
            this.$message({
              showClose: true,
              message: '请选择区域中心和技能',
              type: 'warning'
            });
          }
          console.log(this.areaSelect.split(' ')[1]);
        }
      },
      areaCenter(value){

      },
//      areaSelectChange(val){
//          if(this.$store.state.editor.tabChange =='false'){
//
////              for(let i= 0;i<this.getRegionQueueArea.length;i++){
////                  if(this.getRegionQueueArea[i]. =this.areaSelect){
////
////                  }
////              }
//            console.log(val)
//            console.log(this.token)
//            this.regionQueueSkill(val)
//            this.areaId=val;
//            this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_REGION_QUEUE_SKILL_API','getRegionQueueMM'])
//            console.log(this.getRegionQueueSkill)
//          }
//      },
      huigongzuoBigSelectMethod: function (index) {
        this.huigongzuoSmall = this.jobKind[index][1].split('#')
        console.log(this.huigongzuoSmall)
      },
      handleClick(name) {
          this.nowTab=name;
        if(name == '转接外部号码'){
          this.showOne = false;
          this.showTwo = true;
          this.showThree = false;
          console.log('sdasd')
          this.setTransferRegion();
          this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_TRANSFER_REGION_API','getTransferRegionMM'])
//            this.areaSelect = this.getLoginInfoExt;
//            console.log(this.enterCase);
//            let transferThis = this;
        }else if(name == '转接技能组'){

          this.showOne = false;
          this.showTwo = false;
          this.showThree = true;
            console.log(this.getRegionQueueArea)
            if(this.getRegionQueueArea==null || this.getRegionQueueArea==''){
              this.$store.state.editor.tabChange = 'true';
              this.areaSelect = this.getLoginInfoExt;
              console.log(this.enterCase);
//            let transferThis = this;
              this.regionQueueArea();
              this.$store.dispatch('saveForm',['/ivr/?__dew_token__='+this.token,'GET_REGION_QUEUE_AREA_API','getRegionQueueMM'])
            }else {

            }
        }else{
          this.showOne = true;
          this.showTwo = false;
          this.showThree = false;

        }
      },
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert','regionQueueArea','regionQueueSkill','setReadBusyAndQueue','setTransferRegion','getReadBusyAndQueueMM'
      ]),
      kindsData(){
//          let kinds=[];
//          for(let i=0;i<this.jobKind[0].paramValue.split(';').length; i++){
//            kinds.push(this.jobKind[0].paramValue.split(';')[i].split(':'))
//          }
//          return this.kinds;
            return this.jobKind;
      }
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'popoverAlive',
        'getTransferParams',
        'goalNumber',
        'bigJobKind',
        'smallJobKind',
        'getRegionQueue',
        'token',
        'getRegionQueueArea',
        'getRegionQueueSkill',
        'areaItem',
        'getLoginInfoExt',
        'enterCase',
        'getReadBusyAndQueue',
        'allJobKind'
      ]),
    },
    watch:{
    }
  };
</script>
<style scoped>
  .demo {
    width: 400px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -150px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    color: #333333;
  }
  .box-item{
    width: 100%;
    min-height: 80px;
  }
  .box-item .row{
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
  }
  .box-item .txt{
    display: block;
    float: left;
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;

  }
  .box-item .txt i{
    cursor: pointer;
  }
  .popover-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-head i {
    float: right;
    color: #CECECE;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 12px;
    font-weight: bold;
  }

  .popover-main {
    width: 100%;
  }

  .popover-main .row {
    padding: 5px 0;
  }

  .popover-main .row.last-row {
    margin-bottom: 10px;
  }

  .popover-main .txt {
    display: inline-block;
    font-size: 12px;
    margin-right: 5px;
    width: 81px;
    text-align: right;
  }

  .popover-main .main-top {
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-main .el-external .txt {
    margin-bottom: 20px;
  }

  .main-bottom {
    margin: 15px 0 15px 0;
  }

  .main-bottom .jhqk {
    margin: 0 0 5px 20px;
  }

  .main-bottom .icon-shuaxin {
    margin-left: 20px;
    color: #1D9BD9;
  }

  .main-bottom .shuaxin {
    margin-left: 3px;
    color: #1D9BD9;
    cursor: pointer;
  }

  .main-bottom .jhqk_data {
    color: #F71818;
  }

  .popover-btn {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    padding: 0 15px;
  }
  .btn-box{
    text-align: center;
    padding-bottom: 10px;
    margin-top: 10px;
  }
  .btn-box .popover-btn{
    margin: 15px 0;
  }
  .tab{
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 7px;
    height: 30px;
    border-bottom: 1px solid #90CCE8;
    display: flex;
  }
  .tab .tab-item{
    flex: 1;
    line-height: 30px;
    text-align: center;
    color: #666666;
    margin-bottom: -1px;
    cursor: pointer;
  }
  .tab .tabActive{
    border: 1px solid #90CCE8;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid #F0FAFF;
    /*border-bottom: 2px solid #ffffff;*/
    margin-bottom: -1px;
  }
</style>
<style>
  .transfer .el-tabs__header {
    border-bottom: 1px solid #90CCE8;
  }

  .reason-input .el-input .el-input__inner{
    width: 280px !important;
  }
  .transfer .el-tabs__nav {
    padding-left: 15px;
    margin-top: 10px;
  }

  .transfer .el-tabs__item {
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    font-size: 12px;
    color: #333333;
  }

  .transfer .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border: 1px solid #90CCE8;
    border-bottom: 1px solid #F0FAFF;
    border-radius: 5px 5px 0 0;
    color: #1476CC;
  }

  .transfer .el-input {
    font-size: 12px;
    width: auto;
  }

  .transfer .el-select .el-input__inner {
    width: 150px;
    height: 30px;
  }

  .transfer .short_select {
    margin-left: 6px;
  }

  .transfer .short_select .el-input__inner {
    width: 121px;
  }

  .transfer .el-input__inner {
    width: 150px;
    height: 30px;
  }

  .el-select-dropdown__item {
    font-size: 12px;
  }

</style>
