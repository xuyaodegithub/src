<template>
    <div class="distribute-leaflets">             <!-- -----派单-  大块--- -->
      <div class="main-block-top">
        <div class="question-block">
          <div class="question">
            <div class="question-left"><span class="typeface">主叫号码</span></div>
            <div class="question-right">
              <el-input type="text" v-model="number" size="small" class="input-style"></el-input>
            </div>
          </div>
          <div class="question top5">
            <div class="question-left"><span class="typeface">联系人</span></div>
            <div class="question-right">
              <el-input type="text" v-model="contentName" size="small" class="input-style"></el-input>
            </div>
          </div>
          <!--<div class="question top5">-->
            <!--<div class="question-left"><span class="typeface">预约开始时间</span></div>-->
            <!--<div class="question-right">-->
              <!--<el-date-picker-->
                <!--v-model="valueStart"-->
                <!--type="datetime"-->
                <!--placeholder="选择日期时间">-->
              <!--</el-date-picker>-->
            <!--</div>-->
          <!--</div>-->
          <div class="question top5">
            <div class="question-left"><span class="typeface">客户星级</span></div>
            <div class="question-right">
              <el-input type="text" v-model="star" size="small" class="input-style"></el-input>
            </div>
          </div>
        </div>
        <div class="question-block left10">
          <div class="question">
            <div class="question-left"><span class="typeface">业务号码</span></div>
            <div class="question-right">
              <el-input type="text" v-model="businessNumberNow" size="small" class="input-style"></el-input>
            </div>
          </div>
          <!--<div class="question top5">-->
            <!--<div class="question-left"><span class="typeface">主联系电话</span></div>-->
            <!--<div class="question-right">-->
              <!--<el-input type="text" v-model="pre_2" size="small" class="input-style"></el-input>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="question top5">-->
            <!--<div class="question-left"><span class="typeface">预约结束时间</span></div>-->
            <!--<div class="question-right">-->
              <!--<el-date-picker-->
                <!--v-model="valueOver"-->
                <!--type="datetime"-->
                <!--placeholder="选择日期时间">-->
              <!--</el-date-picker>-->
            <!--</div>-->
          <!--</div>-->

          <div class="question top5">
            <div class="question-left"><span class="typeface">故障现象大类</span></div>
            <div class="question-right">
              <el-select v-model="bigValue" placeholder="请选择" visible-change @change="changeSmall()">
                <el-option
                  v-for="item in queryFaultPhenomenon"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="question top5">
            <div class="question-left"><span class="typeface">故障现象小类</span></div>
            <div class="question-right">
              <el-select v-model="smallValue" placeholder="请选择">
                <el-option
                  v-for="item in smallFaultKind"
                  :key="item.smallValue"
                  :label="item.smallName"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="question top5">
            <div class="question-left"><span class="typeface">是否服务承诺区域</span></div>
            <div class="question-right">
              <el-input type="text" v-model="promiseAreaQuery.result" size="small" class="input-style"></el-input>
            </div>
          </div>
        </div>
        <div class="question-block left10">
          <div class="question">
            <div class="question-left"><span class="typeface">专线编号</span></div>
            <div class="question-right">
              <el-input type="text" v-model="specialLineNumber" size="small" class="input-style"></el-input>
            </div>
          </div>
          <!--<div class="question top5">-->
            <!--<div class="question-left"><span class="typeface">备联系电话</span></div>-->
            <!--<div class="question-right">-->
              <!--<el-input type="text" v-model="pre_2" size="small" class="input-style"></el-input>-->
            <!--</div>-->
          <!--</div>-->
          <div class="question top5">
            <div class="question-left"><span class="typeface">品牌标识</span></div>
            <div class="question-right">
              <el-input type="text" v-model="identification" size="small" class="input-style"></el-input>
            </div>
          </div>
          <div class="question top5">
            <div class="question-left"><span class="typeface">操作员工号</span></div>
            <div class="question-right">
              <el-input type="text" v-model="stuffId" size="small" class="input-style"></el-input>
            </div>
          </div>
          <div class="question top5">
            <div class="question-left"><span class="typeface">是否紧急</span></div>
            <div class="question-right">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
          </div>
        </div>
      </div>
      <div class="main-block-center">
        <div class="question top5">
          <div class="question-left"><span class="typeface">智能组网</span></div>
          <div class="question-right">
            <el-select v-model="knowledgeValue" placeholder="请选择">
              <el-option
                v-for="(item,index) in queryInternetActivityByCity"
                :key="index"
                :label="item.activityContent"
                :value="item.activityContent">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="question top5">
          <div class="question-left"><span class="typeface">故障地址</span></div>
          <div class="question-right">
            <el-input placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="question top5">
          <div class="question-left"><span class="typeface">备注</span></div>
          <div class="question-right">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3}"
              placeholder="请输入内容"
              v-model="remarks">
            </el-input>
          </div>
        </div>
        <div class="question top5">
          <div class="question-left"><span class="typeface">预处理信息</span></div>
          <div class="question-right">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3}"
              placeholder="请输入内容"
              v-model="recordingLogNow"
              >
            </el-input>
          </div>
        </div>
      </div>
      <div class="main-block-bottom">
        <el-button @click="turnSendTicketActions('2')">预处理归档</el-button><el-button @click="turnSendTicketActions('3')">归档后回访</el-button><el-button @click="turnSendTicketActions('1')">工单派发</el-button>
        <p style="color: #F44848;text-align: left;margin-top: 20px">
          宽带维修时限：24小时内修复
        </p>
        <p style="color: #F44848;text-align: left">
          温馨提醒：城区百兆以上宽带客户：可享受夜间修障，最晚可预约至20:00，具体上门时间以外线联系为准。
      </p>
      </div>
  </div>
</template>

