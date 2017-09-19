<template>
    <div class="package-line">
        <div class="ivr" v-if="!isTouchLocusChangeShape" v-bind:style="homePageBorderTopNone">
          <div class="item-head bk-change-normal" v-bind:style="homePageBorderTb+homePageBkNormal">
            <span><i class="iconfont icon-icon-copy-copy"></i>IVR关联信息</span>
          </div>
          <div class="item-body item-ivr-body">
            <div class="item-body-list item-ivr-body-list">
              <span class="title">关联账号:</span><span v-if="getKdAccountByCallNum" @click="freshSystem(getKdAccountByCallNum)" style="color: #1d90e6; cursor: pointer">{{getKdAccountByCallNumReturn(getKdAccountByCallNum)}}  (宽带)</span>
            </div>
            <div class="item-body-list item-ivr-body-list">
              <span class="title">来电预判:</span>{{getUserOperateTraceQueryData.data}}
            </div>
            <div class="item-body-list item-ivr-body-list">
              <span class="title">身份校验状态:</span>
              {{lastCallStatus()}}
            </div>
            <div class="item-body-list item-ivr-body-list">
              <span class="title">他网关联身份证号: </span>{{identificationCard()}}
            </div>
          </div>
        </div>

        <div class="lastCall" v-if="!isTouchLocusChangeShape" v-bind:style="homePageBorderTopNone">
          <div class="item-head bk-change-normal" v-bind:style="homePageBorderTb+homePageBkNormal">
            <span><i class="iconfont icon-icon-copy-copy"></i>上一通会话足迹</span>
          </div>

          <div class="item-body item-lastCall-body">
            <div v-if="!lastCallDetail" class="item-body-list item-lastCall-list">
              <span class="title">未查到上一通会话足迹</span>
            </div>
            <div v-if="lastCallDetail">
              <div class="item-body-list item-lastCall-list">
                <span class="title">呼入时间：</span>{{lastCallDetail.actualStartDate}}<span></span>
              </div>
              <div class="item-body-list item-lastCall-list">
                <span class="title">呼入号码：</span><span>{{lastCallDetail.contactValue}}</span>
              </div>
              <div class="item-body-list item-lastCall-list">
                <span class="title">接话工号：</span><span>{{lastCallDetail.staffIdA}}</span>
              </div>
              <div class="item-body-list item-lastCall-list" v-if="lastCallDetail.actualStartDate && lastCallDetail.actualEndDate">
                <span class="title">通话时长：</span>
                <span>
                  {{(new Date(lastCallDetail.actualEndDate.replaceAll(/-/,"/")).getTime()-new Date(lastCallDetail.actualStartDate.replaceAll(/-/,"/")).getTime())/1000}}秒
                </span>
              </div>
              <div class="item-body-list item-lastCall-list">
                <span class="title">满意度：</span>
                <span v-if="lastCallDetail.score=='1'">非常满意</span>
                <span v-if="lastCallDetail.score=='2'">满意</span>
                <span v-if="lastCallDetail.score=='3'">对客服代表不满意</span>
                <span v-if="lastCallDetail.score=='4'">对其他不满意</span>
                <span v-if="!lastCallDetail.score">未调查</span>
              </div>
              <div style="height: 80px" v-for="(item,key) in recordingId" v-if="recordingId">
                <div class="item-body-list item-lastCall-list">
                  <span class="title">业务号码: </span><span>{{item.businessNum}}</span>
                </div>
                <div class="item-body-list item-lastCall-list">
                  <span class="title">话务小结: ({{key+1}})</span><span>{{item.callBigType}}-{{item.callSubType}}</span>
                </div>
              </div>
              <!--<div class="item-body-list item-lastCall-list">-->
                <!--<span class="title">业务号码：</span><span v-if="telephoneSummary[0]">{{telephoneSummary[0].businessNum}}</span>-->
              <!--</div>-->
              <!--<div class="item-body-list item-lastCall-list" v-if="telephoneSummary">-->
                <!--<span class="title">话务小结：</span><span v-for="item in telephoneSummary" v-if="item.actionNum=='话务小结'">{{telephoneSummary.businessNum}}</span>-->
              <!--</div>-->
            </div>
            </div>
        </div>

        <div class="touchLocus" v-bind:style="homePageBorderTopNone" v-bind:class="{touchLocusChangeShape: isTouchLocusChangeShape}">
          <div class="item-head bk-change-normal touchLocus-item-head" v-bind:style="homePageBorderTb+homePageBkNormal">
            <span><i class="iconfont icon-icon-copy-copy"></i>接触轨迹</span>
            <div class="search">
              <input placeholder="搜索接触轨迹" v-model="message" @keyup.enter="searchLocus">
              <i class="el-icon-search" @click="searchLocus"></i>
            </div>
            <div class="header-right">
              <i class="iconfont icon-shang" v-on:click="touchLocusChange($event)"></i>
            </div>
          </div>
          <div class="item-body item-touchLocus-body">
            <div class="tab">
              <div class="tab-head">
                <div class="tabHead-item" v-on:click="tabActive($event)" v-bind:class="{ headActive: !isHeadActive }">营销接触</div>
                <div class="tabHead-item" v-on:click="tabActive($event)" v-bind:class="{ headActive: isHeadActive }">服务接触</div>
              </div>
              <div class="tab-body">
                <div class="tabBody-item active">
                  <div class="tabBody-item-list" v-for="items in channelContactSearch" v-if="items.type == showData">
                    <p><span v-if=""></span><span class="title">{{items.channel | channelFilter}}</span><span>（{{items.account}}）</span></p>
                    <p><span>{{verificationCode(items.note)}}</span></p>
                    <!--<p><span>{{items.note}}</span></p>-->
                    <p><span class="font-pray">{{items.dealTime}}</span></p>
                    <!--<p><span class="font-pray" v-if="items.status == '成功'">办理成功</span></p>-->
                    <!--<p><span class="font-pray" v-if="items.status == '失败'">不办理</span></p>-->
                    <div class="line"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'
    import vCalculatorContent from '../tool/CalculatorContent.vue'
    export default{
        data() {
            return{
              isHeadActive: true,
              isTouchLocusChangeShape: false,
              touchLocusChangeDom: {
                height: '640px'
              },
              showData: '1',
              message:'',
              searchResult : []
            }
        },
        created(){
//            this.$store.state.page.PackageLine.channelContactSearch = this.$store.state.page.PackageLine.channelContact;
        },
        methods: {
          ...mapActions([
            'contentSinger'
          ]),
          getKdAccountByCallNumReturn(item){
            if(item){
              if(item.itemVOS[0]['netWorkNum']=='N'){
                this.$notify.error({
                  title: '错误',
                  duration: 0,
                  message: '发现神秘N请截图联系程序员'+item
                });
              }else{
                return item.itemVOS[0]['netWorkNum'];
              }
            }else{
              return '';
            }
          },
          tabActive: function (event) {
            if(event.target.innerHTML=='营销接触'){
              this.showData='2'
            }else{
              this.showData='1'
            }
            if(event.target.getAttribute('class')=='tabHead-item'){
              this.isHeadActive= !this.isHeadActive;
            }else{

            }

          },
          freshSystem(data){
              if(data){
                this.contentSinger(data.itemVOS[0]['netWorkNum']);
              }else{

              }
          },
          verificationCode(item){
            if(item.indexOf('【请勿泄露验证码，任何索取行为均涉嫌诈骗】')>=0){
                if(this.desensitization==true){
                  return '【请勿泄露验证码，任何索取行为均涉嫌诈骗】'+'****'+item.split('【请勿泄露验证码，任何索取行为均涉嫌诈骗】')[1].substring(4);
                }else{
                  return item;
                }
            }else if(item.indexOf('验证码')>=0){
              if(this.desensitization==true){
                return item.split('验证码：')[0]+'验证码'+'****'+item.split('验证码：')[1].substring(6);
              }else{
                return item;
              }
            }else{
              return item;
            }
          },
          lastCallStatus(){
            let ivrFlowListStr = this.ivrFlowListStr;
            let flowData = {};
//	            ivrFlowListStr = '宽带|15355408319|关联宽带|身份证验证|1~';
            if (!ivrFlowListStr || ivrFlowListStr=='') {
                return;
            }
            let ivrFlowList = [];

            if (ivrFlowListStr.substr(ivrFlowListStr.length-1) == '~') {
              ivrFlowListStr = ivrFlowListStr.substr(0, ivrFlowListStr.length-1);
            }
            let ivrIdentifyPassMap = {};
            if (ivrFlowListStr && ivrFlowListStr!='') {
              while (ivrFlowListStr.substr(ivrFlowListStr.length-1) == '~') {
                ivrFlowListStr = ivrFlowListStr.substr(0, ivrFlowListStr.length-1);
              }
              let ivrFlowListArray = ivrFlowListStr.split('~');

              let findOnePassFlag = false;


              for (let i=0; i<ivrFlowListArray.length; i++) {
                let flowDataArray = ivrFlowListArray[i].split('|');
                flowData.NUMBERTYPE = flowDataArray[0];  //号码类型
                flowData.NUMBER = flowDataArray[1];  //业务号码
                flowData.KD_SOURCE = flowDataArray[2];  //宽带来源
                flowData.USER_OPERATE = flowDataArray[3];  //用户操作
                flowData.OPERATE_RESULT = flowDataArray[4];  //操作结果
                ivrFlowList[ivrFlowList.length] = flowData;
                if (flowDataArray[4] == '1' && !findOnePassFlag) {  //验证通过
                  findOnePassFlag = true;
                  ivrIdentifyPassMap.NUMBERTYPE = flowDataArray[0];
                  ivrIdentifyPassMap.NUMBER = flowDataArray[1];
                }
              }
            }
            if (ivrIdentifyPassMap.NUMBER && ivrIdentifyPassMap.NUMBER!='') {
              return '已校验('+flowData.USER_OPERATE+')';
            }else{
                return '';
            }
          },
          identificationCard(){
            let ivrFlowListStr = this.ivrFlowListStr;
            let flowData = {};
//	            ivrFlowListStr = '宽带|15355408319|关联宽带|身份证验证|1~';
            if (!ivrFlowListStr || ivrFlowListStr=='') {
                return;
            }
            let ivrFlowList = [];

            if (ivrFlowListStr.substr(ivrFlowListStr.length-1) == '~') {
              ivrFlowListStr = ivrFlowListStr.substr(0, ivrFlowListStr.length-1);
            }
            let ivrIdentifyPassMap = {};
            if (ivrFlowListStr && ivrFlowListStr!='') {
              while (ivrFlowListStr.substr(ivrFlowListStr.length-1) == '~') {
                ivrFlowListStr = ivrFlowListStr.substr(0, ivrFlowListStr.length-1);
              }
              let ivrFlowListArray = ivrFlowListStr.split('~');

              let findOnePassFlag = false;


              for (let i=0; i<ivrFlowListArray.length; i++) {
                let flowDataArray = ivrFlowListArray[i].split('|');
                flowData.NUMBERTYPE = flowDataArray[0];  //号码类型
                flowData.NUMBER = flowDataArray[1];  //业务号码
                flowData.KD_SOURCE = flowDataArray[2];  //宽带来源
                flowData.USER_OPERATE = flowDataArray[3];  //用户操作
                flowData.OPERATE_RESULT = flowDataArray[4];  //操作结果
                ivrFlowList[ivrFlowList.length] = flowData;
                if (flowDataArray[4] == '1' && !findOnePassFlag) {  //验证通过
                  findOnePassFlag = true;
                  ivrIdentifyPassMap.NUMBERTYPE = flowDataArray[0];
                  ivrIdentifyPassMap.NUMBER = flowDataArray[1];
                }
              }
            }
            if (ivrIdentifyPassMap.NUMBER && ivrIdentifyPassMap.NUMBER!='') {
              let card = this.followData.strIdCard.replaceAll(/\*/g,'X');
              console.log('this.followData.strIdCard');
              console.log(this.followData.strIdCard);
              return card;
            }else{
                return '';
            }
          },
          getUserOperateTraceQueryData: function () {
              if(this.getUserOperateTraceQuery.optTraces[0].context!=''){
                  let data = this.getUserOperateTraceQuery.optTraces[0].context;
                  return data;
              }else{
                  let data = '';
                  return data;
              }
          },
          touchLocusChange: function (event) {
            this.isTouchLocusChangeShape = !this.isTouchLocusChangeShape;
//            if($('.touchLocus').css('height')=='299px'){
//              $('.touchLocus').css('height','100%');
//            }else{
//              $('.touchLocus').css('height','299px');
//            }
//            $('.tab-body .active').removeClass('active');
//            let oldBigHeight = parseInt($('.package-line').css('height').substring(0,$('.package-line').css('height').length-2));
            if(event.target.getAttribute('class')=='iconfont icon-shang'){
              event.target.setAttribute('class','iconfont icon-xia');

//              let height = oldHeight+100+'px'
              let oldHeight = parseInt($('.tabBody-item').css('height').substring(0,$('.tabBody-item').css('height').length-2));
              $('.tabBody-item').css('height',oldHeight+330+'px')
//              $('.tabBody-item').css('height',oldHeight+330+'px')
            }else{
              let oldHeight = parseInt($('.tabBody-item').css('height').substring(0,$('.tabBody-item').css('height').length-2));
              event.target.setAttribute('class','iconfont icon-shang');
              $('.tabBody-item').css('height',oldHeight-330+'px')
            }
          },
          channelContactChange: function (item,value) {
//            let result = [];
//            if(!this.message){
//              return value;
//            }
//
//            searchString = this.message;
//            result = value.filter(function(item){
//              if(item.note.indexOf(searchString) !== -1){
//                return item;
//              }
//            });

            return value;
          },
          searchLocus: function () {
            this.$store.state.page.PackageLine.channelContactSearch = [];
            let sourceChannel = ['1','2'];
            let mirrorChannel = ['营业厅','流量管家'];
            for(let obj of this.channelContact){

              if(sourceChannel.indexOf(obj.channel) == -1 || sourceChannel.length !== mirrorChannel.length){
                  console.log('轨迹渠道出错')
                return val;
              }else {
                var channelMirror = mirrorChannel[sourceChannel.indexOf(obj.channel)]
              }
//              switch (obj.type){
//                case '1':
//                    obj.type = '服务接触';
//                    break;
//                case '2':
//                    obj.type = '营销接触';
//                    break;
//                default:
//                    console.log('轨迹类型错误！')
//              }

              let str = obj.note + obj.dealTime+ obj.status + obj.account + channelMirror;
                if(str.indexOf(this.message) != -1){
                    console.log('搜索成功')
                  this.$store.state.page.PackageLine.channelContactSearch.push(obj)
                }
            }
            if(this.$store.state.page.PackageLine.channelContactSearch.length == 0){
                console.log('未搜索到目标');
              this.$store.state.page.PackageLine.channelContactSearch = this.channelContact;
            }
//         操作轨迹添加
            document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1037', '');
          }

        },
        filters:{
            channelFilter:function (val) {
              let sourceChannel = ['1','2'];
              let mirrorChannel = ['短厅','流量管家'];
              if(sourceChannel.indexOf(val) == -1 || sourceChannel.length !== mirrorChannel.length){
                  console.log('轨迹渠道错误')
                  return val;
              }else {
                return mirrorChannel[sourceChannel.indexOf(val)];
              }
            }
        },

        components: {
            vCalculatorContent
        },
        computed:{
          ...mapGetters([
            'homePageStyle',
            'homePageBorderTopNone',
            'homePageBorderTb',
            'homePageBkNormal',
            'channelContact',
            'lastCall',
            'token',
            'getUserOperateTraceQuery',
            'channelContactSearch',
            'callMouthList',
            'lastCallDetail',
            'telephoneSummary',
            'ivrFlowListStr',
            'desensitization',
            'getKdAccountByCallNum',
            'followData',
            'recordingId'
          ])
        }
    }
