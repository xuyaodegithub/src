<template>
  <div class="intelligent-diagnosis">             <!-- -----智能诊断 块--- -->
    <!--<div class="btn-repeat bk-change-normal1"><span class="smallface2">重新检测</span></div>-->

    <div class="function-title">
      <i class="iconfont icon-xianxingshangsheng handling-img blue"></i>
      <span class="plate-title lh24 left4 floatleft">智能诊断</span>
      <div class="btn-repeat  bk-change-normal1"><span class="smallface2">重新检测</span></div>
    </div>

    <div class="function-content">
      <div class="diagnosis-block top10" v-if="showStatusText.icon">
        <div class="diagnosis-block-left">
          <div class="diagnosis-icon">
            <i class="iconfont diagnosis-icon-img white" :class="iconFontStatus(showStatusText.text)" v-show="intelligentDiagnosisActions"></i>
          </div>
        </div>
        <div class="diagnosis-block-right">
          <span class="plate-title floatleft left5 lh30 red" >{{showStatusText.text}}</span>
        </div>
      </div>

      <div class="diagnosis-block top10" v-if="resultListLength(item)" v-for="(item,key) in queryBroadbandInfo.resultList" @key="key">
        <div class="diagnosis-block-left">
          <div class="diagnosis-icon">
            <i class="iconfont white" :class="iconFontStatus(item)" v-show="true"></i>
          </div>
        </div>
        <div class="diagnosis-block-center">
          <i class="iconfont diagnosis-completion-icon blue" :class="iconFontShowWay(key)" @click="ope_fttb(key)"></i>
          <div class="line-block" v-if="shrink_fttb===1">
            <div class="diagnosis-completion-line-short"></div>
            <div class="diagnosis-completion-line"></div>
          </div>
        </div>
        <div class="diagnosis-block-right">
          <div class="diagnosis-block-top-right-block">
            <span class="plate-title floatleft left5 lh20" >
              <span >{{detectionName(item)}}</span><span v-if="item.itemList">({{item.itemList.length}}项)：</span>
              <span class="smallface lh20">{{item.textDisplay}}</span>
            </span>
          </div>

          <div class="detailed-block" v-if="1<item.affiliation<7 && showStatus(key)" v-for="(itemSun,keySun) in item.itemList">
            <div class="diagnosis-block-right-block" :class="classReturn(itemSun).status">
              <i class="iconfont diagnosis-isnot-icon" :class="classReturn(itemSun).icon"></i>
              <div class="diagnosis-isnot-msg">
                <span class="smallface floatleft left5 lh28" v-show="true">{{itemSun.itemDesc}}</span>
              </div>
              <div class="diagnosis-isnot-msg-right">
                <span class="smallface floatleft  lh28" v-show="true">{{itemSun.itemResult}}</span>
                <div class="clickbutton2 bk-change-normal1" v-for="item in pressKey(itemSun.pressKey)" @click="pressKeyTurn(item)"><span class="smallface2">{{item}}</span></div>
              </div>
            </div>
          </div>

          <div class="detailed-block" v-if="item.affiliation>=7 && showStatus(key)">
            <div class="diagnosis-block-right-block" :class="">
              <el-radio-group v-model="radio" style="margin-top: 5px;margin-left: 5px" @change="radioChoose(item)">
                <el-radio :label="3">有路由</el-radio>
                <el-radio :label="6">无路由</el-radio>
              </el-radio-group>
            </div>

          </div>
        </div>
      </div>
      <div class="clickbutton  bk-change-normal1" v-if="showStatusText.icon">
        <span class="smallface lh28 left10 blue floatleft">继续检测</span>
        <i class="iconfont icon-yousanjiaoxing diagnosis-icon-img2 blue"></i>
      </div>

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
    color:#333;
    display:block;
    text-align:center;
    line-height:24px;
  }
  .smallface3{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    display:block;
    text-align:center;
    line-height:22px;
  }


  .lh40{  line-height:40px;  }
  .lh39{  line-height:39px;  }
  .lh30{  line-height:30px;  }
  .lh28{  line-height:28px;  }
  .lh24{  line-height:24px;  }
  .lh22{  line-height:22px;  }
  .lh18{  line-height:18px;  }

  /*字体相关---完*/

  /* 颜色相关----*/

  .color-ash{
    background:#F0F0F0;
  }
  .bg-blue{
    background:#F4FAFF;
    border:1px solid #67B7FF;
  }
  .color-red{
    background:#FFF9F3;
    border:1px solid #FA9126;
  }

  .red{
    color:#F44848;
  }
  .blue{
    /*color:#1476cc;*/
    color:#33A0FF;
  }

  .orange{
    color:#E57809;
  }
  .green{
    color:#10B03B;
  }
  .white{
    color:#ffffff;
  }

  /* 颜色相关----完*/


  /* 公共----*/
  .left10{  margin-left:10px;  }
  .left4{  margin-left:4px;  }
  .left5{  margin-left:5px;  }
  .top10{  margin-top:10px;  }
  .floatleft{  float:left;  }
  .floatright{  float:right;  }
  .width68{ width:68px; }
  .width80{ width:80px; }
  .width87{ width:87px; }
  .width100{ width:100px; }
  .height24{height:24px;}
  .height28{height:28px;}


  .intelligent-diagnosis{
    flex:1;

    display: flex;
    flex-direction:column;
  }

  .function-title{
    flex:42;
  }

  .function-content{
    flex:443;
    /*background:#888;*/
    overflow-y: auto;
    overflow-x:hidden;
    padding-right:2px;  /*防止跟滚动条冲突*/
  }

  .handling-img{
    float:left;
    font-size:20px;
    /*background:#1c8de0;*/
  }

  .btn-repeat{
    border:1px solid #67b7ff;
    border-radius:5px;
    float:right;
    /*margin-right:15px;*/
    cursor: pointer;
    width:68px;
    height:24px;
    /*margin-bottom:10px; !*作用于下面第一个独立小版块距离顶部10px不用额外设置一个margin-top*!*/

  }
 .diagnosis-block{
    width:calc(100% - 18px);
   padding:9px;
   /*margin-top:10px;*/
    float:left;
    background:#F0F8FE;
    border:1px solid #B2DAFF;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    position: relative;
  }