<style scoped>
  /*字体相关---*/
  .plate-title{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .small-title{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
    margin-left:10px; /*通用字距离左边默认为10px 修改额外添加 */
  }
  .smallface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
  }
  .smallface2{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    line-height:24px;
    color:#333;
    text-align:center;
    display: block;

  }

  .blue{
    color:#33A0FF;
  }

  .top5{margin-top:5px;}
  .left4{  margin-left:4px;  }
  .floatleft{  float:left;  }


  .lh18{  line-height:18px;  }
  .lh24{  line-height:24px;  }

  /*字体相关---完*/

  /* 颜色相关----*/

  /* 颜色相关----完*/


  /* 公共----*/
  .left10{  margin-left:10px;  }
  .right10{  margin-right:10px;  }
  .width87{ width:87px; }
  .width105{ width:105px; }
  .height24{height:24px;}


  .distribute-leaflets{
    flex:1;
    padding:25px 45px 0px 58px;

    display: flex;
    flex-direction:column;
    /*justify-content:center;*/
    /*align-items: center;*/
  }

  .main-block{
    flex:1;
    /*background:#42d885;*/

    display:flex;
    flex-direction:column;
  }

  .main-block-top{
    flex:190;
    display:flex;
    flex-direction:row;
  }
  .question-block{
    flex:1;
    display:flex;
    flex-direction:column;
  }
  .question{
    flex:1;
    display: flex;
    flex-direction:row;
  }
  .question-left{
    flex:72;
    background:#fff;

    display: flex;
    align-items: center;
    justify-content:flex-end;

  }
  .question-right{
    flex:180;
    margin-left:10px;
    background:#fff;

    display: flex;
    align-items: center;

  }
  .main-block-bottom .question-left{
    flex:50;
    background:#fff;

    display: flex;
    align-items: center;
    justify-content:flex-end;

  }
  .main-block-bottom .question-right{
    flex: 500;
    margin-left:10px;
    background:#fff;

    display: flex;
    align-items: center;

  }
  .main-block-center .question-left{
    flex:50;
    background:#fff;

    display: flex;
    align-items: center;
    justify-content:flex-end;

  }
  .main-block-center .question-right{
    flex: 500;
    margin-left:10px;
    background:#fff;

    display: flex;
    align-items: center;

  }
  .input-style{
    width:100%;
  }

  .main-block-center{
    flex:280;
  }
  .main-block-bottom{
    flex:152;
    width: 60%;
    margin-left: 20%;
    text-align: center;
  }




  .bk-change-normal1{
    background: url("../../../assets/img/linearBg.jpg") center top repeat;
  }



</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        pre_1:'',pre_2:'',pre_3:'',pre_4:'',pre_5:'',
        pre_6:'',pre_7:'',pre_8:'',pre_9:'',pre_10:'',
        pre_11:'',pre_12:'',

        number:'',
        businessNumberNow:'',
//        预约开始时间
        startData:'',
        specialLineNumber:'',
        star:'',
        valueStart:'',
        valueOver:'',
        stuffId:'',
        identification:'',
        isOrNo:'',
//      备注
        remarks:'',

        pre_datetime_start:'',
        pre_datetime_end:'',
        checked: false,
        contentName:'',
        checked2:'',
        checked3:'',
        bigValue:'',
        smallValue:'',
        pre_remark:'',
        pre_msg:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        knowledgeValue: '',
        recordingLogNow: ''
      };
    },
    computed:{
      ...mapGetters([
        'queryFaultPhenomenon',
        'smallFaultKind',
        'queryInternetActivityByCity',
        'recordingLog',
        'personMessage',
        'callNumber',
        'businessCallNumber',
        'accountBundle',
        'enterCase',
        'promiseAreaQuery'
      ])
    },
    created(){
      this.bigValue='';
      this.queryFaultPhenomenonActions();
      this.queryInternetActivityByCityActions();
      this.queryIBroadbandValueAddByCityActions();
      this.promiseAreaQueryActions();
      this.number=this.callNumber;
      this.businessNumberNow=this.businessCallNumber;
      this.contentName=this.personMessage.accountName;
      this.specialLineNumber=this.personMessage.circuitNumber;
      this.recordingLogNow=this.recordingLog;
      this.star=this.accountBundle.star;
      const date = new Date();
      this.valueStart=date;
      this.valueOver=date.getTime() + 3600 * 1000 * 24;
      this.stuffId=this.enterCase.accountCode;
      this.identification=this.accountBundle.accBrand;
    },
    activated(){
    },
    methods: {
      ...mapActions([
        'popoverAlert',
        'queryFaultPhenomenonActions',
        'changeSmallKind',
        'queryInternetActivityByCityActions',
        'queryIBroadbandValueAddByCityActions',
        'sendTicketActions',
        'promiseAreaQueryActions'
      ]),
      changeSmall(){
        this.changeSmallKind(this.bigValue)
        this.smallValue='';
      },
      turnSendTicketActions(data){
        let item = {
          receptFlag:'1',
          urgent:'',
          name:'',
          remark:'',
          btnKey:'',
          bigName:'',
          bigValue:'',
          smallName:'',
          smallValue:''
        };
        item.urgent=this.checked;
        item.name=this.personMessage.accountName;
        item.remark=this.recordingLogNow;
        item.btnKey=data;
        item.bigName=this.smallValue.bigName;
        item.bigValue=this.smallValue.bigValue;
        item.smallName=this.smallValue.smallName;
        item.smallValue=this.smallValue.smallValue;
        console.log(item)
        this.sendTicketActions(item);
      },
      qqBootSmsTurn(){
          this.popoverAlert('vQqBootSms')
      },
      routingModeSelectionTurn(){
          this.popoverAlert('vRoutingModeSelection')
      }



    }
  };
</script>