</script>
<style scoped>
    .sidebar-button{
      height: 24px !important;
      padding-top: 0;
      padding-bottom: 0;
      padding-right: 5px;
      padding-left: 5px;
      text-align: center;
      color: #1D9BD9 !important;
      font-size: 12px;
      border: 1px solid #1D9BD9;
    }
    .font-pray{
      color: #666666!important;
    }
    .item-head{
      width: auto;
      /*padding-left: 24px;*/
      padding-left: 8px;
      padding-right: 8px;
      height: 35px;
      line-height: 35px;
      position: relative;
    }
    .item-head span i{
      margin-right: 5px;
      font-size: 12px;
      color: #1793E6;
    }
    /*.item-head:before{*/
      /*content: '》';*/
      /*position: absolute;*/
      /*font-size: 18px;*/
      /*left: 16px;*/
      /*color: #67B7FF;*/
    /*}*/
    .item-head .header-right{
      float: right;
      width: auto;
      height: 35px;
      line-height: 35px;
    }
    .item-head .header-right span{
      font-size: 12px!important;
      color: #63ADE3!important;
      font-weight: normal;
      margin-right: 5px;
    }
    .item-head .header-right i{
      font-size: 16px!important;
      color: #63ADE3!important;
      font-weight: normal;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .item-head span{
      margin-left: 5px;
      font-size: 14px;
      font-weight: bolder;
      float: left;
    }
    .item-body{
      width: 100%;
    }
    .item-body-list{
      width: auto;
      height: 28px;
      padding-left: 5px;
      padding-right: 5px;
      line-height: 28px;
      font-size: 12px;
      clear: both;
      white-space: nowrap;/*一行显示*/
    }
    .ivr{
      height: 145px;
      flex-shrink: 0;
      border: solid 1px #B2DAFF;
      overflow: hidden;
    }
    .item-ivr-body{
      height: 90px;
    }
    .item-ivr-body-list{

    }
    .item-ivr-body-list .title{
      color: #999999;
      text-align: left;
    }
    .lastCall{
      width: auto;
      height: 200px;
      overflow: hidden;
      border: solid 1px #B2DAFF;
      margin-top: -1px;
      border-top: none;
    }
    .item-lastCall-body{
      height: 185px;
      overflow: auto;
    }
    .touchLocusChangeShape{
      margin-top: 0;
      height: 100% !important;
    }
    .touchLocus-item-head{
    }
    .item-touchLocus-body{
      width: 100%;
      height: 100%;
      margin-top: -50px;
    }
    .tab{
      width: 100%;
      margin-top: 5px;
      float: left;
      display: flex;
      flex-direction: column;
    }
    .tab-head{
      flex: 0 0 26px;
      margin-left: 19px;
      margin-right: 19px;
      border-radius: 5px;
      border: 1px solid #63ADE3;
      overflow: hidden;
      z-index: 20;
    }
    .tab-head .tabHead-item{
      width: 50%;
      height: 26px;
      line-height: 26px;
      text-align: center;
      float: left;
      font-size: 12px;
      cursor: pointer;
      color: #63ADE3;
    }
    .tab-head .headActive{
      color: #ffffff;
      background: #63ADE3;
    }
    .tab-body{
      flex: 1;
      position: relative;
      z-index: 10;
      padding-top: 42px;
      margin-bottom: 53px;
    }
    .tab-body .tabBody-item{
      width: 100%;
      height: 218px;
      margin-top: -30px;
      position: absolute;
      color: #333333;
      overflow: auto;
    }
    .tab-body .active{
    }
    .tabBody-item-list{
      width: auto;
      padding-left: 19px;
      padding-right: 19px;
      font-size: 12px;
      position: relative;
      padding-bottom: 12px;
    }
    .tabBody-item-list:before{
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: #67B7FF;
      border-radius: 50%;
      left: 19px;
    }
    .tabBody-item-list:after{
      content: '';
      position: absolute;
      width: 1px;
      height: 110%;
      background: #67B7FF;
      border-radius: 50%;
      top: 0;
      left: 25px;
    }
    .tabBody-item-list .line{
      width: auto;
      margin-left: 20px;
      margin-right: 20px;
      height: 10px;
      border-bottom: 1px solid #C6D9EA;
    }
    .tabBody-item-list p{
      margin-left: 10px;
      margin-bottom: 8px;
    }
    .tabBody-item-list span{
      margin-left: 10px;
    }
    .tabBody-item-list .title{
      color: #67B7FF;
    }
    ::-webkit-scrollbar
    {
      width: 6px;
      height: 16px;
      position: fixed;
      margin-right: 1px;
      background: none;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
      background: none;
    }
    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      background-color: #C5C7CB;
    }
    .search{
      width: 100px;
      height: 24px;
      margin-top: 4px;
      margin-left: 9px;
      border: 1px solid #D9E5EF;
      float: left;
      border-radius: 5px;
      font-size: 12px;
      position: relative;
      background: #ffffff;
    }
    .search input{
      width: 80px;
      height: 22px;
      float: left;
      margin-top: 1px;
      margin-left: 4px;
      outline:none;
      border: none;
      box-sizing: border-box;
    }
    .search i{
      position: absolute;
      right: 4px;
      top: 5px;
      color: #95989A;
      font-size: 14px;
    }
    .el-icon-search{
      cursor: pointer;
    }
    ::-webkit-input-placeholder {color: #999999;}
    ::-moz-placeholder {color: #999999;} /* firefox 19+ */
    :-ms-input-placeholder {color: #999999;} /* ie */
    :-moz-placeholder {color: #999999;}

    @media screen and (min-height:699px){
      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 383px;
        overflow: hidden;
      }

      .package-line{
        width: 100%;
        height: 640px;
        color: #333333;
        background: #ffffff;
      }

      .tab-body .tabBody-item{
        width: 100%;
        height: 218px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 295px;
        overflow: hidden;
      }
    }

    @media screen and (min-height:700px){

      .package-line{
        width: 100%;
        height: 585px;
        color: #333333;
        background: #ffffff;
      }
      .tab-body .tabBody-item{
        width: 100%;
        height: 170px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 250px;
        overflow: hidden;
      }
    }
    @media screen and (min-height: 750px) {

      .package-line{
        width: 100%;
        height: 625px;
        color: #333333;
        background: #ffffff;
      }
      .tab-body .tabBody-item{
        width: 100%;
        height: 208px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 280px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:800px){

      .package-line{
        width: 100%;
        height: 665px;
        color: #333333;
        background: #ffffff;
      }
      .tab-body .tabBody-item{
        width: 100%;
        height: 230px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 320px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:850px){

      .package-line{
        width: 100%;
        height: 715px;
        color: #333333;
        background: #ffffff;
      }
      .tab-body .tabBody-item{
        width: 100%;
        height: 300px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 370px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:900px){

      .package-line{
        width: 100%;
        height: 765px;
        color: #333333;
        background: #ffffff;
      }
      .tab-body .tabBody-item{
        width: 100%;
        height: 350px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 450px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:950px){
      .package-line{
        width: 100%;
        height: 640px;
        color: #333333;
        background: #ffffff;
      }
      .tab-body .tabBody-item{
        width: 100%;
        height: 328px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 430px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:1000px){
      .package-line{
        width: 100%;
        height: 750px;
        color: #333333;
        background: #ffffff;
      }
      .tab-body .tabBody-item{
        width: 100%;
        height: 318px;
        margin-top: -30px;
        position: absolute;
        color: #333333;
        overflow: auto;
      }
      .touchLocus{
        flex: 1;
        border: solid 1px #B2DAFF;
        margin-top: -1px;
        border-top: none;
        background: #ffffff;
        height: 440px;
        overflow: hidden;
      }
    }
</style>