.diagnosis-block-left{
    /*width:32px;*/
    float:left;
  /*background: #000;*/

  }
  .diagnosis-icon{
    width:32px;
    height:32px;
    float:left;
    background:#33A0FF;
    text-align: center;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .diagnosis-icon i{
    line-height: 32px;
  }
  .diagnosis-icon-img{
    /*width:16px;*/
    /*height:16px;*/
    position: relative;
    float:left;
    margin-left:8px;
    margin-top:8px;
    font-size:16px;
    /*background:#888;*/
  }
  .diagnosis-icon-img2{
    /*width:16px;*/
    /*height:16px;*/
    position: relative;
    float:left;
    margin-left:8px;
    margin-top:5px;
    font-size:16px;
    /*background:#888;*/
  }
.diagnosis-block-center{
  width:23px;
  height:auto;
  float:left;
  z-index: 10;
  position:relative;
  margin-left:10px;
  /*background:#ccc;*/
  }
 .diagnosis-completion-icon{
    width:14px;
    height:14px;
    float:left;
    margin-top:5px;
    cursor: pointer;
  }
.circular{
    border:1px solid #1c8de0;
    border-radius:10px;
  }
.line-block{
    /*transition: left 5s ease;*/
  }

.diagnosis-completion-line{
    width:15px;
    height:36px;
    float:left;
    /*background:#333;*/
    margin-left:7px;
    border-left:1px solid #B2DAFF;
    border-bottom:1px solid #B2DAFF;
  }

 .diagnosis-completion-line-short{
    width:15px;
    height:23px;
    float:left;
    /*background:#333;*/
    margin-left:7px;
    border-left:1px solid #B2DAFF;
    border-bottom:1px solid #B2DAFF;
  }
 .diagnosis-completion-line-long{
    width:15px;
    height:43px;
    float:left;
    /*background:#333;*/
    margin-left:7px;
    border-left:1px solid #B2DAFF;
    border-bottom:1px solid #B2DAFF;
  }
 .diagnosis-completion-line-long-three{
    width:15px;
    height:63px;
    float:left;
    /*background:#333;*/
    margin-left:7px;
    border-left:1px solid #B2DAFF;
    border-bottom:1px solid #B2DAFF;
  }

.diagnosis-block-right{
    width:calc(100% - 73px);
    float:left;
    /*background:#888;*/

  }
  .clickbutton2{
    border:1px solid #67b7ff;
    border-radius:3px;
    float:right;
    margin-top:4px;
    cursor: pointer;
    min-width: 60px;
    padding-right: 5px;
    padding-left: 5px;
  }
  .bk-change-normal1{
    background: url("../../../assets/img/linearBg.jpg") center top repeat;
  }

 .detailed-block .icon-zhengque{
   color: #10B03B;
  }

 /*.detailed-block .normal .floatleft{*/
   /*color: #10B03B;*/
  /*}*/

 .detailed-block .icon-jinggao{
   color: #E57809;
  }

  .detailed-block .timeOut .floatleft{
    color: #E57809;
  }

  .detailed-block .icon-cha{
    color: #F44848;
  }
  .detailed-block .abnormal .floatleft{
    color: #F44848;
  }

 .diagnosis-block-top-right-block{
    width:100%;
    float:left;
    padding-bottom: 10px;
    /*background:#2f5;*/
  }

 .diagnosis-block-right-block{
    width:100%;
    float:left;
     padding-bottom: 10px;
     position: relative;
    /*background:#2f5;*/
  }

 .diagnosis-block-right-block:after{
   content: '';
   position: absolute;
   width: 1px;
   height: 100%;
   background: #B2DAFF;
   left: -15px;
   top: -25px;
  }

 .diagnosis-block-right-block:before{
   content: '';
   position: absolute;
   width: 16px;
   height: 1px;
   background: #B2DAFF;
   left: -15px;
   top: 13px;
  }
  .account-correct{
    display:inline;
  }
  .account-error{
    display:inline;
  }
.diagnosis-isnot-icon{
    width:14px;
    height:14px;
    float:left;
    margin-top:6px;
    margin-left:3px;
    /*background:#1c8de0;*/
  }

 .diagnosis-isnot-msg{
    width:150px;
    float:left;
    /*background:#ddd;*/
   margin-left:5px;
  }
.diagnosis-isnot-msg-right{
    width:300px;
    float:left;
    /*background:#eee;*/
  }
.btn-query{
    width:48px;
    height:20px;
    border:1px solid #67b7ff;
    border-radius:3px;
    float:left;
    margin-top:3px;
    margin-left:20px;
    cursor: pointer;

  }
.btn-query2{
    width:70px;
    height:20px;
    border:1px solid #67b7ff;
    border-radius:3px;
    float:left;
    margin-top:3px;
    margin-left:20px;
    cursor: pointer;

  }
.btn-password{
    width:68px;
    height:20px;
    border:1px solid #67b7ff;
    border-radius:3px;
    float:left;
    margin-top:3px;
    margin-left:20px;
    cursor: pointer;
  }
 .btn-error-query{
    width:90px;
    height:20px;
    border:1px solid #67b7ff;
    border-radius:3px;
    float:left;
    margin-top:3px;
    margin-left:20px;
    cursor: pointer;
  }

  .btn-rate{
    width:68px;
    height:20px;
    border:1px solid #67b7ff;
    border-radius:3px;
    float:left;
    margin-top:3px;
    margin-left:20px;
    cursor: pointer;
  }

  .clickbutton{
    height:28px;
    width:87px;
    position: relative;
    float: left;
    margin-top:15px;
    border:1px solid #67B7FF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    cursor:pointer;
  }

  .triangle{
    /*width:0;*/
    /*height:0;*/
    /*border-top:10px solid transparent;*/
    /*border-left:14px solid red;*/
    /*border-bottom:10px solid transparent;*/

  }

</style>
<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        isLongShow:true,
        isLongShow3:true,
        shrink_account:0,
        shrink_route:0,
        shrink_fttb:0,
        shrink_lightcat:0,
        shrink_cat:0,
        keyValue:'',
        error_query_succ:false,
        error_query_fail:true,
        show0:'true',
        show1:'true',
        show2:'true',
        show3:'true',
        show4:'true',
        show5:'true',
        show6:'true',
        radio:'',
        longmsg:1,


      };
    },
    computed:{
      ...mapGetters([
        'personMessage',
        'packageCase',
        'queryRemoteSwitch',
        'rightStatus',
        'showStatusText',
        'queryBroadbandInfo'
      ])
    },
    activated(){
      this.intelligentDiagnosisActions({icon:'',text:''});
      this.detection();
    },
    methods: {
      ...mapActions([
        'queryRemoteSwitchActions',
        'intelligentDiagnosisActions',
        'routerChoose',
        'recordingLogActions'
      ]),
      pressKeyTurn(item){
        this.recordingLogActions(item);
      },
      classReturn(item) {
        let data = item.itemDesc+":"+item.itemResult;
        this.recordingLogActions(data);
        if (item.itemFlag=='1'){
          return {
            status: 'normal',
            icon: 'icon-zhengque',
          }
        }else if(item.itemFlag=='2'){
          return  {
            status: 'abnormal',
            icon: 'icon-cha',
          }
        }else if(item.itemFlag=='3') {
          return  {
            status: 'timeOut',
            icon: 'icon-jinggao',
          }
        }
      },
      radioChoose(item){
        if(this.radio==3){
          this.routerChoose([this.radio,item]);
          console.log('有路由')
        }else{
          this.routerChoose([this.radio,item]);
          console.log('无路由')
        }
      },
      pressKey(item){
        if(item){
          let data = item.substring(1,item.length-1);
          return data.split('】【');
        }
      },
      resultListLength(item){
        if(item.affiliation>1){
          return true;
        }else{
          return false;
        }
      },
//      图标选择
      iconFontStatus(item){
        if(typeof item == 'object'){
          if(item.affiliation==2){
            return 'icon-suo'
          }else if (item.affiliation>2 && item.affiliation<7) {
            if(this.queryBroadbandInfo.lineTypeDisplay=='光猫'){
              return 'icon-luyou1';
            }else if(this.queryBroadbandInfo.lineTypeDisplay=='猫') {
              return 'icon-router-other';
            }else{
              return 'icon-shuidianguanxian';
            }
          }else if(item.affiliation>6){
            return 'icon-luyou';
          }else{
          }
        }else{
          let data = item;
          if(data=='区域性故障'){
            return 'icon-dingwei';
          }else if (data=='欠费停机') {
            return 'icon-qian1';
          }else if (data=='不活动') {
            return 'icon-dingdian01';
          }else if (data=='已停机') {
            return 'icon-zliconstop01';
          }else if (data=='该用户已设置远程关机') {
            return 'icon-guanji';
          }else if (data=='在途故障单') {
            return 'icon-jishi';
          }else if (data=='在途故障单') {
            return 'icon-luyou';
          }
        }

      },
      detectionName(item){
        if(item.affiliation==2){
          return '账号密码状态'
        }else if (item.affiliation>2 && item.affiliation<7) {
          return this.queryBroadbandInfo.lineTypeDisplay;
        }else if(item.affiliation>6){
          return '用户端';
        }else{
        }
      },
      showStatus(key){
        let status= this['show'+key];
        return status;
      },
      iconFontShowWay(key){
        let status= this['show'+key]
        if(status){
          return 'icon-jianhao1';
        }else{
          return 'icon-jiahao';
        }
      },
      detection(){
//        this.queryRemoteSwitchActions();
        if (this.personMessage.status === '停机' || this.personMessage.status === '不活动') {
//          停机
          if(this.personMessage.status === '停机'){
            if(this.personMessage.lossSuspendFlag=='Y' || this.personMessage.initiativeSuspend=='Y' || this.personMessage.peccancySuspend=='Y'){
              this.intelligentDiagnosisActions({icon:'icon-zliconstop01',text:'已停机'});
            }else{
              if(this.personMessage.suspendFlag!='无'){
                this.intelligentDiagnosisActions({icon:'icon-qian1',text:'欠费停机'});
              }
            }
          }else{
//            不活动
            this.intelligentDiagnosisActions({icon:'icon-dingdian01',text:'不活动'});
          }
        } else if (this.onTheWayCause()) {
          this.intelligentDiagnosisActions({icon:'icon-jishi',text:'在途故障单'});
        } else if (this.areaCause()) {
          this.intelligentDiagnosisActions({icon:'icon-dingwei',text:'区域性故障'});
        } else {
            this.queryRemoteSwitchActions()
        }

      },
      onTheWayCause(){
        if(this.packageCase){
          if(this.packageCase['workOrder']){
            for(let item in this.packageCase['workOrder']){
              if(this.packageCase['workOrder'][item]['productName']=='故障单' && this.packageCase['workOrder'][item]['billNum']>0){
                return true;
              }else{
                return false;
              }
            }
          }else{
            return false;
          }
        }else{
          return false;
        }
      },
      areaCause(){
        if(this.packageCase){
          if(this.packageCase['workOrder']){
            for(let item in this.packageCase['workOrder']){
              if(this.packageCase['workOrder'][item]['productCode']=='ONE_LAYER_BROADBAND_FAULT_COMM_CAUSE_BUSI'){
                return true;
              }else{
                return false;
              }
            }
          }else{
            return false;
          }
        }else{
          return false;
        }
      },
      ope_account:function(){
        if(this.shrink_account==1){
          this.shrink_account=0;
        }else if(this.shrink_account==0){
          this.shrink_account=1;
        }
      },
      ope_route:function(){
        if(this.shrink_route==1){
          this.shrink_route=0;
        }else if(this.shrink_route==0){
          this.shrink_route=1;
        }
      },
      ope_fttb:function(num){
        if(this['show'+num]){
          this['show'+num]=false
        }else{
          this['show'+num]=true
        }
      },
      ope_lightcat:function(){
        if(this.shrink_lightcat==1){
          this.shrink_lightcat=0;
        }else if(this.shrink_lightcat==0){
          this.shrink_lightcat=1;
        }
      },
      ope_cat:function(){
        if(this.shrink_cat==1){
          this.shrink_cat=0;
        }else if(this.shrink_cat==0){
          this.shrink_cat=1;
        }
      }

    }
  };
</script>
